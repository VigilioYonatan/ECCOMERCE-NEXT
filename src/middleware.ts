import { NextRequestWithAuth, withAuth } from "next-auth/middleware";

import type { NextRequest } from "next/server";
// import { enviroments } from "./config/enviroments.config";
// // This function can be marked `async` if using `await` inside
export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req: NextRequestWithAuth) {
        // console.log(req.nextauth.token);
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log(token);

                return true;
            },
        },
    }
);

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/admin/:path*",
};
