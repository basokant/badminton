<script>
    import playersStore from "$lib/stores/players";
    import { UserPlus } from "lucide-svelte";
    import { Button } from "./ui/button";
    import { Input } from "./ui/input";

    let playerName = ""

    function addPlayer() {
        playersStore.addPlayer(playerName);
        playerName = ""
    }
</script>

<form on:submit|preventDefault={addPlayer} class="flex gap-2">
    <Input bind:value={playerName} />
    <Button type="submit" disabled={playerName === ""} aria-label="add player"><UserPlus /></Button>
</form>