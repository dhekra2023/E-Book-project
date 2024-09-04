const sequelize=require('../database');
const selectCtegories= async (req,res)=>{
    try{
        const DATA= `SELECT * FROM Categories`
        const resDatat=await sequelize.query(DATA,)
        type:sequelize.QueryTypes.SELECT
        res.status(200).send(resDatat)
    }
    catch(error){
        res.status(500).send('err')
    }

}
const InsertCategories = async (req, res) => {
    try {
      const { CategorieName,  description } = req.body;
  
      const queryy = 
        `INSERT INTO Categories (CategorieName, description)
        VALUES (:CategorieName, :description)`
    ;
  
        await sequelize.query(queryy, {
        replacements: {
        CategorieName: CategorieName,
        description: description
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
    selectCtegories,
    InsertCategories,

}