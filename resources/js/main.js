var checkImages = document.querySelectorAll('.alphabet-picker label');

var blet = document.querySelector('#b-letter');

checkImages.forEach(function(alphaLabel){
  alphaLabel.addEventListener('click', function(){
    console.dir(this);
    var nv = this.attributes.for.nodeValue;
    console.log(nv);
    var radThis = document.querySelector(`#${nv}`);
    var bigLetter = document.querySelector('#big-letter');
    var letDex = radThis.attributes.value.value;
    console.log(radThis.attributes);
    console.log(letDex);
    console.log(`./resources/images/${letDex}.jpg`);
    bigLetter.style.backgroundImage = `url('./resources/images/${letDex}.jpg')`;
    console.log(bigLetter.style.backgroundImage);
  });
});
