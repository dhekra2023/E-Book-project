const router = require("express").Router();
const {selectBook, InsertBook, deleteBook, updateBook,selectBookById}=require("./controllers/book");
const { selectCategories, InsertCategories, deleteCategories, updateCategoris } = require("./controllers/Categories");
const {register,login}=require('./controllers/user');
router.get("/",selectBook);
router.post("/getBookById",selectBookById)
router.get('/getCategories',selectCategories)
router.post("/addBook",InsertBook);
router.post('/categorie',InsertCategories);
router.delete('/deleteBook/:idbook',deleteBook);
router.delete('/deleteCategories/:idCategories',deleteCategories);
router.put('/updateCategorie',updateCategoris)
router.put('/updatebook',updateBook);



router.post('/register',register);
router.post('/login',login)


module.exports=router