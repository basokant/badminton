<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as RadioGroup from "$lib/components/ui/radio-group";
</script>

<div class="px-10 py-7 flex flex-col gap-4">
  <div>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  </div>

  <Input type="email" placeholder="email" class="max-w-xs" />

  <RadioGroup.Root value="comfortable">
    <div class="flex items-center space-x-2">
      <RadioGroup.Item value="default" id="r1" />
      <Label for="r1">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroup.Item value="comfortable" id="r2" />
      <Label for="r2">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroup.Item value="compact" id="r3" />
      <Label for="r3">Compact</Label>
    </div>
    <RadioGroup.Input name="spacing" />
  </RadioGroup.Root>
</div>