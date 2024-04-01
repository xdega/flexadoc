<script lang="ts">
  import { goto } from "$app/navigation";
  import FeatureCard from "../components/FeatureCard.svelte";
  import { session } from "$lib/stores/auth";
</script>

<!-- Hero -->
<section class="mb-8 md:mb-24">
  <h1
    class="mb-4 text-2xl font-black uppercase text-gray-600 sm:text-3xl md:text-4xl lg:text-4xl dark:text-gray-300">
    Welcome to Flexadoc
  </h1>
  <p
    class="mx-auto mb-6 max-w-[700px] px-4 text-lg text-gray-500 sm:text-xl md:text-2xl dark:text-gray-400">
    Experience documentation made easy with our flexible platform featuring seamless Markdown or
    HTML support, an intuitive user interface, and powerful Git-backed version management.
  </p>
  <button
    class="btn-primary"
    disabled={$session === null}
    on:click={() => goto("/create")}>
    Get Started
  </button>
</section>

<!-- Features -->
<section
  id="features"
  class="grid items-start gap-6 md:grid-cols-3">
  <FeatureCard
    title="Flexible"
    description="Our documentation platform caters to your preferred writing style, supporting both Markdown
    and HTML." />

  <FeatureCard
    title="Easy to Use"
    description="With an intuitive interface and user-friendly features, our platform minimizes the learning
    curve for both beginners and experienced users." />

  <FeatureCard
    title="Version Control"
    description="Git integration provides robust version control, allowing users to track, compare,
    and revert changes effortlessly." />
</section>
