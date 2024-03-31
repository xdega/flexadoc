<script lang="ts">
  export let title = "Feature";
</script>

<div class="text-card-foreground rounded-md border bg-white dark:bg-gray-700" data-v0-t="card">
  <div class="flex flex-col space-y-1 p-6">
    <h3
      class="text-xl font-bold uppercase leading-none tracking-tight text-gray-600 dark:text-gray-300"
    >
      {title}
    </h3>
  </div>
  <div class="p-6 pt-0">
    <slot />
  </div>
</div>
