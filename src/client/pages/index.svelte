<script lang="ts">
  import { onMount } from 'svelte';

  const test: Record<string, string> = {
    test: 5,
  };

  let message = '';
  onMount(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((body) => {
        message = body.message;
      });
  });
</script>

<p>index page</p>
<p>{message}</p>
