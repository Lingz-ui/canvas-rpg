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

setBio(value) {
this.bio = value;
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
let canvas = Canvas.createCanvas(3840, 1650);
let ctx = canvas.getContext("2d");

this.bg_anime = bgs[Math.floor(Math.random() * bgs.length)];

let avatar = await Canvas.loadImage(shorts(this.avatar));
ctx.drawImage(avatar, 0, 0, 1650, 1650);

let bg = await Canvas.loadImage(this.bg_anime);
ctx.drawImage(bg, 0, 0, 3840, 1650);

let fm = await Canvas.loadImage(this.fm);
ctx.drawImage(fm, 0, 0, 3840, 1650);

let znumbers = PhoneNumber('+' + this.number.split('@')[0]).getNumber('international')
let datess = znumbers
ctx.fillStyle = "#e0e0e0";
let dates = datess.length > 19 ? datess.substring(0, 18) + " " : datess;


namae = this.name
namae = namae.replace(/"\n"/g, "");
ctx.textAlign = 'left';
ctx.fillStyle = "#e0e0e0";
ctx.font = "310px NVM";
ctx.fillText('Codename :', 2100, 290);
if(namae.length > 16) {
ctx.font = "240px NVM";
ctx.fillText(namae, 2100, 490);
ctx.font = "230px NVM";
ctx.fillText(dates, 2100, 1000);
} else {
let namee = namae.length > 16 ? namae.substring(0, 16) + " " : namae;
ctx.font = "240px NVM";
ctx.fillText(namee, 2100, 490);
ctx.font = "230px NVM";
ctx.fillText(dates, 2100, 1000);
}


ctx.fillStyle = "#e0e0e0";
ctx.font = "310px NVM";
ctx.textAlign = 'left';
ctx.fillText("Number :", 2100, 790);
ctx.fillText("About :", 2100, 1300);
status = this.bio
if(status.length > 29) {
text1 = status.substring(0, 29) + ""
text2 = status.substring(29, 58) + ""
text3 = status.substring(58, 87) + ""
ctx.font = "180px NVM";
ctx.fillText(text1, 2100, 1400);
ctx.fillText(text2, 2100, 1500);
ctx.fillText(text3, 2100, 1600);
} else {
let satus = status.length > 22 ? status.substring(0, 22) + " " : status;
ctx.font = "260px NVM";
ctx.fillText(satus, 2100, 1500);
}

ctx.drawImage(fm, 0, 0, 3840, 1650);
  

return canvas;   
}
};
