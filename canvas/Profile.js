const Canvas = require("canvas");

function intToString(num) {
if (num < 1000) {
return num;
}
var si = [
  {v: 1E3, s: "K"},
  {v: 1E6, s: "M"},
  {v: 1E9, s: "B"},
  {v: 1E12, s: "T"},
  {v: 1E15, s: "P"},
  {v: 1E18, s: "E"}
  ];
var i;
for (i = si.length - 1; i > 0; i--) {
if (num >= si[i].v) {
break;
}
}
return (num / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
}




module.exports = class Profile {
constructor() {
this.hp = 70;
this.max_hp = 120;


this.sword = 50;
this.sword_max = 50;
this.fishing_rod = 40;
this.fishing_rod_max = 40;
this.armor = 60;
this.armor_max = 60;
this.helmet = 50;
this.helmet_max = 50;

this.heal_potion = 1;
this.fish = 0;
this.apple = 10;
this.wood = 5;
this.leather = 0;
this.monster_core = 0;

this.coins = 100

}
setSword(value) {
this.sword = value;
return this;
}
setSword_max(value) {
this.sword_max = value;
return this;
}
setFishing_rod(value) {
this.fishing_rod = value;
return this;
}
setFishing_rod_max(value) {
this.fishing_rod_max = value;
return this;
}
setArmor(value) {
this.armor = value;
return this;
}
setArmor_max(value) {
this.armor_max = value;
return this;
}
setHelmet(value) {
this.helmet = value;
return this;
}
setHelmet_max(value) {
this.helmet_max = value;
return this;
}

setHeal_potion(value) {
this.heal_potion = value;
return this;
}
setFish(value) {
this.fish = value;
return this;
}
setApple(value) {
this.apple = value;
return this;
}
setWood(value) {
this.wood = value;
return this;
}
setLeather(value) {
this.leather = value;
return this;
}
setMcore(value) {
this.monster_core = value;
return this;
}
setCoins(value) {
this.coins = value;
return this;
}

setMax_Hp(value) {
this.max_hp = value;
return this;
}
setHp(value) {
this.hp = value;
return this;
}



async toAttachment() {

const percent = (100 * this.hp) / this.max_hp;
const progress = (percent * 334) / 100;

const canvas = Canvas.createCanvas(1280, 765);
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#fff4fb";
ctx.fillRect(760, 80, 334, 100);
ctx.fillStyle = "#e9375c";
ctx.fillRect(760, 80, progress, 100)
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 5;
ctx.strokeRect(760, 80, 334, 100);


var bg = await Canvas.loadImage('https://rawcdn.githack.com/Lingz-ui/data-myBot/237bca4d9df53c949df2238375fa21e38018e7d9/inv.png');
ctx.drawImage(bg, 0, 0, 1280, 765);

ctx.fillStyle = "#5B5563";
ctx.font = "300 30px myFont";
ctx.textAlign = 'center';
ctx.fillText(`${intToString(this.sword)}/${intToString(this.sword_max)}`, 270, 550);
ctx.fillText(`${intToString(this.fishing_rod)}/${intToString(this.fishing_rod_max)}`, 270, 394);
ctx.fillText(`${intToString(this.armor)}/${intToString(this.armor_max)}`, 430, 550);
ctx.fillText(`${intToString(this.helmet)}/${intToString(this.helmet_max)}`, 430, 394);

ctx.font = "300 35px myFont";
ctx.textAlign = 'center';
ctx.fillText(intToString(this.heal_potion), 670, 565);
ctx.fillText(intToString(this.fish), 670, 400);
ctx.fillText(intToString(this.apple), 840, 565);
ctx.fillText(intToString(this.wood), 840, 400);
ctx.fillText(intToString(this.leather), 1015, 565);
ctx.fillText(intToString(this.monster_core), 1015, 400);

ctx.fillStyle = "#fff";
ctx.font = "55px NVM";
ctx.textAlign = 'left';
ctx.fillText(intToString(this.coins), 220, 172);

return canvas;   
}
};
