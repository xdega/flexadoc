import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";

// Handle the auth callback
export const auth = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      //@ts-ignore
      session.access_token = token.accessToken;
      return session;
    },
    // JWT change -> session
  },
});
