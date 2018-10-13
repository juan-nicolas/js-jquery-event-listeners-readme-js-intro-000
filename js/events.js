//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img')[0].classList.add('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(keypressed){
    if(keypressed.key === 'G'){
      alert('You entered the letter G')
    }
  })
}

function submitIt() {

}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
