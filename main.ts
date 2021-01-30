enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const h = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile`, function (sprite, location) {
    if (Checkpoint_counter < 14) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 13 reached", DialogLayout.Top)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (person.vy == 0) {
        person.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    if (Checkpoint_counter < 5) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 4 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    game.showLongText("You have caught the virus from the crowd! You have failed your citizens! You are transported back to the nearest hospital.", DialogLayout.Center)
    doSomething()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.showLongText("You have caught the virus lurking in the air. You have failed! You are transported back to the nearest hospital.", DialogLayout.Center)
    doSomething()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile25`, function (sprite, location) {
    if (Checkpoint_counter < 13) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 12 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile19`, function (sprite, location) {
    if (Checkpoint_counter < 10) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 9 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile18`, function (sprite, location) {
    if (Checkpoint_counter < 9) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 8 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    if (Checkpoint_counter < 4) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 3 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile16`, function (sprite, location) {
    if (Checkpoint_counter < 7) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 6 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    let CHEST_Not_II = 0
    Chest = randint(0, 0)
    if (Chest == 0 && Make_chest_not_happen_again != 100) {
        game.showLongText("You find an orb. You reach and grab it, it crumbles at your touch. Suddenly the atmosphere feels lighter. Gravity now takes longer to pull you to the ground", DialogLayout.Top)
        person.ay = 200
        Make_chest_not_happen_again = 100
    }
    if (Chest == 1 && CHEST_Not_II != 200) {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    if (Checkpoint_counter < 1) {
        Checkpoint_counter += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.showLongText("You have suffered serious burn wounds. You are transported to the nearest hospital", DialogLayout.Center)
    doSomething()
})
function doSomething () {
    if (Checkpoint_counter == 1) {
        tiles.placeOnRandomTile(person, assets.tile`tile8`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 2) {
        tiles.placeOnRandomTile(person, assets.tile`tile9`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 3) {
        tiles.placeOnRandomTile(person, assets.tile`tile10`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 4) {
        tiles.placeOnRandomTile(person, assets.tile`tile11`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, assets.tile`tile14`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, assets.tile`tile15`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, assets.tile`tile16`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, assets.tile`tile17`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, assets.tile`tile18`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, assets.tile`tile19`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, assets.tile`tile23`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, assets.tile`tile24`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, assets.tile`tile25`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 14) {
        tiles.placeOnRandomTile(person, assets.tile`tile`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
    if (Checkpoint_counter == 15) {
        tiles.placeOnRandomTile(person, assets.tile`tile0`)
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.showLongText("Your clumsiness has led to your death. You have drowned! You are transported back to the nearest hospital.", DialogLayout.Center)
    doSomething()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile17`, function (sprite, location) {
    if (Checkpoint_counter < 8) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 7 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile15`, function (sprite, location) {
    if (Checkpoint_counter < 6) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 5 reached", DialogLayout.Top)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    person.vy = 150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile24`, function (sprite, location) {
    if (Checkpoint_counter < 12) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 11 reached", DialogLayout.Top)
    }
})
function Movement_Enemy () {
    for (let index = 0; index < 4; index++) {
        Enemy_1.x += 30
        pause(2000)
        Enemy_1.x += -30
        pause(2000)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile23`, function (sprite, location) {
    if (Checkpoint_counter < 11) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 10 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    if (Checkpoint_counter < 15) {
        Checkpoint_counter += 1
        game.showLongText("Last checkpoint reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile10`, function (sprite, location) {
    if (Checkpoint_counter < 3) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 2 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    if (Checkpoint_counter < 2) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 1 reached", DialogLayout.Top)
    }
})
let Chest = 0
let Checkpoint_counter = 0
let Enemy_1: Sprite = null
let Make_chest_not_happen_again = 0
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
info.setLife(10)
tiles.setTilemap(tilemap`level_2`)
tiles.placeOnTile(person, tiles.getTileLocation(1, 148))
scene.cameraFollowSprite(person)
controller.moveSprite(person, 100, 0)
person.ay = 300
game.showLongText("Press 'A' on screen to continue", DialogLayout.Top)
game.showLongText("You have been summoned to save the human race from a deadly disease called COVID-19. Against all peril you must find the components to create a vaccine avoiding contagious people and viruses along the way. Each time you respawn at a checkpoint you lose a health", DialogLayout.Top)
Make_chest_not_happen_again = 0
Enemy_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 2 f 7 2 7 f 2 . . . . . 
    . . . . f 2 f 2 f 2 f . . . . . 
    . . . 7 7 f 2 2 2 f 7 7 . . . . 
    . . 7 7 2 2 2 2 2 2 2 7 7 . . . 
    . . . 7 7 f 2 2 2 f 7 7 . . . . 
    . . . . f 2 f 2 f 2 f . . . . . 
    . . . . 2 f 7 2 7 f 2 . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_1, tiles.getTileLocation(6, 145))
Movement_Enemy()
