const sequelize=require('../database');
const selectBook= async (req,res)=>{
    try{
        const data= `SELECT * FROM book`
        const resultDatat=await sequelize.query(data,)
        type:sequelize.QueryTypes.SELECT
        res.status(200).send(resultDatat)
    }
    catch(error){
        res.status(500).send('err')
    }

}
const InsertBook = async (req, res) => {
    try {
      const { title, price, description, stock, author } = req.body;
  
      const query = 
        `INSERT INTO book (title, price, description, stock, author)
        VALUES (:title, :price, :description, :stock, :author)`
      ;
  
      await sequelize.query(query, {
        replacements: {
          title: title,
          price: price,
          description: description,
          stock: stock,
          author: author
        },
        type: sequelize.QueryTypes.INSERT
      });
  
      res.status(201).send("Successful insert");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error inserting book");
    }
  };



module.exports={
    selectBook,
    InsertBook,

}