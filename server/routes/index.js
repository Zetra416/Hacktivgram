const router = require('express').Router();
const UC = require('../controllers/userController');
const postRouter = require('./postRouter');
const authentication = require('../middlewares/authentication');

router.post('/login', UC.login);
router.post('/register', UC.register);

router.use(authentication);
router.use('/posts', postRouter);

module.exports = router;
