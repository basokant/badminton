<script lang="ts">
    import type { Group } from "$lib/types";
    import { cn } from "$lib/utils";
    import { XCircle } from "lucide-svelte";
    import { slide } from "svelte/transition";
    import { Button } from "./ui/button";

    export let group: Group;
    export let groupNum: number;
    export let removeGroup: () => void | undefined;

    let isNextGroup = groupNum === 0;
</script>

<div class="flex items-center gap-2" transition:slide={{ duration: 200 }}>
    {groupNum + 1}.
    <div class={cn("group border-border border-[1px] py-[2px] px-2 rounded-lg flex items-center justify-between gap-2 flex-grow", isNextGroup ? "border-primary" : "")}>
        <span class="overflow-ellipsis">
            {#each group.players as player, i}
                {player.name}{i < group.players.length - 1? ' + ' : ''}
            {/each}
        </span>
        <Button 
            variant="ghost"
            size="sm"
            class="invisible group-hover:visible group-focus:visible w-8 h-8 p-1.5"
            aria-label="remove group"
            on:click={removeGroup}
        >
            <XCircle class="w-5" />
        </Button>
    </div>
</div>