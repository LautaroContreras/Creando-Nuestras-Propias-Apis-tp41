const db = require('../../database/models');
const sequelize = db.sequelize;



const moviesController = {
    'create': (req, res) => {
        db.Movie.create(req.body)
            .then(movie => {
                res.status(200).json({
                    status:200,
                    data:movie,
                    created:"ok"
                })
            })
    },
    delete:(req,res)=>{
        db.Movie.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(response =>{
            return res.json(response)
        })
    }
}
    
       
module.exports = moviesController;