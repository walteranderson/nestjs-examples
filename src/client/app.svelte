<script lang="ts">
  import { onMount } from 'svelte';

  let message = '';

  onMount(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => message = data.message);
  });

</script>

{#if message}
  <p>{message}, from Svelte!</p>
{:else}
  <p>Loading</p>
{/if}
