import clientPromise from "../../../lib/mongodb"
import { ObjectId } from 'mongodb'

export default async ( req, res ) => {
  try {
    const { slug } = req.query

    const client = await clientPromise

    const db = client.db( "rawData" )

    const school = await db
      .collection( "school" )
      .findOne( { slug } )

    res.json( school )


  } catch ( error ) {
    console.error( error )
    throw new Error( error ).message
  }
}
