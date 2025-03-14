"use client";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react"
import client from "../lib/apolloClient";


export default function ApolloProviderWrapper({ children }) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider >
        {children}
      </SessionProvider>
    </ApolloProvider>
  );
}