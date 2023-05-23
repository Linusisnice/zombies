namespace SpriteKind {
    export const Door = SpriteKind.create()
    export const wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(36, 12), true)
    Zombie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
function doSomething () {
    tiles.placeOnTile(Hero, tiles.getTileLocation(38, 1))
    Hero.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
    for (let index = 0; index < 65; index++) {
        pause(100)
        Hero.y += 1
    }
    controller.moveSprite(Hero)
    Hero.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Hero.sayText("Hello and welcome to bozo")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Hero.sayText("Zombies Can't walk through doors")
})
let Zombie: Sprite = null
let Hero: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Door = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f e e e e e e e e f f f f 
    f f f e e e e e e e e e e f f f 
    f f e d e e e e e e e e d e f f 
    f e d d d e e e e e e d d d e f 
    f e e d e e e e e e e e d e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e d d d d d d d d d d d d f 
    f e e d f d d d d d d d d d d f 
    f e e d f d e e e e e e e e e f 
    f e e e d e e e e e e e d e e f 
    f e e e e e e e e e e d d d e f 
    f e e e e e e e e e e e d e e f 
    f e e e e e e e e e e e e e e f 
    `, SpriteKind.Door)
let Door2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f e e e e e e e e f f f f 
    f f f e e e e e e e e e e f f f 
    f f e d e e e e e e e e d e f f 
    f e d d d e e e e e e d d d e f 
    f e e d e e e e e e e e d e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e d d d d d d d d d d d d f 
    f e e d f d d d d d d d d d d f 
    f e e d f d e e e e e e e e e f 
    f e e e d e e e e e e e d e e f 
    f e e e e e e e e e e d d d e f 
    f e e e e e e e e e e e d e e f 
    f e e e e e e e e e e e e e e f 
    `, SpriteKind.Door)
let wall = sprites.create(img`
    4 4 2 4 4 4 f 4 4 4 4 4 2 f 4 2 
    4 2 4 4 2 4 f 4 2 4 4 4 4 f 4 4 
    4 4 4 4 4 4 f 4 4 4 4 4 2 f 2 4 
    f f f f f f f f f f f f f f f f 
    4 4 4 2 f 4 2 4 4 4 2 f 4 4 4 2 
    4 2 4 4 f 4 4 4 4 4 4 f 4 2 4 4 
    4 4 4 2 f 4 4 4 2 4 4 f 4 4 4 4 
    f f f f f f f f f f f f f f f f 
    4 4 f 2 4 4 4 4 4 f 2 4 4 4 4 4 
    4 2 f 4 4 4 2 4 4 f 4 4 2 4 4 4 
    2 4 f 2 4 4 4 4 4 f 4 4 4 4 4 2 
    f f f f f f f f f f f f f f f f 
    4 4 2 4 4 f 2 4 4 4 4 2 f 4 4 2 
    4 4 4 4 4 f 4 4 4 2 4 4 f 4 4 4 
    2 4 4 4 2 f 4 4 4 4 4 4 f 2 4 4 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.wall)
let wall2 = sprites.create(img`
    4 4 2 4 4 4 f 4 4 4 4 4 2 f 4 2 
    4 2 4 4 2 4 f 4 2 4 4 4 4 f 4 4 
    4 4 4 4 4 4 f 4 4 4 4 4 2 f 2 4 
    f f f f f f f f f f f f f f f f 
    4 4 4 2 f 4 2 4 4 4 2 f 4 4 4 2 
    4 2 4 4 f 4 4 4 4 4 4 f 4 2 4 4 
    4 4 4 2 f 4 4 4 2 4 4 f 4 4 4 4 
    f f f f f f f f f f f f f f f f 
    4 4 f 2 4 4 4 4 4 f 2 4 4 4 4 4 
    4 2 f 4 4 4 2 4 4 f 4 4 2 4 4 4 
    2 4 f 2 4 4 4 4 4 f 4 4 4 4 4 2 
    f f f f f f f f f f f f f f f f 
    4 4 2 4 4 f 2 4 4 4 4 2 f 4 4 2 
    4 4 4 4 4 f 4 4 4 2 4 4 f 4 4 4 
    2 4 4 4 2 f 4 4 4 4 4 4 f 2 4 4 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.wall)
let wall3 = sprites.create(img`
    4 4 2 4 4 4 f 4 4 4 4 4 2 f 4 2 
    4 2 4 4 2 4 f 4 2 4 4 4 4 f 4 4 
    4 4 4 4 4 4 f 4 4 4 4 4 2 f 2 4 
    f f f f f f f f f f f f f f f f 
    4 4 4 2 f 4 2 4 4 4 2 f 4 4 4 2 
    4 2 4 4 f 4 4 4 4 4 4 f 4 2 4 4 
    4 4 4 2 f 4 4 4 2 4 4 f 4 4 4 4 
    f f f f f f f f f f f f f f f f 
    4 4 f 2 4 4 4 4 4 f 2 4 4 4 4 4 
    4 2 f 4 4 4 2 4 4 f 4 4 2 4 4 4 
    2 4 f 2 4 4 4 4 4 f 4 4 4 4 4 2 
    f f f f f f f f f f f f f f f f 
    4 4 2 4 4 f 2 4 4 4 4 2 f 4 4 2 
    4 4 4 4 4 f 4 4 4 2 4 4 f 4 4 4 
    2 4 4 4 2 f 4 4 4 4 4 4 f 2 4 4 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.wall)
let wall4 = sprites.create(img`
    4 4 2 4 4 4 f 4 4 4 4 4 2 f 4 2 
    4 2 4 4 2 4 f 4 2 4 4 4 4 f 4 4 
    4 4 4 4 4 4 f 4 4 4 4 4 2 f 2 4 
    f f f f f f f f f f f f f f f f 
    4 4 4 2 f 4 2 4 4 4 2 f 4 4 4 2 
    4 2 4 4 f 4 4 4 4 4 4 f 4 2 4 4 
    4 4 4 2 f 4 4 4 2 4 4 f 4 4 4 4 
    f f f f f f f f f f f f f f f f 
    4 4 f 2 4 4 4 4 4 f 2 4 4 4 4 4 
    4 2 f 4 4 4 2 4 4 f 4 4 2 4 4 4 
    2 4 f 2 4 4 4 4 4 f 4 4 4 4 4 2 
    f f f f f f f f f f f f f f f f 
    4 4 2 4 4 f 2 4 4 4 4 2 f 4 4 2 
    4 4 4 4 4 f 4 4 4 2 4 4 f 4 4 4 
    2 4 4 4 2 f 4 4 4 4 4 4 f 2 4 4 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.wall)
tiles.placeOnTile(wall4, tiles.getTileLocation(38, 0))
tiles.placeOnTile(Door, tiles.getTileLocation(38, 4))
tiles.placeOnTile(Door2, tiles.getTileLocation(36, 12))
tiles.placeOnTile(wall, tiles.getTileLocation(38, 3))
tiles.placeOnTile(wall2, tiles.getTileLocation(38, 2))
tiles.placeOnTile(wall3, tiles.getTileLocation(38, 1))
scene.cameraFollowSprite(Hero)
doSomething()
forever(function () {
    if (controller.right.isPressed()) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `)
    } else if (controller.up.isPressed()) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `)
    } else if (controller.left.isPressed()) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    } else if (controller.left.isPressed()) {
        Hero.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `)
    } else {
        Hero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
