define([
  // Application.
  "app"
],

function(app) {

	var languageFontScreenData =  [
		{
			labels: [ ],
	  		buttons: [
	  			{
	  				ID : "buttonLanguageEnglish",
	  				naviType: "executeFunction",
					nextScreenTemplate:"" ,
					nextScreenID : "" ,
					labels: [
						{
		  					text : "",
		  					L1 : "English",
		  					L1Class : "btnEnglish_color",
		  					L2 : "English",
		  					L2Class : "btnEnglish_color",
		  					L3 : "English",
		  					L3Class : "btnEnglish_color", 					
		  					L4 : "",
		  					L4Class : "",
		  					L5 : "",
		  					L5Class : ""
		  				}
					],
					setters: { languageKey	: "1" },
					functions: [
		  				{ name : "changeApplicationLanguageIdx", params : "1" },
						"checkTIME","resetLanguagetText"
	  				],
					localClass: "languageFontScreenBtnEnglish languageButton text-center-english-taglish absolute",
					type: "language",
					selected: "1"
	  			},
	  			{
	  				ID : "buttonLanguageTanglish",
	  				naviType: "executeFunction",
					nextScreenTemplate:"" ,
					nextScreenID : "" ,
					labels : [
						{
		  					text : "",
		  					L1 : "Taglish",
		  					L1Class : "btnTaglish_color",
		  					L2 : "Taglish",
		  					L2Class : "btnTaglish_color",
		  					L3 : "Taglish",
		  					L3Class : "btnTaglish_color", 					
		  					L4 : "",
		  					L4Class : "",
		  					L5 : "",
		  					L5Class : ""
		  				}
					],
					setters: { languageKey	: "2" },
					functions: [
		  				{ name : "changeApplicationLanguageIdx", params : "2" },
						"checkTIME","resetLanguagetText"
	  				],
					localClass: "languageFontScreenBtnTanglish languageButton text-center-english-taglish absolute",
					type: "language",
					selected: "0"
	  			}
	  		]
		}
	];
	
	return languageFontScreenData;

});