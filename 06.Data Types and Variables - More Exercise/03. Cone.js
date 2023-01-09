function cone(r, h) {

    let volume = (Math.PI * Math.pow(r, 2) * h) / 3

    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))
    let l = Math.PI * r * s;
    let b = Math.PI * Math.pow(r, 2)
    let area = l + b;
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}
cone(3, 5)