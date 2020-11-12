let hand = 0
let dice_roll = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        music.playMelody("A B E B E A F C5 ", 151)
        basic.showLeds(`
            . # # # .
            # . . # .
            # . . # .
            # # # . .
            # . . . .
            `)
    }
    if (hand == 2) {
        music.playMelody("B G F A F A F A ", 151)
        basic.showLeds(`
            # # # # #
            # . . . .
            . # # . .
            . . . # .
            # # # # #
            `)
    }
    if (hand == 3) {
        music.playMelody("A G A F A F A F ", 151)
        basic.showLeds(`
            # # # # .
            # . . # .
            # . . # .
            # # # . .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . # .
        # # . # .
        # . # # .
        # . . # .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    dice_roll = randint(1, 20)
    if (dice_roll == 1) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (dice_roll == 2) {
        basic.showLeds(`
            # # # . .
            . . # . .
            . # # . .
            # # . . .
            # # # # .
            `)
    }
    if (dice_roll == 3) {
        basic.showLeds(`
            # # # . .
            . . # . .
            # # # . .
            . . # . .
            # # # . .
            `)
    }
    if (dice_roll == 4) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            # # # # .
            . . # . .
            `)
    }
    if (dice_roll == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (dice_roll == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . . .
            . # # # .
            . # # # .
            `)
    }
    if (dice_roll == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (dice_roll == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (dice_roll == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (dice_roll == 10) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (dice_roll == 11) {
        basic.showLeds(`
            . . . . .
            # . # . .
            # . # . .
            # . # . .
            # . # . .
            `)
    }
    if (dice_roll == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . # . .
            # . # # #
            `)
    }
    if (dice_roll == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 16) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . # . .
            # . # # #
            # . # # #
            `)
    }
    if (dice_roll == 17) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (dice_roll == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (dice_roll == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (dice_roll == 20) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # #
            # . . # #
            # # . # #
            `)
    }
})
