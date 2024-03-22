/**
 *   DO NOT CHANGE THE NAME OF THE TIMER KEY
 *   IF CANNOT FIND THEN WILL LOOK FOR DEFAULT
 *   IF CANNOT FIND DEFAULT THEN WILL GET FROM COMINT 3126 except few templates (device process & transaction)
 *   tick - AANDC is 0.8, Activate NDC is 0.8 while others is 1 (if not found then will set as 1)
 **/
var TimerConfigData = {
	"tick"									: "1",
	"default"								: "60",
	"cashAmtSelectionState"					: "40",
	"cashInCounterSummaryState"				: "40",
	"checkBoxState"							: "40",
	"deviceActionProcessState"				: "40",
	"fdkSelectionState"						: "40",
	"inputScreenState"						: "40",
	"listBoxState"							: "40",
	"menuButtonState"						: "40",
	"myFavoriteState"						: "40",
    "pinEntryState"							: "40",
    "signaturePadState"						: "40",
    "sixBtnMenuState"						: "40",
    "summaryScreenState"					: "40",
    "transactionSummaryScreenState"			: "40",
	"twoBtnMenuState"						: "40"
}