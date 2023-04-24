console.log("pixijs7 1st test!");

import * as PIXI from "pixi.js";
import { Assets, Sprite } from 'pixi.js';

import { randomInt } from "./helper/randomInt";

import { STAGES } from "./constants";
import { displayDateText } from "./helper/text";

// PIXI.useDeprecated();

const WIDTH = STAGES.WIDTH;
const HEIGHT = STAGES.HEIGHT;
const BG_COLOR = STAGES.BG_COLOR;

console.log("window.devicePixelRatio: ", window.devicePixelRatio); // window.devicePixelRatio:  2


// init
let app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: BG_COLOR,
    // resolution: window.devicePixelRatio || 1,
    autoResize: true
});
document.body.appendChild(app.view);

// container
let container = new PIXI.Container();
container.width = WIDTH;
container.height = HEIGHT;
container.x = 0;
container.y = 0;
container.pivot.x = 0.5;
container.pivot.y = 0.5;
// container.interactive = false;
// container.interactiveChildren = true;
container.buttonMode = false;
app.stage.addChild(container);

// PixiJS Deprecation Warning: Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead.Deprecated since v7.2.0

let temp = `PixiJS Ver: ${PIXI.VERSION}`;
console.log(temp);
let text1 = new PIXI.Text(temp, {
    fontSize: 40,
    fill: 0xfefefe,
    lineJoin: "round"
});
container.addChild(text1);
text1.anchor.set(0.5);
text1.x = WIDTH / 2;
text1.y = HEIGHT / 2;

// Load image and Set sprite
const LoadImg = async () => {
    console.log("LoadImg()");
    const texture1 = await Assets.load('assets/images/pic_cat2.png');
    const image1 = Sprite.from(texture1);
    console.log(texture1); // Texture {_events: Events, _eventsCount: 0, noFrame: true, baseTexture: _BaseTexture, _frame: Rectangle, …}
    console.log(image1); // Sprite {_events: Events, _eventsCount: 0, tempDisplayObjectParent: null, transform: _Transform, alpha: 1, …}
    image1.anchor.set(0.5);
    image1.x = WIDTH / 2;
    image1.y = HEIGHT / 2 + 90;
    // image1.width = image1.width / 2;
    // image1.height = image1.height / 2;
    image1.scale.set(0.5, 0.5);
    container.addChild(image1);
    next();
}

LoadImg();

// RandomInt test
let dice = randomInt(1, 6);
console.log("dice no: ", dice);

const next = () => {
    console.log("next()");
}

// view todays date
let today = displayDateText(app);



