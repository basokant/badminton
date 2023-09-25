<script lang="ts">
  import Court from '$lib/components/Court.svelte';
  import GameQueue from '$lib/components/GameQueue.svelte';
  import GroupCreate from '$lib/components/GroupCreate.svelte';
  import PlayerCreate from '$lib/components/PlayerCreate.svelte';
  import Players from '$lib/components/Players.svelte';
  import { Separator } from '$lib/components/ui/separator';
  import gameQueueStore from '$lib/stores/game';
  import { ListOrdered, PlusSquare, Swords, Users } from 'lucide-svelte';
</script>

<head>
  <title>Badminton Drop In</title>
</head>
<div class="flex gap-5 min-w-screen min-h-screen max-h-screen p-5 py-7 justify-evenly">
  <div class="flex flex-col gap-2">
      <h2 class="text-xl font-bold flex gap-2 items-center">
        <Swords />
        Courts
      </h2>
    <div class="flex flex-col justify-between flex-grow">
    {#each $gameQueueStore.courts as court, i}
      <Court game={court} courtNum={i} />
    {/each}
    </div>
  </div>
  <Separator class="h-[92.9vh]" orientation="vertical" />
  <div class="flex-grow space-y-5">
    <div class="space-y-2">
      <h2 class="text-xl font-bold flex gap-2 items-center">
        <PlusSquare />
        Create Badminton Game
      </h2>
      <GroupCreate />
    </div>
    <Separator orientation="horizontal" />
    <div class="flex gap-5 flex-grow">
      <div class="space-y-3 flex-grow">
        <h2 class="text-xl font-bold flex gap-2 items-center">
          <ListOrdered />
          Upcoming Badminton Games
        </h2>
        <GameQueue />
      </div>
      <Separator class="h-[78.5vh]" orientation="vertical" />
      <div class="space-y-3 w-80 max-h-[69vh]">
        <h2 class="text-xl font-bold flex gap-2 items-center">
          <Users />
          Players
        </h2>
        <PlayerCreate />
        <Players />
      </div>
    </div>
  </div>
</div>
