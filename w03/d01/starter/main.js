$(function() {

  var box = $("input");
  var add, minus, multiply, divide;
  var num;
  var showlog = $('#log'), showlog2 = $('#log2'), showlog3 = $('#log3');
  var log = localStorage, log_index = log.length, log_index2 = log.length - 1, log_index3 = log.length - 2;

  $("#clear").click(function() {
    box.val('');
  });

  $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine").click(function(){
    box.val(box.val() + $(this).val());

  });
  $("#plus").click(function(){
    add=true;
    minus=false;
    multiply=false;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#subtract").click(function(){
    add=false;
    minus=true;
    multiply=false;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#multiply").click(function(){
    add=false;
    minus=false;
    multiply=true;
    divide=false;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#divide").click(function(){
    add=false;
    minus=false;
    multiply=false;
    divide=true;
    if(box.val()) {
      num = parseInt(box.val());
      box.val('');
    };
  });
  $("#equals").click(function(){
    var num2 = parseInt(box.val());
    var new_index = log_index + 1;

    if(num && add) {
      box.val(num + num2);
      res = num + num2;
      log.setItem(new_index, res);
    } else if (num && minus) {
      box.val(num - num2);
      res = num - num2;
      log.setItem(new_index, res);
    } else if (num && multiply) {
      box.val(num * num2);
      res = num * num2;
      log.setItem(new_index, res);
    } else if (num && divide) {
      box.val(num / num2);
      res = num / num2;
      log.setItem(new_index, res);
    } else {
      //$(body).insertBefore("img", );
    }
    var newlog = localStorage,
        newlog_index = log.length,
        newlog_index2 = log.length - 1,
        newlog_index3 = log.length - 2;
    showlog.text(log.getItem([newlog_index]));
    showlog2.text(log.getItem([newlog_index2]));
    showlog3.text(log.getItem([newlog_index3]));
  });
    showlog.text(log.getItem([log_index]));
    showlog2.text(log.getItem([log_index2]));
    showlog3.text(log.getItem([log_index3]));
});

//numbers gets clicked and box.val needs to get stored
//operator gets clicked and that gets stored
//numbers get clicked again and box.val must get stored
//user clicks equals, 1st, 2nd set of numbers get operated on by stored operator

//box.val().substring(box.val().length) === this.val() ? box.val() + return false;








