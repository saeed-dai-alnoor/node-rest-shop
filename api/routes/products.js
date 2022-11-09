const { response, request } = require('express');
const express = require('express');
const router = express.Router();
router.get('/', (request, response, next) => {
    response.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (request, response, next) => {
    response.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (request, response, next) => {
    const id = request.params.productId;
    if (id == 'special') {
        response.status(200).json({
            message: 'You discovered the special ID'
        });
    } else {
        response.status(200).json({
            message: 'You passed ID'
        });
    }
})

module.exports = router;
