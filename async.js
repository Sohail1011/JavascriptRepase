/* Ecmascript 05 Callback */

function requestHandler(req, res) {
    Car.findById(req.carId, function (err, car) {
        if (err) {
            res.send(err);
        } else {
            Model.findById(car.modelId, function (err, models) {
                if (err) {
                    return res.send(err);
                } else {
                    models.completed = true;
                    models.save(function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            return res.send('Model Completed');
                        }

                    });
                }
            });
        }
    });
}

/* Ecmascript Promise */

function requestHandler(req, res) {
    Car.findById(req.carId)
        .then(function (car) {
            return Model.findById(car.modelId);
        })
        .then(function (models) {
            models.completed = true;
            return models.save();
        })
        .then(function () {
            res.send('Model Completed');
        })
        .catch(function (errors) {
            res.send(errors);
        })
}

/* Ecmascript 6 Async Await */

async function requestHandler(req, res) {
    try {
        const car = await Car.findById(req.carId);
        const models = await Model.findById(car.modelId);
        models.completed = true;
        await models.save();
        res.send('Model Completed');
    } catch (e) {
        res.send(e);
    }
}