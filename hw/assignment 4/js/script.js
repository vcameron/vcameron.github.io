$(function(){
  //hide stuff

  $('#getStarted, #finish, #previous, .hide, #survey').hide();


    //
  $('#title').on('mouseover',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    $('#getStarted').show();
  });
  $('#title').on('mouseleave',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');

});
$('#getStarted').on('click', function(){
  $('.hide').show();
  $('#getStarted').hide();
});
$('#finish').on('click',function(){
  $('#hide, #next, #previous, #finish').hide();
  $('#survey').show();
});

//survey
$('#yes').on('click',function(){
  $('#surveytitle').css("background-color","pink");
  //change multiple CSS properties
  $('#survey').css({
    "border":"1px solid pink",
    "background":"#gray"
  });
});

$('#no').on('click',function(){
  $('#surveytitle').css("background-color","pink");
  //change multiple CSS properties
  $('#survey').css({
    "border":"1px solid green",
    "background":"#gray"
  });

});

$('#next').on('click', function(){
  var currentItem = $('li.active');
  var nextItem = $('li.active').next();

  currentItem.toggleClass('active');

  nextItem.toggleClass('active');

  if($('li').last().hasClass('active')) {
    $('#next').hide();
    $('#finish').show();

  } else {
    $('#next').show();
  }
  if($('li').first().hasClass('active')) {
    $('#previous').hide();
  } else {
    $('#previous').show();
  }
  });

  $('#previous').on('click', function(){
    var currentItem = $('li.active');
    var previousItem = $('li.active').prev();

    currentItem.toggleClass('active');

    previousItem.toggleClass('active');
    if($('li').last().hasClass('active')) {
      $('#next').hide();
      $('#finish').show();

    } else {
      $('#next').show();
     }
    if($('li').first().hasClass('active')) {
      $('#previous').hide();
    } else {
      $('#previous').show();
    }
    });

});
