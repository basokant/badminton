<script lang="ts">
    import gameQueueStore from '$lib/stores/game';
    import type { Game, Nullable } from '$lib/types';
    import PlayerAvatar from "./PlayerAvatar.svelte";
    import { Button } from './ui/button';
    export let game: Nullable<Game>;
    export let courtNum: number;

    function handleFinishGame() {
        gameQueueStore.finishGame(courtNum, false);
        gameQueueStore.addNewGame(courtNum);
    }
</script>


<div class="relative flex flex-col items-center justify-center gap-1 border-border rounded-md border-[1px] w-80 flex-1 text-border">
    <span class="absolute left-2 top-2">{ courtNum + 1 }</span>
    {#if game}
        {@const players = game.players}
            <div class="flex gap-6 dark items-center">
                <PlayerAvatar player={players[0]} />
                <svg aria-label="playing badminton birdie" class="animate-[spin_3s] w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 45" x="0px" y="0px"><path d="M6.43343,23.21727a.89765.89765,0,0,0-1.26979,0L3.576,24.80451a5.3879,5.3879,0,0,0,7.61964,7.61965l1.58724-1.58768a.89764.89764,0,0,0,0-1.2698Zm3.49238,7.93709a3.59214,3.59214,0,0,1-5.08006-5.08l.95279-.95235,5.07961,5.07962Z"/><path d="M33.50338,19.874l-7.12286-3.56165V10.51758a.898.898,0,0,0-.898-.898H19.68779L16.12614,2.49674a.8804.8804,0,0,0-.84887-.495.89755.89755,0,0,0-.79406.57834L7.49847,20.99382a.898.898,0,1,0,1.67932.63665L15.436,5.13235l2.66942,5.33886L10.11479,23.3795a.89744.89744,0,0,0,.12847,1.10757l1.26979,1.26979a.89744.89744,0,0,0,1.10756.12847l12.9083-7.99064,5.33886,2.66943L14.36965,26.82233a.898.898,0,1,0,.63665,1.67932l18.41377-6.98474a.89817.89817,0,0,0,.08331-1.64293Zm-8.91881-3.50684-12.30464,7.617-.264-.264,7.617-12.30464h4.95159Z"/><text x="0" y="51" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Chintuza</text><text x="0" y="56" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
                <PlayerAvatar player={players[1]} />
            </div>
            <div class="flex gap-5 dark items-center">
                <PlayerAvatar player={players[2]} />
                <Button size="sm" class="dark text-xs px-2 py-[2px]" variant="secondary" on:click={handleFinishGame}>Done</Button>
                <PlayerAvatar player={players[3]} />
            </div>
    {:else}
        <span>
            Court is open
        </span>
    {/if}
</div>