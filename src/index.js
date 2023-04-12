console.log("pixijs7 1st test!");

import * as PIXI from "pixi.js";

// PIXI.useDeprecated();

const WIDTH = 480;
const HEIGHT = 320;

// init
let app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: 0x000000
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
