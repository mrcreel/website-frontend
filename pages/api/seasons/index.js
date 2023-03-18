import clientPromise from "../../../lib/mongodb"

export default async ( req, res ) => {
  try {
    const client = await clientPromise

    const db = client.db( "rawData" )

    const seasons = await db
      .collection( "season" )
      .sort()
      .toArray()

    res.json( seasons )

  } catch ( error ) {
    console.error( error )
    throw new Error( error ).message

  }
}