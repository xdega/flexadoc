// stores/auth.ts
import { derived, writable } from "svelte/store";
import { supabase } from "$lib/services/supabase";
import type { Session } from "@supabase/supabase-js"; // Importing the Session type from Supabase

export const session = writable<Session | null>(null);

supabase.auth.onAuthStateChange((_event, sessionUpdate) => session.set(sessionUpdate));

// Derived store to extract the username
export const username = derived(session, ($session) => {
  // Check if the user object and identities array exist and are not empty
  if (
    $session &&
    $session.user &&
    $session.user.identities &&
    $session.user.identities.length > 0
  ) {
    // Return the username
    return $session.user.identities[0].identity_data?.user_name ?? "";
  } else {
    // Return null or an empty string if there's no user session
    return "";
  }
});
