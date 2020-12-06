
// console.log('!')
// var img = document.createElement('img')
// document.getElementById('wallpapers').appendChild(img)
// img.src = 'wallpapers/blips/blips0.png'

var wpHolder = document.getElementById('wallpapers')
var btnHolder = document.getElementById('album-names')

var albums = ['blips', 'hilbert', 'oneoffs', 'points', 'polygons', 'rolling', 'squiggle', 'strokes', 'triangles']
var albumLengths = [15,12,1,18,14,5,10,38,12]
var currentAlbum = albums[0]
var imgs = []
var albumElems = []

function changeAlbum() {
  imgs.forEach(img => {
    img.style.display = img.className == currentAlbum ? 'inline-block' : 'none'
  })
  albumElems.forEach(a => {
    a.className = currentAlbum == a.textContent ? 'selected' : ''
  })
}

albums.forEach((a,ai) => {
  var btn = document.createElement('div')
  btn.textContent = a
  if (ai == 0) btn.className = 'selected'
  const aName = a
  btn.addEventListener("click", function () {
    currentAlbum = aName
    changeAlbum()
  })
  albumElems.push(btn)
  btnHolder.appendChild(btn)
  for (var i = 0; i < albumLengths[ai]; i++) {
    var img = document.createElement('img')
    img.src = `wallpapers/${a}/${i}.png`
    img.style.display = a == currentAlbum ? 'inline-block' : 'none';
    img.classList.add(aName)
    imgs.push(img)
    wpHolder.appendChild(img)
  }
})