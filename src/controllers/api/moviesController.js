const db = require('../../database/models');
const sequelize = db.sequelize;



const moviesController = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                const response = {
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: "/movies",
                    },
                    data: movies
                };
                res.json(response);
            })
            .catch(error => {
                console.log("error", error);
            });
    },
    create: (req, res) => {
        db.Movie.create(req.body)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200,
                    created: 'ok'
                });
            })
            .catch(error => {
                console.log("error", error);
            });
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
        .catch(error => {
            console.log("error", error);
        });
    }
}
    
       
module.exports = moviesController;