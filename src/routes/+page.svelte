<script lang="ts">
  import { goto } from "$app/navigation";
  import FeatureCard from "../components/FeatureCard.svelte";
  import { session } from "$lib/stores/auth";
</script>

<main
  class="mx-4 flex flex-1 flex-col items-center justify-center rounded-md bg-springwood px-6 py-4 text-center md:py-8 dark:bg-gray-800">
  <!-- Hero -->
  <section class="mb-12">
    <h1
      class="mb-4 text-2xl font-black uppercase text-gray-600 sm:text-3xl md:text-3xl lg:text-4xl dark:text-gray-300">
      Welcome to Flexadoc
    </h1>
    <p class="mx-auto mb-6 max-w-[700px] px-4 text-gray-500 md:text-xl dark:text-gray-400">
      Experience documentation made easy with our flexible platform featuring seamless Markdown or
      HTML support, an intuitive user interface, and powerful Git-backed version management.
    </p>
    <button
      class="btn-primary"
      disabled={$session === null}
      on:click={() => goto("/create")}>Get Started</button>
  </section>

  <!-- Features -->
  <section
    id="features"
    class="grid items-start gap-6 md:grid-cols-3">
    <FeatureCard title="Flexible">
      <p class="text-gray-500 md:text-lg dark:text-gray-400">
        Our documentation platform caters to your preferred writing style, supporting both Markdown
        and HTML.
      </p>
    </FeatureCard>

    <FeatureCard title="Easy to Use">
      <p class="text-gray-500 md:text-lg dark:text-gray-400">
        With an intuitive interface and user-friendly features, our platform minimizes the learning
        curve for both beginners and experienced users.
      </p>
    </FeatureCard>

    <FeatureCard title="Version Management">
      <p class="text-gray-500 md:text-lg dark:text-gray-400">
        Built-in Git integration provides robust version control, allowing users to track, compare,
        and revert changes effortlessly.
      </p>
    </FeatureCard>
  </section>
</main>
