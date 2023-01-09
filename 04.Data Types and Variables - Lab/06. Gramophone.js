function gramophone(bandName, albumName, song) {

    let rotation = 2.5;
    let duration = (albumName.length * bandName.length) * song.length / 2
    let rotations = Math.ceil(duration / rotation)
    console.log(`The plate was rotated ${rotations} times.`)
    
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')