const router = require('express').Router();
const PC = require('../controllers/postController');

router.get('/user', PC.show);
router.post('/', PC.create);
router.delete('/:id', PC.delete);

module.exports = router;
