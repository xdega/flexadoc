<script lang="ts">
  import { goto } from "$app/navigation";
  import FeatureCard from "../components/FeatureCard.svelte";
  import { session } from "$lib/stores/auth";
</script>

<main class="flex-1 px-6">
  <!-- Hero -->
  <section
    class="w-full rounded-t-md bg-springwood py-12 md:py-12 lg:py-24 xl:py-24 dark:bg-gray-800"
  >
    <div class="container mx-auto space-y-4 px-4 text-center md:px-6">
      <header class="space-y-2 pb-0 sm:pb-4 md:pb-8">
        <h1
          class="text-2xl font-black uppercase text-gray-600 sm:text-3xl md:text-3xl lg:text-4xl dark:text-gray-300"
        >
          Welcome to Flexadoc
        </h1>
        <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Experience documentation made easy with our flexible platform featuring seamless Markdown
          or HTML support, an intuitive user interface, and powerful Git-backed version management.
        </p>
      </header>
      <div class="space-x-4">
        <!-- TODO: This should be refactored to show a registration button if the user is not authed -->
        <button class="btn-primary" disabled={$session === null} on:click={() => goto("/create")}
          >Get Started</button
        >
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="w-full rounded-b-md bg-springwood pb-36 pt-0 sm:pt-4 dark:bg-gray-700">
    <div class="container mx-auto px-4 md:px-6">
      <div id="features" class="grid items-start gap-6 lg:grid-cols-3">
        <FeatureCard title="Flexible">
          <p class="text-gray-500 md:text-lg dark:text-gray-400">
            Our documentation platform caters to your preferred writing style, supporting both
            Markdown and HTML.
          </p>
        </FeatureCard>
        <FeatureCard title="Easy to Use">
          <p class="text-gray-500 md:text-lg dark:text-gray-400">
            With an intuitive interface and user-friendly features, our platform minimizes the
            learning curve for both beginners and experienced users.
          </p>
        </FeatureCard>
        <FeatureCard title="Version Management">
          <p class="text-gray-500 md:text-lg dark:text-gray-400">
            Built-in Git integration provides robust version control, allowing users to track,
            compare, and revert changes effortlessly.
          </p>
        </FeatureCard>
      </div>
    </div>
  </section>
</main>
