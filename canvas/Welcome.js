const Canvas = require("canvas");
const axios = require('axios')

async function shorts(url) {
  const res = await axios.get('https://tinyurl.com/api-create.php?url='+url)
  return res.data
}


module.exports = class Welcome {
constructor() {
this.bg = "https://rawcdn.githack.com/Lingz-ui/data-myBot/ae95e15b8fc49637b2259f797a802cab9d77d68d/wa-code/hosting-bot/assets/bg_ku.jpg";
this.avatar = "https://i.imgur.com/AdI794W.jpg";
// this.number = "0@whatsapp.net";
this.name = "ningen"
}
 //avatar
setAvatar(value) {
this.avatar = value;
return this;
}

setBg(value) {
this.bg = value;
return this;
}

setName(value) {
this.name = value;
return this;
}


async toAttachment() {


// Create canvas
let canvas = Canvas.createCanvas(2500, 1406);
let ctx = canvas.getContext("2d");
let bg = await Canvas.loadImage(this.bg);
ctx.drawImage(bg, 0, 0, 2500, 1406);
let fm = await Canvas.loadImage("https://rawcdn.githack.com/Lingz-ui/data-myBot/ae95e15b8fc49637b2259f797a802cab9d77d68d/wa-code/hosting-bot/assets/welcome_poison.png");
ctx.drawImage(fm, 0, 0, 2500, 1406);


let namae = this.name;
ctx.fillStyle = "#fff";
let namee = namae.length > 16 ? namae.substring(0, 16) + "..." : namae;
ctx.font = "210px NVM";
ctx.textAlign = 'left';
ctx.fillText(namee, 870, 1040);


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = month + "/" + day + "/" + year;
let datess = newdate;
ctx.fillStyle = "#ffffff";
let dates = datess.length > 11 ? datess.substring(0, 11) + " " : datess;
ctx.font = "95px NVM";
ctx.textAlign = 'left';
ctx.fillText(dates, 40, 1350);
ctx.save();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#000";
ctx.arc(453, 892, 340, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();
ctx.clip();


let avatar = await Canvas.loadImage(shorts(this.avatar));
ctx.drawImage(avatar, 112, 550, 681, 681);
ctx.restore();

return canvas;   
}
};
