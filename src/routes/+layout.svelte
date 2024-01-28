<script>
  import "../app.css";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import githubMark from "$lib/images/github-mark.svg";

  import { supabase } from "$lib/services/supabase";

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

  async function signOutWithGitHub() {
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
    <a class="flex items-center justify-center" href="/"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 text-blue-600 dark:text-gray-300"
        ><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line
          x1="4"
          x2="4"
          y1="22"
          y2="15"
        ></line></svg
      ><span class="sr-only">Flexadoc</span></a
    >
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a
        class="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
        href="#features"
      >
        Features
      </a><a
        class="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
        href="#features"
      >
        Contact
      </a>
      <a
        class="flex items-center text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
        on:click={signInWithGitHub}
        href=""
      >
        <img
          class="inline-block mr-1"
          height="15px"
          width="15px"
          src={githubMark}
          alt="Github Logo"
        /> Log In
      </a>
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
