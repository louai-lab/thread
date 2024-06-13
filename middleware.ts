// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   publicRoutes: ["/", "/api/webhok/clerk"],
//   ignoredRoutes: ["/api/webhook/clerk"],
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // publicRoutes: ["/", "/api/webhok/clerk"],
  // ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
