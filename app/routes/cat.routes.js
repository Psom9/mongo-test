module.exports = (app) => {
    const cat = require('../controllers/cat.controller.js');

    //Count cats
    app.get('/cat/count', cat.count);

    //List of names
    app.get('/cat/name/:catId' , cat.getList);

    // Create a new Cat
    app.post('/cat', cat.create);

    // Retrieve all Cats
    app.get('/cat', cat.findAll);

    // Retrieve a single Cat with catId
    app.get('/cat/:catId', cat.findOne);

    // Update a Cat with catId
    app.put('/cat/:catId', cat.update);

    // Delete a Cat with catId
    app.delete('/cat/:catId', cat.delete);


}