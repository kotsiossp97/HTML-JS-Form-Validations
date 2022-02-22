$('#timeStart').clockTimePicker({
	precision: 30,
  onChange: function (){
    var selTime = this.value;
    var hrs = selTime.split(":")[0];
    var mins = selTime.split(":")[1];
    var prevHalf;
    if(parseInt(hrs) != 0){
    	if(hrs < 10){
      	if(mins == 0){
					prevHalf = "0"+hrs-1+":30";
        }
        else{
       		prevHalf = "0"+hrs+":00";
        }
      }
      else{
      	if(mins == 0){
					prevHalf = hrs-1+":30";
        }
        else{
        	prevHalf = hrs+":00";
        }
      }
    }
    else if(mins == 0){
    	prevHalf = "23:30";
    }
    else{
    	prevHalf = "00:00";
    }
		
    var nextime;
    if(parseInt(hrs) != 0){
    	if(hrs+1 < 10){
      	if(mins == 0){
					nextime = "0"+hrs+":30";
        }
        else{
       		nextime = "0"+hrs+1+":00";
        }
      }
      else{
      	if(mins == 0){
					nextime = hrs+":30";
        }
        else{
        	nextime = hrs+1+":00";
        }
      }
    }
    else if(mins == 0){
    	nextime = "00:30";
    }
    else{
    	nextime = "01:00";
    }
  	$('#timeEnd2').val(prevHalf);
    console.log(nextime);
    $('#timeEnd').clockTimePicker({
    	minimum: nextime,
      precision: 30,
    });
  },
});

$('#timeEnd').clockTimePicker({
	precision: 30,
  onChange: function (){
  	var selTime = this.value;
    var hrs = selTime.split(":")[0];
    var mins = selTime.split(":")[1];
  	var nextime;
    if(parseInt(hrs) != 0){
    	if(hrs+1 < 10){
      	if(mins == 0){
					nextime = "0"+hrs+":30";
        }
        else{
       		nextime = "0"+hrs+1+":00";
        }
      }
      else{
      	if(mins == 0){
					nextime = hrs+":30";
        }
        else{
        	nextime = hrs+1+":00";
        }
      }
    }
    else if(mins == 0){
    	nextime = "00:30";
    }
    else{
    	nextime = "01:00";
    }
    console.log(nextime);
    $("#timeStart2").val(nextime);
  },
});

//************** HTML ******************
<input id="timeStart" type="text"/>
<input id="timeEnd" type="text"/>
<br><br>
<input id="timeStart2" type="text" disabled/>
<input id="timeEnd2" type="text" disabled/>
