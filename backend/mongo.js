const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://job-search-board:job-search-board@cluster0.auprpwn.mongodb.net/job-search-board?retryWrites=true&w=majority';

const createBookmarks = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('bookmarked').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };

  client.close();

  res.json(newProduct);
};

const getBookmarks = async (req, res, next) => {
  const client = new MongoClient(url);

  let bookmarks;

  try {
    await client.connect();
    const db = client.db();
    bookmarks = await db.collection('bookmarked').find().toArray();
  } catch (error) {
    console.log(error)
    return res.json({message: 'Could not retrieve products!'});
  };
  client.close();

  res.json(bookmarks);
};

exports.createBookmarks = createBookmarks;
exports.getBookmarks = getBookmarks;