<script lang="ts">
    import gameQueueStore from "$lib/stores/game";
    import type { Nullable, Player } from "$lib/types";
    import { z } from "zod";
    import PlayerSelect from "./PlayerSelect.svelte";
    import Button from "./ui/button/button.svelte";

    const players: Nullable<Player>[] = Array(4).fill(null)
    const playerSchema = z.object({
        id: z.number(),
        name: z.string()
    })
    const playersSchema = z.array(playerSchema).length(4);

    let isValid = false;
    
    $: {
        try {
            !!playersSchema.parse(players);
            isValid = true;
        } catch (error) {
            isValid = false;
        }
    };
</script>

<form class="flex flex-col items-start xl:flex-row gap-4" on:submit|preventDefault={() => {
    const parsedPlayers = playersSchema.parse(players);
    gameQueueStore.enqueueGroup(parsedPlayers);
    players.map(() => null);
    const emptyCourt = $gameQueueStore.courts.findIndex((game) => game === null);
    if (emptyCourt !== -1) {
        gameQueueStore.addNewGame(emptyCourt);
    }
}}>
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">
    {#each Array(4) as _, i}
        <PlayerSelect inputName={`player${i}`} onPlayerChange={(player) => { players[i] = player }}/>
    {/each}
    </div>
    <Button type="submit" disabled={!isValid}>Add Group</Button>
</form>