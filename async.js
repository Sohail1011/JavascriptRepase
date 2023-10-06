/* Ecmascript 2018 Callback */

function requestHandler(req, res) {
    Car.findById(req.carId, function (err, car) {
        if (err) {
            res.send(err);
        } else {
            Model.findById(car.modelId, function () {
                if (err) {
                    return res.send(err);
                }
            })
        }
    });
}