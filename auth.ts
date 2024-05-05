import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/db";
import { Adapter } from "next-auth/adapters";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Configure one or more authentication providers
  trustHost: true,
  // theme: {
  //   logo: "/logo.svg",
  // },
  adapter: PrismaAdapter(db) as Adapter,
  callbacks: {
    // session is the current session object from the client 
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },

  providers: [google, github],
});
