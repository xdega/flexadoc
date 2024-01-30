<script lang="ts">
  import "../app.css";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import githubMark from "$lib/images/github-mark.svg";
  import githubMarkWhite from "$lib/images/github-mark-white.svg";
  import Logo from "$lib/images/flexadoc-logo.png";

  import { supabase } from "$lib/services/supabase";
  import { onMount } from "svelte";
  import { Theme } from "$lib/types/theme";
  import { theme } from "$lib/stores/theme";
  import { session, username } from "$lib/stores/auth";

  onMount(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // TODO: Temp for dev purposes
      console.log("Session: ", session);

      // TODO: Caonsider a hidden state until all the stores are loaded?
    });
  });

  async function signInWithGitHub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github"
    });

    if (error) {
      console.log(error);
      return;
    }

    // User successfully signed in with GitHub
    console.log("User successfully signed in with GitHub");
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      return;
    }

    // User successfully signed out with GitHub
    console.log("User successfully signed out with GitHub");
  }
</script>

<div class="flex flex-col min-h-screen bg-blue-50 dark:bg-gray-900">
  <header class="px-4 lg:px-6 h-14 flex items-center">
    <a class="flex items-center justify-center" href="/">
      <img src={Logo} alt="Flexadoc Logo" class="h-6 w-auto" />
      <h1 class="text-xl font-bold ml-2 text-gray-500 dark:text-gray-300">Flexadoc</h1>
      <span class="sr-only">Flexadoc</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a
        class="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
        href="#features"
      >
        Features
      </a>
      {#if $session === null}
        <button
          class="flex items-center text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
          on:click={signInWithGitHub}
        >
          <img
            class="inline-block mr-1"
            height="15px"
            width="15px"
            src={$theme == Theme.Dark ? githubMarkWhite : githubMark}
            alt="Github Logo"
          /> Log In
        </button>
      {:else}
        <button
          class="flex items-center text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
          on:click={signOut}
        >
          Log Out ({$username})
        </button>
      {/if}
    </nav>
    <div class="ml-8">
      <ThemeToggle />
    </div>
  </header>

  <slot />

  <footer class="px-4 lg:px-6 h-14 flex items-center bg-blue-100 dark:bg-gray-800">
    <p class="text-xs text-gray-500 dark:text-gray-400">© Flexadoc. All rights reserved.</p>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
        Twitter
      </a><a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
        Facebook
      </a><a class="text-xs hover:underline underline-offset-4 dark:text-gray-300" href="#">
        LinkedIn
      </a>
    </nav>
  </footer>
</div>
