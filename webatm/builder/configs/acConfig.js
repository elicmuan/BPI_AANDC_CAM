var ConfigData = 
{
	assets : "./",
	// assetsLocs : [ "../../../../../../../WEBHTML/ESBATM/html/" , "../../../../../../../WEBHTML/ESBVTM/html/"],
	assetsLocs : [ "../htmldata/NCR/DEMO/" ],
	bank : "AANDC",
	isDebug : "1",

	deviceDefaultTimer : "60",

	interActPath : "../../interact",
	interActProfilePath : "../../../SSDS/InterAct/profiles/",

	acTransactionEndPoint : "123",
	transactionDebug : "1",

	printPDF : "",

	producerConsumer : 
	{
		enable : "1",
		role : "terminal",
		hostEndpoint : "http://localhost:8020"
	},

	nodeJS : 
	{
		coreEndPoint : "http://localhost:8000",
		utilityEndPoint : "http://localhost:8010",
		broadcastEndPoint : "http://localhost:8020"
	},

	// licodeURL : "https://ccvsserver.ncr-sea.com:3004",
	licodeURL : "https://vtmccvst1.esunbank.com.tw:3004",
    disableTimeout : "0",

	browserType : "IE",
	nodeJSEndPoint : "http://localhost:8000/",
	AptraConfigLoc : "D:\\SSDS\\aptraConfig.xml",

	camera :
	{
		customerCamera : "Lenovo",
		secondCamera : "Logitech"
	},

	//registration :
	//{
	//	register : "0",
	//	mode : "TRANSACTREGISTERANDRETRIEVE",
	//	endpoint : "http://localhost:8000"
	//},

	vtmTransaction :
	{
		isDebug : "1"
	},

	bonusPoint :
	{
		imageDir : "http://localhost:8020/viewLocalAssets"
	},
	
	"myPreference": { 
		"favouriteEnable": "0", 
		"receiptOptionenable": "0"
	},

	systemScreen : 
	{
		INIT : "SYSTEMINIT",
		OOS  : ""
	},
	
	timerConfigurationPath: "timerConfig",
	extendTimerEnable: "0"
};
