var Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail,
    create,
    show
}

function index(req, res) {
    Trail.find({}, function(err, trails) {
      res.render('trails/index', { title: 'All Trails', trails });
    });
  }

  function newTrail(req, res) {
    res.render('trails/new', { title: 'Add Trail' });
  }

  function create(req,res){
    let trail = new Trail(req.body);
    trail.save(function(err){
        if (err) res.redirect('/trails/new');
        console.log(trail);
        res.redirect(`/trails`);
    })
  }

  function show(req, res) {
    Trail.findById(req.params.id)
      .populate('cast').exec( function(err, movie) {
      res.render('trails/show', { title: 'Trail Detail', trail });
    });
  };