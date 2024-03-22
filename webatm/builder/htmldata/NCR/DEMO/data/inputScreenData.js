define([
  "app"
],
function(app) {
	var inputScreenData =  [ 

	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_DIRECT_ACC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_DIRECT_ACC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "string",
				 //formatFunction : "number",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",
					setters :
					{"#2003" : "{TXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount DaxMedium ",
						L2 : "Ilagay ang account number na gusto mong deposituhan.",
						L2Class : "lblEnterAmount DaxMedium ",
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
						L1Class : "red-warning-ico",
						L2 : "",
						L2Class : "red-warning-ico",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},						
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
   				{
					
  					ID : "btnConfirm_Deposit",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIDirectAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables",												nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "btnCancel_Account"
  				} 
 			]
	},
	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_FAMILY_BANK_ACC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_FAMILY_BANK_ACC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "string",
				 //formatFunction : "number",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",
					setters :
					{"#2003" : "{TXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount DaxMedium ",
						L2 : "Ilagay ang account number na gusto mong deposituhan.",
						L2Class : "lblEnterAmount DaxMedium ",
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
						L1Class : "red-warning-ico",
						L2 : "",
						L2Class : "red-warning-ico",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},					
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
 				{
					
  					ID : "btnConfirm_Deposit",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIFamilyAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
	  				nextScreenTemplate: "PLEASEWAIT" ,
	  				nextScreenID: "1",

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ 
						interNaviData: "closeSession"		
					},

					localClass: "btnCancel_Account"
  				}
  			]
	},
	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_ACC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_ACC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "string",
				 //formatFunction : "number",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI",
					setters :
					{"#2003" : "{TXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount DaxMedium ",
						L2 : "Ilagay ang account number na gusto mong deposituhan.",
						L2Class : "lblEnterAmount DaxMedium ",
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
						L1Class : "red-warning-ico",
						L2 : "",
						L2Class : "red-warning-ico",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},					
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "btnConfirm_Deposit",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "btnCancel_Account"
  				}
  			]
	},

	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_ACC_INC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_ACC_INC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime","setBGDefault"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "string",
				 //formatFunction : "number",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "0" ,
					setters :
					{"#2003" : "{TXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Invalid account number.</br>Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount-INC DaxMedium ",
						L2 : "Invalid account number.</br>Ilagay ang account number na gusto mong deposituhan.",
						L2Class : "lblEnterAmount-INC DaxMedium ",
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
						L1Class : "show-red-warning-ico2",
						L2 : "",
						L2Class : "show-red-warning-ico2",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},				
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "btnConfirm_Deposit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "0" ,

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "btnCancel_Account"
  				}
  			]
	},

/*
	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_FAMILY_BANK_ACC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_FAMILY_BANK_ACC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime","hideCalculator"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount DaxMedium ",
						L2 : "Enter the account number you would like to deposit to.",
						L2Class : "lblEnterAmount DaxMedium ",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "btnConfirm_Deposit",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIFAMILY",

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIFamilyAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
	  				nextScreenTemplate: "PLEASEWAIT" ,
	  				nextScreenID: "1",

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ 
						interNaviData: "closeSession"		
					},

					localClass: "btnCancel_Account"
  				}
  			]
	},

	{ 	
		template:"inputScreenState", 
		ID:"ACCOUNT_NUMBER_ENTRY_BPI_DIRECT_ACC",
			name:"ACCOUNT_NUMBER_ENTRY_BPI_DIRECT_ACC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime","hideCalculator"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "depositAmountInput",
  			inputs :[
			{
				 ID: "depositAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "standardString",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT"],
				 localClass : "depositAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "10"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter the account number you would like to deposit to.",
						L1Class : "lblEnterAmount DaxMedium ",
						L2 : "Enter the account number you would like to deposit to.",
						L2Class : "lblEnterAmount DaxMedium ",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
			  		L1 : "",
			  		L1Class : "lblDepositAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblDepositAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblDepositAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "btnConfirm_Deposit",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPIDIRECT",

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Confirm",
			  					L1Class : "txtsubmit",
			  					L2 : "Confirm",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},  				{
					
  					ID : "btnCancel_BPIDirectAccount",
	  				naviType: "exitAANDCShowScreenRemainVariables",												nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,

	  				buttonType : "",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Cancel",
			  					L1Class : "txtsubmit",
			  					L2 : "Cancel",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "btnCancel_Account"
  				}
  			]
	},
*/	
	{ 	
		template:"inputScreenState", 
		ID:"FASTCASH_OTHER_AMT",
			name:"FASTCASH_OTHER_AMT",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
  					ID : "buttonBalanceInquiry",
					naviType: "navi",
					nextScreenTemplate:"deviceProcessState",
					nextScreenID: "INIT_PLEASEWAIT_BAL_SA",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"

  				},
  				{
  					ID : "buttonPrepaid",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col2 shortLabel"

  				},
  				{
  					ID : "buttonPayBill",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "payBillsButton mainMenuButton grey absolute f20 row2 col1 shortLabel"

  				},
  				{
  					ID : "buttonCustomer",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "MAINMENU_EMV_PIN_SERVICES",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "pinServices mainMenuButton grey absolute f20 row1 col3"

  				},
				{
  					ID : "enrollmentsButton",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "MAINMENU_EMV_ACTIVATE_ENROLLMENTS",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "enrollmentsButton mainMenuButton grey absolute f20 row1 col1"

  				},
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
		template:"inputScreenState", 
		ID:"FASTCASH_OTHER_AMT_PREPAID_NOREC",
			name:"FASTCASH_OTHER_AMT_PREPAID_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID: "INIT_PLEASEWAIT_BAL_SA",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"

	  				},				
					{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col2  buttonDesign"
	  				},
	  				
					{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_TRANS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
					{
	  					ID : "buttonMiniStatement",
						naviType: "navi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID: "INIT_PLEASEWAIT_MINI",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "miniStatement mainMenuButton  absolute f20  row1 col3  buttonDesign"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_TRANS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btntransfer mainMenuButton grey absolute f20 row2 col2 shortLabel"
	  				},


				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
		template:"inputScreenState", 
		ID:"FASTCASH_OTHER_AMT_PREPAID",
			name:"FASTCASH_OTHER_AMT_PREPAID",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_PREP",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_PREP",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID: "INIT_PLEASEWAIT_BAL_SA",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"

	  				},				
					{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col2  buttonDesign"
	  				},
	  				
					{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_TRANS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
					{
	  					ID : "buttonMiniStatement",
						naviType: "navi",
						nextScreenTemplate:"deviceProcessState",
						nextScreenID: "INIT_PLEASEWAIT_MINI",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "miniStatement mainMenuButton  absolute f20  row1 col3  buttonDesign"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_TRANS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btntransfer mainMenuButton grey absolute f20 row2 col2 shortLabel"
	  				},


				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
		template:"inputScreenState", 
		ID:"FASTCASH_OTHER_AMT_PREPAID_OPTIONS",
			name:"FASTCASH_OTHER_AMT_PREPAID_OPTIONS",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT",
				nextScreenID: "3",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
	  				nextScreenTemplate: "PLEASEWAIT" ,
	  				nextScreenID: "3",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
	  					ID : "buttonMiniStatement",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "8",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "miniStatement mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btntransfer mainMenuButton grey absolute f20 row1 col2 shortLabel"
	  				},
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_SERVICES_OPTIONS",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_SERVICES_OPTIONS",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
		template:"inputScreenState", 
		ID:"FASTCASH_OTHER_AMT_PREPAID_OPTIONS_NOREC",
			name:"FASTCASH_OTHER_AMT_PREPAID_OPTIONS_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT",
				nextScreenID: "3",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "exitAANDCShowScreenRemainVariables", 
	  				nextScreenTemplate: "PLEASEWAIT" ,
	  				nextScreenID: "3",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
	  					ID : "buttonMiniStatement",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "8",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "miniStatement mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btntransfer mainMenuButton grey absolute f20 row1 col2 shortLabel"
	  				},
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_SERVICES_OPTIONS_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_SERVICES_OPTIONS_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_PREPAID_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  			],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},

		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_PINSERVICES",
  			name:"FASTCASH_OTHER_AMT_EMV_PINSERVICES",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonPinNomination",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "4",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "PinNominationButton mainMenuButton grey absolute f20 row1 col2 "
	  				},				
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_PIN_SERVICES",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},

		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_PINSERVICES_NOREC",
  			name:"FASTCASH_OTHER_AMT_EMV_PINSERVICES_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonPinNomination",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "4",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "PinNominationButton mainMenuButton grey absolute f20 row1 col2 "
	  				},				
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_PIN_SERVICES_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},	
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_ACTIVATE_ENROLLMENTS",
			name:"FASTCASH_OTHER_AMT",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Activate Enrollments",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Activate Enrollments",
			  		L2Class : "lblSelect black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
  					ID : "buttonExpressOnline",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_ONLINE",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressOnlineButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
  				},

  				{
  					ID : "buttonExpressPhone",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_PHONE",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressPhoneButton mainMenuButton grey absolute f20 row1 col2 "
  				},



				{
  					ID : "buttonSimBankingEnrollment",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_BANKING_ENROLLMENT",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "SIMBankingEnrollmentButton mainMenuButton grey absolute f20 row2 col1"
  				},

  				{
  					ID : "buttonSimBankingMPinResend",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_BANKING_MPIN",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "SIMBankingMPINResendButton mainMenuButton grey absolute f20 row2 col2"
  				},
  				{
  					ID : "buttonExpressMobileApp",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_MOBILE_APP",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressMobileAppButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
  				},

				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_ACTIVATE_ENROLLMENTS",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},	
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_ACTIVATE_ENROLLMENTS_NOREC",
			name:"FASTCASH_OTHER_AMT_EMV_ACTIVATE_ENROLLMENTS_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Activate Enrollments",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Activate Enrollments",
			  		L2Class : "lblSelect black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "deviceProcessState" ,
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
  					ID : "buttonExpressOnline",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_ONLINE",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressOnlineButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
  				},

  				{
  					ID : "buttonExpressPhone",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_PHONE",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressPhoneButton mainMenuButton grey absolute f20 row1 col2 "
  				},



				{
  					ID : "buttonSimBankingEnrollment",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_BANKING_ENROLLMENT",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "SIMBankingEnrollmentButton mainMenuButton grey absolute f20 row2 col1"
  				},

  				{
  					ID : "buttonSimBankingMPinResend",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_BANKING_MPIN",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "SIMBankingMPINResendButton mainMenuButton grey absolute f20 row2 col2"
  				},
  				{
  					ID : "buttonExpressMobileApp",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "RECEIPT_EMV_EXPRESS_MOBILE_APP",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "ExpressMobileAppButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
  				},

				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_ACTIVATE_ENROLLMENTS_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},			
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_NOREC",
  			name:"FASTCASH_OTHER_AMT_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
					nextScreenTemplate: "menuButtonState",
	  				nextScreenID: "INIT_PLEASEWAIT_WTRWL_MC_OTHERAMT_NOREC",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
  					ID : "buttonBalanceInquiry",
					naviType: "navi",
					nextScreenTemplate:"deviceProcessState",
					nextScreenID: "INIT_PLEASEWAIT_BAL_SA",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"

  				},
  				{
  					ID : "buttonPrepaid",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col2 shortLabel"

  				},
  				{
  					ID : "buttonPayBill",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "payBillsButton mainMenuButton grey absolute f20 row2 col1 shortLabel"

  				},
  				{
  					ID : "buttonCustomer",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "MAINMENU_EMV_PIN_SERVICES",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "pinServices mainMenuButton grey absolute f20 row1 col3"

  				},
				{
  					ID : "enrollmentsButton",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "MAINMENU_EMV_ACTIVATE_ENROLLMENTS",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "enrollmentsButton mainMenuButton grey absolute f20 row1 col1"

  				},
				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_CREDIT",
  			name:"FASTCASH_OTHER_AMT_EMV_CREDIT",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_SA",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "menuButtonState" ,
	  				nextScreenID: "ACCOUNT_TYPE",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				/*{
  					ID : "buttonBalanceInquiry",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_BAL",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
  				},*/
				{
	  					ID : "buttonCustomer",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton grey absolute f20 row1 col1"
	  				},  				
  				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_EMV_CREDIT_NOREC",
  			name:"FASTCASH_OTHER_AMT_EMV_CREDIT_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_SA_NOREC",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "menuButtonState" ,
	  				nextScreenID: "ACCOUNT_TYPE",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				/*{
  					ID : "buttonBalanceInquiry",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_BAL",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
  				},*/
				{
	  					ID : "buttonCustomer",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton grey absolute f20 row1 col1"
	  			},   				
  				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_EMV_CREDIT_NOREC",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},

		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAINMENU_CREDIT",
  			name:"FASTCASH_OTHER_AMT_MAINMENU_CREDIT",
  			localClass : "cashWithdrawalAmountInput1",
	  		functions: {
	  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
	  		},
			 images: [
                {
					ID : "amountLines",
					src : "projectAssets/BPI/amount lines.png",
  					localClass : "amountLines"
                }
            ],
  			firstInputId : "withdrawalAmountInput",
  			inputs :[
			{
				 ID: "withdrawalAmountInput", 
				 inputType: "number",
				 //formatFunction : "decimalCurrency",
				 formatFunction : "decimalCurrency",
				 initVal : " ",
				 oriVal : "",
				 validateFunction : "validateFake",
				 softkeyboardEnable : "0",
				 softkeyboardType : "N",
				 defaultText: "",
				 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
				 localClass : "withdrawalAmountInput",
				 displaySetters: [ ],
				 validation: [ ],
				 errLabels: [ 
				  {
				   ID : "errorLabel1",
				   text : "Enter an amount/ Sila masukkan nilai",
				   L1Class : "errorMes small",
				   L2Class : "errorMes small",
				   L3Class : "errorMes small",       
				   L4Class : "errorMes",
				   L5Class : "errorMes",
				   errDisplayKey : "value1"
				  }
				 ],
				 errLabelValue: {
				  "1": {
				   "value1": {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   },
				   "default":  {
					L1 : "Sila masukkan nilai anda",
					L2 : "Enter an amount",
					L3 : "Chinese",   
					L4 : "",
					L5 : ""
				   }
				  }
				 }, 
				 maxChar : "6"
				}
  			],	  			
  			navigation : 
  			{
				naviType: "navi",
				nextScreenTemplate:"deviceProcessState",
				nextScreenID: "INIT_PLEASEWAIT_WTRWL_SA",
					setters :
					{"#2000" : "{AANDCTXAMT}"}
  			}, 			
  			cancelNavi:  {
				naviType: "exitAANDCShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "1" ,
				setters : {}
  			},
  			labelsOri: [
				{
						text : "",
						L1 : "Enter Amount",
						L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
						L2 : "Maglagay ng Halaga",
						L2Class : "lblEnterAmount DaxMedium lblcentered",
						L3 : "",
						L3Class : "",
						L4 : "",
						L4Class : "",
						L5 : "",
						L5Class : ""
				},
				{
						text : "",
						L1 : "{greetings}",
						L1Class : "lblGreetings DaxMedium",
						L2 : "{greetings_tagalog}",
						L2Class : "lblGreetings DaxMedium",
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
  					L1 : "Enter Amount",
  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
  					L2 : "Maglagay ng Halaga",
  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
			  		L1Class : "leftPane",
			  		L2 : "",
			  		L2Class : "leftPane",
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
			  		L1Class : "topPane",
			  		L2 : "",
			  		L2Class : "topPane",
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
			  		L1Class : "lblAmount heading6 absolute ",
			  		L2 : "",
			  		L2Class : "lblAmount heading6 absolute ",
			  		L3 : "",
			  		L3Class : "lblAmount heading6 absolute ",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	},
				{
			  		text : "",
			  		L1 : "Select Transaction",
			  		L1Class : "lblSelect black tab_bg DaxRegular",
			  		L2 : "Pumili ng Transaksyon",
			  		L2Class : "lblSelect2 black tab_bg DaxRegular",
			  		L3 : "",
			  		L3Class : "",
			  		L4 : "",
			  		L4Class : "",
			  		L5 : "",
			  		L5Class : ""
			  	}
  			],
  			buttons: [
  				{
					
  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
	  				naviType: "navi", 
	  				nextScreenTemplate: "menuButtonState" ,
	  				nextScreenID: "ACCOUNT_TYPE",

	  				buttonType : "enterFeature",
					 	labelsOri :
			  			[
			  				{
			  					text : "",
			  					L1 : "Submit",
			  					L1Class : "txtsubmit",
			  					L2 : "Submit",
			  					L2Class : "txtsubmit",
			  					L3 : "",
			  					L3Class : "text-center f22 extraPaddingTop"
			  				}
			  			],

					setters :
					{ },

					localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
  				},
				{
  					ID : "buttonChangePin",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT",
					nextScreenID: "6",
					enable: "1",
					labelsOri: [
			  			{
			  				text : "",
			  				L1 : "",
			  				L1Class : "mainMenu_lbl",
			  				L2 : "",
			  				L2Class : "mainMenu_lbl",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
  				},
  				{
  					ID : "btngray",
					naviType: "",
					nextScreenTemplate:"", 
					nextScreenID : "",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btngrayDisable"
  				},
				{
  					ID : "btnBack",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "Back to Menu",
			  				L1Class : "txtenter_p",
			  				L2 : "Bumalik sa Menu",
			  				L2Class : "txtenter_p",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
  				},
  				{
  					ID : "btnback",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnback margin-top-650"
  				},
  				{
  					ID : "btnhome",
					naviType: "navi",
					nextScreenTemplate:"menuButtonState", 
					nextScreenID : "MAINMENU_CREDIT",
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {},
					localClass: "btnhome_disabled margin-top-650"
  				},
  				{
  					ID : "btnexit",
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					labelsOri: [
						{
			  				text : "",
			 				L1 : "",
			  				L1Class : "",
			  				L2 : "",
			  				L2Class : "",
			  				L3 : "",
			  				L3Class : "",
			  				L4 : "",
			  				L4Class : "",
			  				L5 : "",
			  				L5Class : ""
			  			}
			  		],
					setters: {
						interNaviData: "closeSession"
						},
					localClass: "btnexit margin-top-650"
  				}
  			]
		},

		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG",
  			name:"FASTCASH_OTHER_AMT_MAG",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Entered an invalid amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonCustomer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "MAINMENU_MAG_PINSERVICES",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinServices mainMenuButton grey absolute f20 row1 col3 "
	  				},



					{
	  					ID : "enrollmentsButton",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "MAINMENU_MAG_ACTIVATE_ENROLLMENTS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "enrollmentsButton mainMenuButton grey absolute f20 row1 col1"
	  				},
					
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MAG",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "payBillsButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
	  				
					{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col2 shortLabel"
	  				},


					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG_NOREC",
  			name:"FASTCASH_OTHER_AMT_MAG_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Entered an invalid amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_NOREC",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE_NOREC",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonCustomer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "MAINMENU_MAG_PINSERVICES",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinServices mainMenuButton grey absolute f20 row1 col3 "
	  				},



					{
	  					ID : "enrollmentsButton",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "MAINMENU_MAG_ACTIVATE_ENROLLMENTS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "enrollmentsButton mainMenuButton grey absolute f20 row1 col1"
	  				},
					
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MAG",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "payBillsButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
	  				
					{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_MC",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row2 col2 shortLabel"
	  				},


					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG_PINSERVICES",
  			name:"FASTCASH_OTHER_AMT_MAG_PINSERVICES",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_MAG_PINSERVICES",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "PIN Services",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "PIN Services",
				  		L2Class : "lblSelect black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},


										{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonActivateDebit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "7",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "activateDebit mainMenuButton grey absolute f20 row1 col2 "
	  				},
					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},

					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_PINSERVICES",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_PINSERVICES",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG_PINSERVICES_NOREC",
  			name:"FASTCASH_OTHER_AMT_MAG_PINSERVICES_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_MAG_PINSERVICES_NOREC",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "PIN Services",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "PIN Services",
				  		L2Class : "lblSelect black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE_NOREC",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},


										{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonActivateDebit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "7",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "activateDebit mainMenuButton grey absolute f20 row1 col2 "
	  				},
					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},

					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_PINSERVICES_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_PINSERVICES_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG_ENROLLMENT",
  			name:"FASTCASH_OTHER_AMT_MAG_ENROLLMENT",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_MAG_ENROLLMENTS",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Activate Enrollments",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Activate Enrollments",
				  		L2Class : "lblSelect black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},


					{
	  					ID : "buttonExpressOnline",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressOnlineButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonExpressPhone",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressPhoneButton mainMenuButton grey absolute f20 row1 col2 "
	  				},



					{
	  					ID : "buttonSimBankingEnrollment",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "SIMBankingEnrollmentButton mainMenuButton grey absolute f20 row2 col1"
	  				},

	  				{
	  					ID : "buttonSimBankingMPinResend",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "SIMBankingMPINResendButton mainMenuButton grey absolute f20 row2 col2"
	  				},
	  				{
	  					ID : "buttonExpressMobileApp",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressMobileAppButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
	  				},

					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},

					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
			template:"inputScreenState", 
			ID:"FASTCASH_OTHER_AMT_MAG_ENROLLMENT_NOREC",
  			name:"FASTCASH_OTHER_AMT_MAG_ENROLLMENT_NOREC",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_NOREC_ENROLLMENTS",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Activate Enrollments",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Activate Enrollments",
				  		L2Class : "lblSelect black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE_NOREC",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},


					{
	  					ID : "buttonExpressOnline",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressOnlineButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

	  				{
	  					ID : "buttonExpressPhone",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressPhoneButton mainMenuButton grey absolute f20 row1 col2 "
	  				},



					{
	  					ID : "buttonSimBankingEnrollment",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "SIMBankingEnrollmentButton mainMenuButton grey absolute f20 row2 col1"
	  				},

	  				{
	  					ID : "buttonSimBankingMPinResend",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "SIMBankingMPINResendButton mainMenuButton grey absolute f20 row2 col2"
	  				},
	  				{
	  					ID : "buttonExpressMobileApp",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "0",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "ExpressMobileAppButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
	  				},

					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},

					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENUMAGSTRIPE_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		},
		{ 	
				template:"inputScreenState", 
				ID:"INSUFFICIENT_FUND",
	  			name:"INSUFFICIENT_FUND",
	  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "standardString",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Re-enter amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ulit ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Ipasok ang amount ng transaction",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
	  				{
	  					ID : "buttonTransfer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "transferButton mainMenuButton grey absolute f20 row1 col2"
	  				},
	  				{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "payBillButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
	  				{
	  					ID : "buttonCustomer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "customerButton mainMenuButton grey absolute f20 row2 col2"
	  				},
	  				/*{
	  					ID : "buttonMoreService",
						naviType: "navi",
						nextScreenTemplate:"",
						nextScreenID: "",
						enable: "0",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "grey",
				  				L2 : "",
				  				L2Class : "grey",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: { },
						localClass: "blank mainMenuButton grey bgrounded_bottom absolute f20 row2 col3 longLabel"
	  				},
					*/{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngray margin-top-88"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "3" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
	  			]
			},
			{ 	
				template:"inputScreenState", 
				ID:"INVALID_AMOUNT",
	  			name:"INVALID_AMOUNT",
	  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "standardString",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Re-enter amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ulit ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Ipasok ang amount ng transaction",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
	  				{
	  					ID : "buttonTransfer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "transferButton mainMenuButton grey absolute f20 row1 col2"
	  				},
	  				{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "payBillButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
	  				{
	  					ID : "buttonCustomer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "customerButton mainMenuButton grey absolute f20 row2 col2"
	  				},
	  				/*{
	  					ID : "buttonMoreService",
						naviType: "navi",
						nextScreenTemplate:"",
						nextScreenID: "",
						enable: "0",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "grey",
				  				L2 : "",
				  				L2Class : "grey",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: { },
						localClass: "blank mainMenuButton grey bgrounded_bottom absolute f20 row2 col3 longLabel"
	  				},
					*/{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngray margin-top-88"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "3" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
	  			]
			},
			{ 	
				template:"inputScreenState", 
				ID:"AMOUNT_NOT_DIVISIBLE",
	  			name:"AMOUNT_NOT_DIVISIBLE",
	  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "standardString",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "3" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Re-enter amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ulit ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Ipasok ang amount ng transaction",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
	  				{
	  					ID : "buttonTransfer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "transferButton mainMenuButton grey absolute f20 row1 col2"
	  				},
	  				{
	  					ID : "buttonPrepaid",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "prepaidButton mainMenuButton grey absolute f20 row1 col3 shortLabel"
	  				},
	  				{
	  					ID : "buttonPayBill",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "payBillButton mainMenuButton grey absolute f20 row2 col1 shortLabel"
	  				},
	  				{
	  					ID : "buttonCustomer",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "TRANSACTION_NOT_AVAILABLE_NOTIFICATION",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "customerButton mainMenuButton grey absolute f20 row2 col2"
	  				},
	  				/*{
	  					ID : "buttonMoreService",
						naviType: "navi",
						nextScreenTemplate:"",
						nextScreenID: "",
						enable: "0",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "grey",
				  				L2 : "",
				  				L2Class : "grey",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: { },
						localClass: "blank mainMenuButton grey bgrounded_bottom absolute f20 row2 col3 longLabel"
	  				},
					*/{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngray margin-top-88"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "3" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
	  			]
			},
			{ 	
				template:"inputScreenState", 
				ID:"FASTCASH_OTHER_AMT_OFFUS",
	  			name:"FASTCASH_OTHER_AMT_OFFUS",
	  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_WDL_OFFUS",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE_WDL_OFFUS",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL_OFFUS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
	  			]
			},
			{ 	
				template:"inputScreenState", 
				ID:"FASTCASH_OTHER_AMT_OFFUS_NOREC",
	  			name:"FASTCASH_OTHER_AMT_OFFUS_NOREC",
	  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE_WDL_OFFUS_NOREC",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE_WDL_OFFUS_NOREC",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},
					{
	  					ID : "buttonBalanceInquiry",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState",
						nextScreenID: "ACCOUNT_TYPE_BAL_OFFUS",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "balanceButton mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},
					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},
					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS_NOREC",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
	  			]
			},
			{ 	
			template:"inputScreenState", 
			ID:"FC_OTHER_AMT_EMVOFFUS_PINSERVICES",
  			name:"FC_OTHER_AMT_EMVOFFUS_PINSERVICES",
  			localClass : "cashWithdrawalAmountInput1",
		  		functions: {
		  			initFunctions: [ "showLanguage" ,"showCurrentTime"]
		  		},
				 images: [
                    {
						ID : "amountLines",
						src : "projectAssets/BPI/amount lines.png",
	  					localClass : "amountLines"
                    }
                ],
	  			firstInputId : "withdrawalAmountInput",
	  			inputs :[
				{
					 ID: "withdrawalAmountInput", 
					 inputType: "number",
					 //formatFunction : "decimalCurrency",
					 formatFunction : "decimalCurrency",
					 initVal : " ",
					 oriVal : "",
					 validateFunction : "validateFake",
					 softkeyboardEnable : "0",
					 softkeyboardType : "N",
					 defaultText: "",
					 inputSetters: [ "TXAMT" , "<appendAANDCAmtBuffer>AANDCTXAMT" , "<formatCurrenyAmt>FORMATTXAMT" ],
					 localClass : "withdrawalAmountInput",
					 displaySetters: [ ],
					 validation: [ ],
					 errLabels: [ 
					  {
					   ID : "errorLabel1",
					   text : "Enter an amount/ Sila masukkan nilai",
					   L1Class : "errorMes small",
					   L2Class : "errorMes small",
					   L3Class : "errorMes small",       
					   L4Class : "errorMes",
					   L5Class : "errorMes",
					   errDisplayKey : "value1"
					  }
					 ],
					 errLabelValue: {
					  "1": {
					   "value1": {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   },
					   "default":  {
						L1 : "Sila masukkan nilai anda",
						L2 : "Enter an amount",
						L3 : "Chinese",   
						L4 : "",
						L5 : ""
					   }
					  }
					 }, 
					 maxChar : "6"
					}
	  			],	  			
	  			navigation : 
	  			{
					naviType: "navi",
					nextScreenTemplate:"menuButtonState",
					nextScreenID: "ACCOUNT_TYPE",
  					setters :
  					{"#2000" : "{AANDCTXAMT}"}
	  			}, 			
	  			cancelNavi:  {
					naviType: "exitAANDCShowScreenRemainVariables",
					nextScreenTemplate:"PLEASEWAIT" ,
					nextScreenID : "1" ,
					setters : {}
	  			},
	  			labelsOri: [
					{
							text : "",
							L1 : "Enter Amount",
							L1Class : "lblEnterAmount DaxMedium lblcenteredeng",
							L2 : "Maglagay ng Halaga",
							L2Class : "lblEnterAmount DaxMedium lblcentered",
							L3 : "",
							L3Class : "",
							L4 : "",
							L4Class : "",
							L5 : "",
							L5Class : ""
					},
					{
							text : "",
							L1 : "{greetings}",
							L1Class : "lblGreetings DaxMedium",
							L2 : "{greetings_tagalog}",
							L2Class : "lblGreetings DaxMedium",
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
	  					L1 : "Enter Amount",
	  					L1Class : "lblMainMenu white heading1 absolute DaxMedium",
	  					L2 : "Maglagay ng Halaga",
	  					L2Class : "lblMainMenu white heading1 absolute  DaxMedium",
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
				  		L1Class : "leftPane",
				  		L2 : "",
				  		L2Class : "leftPane",
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
				  		L1Class : "topPane",
				  		L2 : "",
				  		L2Class : "topPane",
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
				  		L1Class : "lblAmount heading6 absolute ",
				  		L2 : "",
				  		L2Class : "lblAmount heading6 absolute ",
				  		L3 : "",
				  		L3Class : "lblAmount heading6 absolute ",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	},
					{
				  		text : "",
				  		L1 : "Select Transaction",
				  		L1Class : "lblSelect black tab_bg DaxRegular",
				  		L2 : "Pumili ng Transaksyon",
				  		L2Class : "lblSelect2 black tab_bg DaxRegular",
				  		L3 : "",
				  		L3Class : "",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			],
	  			buttons: [
	  				{
						
	  					ID : "buttonSubmit_FASTCASH_OTHER_AMT",
		  				naviType: "navi", 
		  				nextScreenTemplate: "menuButtonState" ,
		  				nextScreenID: "ACCOUNT_TYPE",

		  				buttonType : "enterFeature",
						 	labelsOri :
				  			[
				  				{
				  					text : "",
				  					L1 : "Submit",
				  					L1Class : "txtsubmit",
				  					L2 : "Submit",
				  					L2Class : "txtsubmit",
				  					L3 : "",
				  					L3Class : "text-center f22 extraPaddingTop"
				  				}
				  			],

						setters :
						{ },

						localClass: "buttonSubmit_FASTCASH_OTHER_AMT"
	  				},


					{
	  					ID : "buttonChangePin",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT",
						nextScreenID: "6",
						enable: "1",
						labelsOri: [
				  			{
				  				text : "",
				  				L1 : "",
				  				L1Class : "mainMenu_lbl",
				  				L2 : "",
				  				L2Class : "mainMenu_lbl",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "pinChange mainMenuButton  absolute f20  row1 col1  buttonDesign"
	  				},

					{
	  					ID : "btngray",
						naviType: "",
						nextScreenTemplate:"", 
						nextScreenID : "",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btngrayDisable"
	  				},

					{
	  					ID : "btnBack",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMVOFFUS_PINSERVICES",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "Back to Menu",
				  				L1Class : "txtenter_p",
				  				L2 : "Bumalik sa Menu",
				  				L2Class : "txtenter_p",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "withdrawalButton fc5Button FCButton_enter white absolute f22 text-center bg_bottom_left"
	  				},
	  				{
	  					ID : "btnback",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMVOFFUS_PINSERVICES",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnback margin-top-650"
	  				},
	  				{
	  					ID : "btnhome",
						naviType: "navi",
						nextScreenTemplate:"menuButtonState", 
						nextScreenID : "MAINMENU_EMV_OFFUS",
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {},
						localClass: "btnhome_disabled margin-top-650"
	  				},
	  				{
	  					ID : "btnexit",
						naviType: "exitAANDCShowScreenRemainVariables",
						nextScreenTemplate:"PLEASEWAIT" ,
						nextScreenID : "1" ,
						labelsOri: [
							{
				  				text : "",
				 				L1 : "",
				  				L1Class : "",
				  				L2 : "",
				  				L2Class : "",
				  				L3 : "",
				  				L3Class : "",
				  				L4 : "",
				  				L4Class : "",
				  				L5 : "",
				  				L5Class : ""
				  			}
				  		],
						setters: {
							interNaviData: "closeSession"
							},
						localClass: "btnexit margin-top-650"
	  				}
			]
		}

	] ;
	return inputScreenData;
});