newGame();
$("#shop-again").on('click', newGame);
/*========functions========*/
function newGame() {
  //draw the headline
  $('h1').html('Thanks for shopping at the GWU Gem Store💎! Your total is $<span id="total"></span>')
  //generate a number within 1000 with 2 decimals as the amount to be paid
  total = Number((Math.random() * 1000).toFixed(2));
  $('#total').text(total);
  //reset the paid amount to 0
  paid = 0;
  $('#paid').text('$'+paid);
  //at click-able events to the bills and coins
  $('[alt]').css('cursor', 'pointer')
  $('[alt]').on('click', payWithThis);
  //hide the "Shop Again" button before game is finished
  $('#shop-again').toggleClass('hidden', true);
}

function payWithThis() {
  // console.log($(this).attr('alt'));
  //determine the amount clicked
  faceValue = $(this).attr('alt');
  if (faceValue.includes('dollar')) {
    paid += parseInt(faceValue);
  }
  if (faceValue.includes('cent')) {
    paid += parseInt(faceValue) / 100;
  }
  //update the paid amount and decide if game is over
  $('#paid').text('$'+paid);
  $('.progress-bar.bg-warning').css('width', paid/total*100+'%');
  if (paid >= total) {
    gameOver();
  }
}

function gameOver() {
  if (paid > total) {
    $('h1').text('Did I hear "keep the change"? Thank you so much! Have a wonderful day💎!');
  }
  if (paid == total) {
    $('h1').text("Wow! You're good at math!!");
  }
  $('#shop-again').toggleClass('hidden', false); //reveal the shop again button
  removeClickListeners();
}

function removeClickListeners() {
  $('[alt]').off();
  $('[alt]').css('cursor', 'default');
}
