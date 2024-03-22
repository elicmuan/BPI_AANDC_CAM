	//window.onerror=function(msg, url, linenumber)
	//{	
	//	parent.frames["leftFrame"].globalException(msg, url, linenumber);
	//	parent.frames["rightFrame"].location.href="../../error.html";	
	//	return true;
	//}

  	var finalArryL1;
	var finalArryL2;
	var finalFormName;
	var printlangIdx;
	var isWaitForResponse = "0";
	var backgroundScreen = "";
	var plswait = "";
	var createComplete = 0;
	var x;
	var printModeType = "";
	var allowClearDS = "";	
	var t1;
	var beepSound = "1";
	var keyActive = 0;
	var FDKKey = false;
	var createCompleteFailureCounter = 0;
	var allowGetKeyData = false;
	var keyDataType = "";
	var interNaviEvent = "";
	var interNaviEventTimer;
	var currentKeyDataVal = "";
	
	var applicationReady = false;
	
	var ACCoreJS = {
		SetKeyActive : function() {
			keyActive = 0;
		},
	
	 	ReactiveFDKAfterEnter:function() {
			this.jsGetKeyData(currentKeyDataVal);		  
			keyActive = 1;		
		},

		SetCurrentKeyDataType : function(val) {
			if(keyActive == 1) this.keyboardCancel();
			
			keyDataType = val;
		},
	
		GetKeyData:function(val) {
			this.Trace("GetKeyData : " +  val + " , " + currentKeyDataVal + " , " + keyActive + " , " + allowGetKeyData);

			if(currentKeyDataVal != val && keyActive == 1)
			{
				keyActive = 0;	
				this.keyboardCancel();
			}

			if(keyActive == 0  && allowGetKeyData == true) 
			{

				keyActive = 1;	
				this.jsGetKeyData(val);		  				
			}
		},

		GetPinEntry:function(pinStatus , keyValue) {
			if(keyActive == 0 && allowGetKeyData == true) {
				SAGetPinEntry(pinStatus , keyValue);
				keyActive = 1;
			}
		},

		SetBufferValue : function(key , val)
		{
			if(typeof(SASetBufferValue) != "undefined")
				SASetBufferValue(key,val);
		},
	
		SetUCDIStr:function(CDI, val) {
			if(typeof(SASetUCDIStr) != "undefined")
				SASetUCDIStr(CDI,val);
		},
		
		SetUCDIIntegar:function(CDI,val) {
			if(typeof(SASetUCDIIntegar) != "undefined")
				SASetUCDIIntegar(CDI,parseFloat(val));
		},
		
		SetComString:function(key, val) {
			if(typeof(SASetComString) != "undefined")
				SASetComString(key,val);
		},
		
		SetComInt:function(key, val) {
			if(typeof(SASetComInt) != "undefined")
				SASetComInt(key,parseFloat(val));
		},

		GetBufferValue : function(key)
		{
			if(typeof(SAGetBufferValue) != "undefined")
				return SAGetBufferValue(key);
			else
				return "";
		},
		
		GetUCDIString:function(CDI) {
			if(typeof(SAGetUCDIString) != "undefined")
				return SAGetUCDIString(CDI);
			else
				return "";
		},
		
		GetUCDIIntegar:function(CDI) {
			if(typeof(SAGetUCDIIntegar) != "undefined")
				return SAGetUCDIIntegar(CDI);
			else
				return "";
		},
	
		GetComString:function(key) {
			if(typeof(SAGetComString) != "undefined")
				return SAGetComString(key);
			else
				return "";
		},
		
		GetComInt:function(key)
		{
			if(key == 3126)
				return "30"; //Does activate post this value??
			else if(key == 3127)
				return "30";
			else if(key == 3127)
				return "20";
			else if(key == 1248)
				return "0";
			else
				return SAGetComInt(key);
		},
	
		RetrieveScreenInterface:function(screen)
		{
			return "";
			//return SARetrieveScreenInterface(screen);
		},
	
		GetCDIStoreValue:function(CDI)
		{
			return "";
			//return SAGetCDIStoreValue(CDI);
		},
	
		keyboardCancel:function() {
			if(keyActive == 1) SAkeyboardCancel();
			keyActive = 0;
		},
		
		ReceiptPrintStatus:function(status)
		{
			//TerminalUI.ReceiptPrintStatus(status);
		},
	
		BarCodeStatus:function(status , data)
		{
			//TerminalUI.BarCodeStatus(status , data);
		},
		
		ExitAANDCMainMenu:function(URL)
		{
			//parent.setRightFrameBlankHTML();
			SAExitAANDCMainMenu(URL);
			//parent.maximizeRightFrame();
		},
	
		Beep:function()
		{
			if(FDKKey == false)
				SABeep();
			else
				beepSound = 1;
			FDKKey = false;
		},
	
		/** Original VBS End**/
		
		GetIPAddress:function() {
			if(typeof(SAGetIPAddress) != "undefined")
				return SAGetIPAddress();
			else
				return "";
		},
			
		LogToJournal:function(message) {
			var arrMessage = [];
			arrMessage.push(message);
			
			ACCoreJS.Trace("Journal = " + message);
			if(typeof(SALogToJournal) != "undefined") SALogToJournal(JSON.stringify(arrMessage));
		},
		
		Trace:function(message) {
			if(typeof(SATrace) != "undefined") SATrace(message);
		},
		
		TimeOutBeep:function() {
			if(typeof(SABeepTimeOut) != "undefined") SABeepTimeOut();
		},
		
		SetPrinter:function() {
			//SASetPrinter();
		},
		
		GetPrinterType:function() {
			if(typeof(SAGetPrinterType) != "undefined") return SAGetPrinterType();
		},
			
		PrintXFSReceipt:function(printData, formName, langIdx) {
			var temp="";
				
			finalArryL1 = new Array();
			finalArryL2 = new Array();
			finalFormName = formName;
			printlangIdx = langIdx;
				
			for (i=0;i < printData[0].length;i++) {
				if(printData[0][i] == undefined || printData[0][i] == "")
					finalArryL1[i] = "";
				else
					finalArryL1[i] = printData[0][i];
			}
				
			for (x=0;x < printData[1].length;x++) {
				if(printData[1][x] == undefined || printData[1][x] == "")
					finalArryL2[x] = "";
				else
					finalArryL2[x] = printData[1][x];
			}
				
			//var y = setTimeout("printXFSDelay()",500);
			Trace("Form Name = " + formName);
			Trace("Print Data = " + finalArryL1.join());

			//parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,formName ,langIdx);
		},
			
		printXFSDelay:function() {			
			//parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,finalFormName ,printlangIdx);
		},
		
		readBarcode:function(formName) {
			//parent.frames["leftFrame"].readBARCode(formName);
		},
		
		disableBarcode:function() {
			//parent.frames["leftFrame"].disableBarcode();
		},
		
		setExtInteractionWaitForResponse:function(val) {
			isWaitForResponse = val;
			//parent.frames["leftFrame"].setWaitForResponse(val);
		},
		
		CallUpdateCustomerSeen:function(cardNo,campaignId) {
			//parent.frames["leftFrame"].CallUpdateCustomerSeen(cardNo, campaignId);
		},
		
		RegisterPreferenceTrx:function(cardNo,transData,opCode) {
			//parent.frames["leftFrame"].RegisterPreferenceTrx(cardNo, transData,opCode);
		},
		
		UpdateRegisteredPreferenceTrx:function(id,cardNo,transData,opCode) {
			//parent.frames["leftFrame"].updateFavoriteTransaction(id,cardNo,transData,opCode);
		},
		
		DeRegisteredPreferenceTrx:function(myPreferenceId) {
			//parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},
		
		DeRegisteredPreferenceTrxWithUpdateInfo:function(myPreferenceId , cardNo) {
			//return parent.frames["leftFrame"].DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo);
		},
		
		DeRegisteredListOfPreferenceTrx:function(myPreferenceArray) {
	        for(var i=0; i < myPreferenceArray.length; i++) {
	        	//parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceArray[i]);
	        }
		},
		
		DeRegisteredAANDCListOfPreferenceTrx:function(myPreferenceArray) {
	        for(var i=0; i < myPreferenceArray.length; i++) {
	        	//parent.frames["leftFrame"].myPreferenceWS.DeRegisteredMyPreference(myPreferenceArray[i]);
	        }
		},
	
		RegisterThemeUser:function(cardNo,themeId) {
			//parent.frames["leftFrame"].RegisterThemeUser(cardNo, themeId);
		},
		PrintWINReceipt:function(printData) {
			//var a = printData.join();
			printData[0]="data 0";
			printData[1]="data 1";
			printData[2]="data 2";
			printData[3]="data 3";

			//parent.frames["leftFrame"].PrintXFSReceipt(printData, printData ,"ACTestForm" ,langIdx);
				
			//parent.frames["leftFrame"].PrintWINReceipt(temp);
			
		},
		
		setCookie:function(key, value) {
			if(typeof(SAsetCookie) != "undefined") SAsetCookie(key, value);
		},
	
		getCookie:function( key ) {
			if(typeof(SAgetCookie) != "undefined") return SAgetCookie(key);
		},
			
		removeCookie:function( key )  {
			if(typeof(SAremoveCookie) != "undefined") SAremoveCookie(key);
	  	},
			
		findCookieIndex:function( key )  {
			if(typeof(SAfindCookieIndex) != "undefined") return SAfindCookieIndex(key);
	   	},
	   	
	   	removeAllCookie:function() {
	   		if(typeof(SAremoveAllCookie) != "undefined") SAremoveAllCookie();
	   	},
	   	
		jsGetKeyData:function(val) {
			var keyDataTimer;
			this.Trace("jsGetKeyData : " + keyDataType );
			// this.Trace("jsGetKeyData val : " + val );
			var keyVal = "";
			if(typeof val == "undefined")
			{
				if(keyDataType == "fdk")	
					keyVal = "010000000000";
				else
					keyVal = "111100000000";
			}
			else
				keyVal = val;

			currentKeyDataVal = keyVal;

			//Remove timeout that causing problem
			//if(keyDataType == "fdk")
			//	keyDataTimer = setTimeout(function(){SAGetKeyData(keyVal);},100);
			//else
			//	keyDataTimer = setTimeout(function(){SAGetKeyData(keyVal);},100);
			SAGetKeyData(keyVal);
		},
		
		/** HTML new Function **/
		ProcessKeyPad:function(Key) {


			if(keyActive == 1) 
			{
				if(String(Key.toUpperCase()).indexOf("FDK") <= -1)
				{
					beepSound = 0;
					switch(Key.toUpperCase()) {
						case "ENTER":
							Key = "10";
							break;
						case "CANCEL":
							Key = "11";
							break;
						case "CLEAR":
							Key = "13";
							break;
						case "BACKSPACE":
							Key = "14";
							break;
					}

					if(Key == "10" || Key == "ENTER") {
						this.keyboardCancel();
						this.GetKeyData(currentKeyDataVal);
					} else if(Key == "11" || Key == "CANCEL") {
						var app = require('app');
						this.keyboardCancel();
						// app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
					}

					//TerminalUI.KeyPad_Event(Key);
					var app = require('app');
					app.BroadCaster.trigger("PinPadPress" , {key : Key });
					app.BroadCaster.trigger("KeepTimerAlive");
				}
				else
				{
					FDKKey = true;

					this.keyboardCancel();

					var app = require('app');
					app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
					app.BroadCaster.trigger("KeepTimerAlive");
				}
				
			}
		},

		ProcessPinEntry:function(Key) {
			ACCoreJS.Trace("ProcessPinEntry > " + keyActive);
			if(keyActive ==1) {
				beepSound = 0;
				//TerminalUI.KeyPad_Event(Key);
				var app = require('app');
				app.BroadCaster.trigger("UpdatePin" , {key : Key });
				app.BroadCaster.trigger("KeepTimerAlive");

				if(Key == "10") {
					//this.keyboardCancel();
					//this.GetKeyData();
				} else if(Key == "11") {
					//var app = require('app');
					//
					//this.keyboardCancel();
					// app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
				}
			}

		},
		
		ProcessFDK:function(Key) {
			if(keyActive == 1) {
				FDKKey = true;
				keyActive = 0;

				var app = require('app');
				app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
				app.BroadCaster.trigger("KeepTimerAlive");

				// this.keyboardCancel();
				// this.GetKeyData(currentKeyDataVal);
			}

		},
		
		GetFDKKeyCode:function(Key)
		{
			var value = "";
			switch (String(Key))
			{
				case "FDK1":
					value = "I";
					break;
				case "FDK2":
					value = "H";
					break;
				case "FDK3":
					value = "G";
					break;
				case "FDK4":
					value = "F";
					break;
				case "FDK5":
					value = "A";
					break;
				case "FDK6":
					value = "B";
					break;
				case "FDK7":
					value = "C";
					break;
				case "FDK8":
					value = "D";
					break;
			}

			return value;
		},
		
		ATMCInterNavi:function(exitPoint) {
			var t = this;
			//this.keyboardCancel();
			
			//alert("ATMCInterNavi : ATMC Processing Data...");
			setTimeout(function() { 
				t.Trace("*************************************************************");
				t.Trace("SAREQFunction : " + exitPoint);
				SAREQFunction(exitPoint); 
				t.Trace("*************************************************************");
				t = null;
			} , 200);
			// parent.frames["leftFrame"].REQFunction(exitPoint);	
		},
		
		ATMCResponse:function(statusCode , additionalStatus) {
			var app = require('app');
			this.keyboardCancel();
			app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		ATMResponse:function(statusCode , additionalStatus) {
			var app = require('app');
			app.router.navigate("atmResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},
		
		InitACTransact:function(initData) {
			var app = require('app');
			this.keyboardCancel();
			this.GetKeyData();
			app.router.navigate("initTrx/" + initData , {trigger: true});
		},
		
		InitOthersACTransact:function(initData) {
			var app = require('app');
			this.keyboardCancel();
			this.GetKeyData();
			app.router.navigate("OthersTrxInit/" + initData , {trigger: true});
		},

		InitCardlessACTransact:function(initData) {
			var app = require('app');
			this.keyboardCancel();
			this.GetKeyData();
			app.router.navigate("CardlessTrxInit/" + initData , {trigger: true});
		},
		
		GetATMCLatestNotesEntered:function(val) {
			try {
				return SAGetATMCLatestNotesEntered(val);
			} catch(err) {
				return "";
			}
		},
		
		GetATMCNotesEntered:function(val) {
			try {
				return SAGetATMCNotesEntered(val);
			} catch(err) {
				return "";
			}
		},
		
		GetATMCIsNoteTypesActive:function(key) {
			try {
				return SAGetATMCIsNoteTypesActive(key);
			} catch(err) {
				return "";
			}
		},
		
		 IBMtoBig5 : function(key) {
		 	try {
		 		return SAIBMtoBig5(key);
		 	} catch(err) {
		 		return "";
		 	}
		 },

        Idle:function(initData) {
            var app = require('app');
            this.Trace("Idle Init");
            app.router.navigate("idle/" + initData , {trigger: true});
        },

        UnloadInterAct:function() {
            var app = require('app');
            app.BroadCaster.trigger("UnloadInterAct");
        },


        sendFeedBack : function(data) {
            var xmlStr;
            xmlStr= data;
            xmlStr=constructFeedBackXML(xmlStr);
            //parent.frames["leftFrame"].InteractWS.sendResult(xmlStr);
            //parent.frames["leftFrame"].InteractWS.sendResult(data);
        },

        sendFeedBackNode :function(data) {
	       	this.Trace("Campaign Submit Result : " + data);
        	var requestData = { data : data };

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            dataType: "json",
            url: ConfigData.interActEndpoint + "SubmitResult",                        
            success: function(data) 
            {
                // app.BroadCaster.trigger("ACTransactionResponse" , { statusCode : "0" , additionalStatus : "1"});
            }

        	});
        },

        validateEmail :  function(val) {
            return true;
        },

		DisplayTransactScreen : function(initData) {
			var app = require('app');
			switch(initData) {
				case "IDLE":
				case "IDLE_MAIN":
				case "OOS":
				case "SYSTEMINIT":
					allowGetKeyData = true;
					this.keyboardCancel();

					app.router.navigate("IDLE/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				case "PINENTRY":
					allowGetKeyData = true;
					this.keyboardCancel();
					app.router.navigate("pinEntryRemainVariable/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				default:
					allowGetKeyData = true;
					this.keyboardCancel();
					app.router.navigate("initTrxRemainLanguage/" + initData, {trigger: true});

					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
			}
			app = null;
		},
		abstractHostReply : function(screenData)
		{
			// \u000C - FF
			// \u000E - SO
			// \u000F - SI
			// \u0009 - HT
			// \u0011 - DC1
			// \u0012 - DC2
			// \u001B - ESC
			// \u000B - VT
			// \u001C - FS
			var pattern = /(\u000C|\u000E|\u000F|\u0009|\u0011|\u0012|\u001B|\u000B|\u001C)/g;
			var result = screenData.match(pattern);

			var text = screenData;
			var screens = [];
			for (i = 0; i < result.length; i++) {
				var p = result[i];
				var regExp = new RegExp(p);
				var match = regExp.exec(text);
				var start = match.index;
				var screenControl = "";
				var j = i + 1;

				if (i < result.length - 1) {
					p = result[j];
					var end = text.indexOf(p, start + 1);
					screenControl = text.substring(start, end);
					text = text.substr(end);
				} else {
					screenControl = text.substr(start);
				};

				screenControl = screenControl.replace(pattern , " ");

				screens.push(screenControl.trim());
			};

			return screens;
		},
		
		UpdatePin: function(PinLength) {
			var app = require('app');
			app.BroadCaster.trigger("UpdatePin" , {len : PinLength });
		},
		
		InitACTransactWithoutKey:function(initData) {
			var app = require('app');
			this.keyboardCancel();		
			app.router.navigate("initTrx/" + initData , {trigger: true});
		},

		GetAANDCExitLocation:function(data)
		{
			if(parseInt(data) == 0)
			{
				return "http://webbrowsecomplete";
			}
			else
			{
				return "http://webbrowsecomplete" + data;
			}

		},

		setAppReady : function(val)
		{
			var app = require('app');
			app.BroadCaster.trigger("ApplicationReady" , {});
			applicationReady = val;
			SASetAppReady(true);

			app.systemInit();
		},

        isHardCodeResulotion:function()
        {
            return true;
        },

        getWidth :  function()
        {
            return "1024";
        },

        getHeight : function()
        {
            return "768";
        },
        ExecuteExternalFunction: function(method, params) {
			return SAInvokeMethod(method, params);
		},
		currentBank : function() {
			return "ESB";
		},
		TransactXPublishMessage : function(data) {
			var app = require('app');
			app.channel.transactXPublishReply(data);
		},
		TransactXTerminateAssist : function(data) {
			var app = require('app');
            app.router.navigate("exitTrx/deviceProcessState/THANKS", {trigger: true});
		},
		TransactXBonusPointSimulationRequest : function(val) {
			var app = require('app');
			if(typeof val.point != "undefined") val["BONUSPOINT"] = val.point;

			ACCoreJS.InitOthersACTransact("bonusPointRedemptionSimulation");
			app.DS.update(val);
		},
		ATMCExecuteFunction:function(functionName , stringParameter) {
			var app = require('app');
			//this.keyboardCancel();
			try {
				app.router.navigate("fakeRoute", {trigger: true});
				app.router.navigate("atmcExecuteFunction/" + functionName + "/" + Base64.encode(stringParameter), {trigger: true});
			} catch(e) {
				this.Trace("ATMCExecuteFunction Error: " + e.message);
			}
		},
		PrintReceipt:function(data) {
            SAPrintReceipt(data);
        }
	};
	
	/** Original VBS **/
	

	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");