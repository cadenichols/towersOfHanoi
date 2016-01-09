'use strict';

var $towers;

$(document).ready(init);

function init() {
  $towers = $('.tower');
  $towers.click(towerClicked);
}

function towerClicked() {
  var $this = $(this);
  var $selected = $('.selected');
  if($selected.length) { // have a selection
    if($this.find('.selected').length) { // selected piece is here (unselect)
      $selected.removeClass('selected');
    } else { // selected piece not here (move)
      var selectedSize = $selected.data('size');
      var targetSize = $this.find('.disk').first().data('size') || Infinity;
      //check legality
      if(selectedSize < targetSize){
        //move
        var $piece = $selected.detach();
        $this.children().prepend($piece);
        $selected.removeClass('selected');
        checkWin();
      }
    }
  } else { // we don't have a selection
    $this.find('.disk').first().addClass('selected');
  }
}

function checkWin() {
  if($towers.slice(0,2).find('.disk').length === 0) {
    alert('WIN!')
  }
}

