const router = require("express").Router();
const User = require("../models/user");
const Book = require("../models/book");
const { authenticateToken } = require("./userAuth");

//add book --admin
/*Experienced a problem while saving data through post man where I was getting validation error no data was getting saved in the database , solved it on postman by enabling content-type - application json*/
router.post("/add-book", authenticateToken, async (req, res) => {
 try {
    const { id } = req.headers;
    const user = await User.findById(id);
    if(user.role !== "admin"){
        return res.status(400).json({mesage: "You do not have authorization to perform this task"}); 
    }
    
    // const { url, title, author, price, desc, language } = req.body;
    const newBook = new Book({
        url: req.body.url,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        desc: req.body.desc,
        language: req.body.language,
    });
    console.log(req.body.url)

    const savedData = await newBook.save();
    res.send(savedData);
    res.status(200).json({mesage: "Book added successfully"}); 
 } catch (error) {
    console.log(error)   
    res.status(500).json({mesage: "Internal"});  
               
    }
});

//update-book
router.put("/update-book", authenticateToken, async (req, res) => {
    try {
       
       const { bookid } = req.headers;
       await Book.findByIdAndUpdate(bookid, {
           url: req.body.url,
           title: req.body.title,
           author: req.body.author, 
           price: req.body.price,
           desc: req.body.desc,
           language: req.body.language,
       });

       res.status(200).json({mesage: "Book updated successfully"}); 
    } catch (error) {
       res.status(500).json({mesage: "An error occured"});                 
       }
   });

module.exports = router;
