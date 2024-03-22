function eppPress(val) {
	ACCoreJS.ProcessKeyPad(val);
}	

function fdkPress(val) {
	ACCoreJS.ProcessFDK(val);
}

function pinEntered(type , value) {
	ACCoreJS.ProcessPINEntered(type , value);
}


function ATMCGoodResponse() {
	ACCoreJS.ATMResponse("0" ,document.getElementById("RESPONSE_GOOD").value);
}

function ATMCGoodResponse1(val) {
	ACCoreJS.ATMResponse("0" ,val);
}

function ATMCBadResponse() {
	ACCoreJS.ATMResponse("1" , document.getElementById("RESPONSE_BAD").value);
}

function ATMCBadResponse1(val) {
	ACCoreJS.ATMResponse("1" , val);
}

function DisplayTransact(val) {
	trace = "";
	ACCoreJS.Trace(trace);
	ACCoreJS.DisplayTransactScreen(val);
	
}

function processPinPadFDKSimulationButton(val , isPin)
{
	var keyValue = val;

	if(typeof keyValue == "undefined")
		keyValue = "00000000000000000";

	var CLEARIDX  = 0;
	var CANCELIDX = 1;
	var ENTERIDX  = 2;
	var PIN00ID    = 3;
	var FULLSTOPIDX = 4;
	var NUMBERIDX = 5;
	var FDK1IIDX  = 6;
	var FDK2HIDX  = 7;
	var FDK3GIDX  = 8;
	var FDK4FIDX  = 9;
	var FDK5AIDX  = 10;
	var FDK6BIDX  = 11;
	var FDK7CIDX  = 12;
	var FDK8DIDX  = 13;

	if(keyValue.length == "12")
	{
		CLEARIDX  = 0;
		CANCELIDX = 1;
		ENTERIDX  = 2;
		FULLSTOPIDX = 99;
		PIN00ID     = 99;
		NUMBERIDX = 3;
		FDK1IIDX  = 4;
		FDK2HIDX  = 5;
		FDK3GIDX  = 6;
		FDK4FIDX  = 7;
		FDK5AIDX  = 8;
		FDK6BIDX  = 9;
		FDK7CIDX  = 10;
		FDK8DIDX  = 11;
	}

	if(keyValue.charAt(CLEARIDX) == "1")
		document.getElementById("eppClear").disabled = false;
	else
		document.getElementById("eppClear").disabled = true;

	if(keyValue.charAt(CANCELIDX) == "1")
		document.getElementById("eppCancel").disabled = false;
	else
		document.getElementById("eppCancel").disabled = true;

	if(keyValue.charAt(ENTERIDX) == "1")
		document.getElementById("eppEnter").disabled = false;
	else
		document.getElementById("eppEnter").disabled = true;

	if(keyValue.charAt(PIN00ID) == "1")
		document.getElementById("epp00").disabled = false;
	else
		document.getElementById("epp00").disabled = true;

	if(keyValue.charAt(FULLSTOPIDX) == "1")
		document.getElementById("eppFullStop").disabled = false;
	else
		document.getElementById("eppFullStop").disabled = true;

	if(keyValue.charAt(NUMBERIDX) == "1")
	{
		document.getElementById("epp1").disabled = false;
		document.getElementById("epp2").disabled = false;
		document.getElementById("epp3").disabled = false;
		document.getElementById("epp4").disabled = false;
		document.getElementById("epp5").disabled = false;
		document.getElementById("epp6").disabled = false;
		document.getElementById("epp7").disabled = false;
		document.getElementById("epp8").disabled = false;
		document.getElementById("epp9").disabled = false;
		document.getElementById("epp0").disabled = false;	

	}
	else if(isPin == "1" || keyValue.charAt(NUMBERIDX) == "0")
	{
		document.getElementById("epp1").disabled = true;
		document.getElementById("epp2").disabled = true;
		document.getElementById("epp3").disabled = true;
		document.getElementById("epp4").disabled = true;
		document.getElementById("epp5").disabled = true;
		document.getElementById("epp6").disabled = true;
		document.getElementById("epp7").disabled = true;
		document.getElementById("epp8").disabled = true;
		document.getElementById("epp9").disabled = true;
		document.getElementById("epp0").disabled = true;											
	}

	if(keyValue.charAt(FDK1IIDX) == "1")
		document.getElementById("fdkI").disabled = false;
	else
		document.getElementById("fdkI").disabled = true;

	if(keyValue.charAt(FDK2HIDX) == "1")
		document.getElementById("fdkH").disabled = false;
	else
		document.getElementById("fdkH").disabled = true;

	if(keyValue.charAt(FDK3GIDX) == "1")
		document.getElementById("fdkG").disabled = false;
	else
		document.getElementById("fdkG").disabled = true;

	if(keyValue.charAt(FDK4FIDX) == "1")
		document.getElementById("fdkF").disabled = false;
	else
		document.getElementById("fdkF").disabled = true;

	if(keyValue.charAt(FDK5AIDX) == "1")
		document.getElementById("fdkA").disabled = false;
	else
		document.getElementById("fdkA").disabled = true;

	if(keyValue.charAt(FDK6BIDX) == "1")
		document.getElementById("fdkB").disabled = false;
	else
		document.getElementById("fdkB").disabled = true;

	if(keyValue.charAt(FDK7CIDX) == "1")
		document.getElementById("fdkC").disabled = false;
	else
		document.getElementById("fdkC").disabled = true;

	if(keyValue.charAt(FDK8DIDX) == "1")
		document.getElementById("fdkD").disabled = false;
	else
		document.getElementById("fdkD").disabled = true;
}

function testExecute() {
	ACCoreJS.ATMCExecuteFunction("UpdateImage" , "C:\\test\\1.jpg");
}