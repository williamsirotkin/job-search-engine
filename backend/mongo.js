const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://job-search-board:job-search-board@cluster0.auprpwn.mongodb.net/job-search-board?retryWrites=true&w=majority';

const deleteBookmark = async (req, res, next) => {
  const email = req.body.email;
  const company = req.body.company;
  const client = new MongoClient(url);
  let bookmark;
  try {
    await client.connect();
    const db = client.db();
    db.collection('bookmarked').deleteOne({"email": email, "company": company});
  } catch (err) {
    const error = 'Something went wrong, could not find bookmark.' + email + company;
    return next(error);
  }
  res.status(200).json({ message: 'Deleted bookmark: ' + email + company});
};

const createBookmarks = async (req, res, next) => {
  const newBookmark = {
    email: req.body.email,
    company: req.body.company
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('bookmarked').insertOne(newBookmark);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };

  setTimeout(() => {client.close()}, 1500)

  res.json(newBookmark);
};

const getBookmarks = async (req, res, next) => {
  const client = new MongoClient(url);

  let bookmarks;

  try {
    await client.connect();
    const db = client.db();
    bookmarks = await db.collection('bookmarked').find({"email": req.body.email}).toArray();
  } catch (error) {
    console.log(error)
    return res.json({message: 'Could not retrieve products!'});
  };
  client.close();

  res.json(bookmarks);
};

const addCompany = async (req, res, next) => {
  const newCompany = {
    company: req.body.company
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('companies').insertOne(newCompany);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };

  setTimeout(() => {client.close()}, 1500)

  res.json(newCompany);
};
const getAddedCompanies = async (req, res, next) => {
  const client = new MongoClient(url);

  let addedCompanies;

  try {
    await client.connect();
    const db = client.db();
    addedCompanies = await db.collection('companies').find().toArray();
  } catch (error) {
    console.log(error)
    return res.json({message: 'Could not retrieve products!'});
  };
  client.close();

  res.json(addedCompanies);
};



exports.createBookmarks = createBookmarks;
exports.getBookmarks = getBookmarks;
exports.deleteBookmark = deleteBookmark;
exports.addCompany = addCompany;
exports.getAddedCompanies = getAddedCompanies;