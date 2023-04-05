import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { enviroments } from "~/config/enviroments.config";
import {
    checkUserEmailPassword,
    onAuthToDBUser,
} from "~/services/auth/database/auth.db";
import { UserEntity } from "~/services";
import { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Correo",
                    type: "email",
                    placeholder: "tu correo electronico",
                },
                password: {
                    label: "Password",
                    type: "password",
                    password: "Tu contraseña",
                },
            },
            async authorize(credentials, _req) {
                return await checkUserEmailPassword(
                    credentials!.email,
                    credentials!.password
                );
                // return null o {}
            },
        }),
        GithubProvider({
            clientId: enviroments.GITHUB_CLIENT_ID,
            clientSecret: enviroments.GITHUB_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    // Callbacks
    // jwt:{ Ya no es necesario
    // secret:process.env.TOKEN
    // },
    session: {
        maxAge: 2592000, // 30d
        strategy: "jwt",
        updateAge: 86400, //cada dia
    },
    pages: {
        signIn: "/",
        newUser: "/",
        // newUser: '/auth/register'
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token as any;

                // viene de github user.email
                switch (account.type) {
                    // github google
                    case "oauth":
                        token.user = await onAuthToDBUser(
                            user!.email || "",
                            user!.name || ""
                        );
                        // Crar usuario o verificar si existe en db
                        break;
                    case "credentials":
                        token.user = user;
                        break;

                    default:
                        break;
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.user = token.user;

            return session;
        },
        // async signIn({ user, account, profile, email, credentials }) { return true },
        // async redirect({ url, baseUrl }) { return baseUrl },
    },
};

export default NextAuth(authOptions);
