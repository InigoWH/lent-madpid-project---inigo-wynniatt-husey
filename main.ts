enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const h = SpriteKind.create()
    export const ally = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.ally, function (sprite, otherSprite) {
    game.showLongText("Hello young hero have you brought me the components? Ahh I see you have. (After pottering around various benches). He shouts Eureka! We have the vaccine! ", DialogLayout.Top)
    effects.confetti.startScreenEffect()
    game.showLongText("You have won. Congratulations!", DialogLayout.Center)
    effects.confetti.endScreenEffect()
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    if (Checkpoint_counter < 5) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 4 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile33`, function (sprite, location) {
    if (Sign == 0) {
        game.showLongText("At last you have made it to the lab, well done! Saviour of All. Speak to the Mad professor and give him the components you have found", DialogLayout.Full)
        Sign += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
    game.showLongText("You have caught the virus from the crowd! You have failed your citizens! You are transported back to the nearest hospital.", DialogLayout.Center)
    doSomething()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    person,
    [img`
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
        . . . . e e . e e . . . . . . . 
        `,img`
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
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . e e . . . 8 . . . . . . . 
        . . . . . . . e e . . . . . . . 
        `,img`
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
        . . . . . 8 . e e . . . . . . . 
        . . . . e e . . . . . . . . . . 
        `,img`
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
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . . 8 . . . 8 . . . . . . . 
        . . . e e . . e e . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . . d 8 d d 8 d . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 7 7 7 4 4 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 . 7 7 7 7 . 7 . . . . 
        . . . . 7 . 7 7 7 7 . 7 . . . . 
        . . . . d . 7 7 7 7 . d . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    100,
    false
    )
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
    if (0 < 10) {
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    health_2 = randint(0, 0)
    if (health_2 == 0 && make_health_2 != 100) {
        game.showLongText("You have found a health orb. From the hole you drink it's contents. You feel refreshed. ", DialogLayout.Top)
        info.changeLifeBy(randint(1, 5))
        make_health_2 = 100
    } else {
        if (ddd == 0) {
            game.showLongText("Unfortunately it now is empty", DialogLayout.Top)
            ddd = 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile16`, function (sprite, location) {
    if (Checkpoint_counter < 7) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 6 reached", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Chest = randint(0, 0)
    if (Chest == 0 && Make_chest_not_happen_again != 100) {
        game.showLongText("You find an orb. You reach and grab it, it crumbles at your touch. Suddenly the atmosphere feels lighter. Gravity now takes longer to pull you to the ground", DialogLayout.Top)
        person.ay = 200
        Make_chest_not_happen_again = 100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    if (Checkpoint_counter < 1) {
        Checkpoint_counter += 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    person,
    [img`
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
        . . . . . e e . e e . . . . . . 
        `,img`
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
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 . . . e e . . . . . 
        . . . . . e e . . . . . . . . . 
        `,img`
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
        . . . . . e e . 8 . . . . . . . 
        . . . . . . . . e e . . . . . . 
        `,img`
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
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e d d d d d d e . . . . 
        . . . . . d 8 d d 8 d . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 7 7 7 4 4 7 7 7 . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . 7 . 7 7 7 7 . 7 . . . . 
        . . . . 7 . 7 7 7 7 . 7 . . . . 
        . . . . d . 7 7 7 7 . d . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . e e . e e . . . . . 
        `],
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile39`, function (sprite, location) {
    if (sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss == 0) {
        game.showLongText("You have found the second component, well done. You are progressing well...", DialogLayout.Top)
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss = 1
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
        ddd = 0
    }
    if (Checkpoint_counter == 2) {
        tiles.placeOnRandomTile(person, assets.tile`tile9`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 3) {
        tiles.placeOnRandomTile(person, assets.tile`tile10`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 4) {
        tiles.placeOnRandomTile(person, assets.tile`tile11`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 5) {
        tiles.placeOnRandomTile(person, assets.tile`tile14`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 6) {
        tiles.placeOnRandomTile(person, assets.tile`tile15`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 7) {
        tiles.placeOnRandomTile(person, assets.tile`tile16`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 8) {
        tiles.placeOnRandomTile(person, assets.tile`tile17`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 9) {
        tiles.placeOnRandomTile(person, assets.tile`tile18`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 10) {
        tiles.placeOnRandomTile(person, assets.tile`tile19`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 11) {
        tiles.placeOnRandomTile(person, assets.tile`tile23`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 12) {
        tiles.placeOnRandomTile(person, assets.tile`tile24`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 13) {
        tiles.placeOnRandomTile(person, assets.tile`tile25`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 14) {
        tiles.placeOnRandomTile(person, assets.tile`tile`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
    if (Checkpoint_counter == 15) {
        tiles.placeOnRandomTile(person, assets.tile`tile0`)
        info.changeLifeBy(-1)
        music.powerDown.play()
        ddd = 0
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile40`, function (sprite, location) {
    if (fffffffffffffffffffffffffffffffffff == 0) {
        game.showLongText("You have found the first component, well done. However your journey is only just beginning", DialogLayout.Top)
        fffffffffffffffffffffffffffffffffff = 1
    }
})
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    health = randint(0, 0)
    if (health == 0 && make_health_not_happen_again != 100) {
        game.showLongText("You have found a health orb. From the hole you drink it's contents. You feel refreshed. ", DialogLayout.Top)
        info.changeLifeBy(randint(1, 5))
        make_health_not_happen_again = 100
    } else {
        if (ddd == 0) {
            game.showLongText("Unfortunately it now is empty", DialogLayout.Top)
            ddd = 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile41`, function (sprite, location) {
    if (llllllllllllllllllllllllllllllllllllllllllllll == 0) {
        llllllllllllllllllllllllllllllllllllllllllllll = 1
        game.showLongText("You have found the last component, well done. However you must find the mad professor who can make it into a vaccine", DialogLayout.Top)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    chest_trap = 0
    if (chest_trap == 0 && g != 100) {
        game.showLongText("It is a trap you lose some life", DialogLayout.Top)
        info.changeLifeBy(randint(-1, -2))
        g = 100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    if (Checkpoint_counter < 2) {
        Checkpoint_counter += 1
        game.showLongText("Checkpoint 1 reached", DialogLayout.Top)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("A moving COVID 19 molecule has collided with you, you are transported to the nearest hospital", DialogLayout.Top)
    doSomething()
})
let g = 0
let chest_trap = 0
let llllllllllllllllllllllllllllllllllllllllllllll = 0
let make_health_not_happen_again = 0
let health = 0
let fffffffffffffffffffffffffffffffffff = 0
let sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss = 0
let Chest = 0
let ddd = 0
let make_health_2 = 0
let health_2 = 0
let Checkpoint_counter = 0
let Enemy_2: Sprite = null
let Enemy_1: Sprite = null
let Make_chest_not_happen_again = 0
let person: Sprite = null
let Sign = 0
Sign = 0
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
for (let index = 0; index < 1; index++) {
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
    tiles.placeOnTile(Enemy_1, tiles.getTileLocation(9, 113))
}
for (let index = 0; index < 1; index++) {
    Enemy_2 = sprites.create(img`
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
    tiles.placeOnTile(Enemy_2, tiles.getTileLocation(17, 67))
}
let mySprite = sprites.create(assets.image`professor`, SpriteKind.ally)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 2))
let Componenet = 1
forever(function () {
    Enemy_1.x += 40
    pause(1000)
    Enemy_1.x += -40
    pause(1000)
})
forever(function () {
    Enemy_2.x += -30
    pause(1000)
    Enemy_2.x += 30
    pause(1000)
})
