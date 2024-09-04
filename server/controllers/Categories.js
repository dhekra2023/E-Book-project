const sequelize=require('../database');
const selectCategories = async (req, res) => {
    try {
      const query = `SELECT DISTINCT * FROM Categories`; 
      const resData = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT, 
    });

      res.status(200).send(resData);
    } catch (error) {
      console.error(error); 
      res.status(500).send('Error fetching categories');
    }
  };

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
      res.status(500).send("Error inserting categorie");
    }
  };

  const deleteCategories = async (req, res) => {
    try {
        const { idCategories } = req.params;
        const query =` DELETE FROM Categories WHERE idCategories = ?`;

        await sequelize.query(query, {
            replacements: [idCategories],
            type: sequelize.QueryTypes.DELETE
        });

        res.status(200).send('Deleted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting the Categoris');
    }
};


const updateCategoris = async (req, res) => {
    try {
        
        const { idCategories,CategorieName,  description } = req.body;

        const query = 
        `UPDATE Categories
            SET   CategorieName = :CategorieName, description = :description
            WHERE idCategories = :idCategories`
        ;

        const [results] = await sequelize.query(query, {
            replacements: {idCategories,CategorieName , description }
        });


        res.status(200).send('Categoris updated successfully');
    } catch (error) {
        console.error('Error updating Categoris:', error);
        res.status(500).send('An error occurred while updating the Categoris');
    }
};




module.exports={
    selectCategories,
    InsertCategories,
    deleteCategories,
    updateCategoris
}