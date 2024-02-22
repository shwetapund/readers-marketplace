import {Book} from "./../model/books.js";

const bookApi = async (req,res)=>{
    const {cover, title, description, genre, publishDate, price, tags} = req.body;

    const newbooks = new Book({
        cover,
        title,
        description,
        genre,
        publishDate,
        price,
        tags
    })

    const savedBooks = await newbooks.save();

    res.json({
        success:true,
        data:savedBooks,
        message:"successfully added books"
    })
    
}
export {bookApi};