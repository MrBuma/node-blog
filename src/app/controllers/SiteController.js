class SiteController {

    home(req, res){
        res.render('home');
    }

    search(req, res){
        res.send('Day la tranh Search');
    }
}

module.exports = new SiteController();