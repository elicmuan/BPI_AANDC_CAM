		function eppPress(val)
		{
			ACCoreJS.ProcessKeyPad(val);
		}	
		
		function fdkPress(val)
		{
			ACCoreJS.ProcessFDK(val);
		}
		
		function pinEntered(type , value)
		{
			ACCoreJS.ProcessPINEntered(type , value);
		}


		var test;

		function ATMCGoodResponse(val)
		{
			// if(test > 0)
			// {
			// 	alert(test);
			// 	// test = setTimeout(function() 
			// 	// { 
			// 	// 	clearTimeout(test);
			// 	// 	alert("later");
					 
			// 	// } , 200);
			// }
			// else
			// {
			// 	test = setTimeout(testClear , 12200);
			// 	alert(test);
			// }
			
			ACCoreJS.ATMCResponse("0" ,val);
		}

		function FAKERESPONSE()
		{
			ACCoreJS.ATMCResponse("0" ,"1");
			ACCoreJS.ATMCResponse("0" ,"2");
		}

		function testClear()
		{
			clearTimeout(test);
			alert(test);
		}
		
		function ATMCBadResponse(val)
		{
			ACCoreJS.ATMCResponse("1" , val);
		}
		
		function InitTrx(val)
		{
			// parent.document.getElementById('ACFrameSet').setAttribute('cols', '100%,0%', 0);
			trace = "";
			SATrace(trace);
			ACCoreJS.InitACTransact(val);
			
		}

		function displayScreen()
		{
			ACCoreJS.displayScreen(document.getElementById("nextNaviType").value);
		}

				
		function idleMenu(val)
		{
			// parent.document.getElementById('ACFrameSet').setAttribute('cols', '100%,0%', 0);
			trace = "";
			SATrace(trace);
			ACCoreJS.idleMenu(val);
			
		}
		
		function InitOthersACTransact(val)
		{
			// parent.document.getElementById('ACFrameSet').setAttribute('cols', '100%,0%', 0);
			trace = "";
			SATrace(trace);
			ACCoreJS.InitOthersACTransact(val);
			
		}

		function InitCardLessTrx(val)
		{
			// parent.document.getElementById('ACFrameSet').setAttribute('cols', '100%,0%', 0);
			trace = "";
			SATrace(trace);
			ACCoreJS.InitCardlessACTransact(val);

		}

		function GetSSMGAcctList(val)
		{
			return document.getElementById("UCDIString").value;
		}
		
		function GetAMTCStatus()
		{
			return document.getElementById("ATMC_STATUS").value;
		}

		function GetForeignCasseteStatus()
		{
			return document.getElementById("FOREIGNCASSETTES").value;
		}

		function GetEnteredCashNote()
		{
			return document.getElementById("INSERTEDAMT").value;
		}

		function GetBarcode()
		{
			return document.getElementById("BARCODE").value;
		}
		
		var trace = "";
		
		function SATrace(val)
		{
			
			// trace = trace + "<br>" + val;
			
			// document.getElementById("logList").innerHTML = trace;
		}

		function bonusPointSimulation()
		{
			var tmpObj = 
			{
				"BONUSPOINT" : "5000",
				"productVO": 
				[
					{
						"id": "1b4bc0e3-61fa-4b26-88b6-d92a8a83f67f",
						"code": "SIM003",
						"name": "SIM003",
						"type": "ESUNBonusPoint",
						"shortDesc": "SIM003",
						"longDesc": "SIM003",
						"src": "2.png",
						"status": "1",
						"field01": "1500",
						"createdBy": "agent001",
						"createdDate": "2017-01-22 16:17:18.753"
					},
					{
						"id": "e5040edc-7d85-44df-9abc-57523001d92d",
						"code": "SIM001",
						"name": "SIM001",
						"type": "ESUNBonusPoint",
						"shortDesc": "SIM001",
						"longDesc": "SIM001",
						"src": "BonusFinal.png",
						"status": "1",
						"field01": "1000",
						"createdBy": "agent001",
						"createdDate": "2017-01-21 17:41:06.500"
					}
				]
			};

			ACCoreJS.TransactXBonusPointSimulationRequest(tmpObj);
		}
		
		function DisplayTransact(val) {
			ACCoreJS.DisplayTransactScreen(val);
		}