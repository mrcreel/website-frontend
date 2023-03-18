import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'
import clientPromise from '../../lib/mongodb'
import utilStyles from '../../styles/utils.module.css'


export default function Schools ( { schools } ) {
  return (
    <Layout>
      <Head>
        <title>Schools | MS Prep Football Archive</title>
      </Head>
      <h2>All Schools</h2>
      <ul className={ utilStyles.list }>
        {
          schools.map( ( school, index ) => (
            <li className={ utilStyles.listItem } key={ school._id }>
              <Link href={ `/schools/${ school.slug }` }>{ school.name }</Link>
            </li>
          ) )
        }
      </ul>
    </Layout>
  )
}

export async function getStaticProps ( req, res ) {
  try {
    const client = await clientPromise
    const db = client.db( "rawData" )

    const schools = await db
      .collection( "school" )
      .find( { inState: true } )
      .sort()
      .toArray()

    return {
      props: { schools: JSON.parse( JSON.stringify( schools ) ) }
    }
  } catch ( error ) {
    console.error( error )
    throw new Error( error ).message
  }
}