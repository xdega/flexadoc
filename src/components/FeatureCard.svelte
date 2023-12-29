<script>
  export let title = "Feature";
</script>

<div
  class="rounded-md border bg-blue-100 dark:bg-gray-700 text-card-foreground shadow-sm"
  data-v0-t="card"
>
  <div class="flex flex-col space-y-1 p-6">
    <h3 class="text-2xl font-bold leading-none tracking-tight dark:text-gray-300 text-gray-600">
      {title}
    </h3>
  </div>
  <div class="pt-0 p-6">
    <slot />
  </div>
</div>
