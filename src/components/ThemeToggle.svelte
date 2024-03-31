<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme";
  import { Theme } from "$lib/types/theme";

  let hidden = true;

  onMount(() => {
    const isDark = document.documentElement.classList.contains(Theme.Dark);
    theme.set(isDark ? Theme.Dark : Theme.Light);

    hidden = false;

    const matcher = window.matchMedia(`(prefers-color-scheme: ${Theme.Dark})`);
    matcher.addEventListener("change", handleChange);
    return () => matcher.removeEventListener("change", handleChange);
  });

  function handleChange(event: MediaQueryListEvent) {
    if (!localStorage.theme) {
      setMode(event.matches ? Theme.Dark : Theme.Light);
    }
  }

  function toggle() {
    theme.update((currentTheme) => (currentTheme === Theme.Dark ? Theme.Light : Theme.Dark));
    setMode($theme);
  }

  // Update the theme based on the current value of the theme store
  function setMode(value: Theme) {
    console.log("Setting theme to: ", value);
    theme.set(value);

    // Adds the "dark" class which tells Tailwind to apply the dark styles
    document.documentElement.classList.toggle(Theme.Dark, value === Theme.Dark);
    localStorage.theme = value;

    if (window.matchMedia(`(prefers-color-scheme: ${value})`).matches) {
      localStorage.removeItem("theme");
    }
  }
</script>

<svelte:head>
  <script>
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  </script>
</svelte:head>

<button
  class="{$theme === Theme.Dark
    ? 'ring-offset-gray-700 focus:ring-gray-400'
    : 'ring-offset-white focus:ring-yellow-400'} m-4 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
  class:hidden
  on:click={toggle}
>
  <!-- moon icon -->
  <svg
    class="h-5 w-5 text-gray-400"
    class:hidden={$theme === Theme.Light}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
  <!-- sun icon -->
  <svg
    class="h-5 w-5 text-yellow-400"
    class:hidden={$theme === Theme.Dark}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clip-rule="evenodd"
    />
  </svg>
</button>

<style global type="postcss">
  body {
    @apply dark:bg-slate-800;
  }
</style>
