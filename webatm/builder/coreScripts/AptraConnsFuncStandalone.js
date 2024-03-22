	window.onerror=function(msg, url, linenumber)
	{
 		//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
		if (typeof APTRAPD  == "undefined")  
		{
		//alert("APTRA CONNECTIONS", url+'\nLine Number: '+linenumber+'\n'+msg);
		}
		else 
		{
			APTRAPD.SystemEscape("APTRA CONNECTIONS SCRIPT", url+'\nLine Number: '+linenumber+'\n'+msg);
		}
 		
 		return true;
 	}
 
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
	
	function removeAllCookie()
	{
		cookiesKeyArr = new Array();
		cookiesValueArr = new Array();
	}
	
	/* Device Function START*/
	
	function ProcessOnTouchFDK(Key) {
		Beep();
		KEYBOARD.Cancel();		
		parent.frames["ACContainer"].ProcessFDK(Key);	
	}
	
    function GetKeyData() {
		KEYBOARD.GetNumericData(255);
	}

	function GetFDKData(FDKBit) {
		KEYBOARD.GetFDKData(FDKBit);
	}
	
	function Trace(message){
		DBGLOG.Trace(message);
	}

	function keyboardCancel(){
		KEYBOARD.Cancel();
		KEYBOARD.TerminateKeys.DeactivateAllKeys();	
	}	
	
	function Beep()
	{
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
     	return myPreferenceWSObJ.getLocalIP();
    }
 
	/* Device Function END*/
	
	/* CDI Function START */
	
	function SetUCDIStr()
	{
	}
	
	/* CDI Function END */
	
	
	function initApp()
	{
		//var x = setTimeout("checkPrinter()",10000);
		//var x = setTimeout("SetPrinter()",2000);
	}
	
	function ExitAANDCMainMenu(URL){
		KEYBOARD.Cancel();
		parent.frames["atmcFrame"].ExitACMainMenu("http://" + URL);
		//parent.frames["rightFrame"].document.location.href = URL;
	}
	
	function ProcessKeyPad(Key){
		try{	
			parent.frames["ACContainer"].ACCoreJS.ProcessKeyPad(Key);
		}catch(error){
			Trace("ProcessKeyPad");
		}
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

	function RESATMFunc(status , additionalStatus)
	{
		parent.frames["ACContainer"].ACCoreJS.ATMResponse(status , additionalStatus);
	}

	function DisplayTransactScreen(type)
	{
		parent.frames["ACContainer"].ACCoreJS.DisplayTransactScreen(type);
	}

	function GetATMCIsNoteTypesActive(type)
	{
		return parent.frames["atmcFrame"].IsNoteTypesActive(type);
	}
	
	function GetATMCNotesEntered(type)
	{
		return parent.frames["atmcFrame"].GetNotesEntered(type);
	}
	
	function GetATMCLatestNotesEntered(type)
	{
		return parent.frames["atmcFrame"].GetLatestNotesEntered(type);
	}
	
	function IBMtoBig5(type)
	{
		return parent.frames["atmcFrame"].IBMtoBig5(type);
	}
