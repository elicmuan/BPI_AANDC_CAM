define([
  "app"
],
function(app) {
	var conditionStateData = [ 
	{              
					   template:"conditionState", 
					   ID:"CONDITION_IDLESCREEN", 
					   name:"CONDITION_IDLESCREEN", 
					   label1: "",
					   label2: "",
					   conditionFunction: "checkTimeIdle",     
					   navigation: {
							   1: {
								   naviType : "navi",
								   navigate : "idleState" ,
								   nextScreenID : "IDLE_MAIN_MORNING",
								   setters: { }
								   },
								   
							   2: {
								  naviType : "navi",
								   navigate : "idleState" ,
								   nextScreenID : "IDLE_MAIN_AFTERNOON",
								   setters: { }
								   },
								3: {
								   naviType : "navi",
								   navigate : "idleState" ,
								   nextScreenID : "IDLE_MAIN_EVENING",
								   setters: { }
								   }
					   }
			}
	] ;
	return conditionStateData;
});