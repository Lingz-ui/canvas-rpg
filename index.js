const Canvas = require("canvas");
Canvas.registerFont(`${__dirname}/canvas/rpg.ttf`, { family: "myFont" });
Canvas.registerFont(`${__dirname}/canvas/novamono.ttf`, { family: "NVM" });


module.exports.About = require('./canvas/About');
module.exports.Welcome = require('./canvas/Welcome');
module.exports.Goodbye = require('./canvas/Goodbye');
module.exports.Profile = require('./canvas/Profile');


