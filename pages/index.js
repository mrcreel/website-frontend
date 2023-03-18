import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"

function HomePage () {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home | MS Prep Football Archive</title>
      </Head>

      <h1 className="title">
        Go To <Link href="/schools/">Schools</Link>
      </h1>

    </Layout>
  )
}

export default HomePage
