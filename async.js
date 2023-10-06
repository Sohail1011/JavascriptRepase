/* Ecmascript 05 Callback */

/* function requestHandler(req, res) {
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
} */

/* Ecmascript Promise */

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


function requestHandler(req, res) {
    Car.findById(req.carId)
        .then(function (car) {
            return Model.findById(car.modelId);
        })
        .catch(function (err) {
            res.send(err);
        })
}