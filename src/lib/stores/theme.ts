import { writable } from "svelte/store";
import { Theme } from "$lib/types/theme"; // Adjust the path based on your file structure

// Initialize the store, possibly using system preferences or saved user settings
export const theme = writable<Theme>(Theme.Light);
