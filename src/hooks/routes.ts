import { redirect, type Handle } from "@sveltejs/kit";

export const handleProtectedRoute: Handle = async ({ event, resolve }) => {
  const notLoggedIn = (await event.locals.auth()) === null;

  if (notLoggedIn && event.route.id?.includes("(protected)")) {
    throw redirect(302, "/");
  }

  return await resolve(event);
};
