import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';


export function loadMarioSprite(){
  return loadImage('/image/characters.gif')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 20);
    sprites.define('idle', 276, 40, 16, 20);
    return sprites;
});
}

export function loadBackgroundSprites(){
  return loadImage('/image/tiles.png')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile('ground', 0, 2);
    sprites.defineTile('sky', 3, 23);
    return sprites;
});
}
