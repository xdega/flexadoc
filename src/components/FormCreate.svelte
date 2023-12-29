<script>
  import DebugOutput from "./DebugOutput.svelte";

  let formData = {
    title: "",
    content: ""
  };

  let storedData = {
    title: "",
    content: ""
  };

  let formIsEmpty = storedData.title === "" && storedData.content === "";

  const handleSubmit = () => {
    // Clone the form data to prevent direct reference
    const newData = { ...formData };

    // Store the form data locally
    storedData = newData;

    // Check if the form is empty and update the state
    formIsEmpty = storedData.title === "" && storedData.content === "";

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
  <button class="btn-primary">Create</button>
</form>

<DebugOutput hasData={!formIsEmpty}>
  {JSON.stringify(storedData, null, 2)}
</DebugOutput>
