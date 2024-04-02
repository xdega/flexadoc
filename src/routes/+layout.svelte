<script lang="ts">
  import "../app.css";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import githubMark from "$lib/images/github-mark.svg";
  import githubMarkWhite from "$lib/images/github-mark-white.svg";
  import Logo from "$lib/images/flexadoc-logo.svg?raw";
  import { Theme } from "$lib/types/theme";
  import { theme } from "$lib/stores/theme";
  import Icon from "../components/Icon.svelte";
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";

  console.log($page.data.session);
</script>

<div class="bg-white-50 flex min-h-screen flex-col dark:bg-gray-900">
  <header class="flex h-14 items-center px-4 lg:px-6">
    <a
      class="flex items-center justify-center"
      href="/">
      <Icon
        class="fill-gray-700"
        path={Logo} />
      <h1 class="ml-2 text-xl font-bold text-gray-700 dark:text-gray-300">FLEXADOC</h1>
      <span class="sr-only">Flexadoc</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      {#if $page.data.session === null}
        <button
          class="flex items-center text-sm font-medium underline-offset-4 hover:underline dark:text-gray-300"
          on:click={() => signIn("github")}>
          <img
            class="mr-1 inline-block"
            height="15px"
            width="15px"
            src={$theme == Theme.Dark ? githubMarkWhite : githubMark}
            alt="Github Logo" /> Log In
        </button>
      {:else}
        <button
          class="flex items-center text-sm font-medium underline-offset-4 hover:underline dark:text-gray-300"
          on:click={() => signOut()}>
          Log Out ({$page.data.session?.user?.name ?? ""})
        </button>
      {/if}
    </nav>
    <div class="ml-8">
      <ThemeToggle />
    </div>
  </header>

  <main
    class="mx-4 flex flex-1 flex-col items-center rounded-md bg-springwood px-6 py-4 text-center md:py-8 dark:bg-gray-800">
    <slot />
  </main>

  <footer class="flex h-14 items-center px-4 lg:px-6">
    <p class="text-xs text-gray-500 dark:text-gray-400">© Flexadoc. All rights reserved.</p>
    <!-- TODO: Add appropriate social links later -->
    <!-- <nav class="ml-auto flex gap-4 sm:gap-6">
      <a
        class="text-xs underline-offset-4 hover:underline dark:text-gray-300"
        href="#">
        Twitter
      </a><a
        class="text-xs underline-offset-4 hover:underline dark:text-gray-300"
        href="#">
        Facebook
      </a><a
        class="text-xs underline-offset-4 hover:underline dark:text-gray-300"
        href="#">
        LinkedIn
      </a>
    </nav> -->
  </footer>
</div>
