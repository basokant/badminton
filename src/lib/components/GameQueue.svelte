<script lang="ts">
  import gameQueueStore from '$lib/stores/game';
  import GroupCard from './GroupCard.svelte';
</script>

<div class="grid grid-cols-1 gap-2 max-h-[73vh] overflow-scroll">
  {#each $gameQueueStore.queue as group, i}
    <GroupCard group={group} groupNum={i} removeGroup={() => gameQueueStore.removeGroup(i)} />
  {/each}
  {#if !$gameQueueStore.queue.length}
    <img class="animate-[pulse_3s_infinite] w-[200px] place-self-center jusitfy-self-center contrast-[0.03]" src="/badminton.png" alt="badminton dude">
    <span class="text-border place-self-center">
      No upcoming games
    </span>
  {/if}
</div>
