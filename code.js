import { GameObject } from "./src/GameObject.js";
import { Scene } from "./src/Scene.js";
import { SpriteRenderer } from "./src/SpriteRenderer.js";

var scene = new Scene()

var g = new GameObject()
g.transform.position.x = 100
g.transform.position.y = 200

/**@type {SpriteRenderer} */
var spriteRenderer =  g.addComponent(SpriteRenderer)
spriteRenderer.sprite.image.src = "ic_3d_rotation_grey600_24dp.png"

scene.add(g)

scene.run()
