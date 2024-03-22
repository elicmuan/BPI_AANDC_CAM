define([
  "app"
],
function(app) {
	var PinEntryScreenData = [ 
		{
			template:"pinEntryState", 
			ID:"PIN_ENTRY", 
			name:"PIN_ENTRY",
			min: 1,
			max: 6,
			navi: {
				naviType: "exitAANDCShowScreen",
				nextScreenTemplate:"PLEASEWAIT",
				nextScreenID: "0",
				setters: { }
			},
			cancelNavi: {
				naviType: "",
				nextScreenTemplate:"" ,
				nextScreenID : "" ,
				setters: {
					interNaviData: ""
				}
			},
			functions: {
				initFunctions: ["checkTIME","showLanguage","hideCurrentTime","disableTimer","displayTime_Only","pinentryBG","resetLanguagetText","last_trans_checker"]
			},
			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings DaxMedium top-greetings",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings DaxMedium top-greetings",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},	
				{
					text : "",
					L1 : "Enter your PIN </br> then press <img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btnEnter_pin.png'/>",
					//L1Class : "heading1 pinTitleLabel white text-center",
					L1Class : "mainTitleLabel black heading1 absolute txtmain_pin",
					L2 : "Ilagay ang iyong PIN </br>at pindutin ang <img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btnEnter_pin.png'/>",
					//L2Class : "heading1 pinTitleLabel white text-center",
					L2Class : "mainTitleLabel black heading1 absolute txtmain_pin ",
					L3 : "",
					L3Class : "heading1 pinTitleLabel white text-center", 					
					L4 : "",
					L4Class : "",
					L5 : "",
					L5Class : ""
				}
			],
			localClass: " buttonOverlayLabel redButtonOverlay ",
			images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				]	
		},
		{
			template:"pinEntryState", 
			ID:"PIN_ENTRY_CC", 
			name:"PIN_ENTRY_CC",
			min: 1,
			max: 6,
			navi: {
				naviType: "exitAANDCShowScreen",
				nextScreenTemplate:"PLEASEWAIT",
				nextScreenID: "0",
				setters: { }
			},
			cancelNavi: {
				naviType: "",
				nextScreenTemplate:"" ,
				nextScreenID : "" ,
				setters: {
					interNaviData: ""
				}
			},
			functions: {
				initFunctions: ["showLanguage" ,"checkTIME","hideCurrentTime","disableTimer","displayTime_Only","pinentryBG", "resetLanguagetText","last_trans_checker"]
			},
			labelsOri: [
				{
				  		text : "",
				  		L1 : "{greetings}",
				  		L1Class : "lblGreetings DaxMedium top-greetings",
				  		L2 : "{greetings_tagalog}",
				  		L2Class : "lblGreetings DaxMedium top-greetings",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				},
				{
					text : "",
					text : "",
					L1 : "Enter your</br> Cash Advance PIN </br>  then press <img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btnEnter_pin.png'/>",
					//L1Class : "heading1 pinTitleLabel white text-center",
					L1Class : "mainTitleLabel black heading1 absolute txtmain_pin3 ",
					L2 : "Ilagay ang iyong</br> Cash Advance PIN at</br> pindutin ang <img src='C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btnEnter_pin.png'/>",
					//L2Class : "heading1 pinTitleLabel white text-center",
					L2Class : "mainTitleLabel black heading1 absolute txtmain_pin3 ",
					L3 : "",
					L3Class : "heading1 pinTitleLabel white text-center", 					
					L4 : "",
					L4Class : "",
					L5 : "",
					L5Class : ""
				}
			],
			localClass: " buttonOverlayLabel redButtonOverlay ",
			images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				]	
		},
		
		
		{
			template:"pinEntryState", 
			ID:"CHANGE_PIN_MAG_1", 
			name:"CHANGE_PIN_MAG_1",
			min: 1,
			max: 6,
			navi: {
				naviType: "navi",
				nextScreenTemplate:"pinEntryState",
				nextScreenID: "CHANGE_PIN_MAG_2",
				setters: { }
			},
			cancelNavi: {
				naviType: "",
				nextScreenTemplate:"" ,
				nextScreenID : "" ,
				setters: {
					interNaviData: ""
				}
			},
			functions: {
				initFunctions: ["showLanguage" ,"checkTIME","hideLanguage","hideCurrentTime","disableTimer","displayTime_Only","pinchangeBG1","last_trans_checker"]
			},
			labelsOri: [
				{
					text : "",
					L1 : "Pin Change",
					//L1Class : "heading1 pinTitleLabel white text-center",
					L1Class : "lblPinChange",
					L2 : "Ipasok ang PIN at </br>pindutin ang",
					//L2Class : "heading1 pinTitleLabel white text-center",
					L2Class : "mainTitleLabel black heading1 absolute txtmain_pin alignpinlbl",
					L3 : "",
					L3Class : "heading1 pinTitleLabel white text-center", 					
					L4 : "",
					L4Class : "",
					L5 : "",
					L5Class : ""
				},
				{
					text : "",
					L1 : "Enter New PIN:",
					L1Class : "lblNewPin1"
				},
				{
					text : "",
					L1 : "Re-enter New PIN:",
					L1Class : "lblNewPin2"
					
				}			


			],
			localClass: " buttonOverlayLabel redButtonOverlay ",
			images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				]	
		},

		{
			template:"pinEntryState", 
			ID:"CHANGE_PIN_MAG_2", 
			name:"CHANGE_PIN_MAG_2",
			min: 1,
			max: 6,
			navi: {
				naviType: "navi",
				nextScreenTemplate:"",
				nextScreenID: "",
				setters: { }
			},
			cancelNavi: {
				naviType: "",
				nextScreenTemplate:"" ,
				nextScreenID : "" ,
				setters: {
					interNaviData: ""
				}
			},
			functions: {
				initFunctions: ["showLanguage" ,"checkTIME","hideLanguage","hideCurrentTime","disableTimer","displayTime_Only","pinchangeBG2","last_trans_checker"]
			},
			labelsOri: [

				{
					text : "",
					L1 : "Pin Change",
					//L1Class : "heading1 pinTitleLabel white text-center",
					L1Class : "lblPinChange",
					L2 : "Ipasok ang PIN at </br>pindutin ang",
					//L2Class : "heading1 pinTitleLabel white text-center",
					L2Class : "mainTitleLabel black heading1 absolute txtmain_pin alignpinlbl",
					L3 : "",
					L3Class : "heading1 pinTitleLabel white text-center", 					
					L4 : "",
					L4Class : "",
					L5 : "",
					L5Class : ""
				},
				{
					text : "",
					L1 : "Enter New PIN:",
					L1Class : "lblNewPin1"
				},
				{
					text : "",
					L1 : "Re-enter New PIN:",
					L1Class : "lblNewPin2"
					
				}	
			],
			localClass: " buttonOverlayLabel redButtonOverlay ",
			images: [
					{
						ID : "thankyouBG",
	  					src : "",
	  					localClass : "thankyouBG"
	  				}
				]	
		}
	];
	return PinEntryScreenData;
});