function boldText(){
  var textNames = $('.framework').children()
  textNames.map(function(index, textName){
    textName.style.fontWeight = '900'
    textName.style.textTransform = 'uppercase'
  })
}
