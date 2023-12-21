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
            //console.log(token, session);
            //session.user.id = token.sub;
            //console.log(session);

            session.user = token;
            return session;
        },
    }
    /*
    cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true,
            },
        },
    },
    
    session: {
        strategy: "jwt",
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    callbacks: {
        async session({ session, token }) {
            console.log(token);
            session.user = token.user;
            session.id = token.id;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    */
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }