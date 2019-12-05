const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tour-simple.json`))

exports.getAllTours = (req, res) => {
  res.json({
    status: 'success',
    requestedAt : req.requestTime, 
    results: tours.length,
    data: {
      tours
    }
  });
};