$("#monthStart").on('focus', function(){
  $("#monthStart").data("prev",this.value);
  }).change(function(){
    var selectedValue = this.value;
  var prevVal = parseInt(selectedValue)-1;
  $("#monthEnd3 option[selected]").removeAttr("selected");
  if(prevVal<=0){
    prevVal += 12;
  }
  
  if(prevVal<10){
    prevVal = "0"+prevVal;
  }
  prevVal = prevVal.toString();
  
  var previous = $("#monthStart").data("prev");
  $("#monthEnd option[value='"+selectedValue+"']").hide();
  
  if(previous!="" && previous!=selectedValue){
    $("#monthEnd option[value='"+previous+"']").show();	
  }
  //$("#monthStart").data("prev",selectedValue);
  console.log(prevVal);
  //$('#monthEnd3 option[value="'+prevVal+'"]').attr('selected');
  $('#monthEnd3').val(prevVal);
  });

$('#monthEnd').on('change', function(){
    var selectedValue = this.value;
    var nextVal = parseInt(selectedValue)+1;
    
    if(nextVal>12){
    	nextVal-=12;
    }
    if(nextVal<10){
    	nextVal = "0"+nextVal;
    }
    $('#monthStart2').val(nextVal);
    $('#monthStart2').trigger('change');
});


$("#monthStart2").on("change", function(){
	var selectedValue = this.value;
	$('#monthEnd2').find('option').each(function() {
    $(this).show();
  });
  $('#monthEnd2').find('option').each(function() {
    if($(this).val()<=selectedValue){
    	$(this).hide();
    }
  });
});

$("#monthEnd2").on("change", function(){
	var selectedValue = this.value;
	var nextVal = parseInt(selectedValue)+1;
    
    if(nextVal>12){
    	nextVal-=12;
    }
    if(nextVal<10){
    	nextVal = "0"+nextVal;
    }
    $('#monthStart3').val(nextVal);
    
});



//***************  HTML  ******************
// <select name="monthStart" id="monthStart">
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>

// <select name="monthEnd" id="monthEnd">
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>
// <br>
// <br>
// <br>
// <select name="monthStart2" id="monthStart2"  class="datefield month" disabled>
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>

// <select name="monthEnd2" id="monthEnd2"  class="datefield month">
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>

// <br>
// <br>
// <br>
// <select name="monthStart3" id="monthStart3"  class="datefield month" disabled>
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>

// <select name="monthEnd3" id="monthEnd3"  class="datefield month" disabled>
//     <option value="">Month</option>
//     <option value="01">Jan</option>
//     <option value="02">Feb</option>
//     <option value="03">Mar</option>
//     <option value="04">Apr</option>
//     <option value="05">May</option>
//     <option value="06">Jun</option>
//     <option value="07">Jul</option>
//     <option value="08">Aug</option>
//     <option value="09">Sep</option>
//     <option value="10">Oct</option>
//     <option value="11">Nov</option>
//     <option value="12">Dec</option>
// </select>
