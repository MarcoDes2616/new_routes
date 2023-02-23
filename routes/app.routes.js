const { Router } = require("express");
const router = Router();





router.get('/users', (req, res) => {
    console.log('Esto es un GET a users desde mi servidor');
    res.send('Esto es un GET a users desde mi nuevo servidor')
  })


router.post('/users', (req, res) => {
    const objeto = req.body;
    res.status(200).json(objeto)
  })

module.exports = router;