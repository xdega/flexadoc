<script>
  /**
   * @type {any}
   */
  export let hasData;
</script>

<div class="w-full max-w-md rounded-md p-6 bg-slate-500">
  <h2 class="text-lg font-bold mb-2">Debug</h2>
  {#if hasData}
    <pre class="whitespace-pre-wrap text-left"><slot /></pre>
  {:else}
    <p>No data available.</p>
  {/if}
</div>
