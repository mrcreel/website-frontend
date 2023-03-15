import Link from 'next/link'
import clientPromise from "../lib/mongodb"

export default function Schools ( { schools } ) {
  return (
    <div>
      <h1>All Schools</h1>
      <ul>
        {
          schools.map( ( school, index ) => (
            <li key={ school._id }>
              <span>{ `${ index + 1 }) ` }
                <Link href={ `/api/schools/${ school.slug }` }>{ school.name }</Link>
              </span>
            </li>
          ) )
        }
      </ul>
    </div>
  )
}

export async function getServerSideProps () {
  try {
    const client = await clientPromise

    const db = client.db( "rawData" )

    const schools = await db
      .collection( "school" )
      .find( { inState: true } )
      .sort()
      .toArray()

    return {
      props: { schools: JSON.parse( JSON.stringify( schools ) ) },
    }

  } catch ( error ) {
    console.error( error )
  }
}