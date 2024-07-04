define([
  "app"
],
function(app) {
	var idleStateData = [ 
		{ 	
				template:"idleState", 
				ID:"IDLE_MAIN", 
	  			name:"IDLE_MAIN", 
	  			cancelNavi : {
	  				naviType: "",
  					nextScreenTemplate:"" ,
  					nextScreenID : "" ,
  					setters : { }
	  			},
		  		functions: {
		  			initFunctions: [
						{ name : "resetFlags", params : "" },"HideHeader","hideLanguage","hideCurrentTime","resetLanguage"
					]
		  		},
	  			labelsOri: [ ],
	  			idleType: "runningImage",
	  			idleImages: [
	  				'projectAssets/IDLE/1.png', 
	  				'projectAssets/IDLE/2.png', 
	  				'projectAssets/IDLE/3.png', 
					'projectAssets/IDLE/4.png', 
					'projectAssets/IDLE/5.png', 
	  				'projectAssets/IDLE/6.png'
				],
	  			welcomeText: [ ],
				buttons : [ ],
				images: [],
				localClass: ""
			},
			{ 	
				template:"idleState", 
				ID:"IDLE_MAIN_MORNING", 
	  			name:"IDLE_MAIN_MORNING", 
	  			cancelNavi : {
	  				naviType: "",
  					nextScreenTemplate:"" ,
  					nextScreenID : "" ,
  					setters : { }
	  			},
		  		functions: {
		  			initFunctions: [
						{ name : "resetFlags", params : "" },"HideHeader","hideLanguage","hideCurrentTime"
					]
		  		},
	  			labelsOri: [ ],
	  			idleType: "runningImage",
	  			idleImages: [
	  				'projectAssets/IDLE/S1_Morning.png',
	  				'projectAssets/IDLE/1.jpg', 
	  				'projectAssets/IDLE/S1_Morning.png',
					'projectAssets/IDLE/2.jpg', 
					'projectAssets/IDLE/S1_Morning.png',
	  				'projectAssets/IDLE/3.jpg', 
					'projectAssets/IDLE/S1_Morning.png'
	  				
				],
	  			welcomeText: [ ],
				buttons : [ ],
				images: [],
				localClass: ""
			},
			{ 	
				template:"idleState", 
				ID:"IDLE_MAIN_AFTERNOON", 
	  			name:"IDLE_MAIN_AFTERNOON", 
	  			cancelNavi : {
	  				naviType: "",
  					nextScreenTemplate:"" ,
  					nextScreenID : "" ,
  					setters : { }
	  			},
		  		functions: {
		  			initFunctions: [
						{ name : "resetFlags", params : "" },"HideHeader","hideLanguage","hideCurrentTime"
					]
		  		},
	  			labelsOri: [ ],
	  			idleType: "runningImage",
	  			idleImages: [
	  				'projectAssets/IDLE/S1_Afternoon.png',
	  				'projectAssets/IDLE/1.jpg', 
	  				'projectAssets/IDLE/S1_Afternoon.png',
					'projectAssets/IDLE/2.jpg', 
					'projectAssets/IDLE/S1_Afternoon.png',
	  				'projectAssets/IDLE/3.jpg', 
					'projectAssets/IDLE/S1_Afternoon.png'
				],
	  			welcomeText: [ ],
				buttons : [ ],
				images: [],
				localClass: ""
			},
			{ 	
				template:"idleState", 
				ID:"IDLE_MAIN_EVENING", 
	  			name:"IDLE_MAIN_EVENING", 
	  			cancelNavi : {
	  				naviType: "",
  					nextScreenTemplate:"" ,
  					nextScreenID : "" ,
  					setters : { }
	  			},
		  		functions: {
		  			initFunctions: [
						{ name : "resetFlags", params : "" },"HideHeader","hideLanguage","hideCurrentTime"
					]
		  		},
	  			labelsOri: [ ],
	  			idleType: "runningImage",
	  			idleImages: [
	  				'projectAssets/IDLE/S1_Evening.png',
	  				'projectAssets/IDLE/1.jpg', 
	  				'projectAssets/IDLE/S1_Evening.png',
					'projectAssets/IDLE/2.jpg', 
					'projectAssets/IDLE/S1_Evening.png',
	  				'projectAssets/IDLE/3.jpg', 
					'projectAssets/IDLE/S1_Evening.png'
				],
	  			welcomeText: [ ],
				buttons : [ ],
				images: [],
				localClass: ""
			},
			{ 	
				template:"idleState", 
				ID:"IDLE_MAIN_REFRESH", 
	  			name:"IDLE_MAIN_REFRESH", 
	  			cancelNavi : {
	  				naviType: "",
  					nextScreenTemplate:"" ,
  					nextScreenID : "" ,
  					setters : { }
	  			},
		  		functions: {
		  			initFunctions: [
						{ name : "resetFlags", params : "" },"HideHeader","hideLanguage","hideCurrentTime","resetLanguage","checkTIME",
						{ name : "customIdle", params : { "imagesToReplace": "S1_Evening.jpg", "interval": "300000", "elementBackground": ".idleArea" ,"imagesToReplace2":"S2_Evening.png"} }
					]
		  		},
	  			labelsOri: [ ],
	  			idleType: "",
	  			idleImages: [
					'projectAssets/Custom/Welcome.png',
	  				'projectAssets/Custom/Mabuhay.png',
					'projectAssets/Custom/1.png',
					'projectAssets/Custom/S1_Evening.png',
	  				'projectAssets/Custom/S2_Evening.png',
					'projectAssets/Custom/2.png',
	  				'projectAssets/Custom/S1_Evening.png',
	  				'projectAssets/Custom/S2_Evening.png',
					'projectAssets/Custom/3.png',
	  				'projectAssets/Custom/S1_Evening.png',
	  				'projectAssets/Custom/S2_Evening.png',
					'projectAssets/Custom/4.png',
					'projectAssets/Custom/S1_Evening.png',
	  				'projectAssets/Custom/S2_Evening.png',
					'projectAssets/Custom/5.png',
	  				'projectAssets/Custom/S1_Evening.png',
	  				'projectAssets/Custom/S2_Evening.png',
					'projectAssets/Custom/6.png'

				],
	  			welcomeText: [ ],
				buttons : [ ],
				images: [],
				localClass: ""
			}
	];
	return idleStateData;
});