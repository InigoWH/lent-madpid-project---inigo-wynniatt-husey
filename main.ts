namespace SpriteKind {
    export const h = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.showLongText("You have caught the virus lurking in the air. You have failed! You are transported back to the nearest hospital.", DialogLayout.Center)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (person.vy == 0) {
        person.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (Checkpoint_counter < 1) {
        Checkpoint_counter += 1
        game.showLongText("helloe eof;dlvjwmnpo;fladjm", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.showLongText("Your clumsiness has led to your death. You have drowned! You are transported back to the nearest hospital.", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    game.showLongText("You have caught the virus from the crowd! You have failed your citizens! You are transported back to the nearest hospital.", DialogLayout.Center)
    if (Checkpoint_counter == 1) {
        person.setPosition(63, 65)
    }
    if (Checkpoint_counter == 2) {
        person.setPosition(55, 33)
    }
    if (Checkpoint_counter == 3) {
        person.setPosition(64, 41)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    person.vy = 150
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.showLongText("The chest is empty there are no components to find here!", DialogLayout.Top)
})
let Checkpoint_counter = 0
let person: Sprite = null
person = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . e d d d d d d e . . . . . 
    . . . . d 8 d d 8 d . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 7 7 7 4 4 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . . 7 . 7 7 7 7 . 7 . . . . . 
    . . . 7 . 7 7 7 7 . 7 . . . . . 
    . . . d . 7 7 7 7 . d . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . e e . . e e . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`14009600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202000000000000000000000000000000000000000002020200000000000000000000000000000000000000000202000000000000000000000000000000000000000200000000000000020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202000002020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020000000000000000000000000000000000000000000002020202020202020202020202020202020202000000000000000000000000000000000000000002020202020202020202020202020202020000020000000000000000000000000000000000000202030700000300000000000000000000000202020202020202020203000000000000000202020202020202020202020202000000000202020202020202000000000000000000000000000000000000000000000200020002000200020002000200020002000000000000000000000000000000000000000000000200020002000200020002000200020002000200000000000000000000000005000000000000000205020002000205020002000200020502000200000000000000000000000000020202020202020202020002000200020002020202020000000602020200000003030303030302000000000002020202020002020202020202020200000002020202020002000000000000000000000002000000000000000202020202020202020202000000000000000000000000000800000000000202000002020202000000000005000000000000020202020200000000000005000000050000000005000000000000000202000000050000000005000000000000000200020200000000000005000000000000000200020002020005000500000000000000000200020002000202000000000000000000000200020002000200020200000000000000000200020002000200020002020000000000000200020002000200020002000202000000000200020002000200020002000200020200000202020302030203020302030203020302020200000202020202020202020202020202020202020200000000000000000000000000000000000002020200000000000000000000000000000000000202020200000005000900000000000000000000020202020200000000090002000000000000000002020202020000090900000000020000000000000202020202020902020200000000000200000000000200000209000000000000000000000002000000020200000000000000000000000000000000000002020200000202030302020000000000000200000202000002020202020202020000000200000008000000020202000000000000000200000000000202020202020404040404040404040404040404`, img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    2222222222222222222.
    ....................
    .2222222222222222222
    ....................
    22222222222222222..2
    ..................22
    ................2222
    222222........222222
    22222222....22222222
    ....................
    ..2.2.2.2.2.2.2.2.2.
    ....................
    .2.2.2.2.2.2.2.2.2.2
    ....................
    2.2.2.2.2.2.2.2.2.2.
    ............22222222
    22.2.2.2.22222....22
    2.........2.....2222
    2.222222222...22222.
    2...........2.......
    22222222222.........
    ..........22..2222..
    ..........22222.....
    ..................22
    ................2.22
    ..............2.2.22
    ............2.2.2.22
    ..........2.2.2.2.22
    ........2.2.2.2.2.22
    ......2.2.2.2.2.2.22
    ....2.2.2.2.2.2.2.22
    ..222.2.2.2.2.2.2.22
    2..22222222222222222
    22..................
    222.................
    2222................
    22222......2........
    22222........2......
    2222222222.....2....
    .2..2............2..
    .22.................
    .222..22..22......2.
    .22..22222222...2...
    ....222.......2.....
    222222..............
    `, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile5,myTiles.tile7,sprites.dungeon.hazardWater,myTiles.tile3,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,myTiles.tile8,myTiles.tile6], TileScale.Sixteen))
tiles.placeOnTile(person, tiles.getTileLocation(0, 148))
scene.cameraFollowSprite(person)
game.showLongText("Press 'A' on screen to continue", DialogLayout.Top)
game.showLongText("You have been summoned to save the human race from a deadly disease called COVID-19. Against all peril you must find the components to create a vaccine avoiding contagious people and viruses along the way.", DialogLayout.Top)
controller.moveSprite(person, 100, 0)
person.ay = 300
