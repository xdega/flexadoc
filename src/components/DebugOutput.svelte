<script>
  /**
   * @type {any}
   */
  export let hasData;
</script>

<div>
  {#if hasData}
    <h2 class="text-xl font-bold mb-2">Debug Output</h2>
    <pre>
      <slot />
    </pre>
  {:else}
    <p>No data available.</p>
  {/if}
</div>
