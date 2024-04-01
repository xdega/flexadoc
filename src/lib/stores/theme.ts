import { writable } from "svelte/store";
import { Theme } from "$lib/types/theme";

// Default to light theme
export const theme = writable<Theme>(Theme.Light);
