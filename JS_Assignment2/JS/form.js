/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
	
	/*Define variables used*/
	var ship_name = document.getElementById('shippingName');
	var ship_zip = document.getElementById('shippingZip');
	var bill_name = document.getElementById('billingName');
	var bill_zip = document.getElementById('billingZip');
	
	/*If checked, copy those values. Otherwise, make them blank.*/
	if (document.getElementById('same').checked){
		bill_name.value = ship_name.value;
		bill_zip.value = ship_zip.value;	
	}
	else{
		bill_name.value = "";
		bill_zip.value = "";
	}

}