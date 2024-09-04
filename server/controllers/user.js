const sequelize=require('../database');
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const query = `INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
    await sequelize.query(query, {
      replacements: [firstName, lastName, email, password],
      type: sequelize.QueryTypes.INSERT
    });

    res.status(201).json('User registered successfully' );
  } catch (err) {
    res.status(500).json( 'Error registering user');
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Request Body:', req.body)

    const query = `SELECT * FROM user WHERE email = ?`;
    const [results] = await sequelize.query(query, {
      replacements: [email],
      type: sequelize.QueryTypes.SELECT,
    });
    console.log('Query Results:', results)

    const user = results;
    console.log('User Found:', user)
    if (user.password !== password) {
      return res.status(401).json('Invalid Password');
    }

    res.status(200).json('Login successful');
  } catch (err) {
    console.error('Error logging in user:'); 
    res.status(500).json('Error logging in user');
  }
};



module.exports={register,login}