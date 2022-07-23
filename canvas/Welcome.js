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
let canvas = Canvas.createCanvas(1280, 720);
let ctx = canvas.getContext("2d");
let bg = await Canvas.loadImage(this.bg);
ctx.drawImage(bg, 0, 0, 1280, 720);
let fm = await Canvas.loadImage("https://rawcdn.githack.com/Lingz-ui/data-myBot/7d50b034740c53124dd7b3665ec79b71fb65472d/poison/welcome.png");
ctx.drawImage(fm, 0, 0, 1280, 720);


let namae = this.name;
ctx.fillStyle = "#fff";
let namee = namae.length > 14 ? namae.substring(0, 14) + "..." : namae;
ctx.font = "120px NVM";
ctx.textAlign = 'left';
ctx.fillText(namee, 420, 540);


var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var newdate = month + "/" + day + "/" + year;
let datess = newdate;
ctx.fillStyle = "#ffffff";
let dates = datess.length > 11 ? datess.substring(0, 11) + " " : datess;
ctx.font = "45px NVM";
ctx.textAlign = 'left';
ctx.fillText(dates, 20, 700);

ctx.save();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#000";
ctx.arc(232.5, 460, 175, 0, Math.PI * 2, true);
ctx.stroke();
ctx.closePath();
ctx.clip();


let avatar = await Canvas.loadImage(this.avatar);
ctx.drawImage(avatar, 57, 285, 350, 350);
ctx.restore();

return canvas;   
}
};
