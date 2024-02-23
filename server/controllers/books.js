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

const getBooksApi = async (req,res)=>{
    const {_id} = req.params;
    const findBook = await Book.findOne({_id:_id})

    res.json({
        success:true,
        data:findBook,
        message:"successfully fetch book"
    })
}

const searchBooks = async (req,res)=>{
    const { que } = req.query;

    try{
    const searchBook = await Book.find({
        $or: [
            { title: { $regex: que, $options: 'i' } },
            { cover: { $regex: que, $options: 'i'} },
            { tags: { $regex: que, $options: 'i'} },
            { price: { $regex: que, $options: 'i'} },
            { description: { $regex: que, $options: 'i'} },
            { publishDate: { $regex: que, $options: 'i'} },
            { genre: { $regex: que, $options: 'i'} },
        ]
    })
    res.json({
        success:true,
        data:searchBook,
        message:"successfully search books"
    })
}
catch(err){
    res.json({
        success:false,
        message:err.message
    })
}
}
export { bookApi, updateBooksApi, getBooksApi, searchBooks};
