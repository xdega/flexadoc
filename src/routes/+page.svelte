<script>
  import { goto } from "$app/navigation";
  import FeatureCard from "../components/FeatureCard.svelte";
  import { session } from "$lib/stores/auth";
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/45W4R3E5toS
-->
<main class="flex-1">
  <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100 dark:bg-gray-800">
    <div class="container px-4 md:px-6 mx-auto">
      <div class="flex flex-col items-center space-y-4 text-center">
        <div class="space-y-2">
          <h1
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-700 dark:text-gray-300"
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
            >Create Document</button
          >
        </div>
        {#if $session === null}
          <p class="font-bold text-red-400 dark:text-gray-400">Log In to create documents!</p>
        {/if}
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-blue-200 dark:bg-gray-700">
    <div class="container px-4 md:px-6 mx-auto">
      <div id="features" class="grid gap-6 lg:grid-cols-3 items-start">
        <FeatureCard title="Flexible">
          <p class="text-gray-500 md:text-xl dark:text-gray-400">
            Our documentation platform caters to your preferred writing style, supporting both
            Markdown and HTML.
          </p>
        </FeatureCard>
        <FeatureCard title="Easy to Use">
          <p class="text-gray-500 md:text-xl dark:text-gray-400">
            With an intuitive interface and user-friendly features, our platform minimizes the
            learning curve for both beginners and experienced users.
          </p>
        </FeatureCard>
        <FeatureCard title="Powerful Version Management">
          <p class="text-gray-500 md:text-xl dark:text-gray-400">
            Built-in Git integration provides robust version control, allowing users to track,
            compare, and revert changes effortlessly.
          </p>
        </FeatureCard>
      </div>
    </div>
  </section>
</main>
