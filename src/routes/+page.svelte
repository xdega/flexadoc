<script lang="ts">
  import { goto } from "$app/navigation";
  import FeatureCard from "../components/FeatureCard.svelte";
  import { session } from "$lib/stores/auth";
</script>

<main class="flex-1 px-6">
  <section
    class="w-full py-12 md:py-12 lg:py-24 xl:py-24 bg-springwood dark:bg-gray-800 rounded-t-md"
  >
    <div class="container px-4 md:px-6 mx-auto">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="space-y-2 pb-0 sm:pb-4 md:pb-8">
          <h1
            class="uppercase text-2xl font-black sm:text-3xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300"
          >
            Welcome to Flexadoc
          </h1>
          <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Experience documentation made easy with our flexible platform featuring seamless
            Markdown or HTML support, an intuitive user interface, and powerful Git-backed version
            management.
          </p>
        </div>
        <div class="space-x-4">
          <button class="btn-primary" disabled={$session === null} on:click={() => goto("/create")}
            >Get Started</button
          >
        </div>
        <!-- {#if $session === null}
          <p class="font-bold text-red-400 dark:text-gray-400">Log In to create documents!</p>
        {/if} -->
      </div>
    </div>
  </section>

  <section class="w-full pt-0 sm:pt-4 pb-36 bg-springwood dark:bg-gray-700 rounded-b-md">
    <div class="container px-4 md:px-6 mx-auto">
      <div id="features" class="grid gap-6 lg:grid-cols-3 items-start">
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
