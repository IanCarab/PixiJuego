import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url: "./eye.jpg", name: "MyEye"});
Loader.shared.add({url: "./clampy.png", name: "Clampy"});

Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("./eye.jpg");
	console.log(clampy.width,clampy.height);
	clampy.anchor.set(0.5);
	
	clampy.x = 250;
	clampy.y = 250;
	
	app.stage.addChild(clampy);

});
Loader.shared.load();