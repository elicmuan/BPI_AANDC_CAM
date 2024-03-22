define([], function(){
	var ACVar = {
		//Idle Type
		idleLoop: "idleLoop",
		campaign: "campaign",
		bannerCampaign: "bannerCampaign",
		mainMenuCampaign : "mainMenuCampaign",
		staticPleaseWait : "staticPleaseWait",
		
		//XML Type
		XMLCampaigninfo: "campaigninfo",
		XMLCampaignTemplate: "campaigntemplate",
		XMLcampaign2ndPageTimeOutTemplate: "campaign2ndPageTimeOutTemplate",
		XMLcampaignWithCouponTemplate: "campaignWithCouponTemplate",
		XMLIdleProfileTemplate: "idleprofiletemplate",
		XMLTerminalProfile: "terminalprofile",
		XMLAptraConnConfig: "aptraconnconfig",
		
		// Testing //
		XMLCampaignOnlySMSEmailTemplate: "campaignOnlySMSEmailTemplate",
		XMLInteractiveBannerCampaign: "interactiveBannerCampaign",
		
		//CDI 
		CDI_KEYBOARDTIMEOUT: "3126",
		CDI_SCREENTIMEOUT: "3127",
		CDI_SCREENOFFSET: "1249",
		CDI_CURRENT_SCREEN_NO: "1248",
		CDI_TRACK2: "2043",
		UCDI_InterActInAction: "InterActInAction",
		UCDI_InterActAnswer: "InterActAnswer",
		UCDI_InterIsShow: "InterActIsShow",
		CDI_COMMUCATIONTIMEOUT: "3129",
		CDI_OPCODE: "2014",
		CDI_LANGUAGE_SETTING: "ssmglanguagesetting",
		CDI_BUFFER_B: "2003",
		CDI_BUFFER_C: "2004",
		
		// Testing //
		CDI_INTERACTCUSTOMERINFO: "InterActCustomerInfo",
		
		inputTypeNum: "N",
		inputTypeString: "S",
		inputTypeAlphaNumberic: "AN",
		
		//action
		UNDECIDED: "UNDECIDED",
		SEEN: "SEEN",
		LATER: "LATER",
		
		//Button type
		btnLater: "LATER",
		btnSubmit: "SUBMIT",
		btnNext: "NEXT",
		btnConfirm: "CONFIRM",
		btnYes: "YES",
		btnNo: "NO",
		btnTab: "TAB",
		
		appWidth: 800,
		appHeight: 600,
		
		assestsLoc: "assets\\",
		runningStimulateMode: 1,
		previewMode: 1,
				
		aptraButton: "BUTTON",
		aptraBackgroundImage: "BACKGROUND",
		aptraText: "TEXT",
		aptraTextInput: "TEXTINPUT",
		aptraTextInputGroup: "TEXTINPUTGROUP",

		BANKCODE_CIMBMY : "CIMBMY"
	}

	return ACVar;
});
