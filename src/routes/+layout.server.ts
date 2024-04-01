import type { LayoutServerLoad } from "./$types";

// Load is called on every page load, before the layout is rendered
export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.auth(),
  };
};
