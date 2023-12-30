<script>
  import { upload } from "../services/github";

  let formData = {
    title: "",
    content: ""
  };

  $: formIsEmpty = formData.title === "" && formData.content === "";

  const handleSubmit = () => {
    if (formIsEmpty) return;

    // Make API call
    upload(formData.title, formData.content);

    // Clear the form
    formData = {
      title: "",
      content: ""
    };
  };
</script>

<form class="w-full max-w-md space-y-4" on:submit|preventDefault={handleSubmit}>
  <label class="flex flex-col items-start">
    <span class="text-sm font-medium mb-2 dark:text-gray-400">Title</span>
    <input
      bind:value={formData.title}
      class="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900"
      type="text"
    />
  </label>
  <label class="flex flex-col items-start">
    <span class="text-sm font-medium mb-2 dark:text-gray-400">Content</span>
    <textarea
      bind:value={formData.content}
      class="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 h-32"
    ></textarea>
  </label>
  <button disabled={formIsEmpty} class="btn-primary">Create</button>
</form>
