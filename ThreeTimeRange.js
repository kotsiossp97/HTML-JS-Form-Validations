$('#timeStart').clockTimePicker({
  precision: 30,
  onChange: function() {
    var selTime = this.value;
    var hrs = selTime.split(":")[0];
    var mins = selTime.split(":")[1];
    var prevHalf;
    if (parseInt(hrs) != 0) {
      if (hrs < 10) {
        if (mins == 0) {
          prevHalf = "0" + hrs - 1 + ":30";
        } else {
          prevHalf = "0" + hrs + ":00";
        }
      } else {
        if (mins == 0) {
          prevHalf = hrs - 1 + ":30";
        } else {
          prevHalf = hrs + ":00";
        }
      }
    } else if (mins == 0) {
      prevHalf = "23:30";
    } else {
      prevHalf = "00:00";
    }

    var nextime;
    if (parseInt(hrs) != 0) {
      if (hrs + 1 < 10) {
        if (mins == 0) {
          nextime = "0" + hrs + ":30";
        } else {
          nextime = "0" + parseInt(hrs) + 1 + ":00";
        }
      } else {
        if (mins == 0) {
          nextime = hrs + ":30";
        } else {
          nextime = parseInt(hrs) + 1 + ":00";
        }
      }
    } else if (mins == 0) {
      nextime = "00:30";
    } else {
      nextime = "01:00";
    }
    $('#timeEnd3').val(prevHalf);
    updateTimeEnd(nextime);
  },
});



function updateTimeEnd2(prevtime) {
	var hrs = parseInt(prevtime.split(":")[0]);
	var mins = prevtime.split(":")[1];
  if (parseInt(hrs) != 0) {
    if (hrs + 1 < 10) {
      if (mins == 0) {
        prevtime = "0" + hrs + ":30";
      } else {
        prevtime = "0" + parseInt(hrs) + 1 + ":00";
      }
    } else {
      if (mins == 0) {
        prevtime = hrs + ":30";
      } else {
        prevtime = parseInt(hrs) + 1 + ":00";
      }
    }
  } else if (mins == 0) {
    prevtime = "00:30";
  } else {
    prevtime = "01:00";
  }
  $("#timeEnd2").clockTimePicker({
    precision: 30,
    minimum: prevtime,
    onChange: function() {
      var selTime = this.value;
      var hrs = parseInt(selTime.split(":")[0]);
      var mins = selTime.split(":")[1];
      var nextime;
      if (parseInt(hrs) != 0) {
        if (hrs + 1 < 10) {
          if (mins == 0) {
            nextime = "0" + hrs + ":30";
          } else {
            nextime = "0" + parseInt(hrs) + 1 + ":00";
          }
        } else {
          if (mins == 0) {
            nextime = hrs + ":30";
          } else {
            nextime = parseInt(hrs) + 1 + ":00";
          }
        }
      } else if (mins == 0) {
        nextime = "00:30";
      } else {
        nextime = "01:00";
      }
      
      $("#timeStart3").val(nextime);
    }
  });
}

function updateTimeEnd(nextime) {
  $('#timeEnd').clockTimePicker({
    precision: 30,
    minimum: nextime,
    onChange: function() {
      var selTime = this.value;
      var hrs = selTime.split(":")[0];
      var mins = selTime.split(":")[1];
      var nextime;
      if (parseInt(hrs) != 0) {
        if (hrs + 1 < 10) {
          if (mins == 0) {
            nextime = "0" + hrs + ":30";
          } else {
            nextime = "0" + parseInt(hrs) + 1 + ":00";
          }
        } else {
          if (mins == 0) {
            nextime = hrs + ":30";
          } else {
            nextime = parseInt(hrs) + 1 + ":00";
          }
        }
      } else if (mins == 0) {
        nextime = "00:30";
      } else {
        nextime = "01:00";
      }
      $("#timeStart2").val(nextime);
      updateTimeEnd2(nextime);
    },
  });
}



// *********** HTML **************
<input id="timeStart" type="text"/>
<input id="timeEnd" type="text"/>
<br><br>
<input id="timeStart2" type="text" disabled/>
<input id="timeEnd2" type="text" />

<br><br>
<input id="timeStart3" type="text" disabled/>
<input id="timeEnd3" type="text" disabled/>
