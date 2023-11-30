import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/lib/auth.config";
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
