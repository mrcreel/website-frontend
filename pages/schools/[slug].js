import clientPromise from "../../lib/mongodb"

export default function School ( { school } ) {

  return (
    <div>
      <h1>{ school.name }</h1>
    </div>
  )
}

export async function getServerSideProps ( req, res ) {
  try {
    const { slug } = req.query

    const client = await clientPromise

    const db = client.db( "rawData" )

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
