<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Tooltip from "$lib/components/ui/tooltip";
    import type { Player } from "$lib/types";
    import { Button } from "./ui/button";
    
    export let player: Player;
</script>

<Tooltip.Root open={true} openDelay={0} closeOnEscape={false} closeOnPointerDown={false}>
    <Tooltip.Trigger asChild let:builder>
        <Button builders={[builder]} variant="outline" class="bg-transparent focus:bg-transparent hover:bg-transition border-0">
            <Avatar.Root class="w-7 h-7">
                <Avatar.Fallback>{player.name.charAt(0)}</Avatar.Fallback>
            </Avatar.Root>
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content sideOffset={4} transitionConfig={{ duration: 100 }}>
        <p>{player.name}</p>
    </Tooltip.Content>
</Tooltip.Root>