var picture = require('cat-picture')
var image = require('lightning-image-poly')
var remote = require('electron').remote
var fs = require('fs')

function save () {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error')
      else alert('pdf saved')
    })
  })
}

var src = picture.src
picture.remove()

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
