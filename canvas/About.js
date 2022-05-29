const Canvas = require("canvas");
const axios = require('axios')
const PhoneNumber = require("awesome-phonenumber");

async function shorts(url) {
  const res = await axios.get('https://tinyurl.com/api-create.php?url='+url)
  return res.data
}

bgs = [
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/01.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/02.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/03.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/04.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/05.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/06.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/07.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/08.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/09.png",
"https://rawcdn.githack.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/bg/10.png"
]

module.exports = class About {
constructor() {
this.fm = "https://raw.githubusercontent.com/Lingz-ui/data-myBot/47f9a9d2b52e3e28bbd212493684ddf226337279/poison/fm.png";
this.avatar = "https://i.imgur.com/AdI794W.jpg";
this.number = "0@whatsapp.net";
this.name = "ningen";
this.bio = "Squad404";
}
 //avatar
setAvatar(value) {
this.avatar = value;
return this;
}

setName(value) {
this.name = value;
return this;
}

setNum(value) {
this.number = value;
return this;
}


async toAttachment() {


// Create canvas
let canvas = Canvas.createCanvas(1280, 550);
let ctx = canvas.getContext("2d");

this.bg_anime = bgs[Math.floor(Math.random() * bgs.length)];

let avatar = await Canvas.loadImage(shorts(this.avatar));
ctx.drawImage(avatar, 0, 0, 550, 550);

let bg = await Canvas.loadImage(this.bg_anime);
ctx.drawImage(bg, 0, 0, 1280, 550);

let fm = await Canvas.loadImage(this.fm);
ctx.drawImage(fm, 0, 0, 1280, 550);

let znumbers = PhoneNumber('+' + this.number.split('@')[0]).getNumber('international')
let datess = znumbers
ctx.fillStyle = "#e0e0e0";
let dates = datess.length > 19 ? datess.substring(0, 18) + " " : datess;


namae = this.name
namae = namae.replace(/"\n"/g, "");
ctx.textAlign = 'left';
ctx.fillStyle = "#e0e0e0";
ctx.font = "90px NVM";
ctx.fillText('Codename :', 700, 195);
ctx.fillText('Number :', 700, 350);
asw = namae.length > 16 ? namae.substring(0, 16) + " " : namae;
ctx.font = "100px NVM";
ctx.fillText(asw, 700, 255);
ctx.font = "90px NVM";
ctx.fillText(dates, 700, 410);


ctx.drawImage(fm, 0, 0, 1280, 550);
  

return canvas;   
}
};
