import clientPromise from "../mongodb"

export default async function getAllSeasons ( req, res ) {

  try {
    const client = await clientPromise
    const db = client.db( "rawData" )

    const seasons = await db
      .collection( "season" )
      .toArray()

    return seasons

  } catch ( error ) {
    console.error( error )
  }
}