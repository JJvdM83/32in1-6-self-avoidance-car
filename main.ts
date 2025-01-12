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
            wuKong.setAllMotor(-50, 10)
            basic.pause(randint(10, 200))
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        } else {
            wuKong.setAllMotor(10, -50)
            basic.pause(randint(10, 200))
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        }
        Sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
        wuKong.setAllMotor(-20, -30)
    }
})
