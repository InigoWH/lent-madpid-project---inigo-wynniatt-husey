namespace SpriteKind {
    export const h = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.showLongText("You have caught the virus lurking in the air. You have failed! You are transported back to the nearest hospital.", DialogLayout.Center)
    if (Checkpoint_counter == 1) {
        tiles.placeOnRandomTile(person, myTiles.tile8)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 2) {
        tiles.placeOnRandomTile(person, myTiles.tile9)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 3) {
        tiles.placeOnRandomTile(person, myTiles.tile10)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 4) {
        tiles.placeOnRandomTile(person, myTiles.tile11)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (person.vy == 0) {
        person.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (Checkpoint_counter < 1) {
        Checkpoint_counter += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (Checkpoint_counter < 2) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 1 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    if (Checkpoint_counter < 4) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 3 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.showLongText("Your clumsiness has led to your death. You have drowned! You are transported back to the nearest hospital.", DialogLayout.Center)
    if (Checkpoint_counter == 1) {
        tiles.placeOnRandomTile(person, myTiles.tile8)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 2) {
        tiles.placeOnRandomTile(person, myTiles.tile9)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 3) {
        tiles.placeOnRandomTile(person, myTiles.tile10)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 4) {
        tiles.placeOnRandomTile(person, myTiles.tile11)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    game.showLongText("You have caught the virus from the crowd! You have failed your citizens! You are transported back to the nearest hospital.", DialogLayout.Center)
    if (Checkpoint_counter == 1) {
        tiles.placeOnRandomTile(person, myTiles.tile8)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 2) {
        tiles.placeOnRandomTile(person, myTiles.tile9)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 3) {
        tiles.placeOnRandomTile(person, myTiles.tile10)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 4) {
        tiles.placeOnRandomTile(person, myTiles.tile11)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    person.vy = 150
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    if (Checkpoint_counter < 3) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 2 reached", DialogLayout.Top)
    }
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
info.setLife(3)
tiles.setTilemap(tilemap`level_2`)
tiles.placeOnTile(person, tiles.getTileLocation(0, 148))
scene.cameraFollowSprite(person)
game.showLongText("Press 'A' on screen to continue", DialogLayout.Top)
game.showLongText("You have been summoned to save the human race from a deadly disease called COVID-19. Against all peril you must find the components to create a vaccine avoiding contagious people and viruses along the way. Each time you respawn at a checkpoint you lose a health", DialogLayout.Top)
controller.moveSprite(person, 100, 0)
person.ay = 300
