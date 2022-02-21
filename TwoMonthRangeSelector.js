//HTML
<select name="monthStart" id="monthStart"  class="datefield month">
    <option value="">Month</option>
    <option value="01">Jan</option>
    <option value="02">Feb</option>
    <option value="03">Mar</option>
    <option value="04">Apr</option>
    <option value="05">May</option>
    <option value="06">Jun</option>
    <option value="07">Jul</option>
    <option value="08">Aug</option>
    <option value="09">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
</select>

<select name="monthEnd" id="monthEnd"  class="datefield month">
    <option value="">Month</option>
    <option value="01">Jan</option>
    <option value="02">Feb</option>
    <option value="03">Mar</option>
    <option value="04">Apr</option>
    <option value="05">May</option>
    <option value="06">Jun</option>
    <option value="07">Jul</option>
    <option value="08">Aug</option>
    <option value="09">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
</select>
<br>
<br>
<br>
<select name="monthStart2" id="monthStart2"  class="datefield month" disabled>
    <option value="">Month</option>
    <option value="01">Jan</option>
    <option value="02">Feb</option>
    <option value="03">Mar</option>
    <option value="04">Apr</option>
    <option value="05">May</option>
    <option value="06">Jun</option>
    <option value="07">Jul</option>
    <option value="08">Aug</option>
    <option value="09">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
</select>

<select name="monthEnd2" id="monthEnd2"  class="datefield month" disabled>
    <option value="">Month</option>
    <option value="01">Jan</option>
    <option value="02">Feb</option>
    <option value="03">Mar</option>
    <option value="04">Apr</option>
    <option value="05">May</option>
    <option value="06">Jun</option>
    <option value="07">Jul</option>
    <option value="08">Aug</option>
    <option value="09">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
</select>


$('#monthStart').on('change', function(){
    var selectedValue = this.value;
    var prevVal = parseInt(selectedValue)-1;
    if(prevVal<=0){
    	prevVal+=12;
    }
    
    if(prevVal<10){
    	prevVal = "0"+prevVal;
    }
    
    $("#monthEnd option[value='"+selectedValue+"']").remove();
    $('#monthEnd2 option[value="'+prevVal+'"]').attr('selected','selected');
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
    $('#monthStart2 option[value="'+nextVal+'"]').attr('selected','selected');
});
