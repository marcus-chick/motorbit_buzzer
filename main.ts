input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.ForeverInBackground)
})
basic.showNumber(121)
