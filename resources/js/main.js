var checkImages = document.querySelectorAll('.alphabet-picker label');

var blet = document.querySelector('#b-letter');

checkImages.forEach(function(alphaLabel){
  alphaLabel.addEventListener('click', function(){
    var nv = this.attributes.for.nodeValue;
    var radThis = document.querySelector(`#${nv}`);
    var bigLetter = document.querySelector('#big-letter');
    var letDex = radThis.attributes.value.value;
    bigLetter.style.backgroundImage = `url('./resources/images/${letDex}.jpg')`;
  });
});
