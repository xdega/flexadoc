<script lang="ts">
  import FormCreate from "../../components/FormCreate.svelte";
</script>

<main class="flex-1">
  <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div class="container px-4 md:px-6 mx-auto">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="space-y-2">
          <h1
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl dark:text-gray-300"
          >
            Create New Document
          </h1>
          <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Start your document by filling out the form below.
          </p>
        </div>
        <FormCreate />
      </div>
    </div>
  </section>
</main>
