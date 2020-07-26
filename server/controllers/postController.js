'user strict';
const PM = require('../models').Post;
const UM = require('../models').User;

class PostController {
  static show(req, res, next) {
    console.log("masuk show");
    PM.findAll({
      include: [ UM ]
    })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      next(error)
    })
  }

  static create(req, res, next) {
    console.log(req.body);
    const {title, caption, img} = req.body;
    const UserId = req.userData.id;
    PM.create({ title, caption, img, UserId})
    .then(data => {
      res.status(201).json(data)
    })
    .catch(error => {
      console.log(error);
      next(error)
    })
  }

  static delete(req, res, next) {
    PM.destroy({where:{id: Number(req.params.id)}})
    .then(data => {
      if(data == 1) res.status(200).json({msg: 'Successfully delete post'})
      else next({name: 'DATA_NOT_FOUND'})
    })
    .catch(error => {
      next(error)
    })
  }
}

module.exports = PostController;
