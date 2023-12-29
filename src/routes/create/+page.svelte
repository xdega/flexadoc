<script>
  import FormCreate from "../../components/FormCreate.svelte";
</script>

<main class="flex-1">
  <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div class="container px-4 md:px-6">
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
        <!-- <form class="w-full max-w-md space-y-4">
          <label class="flex flex-col items-start">
            <span class="text-sm font-medium mb-2 dark:text-gray-400">Title</span>
            <input
              class="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900"
              type="text"
            />
          </label>
          <label class="flex flex-col items-start">
            <span class="text-sm font-medium mb-2 dark:text-gray-400">Content</span>
            <textarea class="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 h-32"
            ></textarea>
          </label>
          <button class="btn-primary">Create</button>
        </form> -->
        <FormCreate />
      </div>
    </div>
  </section>
</main>
