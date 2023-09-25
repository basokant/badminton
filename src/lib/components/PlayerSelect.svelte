<script lang="ts">
    import * as Select from "$lib/components/ui/select";
    import playersStore from "$lib/stores/players";
    import type { Player } from "$lib/types";

    export let inputName: string;
    export let onPlayerChange: (player: Player) => void | undefined;

    function handleSelectedChange(selected: any) {
      const selectedPlayer = $playersStore.find((player) => player.id === selected.value);
      if (selectedPlayer && onPlayerChange) {
        onPlayerChange(selectedPlayer);
      }
    };
</script>

<Select.Root onSelectedChange={handleSelectedChange}>
    <Select.Trigger class="w-[220px]">
      <Select.Value placeholder="Select a player" />
    </Select.Trigger>
    <Select.Content class="max-h-[300px] overflow-scroll">
      <Select.Group>
        <Select.Label>Players</Select.Label>
        {#each [...$playersStore].sort((a, b) => a.name.localeCompare(b.name)) as player}
          <Select.Item 
            value={player.id}
            label={player.name}
          >
            {player.name}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name={inputName} />
  </Select.Root>