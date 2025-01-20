import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("examRushDB");

        const collections = await db.listCollections().toArray();

        res.status(200).json({ collections });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to connect to the database." });
    }
}
