import Head from "next/head";
import Issues from "~screens/issues/Issues";
import MainLayout from "~screens/layout/MainLayout/MainLayout";

export default function IssuePage() {

  return (
    <>
      <Head>
        <title>
          Issues | Github
        </title>
      </Head>
      <MainLayout>
        <Issues />
      </MainLayout>
    </>
  )
}
