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
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only"],
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
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1 : "Your transaction is being processed. Please wait",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Your transaction is being processed. Please wait",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
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
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","buildForm2","displayTime_Only"],
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
					nextScreenID : "5" ,
					setters: { interNaviData: "" }
				},
		
				images: [
					{
						ID : "loadingIcon",
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1 : "Receipt is being printed. Please wait.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Ang resibo ay kasalukuyan pini print. Maaring maghintay.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
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
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only"],
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
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1 : "Thank you for banking with us",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Thank you for banking with us",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
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
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only"],
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
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1 : "Transaction cancelled.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Transaction cancelled.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "GET_CARD",
				name: "GET_CARD",
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","hideLanguage","displayTime_Only"],
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
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1 : "Get your card.",
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Get your card.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L4 : "",
				  		L4Class : "",
				  		L5 : "",
				  		L5Class : ""
				  	}
	  			]
			},
			{
				template: "deviceProcessState",
				ID: "CASH_TAKECASH",
				name: "CASH_TAKECASH",
				localClass : "enterPin buttonOverlayLabel redButtonOverlay bgDevProcess",
		  		initFunctions: [ "changeBG","disableTimer","showHeader","hideCurrentTime","displayTime_Only"],
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
	  					src : "projectAssets/BPI/loading.gif",
	  					localClass : "loadingIconSVG"
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
				  		L1Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L2 : "Please get your cash.",
				  		L2Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
				  		L3 : "",
				  		L3Class : "lblMainMenu_Dev white heading1 absolute bgDevProcess",
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
	  					L1 : "Invalid card. Please Take your card",
	  					L1Class : " deviceProcessingCommonLabels white f32",
	  					L2 : "",
	  					L2Class : " deviceProcessingCommonLabels white f32",
	  					L3 : "",
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
	  					L2 : "谢谢",
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
	  					L1 : "Machine currently not available.",
	  					L1Class : " deviceProcessingCommonLabels white f32",
	  					L2 : "谢谢",
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
				images: [ ],
				labelsOri: [
	  				{
	  					text : "",
	  					L1 : "Please take your cash.",
	  					L1Class : " deviceProcessingCommonLabels white f32",
	  					L2 : "谢谢",
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
			/*ONG*/
		    {
		        template: "deviceProcessState",
		        ID: "ERROR",
		        name: "ERROR",
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
		          naviType: "interNavi",
		          navigate: "deviceProcessState",
		          nextScreenID: "DEVICEPROCESS_DISPLAY_CAPTURE_EJECTED_CARD",
		          setters: { interNaviData: "RETAINCARD" }
		        },
		        images: [],
		        labelsOri: [
		  	  		{
		  	  			text : "",
		  	  			L1 : "Sorry, we are unable to process your transaction.",
		  	  			L1Class : " deviceProcessingCommonLabels white f32",
		  	  			L2 : "对不起，我们不能处理您的交易",
		  	  			L2Class : "subtitle bottomMessage ",
		  	  			L3 : "Sorry, transaksimu tidak dapat diproses",
		  	  			L3Class : "subtitle bottomMessage ",
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
			}
			/* END TEMPLATE */
		]
	;

	return deviceProcessData;

});
