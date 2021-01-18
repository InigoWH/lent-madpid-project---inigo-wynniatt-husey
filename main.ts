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
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, myTiles.tile14)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, myTiles.tile15)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, myTiles.tile16)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, myTiles.tile17)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, myTiles.tile18)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, myTiles.tile19)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, myTiles.tile23)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, myTiles.tile24)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, myTiles.tile25)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile14, function (sprite, location) {
    if (Checkpoint_counter < 5) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 4 reached", DialogLayout.Top)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (person.vy == 0) {
        person.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    if (Checkpoint_counter < 11) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 10 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    if (Checkpoint_counter < 13) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 12 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    if (Checkpoint_counter < 7) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 6 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    if (Checkpoint_counter < 6) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 5 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (Checkpoint_counter < 1) {
        Checkpoint_counter += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile19, function (sprite, location) {
    if (Checkpoint_counter < 10) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 9 reached", DialogLayout.Top)
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    if (Checkpoint_counter < 8) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 7 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Chest = randint(0, 0)
    if (Chest == 0) {
        music.baDing.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.showLongText("You have suffered serious burn wounds. You are transported to the nearest hospital", DialogLayout.Center)
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
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, myTiles.tile14)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, myTiles.tile15)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, myTiles.tile16)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, myTiles.tile17)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, myTiles.tile18)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, myTiles.tile19)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, myTiles.tile23)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, myTiles.tile24)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, myTiles.tile25)
        info.changeLifeBy(-1)
        music.powerDown.play()
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
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, myTiles.tile14)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, myTiles.tile15)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, myTiles.tile16)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, myTiles.tile17)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, myTiles.tile18)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, myTiles.tile19)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, myTiles.tile23)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, myTiles.tile24)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, myTiles.tile25)
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
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, myTiles.tile14)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, myTiles.tile15)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, myTiles.tile16)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, myTiles.tile17)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, myTiles.tile18)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, myTiles.tile19)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, myTiles.tile23)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, myTiles.tile24)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, myTiles.tile25)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile24, function (sprite, location) {
    if (Checkpoint_counter < 12) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 11 reached", DialogLayout.Top)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    person.vy = 150
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile18, function (sprite, location) {
    if (Checkpoint_counter < 9) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 8 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    if (Checkpoint_counter < 3) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 2 reached", DialogLayout.Top)
    }
})
let Chest = 0
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
info.setLife(100000)
tiles.setTilemap(tilemap`level_2`)
tiles.placeOnTile(person, tiles.getTileLocation(9, 46))
scene.cameraFollowSprite(person)
game.showLongText("Press 'A' on screen to continue", DialogLayout.Top)
game.showLongText("You have been summoned to save the human race from a deadly disease called COVID-19. Against all peril you must find the components to create a vaccine avoiding contagious people and viruses along the way. Each time you respawn at a checkpoint you lose a health", DialogLayout.Top)
controller.moveSprite(person, 100, 0)
person.ay = 300
