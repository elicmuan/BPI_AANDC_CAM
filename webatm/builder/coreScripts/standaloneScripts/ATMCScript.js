function ATMeTX_ATMCStartACTxnEvent(ACTXNPAGE)
{
	SATrace("ATMeTX_ATMCStartACTxnEvent : " + ACTXNPAGE );

	var topMost = true;
	switch(ACTXNPAGE)
	{
		case "IC_DEP_SELF":
		// CashInThisCard
			ACCoreJS.InitOthersACTransact("thisCardDeposit");
			break;
		case "IC_DEP_OTHER":
		// CashInOtherAccount
			ACCoreJS.InitOthersACTransact("otherAccountDeposit");
			break;
		case "IC_DEP_CREDIT":
		// CashInCCPaymentChip
			ACCoreJS.InitOthersACTransact("ccPaymentDepositCHIP");
			break;
		case "IC_GBRU_ONUS":
		// GBRUOnUsChip
			ACCoreJS.InitACTransact("onUsGBRU");
			break;
		case "IC_GBRU_OFFUS":
		// GBRUOffUsChip
			ACCoreJS.InitACTransact("offUsGBRU");
			break;
		case "IC_ATM_ONUS":
		// ATMOnUsChip
			ACCoreJS.InitACTransact("onUsATM");
			break;
		case "IC_ATM_OFFUS":
		// ATMOffUsChip
			ACCoreJS.InitACTransact("offUsATM");
			break;
		case "TK_DEP_CREDIT":
		// CashInCCPaymentCreditCard
			ACCoreJS.InitOthersACTransact("ccPaymentDeposit");
			break;
		case "TK_MENUONUS":
		// ATMCreditCardOnUs.html
			ACCoreJS.InitOthersACTransact("onUsCCATM");
			break;
		case "TK_MENU":
		// ATMCreditCardOffUs
			ACCoreJS.InitOthersACTransact("offUsCCATM");
			break;
		case "TK_INQCCBILL":
		// InquiryCCBillCreditCard
			ACCoreJS.InitOthersACTransact("inquiryCCBillCreditCard");
			break;
		case "PAYBILL_INSERTCHIP":
		// InsertChipCardToPayCCBill
			ACCoreJS.InitOthersACTransact("insertChipCardToPayCCBill");
			break;
		case "CARDLESS_DEP":
		// CardlessDeposit
			ACCoreJS.InitCardlessACTransact("cardlessDeposit");
			break;		
		case "CHECK_FAV":
		// displayFavoriteChecking
			ACCoreJS.InitCardlessACTransact("displayFavoriteChecking");
			break;		
		case "KIOSK_MAINPAGE":
		// KIOSKSS8\KIOSKMainPage.html
			ACCoreJS.idleMenu("IDLEMENU");
			break;		
		case "INTERACT_IDLE":
		// ATM Chrome IDLE
			ACCoreJS.IdleSreen("IDLE");
			break;				
		case "INTERACT_IDLE_END":
		// ATM Chrome IDLE
			ACCoreJS.closeMdl();
			topMost = false;
			break;	
		case "VTM_MAINMENU":
		// ATM Chrome IDLE
			ACCoreJS.InitACTransact("VTMMAINMENU");
			break;	
	}
	
	if(topMost == true)
		EO.extInvoke('containerToTopMost');
}

function ATMeTX_RESATMCFunc(ResStatus, DeviceProcess, FunctionName)
{
	// parent.leftFrame.RESATMCFunc ResStatus, DeviceProcess, FunctionName
	SATrace("ATMeTX_RESATMCFunc : " + ResStatus + " : " + DeviceProcess + " : " + FunctionName);
	RESATMCFunc(ResStatus, DeviceProcess, FunctionName);
}

function ATMeTX_ACMyThemeEvent(ResStatus)
{
	// Do Nothing!
}

function REQFunction(functionName)
{
	try
	{
		EO.extInvoke('REQFunction', [functionName]);
		// ATMeTX.REQFunction(functionName);
	}
	catch(err)
	{
		SATrace("REQFunction ERROR : " + err);
	}
	
}

function ExitACMainMenu(URL)
{
	try
	{
		// switch(URL)
		// {
		// 	case "http://THANKS":
		// 		// ATMeTX.AC_TransCompleted("THANKS");
		// 		EO.extInvoke('ExitACMainMenu', ['THANKS']);
		// 		break;
		// 	case "http://CHAININGTXN":
		// 		// ATMeTX.AC_TransCompleted("CHAININGTXN");
		// 		EO.extInvoke('ExitACMainMenu', ['CHAININGTXN']);
		// 		break;
		// 	case "http://UPDATECHIPPIN":
		// 		// ATMeTX.AC_TransCompleted("UPDATECHIPPIN");
		// 		EO.extInvoke('ExitACMainMenu', ['UPDATECHIPPIN']);

		// 		break;
		// 	case "http://UPDATETRACKPIN":
		// 		// ATMeTX.AC_TransCompleted("UPDATETRACKPIN");
		// 		EO.extInvoke('ExitACMainMenu', ['UPDATETRACKPIN']);

		// 		break;
		// 	case "http://CARDACTIVATE":
		// 		// ATMeTX.AC_TransCompleted("CARDACTIVATE");
		// 		EO.extInvoke('ExitACMainMenu', ['CARDACTIVATE']);
		// 		break;
		// 	case "http://CHECKINTCARD":
		// 		// ATMeTX.AC_TransCompleted("CHECKINTCARD");
		// 		EO.extInvoke('ExitACMainMenu', ['CHECKINTCARD']);
		// 		break;
		// 	case "http://CREDIT_UPDATETRACKPIN":
		// 		// ATMeTX.AC_TransCompleted("CREDIT_UPDATETRACKPIN");
		// 		EO.extInvoke('ExitACMainMenu', ['CREDIT_UPDATETRACKPIN']);
		// 		break;
		// 	case "http://START_CREDIT":
		// 		// ATMeTX.AC_TransCompleted("START_CREDIT");
		// 		EO.extInvoke('ExitACMainMenu', ['START_CREDIT']);
		// 		break;
		// 	case "http://INSERTCHIPTOPAYBILL":
		// 		// ATMeTX.AC_TransCompleted("INSERTCHIPTOPAYBILL");
		// 		EO.extInvoke('ExitACMainMenu', ['INSERTCHIPTOPAYBILL']);
		// 		break;
			
		// 	//For Wincor
		// 	case "http://INQ":
		// 		// ATMeTX.AC_TransCompleted("http://INQ");
		// 		EO.extInvoke('ExitACMainMenu', ['INQ']);
		// 		break;	
		// 	case "http://CWD":
		// 		EO.extInvoke('ExitACMainMenu', ['CWD']);
		// 		break;
		// 	case "http://QNM":
		// 		EO.extInvoke('ExitACMainMenu', ['QNM']);
		// 		break;
		// 	case "http://TFR":
		// 		EO.extInvoke('ExitACMainMenu', ['TFR']);
		// 		break;
		// 	case "http://FEE":
		// 		EO.extInvoke('ExitACMainMenu', ['FEE']);
		// 		break;
		// 	case "http://PAY":
		// 		EO.extInvoke('ExitACMainMenu', ['PAY']);
		// 		break;
		// 	case "http://SAC":
		// 		EO.extInvoke('ExitACMainMenu', ['SAC']);
		// 		break;
		// 	case "http://LAB":
		// 		EO.extInvoke('ExitACMainMenu', ['LAB']);
		// 		break;
		// 	case "http://INL":
		// 		EO.extInvoke('ExitACMainMenu', ['INL']);
		// 		break;
		// 	case "http://INT":
		// 		EO.extInvoke('ExitACMainMenu', ['INT']);
		// 		break;
		// 	case "http://PIN":
		// 		EO.extInvoke('ExitACMainMenu', ['PIN']);
		// 		break;
		// 	case "http://DEP":
		// 		EO.extInvoke('ExitACMainMenu', ['DEP']);
		// 		break;
		// 	case "http://DP2":
		// 		EO.extInvoke('ExitACMainMenu', ['DP2']);
		// 		break;
		// 	case "http://OPC":
		// 		EO.extInvoke('ExitACMainMenu', ['OPC']);
		// 		break;
		// 	case "http://CFA":
		// 		EO.extInvoke('ExitACMainMenu', ['CFA']);
		// 		break;
		// 	case "http://CUP":
		// 		EO.extInvoke('ExitACMainMenu', ['CUP']);
		// 		break;
		// 	case "http://CUI":
		// 		EO.extInvoke('ExitACMainMenu', ['CUI']);
		// 		break;
		// 	case "http://CW2":
		// 		EO.extInvoke('ExitACMainMenu', ['CW2']);
		// 		break;
		// 	case "http://IN2":
		// 		EO.extInvoke('ExitACMainMenu', ['IN2']);
		// 		break;
		// 	case "http://PN2":
		// 		EO.extInvoke('ExitACMainMenu', ['PN2']);
		// 		break;
		// 	case "http://OTP":
		// 		EO.extInvoke('ExitACMainMenu', ['OTP']);
		// 		break;
		// 	case "http://CBI":
		// 		EO.extInvoke('ExitACMainMenu', ['CBI']);
		// 		break;
		// 	case "http://CB2":
		// 		EO.extInvoke('ExitACMainMenu', ['CB2']);
		// 		break;
		// 	case "http://RTQ":
		// 		EO.extInvoke('ExitACMainMenu', ['RTQ']);
		// 		break;
		// 	case "http://FWD":
		// 		EO.extInvoke('ExitACMainMenu', ['FWD']);
		// 		break;
		// 	case "http://CRW":
		// 		EO.extInvoke('ExitACMainMenu', ['CRW']);
		// 		break;
		// 	case "http://CONTTRX":
		// 		EO.extInvoke('ExitACMainMenu', ['CONTTRX']);
		// 		break;
		// 	case "http://EJECTCARD":
		// 		EO.extInvoke('ExitACMainMenu', ['EJECTCARD']);
		// 		break;
		// }
		EO.extInvoke('ExitACMainMenu', [URL]);
		EO.extInvoke('containerToMinimized');
	}
	catch(err)
	{
		SATrace("ExitACMainMenu ERROR : " + err);
	}
	
}

function IsNoteTypesActive(val)
{
	try
	{
		return EO.extInvoke('IsNoteTypesActive', [val]);
		// return ATMeTX.IsNoteTypesActive(val);
	}
	catch(err)
	{
		SATrace("IsNoteTypesActive ERROR : " + err);
		return "";
	}
	
}

function GetLatestNotesEntered(val)
{
	try
	{
		return EO.extInvoke('GetLatestNotesEntered', [val]);
		// return ATMeTX.GetLatestNotesEntered(val);
	}
	catch(err)
	{
		SATrace("GetLatestNotesEntered ERROR : " + err);
		return "";
	}
	
}

function GetNotesEntered(val)
{
	try
	{
		return EO.extInvoke('GetNotesEntered', [val]);
		// return ATMeTX.GetNotesEntered(val);
	}
	catch(err)
	{
		SATrace("GetNotesEntered ERROR : " + err);
		return "";
	}
	
}

function IBMtoBig5(val)
{
	try
	{
		return EO.extInvoke('IBMtoBig5', [val]);
		// return ATMeTX.TranslateIBMChinese(val);
	}
	catch(err)
	{
		SATrace("IBMtoBig5 ERROR : " + err);
		return "";
	}
	
}