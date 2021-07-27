const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();
const CORS = require('cors');
const PORT = 8080

APP.use(CORS()); 

APP.use(EXPRESS.static(PATH.join(__dirname, '/dist/mccotter-ui')));

APP.get('*', function (req, res) {
    res.sendFile(PATH.join(__dirname+'/dist/mccotter-ui/index.html'));
});

// APP.get('*', function (req, res) {
//     const index = PATH.join(__dirname, 'build', 'index.html');
//     res.sendFile(index);
// });

APP.listen(process.env.PORT || PORT);
console.log('McCotter.net is rocking and rolling on port: ' + PORT);