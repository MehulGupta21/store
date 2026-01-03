import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", 
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/shop(.*)", // 👈 shop should be public
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    // Just check auth, DO NOT call protect()
    auth();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
