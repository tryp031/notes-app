const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderAboout = (req, res) => {
    res.render('about');
}

module.exports = indexCtrl;