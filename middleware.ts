import { authMiddleware } from "@clerk/nextjs";

// with this middleware, entire application is protected. if you
// try to access it, middleware will redirect you to your sign Up page.
export default authMiddleware({
	publicRoutes: ["/"]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
