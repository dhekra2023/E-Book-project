const router = require("express").Router();
const {selectBook, InsertBook}=require("./controllers/book");
const { selectCtegories, InsertCategories } = require("./controllers/Categories");
router.get("/",selectBook);
router.get('/get',selectCtegories)
router.post("/add",InsertBook);
router.post('/categorie',InsertCategories)

module.exports=router