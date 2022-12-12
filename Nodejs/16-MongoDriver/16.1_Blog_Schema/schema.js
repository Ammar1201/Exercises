
//* database - blogs

//* one document from users collection
const user = {
  _id: 'user_id1',
  name: 'name1',
  username: 'username1'
};

//* one document from posts collection
const post = {
  _id: 'post_id1',
  title: 'title1',
  content: 'content1',
  ownerID: 'user_id1'
};

//* one document from comments collection
const comment = {
  content: 'content1',
  postID: 'post_id1',
  ownerID: 'user_id1'
};