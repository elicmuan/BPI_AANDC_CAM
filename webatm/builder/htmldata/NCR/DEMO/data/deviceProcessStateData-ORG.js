define([
  // Application.
  "app"
],

function(app) {

	var deviceProcessData =
		[
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT",
				name: "INIT_PLEASEWAIT",
					localClass : "",
		  		initFunctions: ["checkTIME", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop","setOpcodeLanguage","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},	
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_3",
				name: "INIT_PLEASEWAIT_3",
					localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "TEMPORARILY_UNABLE_TO_PROCESS_TRANSACTION",
				name: "TEMPORARILY_UNABLE_TO_PROCESS_TRANSACTION",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},		
				images: [
					{
						ID : "lightbulb",
	  					src : "projectAssets/BPI/lightbulb.png",
	  					localClass : "lightbulb"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "Please take your card and receipt.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Kunin ang iyong card at resibo.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Temporarily unable to process this transaction.<br>Transaction has been cancelled",
				  		L1Class : "center-right-sec-tip black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "Kasalukuyang hindi maproseso ang transaksyon.<br>Kaya't ito ay kinansela",
				  		L2Class : "center-right-sec-tip black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "center-right-sec-tip black heading1 absolute DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CASH_RETRACTED",
				name: "CASH_RETRACTED",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
				images: [
					{
						ID : "lightbulb",
	  					src : "projectAssets/BPI/lightbulb.png",
	  					localClass : "lightbulb"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "Cash is being retracted.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Cash is being retracted.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Always be aware of <br>your surroundings.<br>Never accept help<br> from a stranger.",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L2 : "Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong <br>sa hindi kakilala.",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "center-right-sec-tip2 black heading1 absolute bgDevProcess DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
					/*{
				  		text : "",
				  		L1 : "",
				  		L1Class : "btngray2",
				  		L2 : "",
				  		L2Class : "btngray2",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}*/
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CARD_RETRACTED",
				name: "CARD_RETRACTED",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","initPleaseWaitBG"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
				images: [
					{
						ID : "lightbulb",
	  					src : "projectAssets/BPI/lightbulb.png",
	  					localClass : "lightbulb"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "Card is being retracted.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Card is being retracted.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Always be aware of <br>your surroundings.<br>Never accept help<br> from a stranger.",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L2 : "Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong <br>sa hindi kakilala.",
				  		L2Class : "center-right-sec-tip2-tag heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "center-right-sec-tip2 heading1 absolute bgDevProcess DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
					/*{
				  		text : "",
				  		L1 : "",
				  		L1Class : "btngray2",
				  		L2 : "",
				  		L2Class : "btngray2",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}*/
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "LIMIT_EXCEED",
				name: "LIMIT_EXCEED",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","checkTIME","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
				
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_limit DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_limit DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},									
					{
				  		text : "",
				  		L1 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Card limit exceeded.",
				  		L1Class : "black absolute margin-top-145-exceed Dax-Medium size40",
				  		L2 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Card limit exceeded.",
				  		L2Class : " black heading1 absolute DaxMedium margin-top-145-exceed cancel-font",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "NO_ACCOUNT",
				name: "NO_ACCOUNT",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
				images: [
					{
						ID : "lightbulb",
	  					src : "projectAssets/BPI/lightbulb.png",
	  					localClass : "lightbulb"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "No account.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "No account.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Always be aware of <br>your surroundings.<br>Never accept help<br> from a stranger.",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L2 : "Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong <br>sa hindi kakilala.",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute bgDevProcess DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "center-right-sec-tip2 black heading1 absolute bgDevProcess DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
					/*{
				  		text : "",
				  		L1 : "",
				  		L1Class : "btngray2",
				  		L2 : "",
				  		L2Class : "btngray2",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}*/
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INCORRECT_PIN",
				name: "INCORRECT_PIN",
					localClass : "",
		  		initFunctions: [ "disableTimer","checkTIME","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [

				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_PIN DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_PIN DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},									
										
	  				{
				  		text : "",
				  		L1 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> You have entered an incorrect PIN.",
				  		L1Class : "lbldev black heading1 absolute DaxMedium margin-top-145 pin-font",
				  		L2 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> You have entered an incorrect PIN.",
				  		L2Class : "lbldev black heading1 absolute DaxMedium margin-top-145 pin-font",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAITICC",
				name: "INIT_PLEASEWAITICC",
					localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},	
		
	  			labelsOri: [
				{
				  		text : "",
				  		L1	 : "{greetings}",
				  		L1Class : "lblGreetings_PLS_ICC DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS_ICC2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'></BR>Change your debit card <br>PIN regularly.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Palitan ang iyong debit card <br>PIN palagi.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA",
				name: "INIT_PLEASEWAIT_BAL_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MINI",
				name: "INIT_PLEASEWAIT_MINI",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MINI","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MINI_NOREC",
				name: "INIT_PLEASEWAIT_MINI_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MINI_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_PREPAID_NOREC",
				name: "INIT_PLEASEWAIT_BAL_PREPAID_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_bal_prepaid_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_PREPAID_NOREC",
				name: "INIT_PLEASEWAIT_FAST_PREPAID_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_fast_prepaid_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA_MAG",
				name: "INIT_PLEASEWAIT_BAL_CA_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_CC_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_WDL_CC_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_CC_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_SA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_WDL_SA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_SA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_CA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_WDL_CA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_CA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_CC_MAG_MASTER",
				name: "INIT_PLEASEWAIT_WDL_CC_MAG_MASTER",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_CC_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_SA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_WDL_SA_MAG_MASTER",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_SA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WDL_CA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_WDL_CA_MAG_MASTER",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WDL_CA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_BAL_CA_MAG_MASTER",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_BAL_CA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_BAL_SA_MAG_MASTER",
				localClass : "",
		  		initFunctions: ["checkTIME", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_BAL_SA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CC_MAG_MASTER",
				name: "INIT_PLEASEWAIT_BAL_CC_MAG_MASTER",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CC_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CC_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_BAL_CC_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CC_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_BAL_CA_MAG_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_CA_MAG_CIRRUS",
				name: "INIT_PLEASEWAIT_BAL_CA_MAG_CIRRUS",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_CA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "8" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA",
				name: "INIT_PLEASEWAIT_BAL_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA_MAG",
				name: "INIT_PLEASEWAIT_BAL_SA_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},


					{
				  		text : "",
				  		L1 : "",
				  		L1Class : "popUpPanelPleaseWait",
				  		L2 : "",
				  		L2Class : "popUpPleaseWait"
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_BAL_SA_MAG_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},


					{
				  		text : "",
				  		L1 : "",
				  		L1Class : "popUpPanelPleaseWait",
				  		L2 : "",
				  		L2Class : "popUpPleaseWait"
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",
				name: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_MC_OTHERAMT","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "8" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_PREP",
				name: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_PREP",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_MC_OTHERAMT","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
				name: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_MC_OTHERAMT_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_SA",
				name: "INIT_PLEASEWAIT_WTRWL_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_SA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
		
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_SA_MAG",
				name: "INIT_PLEASEWAIT_WTRWL_SA_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_SA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
		
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_SA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_WTRWL_SA_MAG_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_SA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
		
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_CA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_WTRWL_CA_MAG_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME", "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_CA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_CA",
				name: "INIT_PLEASEWAIT_WTRWL_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_CA_MAG",
				name: "INIT_PLEASEWAIT_WTRWL_CA_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_CA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CA",
				name: "INIT_PLEASEWAIT_FAST_CA",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA",
				name: "INIT_PLEASEWAIT_FAST_SA",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_MAG",
				name: "INIT_PLEASEWAIT_FAST_SA_MAG",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_FAST_CA_MAG_MASTER",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_MAG_MASTER",
				name: "INIT_PLEASEWAIT_FAST_SA_MAG_MASTER",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CC_MAG_MASTER",
				name: "INIT_PLEASEWAIT_FAST_CC_MAG_MASTER",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CC_MAG_master","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_FAST_SA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CA_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_FAST_CA_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CA_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CC_MAG_MASTER_NOREC",
				name: "INIT_PLEASEWAIT_FAST_CC_MAG_MASTER_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CC_MAG_master_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CA_MAG",
				name: "INIT_PLEASEWAIT_FAST_CA_MAG",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CA_MAG","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_CA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_FAST_CA_MAG_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_CA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_MAG_NOREC",
				name: "INIT_PLEASEWAIT_FAST_SA_MAG_NOREC",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_MAG_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_PRINTING",
				name: "RECEIPT_PRINTING",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","buildForm2","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "8",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { interNaviData: "" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_Receipt DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_Receipt DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Your receipt is printing...",
				  		L1Class : "initlblMainMenu_Dev_rec black heading1 absolute DaxMedium",
				  		L2 : "Kasalukuyang nagpi-print ang iyong resibo...",
				  		L2Class : "initlblMainMenu_Dev_rec black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
							text : "",
							L1 : "",
							L1Class : "lblrec_icon",
							L2 : "",
							L2Class : "lblrec_icon",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER",
				name: "RECEIPT_CHECKER",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "B    CAA" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER_BAL_MAG",
				name: "RECEIPT_CHECKER_BAL_MAG",
				localClass : "",
		  		initFunctions:[ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_last_mag","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER_FAST",
				name: "RECEIPT_CHECKER_FAST",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "F    C A" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER_FAST_MAG",
				name: "RECEIPT_CHECKER_FAST_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_last_mag","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_PRINTING_BAL",
				name: "RECEIPT_PRINTING_BAL",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","buildForm2","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "4",
				timeOutNextState: {
					naviType: "exitAANDCShowScreen",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters: { interNaviData: "" }
				},
		
				images: [
					{
						ID : "receiptprintinglogo",
	  					src : "projectAssets/BPI/receiptprintinglogo.png",
	  					localClass : "receiptprintinglogo"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
						{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Your receipt is printing...",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L2 : "Kasalukuyang nagpi-print ang iyong resibo...",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "THANK_YOU",
				name: "THANK_YOU",
				localClass : "enterPin buttonOverlayLabel redButtonOverlay",
		  		initFunctions: [ "changeBG", "HideHeader", "hideLanguage", "disableTimer","hideCurrentTime","displayTime_Only","coverthankYouBG"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
		
				images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [						
					{
				  		text : "",
				  		L1 : "",
				  		L1Class : "cover_ty",
				  		L2 : "",
				  		L2Class : "cover_ty",
				  		L3 : "",
				  		L3Class : "lbl_thankyou",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "TRANS_CANCELLED",
				name: "TRANS_CANCELLED",
				localClass : "",
		  		initFunctions: [ "changeBG","checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
		
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_Cancel DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_Cancel DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
					{
				  		text : "",
				  		L1 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Transaction cancelled.",
				  		L1Class : " black heading1 absolute DaxMedium margin-top-145 lbldev_cancel",
				  		L2 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Transaction cancelled.",
				  		L2Class : " black heading1 absolute DaxMedium margin-top-145 lbldev_cancel",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "OOS_SHOW",
				name: "OOS_SHOW",
				localClass : "",
		  		initFunctions: ["hideHeaderFunc", "disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","setBGPopOOS"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				}
			},
			{
				template: "deviceProcessState",
				ID: "GET_CARD",
				name: "GET_CARD",
					localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Get your card.",
				  		L1Class : "heading1   top-46-left-8 absolute DaxRegular lbldev_GetCard",
				  		L2 : "Kunin ang iyong card.",
				  		L2Class : "heading1  top-46-left-8 absolute DaxRegular lbldev_GetCard2",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "GET_CARD_REC",
				name: "GET_CARD_REC",
					localClass : "",
		  		initFunctions: [ "disableTimer","checkTIME","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				}
				],
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_CARDREC DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_CARDREC DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},
	  				{
				  		text : "",
				  		L1 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Temporarily unable to process this transaction.</BR></BR></BR></BR></BR></BR></BR></BR></BR></BR>Get your card.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L2 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Temporarily unable to process this transaction.</BR></BR></BR></BR></BR></BR></BR></BR></BR></BR>Get your card.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CANNOT_PROC",
				name: "CANNOT_PROC",
					localClass : "",
		  		initFunctions: [ "disableTimer","checkTIME","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				}
				],
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_CARDREC DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_CARDREC DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},
	  				{
				  		text : "",
				  		L1 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Transaction cannot be processed. </BR></BR></BR></BR></BR></BR></BR></BR></BR></BR>Please visit branch of account.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L2 : "<img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/RedWarning.png'/> Transaction cannot be processed. </BR></BR></BR></BR></BR></BR></BR></BR></BR></BR>Please visit branch of account.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "GETCASH",
				name: "GETCASH",
					localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getcashlogo",
	  					src : "projectAssets/BPI/Get-Cash-CAM.gif",
	  					localClass : "getcashlogo_img"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_GetCash DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_GetCash DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},									
	  				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Get your returned cash below.",
				  		L1Class : "getcashfont white absolute  top-46-left-8-GETCASH DaxRegular ",
				  		L2 : "Kunin ang ibinalik mong pera sa ibaba.",
				  		L2Class : "getcashfont white absolute top-46-left-8-GETCASH DaxRegular ",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CANCELLED",
				name: "CANCELLED",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "Transaction cancelled.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L2 : "Transaction cancelled.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INVALIDCARD",
				name: "INVALIDCARD",
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
		
				images: [
					{
						ID : "lightbulb",
	  					src : "projectAssets/BPI/lightbulb.png",
	  					localClass : "lightbulb"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "Your card is invalid.",
				  		L1Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L2 : "Your	 card is invalid.",
				  		L2Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev black heading1 absolute DaxMedium margin-top-145",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Change your debit card PIN regularly.",
				  		L1Class : "center-right-sec-tip2 center-right-pin-notif black heading1 absolute DaxMedium changePinNotification2",
				  		L2 : "Palitan ang iyong debit card PIN palagi.",
				  		L2Class : "center-right-sec-tip2 center-right-pin-notif black heading1 absolute DaxMedium changePinNotification2",
				  		L3 : "",
				  		L3Class : "center-right-sec-tip2 center-right-pin-notif black heading1 absolute  DaxMedium",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "THANKYOU",
				name: "THANKYOU",
				localClass: "deviceProcessingCommonEffects",
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
				images: [],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Thank you for banking with us.",
	  					L1Class : " deviceProcessingCommonLabels white f32",
	  					L2 : "Maraming Salamat",
	  					L2Class : " deviceProcessingCommonLabels white f32",
	  					L3 : "Terima Kasih",
	  					L3Class : " deviceProcessingCommonLabels white f32",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""

	  				}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "OOS",
				name: "OOS",
				localClass: "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
				images: [],
				labelsOri: [
	  				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Machine is currently not available.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxRegular",
				  		L2 : "Machine is currently not available.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute top-46-left-8 DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "FASTCASH_TAKECARD_WITH_BALANCE",
				name: "FASTCASH_TAKECARD_WITH_BALANCE",
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/loadingcircle.png",
	  					localClass : "large-4 large-centered columns outerframe rotate rotate"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns middleframe"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns innerframe"
	  				},

	  				{
						ID : "pic",
	  					source : "projectAssets/DEMO/icon_takecard.png",
	  					localClass : "large-4 large-centered columns innerpic"
	  				}
				],
				labelsOri: [
	  				 {
	  					text : "",
	  					L1 : "TAKE OUT THE CARD",
	  					L1Class : "title large-12 columns  iso-label",
	  					L2 : "请稍等",
	  					L2Class : "title large-12 columns  iso-label",
	  					L3 : "Sila tunggu sebentar",
	  					L3Class : "title large-12 columns  iso-label",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""

	  				}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CASHWITHDRAWAL_TAKECASH_RECEIPT",
				name: "CASHWITHDRAWAL_TAKECASH_RECEIPT",
				localClass: "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "4",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "5" ,
					setters: { interNaviData: "" }
				},
				images: [ 
					{
						ID : "getcashlogo",
	  					src : "projectAssets/BPI/getcashlogo.png",
	  					localClass : "getcashlogo"
	  				}
				],
				labelsOri: [
	  				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Please get your cash.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess top-46-left-8 DaxRegular",
				  		L2 : "Maaari ng kuhanin ang iyong card.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess top-46-left-8 DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			/*ONG*/
		    {
		        template: "deviceProcessState",
		        ID: "ERROR",
		        name: "ERROR",
				localClass: "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		        goodNextState: {
		          "0": {
		            naviType: "navi",
		            navigate: "",
		            nextScreenID: ""
		          }
		        },
		        badNextState: {
		          0: {
		            naviType: "navi",
		            navigate: "",
		            nextScreenID: ""
		          }
		        },
		        timeOutTimer: "-1",
		        timeOutNextState: {
		          naviType: "interNavi",
		          navigate: "deviceProcessState",
		          nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
		          setters: { interNaviData: "RETAINCARD" }
		        },
		        images: [],
		        labelsOri: [
		  	  		{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Sorry, we are unable to process your transaction.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess top-46-left-8 DaxRegular",
				  		L2 : "Sorry, we are unable to process your transaction.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess top-46-left-8 DaxMedium",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
		  	  	]
		    },
		    /* ID: READYTOACCEPTMONEY */
			{
				template: "deviceProcessState",
				ID 		: "READYTOACCEPTMONEY",
				name 	: "READYTOACCEPTMONEY",
				goodNextState: {
					0 : {
						naviType	: "navi",
						navigate	: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0 :
					{
						naviType: "navi",
						navigate:"conditionState" ,
						nextScreenID : "ERROR_PROCESS_ERRORLBL" ,
						setters :
						{
							interNaviData: ""
						}
					}
				},

				cancelNavi :
				{
					naviType: "interNavi",
					nextScreenTemplate:"deviceProcessState" ,
					nextScreenID : "PLEASE_WAIT" ,
					setters :
					{
						interNaviData: "cancelAddMoney"
					}
				},

				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "",
					navigate: "",
					nextScreenID: "",
					setters: { interNaviData: "" }
				},
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/loadingcircle.png",
	  					localClass : "large-4 large-centered columns outerframe rotate"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns middleframe"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns innerframe"
	  				},

	  				{
						ID : "pic",
	  					source : "projectAssets/DEMO/icon_insertcash.png",
	  					localClass : "large-4 large-centered columns innerpic"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Place cash in deposit slot.",
	  					L1Class : "title large-12 columns  iso-label",
	  					L2 : "请稍等",
	  					L2Class : "title large-12 columns ",
	  					L3 : "Sila tunggu sebentar",
	  					L3Class : "title large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				},
	  				{
	  					text : "",
	  					L1 : "Press Continue to deposit.",
	  					L1Class : "title large-12 columns  iso-label-2",
	  					L2 : "",
	  					L2Class : "title large-12 columns ",
	  					L3 : "",
	  					L3Class : "title large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				},
	  			],
	  			buttons: [
	  				{
	  					ID : "buttonContinue",
						naviType: "interNavi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID : "CASH_DEPOSIT_COUNT_CASH",
	  					label1 : "Continue",

						setters :
						{
						 	interNaviData	: "closeShutter",
							OPCODE			: "BC    A "
						},

						localClass: "cashDepositButtonContinue button"
	  				},
	  			]
			},
			/* END TEMPLATE */
			/* ID: CASH_DEPOSIT_COUNT_CASH */
			{
				template: "deviceProcessState",
				ID 		: "CASH_DEPOSIT_COUNT_CASH",
				name 	: "CASH_DEPOSIT_COUNT_CASH",
				goodNextState: {
					0 :
					{
						naviType	: "navi",
						navigate	: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0 :
					{
						naviType: "navi",
						navigate:"conditionState" ,
						nextScreenID : "ERROR_PROCESS_ERRORLBL" ,
						setters :
						{
							interNaviData: ""
						}
					}
				},
	  			images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/loadingcircle.png",
	  					localClass : "large-4 large-centered columns outerframe rotate"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns middleframe"
	  				},

	  				{
						ID : "loadingIcon",
	  					source : "",
	  					localClass : "large-4 large-centered columns innerframe"
	  				},

	  				{
						ID : "pic",
	  					source : "projectAssets/DEMO/icon_cashinmachine.png",
	  					localClass : "large-4 large-centered columns innerpic"
	  				}
				],
				//Please wait while you we count your cash.
				labelsOri: [
	  				 {
	  					text : "",
	  					L1 : "PLEASE WAIT...",
	  					L1Class : "title large-12 columns  iso-label",
	  					L2 : "请稍等",
	  					L2Class : "title large-12 columns  iso-label",
	  					L3 : "Sila tunggu sebentar",
	  					L3Class : "title large-12 columns  iso-label",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""

	  				},
	  				{
	  					text : "",
	  					L1 : "we counting your cash",
	  					L1Class : "title large-12 columns  iso-label-2",
	  					L2 : "请稍等",
	  					L2Class : "title large-12 columns  iso-label-2",
	  					L3 : "Sila tunggu sebentar",
	  					L3Class : "title large-12 columns  iso-label-2",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""

	  				}
	  			]
			},
			/* END TEMPLATE */
			/* ID = CASH_DEPOSIT_CONFIRMATION */
			//currently is not using.
			{
				template: "deviceProcessState",
				ID 		: "CASH_DEPOSIT_CONFIRMATION",
				name 	: "CASH_DEPOSIT_CONFIRMATION",
				goodNextState: {
					0 :
					{
						naviType	: "navi",
						navigate	: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0 :
					{
						naviType: "navi",
						navigate:"conditionState" ,
						nextScreenID : "ERROR_PROCESS_ERRORLBL" ,
						setters :
						{
							interNaviData: ""
						}
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				},
				images: [

				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Are you confirm to deposit the cash? ",
	  					L1Class : "large-12 columns  confirmDepLabel",
	  					L2 : "您确认存入现金?",
	  					L2Class : "large-12 columns  confirmDepLabel",
	  					L3 : "",
	  					L3Class : "large-12 columns  confirmDepLabel",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],
	  			buttons: [
	  				{
	  					ID : "buttonYes",
						naviType: "interNaviRouteReqWithoutNavi",
						nextScreenTemplate:"transactionRouteState",
						nextScreenID : "CASH_DEPOSIT_CONFIRMED",
	  					label1 : "Yes",

						setters :
						{
						 	interNaviData	: ""
						},

						localClass: " yesButton large-3 columns  "
	  				},
	  				{
	  					ID : "buttonNo",
						naviType: "interNavi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID : "INIT_PLEASEWAIT",
	  					label1 : "No",

						setters :
						{
						 	interNaviData	: "returnMoney"
						},

						localClass: " noButton large-3 columns "
	  				}
	  			]
			},
			/* END TEMPLATE */
			/* ID = CASH_DOPOSIT_COMPLETED */
			//currently is not using
			{
				template: "deviceProcessState",
				ID 		: "CASH_DOPOSIT_COMPLETED",
				name 	: "CASH_DOPOSIT_COMPLETED",
				goodNextState: {
					0 :
					{
						naviType	: "navi",
						navigate	: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0 :
					{
						naviType: "navi",
						navigate:"conditionState" ,
						nextScreenID : "ERROR_PROCESS_ERRORLBL" ,
						setters :
						{
							interNaviData: ""
						}
					}
				},
				timeOutTimer: "-1",
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				},
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Cash had deposit successfully, Thank you.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			]
			},
			/* END TEMPLATE */
			/* ID: CASHDEPOSITERROR */
			{
				template: "deviceProcessState",
				ID: "CASHDEPOSITERROR",
				name: "CASHDEPOSITERROR",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Sorry, machine is not able to process the transaction at this moment.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMPLATE */
			/* ID: CASHDEPOSITERROR_NOTEMPTY */
			{
				template: "deviceProcessState",
				ID: "CASHDEPOSITERROR_NOTEMPTY",
				name: "CASHDEPOSITERROR_NOTEMPTY",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Sorry, machine is not empty and not able to process the transaction at this moment.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMPLATE */
			/* ID: MONEYREJECTED */
			{
				template: "deviceProcessState",
				ID: "MONEYREJECTED",
				name: "MONEYREJECTED",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Please take your returned cash.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMAPLTE */
			/* ID: MONEYREJECTED_FULL */
			{
				template: "deviceProcessState",
				ID: "MONEYREJECTED_FULL",
				name: "MONEYREJECTED_FULL",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "The notes is full. Please take your returned cash.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMAPLTE */
			/* ID: MONEYREJECTED_ERROR */
			{
				template: "deviceProcessState",
				ID: "MONEYREJECTED_ERROR",
				name: "MONEYREJECTED_ERROR",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Currently machine is not available. Please take your returned cash.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMAPLTE */
			/* ID: REJECTEDMONEYNOTTAKEN */
			{
				template: "deviceProcessState",
				ID: "REJECTEDMONEYNOTTAKEN",
				name: "REJECTEDMONEYNOTTAKEN",
				images: [
					{
						ID : "loadingIcon",
	  					source : "projectAssets/DEMO/logo.gif",
	  					localClass : "large-4 large-centered columns"
	  				}
				],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Returned cash will be capture.",
	  					L1Class : "CashDepositTitle large-12 columns ",
	  					L2 : "",
	  					L2Class : "CashDepositTitle large-12 columns ",
	  					L3 : "",
	  					L3Class : "CashDepositTitle large-12 columns ",
	  					L4 : "",
	  					L4Class : "",
	  					L5 : "",
	  					L5Class : ""
	  				}
	  			],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMAPLTE*/
			/* ID: CASH_DEPOSIT_DEFAULT_ERROR */
			{
		        template: "deviceProcessState",
		        ID 		: "CASH_DEPOSIT_DEFAULT_ERROR",
		        name 	: "CASH_DEPOSIT_DEFAULT_ERROR",
		        goodNextState: {
		          "0": {
		            naviType: "navi",
		            navigate: "",
		            nextScreenID: ""
		          }
		        },
		        badNextState: {
		          0: {
		            naviType: "navi",
		            navigate: "",
		            nextScreenID: ""
		          }
		        },
		        timeOutTimer: "-1",
		        timeOutNextState: {
		          naviType: "interNavi",
		          navigate: "deviceProcessState",
		          nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
		          setters: { interNaviData: "RETAINCARD" }
		        },
		        images: [
		          	{
		            	ID : "loadingIcon",
		              	source : "projectAssets/DEMO/logo.gif",
		              	localClass : "large-4 large-centered columns"
		            }
		        ],
		        labelsOri: [
  	  				{
  	  					text : "",
  	  					L1 : "Sorry, we are unable to process your transaction<br />Please contact your bank for further assistance",
  	  					L1Class : "subtitle bottomMessage ",
  	  					L2 : "对不起，我们不能处理您的交易 <br /> 请联络您的银行给予协助",
  	  					L2Class : "subtitle bottomMessage ",
  	  					L3 : "Sorry, transaksimu tidak dapat diproses<br />Silahkan hubungi bank kamu untuk mendapatkan bantuan",
  	  					L3Class : "subtitle bottomMessage ",
  	  					L4 : "",
  	  					L4Class : "",
  	  					L5 : "",
  	  					L5Class : ""
  	  				}
		  	  	],
		  	  	buttons: [
	  				{
	  					ID : "buttonMenu",
						naviType: "navi",
						nextScreenTemplate:"tabState",
						nextScreenID : "MAINMENU",
	  					label1 : "Main Menu",

						setters :
						{
						 	interNaviData	: ""
						},

						localClass: " button centerButton centerMenuButton"
	  				},
	  				{
	  					ID : "buttonEjectCard",
						naviType: "interNavi",
						nextScreenTemplate:"",
						nextScreenID : "",
	  					label1 : "Eject Card",

						setters :
						{
						 	interNaviData	: ""
						},

						localClass: " button centerButton centerRejectButton"
	  				},
	  			]
		    },
			/* END TEMAPLATE */
			/* ID: CASH_DEPOSIT_RETURN_MONEY_DEVICE_FAILURE */
			{
				template: "deviceProcessState",
				ID 		: "CASH_DEPOSIT_RETURN_MONEY_DEVICE_FAILURE",
				name 	: "CASH_DEPOSIT_RETURN_MONEY_DEVICE_FAILURE",
				images: [
		          	{
		            	ID : "loadingIcon",
		              	source : "projectAssets/DEMO/logo.gif",
		              	localClass : "large-4 large-centered columns"
		            }
		        ],
		        labelsOri: [
  	  				{
  	  					text : "",
  	  					L1 : "Sorry, hardware error encounter. Cash will be not able to return, please proceed to counter.",
  	  					L1Class : "subtitle bottomMessage ",
  	  					L2 : "对不起，我们不能处理您的交易 <br /> 请联络您的银行给予协助",
  	  					L2Class : "subtitle bottomMessage ",
  	  					L3 : "Sorry, transaksimu tidak dapat diproses<br />Silahkan hubungi bank kamu untuk mendapatkan bantuan",
  	  					L3Class : "subtitle bottomMessage ",
  	  					L4 : "",
  	  					L4Class : "",
  	  					L5 : "",
  	  					L5Class : ""
  	  				}
		  	  	],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			/* END TEMAPLTE */
			/* ID: CASH_DEPOSIT_RETURNED_MONEY_NOT_TAKEN */
			{
				template: "deviceProcessState",
				ID 		: "CASH_DEPOSIT_RETURNED_MONEY_NOT_TAKEN",
				name 	: "CASH_DEPOSIT_RETURNED_MONEY_NOT_TAKEN",
				images: [
		          	{
		            	ID : "loadingIcon",
		              	source : "projectAssets/DEMO/logo.gif",
		              	localClass : "large-4 large-centered columns"
		            }
		        ],
		        labelsOri: [
  	  				{
  	  					text : "",
  	  					L1 : "Returned cash will be capture.",
  	  					L1Class : "subtitle bottomMessage ",
  	  					L2 : "对不起，我们不能处理您的交易 <br /> 请联络您的银行给予协助",
  	  					L2Class : "subtitle bottomMessage ",
  	  					L3 : "Sorry, transaksimu tidak dapat diproses<br />Silahkan hubungi bank kamu untuk mendapatkan bantuan",
  	  					L3Class : "subtitle bottomMessage ",
  	  					L4 : "",
  	  					L4Class : "",
  	  					L5 : "",
  	  					L5Class : ""
  	  				}
		  	  	],

				// initFunctions :
				// [
				// "playEjectAlertBeep"
				// ],
				//
				// naviFunctions :
				// [
				// "stopEjectAlertBeep"
				// ],

				goodNextState: {
					//not set yet
					"0": {
						naviType: "navi",
						navigate: "twoBtnMenuState",
						nextScreenID: "TWOBTN_PAYMENT_ESB_ACCT_OVERDRAFT_PRINTRECEIPT"
					}
				},
				badNextState: {
					//not set yet
					0: {
						naviType: "navi",
						navigate: "conditionState",
						nextScreenID: "CONDITION_VERIFY_TRX_FAILURE_VERIFY_RECEIPT"
					}
				},
				timeOutTimer: "-1",
				//not set yet
				timeOutNextState: {
					naviType: "interNavi",
					navigate: "deviceProcessState",
					nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
					setters: {
						interNaviData: "RETAINCARD"
					}
				}
			},
			{
				template: "deviceProcessState",
				ID: "CHANGE_PIN_PLEASEWAIT_MAG_REC",
				name: "CHANGE_PIN_PLEASEWAIT_MAG_REC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_change_pin_mag_with_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CHANGE_PIN_PLEASEWAIT_MAG_NOREC",
				name: "CHANGE_PIN_PLEASEWAIT_MAG_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_change_pin_mag_without_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_MAG",
				name: "INIT_PLEASEWAIT_PINCHANGE_MAG",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_mag_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_CREDIT",
				name: "INIT_PLEASEWAIT_PINCHANGE_CREDIT",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_credit_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC",
				name: "INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_credit_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_MAG_NOREC",
				name: "INIT_PLEASEWAIT_PINCHANGE_MAG_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_mag_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC",
				name: "INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_credit_norec","thankYouBG"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_CREDIT",
				name: "INIT_PLEASEWAIT_PINCHANGE_CREDIT",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_credit","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PINCHANGE_NOREC",
				name: "INIT_PLEASEWAIT_PINCHANGE_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PINCHANGE_mc_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EXPRESS_CA",
				name: "INIT_PLEASEWAIT_EXPRESS_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESSOL_mag_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EXPRESS_CA_NOREC",
				name: "INIT_PLEASEWAIT_EXPRESS_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESSOL_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EXPRESS_SA",
				name: "INIT_PLEASEWAIT_EXPRESS_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESSOL_mag_sa","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EXPRESS_SA_NOREC",
				name: "INIT_PLEASEWAIT_EXPRESS_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESSOL_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PHONE_SA",
				name: "INIT_PLEASEWAIT_PHONE_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PHONE_mag_sa","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PHONE_SA_NOREC",
				name: "INIT_PLEASEWAIT_PHONE_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PHONE_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PHONE_CA",
				name: "INIT_PLEASEWAIT_PHONE_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PHONE_mag_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_PHONE_CA_NOREC",
				name: "INIT_PLEASEWAIT_PHONE_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PHONE_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MOBILE_SA",
				name: "INIT_PLEASEWAIT_MOBILE_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MOBILE_mag_sa","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MOBILE_SA_NOREC",
				name: "INIT_PLEASEWAIT_MOBILE_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MOBILE_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MOBILE_CA",
				name: "INIT_PLEASEWAIT_MOBILE_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MOBILE_mag_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MOBILE_CA_NOREC",
				name: "INIT_PLEASEWAIT_MOBILE_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_MOBILE_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_EN_SA",
				name: "INIT_PLEASEWAIT_BANKING_EN_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_EN_mag_sa","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_EN_SA_NOREC",
				name: "INIT_PLEASEWAIT_BANKING_EN_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_EN_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_EN_CA",
				name: "INIT_PLEASEWAIT_BANKING_EN_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_EN_mag_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_EN_CA_NOREC",
				name: "INIT_PLEASEWAIT_BANKING_EN_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_EN_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_MPIN_SA",
				name: "INIT_PLEASEWAIT_BANKING_MPIN_SA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_mag_sa","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_MPIN_SA_NOREC",
				name: "INIT_PLEASEWAIT_BANKING_MPIN_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_MPIN_CA",
				name: "INIT_PLEASEWAIT_BANKING_MPIN_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_mag_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BANKING_MPIN_CA_NOREC",
				name: "INIT_PLEASEWAIT_BANKING_MPIN_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

		{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC",
				name: "INIT_PLEASEWAIT_EMV_MC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_emv_mc","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

		{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_PIN_NOM",
				name: "INIT_PLEASEWAIT_EMV_MC_PIN_NOM",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_emv_mc_pin_nom","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [

				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},

				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}	
				]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_NOREC",
				name: "INIT_PLEASEWAIT_EMV_MC_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_emv_mc_pin_nom_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_PIN_NOM_NOREC",
				name: "INIT_PLEASEWAIT_EMV_MC_PIN_NOM_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_emv_mc_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_PHONE",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_PHONE",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_PHONE_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_PHONE_NOREC",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_PHONE_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_PHONE_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_ONLINE",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_ONLINE",
				localClass : "",
		  		initFunctions: [ "checkTIME", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_ONLINE_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_ONLINE_NOREC",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_ONLINE_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_ONLINE_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_MOBILE",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_MOBILE",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_MOBILE_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_EXPRESS_MOBILE_NOREC",
				name: "INIT_PLEASEWAIT_EMV_EXPRESS_MOBILE_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_EXPRESS_MOBILE_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},


			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_BANKING_ENROLLMENT",
				name: "INIT_PLEASEWAIT_EMV_BANKING_ENROLLMENT",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_ENROLLMENT_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_BANKING_ENROLLMENT_NOREC",
				name: "INIT_PLEASEWAIT_EMV_BANKING_ENROLLMENT_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_ENROLLMENT_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},


			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_BANKING_MPIN",
				name: "INIT_PLEASEWAIT_EMV_BANKING_MPIN",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_BANKING_MPIN_NOREC",
				name: "INIT_PLEASEWAIT_EMV_BANKING_MPIN_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BANKING_MPIN_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_PIN_CHANGE",
				name: "INIT_PLEASEWAIT_EMV_PIN_CHANGE",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PIN_CHANGE_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_PIN_CHANGE_NOREC",
				name: "INIT_PLEASEWAIT_EMV_PIN_CHANGE_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PIN_CHANGE_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_PIN_NOMINATION",
				name: "INIT_PLEASEWAIT_EMV_PIN_NOMINATION",
				localClass : "",
		  		initFunctions: ["checkTIME", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PIN_NOMINATION_emv","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_PIN_NOMINATION_NOREC",
				name: "INIT_PLEASEWAIT_EMV_PIN_NOMINATION_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_PIN_NOMINATION_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MAG_ACTIVATE_EMV",
				name: "INIT_PLEASEWAIT_MAG_ACTIVATE_EMV",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_ACTIVATE_EMV_mag","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MAG_ACTIVATE_EMV_NOREC",
				name: "INIT_PLEASEWAIT_MAG_ACTIVATE_EMV_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_ACTIVATE_EMV_mag_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER_FAST_MC",
				name: "RECEIPT_CHECKER_FAST_MC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},				
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "RECEIPT_CHECKER_FAST_MC_NOREC",
				name: "RECEIPT_CHECKER_FAST_MC_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_last_mc_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_CIRRUS_FAST_NOREC",
				name: "INIT_PLEASEWAIT_CIRRUS_FAST_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cirrus_fast_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MC_FAST_NOREC",
				name: "INIT_PLEASEWAIT_MC_FAST_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_mc_fast_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC",
				name: "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cirrus_bal_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC_CA",
				name: "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC_CA",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cirrus_bal_norec_ca","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "8" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_BAL_SA_NOREC",
				name: "INIT_PLEASEWAIT_BAL_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_BAL_SA_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_WTRWL_SA_NOREC",
				name: "INIT_PLEASEWAIT_WTRWL_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_WTRWL_SA_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FORCE_PIN",
				name: "INIT_PLEASEWAIT_FORCE_PIN",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_force_pin","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FORCE_PIN_NOREC",
				name: "INIT_PLEASEWAIT_FORCE_PIN_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_force_pin_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_MC_PIN_NOM_NOREC",
				name: "INIT_PLEASEWAIT_MC_PIN_NOM_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_emv_mc_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_NOREC",
				name: "INIT_PLEASEWAIT_FAST_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_FAST_SA_NOREC_2",
				name: "INIT_PLEASEWAIT_FAST_SA_NOREC_2",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_FAST_SA_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "5" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PLS DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PLS2 DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
				{
				  		text : "",
				  		L1 : "Please wait. Your transaction </br>is being processed.",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L2 : "Mangyaring maghintay. Kasalukuyang <br>pinoproseso ang iyong transaksyon.",
				  		L2Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "<div class='initClearfix marginEng'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblEng'>Always be aware of <br> your surroundings.<br>Never accept help<br> from a stranger.</p></div>",
				  		L1Class : "center-right-sec-tip2 black heading1 absolute DaxMedium changePinNotification",
				  		L2 : "<div class='initClearfix marginTag'><img class='initImg' src='projectAssets/BPI/lightbulb.png'><p class='initLblTag'>Maging alisto sa iyong paligid.<br>Huwag tumanggap ng tulong </br>sa hindi kakilala.</p></div>",
				  		L2Class : "center-right-sec-tip2-tag black heading1 absolute DaxMedium changePinNotification",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_GET_CARD",
				name: "INIT_PLEASEWAIT_GET_CARD",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,
					setters: { "#2014" : "{opcode}" }
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Get your card.",
				  		L1Class : "heading1   top-46-left-8 absolute DaxRegular lbldev_GetCard",
				  		L2 : "Kunin ang iyong card.",
				  		L2Class : "heading1  top-46-left-8 absolute DaxRegular lbldev_GetCard2",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_GET_CARD_ENROLLMENTS",
				name: "INIT_PLEASEWAIT_GET_CARD_ENROLLMENTS",
				localClass : "",
		  		initFunctions: ["checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters: { "#2014" : "{opcode}" }
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				}
				],
	  			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings_PL_GetCard DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
					{
							text : "",
							L1 : "{time}",
							L1Class : "lblTime",
							L2 : "{time}",
							L2Class : "lblTime",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},				
	  				{
				  		text : "",
				  		L1 : "Get your card.",
				  		L1Class : "heading1   top-46-left-8 absolute DaxRegular lbldev_GetCard",
				  		L2 : "Kunin ang iyong card.",
				  		L2Class : "heading1  top-46-left-8 absolute DaxRegular lbldev_GetCard2",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_REC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_REC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_emv_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_NOREC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_emv_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "2" ,
					setters: { "#2014" : "{opcode}" }
				},
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_SA_REC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_SA_REC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_sa_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},			

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_SA_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_SA_NOREC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_sa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 	  			
				]
			},	
			
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_CA_REC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_CA_REC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_ca_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},	
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_CA_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_CA_NOREC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_ca_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		

	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
				]
			},				
	
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_PA_REC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_PA_REC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_pa_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
				]
			},

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_PA_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_MAG_PA_NOREC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_mag_pa_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},

	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},								
			{
				template: "deviceProcessState",
				ID: "INSERT_CASH",
				name: "INSERT_CASH",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getcashlogo",
	  					src : "projectAssets/BPI/Cash-Deposit.gif",
	  					localClass : "insertcashlogo"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
									
	  				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblBillDepositGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblBillDepositGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},					
	  				{
				  		text : "",
				  		L1 : "<p class='lblInsertBills'>Place your bills in the opening bin.</p>",		
				  		L1Class : "DaxRegular",
				  		L2 : "<p class='lblInsertBills'>Ilagay ang iyong pera sa opening bin.</p>",
				  		L2Class : "DaxRegular",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},				
	  				{
				  		text : "",
				  		L1 : "<img class='warningIco' src='projectAssets/BPI/check.png'><p class='lblDepositCash'>You can deposit cash </br> up to 100 pieces of bills.</p>",
				  		L1Class : "DaxRegular",
				  		L2 : "<img class='warningIco2' src='projectAssets/BPI/check.png'><p class='lblDepositCash'>Maaaring mag-deposit hanggang<br> sa 100 na piraso ng bills. </p>	",
				  		L2Class : " DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "GETCASH",
				name: "GETCASH",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGDefault","checkTIME"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getcashlogo",
	  					src : "projectAssets/BPI/Get-Cash-CAM.gif",
	  					localClass : "getcashlogo"
	  				},
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				],
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblBillDepositGreetings_GET DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblBillDepositGreetings_GET DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},								
	  				{
				  		text : "",
				  		L1 : "Get your cash.",
				  		L1Class : "lblGetCash DaxRegular",
				  		L2 : "Kunin ang pera.",
				  		L2Class : "lblGetCash DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "GET_CARD_REC",
				name: "GET_CARD_REC",
					localClass : "",
		  		initFunctions: [ "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
		
				images: [
					{
						ID : "getyourcardlogo",
	  					src : "projectAssets/BPI/getyourcardlogo.png",
	  					localClass : "getyourcardlogo"
	  				},
                                        {
						ID : "warningico",
	  					src : "projectAssets/BPI/RedWarning.png",
	  					localClass : "imgwarningico"
	  				}

				],
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblDepositGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblDepositGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},					
	  				{
				  		text : "",
				  		L1 : "Temporarily unable to process this transaction.",
				  		L1Class : "lblTopGetCard",
				  		L2 : "Temporarily unable to process this transaction.",
				  		L2Class : "lblTopGetCard",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
				  	{
				  		text : "",
				  		L1 : "Get your card.",
				  		L1Class : "lblBottomGetCard",
				  		L2 : "Get your card.",
				  		L2Class : "lblBottomGetCard",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI",
				name: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cardless_bpi","setBGPop","setOpcodeLanguage"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},											
	  				{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}  	
	  			]
			},	

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",
				name: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cardless_bpi_family","setBGPop","setOpcodeLanguage"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
		

	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},	

			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",
				name: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_cardless_bpi_direct","setBGPop","setOpcodeLanguage"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "7" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},

						{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_PREPAID_REC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_PREPAID_REC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_prepaid_rec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "5" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_CASH_PREPAID_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_CASH_PREPAID_NOREC",
				localClass : "",
		  		initFunctions: [ "showLanguage", "disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_prepaid_norec","setBGPop"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "5" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},		  				
					{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	} 
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_PREPAID",
				name: "INIT_PLEASEWAIT_DEPOSIT_PREPAID",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_prepaid","setBGPop","setOpcodeLanguage"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},											
	  				{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}  	
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "INIT_PLEASEWAIT_DEPOSIT_PREPAID_NOREC",
				name: "INIT_PLEASEWAIT_DEPOSIT_PREPAID_NOREC",
				localClass : "",
		  		initFunctions: [ "checkTIME","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only","checkLang_dep_prepaid_norec","setBGPop","setOpcodeLanguage"],
				goodNextState: {
					"0": {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				badNextState: {
					0: {
						naviType: "navi",
						navigate: "",
						nextScreenID: ""
					}
				},
				timeOutTimer: "2",
				timeOutNextState: {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "4" ,
					setters: { "#2014" : "{opcode}" }
				},
		
	  			labelsOri: [
					{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblMainMenuGreetings DaxMedium",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblMainMenuGreetings DaxMedium",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
					},											
	  				{
				  		text : "",
				  		L1 : "For smooth transaction, avoid these bills:",
				  		L1Class : "initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L2 : "Para sa madaling transaksyon, iwasang ilagay<br>ang mga sumusunod:",
				  		L2Class : " initlblMainMenu_Dev black heading1 absolute DaxMedium front-txt",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
	  				{
				  		text : "",
				  		L1 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-50px; margin-left:240px;' src='projectAssets/BPI/PlsEng.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L1Class : "",
				  		L2 : "<div class='initClearfix positionBill1'><img style='width: 60%; margin-top:-40px; margin-left:240px;' src='projectAssets/BPI/PlsTag.gif'><p class='heading4 lblBold DaxMedium'></p></div>",
				  		L2Class : "",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}  	
	  			]
			}			
			/* END TEMPLATE */
		]
	;

	return deviceProcessData;

});
