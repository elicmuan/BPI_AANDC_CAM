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
	
	var production = "0";
	
	var ACCoreJS = {
		SetKeyActive : function()
		{
			keyActive = 0;
		},
	
	 	ReactiveFDKAfterEnter:function()
		{
			jsGetKeyData();		  
			keyActive = 1;		
		},
	
		GetKeyData:function()
		{
			if(keyActive == 0)
			{
				jsGetKeyData();		  
				keyActive = 1;	
			}
		},
	
		SetUCDIStr:function(CDI, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetUCDIStr(CDI,val);
		},
		
		SetUCDIIntegar:function(CDI,val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetUCDIIntegar(CDI,val);
		},
		
		SetComString:function(key, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetComString(key,val);
		},
		
		SetComInt:function(key, val)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetComInt(key,val);
		},
		
		GetUCDIString:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIString(CDI);
		},
		
		GetUCDIIntegar:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetUCDIIntegar(CDI);
		},
	
		GetComString:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComString(key);
		},
		
		GetComInt:function(key)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetComInt(key);
		},
	
		RetrieveScreenInterface:function(screen)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].RetrieveScreenInterface(screen);
		},
	
		GetCDIStoreValue:function(CDI)
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetCDIStoreValue(CDI);
		},
	
		
		
		keyboardCancel:function()
		{
			keyActive = 0;
			// if(production == "1")
				// parent.frames["leftFrame"].keyboardCancel();
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
			// if(production == "1")
				// parent.frames["leftFrame"].ExitAANDCMainMenu(URL);
			//parent.maximizeRightFrame();
		},
	
		Beep:function()
		{
			if(FDKKey == false)
			{
                //this.Trace("Beep BA LALALALA!!!");
				if(production == "1")
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
			// if(production == "1")
				// return parent.frames["leftFrame"].GetIPAddress();
			// else
				return "192.168.1.100";
		},
			
		LogToJournal:function(message)
		{
			// Trace("Journal = " + message);
			// if(production == "1")
				// parent.frames["leftFrame"].LogToJournal(message);
		},
		
		Trace:function(message)
		{
			// if(production == "1")				
				// parent.frames["leftFrame"].Trace(message);
			// else
				console.log(message);
		},
		
		TimeOutBeep:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].BeepTimeOut();
		},
		
		SetPrinter:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].SetPrinter();
		},
		
		GetPrinterType:function()
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].GetPrinterType();
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
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,formName ,langIdx);
		},
			
		printXFSDelay:function()
		{			
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(finalArryL1, finalArryL2 ,finalFormName ,printlangIdx);
		},
		
		readBarcode:function(formName)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].readBARCode(formName);
		},
		
		disableBarcode:function()
		{
			// if(production == "1")
				// parent.frames["leftFrame"].disableBarcode();
		},
		
		setExtInteractionWaitForResponse:function(val)
		{
			isWaitForResponse = val;
			// if(production == "1")
				// parent.frames["leftFrame"].setWaitForResponse(val);
		},
		
		CallUpdateCustomerSeen:function(cardNo,campaignId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].CallUpdateCustomerSeen(cardNo, campaignId);
		},
		
		RegisterPreferenceTrx:function(cardNo,transData,opCode)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].RegisterPreferenceTrx(cardNo, transData,opCode);
		},
		
		DeRegisteredPreferenceTrx:function(myPreferenceId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceId);
		},
		
		DeRegisteredListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	// if(production == "1")
	        		// parent.frames["leftFrame"].DeRegisteredPreferenceTrx(myPreferenceArray[i]);
	        }
		
		},
		
		DeRegisteredAANDCListOfPreferenceTrx:function(myPreferenceArray)
		{
	        for(var i=0; i < myPreferenceArray.length; i++)
	        {
	        	// if(production == "1")
	        		// parent.frames["leftFrame"].myPreferenceWS.DeRegisteredMyPreference(myPreferenceArray[i]);
	        }
		},
	
		RegisterThemeUser:function(cardNo,themeId)
		{
			// if(production == "1")
				// parent.frames["leftFrame"].RegisterThemeUser(cardNo, themeId);
		},
		
		PrintWINReceipt:function(printData)
		{
			//var a = printData.join();
			printData[0]="data 0";
			printData[1]="data 1";
			printData[2]="data 2";
			printData[3]="data 3";
			// if(production == "1")
				// parent.frames["leftFrame"].PrintXFSReceipt(printData, printData ,"ACTestForm" ,langIdx);
				
			//parent.frames["leftFrame"].PrintWINReceipt(temp);
			
		},
		
		setCookie:function(key, value) 
		{
			// if(production == "1")
				// parent.frames["leftFrame"].setCookie(key, value);
		},
	
		getCookie:function( key )	
		{
			// if(production == "1")
				// return 	parent.frames["leftFrame"].getCookie(key);
		},
			
		removeCookie:function( key ) 
		{
			// if(production == "1")
				// parent.frames["leftFrame"].removeCookie(key);
	  	},
			
		findCookieIndex:function( key ) 
		{
			// if(production == "1")
				// return parent.frames["leftFrame"].findCookieIndex(key);	
	   	},
	   	
	   	removeAllCookie:function()
	   	{
	   		// if(production == "1")
	   			// parent.frames["leftFrame"].removeAllCookie();	
	   	},
	   	
		jsGetKeyData:function()
		{
			var keyDataTimer;
			// if(production == "1")
				// keyDataTimer = setTimeout(function(){parent.frames["leftFrame"].GetKeyData();},500);
		},
		
		/** HTML new Function **/
		ProcessKeyPad:function(Key)
		{
			beepSound = 0;
			
			//TerminalUI.KeyPad_Event(Key);
			var app = require('app');
			app.BroadCaster.trigger("PinPadPress" , {key : Key });
			if(Key == "10")
			{
				this.keyboardCancel();
				this.GetKeyData();
			}
			else if(Key == "11")
			{
				var app = require('app');

				this.keyboardCancel();
			
				app.router.navigate("exitTrx/PinpadCancel/THANKS" , {trigger: true});
			}
		},
		
		ProcessFDK:function(Key)
		{
			FDKKey = true;
			keyActive = 0;

			var app = require('app');
			app.BroadCaster.trigger("FDKPress" , {key : this.GetFDKKeyCode(Key) });
			this.keyboardCancel();
			this.GetKeyData();
		},
		
		ATMCInterNavi:function()
		{
			this.keyboardCancel();
			alert("ATMCInterNavi : ATMC Processing Data...");
		},
		
		ATMCResponse:function(statusCode , additionalStatus)
		{
			var app = require('app');
			
			this.keyboardCancel();
			this.GetKeyData();
			
			app.router.navigate("atmcResponse/" + statusCode + "/" + additionalStatus, {trigger: true});
		},
		
		InitACTransact:function(initData)
		{
			var app = require('app');
			
			this.keyboardCancel();
			this.GetKeyData();
			
			app.router.navigate("initTrx/" + initData , {trigger: true});
		}
	};
	
	/** Original VBS **/
	

	//parent.frames["leftFrame"].Trace("*****ACTransactCoreJS*****");
	//parent.frames["leftFrame"].Trace("Version : 2014-12-10 12:00NN");