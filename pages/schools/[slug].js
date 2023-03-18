import Link from "next/link"

import clientPromise from "../../lib/mongodb"
import Layout from "../../components/layout"

export default function School ( { school } ) {
  return (
    <Layout>
      <div>
        <h1>{ school.name }</h1>
        <h2>
          Go to <Link href="/schools">Schools</Link>
        </h2>
      </div>
    </Layout>
  )
}

export async function getServerSideProps ( req, res ) {

  try {
    const client = await clientPromise
    const db = client.db( "rawData" )

    const { slug } = req.query
    const school = await db
      .collection( "school" )
      .findOne( { slug } )

    return {
      props: { school: JSON.parse( JSON.stringify( school ) ) }
    }
  } catch ( error ) {
    console.error( error )
    throw new Error( error ).message
  }
}
