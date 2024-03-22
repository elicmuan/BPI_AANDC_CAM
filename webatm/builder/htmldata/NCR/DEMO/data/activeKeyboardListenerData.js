define([ "app" ],
function(app) {
	var activeKeyboardListenerData = [
		{

			labels :
  			[
  				{
  					text : "",
  					L1 : "You have not responded in the allowed time.",
  					L1Class : "activeListnerLabel2",
  					L2 : "You have not responded in the allowed time.",
  					L2Class : "activeListnerLabel2",
  					L3 : "Adakah anda memerlukan lebih banyak masa?",
  					L3Class : "popup_title_1_LangMY SCBMsgTH28",			
  					L4 : "",
  					L4Class : "",
  					L5 : "",
  					L5Class : ""
  				},
  				/*{
  					text : "",
  					L1 : "Press YES to Continue, <br> Press NO to Eject Card.",
  					L1Class : "popup_title_2 SCBMsgTH28",
  					L2 : '按"是"键继续, <br> 按"否"键退卡.',
  					L2Class : "popup_title_2 SCBMsgTH28",
  					L3 : "Tekan YA untuk Teruskan, <br> Tekan NO untuk Keluarkan Kad.",
  					L3Class : "popup_title_2 SCBMsgTH28",				
  					L4 : "",
  					L4Class : "",
  					L5 : "",
  					L5Class : ""
  				},*/
                {
  					text : "",
  					L1 : "",
  					L1Class : "iconTimeOut",
  					L2 : "",
  					L2Class : "iconTimeOut",
  					L3 : "",
  					L3Class : "iconTimeOut", 					
  					L4 : "",
  					L4Class : "",
  					L5 : "",
  					L5Class : ""
  				},
{
  					text : "",
  					L1 : "",
  					L1Class : "iconTimeOut",
  					L2 : "",
  					L2Class : "iconTimeOut",
  					L3 : "",
  					L3Class : "iconTimeOut", 					
  					L4 : "",
  					L4Class : "",
  					L5 : "",
  					L5Class : ""
  				},
{
  					text : "",
  					L1 : "",
  					L1Class : "hideLanguageBox",
  					L2 : "",
  					L2Class : "hideLanguageBox",
  					L3 : "",
  					L3Class : "iconTimeOut", 					
  					L4 : "",
  					L4Class : "",
  					L5 : "",
  					L5Class : ""
  				}
  			],

  			buttons :
  			[
  				{
  					ID : "buttonFontSizeRegular",
  					naviType: "YES",
					nextScreenTemplate:"transactionState" ,
					nextScreenID : "TRX_REQ_CASHWITHDRAWAL" ,

				 	labels :
		  			[
		  				{
			  				text 		: "",
		  					L1 			: "PRESS TO CONTINUE",
		  					L1Class 	: "activeTimerBtnYes activeTimerBtnLbl2",
		  					L2 			: "PRESS TO CONTINUE",
		  					L2Class 	: "activeTimerBtnYes activeTimerBtnLbl2",
		  					L3 			: "YA",
		  					L3Class 	: "SCBMsgTH25 buttoncolor timeoutbuttonlabel",					
		  					L4 			: "",
		  					L4Class 	: "",
		  					L5 			: "",
		  					L5Class 	: ""
		  				}	
		  			],

					setters :
					{
					 	
					},

					localClass: "popup_button_left"
  				},
  				{
  					ID : "buttonFontSizeLarge",
  					naviType: "NO",
					nextScreenTemplate:"transactionState" ,
					nextScreenID : "TRX_REQ_CASHWITHDRAWAL" ,

					 	labels :
			  			[
			  				{
				  				text : "",
			  					L1 : "&nbsp;PRESS TO CANCEL",
			  					L1Class : "activeTimerBtnNo activeTimerBtnLbl2",
			  					L2 : "&nbsp;PRESS TO CANCEL",
			  					L2Class : "activeTimerBtnNo activeTimerBtnLbl2",
			  					L3 : "TIDAK",
			  					L3Class : "SCBMsgTH25 buttoncolor timeoutbuttonlabel", 					
			  					L4 : "",
			  					L4Class : "",
			  					L5 : "",
			  					L5Class : ""
			  				}
			  			],

					setters :
					{
					 	
					},
                    

					localClass: "popup_button_right"
  				}
  			]
		}
	];	
	return activeKeyboardListenerData;
});

