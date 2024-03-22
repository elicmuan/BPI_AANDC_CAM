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
	var interNaviEvent = "";
	var interNaviEventTimer;
	
	var applicationReady = false;
	
	var ACCoreJS = {
		SetKeyActive : function()
		{
			keyActive = 0;
		},
	
	 	ReactiveFDKAfterEnter:function()
		{
			this.jsGetKeyData();		  
			keyActive = 1;		
		},
	
		GetKeyData:function()
		{
			if(keyActive == 0)
			{
				this.Trace("!!!!!!!!!! GetKeyData !!!!!!!!!");
				this.jsGetKeyData();		  
				keyActive = 1;	
			}
		},

		GetPinEntry:function()
		{
			if(keyActive == 0)
			{
				// eSAGetPinEntry();
				keyActive = 1;
			}

		},
	
		SetUCDIStr:function(CDI, val)
		{
			if(typeof(SASetUCDIStr) == "undefined")
				parent.frames["leftFrame"].SetUCDIStr(CDI,val);
			else
				SASetUCDIStr(CDI,val);
		},
		
		SetUCDIIntegar:function(CDI,val)
		{
			if(typeof(SASetUCDIIntegar) == "undefined")
				parent.frames["leftFrame"].SetUCDIIntegar(CDI,val);
			else
				SASetUCDIIntegar(CDI,val);
		},
		
		SetComString:function(key, val)
		{
			if(typeof(SASetComString) == "undefined")
				parent.frames["leftFrame"].SetComString(key,val);
			else
				SASetComString(key , val);
		},
		
		SetComInt:function(key, val)
		{
			if(typeof(SASetComInt) == "undefined")
				parent.frames["leftFrame"].SetComInt(key,val);
			else
				SASetComInt(key,val);
		},
		
		GetUCDIString:function(CDI)
		{
			if(typeof(SAGetUCDIString) == "undefined")
				return parent.frames["leftFrame"].GetUCDIString(CDI);
			else
				return SAGetUCDIString(CDI);
		},
		
		GetUCDIIntegar:function(CDI)
		{
			if(typeof(SAGetUCDIIntegar) == "undefined")
				return parent.frames["leftFrame"].GetUCDIIntegar(CDI);
			else
				return SAGetUCDIIntegar(CDI);
		},
	
		GetComString:function(key)
		{
			if(typeof(SAGetComString) == "undefined")
				return parent.frames["leftFrame"].GetComString(key);
			else
				return SAGetComString(key);
		},
		
		GetComInt:function(key)
		{
			if(typeof(SAGetComInt) == "undefined")
				return parent.frames["leftFrame"].GetComInt(key);
			else
				return SAGetComInt(key);
		},
	
		RetrieveScreenInterface:function(screen)
		{
			if(typeof(SARetrieveScreenInterface) == "undefined")	
				return parent.frames["leftFrame"].RetrieveScreenInterface(screen);
			else
				return SARetrieveScreenInterface(screen);
		},
	
		GetCDIStoreValue:function(CDI)
		{
			if(typeof(SAGetCDIStoreValue) == "undefined")
				return parent.frames["leftFrame"].GetCDIStoreValue(CDI);
			else 
				return SAGetCDIStoreValue(CDI);
		},
	
		keyboardCancel:function()
		{
			if(keyActive == 1)
			{
				keyActive = 0;
				this.Trace("!!!!!!!!!! keyboardCancel !!!!!!!!!");
				if(typeof(SAkeyboardCancel) == "undefined")
					parent.frames["leftFrame"].keyboardCancel();
				else
					SAkeyboardCancel();
			}
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
			if(typeof(SAExitAANDCMainMenu) == "undefined")
				parent.frames["leftFrame"].ExitAANDCMainMenu(URL);
			else
				SAExitAANDCMainMenu(URL);
			//parent.maximizeRightFrame();
		},
	
		Beep:function()
		{
			if(FDKKey == false)
			{
				if(typeof(SABeep) == "undefined")
					parent.frames["leftFrame"].Beep();
				else
					SABeep();
			}
			else
			{
				beepSound = 1;
			}
			FDKKey = false;
		},
	
		/** Original VBS End**/
		
		GetIPAddress:function()
		{
			if(typeof(SAGetIPAddress) == "undefined")
				return parent.frames["leftFrame"].GetIPAddress();
			else
				return SAGetIPAddress();
		},
			
		LogToJournal:function(message)
		{
			ACCoreJS.Trace("Journal = " + message);

			if(typeof(SALogToJournal) == "undefined")
				parent.frames["leftFrame"].LogToJournal(message);
			else
				SALogToJournal(message);
		},
		
		Trace:function(message)
		{
			if(typeof(SATrace) == "undefined")			
				parent.frames["leftFrame"].Trace(message);
			else
				SATrace(message);
		},
		
		TimeOutBeep:function()
		{
			if(typeof(SABeepTimeOut) == "undefined")
				parent.frames["leftFrame"].BeepTimeOut();
			else
				SABeepTimeOut();
		},
		
		SetPrinter:function()
		{
			if(typeof(SASetPrinter) == "undefined")
				parent.frames["leftFrame"].SetPrinter();
			else
				SASetPrinter();
		},
		
		GetPrinterType:function()
		{
			if(typeof(SAGetPrinterType) == "undefined")
				return parent.frames["leftFrame"].GetPrinterType();
			else
				return SAGetPrinterType();
		},
			
		PrintXFSReceipt:function(printData,formName,  langIdx)
		{
			var temp="";
				
			finalArryL1 = new Array();
			finalArryL2 = new Array();
			finalFormName = formName;
			printlangIdx = langIdx;
				
			for (i=0;i < printData[0].length;i++)
			{
				if(printData[0][i] == undefined || printData[0][i] == "")
				{
					finalArryL1[i] = "";
				}
				else
				{
					finalArryL1[i] = printData[0][i];
				}			
					
			}
				
			for (x=0;x < printData[1].length;x++)
			{
				if(printData[1][x] == undefined || printData[1][x] == "")
				{
					finalArryL2[x] = "";
				}
				else
				{
					finalArryL2[x] = printData[1][x];
				}			
					
			}
				
			//var y = setTimeout("printXFSDelay()",500);
			Trace("Form Name = " + formName);
			Trace("Print Data = " + finalArryL1.join());

			parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,formName ,langIdx);
		},
			
		printXFSDelay:function()
		{			
			parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,finalFormName ,printlangIdx);
		},
		
		readBarcode:function(formName)
		{
			if(typeof(SAreadBARCode) == "undefined")
				parent.frames["leftFrame"].readBARCode(formName);
			else
				SAreadBARCode(formName);
		},
		
		disableBarcode:function()
		{
			if(typeof(SAdisableBarcode) == "undefined")
				parent.frames["leftFrame"].disableBarcode();
			else
				SAdisableBarcode();
		},
		
		setExtInteractionWaitForResponse:function(val)
		{
			isWaitForResponse = val;

			if(typeof(SAsetWaitForResponse) == "undefined")
				parent.frames["leftFrame"].setWaitForResponse(val);
			else
				SAsetWaitForResponse(val);
		},
		
		CallUpdateCustomerSeen:function(cardNo,campaignId)
		{
			if(typeof(SACallUpdateCustomerSeen) == "undefined")
				parent.frames["leftFrame"].CallUpdateCustomerSeen(cardNo, campaignId);
			else
				SACallUpdateCustomerSeen(cardNo,campaignId);
		},
		
		RegisterPreferenceTrx:function(cardNo,transData,opCode)
		{
			if(typeof(SARegisterPreferenceTrx) == "undefined")
				parent.frames["leftFrame"].RegisterPreferenceTrx(cardNo, transData,opCode);
			else
				SARegisterPreferenceTrx(cardNo, transData,opCode);
		},
		
		UpdateRegisteredPreferenceTrx:function(id,cardNo,transData,opCode)
		{
			if(typeof(SAUpdateRegisteredPreferenceTrx) == "undefined")
				parent.frames["leftFrame"].updateFavoriteTransaction(id,cardNo,transData,opCode);
			else
				SAUpdateRegisteredPreferenceTrx(id,cardNo,transData,opCode);
		},
		
		DeRegisteredPreferenceTrx:function(myPreferenceId)
		{
			if(typeof(SADeRegisteredPreferenceTrx) =="undefined")
				parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
			else
				SADeRegisteredPreferenceTrx(myPreferenceId);
		},
		
		DeRegisteredPreferenceTrxWithUpdateInfo:function(myPreferenceId , cardNo , callBack)
		{
			if(typeof(SADeRegisteredPreferenceTrxWithUpdateInfo) == "undefined")
				return parent.frames["leftFrame"].DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo , callBack);
			else
				return SADeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo , callBack);
		},
		
		DeRegisteredListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
				if(typeof(SADeRegisteredPreferenceTrx) =="undefined")
					parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceArray[i]);
				else
					SADeRegisteredPreferenceTrx(myPreferenceArray[i]);
	        }
		
		},
		
		DeRegisteredAANDCListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	parent.frames["leftFrame"].myPreferenceWS.DeRegisteredMyPreference(myPreferenceArray[i]);
	        }
		},
	
		RegisterThemeUser:function(cardNo,themeId)
		{
			if(typeof(SARegisterThemeUser) == "undefined")
				parent.frames["leftFrame"].RegisterThemeUser(cardNo, themeId);
			else
				SARegisterThemeUser(cardNo, themeId);
		},
		
		PrintWINReceipt:function(printData)
		{
			//var a = printData.join();
			printData[0]="data 0";
			printData[1]="data 1";
			printData[2]="data 2";
			printData[3]="data 3";

			parent.frames["leftFrame"].PrintXFSReceipt(printData, printData ,"ACTestForm" ,langIdx);
				
			//parent.frames["leftFrame"].PrintWINReceipt(temp);
			
		},
		
		setCookie:function(key, value) 
		{
			if(typeof(SAsetCookie) == "undefined")
				parent.frames["leftFrame"].setCookie(key, value);
			else
				SAsetCookie(key , value);
		},
	
		getCookie:function( key )	
		{
			if(typeof(SAgetCookie) == "undefined")
				return 	parent.frames["leftFrame"].getCookie(key);
			else
				return SAgetCookie(key);
		},
			
		removeCookie:function( key ) 
		{
			if(typeof(SAremoveCookie) =="undefined")
				parent.frames["leftFrame"].removeCookie(key);
			else
				SAremoveCookie(key);
	  	},
			
		findCookieIndex:function( key ) 
		{
			if(typeof(SAfindCookieIndex) == "undefined")
				return parent.frames["leftFrame"].findCookieIndex(key);	
			else
				return SAfindCookieIndex(key);
	   	},
	   	
	   	removeAllCookie:function()
	   	{
	   		if(typeof(SAremoveAllCookie) == "undefined")
	   			parent.frames["leftFrame"].removeAllCookie();	
	   		else
	   			SAremoveAllCookie();
	   	},
	   	
		jsGetKeyData:function()
		{
			var keyDataTimer;

			keyDataTimer = setTimeout(
				function()
				{
					if(typeof(SAGetKeyData) == "undefined")
						parent.frames["leftFrame"].GetKeyData();
					else
						SAGetKeyData();
				},100);
		},
		
		/** HTML new Function **/
		ProcessKeyPad:function(Key)
		{
			beepSound = 0;
			
			if(Key == "10")
			{
				this.SetKeyActive();
				// this.keyboardCancel();
				this.GetKeyData();
			}
			else if(Key == "11")
			{
				// var app = require('app');
				this.SetKeyActive();
				// this.keyboardCancel();
			
				// app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
			}

			//TerminalUI.KeyPad_Event(Key);
			var app = require('app');
			app.BroadCaster.trigger("PinPadPress" , {key : Key });
			app.BroadCaster.trigger("KeepTimerAlive");
		},
		
		ProcessFDK:function(Key)
		{
			FDKKey = true;
			keyActive = 0;

			var app = require('app');
			app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
			app.BroadCaster.trigger("KeepTimerAlive");
			
			// this.keyboardCancel();
			this.GetKeyData();
		},

		
		
		ATMCInterNavi:function(exitPoint)
		{
			// this.keyboardCancel();
			
			interNaviEvent = exitPoint;
			var app = require('app');
			app.BroadCaster.trigger("cleanEventQueue");
			
			//alert("ATMCInterNavi : ATMC Processing Data...");
			setTimeout(function() 
			{ 
				if(typeof(SAREQFunction) == "undefined")
					parent.frames["leftFrame"].REQFunction(exitPoint);
				else
					SAREQFunction(exitPoint);
			} , 200);
			// parent.frames["leftFrame"].REQFunction(exitPoint);	
		},
		
		ATMCResponse:function(statusCode , additionalStatus , atmcResponseEvent)
		{
			this.Trace("ATMCResponse Received Event : " + atmcResponseEvent);

			if(atmcResponseEvent == interNaviEvent)
			{
				// interNaviEvent = "";

				var app = require('app');
			
				// this.keyboardCancel();
				// this.GetKeyData();
				// if(interNaviEventTimer > 0)
				// app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
				app.BroadCaster.trigger("atmcResponse" , {statusCode : statusCode , additionalStatus:additionalStatus , atmcResponseEvent :atmcResponseEvent });
			}
			else
			{
				this.Trace("ATMCResponse Received Invalid Event, do nothing wait for next event. ");
			}

			// var app = require('app');
		
			// this.keyboardCancel();
			// // this.GetKeyData();
			// app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		ATMResponse:function(statusCode , additionalStatus)
		{
			var app = require('app');

			this.keyboardCancel();
			// this.GetKeyData();

			app.router.navigate("atmResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},

		DisplayTransactScreen:function(initData)
		{

		},

		IdleSreen:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("idleMenu/" + initData , {trigger: true});
		},
		
		InitACTransact:function(initData)
		{
			var app = require('app');
			
			this.keyboardCancel();
			this.GetKeyData();
			
			app.router.navigate("initTrx/" + initData , {trigger: true});
		},
		
		InitOthersACTransact:function(initData)
		{
			
			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();
			
			app.router.navigate("OthersTrxInit/" + initData , {trigger: true});
		},

		InitCardlessACTransact:function(initData)
		{

			var app = require('app');

			this.keyboardCancel();
			this.GetKeyData();

			app.router.navigate("CardlessTrxInit/" + initData , {trigger: true});
		},
		
		GetATMCLatestNotesEntered:function(val)
		{
			try
			{
				if(typeof(SAGetATMCLatestNotesEntered) == "undefined")
					return parent.frames["leftFrame"].GetATMCLatestNotesEntered(val);	
				else
					return SAGetATMCLatestNotesEntered(val);
			}
			catch(err)
			{
				return "";
			}
			
		},
		
		GetATMCNotesEntered:function(val)
		{
			try
			{
				if(typeof(SAGetATMCNotesEntered) == "undefined")
					return parent.frames["leftFrame"].GetATMCNotesEntered(val);	
				else
					return SAGetATMCNotesEntered(val);
			}
			catch(err)
			{
				return "";
			}
			
		},
		
		GetATMCIsNoteTypesActive:function(key)
		{
			try
			{
				if(typeof(SAGetATMCIsNoteTypesActive) == "undefined")
					return parent.frames["leftFrame"].GetATMCIsNoteTypesActive(key);	
				else
					return SAGetATMCIsNoteTypesActive(key);
			}
			catch(err)
			{
				return "";
			}
			
		},
		
		 IBMtoBig5 : function(key)
		 {
		 	try
		 	{	
		 		if(typeof(SAIBMtoBig5) == "undefined")
		 			return parent.frames["leftFrame"].IBMtoBig5(key);	
		 		else
		 			return SAIBMtoBig5(key);
		 	}
		 	catch(err)
		 	{
		 		return "";
		 	}
		 	
		 },

		idleMenu:function(initData)
        {
            var app = require('app');
            this.Trace("Idle Menu");

            this.keyboardCancel();
            // this.GetKeyData();

            app.router.navigate("idleMenu/" + initData , {trigger: true});
        },

        sendFeedBack : function(data)
        {
			if(typeof(SAsendResult) == "undefined")
				return parent.frames["leftFrame"].sendResult(data);
			else
				SAsendResult(data);
        },

        validateEmail :  function(val)
        {
            return true;
        },

		currentBank : function()
		{
			return "ESB";
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
            return "577";
        },

		GetPIN : function(type)
		{
			keyActive = 1;
			if(typeof(SAGetPIN) == "undefined")
				parent.frames["leftFrame"].GetPIN(type)
			else
				SAGetPIN(type);
		},

		GetPINDone : function(type)
		{
			keyActive = 0;
		},

		ProcessPINEntered : function(result , value)
		{
 			var app = require('app');
			app.BroadCaster.trigger("PINEntered" , {result : result , val:value });
			app.BroadCaster.trigger("KeepTimerAlive");
		},

		TransactXPublishMessage : function(data)
		{
			var app = require('app');
			app.channel.transactXPublishReply(data);
		},

		TransactXTerminateAssist : function(data)
		{
			var app = require('app');
            app.router.navigate("exitTrx/deviceProcessState/THANKS", {trigger: true});
		},
		
		setAppReady : function(val)
		{
			var app = require('app');
			app.BroadCaster.trigger("ApplicationReady" , {});
			applicationReady = val;

			if(typeof TransactXApplicationReady != "undefined")
			{
				TransactXApplicationReady(val);
			}
		},

		SingleByte2DoubleByte:function(val)
		{
			if(typeof(SASingleByte2DoubleByte) =="undefined")
			{	
				return "";
				// return parent.frames["leftFrame"].SingleByte2DoubleByte(val); 
			}
			else
				return SASingleByte2DoubleByte(val);
		},

		DoubleByte2SingleByte:function(val)
		{
			if(typeof(SADoubleByte2SingleByte) =="undefined")
			{	
				return "";
				// return parent.frames["leftFrame"].SingleByte2DoubleByte(val); 
			}
			else
				return SADoubleByte2SingleByte(val);
		},

		TransactXBonusPointSimulationRequest : function(val)
		{
			var app = require('app');

			
			if(typeof val.point != "undefined")
				val["BONUSPOINT"] = val.point;

			ACCoreJS.InitOthersACTransact("bonusPointRedemptionSimulation");
			app.DS.update(val);
		}
		
		
	};
	
	/** Original VBS **/
	

	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");