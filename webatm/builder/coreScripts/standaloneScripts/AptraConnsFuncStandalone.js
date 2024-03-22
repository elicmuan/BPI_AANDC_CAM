window.onerror=function(msg, url, linenumber) {
	//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
	if (typeof APTRAPD  == "undefined") {
		//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
	} else
		APTRAPD.SystemEscape("APTRA CONNECTIONS SCRIPT", url+'\nLine Number: '+linenumber+'\n'+msg);

	try { Trace("<<ACTransact - error >> Message : " + msg + "   url : " + url + "   line number : " + linenumber); }
	catch (e) {}
	return true;
}

function globalException(msg, url, linenumber)
{
	if (typeof APTRAPD  == "undefined") {
		//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
	}
	else
		APTRAPD.SystemEscape("APTRA CONNECTIONS SCRIPT", url+'\nLine Number: '+linenumber+'\n'+msg);

	try { Trace("<<ACTransact - global exeption >> Message : " + msg + "   url : " + url + "   line number : " + linenumber); }
	catch (e) {}
}

var inputXML;
//var storeTheme;
var cookiesKeyArr = new Array();
var cookiesValueArr = new Array();

var applicationReady = false;
var initRequestDisplay = false;
var initRequestDisplayScreen = "";
var beepAudio;
var beepTimeoutAudio;

try {
	beepAudio = new Audio("projectAssets/beep.mp3");
} catch(e) {
}

try {
	beepTimeoutAudio = new Audio("projectAssets/beep_timeout.mp3");
} catch(e) {
} 


function SAsetCookie(key, value) {
	var elementIndex = SAfindCookieIndex( key );
	if( elementIndex == (-1) ) {
		//insert key & value
		cookiesKeyArr.push( key );
		cookiesValueArr.push( value );
	}
	else{
		//update value
		this.cookiesValueArr[ elementIndex ] = value;
	}
}


function SAgetCookie( key )	{
	var result = null;
	var elementIndex = SAfindCookieIndex( key );
	if( elementIndex != (-1) ) {
		result = cookiesValueArr[ elementIndex ];
	}
	return result;
}

function SAremoveCookie( key ) {
	var result = null;
	var elementIndex = SAfindCookieIndex( key );

	if( elementIndex != (-1) ){
		cookiesKeyArr   = removeAt(cookiesKeyArr,elementIndex);
		cookiesValueArr = removeAt(cookiesValueArr,elementIndex);
	}
	return ;
}

function SAfindCookieIndex( key ) {
	var result = (-1);
	for( var i = 0; i < this.cookiesKeyArr.length; i++ ){
		if( this.cookiesKeyArr[ i ] == key ){
			result = i;
			break;
		}
	}
	return result;
}

function SAremoveAt(cookiesArr, index ) {
	var part1 = cookiesArr.slice( 0, index);
	var part2 = cookiesArr.slice( index+1 );
	return( part1.concat( part2 ) );
}

function SAremoveAllCookie()
{
	cookiesKeyArr = new Array();
	cookiesValueArr = new Array();
}

/* Device Function START*/

function SAProcessOnTouchFDK(Key) {
	/*Not using*/
}

function SAGetPinEntry(pinStatus, keyValue) {
	if(typeof GetPin != "undefined")
		GetPin(pinStatus, keyValue);
}

function SAGetKeyData(val)
{
	//TO BE DISCUSS
	//KEYBOARD.GetNumericData(255);
	if(typeof GetNumericData != "undefined")
		GetNumericData(val);
}

function SAGetFDKData(FDKBit) {
	//TO BE DISCUSS
	//KEYBOARD.GetFDKData(FDKBit);
}

function SATrace(message){
	//TO BE DISCUSS
	if(typeof Trace != "undefined")
		Trace("<< ACTransact >> " + message);
}

function SAkeyboardCancel(){
	//TO BE DISCUSS
	//KEYBOARD.Cancel();
	//KEYBOARD.TerminateKeys.DeactivateAllKeys();
	if(typeof KeyboardCancel != "undefined")
		KeyboardCancel();
	//DeactiveAllKeys();
}

function SABeep()
{
	//TO BE DISCUSS
	//SSMGBEEPER.goBeep(800,50);
	try {
		beepAudio.pause();
		beepAudio.currentTime = 0;
		beepAudio.play();
	} catch(e) {
		
	}
}

function SABeepTimeOut()
{
	//TO BE DISCUSS
	//SSMGBEEPER.goBeep(625,130);
	try {
		beepTimeoutAudio.pause();
		beepTimeoutAudio.currentTime = 0;
		beepTimeoutAudio.play();
	} catch(e) {
		
	}
}

function SAGetReceiptPrinterName(){
	//return SSMGHELPER.RegString("Advance NDC\\Aliases\\Receipt Printer");
}

function SAGetIPAddress(){
	//TO BE DISCUSS
	return "";
	//return myPreferenceWSObJ.getLocalIP();
}

/* Device Function END*/

/* VBS Function START */

function SASetBufferValue(key, val)
{
	//COM_UCDI_INTERFACE.UCDIstring(CDI)= val;
	if(typeof SetBufferValue != "undefined")
		SetBufferValue(key, val);
}

function SASetUCDIStr(CDI, val)
{
	//COM_UCDI_INTERFACE.UCDIstring(CDI)= val;
	if(typeof SetBufferValue != "undefined")
		SetBufferValue(CDI, val);
}

function SASetUCDIIntegar(CDI, val)
{
	//COM_UCDI_INTERFACE.UCDIinteger(CDI) = val;
	if(typeof SetBufferValue != "undefined")
		SetBufferValue(CDI, val);
}

function SAGetUCDIString(key)
{
	if(typeof GetBufferValue != "undefined")
		return GetBufferValue(key);
	else
		return "";
}

function SAGetBufferValue(key)
{
	if(typeof GetBufferValue != "undefined")
		return GetBufferValue(key);
	else
		return "";
}

function SAGetUCDIIntegar(key)
{
	if(typeof GetBufferValue != "undefined")
		return GetBufferValue(key);
	else
		return "";
}

function SAGetComString(key)
{
	if(typeof GetBufferValue != "undefined")
		return GetBufferValue(key);
	else
		return "";
}

function SASetComString(key, val)
{
	//COMCDIINTERFACE.comString(key) = val;
	if(typeof SetBufferValue != "undefined")
		SetBufferValue(key, val);
}

function SAGetComInt(key)
{
	if(typeof GetBufferValue != "undefined")
		return GetBufferValue(key);
	else
		return "";
}

function SASetComInt(key, val)
{
	//COMCDIINTERFACE.comInteger(key) = val;
	if(typeof SetBufferValue != "undefined")
		SetBufferValue(key, val);
}

function SALogToJournal(message)
{
	//COM_UCDI_INTERFACE.UCDIstring("PRINT-JOURNAL")= message;
	if(typeof PrintJournal != "undefined") {
		PrintJournal(message);
	}
}

/* VBS Function END */


function initApp()
{
	//var x = setTimeout("checkPrinter()",10000);
	//var x = setTimeout("SetPrinter()",2000);
}

function SAExitAANDCMainMenu(URL){
	//TO BE DISCUSS
	//KEYBOARD.Cancel();
	//ExitACMainMenu("http://" + URL);
	//parent.frames["rightFrame"].document.location.href = URL;
}

function ProcessKeyPad(Key){
	try{
		ACCoreJS.ProcessKeyPad(Key);
	}catch(error){
		Trace("ProcessKeyPad");
	}
}

function ProcessKeyEcho(Key){
	try{
		ACCoreJS.ProcessPinEntry(Key);
	}catch(error){
		Trace("ProcessKeyEcho");
	}
}

function ProcessFDK(Key){
	ACCoreJS.ProcessFDK(Key);
}

function SAREQFunction(type)
{
	if(typeof REQFunction != "undefined")
		REQFunction(type);
	//SASetUCDIStr("TXID", type);
	
}

function RESATMCFunc(status , additionalStatus)
{
	ACCoreJS.ATMCResponse(status , additionalStatus);
}

function RESATMFunc(status , additionalStatus)
{
	ACCoreJS.ATMResponse(status , additionalStatus);
}

function DisplayTransactScreen(type)
{
	initRequestDisplay = true;

	if(applicationReady == true || applicationReady == "true")
	{
		ACCoreJS.DisplayTransactScreen(type);
	}		
	else
	{
		initRequestDisplayScreen = type;
	}
}

function SASetAppReady(val)
{
	applicationReady = val;

	if(initRequestDisplay == true || initRequestDisplay == "true")
	{
		ACCoreJS.DisplayTransactScreen(initRequestDisplayScreen);
	}
}

function SAGetATMCIsNoteTypesActive(type)
{
	return "";
	//return parent.frames["atmcFrame"].IsNoteTypesActive(type);
}

function SAGetATMCNotesEntered(type)
{
	return "";
	//return parent.frames["atmcFrame"].GetNotesEntered(type);
}

function SAGetATMCLatestNotesEntered(type)
{
	return "";
	//return parent.frames["atmcFrame"].GetLatestNotesEntered(type);
}

function SAIBMtoBig5(type)
{
	return "";
	//return parent.frames["atmcFrame"].IBMtoBig5(type);
}

function SAInvokeMethod(method, params) {
	if(typeof invokeMethod != "undefined") { return invokeMethod(method, params); } else { return ""; }
}

function SARetrieveScreenInterface(screen)
{
	return "";
}

function SAGetCDIStoreValue(CDI)
{
	return "";
}

function SASetPrinter()
{

}

function SAGetPrinterType()
{
	return "";
}

function SAreadBARCode()
{

}

function SAdisableBarcode()
{

}

function SAsetWaitForResponse()
{

}

function SACallUpdateCustomerSeen(cardNo, campaignId)
{
	try
	{
		return myPreferenceWSObJ.CallUpdateCustomerSeen(cardNo, campaignNo);
	}
	catch(err)
	{
		SATrace("SACallUpdateCustomerSeen ERROR : " + err);
		return "";
	}
	
}

function SAsendResult(transData)
{
	try
	{
		var requestData = new Object();
		requestData["data"] = transData;

		$.support.cors = true;
        $.ajax({
            type: 'POST',
            async: false,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACInterAct/SubmitResult",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});
            }
        });

		// myPreferenceWSObJ.RegisterPreferenceTrx(cardNo, transData,opCode);
	}
	catch(err)
	{
		SATrace("SAsendResult ERROR : " + err);
	}
	
}

function SARegisterPreferenceTrx(cardNo, transData,opCode)
{
	try
	{
		var requestData = new Object();
		requestData["cardNo"] = cardNo;
		requestData["data"] = transData;
		requestData["serviceType"] = opCode;

		$.support.cors = true;
        $.ajax({
            type: 'POST',
            // async: false,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACUserPreference/RegisterPreferenceTrx",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});
            }
        });

		// myPreferenceWSObJ.RegisterPreferenceTrx(cardNo, transData,opCode);
	}
	catch(err)
	{
		SATrace("SARegisterPreferenceTrx ERROR : " + err);
	}
	
}

function SAUpdateRegisteredPreferenceTrx(id,cardNo,transData,opCode)
{
	try
	{
		var requestData = new Object();
		requestData["cardNo"] = cardNo;		
		requestData["id"] = id;
		requestData["serviceType"] = opCode;		
		requestData["data"] = transData;
		
		$.support.cors = true;
        $.ajax({
            type: 'POST',
            // async: false,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACUserPreference/UpdatePreferenceTrx",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});
            }
        });

		// myPreferenceWSObJ.DeRegisteredPreferenceTrx(myPreferenceId);
	}
	catch(err)
	{
		SATrace("SAUpdateRegisteredPreferenceTrx ERROR : " + err);
	}
}

function SADeRegisteredPreferenceTrx(myPreferenceId)
{
	try
	{
		var requestData = new Object();
		requestData["id"] = myPreferenceId;
		
		$.support.cors = true;
        $.ajax({
            type: 'POST',
            // async: false,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACUserPreference/DeRegisteredPreferenceTrx",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});
            }
        });

		// myPreferenceWSObJ.DeRegisteredPreferenceTrx(myPreferenceId);
	}
	catch(err)
	{
		SATrace("SADeRegisteredPreferenceTrx ERROR : " + err);
	}
	
}

function SADeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo , callBack)
{
	try
	{
		var requestData = new Object();
		requestData["id"] = myPreferenceId;
		requestData["cardNo"] = cardNo;
		
		$.support.cors = true;
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACUserPreference/DeRegisteredPreferenceTrxWithUpdateInfo",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);

                // return data["result"];

                ACCoreJS.Trace("Latest Favorite List : " + data["result"]);
                SASetUCDIStr("InterActFavorList",data["result"]);

                if(typeof callBack != "undefined")
                	callBack();
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});

                return "";
            }
        });

		// return myPreferenceWSObJ.DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo);
	}
	catch(err)
	{
		SATrace("SADeRegisteredPreferenceTrxWithUpdateInfo ERROR : " + err);
		return "";
	}
	
}

function SARegisterThemeUser(cardNo, themeId)
{
	try
	{
		var requestData = new Object();
		requestData["themeId"] 	= themeId;
		requestData["cardNo"] 	= cardNo;
		
		$.support.cors = true;
        $.ajax({
            type: 'POST',
            // async: false,
            cache: false,
            data: requestData,
            dataType: "json",
            url: "http://localhost:8000/ACUserPreference/RegisterThemeUser",
            success: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Read Success  ********");
                // self.aandcFavListProcess("XML", data["result"]);

                return "";
            },
            error: function (data)
            {
                // ACLogging.Trace("********  AANDC Favorite XML Is Not Exist  ********");
                // App.DS.update({"systemFavList": ""});

                return "";
            }
        });

		// return myPreferenceWSObJ.RegisterThemeUser(cardNo, themeId);
	}
	catch(err)
	{
		SATrace("SARegisterThemeUser ERROR : " + err);
		return "";
	}
	
}

function KEYBOARD_PINEntered (result, value)
{
	//ProcessPINEntered(result, value);	
	ACCoreJS.ProcessPINEntered(result, value);	
}

function KEYBOARD_KeyPressed(key, keyType)
{
	SATrace("KEYBOARD_KeyPressed keyType : " + keyType);
	SATrace("KEYBOARD_KeyPressed key     : " + key);

	if(keyType == "FDK")
	{
	    try
		{
			SAkeyboardCancel();
		}
		catch(err)
		{
			SATrace("KEYBOARD_KeyPressed ERROR FDK : " + err);
		}	

		 ProcessFDK(key);
	}
	else
	{
		var finalPressValue = "";

		try
		{
			if(keyType == "ENTER")
			{
				// KEYBOARD.TerminateKeys.DeactivateAllKeys();
				EO.extInvoke('KEYBOARDTerminateKeysDeactivateAllKeys');
			}
			else if(key == "11")
			{
				// KEYBOARD.TerminateKeys.DeactivateAllKeys();
				EO.extInvoke('KEYBOARDTerminateKeysDeactivateAllKeys');
			}
		}
		catch(err)
		{
			SATrace("KEYBOARD_KeyPressed ERROR PINPAD : " + err);
		}

		if(keyType == "CANCEL")
		{
			finalPressValue = "11";
		}
		else if(keyType == "CLEAR" || keyType == "BACK")
		{
			finalPressValue = "13";
		}
		else
			finalPressValue = key;

		ProcessKeyPad(finalPressValue);

	}
}

function DMINTERFACE_KeyEchoData(data)
{

}

function DMINTERFACE_KeyPressData(data)
{

}

function SAPrintReceipt(data) { //Data in array of strings
	PrintReceipt(data);
}