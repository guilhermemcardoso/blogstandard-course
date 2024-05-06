import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { getContent, getSeo } from "../../utils/postMocks";
import clientPromise from "../../lib/mongodb";

export default withApiAuthRequired(async function handler(req, res) {
  const { user } = await getSession(req, res);
  const client = await clientPromise;
  const db = client.db("blogstandard");
  const userProfile = await db.collection("users").findOne({
    auth0Id: user.sub,
  });

  if (!userProfile?.availableTokens) {
    res.status(403);
    return;
  }

  const { topic, keywords } = req.body;

  if (!topic || !keyword) {
    res.status(422);
    return;
  }

  if (topic.length > 80 || keyword.length > 80) {
    res.status(422);
    return;
  }

  const postContent = getContent(topic, keywords);
  const { title, metaDescription } = getSeo(topic, keywords);

  await db.collection("users").updateOne(
    {
      auth0Id: user.sub,
    },
    {
      $inc: {
        availableTokens: -1,
      },
    }
  );

  const post = await db.collection("posts").insertOne({
    postContent,
    title,
    metaDescription,
    topic,
    keywords,
    userId: userProfile._id,
    created: new Date(),
  });

  res.status(200).json({ postId: post.insertedId });
});
