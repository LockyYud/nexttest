import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// const credentials
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(req);
        const { username, password } = credentials;
        const data = {
          //   employeeID: username,
          //   password: password,
          employeeID: "23000000",
          password: "password",
        };
        const url = "https://magicpost-uet.onrender.com/api/auth/login";
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      // console.log(user?.accessToken);
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      // console.log(session.accessToken);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};
