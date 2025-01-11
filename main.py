Sonor = 0
wuKong.set_all_motor(-20, -30)

def on_forever():
    global Sonor
    Sonor = sonarbit.sonarbit_distance(Distance_Unit.DISTANCE_UNIT_CM, DigitalPin.P1)
    if Sonor < 20 and Sonor > 1:
        if Math.random_boolean():
            wuKong.set_all_motor(-50, 0)
            basic.pause(randint(500, 1500))
        else:
            wuKong.set_all_motor(0, -50)
            basic.pause(randint(500, 1500))
    else:
        wuKong.set_all_motor(-20, -30)
basic.forever(on_forever)
