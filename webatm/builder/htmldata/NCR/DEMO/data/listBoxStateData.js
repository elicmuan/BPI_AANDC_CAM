define([
  "app"
],
function(app) {
	var listBoxStateData = [ 
	{ 	
		template: "listBoxState", 
		ID: "ACCOUNT_SELECTION", 
		name: "ACCOUNT_SELECTION", 
		functions: {
			initFunctions: [ "ITRCancelEvent", "hideExitButton" ],
			naviFunctions: [ "RemoveITRCancelEvent" ],
			cancelFunctions: []
		},
		cancelNavi: {
			naviType: "interNavi",
			nextScreenTemplate:"transactionState" ,
			nextScreenID : "TRANSACTION_REQ_ACOUNTSELECTION",
			setters: { 
				//"@TXID": "NDCTx",
				"@BUFFERB": "E",
				"interNaviData": "NDCTx.Execute"
			}
		},
		timeoutNavi: {
			naviType: "interNavi",
			nextScreenTemplate:"transactionState" ,
			nextScreenID : "TRANSACTION_REQ_ACOUNTSELECTION",
			setters: {
				//"@TXID": "NDCTx",
				"@BUFFERB": "T",
				"interNaviData": "NDCTx.Execute"
			}
		},
		lists: {
			ID : "itrAccountList",
			dataProcessFunction: "ProcessUBPAccountSelection",
			loading: "1",
			enable: "1",
			firstPageMaxItem: "8",
			afterMaxItemToDisplay:"8",
			navigation: {
				naviType: "interNaviShowScreenRemainVariables",
				nextScreenTemplate:"PLEASEWAIT" ,
				nextScreenID : "0"
			},
			list: [],
			oriList: [],
			misc: {
				fdkSplitChar: "\u000F", //SI
				fdkPrefix: "\u001B[27;80m", //ESC[27;80m
				fdkMapping: {
					"A": ["F1"],
					"C": ["L3"],
					"B": ["I3"],
					"D": ["O3"],
					"F": ["OA"],
					"G": ["LA"],
					"H": ["IA"],
					"I": ["FA"]
				}
			}
		},
		labelsOri: [
			{
				text : "",
				L1 : "",
				L1Class : "itrbackground"
			},
			{
				text : "",
				L1 : "Which account would you like to view?",
				L1Class : "selectAccount",
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
		buttons: []
	}
	];
	return listBoxStateData;
});