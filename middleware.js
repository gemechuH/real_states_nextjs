export { default } from "next-auth/middleware";
// i went to sign in user only can se the saved properties and profile page
export const config = {
  matcher: ["/profile", "/properties/saved", "/properties/add", ],
};
