import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "your-cool-username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const res = await fetch("http://localhost:8080/auth/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password,
                    }),
                });
                const user = await res.json();
                console.log("USER OK", user);

                if (user) {
                    return user;
                } else {
                    return null;
                }
            },

        }),
    ],

    callbacks: {
        async jwt({token, user}) {
            return { ...token, ...user};
        },

        async session({ session, token }) {
            session.user = token;
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }