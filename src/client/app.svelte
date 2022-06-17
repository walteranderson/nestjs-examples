<script lang="ts">
  import { onMount } from 'svelte';

  let name = '';

  onMount(() => {
    fetch('/api/name')
      .then(response => response.json())
      .then(data => name = data.name);
  });

</script>

{#if name}
  <p>Hello {name}, from Svelte!</p>
{:else}
  <p>Loading</p>
{/if}
