import Head from "next/head";
import { Page, Text, Button } from "@geist-ui/core";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Artely</title>
        <meta name="description" content="Artely, where software is built" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Text h1>Artely</Text>
      <Button>Cool!</Button>
    </Page>
  );
}
