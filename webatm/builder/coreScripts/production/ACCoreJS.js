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
	var keyDataType = "";
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

		SetCurrentKeyDataType : function(val)
		{
			if(keyDataType != "" && keyDataType != val) {
				this.keyboardCancel();
				this.Trace("Different key data type. Original > " + keyDataType + "  New > " + val );
			} 
			
			keyDataType = val;
		},

		GetPinEntry:function()
		{
			if(keyActive == 0)
			{
				// eSAGetPinEntry();
				//keyActive = 1;
			}

		},
	
		SetUCDIStr:function(CDI, val)
		{
			parent.frames["leftFrame"].SetUCDIStr(CDI,val);
		},
		
		SetUCDIIntegar:function(CDI,val)
		{
			parent.frames["leftFrame"].SetUCDIIntegar(CDI,val);
		},
		
		SetComString:function(key, val)
		{
			parent.frames["leftFrame"].SetComString(key,val);
		},
		
		SetComInt:function(key, val)
		{
			parent.frames["leftFrame"].SetComInt(key,val);
		},
		
		GetUCDIString:function(CDI)
		{
			return parent.frames["leftFrame"].GetUCDIString(CDI);
		},
		
		GetUCDIIntegar:function(CDI)
		{
			return parent.frames["leftFrame"].GetUCDIIntegar(CDI);
		},
	
		GetComString:function(key)
		{
			return parent.frames["leftFrame"].GetComString(key);
		},
		
		GetComInt:function(key)
		{
			return parent.frames["leftFrame"].GetComInt(key);
		},
	
		RetrieveScreenInterface:function(screen)
		{
			return parent.frames["leftFrame"].RetrieveScreenInterface(screen);
		},
	
		GetCDIStoreValue:function(CDI)
		{
			return parent.frames["leftFrame"].GetCDIStoreValue(CDI);
		},
	
		keyboardCancel:function()
		{
			if(keyActive == 1)
			{
				keyActive = 0;
				this.Trace("!!!!!!!!!! keyboardCancel !!!!!!!!!");
				parent.frames["leftFrame"].keyboardCancel();
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
			if(URL == "0")
				URL = "http://webbrowsecomplete";
			else
				URL = "http://webbrowsecomplete" + URL;
			
			parent.frames["leftFrame"].ExitAANDCMainMenu(URL);
			//parent.maximizeRightFrame();
		},
	
		Beep:function()
		{
			if(FDKKey == false)
			{
				parent.frames["leftFrame"].Beep();
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
			return parent.frames["leftFrame"].GetIPAddress();
		},
			
		LogToJournal:function(message)
		{
			ACCoreJS.Trace("Journal = " + message);

			parent.frames["leftFrame"].LogToJournal(message);
		},
		
		Trace:function(message)
		{			
			parent.frames["leftFrame"].Trace(message);
		},
		
		TimeOutBeep:function()
		{
			parent.frames["leftFrame"].BeepTimeOut();
		},
		
		SetPrinter:function()
		{
			parent.frames["leftFrame"].SetPrinter();
		},
		
		GetPrinterType:function()
		{
			return parent.frames["leftFrame"].GetPrinterType();
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
			parent.frames["leftFrame"].readBARCode(formName);
		},
		
		disableBarcode:function()
		{
			parent.frames["leftFrame"].disableBarcode();
		},
		
		setExtInteractionWaitForResponse:function(val)
		{
			isWaitForResponse = val;

			parent.frames["leftFrame"].setWaitForResponse(val);
		},
		
		CallUpdateCustomerSeen:function(cardNo,campaignId)
		{
			parent.frames["leftFrame"].CallUpdateCustomerSeen(cardNo, campaignId);
		},
		
		RegisterPreferenceTrx:function(cardNo,transData,opCode)
		{
			parent.frames["leftFrame"].RegisterPreferenceTrx(cardNo, transData,opCode);
		},
		
		UpdateRegisteredPreferenceTrx:function(id,cardNo,transData,opCode)
		{
			parent.frames["leftFrame"].updateFavoriteTransaction(id,cardNo,transData,opCode);
		},
		
		DeRegisteredPreferenceTrx:function(myPreferenceId)
		{
			parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},
		
		DeRegisteredPreferenceTrxWithUpdateInfo:function(myPreferenceId , cardNo , callBack)
		{
			return parent.frames["leftFrame"].DeRegisteredPreferenceTrxWithUpdateInfo(myPreferenceId , cardNo);
		},
		
		DeRegisteredListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceArray[i]);
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
			parent.frames["leftFrame"].RegisterThemeUser(cardNo, themeId);
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
			parent.frames["leftFrame"].setCookie(key, value);
		},
	
		getCookie:function( key )	
		{
			return 	parent.frames["leftFrame"].getCookie(key);
		},
			
		removeCookie:function( key ) 
		{
			parent.frames["leftFrame"].removeCookie(key);
	  	},
			
		findCookieIndex:function( key ) 
		{
			return parent.frames["leftFrame"].findCookieIndex(key);	
	   	},
	   	
	   	removeAllCookie:function()
	   	{
	   		//parent.frames["leftFrame"].removeAllCookie();	
	   	},
	   	
		jsGetKeyData:function()
		{
			var keyDataTimer;

			//ONG remove settimeout due to epp issue in aandc
			//if(keyDataType == "fdk")
			//	keyDataTimer = setTimeout(function(){parent.frames["leftFrame"].GetFDKData(0);},100);
			//else
			//	keyDataTimer = setTimeout(function(){parent.frames["leftFrame"].GetKeyData();},100);
			if(keyDataType == "fdk")
				parent.frames["leftFrame"].GetFDKData(0);
			else
				parent.frames["leftFrame"].GetKeyData();
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
			//setTimeout(function() 
			//{ 
			//	parent.frames["leftFrame"].REQFunction(exitPoint);
			//	 
			//} , 50);
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
			switch(initData)
			{
				case "IDLE":
				case "IDLE_MAIN":
					var app = require('app');
					allowGetKeyData = false;
					this.keyboardCancel();
					app.router.navigate("IDLE/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				case "OOS":
				case "SYSTEMINIT":
				case "PLEASEWAIT":
				case "INIT_PLEASEWAIT":
				case "CARDEJECT":
				case "THANKYOU":
				case "ERROR":
				case "CASH_TAKECARD":
				case "CASH_TAKECASH":
				case "CASH_TAKECASH_RECEIPT":
					var app = require('app');
					allowGetKeyData = false;
					this.keyboardCancel();
					app.router.navigate("IDLE/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				case "PINENTRY":
					var app = require('app');
					allowGetKeyData = false;
					this.keyboardCancel();
					app.router.navigate("pinEntry/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
				default:
					var app = require('app');
					allowGetKeyData = true;
					this.keyboardCancel();
					// this.GetKeyData();
					//app.router.navigate("initTrx/" + initData, {trigger: true});
					app.router.navigate("DisplayScreen/" + initData, {trigger: true});
					break;
			}
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
				return parent.frames["leftFrame"].GetATMCLatestNotesEntered(val);	
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
				return parent.frames["leftFrame"].GetATMCNotesEntered(val);	
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
				return parent.frames["leftFrame"].GetATMCIsNoteTypesActive(key);	
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
		 		return parent.frames["leftFrame"].IBMtoBig5(key);	
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
            parent.frames["leftFrame"].sendResult(data);
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
			parent.frames["leftFrame"].GetPIN(type)
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
		},
		
		UpdatePin: function(PinLength) {
			this.Trace(">>>>>>>> UPDATE PIN");
			var app = require('app');
			app.BroadCaster.trigger("UpdatePin" , {len : PinLength });
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
		}
		
	};
	
	/** Original VBS **/
	

	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");