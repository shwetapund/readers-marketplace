import { Book } from "./../model/books.js";

const bookApi = async (req, res) => {
  const { cover, title, description, genre, publishDate, price, tags } =
    req.body;

  const newbooks = new Book({
    cover,
    title,
    description,
    genre,
    publishDate,
    price,
    tags,
  });

  const savedBooks = await newbooks.save();

  res.json({
    success: true,
    data: savedBooks,
    message: "successfully added books",
  });
};

const updateBooksApi = async (req, res) => {
  const { _id } = req.params;
  const { cover, title, description, genre, publishDate, price, tags } =
    req.body;

    await Book.updateOne({ _id: _id },
    {
      $set: {
        cover,
        title,
        description,
        genre,
        publishDate,
        price,
        tags,
      },
    }
  );
  const updatebooks = await Book.findOne({ _id: _id });
  res.json({
    success: true,
    data: updatebooks,
    message: "successfully book update",
  });
};

export { bookApi, updateBooksApi };
