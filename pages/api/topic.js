import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("examRushDB");

    if (req.method === "GET") {
        const { topic, collection } = req.query;

        if (!topic || !collection) {
            return res.status(400).json({ error: "Topic and collection are required" });
        }

        try {
            // Update query to find a document with the 'topic' field
            const data = await db.collection(collection).findOne({ topic });

            if (data) {
                // Successfully found the topic, send the response with content
                return res.status(200).json(data);
            } else {
                // Topic not found
                return res.status(404).json({ error: "Topic not found in the collection" });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return res.status(500).json({ error: "Server error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
