import mongodb from 'mongodb';

const { MongoClient } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blogs';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, async (error, client) => {
  if (error) console.log(error);

  const db = client.db(databaseName);

  const users = await db.collection('users').insertMany([
    {
      username: 'username1',
      name: 'name1',
    },
    {
      username: 'username2',
      name: 'name2',
    }])
    .catch((error) => { console.log(error); })

  const usersIDs = users.insertedIds;

  const posts = await db.collection('posts').insertMany([
    {
      tittle: 'title1',
      content: 'content1',
      ownerID: usersIDs[0]
    },
    {
      tittle: 'title2',
      content: 'content2',
      ownerID: usersIDs[1]
    }])
    .catch((error) => { console.log(error); })

  const postsIDs = posts.insertedIds;

  db.collection('comments').insertMany([
    {
      content: 'comment1',
      ownerID: usersIDs[0],
      postID: postsIDs[1]
    },
    {
      content: 'comment2',
      ownerID: usersIDs[1],
      postID: postsIDs[0]
    }])
    .catch((error) => { console.log(error); });
});