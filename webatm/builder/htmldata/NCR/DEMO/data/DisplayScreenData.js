 define([
  // Application.
  "app"
],

function(app) {

	var DisplayScreenData =  { 
			"IDLE_MAIN" : 
			{
				naviType : "navi",
				naviTemplate : "idleState",
				naviScreenID : "IDLE_MAIN_REFRESH"
			},
			"ACCOUNT_TYPE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE"
			},
			"RECEIPT_FORCE_PIN" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_FORCE_PIN"
			},
			"CHANGE_PIN_MAG_CHAINING_FAKE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHANGE_PIN_MAG_CHAINING_FAKE"
			},
			"RECEIPT_BANKING_MPIN_MAG_CA" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_BANKING_MPIN_MAG_CA"
			},
			"ACCOUNT_TYPE_FAST_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_FAST_OFFUS"
			},
			"ACTIVATE_ENROLLMENTS_UNABLE_TO_DISPENSE_CASH" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACTIVATE_ENROLLMENTS_UNABLE_TO_DISPENSE_CASH"
			},
			"MAINMENU_EMV_OFFUS_UNABLE_TO_DISPENSE_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_OFFUS_UNABLE_TO_DISPENSE_NOREC"
			},
			"MAINMENU_EMV_OFFUS_UNABLE_TO_DISPENSE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_OFFUS_UNABLE_TO_DISPENSE"
			},
			"MAINMENU_EMV_OFFUS_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_OFFUS_NOREC"
			},
			"ACCOUNT_TYPE_WDL_OFFUS_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_WDL_OFFUS_NOREC"
			},
			"ACCOUNT_TYPE_WDL_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_WDL_OFFUS"
			},
			"ACCOUNT_TYPE_BAL" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_BAL"
			},
			"ACCOUNT_TYPE_BAL_DISP_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_BAL_DISP_NOREC"
			},
			"ACCOUNT_TYPE_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACCOUNT_TYPE_NOREC"
			},
			"PIN_ENTRY":{
				naviType : "navi",
				naviTemplate : "pinEntryState",
				naviScreenID : "PIN_ENTRY"	
			},
			"PIN_ENTRY_CC":{
				naviType : "navi",
				naviTemplate : "pinEntryState",
				naviScreenID : "PIN_ENTRY_CC"	
			},
			"CHANGE_PIN_MAG_1":{
				naviType : "navi",
				naviTemplate : "pinEntryState",
				naviScreenID : "CHANGE_PIN_MAG_1"	
			},
			"CHANGE_PIN_MAG_2":{
				naviType : "navi",
				naviTemplate : "pinEntryState",
				naviScreenID : "CHANGE_PIN_MAG_2"	
			},
			"MAINMENU_MAG_ACTIVATE_ENROLLMENTS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS"
			},
			"MAINMENU_EMV_CREDIT_UNABLE_TO_DISPENSE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_CREDIT_UNABLE_TO_DISPENSE"
			},
			"MAINMENU_MAG_ACTIVATE_ENROLLMENTS_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_MAG_ACTIVATE_ENROLLMENTS_NOREC"
			},
			"RECEIPT_ERR_CC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_ERR_CC"
			},
			"RECEIPT_ACTIVATE_EMV_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_ACTIVATE_EMV_MAG"
			},
			"RECEIPT_EMV_MC_PIN_NOM" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EMV_MC_PIN_NOM"
			},
			"MAINMENU_EMV_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_OFFUS"
			},
			"RECEIPT_EMV_PIN_CHANGE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EMV_PIN_CHANGE"
			},
			"MAINMENU" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU"
			},
			"MAINMENU_EMV_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_CREDIT"
			},
			"MAINMENU_EMV_CREDIT_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_CREDIT_NOREC"
			},
			"MAINMENUMAGSTRIPE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENUMAGSTRIPE"
			},
			"MAINMENUMAGSTRIPE_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENUMAGSTRIPE_NOREC"
			},
			"GET_CARD_RECEIPT" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "GET_CARD_REC"
			},
			"RECEIPT_PRINTING" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_PRINTING"
			},
			"RECEIPT_PRINTING_BAL" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_PRINTING_BAL"
			},
			"INIT_PLEASEWAIT_3" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_3"
			},
			"INIT_PLEASEWAIT_WDL_CC_MAG_MASTER_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_WDL_CC_MAG_MASTER_NOREC"
			},
			"INIT_PLEASEWAIT_WDL_SA_MAG_MASTER_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_WDL_SA_MAG_MASTER_NOREC"
			},
			"INIT_PLEASEWAIT_MC_PIN_NOM_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_MC_PIN_NOM_NOREC"
			},
			"INIT_PLEASEWAIT_CIRRUS_BAL_NOREC_CA" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC_CA"
			},
			"INIT_PLEASEWAIT_CIRRUS_BAL_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_CIRRUS_BAL_NOREC"
			},
			"INIT_PLEASEWAIT_CIRRUS_FAST_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_CIRRUS_FAST_NOREC"
			},
			"INIT_PLEASEWAIT_MC_FAST_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_MC_FAST_NOREC"
			},
			"INIT_PLEASEWAIT_PINCHANGE_MAG_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_PINCHANGE_MAG_NOREC"
			},
			"INIT_PLEASEWAIT_MINI" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_MINI"
			},
			"INIT_PLEASEWAIT_BAL_PREPAID_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_BAL_PREPAID_NOREC"
			},
			"INIT_PLEASEWAIT_FAST_PREPAID_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_FAST_PREPAID_NOREC"
			},
			"INIT_PLEASEWAIT_FAST_SA_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_FAST_SA_NOREC"
			},
			"INIT_PLEASEWAIT_PINCHANGE_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_PINCHANGE_CREDIT"
			},
			"INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_PINCHANGE_CREDIT_NOREC"
			},
			"INIT_PLEASEWAIT_FORCE_PIN_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_FORCE_PIN_NOREC"
			},
			"CHANGE_PIN_RECEIPT_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHANGE_PIN_RECEIPT_MAG"
			},
			"CHANGE_PIN_RECEIPT_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHANGE_PIN_RECEIPT_CREDIT"
			},
			"SURCHARGE_EMV_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "SURCHARGE_EMV_OFFUS"
			},

			"ACTIVATE_DEBIT_EMV_RECEIPT_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACTIVATE_DEBIT_EMV_RECEIPT_MAG"
			},
			"CHANGE_PIN_MAG_CHAINING" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHANGE_PIN_MAG_CHAINING"
			},
			"CHAINING_EMV_PIN_CHANGE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_EMV_PIN_CHANGE"
			},
			"CHAINING_EMV_PIN_NOMINATION" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_EMV_PIN_NOMINATION"
			},
			"CHAINING_EXPRESS_ONLINE_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_EXPRESS_ONLINE_MAG"
			},	
			"CHAINING_EXPRESS_PHONE_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_EXPRESS_PHONE_MAG"
			},	
			"CHAINING_EXPRESS_MOBILE_APP_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_EXPRESS_MOBILE_APP_MAG"
			},	
			"CHAINING_BANKING_ENROLLMENT_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_BANKING_ENROLLMENT_MAG"
			},	
			"CHAINING_BANKING_MPIN_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CHAINING_BANKING_MPIN_MAG"
			},
			"RECEIPT_EMV_MC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EMV_MC"
			},	
			"RECEIPT_EXPRESS_ONLINE_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EXPRESS_ONLINE_MAG"
			},	
			"RECEIPT_EXPRESS_PHONE_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EXPRESS_PHONE_MAG"
			},	
			"RECEIPT_EXPRESS_MOBILE_APP_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_EXPRESS_MOBILE_APP_MAG"
			},	
			"RECEIPT_BANKING_ENROLLMENT_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_BANKING_ENROLLMENT_MAG"
			},	
			"RECEIPT_BANKING_MPIN_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_BANKING_MPIN_MAG"
			},			
			"MAINMENUCIRRUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENUCIRRUS"
			},
			"LIMIT_EXCEED" :{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "LIMIT_EXCEED"
			},
			"INCORRECT_PIN" :{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INCORRECT_PIN"
			},
			"DISPLAY_BALANCE_NO_RECEIPT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPLAY_BALANCE_NO_RECEIPT"
			},
			"DISPLAY_BALANCE_NO_RECEIPT_FAST" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPLAY_BALANCE_NO_RECEIPT_FAST"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_NOREC"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_MAG" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_MAG"
			},

			"ACTIVATE_ENROLLMENTS_UNABLE_MAG_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ACTIVATE_ENROLLMENTS_UNABLE_MAG_NOREC"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_MAG_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_MAG_NOREC"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_CREDIT"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_EMV_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_EMV_CREDIT"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_CASH_EMV_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_CASH_EMV_OFFUS"
			},
			
			"MAINMENU_EMV_OFFUS" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_EMV_OFFUS"
			},

			"MAINMENU_UNABLE_TO_DISPENSE_PREPAID" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_UNABLE_TO_DISPENSE_PREPAID"
			},

			"MAINMENU_CREDIT" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_CREDIT"
			},

			"MAINMENU_PREPAID" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_PREPAID"
			},

			"MAINMENU_PREPAID_UNABLE_TO_DISPENSE_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_PREPAID_UNABLE_TO_DISPENSE_NOREC"
			},

			"MAINMENU_PREPAID_UNABLE_TO_DISPENSE" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_PREPAID_UNABLE_TO_DISPENSE"
			},

			"MAINMENU_PREPAID_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_PREPAID_NOREC"
			},
			"MAINMENU_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_NOREC"
			},
			"INVALIDCARD": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INVALIDCARD"
			},

			"DISPENSER_ERR_CC": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPENSER_ERR_CC"
			},
			"AMOUNT_ENTRY": {
				naviType : "navi",
				naviTemplate : "inputScreenState",
				naviScreenID : "AMOUNT_ENTRY"
			},
			"PLEASEWAIT": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT"
			},
			"RECEIPT_CHECKER": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER"
			},
			"RECEIPT_CHECKER_BAL_MAG": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER_BAL_MAG"
			},
			"RECEIPT_CHECKER_FAST": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER_FAST"
			},
			"RECEIPT_CHECKER_FAST_MAG": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER_FAST_MAG"
			},
			"RECEIPT_CHECKER_FAST_MC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER_FAST_MC"
			},
			"RECEIPT_CHECKER_FAST_MC_NOREC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_CHECKER_FAST_MC_NOREC"
			},
			"PLEASEWAITICC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAITICC"
			},
			"DISPENSER_ERR": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPENSER_ERR"
			},
			"RECEIPT_ERR": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_ERR"
			},
			"RECEIPT_ERR_MAG": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_ERR_MAG"
			},
			"IMPORTANT_REMINDER_ENROLLMENTS": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "IMPORTANT_REMINDER_ENROLLMENTS"
			},
			"RECEIPT_ERR_CIRRUS": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "RECEIPT_ERR_CIRRUS"
			},
			"RECEIPT_PRINTING": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_PRINTING"
			},
			"ACCOUNT_SELECTION" : 
			{
				naviType : "navi",
				naviTemplate : "listBoxState",
				naviScreenID : "ACCOUNT_SELECTION"
			},
			"INIT_PLEASEWAIT": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT"
			},
			"INIT_PLEASEWAIT_BAL": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_BAL"
			},
			"THANK_YOU": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "THANK_YOU"
			},
			"TRANS_CANCELLED": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "TRANS_CANCELLED"
			},	
			"GET_CARD": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "GET_CARD"
			},
			"GETCASH": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "GETCASH"
			},
			"CANCELLED": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "CANCELLED"
			},
			"TAKE_RECEIPT": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "TAKE_RECEIPT"
			},
			"THANKYOU": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "THANKYOU"
			},
			"DISPLAY_BALANCE": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPLAY_BALANCE"
			},
			"DISPLAY_BALANCE_FAST": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "DISPLAY_BALANCE_FAST"
			},
			"BALANCE_INQUIRY_WITHDRAW": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "BALANCE_INQUIRY_WITHDRAW"
			},
			"RECEIPT_PRINTING": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "RECEIPT_PRINTING"
			},
			"ANOTHER_TRANS": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "ANOTHER_TRANS"
			},
			"INIT_PLEASEWAITICC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAITICC"
			},
			"IMPORTANT_REMINDER_ENROLLMENTS_MAG": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "IMPORTANT_REMINDER_ENROLLMENTS_MAG"
			},
			"INIT_PLEASEWAIT_BAL_SA": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_BAL_SA"
			},
			"CANNOT_PROC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "CANNOT_PROC"
			},
			"INIT_PLEASEWAIT_GET_CARD": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_GET_CARD"
			},
			"UNABLE_TO_PRINT": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "UNABLE_TO_PRINT"
			},
			"OOS_SHOW": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "OOS_SHOW"
			},
			"TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_UNABLE_TO_DISPENSE": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "TRANSACTION_NOT_AVAILABLE_NOTIFICATION_PREPAID_UNABLE_TO_DISPENSE"
			},
			"INSERT_CASH": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INSERT_CASH"
			},
			"CARDLESS_DEPOSIT": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CARDLESS_DEPOSIT"
			},
			"ACCOUNT_NUMBER_ENTRY_BPI_ACC_INC": {
				naviType : "navi",
				naviTemplate : "inputScreenState",
				naviScreenID : "ACCOUNT_NUMBER_ENTRY_BPI_ACC_INC"
			},
			"ACCOUNT_NUMBER_ENTRY_BPI_ACC": {
				naviType : "navi",
				naviTemplate : "inputScreenState",
				naviScreenID : "ACCOUNT_NUMBER_ENTRY_BPI_ACC"
			},
			"INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI"
			},
			"CARDLESS_CHAINING": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CARDLESS_CHAINING"
			},
			"INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_NOREC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_NOREC"
			},
			"TIME_OUT": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "TIME_OUT"
			},
			"INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_REC": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_DEPOSIT_CASH_EMV_REC"
			},
			"INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI": {
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_EMV_MC_CARDLESS_BANK_OPTIONS_BPI"
			},
			"MAINMENU_PREPAID_UNABLE_TO_DISPENSE_NOREC_NODEP": {
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "MAINMENU_PREPAID_UNABLE_TO_DISPENSE_NOREC_NODEP"
			},
			"INIT_PLEASEWAIT_EMV_PIN_CHANGE_NOREC" : 
			{
				naviType : "navi",
				naviTemplate : "deviceProcessState",
				naviScreenID : "INIT_PLEASEWAIT_EMV_PIN_CHANGE_NOREC"
			},
			"CARDLESS_CHAINING_2" : 
			{
				naviType : "navi",
				naviTemplate : "menuButtonState",
				naviScreenID : "CARDLESS_CHAINING_2"
			}

	};
	
	return DisplayScreenData;

});