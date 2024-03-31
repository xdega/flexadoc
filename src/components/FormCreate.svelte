<script lang="ts">
  import { upload } from "$lib/services/github";
  import { session, username, provider } from "$lib/stores/auth";
  import { dev } from "$app/environment";

  let formData = {
    title: "",
    content: "",
  };

  $: formIsEmpty = formData.title === "" && formData.content === "";
  $: hasSession = $session !== null;

  const handleSubmit = () => {
    if (formIsEmpty || !hasSession) return;

    const token = $provider.providerToken;

    if (token === null) {
      // If we get here, we may need to refresh the user's login/session
      console.error("No provider token found");
      return;
    }

    // Make API call
    upload(token!, $username, formData.title, formData.content);

    // Clear the form
    formData = {
      title: "",
      content: "",
    };
  };
</script>

<form class="w-full max-w-md space-y-4" on:submit|preventDefault={handleSubmit}>
  {#if $session == null}
    <p class="font-bold text-red-400 dark:text-gray-400">Log In to create documents!</p>
  {/if}
  {#if dev}
    <p>Provider Token: {$provider.providerToken}</p>
  {/if}
  <label class="flex flex-col items-start">
    <span class="mb-2 text-sm font-medium dark:text-gray-400">Title</span>
    <input
      bind:value={formData.title}
      class="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
      type="text"
    />
  </label>
  <label class="flex flex-col items-start">
    <span class="mb-2 text-sm font-medium dark:text-gray-400">Content</span>
    <textarea
      bind:value={formData.content}
      class="h-32 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
    ></textarea>
  </label>
  <button disabled={formIsEmpty || !hasSession} class="btn-primary">Create</button>
</form>
