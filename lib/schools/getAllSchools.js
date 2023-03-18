import clientPromise from "../mongodb"

export default async function getAllSchools () {
  try {

    const client = await clientPromise

    const db = client.db( "rawData" )

    const schools = await db
      .collection( "schools" )
      .find( { inState: true } )
      .sort()

    return schools

  } catch ( error ) {
    console.error( error )
  }
}