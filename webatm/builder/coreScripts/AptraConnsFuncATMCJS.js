	// window.onerror=function(msg, url, linenumber)
	// {
 		// //alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
		// if (typeof APTRAPD  == "undefined")  
		// {
		// //alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
		// }
		// else 
		// {
			// //APTRAPD.SystemEscape("APTRA CONNECTIONS SCRIPT", url+'\nLine Number: '+linenumber+'\n'+msg);
		// }
//  		
 		// return true;
 	// }
 
	function globalException(msg, url, linenumber)
	{
		if (typeof APTRAPD  == "undefined")  {
			//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
		}
		else 	
		{
			APTRAPD.SystemEscape("APTRA CONNECTIONS SCRIPT", url+'\nLine Number: '+linenumber+'\n'+msg);
		}
	}

	function setCookie(key, value) {
	    var elementIndex = findCookieIndex( key );
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
	
	
	function getCookie( key )	{
		var result = null;
		var elementIndex = findCookieIndex( key );
		if( elementIndex != (-1) ) {   
			result = cookiesValueArr[ elementIndex ];
		}  
		return result;
	}
	
	function removeCookie( key ) {
		var result = null;
		var elementIndex = findCookieIndex( key );

		if( elementIndex != (-1) ){
			cookiesKeyArr   = removeAt(cookiesKeyArr,elementIndex);
			cookiesValueArr = removeAt(cookiesValueArr,elementIndex);
		}  
		return ;
   }
	
	function findCookieIndex( key ) {
		var result = (-1);
    	for( var i = 0; i < this.cookiesKeyArr.length; i++ ){
			if( this.cookiesKeyArr[ i ] == key ){
				result = i;
				break;
			}
		}
		return result;
   }
   
   function removeAt(cookiesArr, index ) {
	  var part1 = cookiesArr.slice( 0, index);
	  var part2 = cookiesArr.slice( index+1 );
	  return( part1.concat( part2 ) );
	}
	
	   
    function GetKeyData() {
		KEYBOARD.GetNumericData(255);
	}

	function GetFDKData(FDKBit) {
		KEYBOARD.GetFDKData(FDKBit);
	}
	
	function Trace(message){
		//SSMGHELPER.Trace(message);
		DBGLOG.Trace(message);
	}

	function keyboardCancel(){
	    KEYBOARD.Cancel();
		//KEYBOARD.Cancel();		
		KEYBOARD.TerminateKeys.DeactivateAllKeys();
	}	
	
	function Beep()
	{
		COM_UCDI_INTERFACE.UCDIString("RANDOM-NUMBER") = Math.random()*1001
		SSMGBEEPER.goBeep(800,50);
	}
	
	function BeepTimeOut()
	{
		SSMGBEEPER.goBeep(625,130);
	}
	
    function GetReceiptPrinterName(){
     	return SSMGHELPER.RegString("Advance NDC\\Aliases\\Receipt Printer");
    }
     
      function GetIPAddress(){
     	//return APTRAConnService.getLocalIP();
		//return SSMGHELPER.getLocalIP(); // AptraConns Defect #4944 fix
		return myPreferenceWSObJ.getLocalIP();  // fix multi-NIC issue
    }
          
	function SetPrinter() 
	{
    	//RECEIPT.SetPrinter("ReceiptPrinter1");
	}
	
	function PrintXFSReceipt(printDataL1, printDataL2 ,formName ,langIdx) 
	{
		var val=0;
		var i = 0;	
		var x = 1;	
		var currentField = 1;
	    RECEIPT.NewFields();
		var printdata = "";

	    for( i = 0 ; i < printDataL1.length ; i++ )
	    {	
	    	if (printDataL2[i].toString().length > 0)
				RECEIPT.Field("MESSAGEFIELDARA"+x) = printDataL2[i];
			else
			{
				if(printDataL1[i].toString().length > 0)
				{
					RECEIPT.Field("MESSAGEFIELD"+x) = printDataL1[i];
					if (i != 0)
						printdata = printdata + "~";
					printdata = printdata + printDataL1[i];
				}
				else
				{
					if (i != 0)
						printdata = printdata + "~";
				}
			}	
				
			//if(printDataL1[i].toString().length > 0)
			//	RECEIPT.Field("MESSAGEFIELD"+x) = printDataL1[i];
				
	    	x = x + 1;
	    }

		//val = RECEIPT.PrintForm(formName,true);
		COM_UCDI_INTERFACE.AC_PrintXFSReceipt(printdata, formName, langIdx);

	}
	
	function checkPrinter()
	{
		var printerType = GetReceiptPrinterName();
		
		try
		{
			if(printerType == "PRR30")
			{
				//RECEIPT_WIN.SetPrinter("PRR30");
				printType = "USB";
				atmType = "WINCOR";
			}
			else if(printerType == "USBReceiptPrinter1")
			{
			    RECEIPT.SetPrinter("USBReceiptPrinter1");
			    printType = "USB";
				atmType = "NCR";
			}
			else if(printerType == "ReceiptPrinter1")
			{
			    RECEIPT.SetPrinter("ReceiptPrinter1");
			    printType = "SER";
			    atmType = "NCR";
			}
			else
			{
			 	RECEIPT.SetPrinter("ReceiptPrinter1");
			 	printType = "SER";
			 	atmType = "NCR";
			}
		}
		catch(err)
		{
			Trace("ACTransact >> XFS Receipt Printer Init Error : " + err.message);
		}
		
	}
	
	function SetNCRUSBPrinter() 
	{
    	//RECEIPT.SetPrinter("USBReceiptPrinter1");
	}
	
	function SetSerialPrinter() 
	{
    	//RECEIPT.SetPrinter("ReceiptPrinter1");
	}
	
	function initApp()
	{
		var x = setTimeout("checkPrinter()",1000);
		//var x = setTimeout("SetPrinter()",2000);
	}
	
	function GetReceiptPrinterName()
	{
     	return SSMGHELPER.RegString("Advance NDC\\Aliases\\Receipt Printer");
    }
	
	function GenerateTAC(strPreTAC, DestAcc)
	{
		return COM_UCDI_INTERFACE.AC_GenTac(strPreTAC, DestAcc);
	}
	
	// 2013-07-22 : HK/TW : new function for AC 
	function removeAllCookie()
    {
        cookiesKeyArr = new Array();
        cookiesValueArr = new Array();
    }
	
	
	const database = "C:\Program Files\NCR APTRA\Advance NDC\WEBATM\APTRABuilder.sqlite";
	
	var dbobjReceipt = new ActiveXObject('SSMGDeviceService.Receipt');
	var dbobj= new ActiveXObject('SSMGSQLITEService.sqliteHelper');
	var jnlobj = new ActiveXObject('SSMGJNLService.JNLService');
	var printType = "";
	var printModeType = "";
	var atmType = "";
	
	function PrintWINReceipt(msg)
	{
		dbobjReceipt.AtmType = atmType;	
		dbobjReceipt.PrintBuffer=msg;
		dbobjReceipt.print();
	}

	function SetUCDIStr(CDI, val)
	{
		COM_UCDI_INTERFACE.UCDIstring(CDI)= val;
	}
	
	function SetUCDIIntegar(CDI, val)
	{
		COM_UCDI_INTERFACE.UCDIinteger(CDI) = val;
	}
	
	function SetComString(key, val)
	{
		 COMCDIINTERFACE.comString(key) = val;
	}
	
	function SetComInt(key, val)
	{
		 COMCDIINTERFACE.comInteger(key) = val;
	}
	
	function GetUCDIString(key)
	{
		return  COM_UCDI_INTERFACE.UCDIString(key);
	}
	
	function GetUCDIIntegar(key)
	{
		return  COM_UCDI_INTERFACE.UCDIinteger(key);
	}

	function GetComString(key)
	{
		return  COMCDIINTERFACE.comString(key);		
	}		
	
	function GetComInt(key)
	{
		return  COMCDIINTERFACE.comInteger(key);
	}
	
	function RetrieveScreenInterface(screen)
	{
		return RETRIEVESCRINTERFACE.RetrieveScr(48 , screen);	
	}
	
	function LogToJournal(message)
	{
		jnlobj.Print(message);
	}
	
	function QueryDatabase(query)
	{	
		var xmlResult;
		
		xmlResult = dbobj.query(query, database);
		
		if(xmlResult.length == 0)
			return "ERROR";
		else
			return xmlResult;
	}
	
	function KEYBOARD_KeyPressed (key, keyType)
	{
		if(keyType == "FDK")
		{		
		    KEYBOARD.Cancel;
		    ProcessFDK(key);
		    KEYBOARD.TerminateKeys.DeactivateAllKeys;		 	      
		}
		else
		{
			var finalPressValue;
			
			if(keyType == "ENTER")
				KEYBOARD.TerminateKeys.DeactivateAllKeys;
			else if(key == 11)
				KEYBOARD.TerminateKeys.DeactivateAllKeys;
			
			if(keyType == "CANCEL")
				finalPressValue = "11";
			else if(keyType == "CLEAR" || keyType == "BACK")
				finalPressValue = "13";
			else
				finalPressValue = key;
		    
			ProcessKeyPad(finalPressValue);
		}
	}
	
	function DMINTERFACE_KeyEchoData(data)
	{
	   parent.rightFrame.KeyEchoed(data);
	}
	
	function DMINTERFACE_KeyPressData(data)   
	{
		parent.rightFrame.KeyPressed(data);
	}
	
	function RECEIPT_ReceiptAvailabilityChanged(status, workstationID, timeStamp)
	{
		if(status == "0")
		{
			//printType = "USB"
			//atmType = "NCR"
		}
		else
		{
			//printType = "SER"
			SetSerialPrinter();
		}
	}
	
	function RECEIPT_PrintCompleted(lReqID, lResult)
	{
		ReceiptStatusReturn(lResult);
	}

	function BarCode_ReadBarcodeCompleted(requestID ,timeStamp,reason,data)
	{
		BarCodeValueReturn(reason , data);
	}
	
	function GetPrinterType()
	{
		return printType;
	}
	
	function DeRegisteredPreferenceTrx(myPreferenceId)
	{
		return myPreferenceWS.DeRegisteredPreferenceTrx(myPreferenceId);
	}
	
	function ProcessKeyPad(Key){
	    COM_UCDI_INTERFACE.UCDIString("RANDOM-NUMBER") = Math.random()*1001
		parent.frames["ACContainer"].ProcessKeyPad(Key);
	}
	
	function ProcessOnTouchFDK(Key) {
		Beep();
		KEYBOARD.Cancel();
		parent.frames["ACContainer"].ProcessFDK(Key);	
	}
	
	function ExitAANDCMainMenu(URL){
		KEYBOARD.Cancel();
		parent.frames["atmcFrame"].ExitACMainMenu(URL);
		//parent.frames["rightFrame"].document.location.href = URL;
	}
	
	function ProcessFDK(Key){
		parent.frames["ACContainer"].ProcessFDK(Key);
	}
	
	function REQFunction(type)
	{
		
	}
	
	function RESATMCFunc(status , additionalStatus)
	{
		parent.frames["ACContainer"].ATMCResponse(status , additionalStatus);
	}
