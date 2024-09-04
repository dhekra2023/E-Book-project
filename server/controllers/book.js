const sequelize=require('../database');

const selectBook= async (req,res)=>{
    try{
        const data= `SELECT DISTINCT * FROM book`;
        const resultDatat=await sequelize.query(data,{
            type: sequelize.QueryTypes.SELECT, 
        });
        res.status(200).send(resultDatat)
    }
    catch(error){
        res.status(500).send('err')
    }

}
const InsertBook = async (req, res) => {
    try {
    const { title, price, description, stock, author,img } = req.body;

    const query = 
        `INSERT INTO book (title, price, description, stock, author,img)
        VALUES (:title, :price, :description, :stock, :author,  :img)`
    ;

    await sequelize.query(query, {
        replacements: {
        title: title,
        price: price,
        description: description,
        stock: stock,
        author: author,
        img: img
        },
        type: sequelize.QueryTypes.INSERT
    });

    res.status(201).send("Successful insert");
    } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting book");
    }
};
const deleteBook = async (req, res) => {
    try {
        const { idbook } = req.params;
        const query =` DELETE FROM book WHERE idbook = ?`;

        await sequelize.query(query, {
            replacements: [idbook],
            type: sequelize.QueryTypes.DELETE
        });

        res.status(200).send('Deleted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting the book');
    }
};


const updateBook = async (req, res) => {
    try {
        
        const { title, price, description, stock, author,idbook,img } = req.body;

        const query = 
        `UPDATE book
            SET title = :title, price = :price, description = :description, stock = :stock, author = :author, img= :img
            WHERE idbook = :idbook`
        ;

        const [results] = await sequelize.query(query, {
            replacements: { title, price, description, stock, author, idbook, img }
        });


        res.status(200).send('Book updated successfully');
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send('An error occurred while updating the book');
    }
};




module.exports={
    selectBook,
    InsertBook,
    deleteBook,
    updateBook
}