define([
  "app"
],
function(app) {
	var menuBarData = {
		"menuBar" : 
		[
			
	  		{ 
	  			type:"VTMMAINMENU",
	  			
	  			ID:"VTMMAINMENU", 
	  			name:"",
	  			label1:"", 
	  			label2:"",
	  			
	  			naviType: "naviNoShowMenuBar",
	  			navigate:"menuButtonState" ,
	  			nextScreenID : "VTM_MAINMENU" ,

	  			localClass : "menuBarBtnWithdrawal",
	  			
	  			enable : "1",
	  			triggleFunction : "triggleThisButton",

	  			functions :
	  			[
	  				{
	  					name : "CleanUpDSCache",
	  					params : ""
	  				},									
	  				{
						name : "changeTheme",
						params : 
						{
							newTheme: "vtmTheme"
						}
					},									
	  				{
						name : "hideSelectedAcct",
						params : 
						{
							
						}
					},
					{
						name : "processATMCMachineData",
						params : {}
					}
	  			]
	  		},
	  		{ 
	  			type:"VTMTESTINPUT",
	  			
	  			ID:"VTMTESTINPUT", 
	  			name:"",
	  			label1:"", 
	  			label2:"",
	  			
	  			naviType: "naviNoHeaderNoMenuBar",
	  			navigate:"inputScreenState" ,
	  			nextScreenID : "INPUT_VTMESB_ACCOUNT_OPENING_DETAILS_NEW" ,

	  			localClass : "menuBarBtnWithdrawal",
	  			
	  			enable : "1",
	  			triggleFunction : "triggleThisButton",

	  			functions :
	  			[
	  				{
	  					name : "CleanUpDSCache",
	  					params : ""
	  				},									
	  				{
						name : "changeTheme",
						params : 
						{
							newTheme: "vtmTheme"
						}
					}
	  			]
	  		},
	  		{ 
	  			type:"VTMTEST",
	  			
	  			ID:"VTMTEST", 
	  			name:"",
	  			label1:"", 
	  			label2:"",
	  			
	  			naviType: "naviNoHeaderNoMenuBar",
	  			navigate:"checkBoxState" ,
	  			nextScreenID : "VTM_ACCOUNTOPENING_AGREEMENT_CONFIRMATION" ,

	  			
	  			localClass : "menuBarBtnWithdrawal",
	  			
	  			enable : "1",
	  			triggleFunction : "triggleThisButton",

	  			functions :
	  			[
	  				{
	  					name : "CleanUpDSCache",
	  					params : ""
	  				},									
	  				{
						name : "changeTheme",
						params : 
						{
							newTheme: "vtmTheme"
						}
					}
	  			]
	  		},
	  		{ 
	  			type:"VTMSCAN",
	  			
	  			ID:"VTMSCAN", 
	  			name:"",
	  			label1:"", 
	  			label2:"",
	  			
	  			naviType: "naviNoHeaderNoMenuBar",
	  			navigate:"deviceActionProcessState" ,
	  			nextScreenID : "DEVICEACTION_ACCOUNTOPEN_SCANID_FRONT" ,
	  			
	  			localClass : "menuBarBtnWithdrawal",
	  			
	  			enable : "1",
	  			triggleFunction : "triggleThisButton",

	  			functions :
	  			[
	  				{
	  					name : "CleanUpDSCache",
	  					params : ""
	  				},									
	  				{
						name : "changeTheme",
						params : 
						{
							newTheme: "vtmTheme"
						}
					}
	  			]
	  		}
		]
	};
	
	return menuBarData;

});