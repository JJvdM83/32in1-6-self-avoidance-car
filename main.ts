input.onButtonPressed(Button.AB, function () {
    wuKong.setAllMotor(-20, -30)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.stopAllMotor()
})
let Sonor = 0
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()
basic.showString("3 2 1")
wuKong.setAllMotor(-20, -30)
basic.forever(function () {
    Sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    while (Sonor < 20 && Sonor > 1) {
        if (Math.randomBoolean()) {
            wuKong.setAllMotor(50, 0)
            basic.pause(randint(100, 500))
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        } else {
            wuKong.setAllMotor(0, 50)
            basic.pause(randint(200, 500))
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        }
        Sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
        wuKong.setAllMotor(-20, -30)
    }
})
