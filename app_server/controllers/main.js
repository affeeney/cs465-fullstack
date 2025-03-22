/* GET homepage */
const index = (requestAnimationFrame, res) => {
    res.render('index', { title: "Travlr Getaways" });
};

module.exports = {
    index
};
