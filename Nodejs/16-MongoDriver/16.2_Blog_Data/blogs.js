import mongodb from 'mongodb';

const { MongoClient } = mongodb;

// //* one document from users collection
// const user = {
//   _id: 'user_id1',
//   name: 'name1',
//   username: 'username1'
// };

// //* one document from posts collection
// const post = {
//   _id: 'post_id1',
//   title: 'title1',
//   content: 'content1',
//   ownerID: 'user_id1'
// };

// //* one document from comments collection
// const comment = {
//   content: 'content1',
//   postID: 'post_id1',
//   ownerID: 'user_id1'
// };

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blogs';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) console.log(error);

  const db = client.db(databaseName);

  let usersIDs = {};
  let postsIDs = {};

  db.collection('users').insertMany([
    {
      username: 'username1',
      name: 'name1',
    },
    {
      username: 'username2',
      name: 'name2',
    }])
    .then(result => { usersIDs = result.insertedIds })
    .catch((error) => { console.log(error); })

  db.collection('posts').insertMany([
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
    .then(result => { postsIDs = result.insertedIds })
    .catch((error) => { console.log(error); })

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
    .catch((error) => { console.log(error); })
});