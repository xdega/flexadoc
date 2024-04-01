import { sequence } from "@sveltejs/kit/hooks";
import { handleProtectedRoute } from "./hooks/routes";
import { auth } from "./hooks/auth";

export const handle = sequence(auth.handle, handleProtectedRoute);
