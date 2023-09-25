<script lang="ts">
    import playersStore from '$lib/stores/players';
    import type { Player } from '$lib/types';
    import { XCircle } from 'lucide-svelte';
    import { slide } from 'svelte/transition';
    import { Button } from './ui/button';

    function removePlayer(player: Player) {
        playersStore.removePlayer(player)
    }
</script>

<div class="grid grid-cols-1 max-h-full overflow-scroll">
  {#each $playersStore as player, i (i)}
    <div class="flex items-center group gap-3">
        <p transition:slide={{ duration: 200 }}>{player.name}</p>
        <Button variant="ghost" size="sm" class="invisible group-hover:visible group-focus:visible w-8 h-8 p-1.5" aria-label="remove group" on:click={() => removePlayer(player)}><XCircle class="w-5" /></Button>
    </div>
  {/each}
  {#if !$playersStore.length}
    <span class="text-border">
      No players
    </span>
  {/if}
</div>
