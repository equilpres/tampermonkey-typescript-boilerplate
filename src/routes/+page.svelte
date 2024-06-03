<script lang="ts">
	import { onMount } from 'svelte';

	import Example from '#lib/components/Example.svelte';

	import { exampleStore } from '#lib/stores/example';

	onMount(() => {
		console.log(Meta.name);
	});
</script>

<span class="text-xl">
	{$exampleStore.text} x <Example />
</span>
