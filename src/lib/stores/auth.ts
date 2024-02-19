// stores/user.ts
import { derived, writable } from "svelte/store";
import { supabase } from "$lib/services/supabase";
import type { Session } from "@supabase/supabase-js";

export const session = writable<Session | null>(null);

supabase.auth.onAuthStateChange((_event, sessionUpdate) => session.set(sessionUpdate));

// Derived store for username
export const username = derived(session, ($session) => {
  if ($session?.user) {
    return (
      $session.user.user_metadata?.username ??
      $session.user.identities?.[0]?.identity_data?.user_name ??
      null
    );
  } else {
    return null;
  }
});

// Derived store for provider tokens
export const provider = derived(session, ($session) => {
  if ($session) {
    return {
      providerToken: $session.provider_token,
      refreshToken: $session.refresh_token
    };
  } else {
    return {
      providerToken: null,
      refreshToken: null
    };
  }
});
