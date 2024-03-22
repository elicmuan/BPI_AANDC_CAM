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
	
	 function GetIPAddress(){
     	//return APTRAConnService.getLocalIP();
		//return SSMGHELPER.getLocalIP(); // AptraConns Defect #4944 fix
		return myPreferenceWSObJ.getLocalIP();  // fix multi-NIC issue
    }
	
	function GenerateTAC(strPreTAC, DestAcc)
	{
		return COM_UCDI_INTERFACE.AC_GenTac(strPreTAC, DestAcc);
	}
	
	function removeAllCookie()
    {
        cookiesKeyArr = new Array();
        cookiesValueArr = new Array();
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
	
	function LogToJournal(message)
	{
		jnlobj.Print(message);
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
	
	function DeRegisteredPreferenceTrx(myPreferenceId)
	{
		return myPreferenceWS.DeRegisteredPreferenceTrx(myPreferenceId);
	}
	
	function ProcessKeyPad(Key){
	    COM_UCDI_INTERFACE.UCDIString("RANDOM-NUMBER") = Math.random()*1001
		parent.frames["ACContainer"].ACCoreJS.ProcessKeyPad(Key);
	}
	
	function ProcessOnTouchFDK(Key) {
		Beep();
		KEYBOARD.Cancel();
		parent.frames["ACContainer"].ACCoreJS.ProcessFDK(Key);	
	}
	
	function ExitAANDCMainMenu(URL){
		KEYBOARD.Cancel();
		parent.frames["atmcFrame"].ExitACMainMenu("http://" + URL);
		//parent.frames["rightFrame"].document.location.href = URL;
	}
	
	function ProcessFDK(Key){
		parent.frames["ACContainer"].ACCoreJS.ProcessFDK(Key);
	}
	
	function REQFunction(type)
	{
		parent.frames["atmcFrame"].REQFunction(type);
	}
	
	function RESATMCFunc(status , additionalStatus)
	{
		parent.frames["ACContainer"].ACCoreJS.ATMCResponse(status , additionalStatus);
	}