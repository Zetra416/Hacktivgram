const UM = require('../models').User;
const bcrypt = require('bcrypt');
const generateToken = require('../helpers/jwt');

class UserController {
  static register(req, res, next) {
    const {email, password, avatar} = req.body;

    UM.create({email, password, avatar})
    .then(data => {
      res.status(201).json(data)
    })
    .catch(error => {
      console.log(error, "ada error di register");
      next(error);
    })
  }

  static login(req, res, next) {
    const {email, password} = req.body;

    if (!req.body.email || !req.body.password) {
      next({name: 'UNAUTHORIZED'})
    }
    else {
      UM.findOne({where:{email}})
      .then(user => {
        if (!(bcrypt.compareSync(password, user.password))) {
          next({name: 'UNAUTHORIZED'})
        }
        else {
          const access_token = generateToken(user);
          const avatar = user.avatar;
          const email = user.email;
          res.status(200).json({access_token , avatar, email})
        }
      })
      .catch(error => {
        next(error)
      })
    }
  }

}

module.exports = UserController;
