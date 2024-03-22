define([
	"app",
	"extraResourceBaseURL/data/ATMCErrorCodeData",
	"../../app/libs/formatinput",
	"../../app/libs/vars",
	"../../app/libs/popupGeneration",
	"../../app/libs/externalFileLibrary"
],
function(app , ATMCErrorCodeData , FormatInput , ACVar, ACPopupGeneration, ExternalFileLib) {
	var cardEjectBeeper;
	var acRequestProcessXHR;
	var idleImageInterval; //Specially added for BPI
	var idleCheckingInterval; //Specially added for BPI
	var previousTOD = "";  //Specially added for BPI
	var currentTOD = "";  //Specially added for BPI	
	var last_trans = "";  //Specially added for BPI	
	
	var ACLib =
	{
		EJLogging : function(object)
		{
			var prefix = "";
			var valKey = "";
			var val = "";
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";
			var value = "";

			_.each(object , function(EJItem)
			{
				prefix = "";
				valKey = "";
				value = "";
				val = "";
				oriKey = "";
				incomplete = 1;
				functionProcessName = "";
				value = String(EJItem);

				do
				{
					oriKey = "";
					valKey = "";
					val = "";

					if(value.indexOf('[[') > -1)
					{
						oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
						valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

						val = ACLib.ProcessGenericMappingDataText(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					
					if(value.indexOf('[@') > -1)
					{
						oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
						valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

						val = ACCoreJS.GetUCDIString(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('[&') > -1)
					{
						oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
						valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

						val = ACCoreJS.GetUCDIIntegar(valKey);
						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('[#') > -1)
					{
						oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
						valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

						val = ACCoreJS.GetComString(valKey);
						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					else if(value.indexOf('[%') > -1)
					{
						oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
						valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

						val = ACCoreJS.GetComInt(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('[<') > -1)
					{
						functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
						oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
						valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

						if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1)
						{
							prefix = valKey.charAt(0);
							valKey = valKey.substring(1 , valKey.length);

							switch(prefix)
							{
								case "@":
									val = ACCoreJS.GetUCDIString(valKey);
									break;
								case "&":
									val = ACCoreJS.GetUCDIIntegar(valKey);
									break;
								case "#":
									val = ACCoreJS.GetComString(valKey);
									break;
								case "%":
									val = ACCoreJS.GetComInt(valKey);
									break;

							}
						}
						else
							val = app.DS.Get(valKey);


						val = ACLib[functionProcessName](val);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

						incomplete = 0;
					}
					else if(value.indexOf('{') > -1)
					{
						oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
						valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

						val = app.DS.Get(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					else
					{

						incomplete = 0;
					}


				}while(incomplete > 0);

				if(typeof value != "undefined" && value != "undefined")
					ACCoreJS.LogToJournal(value);
			});


		},

		ProcessDynamicDataToModel:function(object)
		{
			if(typeof object.get("dynamic") != "undefined")
			{
				var prefix = "";
				var key = "";
				var val = "";

				_.each(object.get("dynamic") , function(item)
				{
					prefix = item.key.charAt(0);

					switch(prefix)
					{
						case "@":
						//UCDIString
							key = String(item.key).substring(1 , String(item.key).length);
							val = ACCoreJS.GetUCDIString(key);

							break;
						case "&":
						//UCDIINT
							key = String(item.key).substring(1 , String(item.key).length);
							val = ACCoreJS.GetUCDIIntegar(key);
							break;
						case "#":
						//COMString
							key = String(item.key).substring(1 , String(item.key).length);
							val = ACCoreJS.GetComString(key);
							break;
						case "%":
						//ComInt
							key = String(item.key).substring(1 , String(item.key).length);
							val = ACCoreJS.GetComInt(key);
							break;
						case "{":
								if(String(item.key).lastIndexOf('}') > 0)
								{
									valKey = String(value).substring(1 , String(value).length - 1);
									val = app.DS.Get(valKey);
								}
								else
								{
									val = value;
								}

							break;
						default:
							key = item.key;
							val = app.DS.Get(item.key);
							break;
					}

					object.set( key , val );
				});
			}

			// return object;
		},

		ProcessSummaryStateFormData : function (object)
		{
			var newObj = [];

			_.each(object.get("summary") , function(summaryItem)
			{
				var prefix = "";
				var valKey = "";
				var val = "";
				var tmpOb = {};

				$.each(summaryItem , function(key , value)
				{

					prefix = String(value).charAt(0);

					switch(prefix)
					{
						case "@":
						//UCDIString
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetUCDIString(valKey);
							break;
						case "&":
						//UCDIINT
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetUCDIIntegar(valKey);
							break;
						case "#":
						//COMString
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetComString(valKey);
							break;
						case "%":
						//ComInt
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetComInt(valKey);
							break;
						case "{":
								if(String(value).lastIndexOf('}') > 0)
								{
									valKey = String(value).substring(1 , String(value).length - 1);
									val = app.DS.Get(valKey);
								}
								else
								{
									val = value;
								}

							break;
						default:
							// valKey = item;
							val = value;
							break;
					}

					tmpOb[key] = val;



				});



				newObj.push(tmpOb);
			});

			object.set("summary" ,newObj);
		},

		ProcessInputData : function (data)
		{

			var prefix = "";
			var valKey = "";
			var val = "";
			var oriKey = "";
			var incomplete = 1;

			var value = String(data);

			do
			{

				oriKey = "";
				valKey = "";
				val = "";

				if(value.indexOf('[@') > -1)
				{
					oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
					valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

					val = ACCoreJS.GetUCDIString(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('[&') > -1)
				{
					oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
					valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

					val = ACCoreJS.GetUCDIIntegar(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('[#') > -1)
				{
					oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
					valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

					val = ACCoreJS.GetComString(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				else if(value.indexOf('[%') > -1)
				{
					oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
					valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

					val = ACCoreJS.GetComInt(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				else if(value.indexOf('{') > -1)
				{
					oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
					valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

					val = app.DS.Get(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				else
				{

					incomplete = 0;
				}


			}while(incomplete > 0);


			if(typeof value != "undefined" && value != "undefined")
				return value;
			else
				return "";



		},
		ProcessSummaryScanImage : function(object)
		{
			if(typeof object.get("scanimage") != "undefined" && String(object.get("scanimage")).indexOf('{') > -1 && String(object.get("scanimage")).indexOf('}') > -1 )
			{
				var value = object.get("scanimage");
				var valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));
				object.set("scanimage" ,app.DS.Get(valKey));
			}
		},



		ProcessSummaryFormData : function (object) {
			var newObj = [];
			var tmpOb = {};
			var t = this;
			_.each(object.get("summary") , function(summaryItem) {
				functionProcessName = "";
				$.each(summaryItem , function(key , value) {
					tmpObj = {};
					value = t.processTransactData(value); //Reduce repeated coding

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";
				});
				newObj.push(tmpOb);
			});
			object.set("summaryData" ,newObj);
			t = null;
		},

		ProcessInputDynamicLabelData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";
			var key = "";
			var value = "";

			_.each(object.get("inputs") , function(dynamicLabelItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;
				functionProcessName = "";

				if(dynamicLabelItem['displayType'] != "undefined" && dynamicLabelItem['displayType'] == "label")
				{
					//$.each(dynamicLabelItem , function(key , value)
					//{
						incomplete = 1;
						key = "inputValueLbl";
						value = String(dynamicLabelItem['inputValueLblInit']);

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";
							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;

									}
								}
								else
									val = app.DS.Get(valKey);


								val = ACLib[functionProcessName](val);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);



						if(typeof value != "undefined" && value != "undefined")
							dynamicLabelItem['inputValueLbl'] = value;
						else
							dynamicLabelItem['inputValueLbl'] = "";

					//});
				}

			});

		},

		ProcessLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;

			_.each(object.get("labels") , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;

				$.each(labelsItem , function(key , value)
				{
					incomplete = 1;

					do
					{
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1)
						{
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[&') > -1)
						{
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[#') > -1)
						{
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('[%') > -1)
						{
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('{') > -1)
						{
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);



							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else
						{

							incomplete = 0;
						}


					}while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";



				});



				newObj.push(tmpOb);
			});

			object.set("labels" ,newObj);
		},

		ProcessSingleLabelData : function (value)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			if(typeof value != "undefined")
			{
				do
				{
					value = String(value);
					oriKey = "";
					valKey = "";
					val = "";

					if(value.indexOf('[[') > -1)
					{
						oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
						valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

						val = ACLib.ProcessGenericMappingDataText(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					
					if(value.indexOf('[@') > -1)
					{
						oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
						valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

						val = ACCoreJS.GetUCDIString(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('[&') > -1)
					{
						oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
						valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

						val = ACCoreJS.GetUCDIIntegar(valKey);
						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('[#') > -1)
					{
						oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
						valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

						val = ACCoreJS.GetComString(valKey);
						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					else if(value.indexOf('[%') > -1)
					{
						oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
						valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

						val = ACCoreJS.GetComInt(valKey);

						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");

					}
					else if(value.indexOf('{') > -1)
					{
						oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
						valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

						val = app.DS.Get(valKey);



						if(typeof val != "undefined" && val != "undefined")
							value = value.replace(oriKey , val);
						else
							value = value.replace(oriKey , "");
					}
					else
					{

						incomplete = 0;
					}


				}while(incomplete > 0);
			}



			return value;
		},

		ProcessSelectedAcctData:function(object)
		{
			var newObj = {};
			var prefix = "";
			var valKey = "";
			var val = "";

			$.each(object.get("labels") , function(key , value)
			{
				prefix = String(value).charAt(0);

					switch(prefix)
					{
						case "@":
						//UCDIString
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetUCDIString(valKey);
							break;
						case "&":
						//UCDIINT
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetUCDIIntegar(valKey);
							break;
						case "#":
						//COMString
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetComString(valKey);
							break;
						case "%":
						//ComInt
							valKey = String(value).substring(1 , String(value).length);
							val = ACCoreJS.GetComInt(valKey);
							break;
						case "{":
								if(String(value).lastIndexOf('}') > 0)
								{
									valKey = String(value).substring(1 , String(value).length - 1);
									val = app.DS.Get(valKey);
								}
								else
								{
									val = value;
								}

							break;
						default:
							// valKey = item;
							val = value;
							break;
					}

					newObj[key] = val;
			});

			object.set("labels" , newObj);

			return object;
		},

		processTrack2Number :  function(val)
		{
			var end = val.indexOf("=");
			var oriTrack2 = "";
			var length = 0;

			if(val != null && val.length > 0 && end > 1)
			{
				val = val.substring(1,end);
				oriTrack2 = val;

				return val;
			}
			else
				return "";
		},

		// updateUserFavSetting : function()
		// {
			// var track2CDI = "2043";
			// var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));
			// var serviceType = "FAVORSET";
			// var CDIVAL = ACCoreJS.GetUCDIString("USER_FAVORITE_SETTINGS");
//
			// ACCoreJS.Trace("Update User Favorite Setting");
			// ACCoreJS.Trace("Service Type > " + serviceType);
			// ACCoreJS.Trace("Customer Card No > " + cardNo);
//
			// // alert(xmlStr);
//
			// ACCoreJS.RegisterPreferenceTrx(cardNo , CDIVAL , serviceType);
		// },

		updateUserFavSetting : function()
		{
			var serviceType = "FAVORSET";
			var track2CDI = "2043";
			var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));

			var cdiVal = ACCoreJS.GetUCDIString("USER_FAVORITE_SETTINGS");
			var id = ACCoreJS.GetUCDIString("USER_FAVORITE_SETTINGS_ID");
			var updateVal = app.DS.Get("USER_FAVORITE_SETTINGS");
			ACCoreJS.Trace("*****Update User Favorite Setting*****");
			// ACCoreJS.Trace("updateVal : " + updateVal);
			// ACCoreJS.Trace("cdiVal : " + cdiVal);
			// ACCoreJS.Trace("id : " + id);

			// alert(xmlStr);
			// if(typeof id != "undefined" && id != "undefined" && String(id).length > 0)
			// {
				if( updateVal != cdiVal || (typeof id == "undefined" || id == "undefined" || String(id).length == 0))
				{
					if(typeof updateVal == "undefined" || updateVal == "undefined")
					{
						ACCoreJS.Trace("UpdateVal > undefined");
						ACCoreJS.Trace("Assign UpdateVal to OriginalCDIVal");
						updateVal = cdiVal;
					}

					ACCoreJS.Trace("Favorite ID > " + id);
					ACCoreJS.Trace("cardNo > " + cardNo);
					ACCoreJS.Trace("updateVal > " + updateVal);
					// ACCoreJS.Trace("cdiVal > " + cdiVal);
					ACCoreJS.Trace("Service Type > " + serviceType);

					ACCoreJS.UpdateRegisteredPreferenceTrx(id , cardNo , updateVal , serviceType);
				}
				else
				{
					ACCoreJS.Trace("Updated Value Match!!");
				}
			// }
			// else
			// {
				// ACCoreJS.Trace("Favorite ID is empty! Create new favorite. ");
				// ACCoreJS.Trace("Service Type > " + serviceType);
				// ACCoreJS.RegisterPreferenceTrx(cardNo , updateVal , serviceType);
			// }
		},

		updateUserPrintSetting : function()
		{
			var track2CDI = "2043";
			var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));
			var serviceType = "PRINTSET";

			var cdiVal = ACCoreJS.GetUCDIString("USER_PRINTING_SETTINGS");
			var id = ACCoreJS.GetUCDIString("USER_PRINTING_SETTINGS_ID");
			var updateVal = app.DS.Get("USER_PRINTING_SETTINGS");
			ACCoreJS.Trace("*****Update User Printing Setting*****");
			// ACCoreJS.Trace("updateVal : " + updateVal);
			// ACCoreJS.Trace("cdiVal : " + cdiVal);
			// ACCoreJS.Trace("id : " + id);

			// alert(xmlStr);

			// if(typeof id != "undefined" && id != "undefined" && String(id).length > 0)
			// {
				if( updateVal != cdiVal || (typeof id == "undefined" || id == "undefined" || String(id).length == 0))
				{
					if(typeof updateVal == "undefined" || updateVal == "undefined")
					{
						ACCoreJS.Trace("UpdateVal > undefined");
						ACCoreJS.Trace("Assign UpdateVal to OriginalCDIVal");
						updateVal = cdiVal;
					}

					ACCoreJS.Trace("Favorite ID > " + id);
					ACCoreJS.Trace("cardNo > " + cardNo);
					ACCoreJS.Trace("updateVal > " + updateVal);
					// ACCoreJS.Trace("cdiVal > " + cdiVal);
					ACCoreJS.Trace("Service Type > " + serviceType);
					ACCoreJS.UpdateRegisteredPreferenceTrx(id , cardNo , updateVal , serviceType);
				}
				else
				{
					ACCoreJS.Trace("Updated Value Match!!");
				}
			// }
			// else
			// {
				// ACCoreJS.Trace("Favorite ID is empty! Create new favorite. ");
				// ACCoreJS.Trace("Service Type > " + serviceType);
				// ACCoreJS.RegisterPreferenceTrx(cardNo , updateVal , serviceType);
			// }

		},

		// updateUserPrintSetting : function()
		// {
			// var track2CDI = "2043";
			// var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));
			// var serviceType = "PRINTSET";
			// var CDIVAL = ACCoreJS.GetUCDIString("USER_PRINTING_SETTINGS");
//
			// ACCoreJS.Trace("Update User Favorite Setting");
			// ACCoreJS.Trace("Service Type > " + serviceType);
			// ACCoreJS.Trace("Customer Card No > " + cardNo);
//
			// // alert(xmlStr);
//
			// ACCoreJS.RegisterPreferenceTrx(cardNo , CDIVAL , serviceType);
		// },

		addESBFavorite : function()
		{
			var track2CDI = "2043";
			var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));
			var xmlStr = "";
			var lblName = "";
			var infoList = "";
			var serviceType = app.DS.Get('TXCODE');
//
			// CUB,,{label1}||{label2}||{label3}||{fromAcctLbl}||{BANKID}||{fromAcct}||{toAcctLbl}||{TRX-BANK-ID}||{toAcct}||OPCODE||{OPCODE},
			// label1|{label1}||label2|{label2}||label3|{label3}||fromAcct|{fromAcct}||fromAcctLbl|{fromAcctLbl}||toAcct|{toAcct}||toAcctLbl|{toAcctLbl}
			// ||opCode|{OPCODE}||ServiceType|{OPCODE}||ACTRX_TYPE|{ACTRX_TYPE}||TEL-OFFICE|{TEL-OFFICE}||TRX-BANK-ID|{TRX-BANK-ID}||bankName|{bankName}
			// ||CREDITCARD_TRX|{CREDITCARD_TRX}||DATA-TYPE|{DATA-TYPE}||BANKID|{BANKID}||PAYMENT_TYPE|{PAYMENT_TYPE}||CARD-ISSUE|{CARD-ISSUE}
			// ||TRANSFER_TYPE|{TRANSFER_TYPE}||TRX-BNKID|{TRX-BNKID},{OPCODE}

			//餘額查詢,Balance Inquiry,交易帳號,013,0000001506017561,OPCODE,BALINQ
			//本行信用卡費,交易帳號,013,0000001505000605,轉入帳號,013,2666012122831036,OPCODE,PAYTFR

			var bankId = app.DS.Get('BKID');

			var labels = {};
			labels.label1 = app.DS.Get('favlabel1');
			labels.label2 = app.DS.Get('favlabel2');
			labels.label3 = app.DS.Get('favlabel3');
			labels.label4 = app.DS.Get('fromAcctLbl');
			labels.label5 = app.DS.Get('BKID');
			labels.label6 = app.DS.Get('TXACC');
			labels.label7 = app.DS.Get('toAcctLbl');
			labels.label8 = app.DS.Get('TRBKID');
			labels.label9 = app.DS.Get('TRTXACC');
			labels.label10 = "OPCODE";
			labels.label11 = app.DS.Get('TXCODE');

			var keyArry = ["BKID" , "TXACC" , "TRBKID" , "TRTXACC" , "TXCODE" ];
			var valueArry = [app.DS.Get('BKID') , app.DS.Get('TXACC') , app.DS.Get('TRBKID') , app.DS.Get('TRTXACC'), app.DS.Get('TXCODE')];

			// cardNo = bankId + cardNo;

			xmlStr = "<favor>";
			xmlStr += "<LabelName>";

			for(var i = 1 ; i < 12 ; i++)
			{
				if(typeof labels["label"+i] != "undefined" && String(labels["label"+i]).length > 0)
				{
					if(i < 11)
						xmlStr +=  labels["label"+i] + ",";
					else
						xmlStr +=  labels["label"+i];
				}

			}
			// xmlStr += label1 + "," + label2 + "," + label3 + "," + label4 + "," + label5+ "," + label6+ "," + label7+ "," + label8+ "," + label9+ "," + label10+ "," + label11;
			xmlStr += "</LabelName>";

			xmlStr += "<infoList>";

			if(typeof app.DS.Get('favlabel1') != "undefined" && String(app.DS.Get('favlabel1')).length > 0)
				xmlStr += "<favlabel1>" + this.ifNullThenEmptyReturn(app.DS.Get('favlabel1')) + "</favlabel1>";

			if(typeof app.DS.Get('favlabel2') != "undefined" && String(app.DS.Get('favlabel2')).length > 0)
				xmlStr += "<favlabel2>" + this.ifNullThenEmptyReturn(app.DS.Get('favlabel2')) + "</favlabel2>";

			if(typeof app.DS.Get('favlabel3') != "undefined" && String(app.DS.Get('favlabel3')).length > 0)
				xmlStr += "<favlabel3>" + this.ifNullThenEmptyReturn(app.DS.Get('favlabel3')) + "</favlabel3>";

			if(typeof app.DS.Get('fromAcctLbl') != "undefined" && String(app.DS.Get('fromAcctLbl')).length > 0)
				xmlStr += "<favlabel4>" + this.ifNullThenEmptyReturn(app.DS.Get('fromAcctLbl')) + "</favlabel4>";

			if(typeof app.DS.Get('TXACC') != "undefined" && String(app.DS.Get('TXACC')).length > 0)
				xmlStr += "<favlabel5>" + this.ifNullThenEmptyReturn(app.DS.Get('BKID')) + "-" + this.ifNullThenEmptyReturn(app.DS.Get('TXACC')) + "</favlabel5>";

			if(typeof app.DS.Get('toAcctLbl') != "undefined" && String(app.DS.Get('toAcctLbl')).length > 0)
				xmlStr += "<favlabel6>" + this.ifNullThenEmptyReturn(app.DS.Get('toAcctLbl')) + "</favlabel6>";

			if(typeof app.DS.Get('TRTXACC') != "undefined" && String(app.DS.Get('TRTXACC')).length > 0)
				xmlStr += "<favlabel7>" + this.ifNullThenEmptyReturn(app.DS.Get('TRBKID')) + "-" + this.ifNullThenEmptyReturn(app.DS.Get('TRTXACC')) + "</favlabel7>";

			if(typeof app.DS.Get('BKID') != "undefined" && String(app.DS.Get('BKID')).length > 0)
				xmlStr += "<BKID>" + app.DS.Get('BKID') + "</BKID>";

			if(typeof app.DS.Get('TXAMT') != "undefined" && String(app.DS.Get('TXAMT')).length > 0)
				xmlStr += "<TXAMT>" + app.DS.Get('TXAMT') + "</TXAMT>";

			if(typeof app.DS.Get('TXACC') != "undefined" && String(app.DS.Get('TXACC')).length > 0)
				xmlStr += "<TXACC>" + app.DS.Get('TXACC') + "</TXACC>";

			if(typeof app.DS.Get('TRBKID') != "undefined" && String(app.DS.Get('TRBKID')).length > 0)
				xmlStr += "<TRBKID>" + app.DS.Get('TRBKID') + "</TRBKID>";

			if(typeof app.DS.Get('TRTXACC') != "undefined" && String(app.DS.Get('TRTXACC')).length > 0)
				xmlStr += "<TRTXACC>" + app.DS.Get('TRTXACC') + "</TRTXACC>";

			if(typeof app.DS.Get('TXCODE') != "undefined" && String(app.DS.Get('TXCODE')).length > 0)
				xmlStr += "<TXNAME>" + app.DS.Get('TXCODE') + "</TXNAME>";

			if(typeof app.DS.Get('TXCODE') != "undefined" && String(app.DS.Get('TXCODE')).length > 0)
				xmlStr += "<TXCODE>" + app.DS.Get('TXCODE') + "</TXCODE>";

			if(typeof app.DS.Get('FEEEX') != "undefined" && String(app.DS.Get('FEEEX')).length > 0)
				xmlStr += "<FEEEX>" + app.DS.Get('FEEEX') + "</FEEEX>";

			if(typeof app.DS.Get('MSGTYP') != "undefined" && String(app.DS.Get('MSGTYP')).length > 0)
				xmlStr += "<MSGTYP>" + app.DS.Get('MSGTYP') + "</MSGTYP>";

			if(typeof app.DS.Get('FEETYPE') != "undefined" && String(app.DS.Get('FEETYPE')).length > 0)
				xmlStr += "<FEETYPE>" + app.DS.Get('FEETYPE') + "</FEETYPE>";
//
			// for(var i = 0 ; i < keyArry.length ; i++)
			// {
					// xmlStr += "<info>";
					// xmlStr += "<key>" + keyArry[i] + "</key>";
					// xmlStr += "<value>" + valueArry[i] + "</value>";
					// xmlStr += "</info>";
			// }
//
			xmlStr += "</infoList>";
			xmlStr += "</favor>";

			ACCoreJS.Trace("RegisterPreferenceTrx");
			ACCoreJS.Trace("Add New Favorite : Service Type > " + serviceType);
			ACCoreJS.Trace("Add New Favorite : Customer Card No > " + cardNo);

			// alert(xmlStr);

			ACCoreJS.RegisterPreferenceTrx(cardNo , xmlStr , serviceType);
		},

		ifNullThenEmptyReturn : function(val)
		{
			if(typeof val != "undefined" && String(val).length > 0)
				return val;
			else
				return "";

		},

		removeESBFavorite : function(id)
		{
			var favIDKey = id;
			var favIDVal = id;

			ACCoreJS.Trace("DeRegisteredPreferenceTrx");
			ACCoreJS.Trace("Remove Favorite Transaction : ID > " + favIDVal);

			ACCoreJS.DeRegisteredPreferenceTrx(favIDVal);
		},

		removeESBFavoriteAndRefreshCDI : function(id , callBack)
		{
			var favIDKey = id;
			var favIDVal = id;
			var track2CDI = "2043";
			var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));

			ACCoreJS.Trace("DeRegisteredPreferenceTrxWithUpdateInfo");
			ACCoreJS.Trace("Remove Favorite Transaction : ID > " + favIDVal);

			if(ACCoreJS.GetUCDIString("ATM-VENDOR") == "NCR" || String(ACCoreJS.GetUCDIString("ATM-VENDOR")).length == 0)
			{
				var latestXMLStr = ACCoreJS.DeRegisteredPreferenceTrxWithUpdateInfo(favIDVal , cardNo , callBack);
				ACCoreJS.Trace("Latest Favorite List : " + latestXMLStr);
				ACCoreJS.SetUCDIStr("InterActFavorList" , latestXMLStr);
			}
			else
			{
				ACCoreJS.DeRegisteredPreferenceTrxWithUpdateInfo(favIDVal , cardNo , callBack);
			}
		},


		processESBFavoriteData : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var atmcStatus = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var withdrawalStatus = atmcStatus.charAt(1);
			var depositStatus = atmcStatus.charAt(2);
			var arrSelections = [];
			var enable = "1";
			var favID = "";
			var opcode = "";
			var selectionString = "";
			// ACCoreJS.Trace("InterActFavorList : " + cdiVal);
			// ACCoreJS.Trace("arrSelections Length : " + arrSelections.length);

			$(xmlDoc).find("favoriteTransactionList").each(function(index, value)
			{
				if($(this).find("opcode").text() != "PRINTSET" && $(this).find("opcode").text() != "FAVORSET" )
				{
					favID = $(this).find("id").text();
					opcode = $(this).find("opcode").text();
					selectionString = "";

					selectionString = ' { ';
					selectionString += '"id" : "' + favID + '",';
					selectionString += '"opcode" : "' + opcode + '",';
					selectionString += '"TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TXNAME" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"FEETYPE" : "' + $(this).find("FEETYPE").text() + '",';

					selectionString += '"naviType" : "' + "navi" + '",';
					selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
					selectionString += '"nextScreenID" : "' + "CONDITION_VERIFY_FAVORITE_TRXFLOW" + '",';

					selectionString += '"localClass" : "' + "myFavoriteButton" + '",';

					switch($(this).find("TXCODE").text())
					{
						case "CWD":
							enable = withdrawalStatus;
							break;
						case "DEP":
							enable = depositStatus;
							break;
						default:
							enable = "1";
							break;
					}

					if(enable == "1")
					{
						selectionString += '"localClass" : "myFavoriteButton",';
						selectionString += '"enable" : "1",';

					}
					else
					{
						selectionString += '"localClass" : "myFavoriteDisableButton",';
						selectionString += '"enable" : "0",';
					}


					if(typeof $(this).find("favlabel1").text() != "undefined" && String($(this).find("favlabel1").text()) != "undefined" && String($(this).find("favlabel1").text()).length > 0)
						selectionString += '"favlabel1" : "' + $(this).find("favlabel1").text() + '",';

					if(typeof $(this).find("favlabel2").text() != "undefined" && String($(this).find("favlabel2").text()) != "undefined" && String($(this).find("favlabel2").text()).length > 0)
						selectionString += '"favlabel2" : "' + $(this).find("favlabel2").text() + '",';

					if(typeof $(this).find("favlabel3").text() != "undefined" && String($(this).find("favlabel3").text()) != "undefined" && String($(this).find("favlabel3").text()).length > 0)
						selectionString += '"favlabel3" : "' + $(this).find("favlabel3").text() + '",';

					if(typeof $(this).find("favlabel4").text() != "undefined" && String($(this).find("favlabel4").text()) != "undefined" && String($(this).find("favlabel4").text()).length > 0)
						selectionString += '"favlabel4" : "' + $(this).find("favlabel4").text() + '",';

					if(typeof $(this).find("favlabel5").text() != "undefined" && String($(this).find("favlabel5").text()) != "undefined" && String($(this).find("favlabel5").text()).length > 0)
						selectionString += '"favlabel5" : "' + $(this).find("favlabel5").text() + '",';

					if(typeof $(this).find("favlabel6").text() != "undefined" && String($(this).find("favlabel6").text()) != "undefined" && String($(this).find("favlabel6").text()).length > 0)
						selectionString += '"favlabel6" : "' + $(this).find("favlabel6").text() + '",';

					if(typeof $(this).find("favlabel7").text() != "undefined" && String($(this).find("favlabel7").text()) != "undefined" && String($(this).find("favlabel7").text()).length > 0)
						selectionString += '"favlabel7" : "' + $(this).find("favlabel7").text() + '",';

					selectionString += '"EJ" : [';
					selectionString += '"USER SELECT FAV: {favlabel1} {favlabel2} {favlabel3} {favlabel4} {favlabel5} {favlabel6} {favlabel7}"';
					selectionString += '],';

					selectionString += '"setters" : {';
					selectionString += '"interNaviData" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TXNAME" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"@TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"@TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"@BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"@FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"@TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"@MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"favlabel1" : "' + $(this).find("favlabel1").text() + '",';
					selectionString += '"favlabel2" : "' + $(this).find("favlabel2").text() + '",';
					selectionString += '"favlabel3" : "' + $(this).find("favlabel3").text() + '",';
					selectionString += '"favlabel4" : "' + $(this).find("favlabel4").text() + '",';
					selectionString += '"favlabel5" : "' + $(this).find("favlabel5").text() + '",';
					selectionString += '"favlabel6" : "' + $(this).find("favlabel6").text() + '",';
					selectionString += '"favlabel7" : "' + $(this).find("favlabel7").text() + '",';
					selectionString += '"FEETYPE" : "' + $(this).find("FEETYPE").text() + '",';
					selectionString += '"@FEETYPE" : "' + $(this).find("FEETYPE").text() + '"';
					selectionString += '}}';

					arrSelections.push($.parseJSON(selectionString));
				}

			});


			// ACCoreJS.Trace("arrSelections Length : " + arrSelections.length);

			return arrSelections;
		},

		processESBATMFavoriteData : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var atmcStatus = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var vendorCDI = ACCoreJS.GetUCDIString('ATM-VENDOR');
			var cdmTypeCDI = ACCoreJS.GetUCDIString('CDMTYPE');
			var MAXCWDAMT = parseInt(ACCoreJS.GetUCDIString('MAXCWDAMT'));
			var withdrawalStatus = atmcStatus.charAt(1);
			var thousandDollarStatus = atmcStatus.charAt(5);
			var hundredDollarStatus = atmcStatus.charAt(6);
			var depositStatus = atmcStatus.charAt(2);
			var arrSelections = [];
			var enable = "1";
			var favID = "";
			var opcode = "";
			var selectionString = "";
			var maxCWDAmt = 0;
			// ACCoreJS.Trace("InterActFavorList : " + cdiVal);
			// ACCoreJS.Trace("arrSelections Length : " + arrSelections.length);

			$(xmlDoc).find("favoriteTransactionList").each(function(index, value)
			{
				if($(this).find("opcode").text() != "PRINTSET" && $(this).find("opcode").text() != "FAVORSET" )
				{
					favID = $(this).find("id").text();
					opcode = $(this).find("opcode").text();
					selectionString = "";

					selectionString = ' { ';
					selectionString += '"id" : "' + favID + '",';
					selectionString += '"opcode" : "' + opcode + '",';
					selectionString += '"TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TXNAME" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"FEETYPE" : "' + $(this).find("FEETYPE").text() + '",';

					selectionString += '"naviType" : "' + "navi" + '",';
					selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
					selectionString += '"nextScreenID" : "' + "CONDITION_VERIFY_FAVORITE_TRXFLOW" + '",';

					selectionString += '"localClass" : "' + "myFavoriteButton" + '",';



					switch($(this).find("TXCODE").text())
					{
						case "CWD":
							if(withdrawalStatus == "1")
							{
								// switch(String(vendorCDI).toUpperCase())
								// {
								// 	case "WINCOR":
								// 		// maxCWDAmt = 50000;

								// 		break;
								// 	case "NCR":
								// 		if(cdmTypeCDI == "S2")
								// 		{
								// 			maxCWDAmt = 50000;
								// 		}
								// 		else
								// 		{
								// 			maxCWDAmt = 30000;
								// 		}
								// 		break;
								// 	default:
								// 		maxCWDAmt = 30000;
								// 		break;
								// }

								maxCWDAmt = MAXCWDAMT;

								if(parseInt($(this).find("TXAMT").text()) > maxCWDAmt)
								{
									enable = "0";
								}
								else
								{
									if(parseInt($(this).find("TXAMT").text()) > 1000 && thousandDollarStatus == "1" &&
										(parseInt($(this).find("TXAMT").text()) % 1000 > 0 && hundredDollarStatus == "1" ))
									{
										enable = "1";
									}
									else if(parseInt($(this).find("TXAMT").text()) < 1000 && hundredDollarStatus == "1")
									{
									enable = "1";
								}
									else
									{
										enable = "0";
									}
									// enable = "1";
								}


							}
							else
								enable = "0";
							// enable = withdrawalStatus;
							break;
						case "DEP":
							if(depositStatus == "1")
								enable = "1";
							else
								enable = "0";
							// enable = depositStatus;
							break;
						default:
							enable = "1";
							break;
					}

					if(enable == "1")
					{
						selectionString += '"localClass" : "myFavoriteButton",';
						selectionString += '"enable" : "1",';

					}
					else
					{
						selectionString += '"localClass" : "myFavoriteDisableButton",';
						selectionString += '"enable" : "0",';
					}


					if(typeof $(this).find("favlabel1").text() != "undefined" && String($(this).find("favlabel1").text()) != "undefined" && String($(this).find("favlabel1").text()).length > 0)
						selectionString += '"favlabel1" : "' + $(this).find("favlabel1").text() + '",';

					if(typeof $(this).find("favlabel2").text() != "undefined" && String($(this).find("favlabel2").text()) != "undefined" && String($(this).find("favlabel2").text()).length > 0)
						selectionString += '"favlabel2" : "' + $(this).find("favlabel2").text() + '",';

					if(typeof $(this).find("favlabel3").text() != "undefined" && String($(this).find("favlabel3").text()) != "undefined" && String($(this).find("favlabel3").text()).length > 0)
						selectionString += '"favlabel3" : "' + $(this).find("favlabel3").text() + '",';

					if(typeof $(this).find("favlabel4").text() != "undefined" && String($(this).find("favlabel4").text()) != "undefined" && String($(this).find("favlabel4").text()).length > 0)
						selectionString += '"favlabel4" : "' + $(this).find("favlabel4").text() + '",';

					if(typeof $(this).find("favlabel5").text() != "undefined" && String($(this).find("favlabel5").text()) != "undefined" && String($(this).find("favlabel5").text()).length > 0)
						selectionString += '"favlabel5" : "' + $(this).find("favlabel5").text() + '",';

					if(typeof $(this).find("favlabel6").text() != "undefined" && String($(this).find("favlabel6").text()) != "undefined" && String($(this).find("favlabel6").text()).length > 0)
						selectionString += '"favlabel6" : "' + $(this).find("favlabel6").text() + '",';

					if(typeof $(this).find("favlabel7").text() != "undefined" && String($(this).find("favlabel7").text()) != "undefined" && String($(this).find("favlabel7").text()).length > 0)
						selectionString += '"favlabel7" : "' + $(this).find("favlabel7").text() + '",';

					selectionString += '"EJ" : [';
					selectionString += '"USER SELECT FAV: {favlabel1} {favlabel2} {favlabel3} {favlabel4} {favlabel5} {favlabel6} {favlabel7}"';
					selectionString += '],';

					selectionString += '"setters" : {';
					selectionString += '"interNaviData" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TXNAME" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"TXCODE" : "' + $(this).find("TXCODE").text() + '",';
					selectionString += '"@TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"TRTXACC" : "' + $(this).find("TRTXACC").text() + '",';
					selectionString += '"@TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"TRBKID" : "' + $(this).find("TRBKID").text() + '",';
					selectionString += '"@TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"TXACC" : "' + $(this).find("TXACC").text() + '",';
					selectionString += '"@BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"BKID" : "' + $(this).find("BKID").text() + '",';
					selectionString += '"@FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"FEEEX" : "' + $(this).find("FEEEX").text() + '",';
					selectionString += '"@TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"TXAMT" : "' + $(this).find("TXAMT").text() + '",';
					selectionString += '"@MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"MSGTYP" : "' + $(this).find("MSGTYP").text() + '",';
					selectionString += '"favlabel1" : "' + $(this).find("favlabel1").text() + '",';
					selectionString += '"favlabel2" : "' + $(this).find("favlabel2").text() + '",';
					selectionString += '"favlabel3" : "' + $(this).find("favlabel3").text() + '",';
					selectionString += '"favlabel4" : "' + $(this).find("favlabel4").text() + '",';
					selectionString += '"favlabel5" : "' + $(this).find("favlabel5").text() + '",';
					selectionString += '"favlabel6" : "' + $(this).find("favlabel6").text() + '",';
					selectionString += '"favlabel7" : "' + $(this).find("favlabel7").text() + '",';
					selectionString += '"FEETYPE" : "' + $(this).find("FEETYPE").text() + '",';
					selectionString += '"@FEETYPE" : "' + $(this).find("FEETYPE").text() + '"';
					selectionString += '}}';

					arrSelections.push($.parseJSON(selectionString));
				}

			});


			// ACCoreJS.Trace("arrSelections Length : " + arrSelections.length);

			return arrSelections;
		},

		processPaymentTrxToAcct : function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});

			$(xmlDoc).find("to").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				bankName = ACLib.getBankListNameByID(bankId);
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_PAYMENT_HIGHLIGHT_AMT" + '",';

				selectionString += '"localClass" : "' + "withdrawalAccount" + '",';

				selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
				selectionString += '"label3" : "' + accountNumber + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TOACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "' + "TFR" + '",';
				selectionString += '"@TXCODE" : "' + "TFR" + '",';
				selectionString += '"TXCODE" : "' + "TFR" + '",';
				selectionString += '"@TXNAME" : "' + "TFR" + '",';
				selectionString += '"@TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRBKID" : "' + bankId + '",';
				selectionString += '"@TRBKID" : "' + bankId + '",';

				selectionString += '"trxType" : "' + "PAYMENT" + '",';
				selectionString += '"favlabel1" : "' + "繳費" + '",';
				selectionString += '"favlabel2" : "' + bankName + '",';
				selectionString += '"favlabel3" : "' + "" + '",';
				selectionString += '"fromAcctLbl" : "' + "扣款帳號" + '",';
				selectionString += '"toAcctLbl" : "' + "轉入帳號" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));

			});

			return arrSelections;
		},



		processTransferTrxAddAcct : function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});

			$(xmlDoc).find("to").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				bankName = ACLib.getBankListNameByID(bankId);
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_TRANSFER_OTHER_ACCT_HIGHLIGHT_AMT" + '",';

				selectionString += '"localClass" : "' + "withdrawalAccount" + '",';

				selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
				selectionString += '"label3" : "' + accountNumber + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TOACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';


				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "' + "TFR" + '",';
				selectionString += '"@TXCODE" : "' + "TFR" + '",';
				selectionString += '"TXCODE" : "' + "TFR" + '",';
				selectionString += '"@TXNAME" : "' + "TFR" + '",';
				selectionString += '"@TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRBKID" : "' + bankId + '",';
				selectionString += '"@TRBKID" : "' + bankId + '",';

				selectionString += '"trxType" : "' + "TRANSFER" + '",';
				selectionString += '"favlabel1" : "' + "轉帳" + '",';
				selectionString += '"favlabel2" : "' + bankName + '",';
				selectionString += '"favlabel3" : "' + "" + '",';
				selectionString += '"fromAcctLbl" : "' + "扣款帳號" + '",';
				selectionString += '"toAcctLbl" : "' + "轉入帳號" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '},';
				selectionString += '"functions" : ["setTransferInitPoint"]}';



				arrSelections.push($.parseJSON(selectionString));

			});

			return arrSelections;
		},

		processPaymentMenuBtn : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_PAYMENT_SUBMENU" + '",';

			selectionString += '"localClass" : "withdrawalOthers",';
			selectionString += '"enable" : "1",';

			selectionString += '"label1" : "繳費",';
			selectionString += '"label3" : "Bill Payment"';
			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_PAYMENT_CREDITCARD" + '",';

			selectionString += '"localClass" : "withdrawalOthers",';
			selectionString += '"enable" : "1",';

			selectionString += '"label1" : "繳玉山銀行信用卡款",';
			selectionString += '"label3" : "Credit Card Payment",';

			selectionString += '"setters" : {';
			selectionString += '"TRBKID" : "' + "808" + '",';
			selectionString += '"@TRBKID" : "' + "808" + '",';
			selectionString += '"TRTXACC" : "' + "" + '",';
			selectionString += '"@TRTXACC" : "' + "" + '",';

			selectionString += '"trxType" : "' + "CREDITCARD" + '",';
			selectionString += '"favlabel1" : "' + "繳信用卡款" + '",';
			selectionString += '"favlabel2" : "' + "" + '",';
			selectionString += '"favlabel3" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "' + "扣款帳號" + '",';
			selectionString += '"toAcctLbl" : "' + "轉入帳號" + '",';
			selectionString += '"FEETYPE" : "' + "3" + '"';
			selectionString += '}';
			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_STATEMENT_CHIP" + '",';

			selectionString += '"localClass" : "withdrawalOthers",';
			selectionString += '"enable" : "1",';

			selectionString += '"label1" : "查詢本人信用卡帳單",';
			selectionString += '"label3" : "Inquiry Credit Card Bill",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CBI" + '",';
			selectionString += '"@TXCODE" : "' + "CBI" + '",';
			selectionString += '"TXCODE" : "' + "CBI" + '",';
			selectionString += '"@TXNAME" : "' + "CBI" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '},';

            selectionString += '"functions":[';
            selectionString += '"processCreditCardInqAcctNum"';
            selectionString += ']';

			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_TAX_PAYMENT_TYPE" + '",';

			if(cdiVal.charAt(0) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "繳納稅款",';
			selectionString += '"label3" : "Tax Payment"';

			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			return arrSelections;
		},

        processCreditCardInqAcctNum : function()
        {
            var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
            var xmlDoc = $.parseXML(cdiVal);
            var arrSelections = [];
            var accountNumber = "";
            var bankId = "";
            var bankName = "";
            var selectionString = "";
            var found93 = false;

            $(xmlDoc).find("from").find("account").each(function(index, value)
            {
                accountNumber = $(this).find("no").text();
                bankId = $(this).find("bankId").text();

                if(accountNumber.charAt(3) == "9" && accountNumber.charAt(4) == "3" && index == 0)
                {
                    //Do nothing
                    found93 = true;
                }
                else if(index == 1)
                {
                    if(found93 == true)
                    {
                        app.BroadCaster.trigger("selectMatchAcct" , {TXACC : accountNumber});
                    }

                    return false;
                }

            });
        },

		processOffUsPaymentMenuBtn : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_PAYMENT_SUBMENU" + '",';

			selectionString += '"localClass" : "withdrawalOthers",';
			selectionString += '"enable" : "1",';

			selectionString += '"label1" : "繳費",';
			selectionString += '"label3" : "Bill Payment"';
			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_PAYMENT_CREDITCARD" + '",';

			selectionString += '"localClass" : "withdrawalOthers",';
			selectionString += '"enable" : "1",';

			selectionString += '"label1" : "繳玉山銀行信用卡款",';
			selectionString += '"label3" : "Credit Card Payment",';

			selectionString += '"setters" : {';
			selectionString += '"TRBKID" : "' + "808" + '",';
			selectionString += '"@TRBKID" : "' + "808" + '",';
			selectionString += '"TRTXACC" : "' + "" + '",';
			selectionString += '"@TRTXACC" : "' + "" + '",';

			selectionString += '"trxType" : "' + "CREDITCARD" + '",';
			selectionString += '"favlabel1" : "' + "繳信用卡款" + '",';
			selectionString += '"favlabel2" : "' + "" + '",';
			selectionString += '"favlabel3" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "' + "扣款帳號" + '",';
			selectionString += '"toAcctLbl" : "' + "轉入帳號" + '",';
			selectionString += '"FEETYPE" : "' + "3" + '"';
			selectionString += '}';
			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));



			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_TAX_PAYMENT_TYPE" + '",';

			if(cdiVal.charAt(0) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "繳納稅款",';
			selectionString += '"label3" : "Tax Payment"';

			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			return arrSelections;
		},

		processCreditCardWithdralList : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_CREDIT_CARD_WITHDRAWAL_AMT" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "其他金額",';
			selectionString += '"label3" : "OTHER AMOUNT",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "exitTrx" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "CREDIT_UPDATETRACKPIN" + '",';

			selectionString += '"label1" : "密碼變更",';
			selectionString += '"label3" : "CREDIT CARD PASSWORD CHANGE",';

			selectionString += '"localClass" : "creditCardOthers"}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "3,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 3000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			return arrSelections;
		},

		processOffUsCreditCardWithdralList : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_OFFUS_CREDIT_CARD_WITHDRAWAL_AMT" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "其他金額",';
			selectionString += '"label3" : "OTHER AMOUNT",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "exitTrx" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "CREDIT_UPDATETRACKPIN" + '",';

			selectionString += '"label1" : "密碼變更",';
			selectionString += '"label3" : "CREDIT CARD PASSWORD CHANGE",';

			selectionString += '"localClass" : "creditCardOthers"}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "3,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 3000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			return arrSelections;
		},

		processCreditCardWithdrawalEnglishList : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_OTHERAMT_ACCT_SELECTION" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "OTHER AMOUNT",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_BALINQ_ACCT_SELECTION" + '",';

			selectionString += '"label1" : "BALANCE INQUIRY",';

			selectionString += '"localClass" : "witdrawalFastCash",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "IN2" + '",';
			selectionString += '"TXCODE" : "' + "IN2" + '",';
			selectionString += '"@TXCODE" : "' + "IN2" + '",';
			selectionString += '"@TXNAME" : "' + "IN2" + '",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_CWD_ACCT_SELECTION" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_CWD_ACCT_SELECTION" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "3,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 3000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_CWD_ACCT_SELECTION" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_ENGLISH_CWD_ACCT_SELECTION" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CW2" + '",';
			selectionString += '"TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXCODE" : "' + "CW2" + '",';
			selectionString += '"@TXNAME" : "' + "CW2" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			return arrSelections;
		},

		processUnionPayCardList : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

  			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
			selectionString += '"nextScreenID" : "' + "INPUT_UNION_CARD_WITHDRAWAL_AMT" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "其他金額",';
			selectionString += '"label3" : "OTHER AMOUNT",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUP" + '",';
			selectionString += '"TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXNAME" : "' + "CUP" + '",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_BALINQ_UNIONCARD_ONUS" + '",';

			selectionString += '"label1" : "餘額查詢",';
			selectionString += '"label3" : "BALANCE INQUIRY",';

			selectionString += '"localClass" : "withdrawalOthers",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUI" + '",';
			selectionString += '"TXCODE" : "' + "CUI" + '",';
			selectionString += '"@TXCODE" : "' + "CUI" + '",';
			selectionString += '"@TXNAME" : "' + "CUI" + '",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUP" + '",';
			selectionString += '"TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXNAME" : "' + "CUP" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "3,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 3000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUP" + '",';
			selectionString += '"TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXNAME" : "' + "CUP" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUP" + '",';
			selectionString += '"TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXNAME" : "' + "CUP" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CREDITCARD_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CUP" + '",';
			selectionString += '"TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXCODE" : "' + "CUP" + '",';
			selectionString += '"@TXNAME" : "' + "CUP" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';
			selectionString += '"@TK2ACC_TYPE" : "30",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			return arrSelections;
		},

		processOnUsCashWithdrawalBtnStatus : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";
			var selectionString = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 1,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';


			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 5,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "10,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 10000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "10000",';
			selectionString += '"@TXAMT" : "10000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 10,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "扣款帳號",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 20,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "30,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 30000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "30000",';
			selectionString += '"@TXAMT" : "30000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 30,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			_.each(oriData , function(item)
			{
				if(cdiVal.charAt(1) != "1")
				{
					item["enable"] = "0";
					item["localClass"] = "withdrawalDisableOthers";
				}
				else
				{
					item["enable"] = "1";
					item["localClass"] = "withdrawalOthers";
				}

				arrSelections.push(item);
			});

			return arrSelections;
		},

		processOffUsCashWithdrawalBtnStatus : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "1,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 1000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 1,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "3,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 3000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 3,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "5,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 5000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 5,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "10,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 10000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "10000",';
			selectionString += '"@TXAMT" : "10000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 10,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
			selectionString += '"nextScreenID" : "' + "TRX_REQ_CASHWITHDRAWAL" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "witdrawalFastCash",';
				selectionString += '"enable" : "1",';
			}
			else
			{
				selectionString += '"localClass" : "witdrawalDisableFastCash",';
				selectionString += '"enable" : "0",';
			}


			selectionString += '"label1" : "NT$",';
			selectionString += '"label2" : "20,000",';

			// selectionString += '"EJ" : [';
			// selectionString += '"USER SELECT AMOUNT: 20000"';
			// selectionString += '],';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "CWD" + '",';
			selectionString += '"TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXCODE" : "' + "CWD" + '",';
			selectionString += '"@TXNAME" : "' + "CWD" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000",';

			selectionString += '"trxType" : "' + "CASHWITHDRAWAL" + '",';
			selectionString += '"favlabel1" : "提款",';
			selectionString += '"favlabel2" : "",';
			selectionString += '"favlabel3" : "' + "NT$ 20,000" + '",';
			selectionString += '"toAcctLbl" : "' + "" + '",';
			selectionString += '"fromAcctLbl" : "",';
			selectionString += '"MSGTYP" : "' + "AA" + '",';
			selectionString += '"@MSGTYP" : "' + "AA" + '"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			_.each(oriData , function(item)
			{
				if(cdiVal.charAt(1) != "1")
				{
					item["enable"] = "0";
					item["localClass"] = "withdrawalDisableOthers";
				}
				else
				{
					item["enable"] = "1";
					item["localClass"] = "withdrawalOthers";
				}

				arrSelections.push(item);
			});

			return arrSelections;
		},

		processOnUsCGBRUCashWithdrawalBtnStatus : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
			selectionString += '"nextScreenID" : "' + "CONDITION_ONUS_GBRU_CASHWITHDRAWAL_TYPE" + '",';

			if(cdiVal.charAt(1) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}

			selectionString += '"label1" : "提款",';
			selectionString += '"label3" : "Cash Withdraw"';

			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
			selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_GBRU_CASHDEPOSIT_MENU" + '",';

			if(cdiVal.charAt(2) == "1")
			{
				selectionString += '"localClass" : "withdrawalOthers",';
				selectionString += '"enable" : "1",';

			}
			else
			{
				selectionString += '"localClass" : "withdrawalDisableOthers",';
				selectionString += '"enable" : "0",';
			}

			selectionString += '"label1" : "存款",';
			selectionString += '"label3" : "Cash Deposit"';

			selectionString += '}';

			arrSelections.push($.parseJSON(selectionString));

			return arrSelections;
		},

		processInquiryAcctData :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "interNavi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
				selectionString += '"nextScreenID" : "' + "TRX_REQ_BALINQ" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "' + "INQ" + '",';
				selectionString += '"TXCODE" : "' + "INQ" + '",';
				selectionString += '"@TXCODE" : "' + "INQ" + '",';
				selectionString += '"@TXNAME" : "' + "INQ" + '",';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';

				selectionString += '"trxType" : "' + "BALINQ" + '",';
				selectionString += '"favlabel1" : "' + "餘額查詢" + '",';
				selectionString += '"favlabel2" : "' + "" + '",';
				selectionString += '"favlabel3" : "' + "" + '",';
				selectionString += '"toAcctLbl" : "' + "" + '",';
				selectionString += '"fromAcctLbl" : "",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processCreditCardDirectDebitAcctData :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_CREDITCARD_DIRECTDEBIT_EDIT" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processWithdrawalForexAcctData :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "sixBtnMenuState" + '",';
				selectionString += '"nextScreenID" : "' + "SIXBTN_ONUS_WITHDRAWAL_FOREIGN_SELECT_TYPE" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"CURR_ACC" : "' + "0" + '",';
				selectionString += '"@CURR_ACC" : "' + "0" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processWithdrawalForexCash :  function(oriData)
		{
			var cdiVal = String(ACCoreJS.GetUCDIString("FOREIGNCASSETTES"));
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var description = "";
			var currency = "";
			var cassetestatus = "";
			var cashValue = "";
			var selectionString = "";

			ACCoreJS.Trace(cdiVal);

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("item").each(function(index, value)
			{
				currency = $(this).find("currency").text();
				description = $(this).find("description").text();
				cassetestatus = $(this).find("cassetestatus").text();
				cashValue = $(this).find("value").text();
				selectionString = "";

                if(currency != "TWD")
                {
                    selectionString = ' { ';
                    selectionString += '"naviType" : "' + "navi" + '",';
                    selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
                    selectionString += '"nextScreenID" : "' + "INPUT_ONUS_WITHDRAWAL_FOREIGN_INPUT" + '",';

                    //selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

                    selectionString += '"label1" : "' + description + '",';
                    selectionString += '"label3" : "' + cashValue + '",';

                    if(cassetestatus == "1")
                    {
                        selectionString += '"localClass" : "withdrawalOthers",';
                        selectionString += '"enable" : "1",';
                    }
                    else
                    {
                        selectionString += '"localClass" : "withdrawalDisableOthers",';
                        selectionString += '"enable" : "0",';
                    }

                    selectionString += '"setters" : {';
                    selectionString += '"interNaviData" : "' + "" + '",';
                    selectionString += '"forexCashValue" : "' + cashValue + '",';
                    selectionString += '"forexCashDesc" : "' + description + '",';
                    selectionString += '"forexCurrency" : "' + currency + '",';
                    selectionString += '"DISPLAYLABEL" : "' + description + " " + cashValue + '",';
                    selectionString += '"TOTALWITHDRAWALAMT" : "' + "0" + '",';

                    switch(currency)
                    {
                        case "USD":
                            selectionString += '"CURRENCY" : "' + "51" + '",';
                            selectionString += '"@CURRENCY" : "' + "51" + '"';
                            break;
                        case "HKD":
                            selectionString += '"CURRENCY" : "' + "52" + '",';
                            selectionString += '"@CURRENCY" : "' + "52" + '"';
                            break;
                        case "YEN":
                            selectionString += '"CURRENCY" : "' + "53" + '",';
                            selectionString += '"@CURRENCY" : "' + "53" + '"';
                            break;
                        case "RMB":
                            selectionString += '"CURRENCY" : "' + "59" + '",';
                            selectionString += '"@CURRENCY" : "' + "59" + '"';
                            break;
                        default :
                            selectionString += '"CURRENCY" : "' + currency + '",';
                            selectionString += '"@CURRENCY" : "' + currency + '"';
                            break;
                    }

                    selectionString += '}';
                    selectionString += '}';

                    arrSelections.push($.parseJSON(selectionString));
                }
			});

			return arrSelections;
		},


		getBankListNameByID : function(val)
		{
			var cdiVal = ACCoreJS.GetUCDIString("BANKID_LIST");
			var xmlDoc = $.parseXML(cdiVal);
			var name = "";
			var obj;

			var obj = $(xmlDoc).find("bank").filter(function()
			{
				return $(this).find("bankId").text() === val;
			});



			return $(obj).find("bankName").text();
		},

		processPaymentBankListDisplay :function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("BANKID_LIST");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			// ACCoreJS.Trace("BANK LIST = " + cdiVal);

			$(xmlDoc).find("bank").each(function(index, value)
			{
				bankId = $(this).find("bankId").text();
				bankName = $(this).find("bankName").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"label1" : "' + bankId + '",';
				selectionString += '"label2" : "' + bankName + '",';

				selectionString += '"setters" : {';
				selectionString += '"TRBKNAME" : "' + bankName + '",';
				selectionString += '"TRBKID" : "' + bankId + '"';

				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			// alert("problem?");

			return arrSelections;
		},
		processOthersSetupTransfetAcct : function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});

			$(xmlDoc).find("to").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				bankName = ACLib.getBankListNameByID(bankId);
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "" + '",';
				selectionString += '"nextScreenTemplate" : "' + "" + '",';
				selectionString += '"nextScreenID" : "' + "" + '",';

				selectionString += '"localClass" : "' + "withdrawalAccountDisable" + '",';
				selectionString += '"enable" : "0",';

				selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
				selectionString += '"label3" : "' + accountNumber + '"';

				selectionString += '}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processOthersReturnRemoveTransfetAcct : function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});

			$(xmlDoc).find("to").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				bankName = ACLib.getBankListNameByID(bankId);
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "interNavi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
				selectionString += '"nextScreenID" : "' + "TRX_REQ_OTHERS_REMOVE_TRANSFER_ACCT" + '",';

				selectionString += '"localClass" : "' + "withdrawalAccount" + '",';

				selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
				selectionString += '"label3" : "' + accountNumber + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TOACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "' + "SAC" + '",';
				selectionString += '"@TXCODE" : "' + "SAC" + '",';
				selectionString += '"@TXNAME" : "' + "SAC" + '",';
				selectionString += '"@SACEX" : "' + "02" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '",';
				selectionString += '"TXCODE" : "' + "SAC" + '",';
				selectionString += '"@TRTXACC" : "' + accountNumber + '",';
				selectionString += '"@TRBKID" : "' + bankId + '",';
				selectionString += '"TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRBKID" : "' + bankId + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processDepositToOtherAcct : function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});

			$(xmlDoc).find("to").find("account").each(function(index, value)
			{
				if($(this).find("bankId").text() == "808")
				{
					accountNumber = $(this).find("no").text();
					bankId = $(this).find("bankId").text();
					bankName = ACLib.getBankListNameByID(bankId);
					selectionString = "";

					selectionString = ' { ';
					selectionString += '"naviType" : "' + "navi" + '",';
					selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
					selectionString += '"nextScreenID" : "' + "CONDITION_VERIFY_DEPOSIT_TRXACCT_IS_VIRTUALACCT" + '",';

					selectionString += '"localClass" : "' + "withdrawalAccount" + '",';

					selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
					selectionString += '"label3" : "' + accountNumber + '",';

					// selectionString += '"EJ" : [';
					// selectionString += '"USER SELECT TOACC: ' + bankId + '-' + accountNumber + '"';
					// selectionString += '],';

					selectionString += '"setters" : {';
					selectionString += '"interNaviData" : "' + "QNM" + '",';
					selectionString += '"@TXCODE" : "' + "QNM" + '",';
					selectionString += '"@TXNAME" : "' + "QNM" + '",';
					selectionString += '"@DEPEX" : "' + "02" + '",';
					selectionString += '"DEPEX" : "' + "02" + '",';
					selectionString += '"@MSGTYP" : "' + "C2" + '",';
					selectionString += '"TXCODE" : "' + "QNM" + '",';
					selectionString += '"@TRTXACC" : "' + accountNumber + '",';
					selectionString += '"@TRBKID" : "' + bankId + '",';
					selectionString += '"TRTXACC" : "' + accountNumber + '",';
					selectionString += '"TRBKID" : "' + bankId + '"';
					selectionString += '}}';

					arrSelections.push($.parseJSON(selectionString));
				}
			});

			return arrSelections;
		},

		ProcessTransactionSummaryStateFormData : function (object)
		{
			var newObj = [];

			// _.each(object.get("summary") , function(summaryItem)
			// {
				// var prefix = "";
				// var valKey = "";
				// var val = "";
				// var tmpOb = {};
//
				// $.each(summaryItem , function(key , value)
				// {
					// prefix = String(value).charAt(0);
//
//
//
					// switch(prefix)
					// {
						// case "@":
						// //UCDIString
							// valKey = String(value).substring(1 , String(value).length);
							// val = ACCoreJS.GetUCDIString(valKey);
							// break;
						// case "&":
						// //UCDIINT
							// valKey = String(value).substring(1 , String(value).length);
							// val = ACCoreJS.GetUCDIIntegar(valKey);
							// break;
						// case "#":
						// //COMString
							// valKey = String(value).substring(1 , String(value).length);
							// val = ACCoreJS.GetComString(valKey);
							// break;
						// case "%":
						// //ComInt
							// valKey = String(value).substring(1 , String(value).length);
							// val = ACCoreJS.GetComInt(valKey);
							// break;
						// case "{":
								// if(String(value).lastIndexOf('}') > 0)
								// {
									// valKey = String(value).substring(1 , String(value).length - 1);
									// val = app.DS.Get(valKey);
								// }
								// else
								// {
									// val = value;
								// }
//
							// break;
						// default:
							// // valKey = item;
							// val = value;
							// break;
					// }
//
					// tmpOb[key] = val;
//
//
//
				// });
//
//
//
				// newObj.push(tmpOb);
			// });

				var prefix = "";
				var valKey = "";
				var val = "";
				var tmpOb = {};
				var oriKey = "";
				var incomplete = 1;

			_.each(object.get("summary") , function(summaryItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;

				$.each(summaryItem , function(key , value)
				{
					incomplete = 1;

					do
					{
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1)
						{
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[&') > -1)
						{
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[#') > -1)
						{
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('[%') > -1)
						{
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('{') > -1)
						{
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else
						{

							incomplete = 0;
						}


					}while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";
				});



				newObj.push(tmpOb);
			});

			if(typeof object.get("idNo") != "undefined")
			{
				var idNo = object.get("idNo");
				idNo.label =  ACCoreJS.GetUCDIString(String(idNo.key).substring(1 , String(idNo.key).length));
			}

			object.set("summaryData" ,newObj);
		},

		filterESBSS8CreditCardStateData : function()
		{
			ACCoreJS.Trace("*** filterESBSS8CreditCardStateData ***");
			var xmlData = Base64.decode(app.DS.get("DOList"));
			var xmlDoc = $.parseXML(xmlData);
			ACCoreJS.Trace("Before Filter Counter : " + $(xmlDoc).find("DO").length);
			$(xmlDoc).find("DO").each(function(index, value)
			{
				if($(this).find("TP12").text() != "01")
				{
					$(this).remove();
				}
			});
			ACCoreJS.Trace("After Filter Counter : " + $(xmlDoc).find("DO").length);
			// ACCoreJS.Trace(new XMLSerializer().serializeToString(xmlDoc));

			app.DS.update({"DOList" : Base64.encode(new XMLSerializer().serializeToString(xmlDoc))});
		},

		processTransactionSummaryDynamicData : function (object)
		{
			var xmlData = "";
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionName = "";
			var paramsArry = [];

			if(object.get("summaryDynamic")["setterKeyMode"] == "base64")
				xmlData = Base64.decode(app.DS.get(object.get("summaryDynamic")["setterKey"]));
			else
				xmlData = app.DS.get(object.get("summaryDynamic")["setterKey"]);

			var xmlDoc = $.parseXML(xmlData);
			var parentThis;

			$(xmlDoc).find(object.get("summaryDynamic")["xmlParentElement"]).each(function(index, value)
			{
				parentThis = this;

				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;

				$.each(object.get("summaryDynamic")["summaryTemplateKey"] , function(key , value)
				{
					incomplete = 1;

					do
					{
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1)
						{
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[&') > -1)
						{
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[#') > -1)
						{
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('[%') > -1)
						{
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('{') > -1)
						{
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[<') > -1)
						{
							oriKey = value.substring(value.indexOf('[<')  , value.indexOf(']') + 1);
							functionName = value.substring(value.indexOf('[<') + 2 , value.indexOf('>' , value.indexOf('[<')));
							paramsArry = value.substring(value.indexOf('[<'+functionName+'>') + String('[<'+functionName+'>').length  , value.indexOf(']')).split(',');

							// ACCoreJS.Trace("ORIGINAL : " + oriKey + ": " + functionName + " : " + JSON.stringify(paramsArry));

							for(var i = 0 ; i < paramsArry.length ; i++)
							{
								paramsArry[i] = $(parentThis).find(String(paramsArry[i])).text();
							}

							val = ACLib[functionName](paramsArry);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , String(val).trim());
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('<') > -1)
						{
							oriKey = value.substring(value.indexOf('<') , value.indexOf('>' , value.indexOf('<'))+ 1);
							valKey = value.substring(value.indexOf('<') + 1 , value.indexOf('>' , value.indexOf('<')));

							val = $(parentThis).find(valKey).text();

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , String(val).trim());
							else
								value = value.replace(oriKey , "");
						}
						else
						{

							incomplete = 0;
						}


					}while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);

			});

			object.set("summaryData" ,newObj);

			// _.each(object.get("summary") , function(summaryItem)
			// {
			// 	prefix = "";
			// 	valKey = "";
			// 	val = "";
			// 	tmpOb = {};
			// 	oriKey = "";
			// 	incomplete = 1;

			// 	$.each(summaryItem , function(key , value)
			// 	{
			// 		incomplete = 1;

			// 		do
			// 		{
			// 			value = String(value);
			// 			oriKey = "";
			// 			valKey = "";
			// 			val = "";

			// 			if(value.indexOf('[@') > -1)
			// 			{
			// 				oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
			// 				valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

			// 				val = ACCoreJS.GetUCDIString(valKey);
			// 				if(typeof val != "undefined" && val != "undefined")
			// 					value = value.replace(oriKey , val);
			// 				else
			// 					value = value.replace(oriKey , "");

			// 			}
			// 			else if(value.indexOf('[&') > -1)
			// 			{
			// 				oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
			// 				valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

			// 				val = ACCoreJS.GetUCDIIntegar(valKey);
			// 				if(typeof val != "undefined" && val != "undefined")
			// 					value = value.replace(oriKey , val);
			// 				else
			// 					value = value.replace(oriKey , "");

			// 			}
			// 			else if(value.indexOf('[#') > -1)
			// 			{
			// 				oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
			// 				valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

			// 				val = ACCoreJS.GetComString(valKey);
			// 				if(typeof val != "undefined" && val != "undefined")
			// 					value = value.replace(oriKey , val);
			// 				else
			// 					value = value.replace(oriKey , "");
			// 			}
			// 			else if(value.indexOf('[%') > -1)
			// 			{
			// 				oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
			// 				valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

			// 				val = ACCoreJS.GetComInt(valKey);
			// 				if(typeof val != "undefined" && val != "undefined")
			// 					value = value.replace(oriKey , val);
			// 				else
			// 					value = value.replace(oriKey , "");
			// 			}
			// 			else if(value.indexOf('{') > -1)
			// 			{
			// 				oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
			// 				valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

			// 				val = app.DS.Get(valKey);
			// 				if(typeof val != "undefined" && val != "undefined")
			// 					value = value.replace(oriKey , val);
			// 				else
			// 					value = value.replace(oriKey , "");
			// 			}
			// 			else
			// 			{

			// 				incomplete = 0;
			// 			}


			// 		}while(incomplete > 0);

			// 		if(typeof value != "undefined" && value != "undefined")
			// 			tmpOb[key] = value;
			// 		else
			// 			tmpOb[key] = "";
			// 	});



			// 	newObj.push(tmpOb);
			// });

			// if(typeof object.get("idNo") != "undefined")
			// {
			// 	var idNo = object.get("idNo");
			// 	idNo.label =  ACCoreJS.GetUCDIString(String(idNo.key).substring(1 , String(idNo.key).length));
			// }

			// object.set("summaryData" ,newObj);
		},

		ProcessCashInSummaryStateFormData : function(object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var idNo = object.get("oriIdNo");
			var totalAmt = 0;
			var eachTotalAmt = 0;
			var ejStr = "";
			var ejArry = [];

			//Retrieve Notes 100
			if(ACCoreJS.GetATMCIsNoteTypesActive("100")  == true)
			{
				tmpOb = {};
				tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "100";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("100");
				tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("100");

				ACCoreJS.Trace("Notes Entered 100 : " + ACCoreJS.GetATMCNotesEntered("100"));
				ACCoreJS.Trace("Last Notes Entered 100 : " + ACCoreJS.GetATMCLatestNotesEntered("100"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 100 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$100 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("200")  == true)
			{
				tmpOb = {};
				tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "200";
				// tmpOb["label1"] = "NT$ 200";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("200");
				tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("200");

				ACCoreJS.Trace("Notes Entered 200 : " + ACCoreJS.GetATMCNotesEntered("200"));
				ACCoreJS.Trace("Last Notes Entered 200 : " + ACCoreJS.GetATMCLatestNotesEntered("200"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 200 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$200 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("500")  == true)
			{
				tmpOb = {};
				tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "500";
				// tmpOb["label1"] = "NT$ 500";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("500");
				tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("500");

				ACCoreJS.Trace("Notes Entered 500 : " + ACCoreJS.GetATMCNotesEntered("500"));
				ACCoreJS.Trace("Last Notes Entered 500 : " + ACCoreJS.GetATMCLatestNotesEntered("500"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 500 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$500 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("1000")  == true)
			{
				tmpOb = {};
				tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "1,000";
				// tmpOb["label1"] = "NT$ 1,000";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("1000");
				tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("1000");

				ACCoreJS.Trace("Notes Entered 1000 : " + ACCoreJS.GetATMCNotesEntered("1000"));
				ACCoreJS.Trace("Last Notes Entered 1000 : " + ACCoreJS.GetATMCLatestNotesEntered("1000"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 1000 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$1000 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("2000")  == true)
			{
				tmpOb = {};
				tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "2,000";

				// tmpOb["label1"] = "NT$ 2,000";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("2000");
				tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("2000");

				ACCoreJS.Trace("Notes Entered 2000 : " + ACCoreJS.GetATMCNotesEntered("2000"));
				ACCoreJS.Trace("Last Notes Entered 2000 : " + ACCoreJS.GetATMCLatestNotesEntered("2000"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 2000 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$2000 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			tmpOb = {};
			tmpOb["label1"] = "";
			tmpOb["label2"] = "";
			tmpOb["label3"] = "合計存入金額";
			tmpOb["label4"] = "NT$ " + this.formatCashInCurrenyAmt(totalAmt);
			tmpOb["localClass"] = "depositTotal";

			ejStr = "TOTAL AMT: " + String(totalAmt);
			ejArry.push(ejStr);

			newObj.push(tmpOb);

			tmpOb = {};
			tmpOb["label1"] = "您輸入的金額為";
			tmpOb["label2"] = "";
			tmpOb["label3"] = "";
			tmpOb["label4"] = "NT$ " + this.formatCashInCurrenyAmt(app.DS.Get('INPUTAMT'));
			tmpOb["localClass"] = "depositSummary";

			newObj.push(tmpOb);

			tmpOb = {};
			tmpOb["label1"] = "實際放入的金額為";
			tmpOb["label2"] = "";
			tmpOb["label3"] = "";
			tmpOb["label4"] = "NT$ " + this.formatCashInCurrenyAmt(totalAmt);
			tmpOb["localClass"] = "depositSummary";

			newObj.push(tmpOb);

			ACLib.EJLogging(ejArry);

			app.DS.update({'TXAMT' : totalAmt});

			// object.set("idNo", ACCoreJS.GetUCDIString(String(idNo).substring(1 , String(idNo).length)));
			object.set("idNo", ACLib.ProcessSingleLabelData(idNo));
			object.set("summary" ,newObj);
		},

		ProcessHNCBCashInSummaryStateFormData : function(object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var idNo = object.get("oriIdNo");
			var totalAmt = 0;
			var eachTotalAmt = 0;
			var ejStr = "";
			var ejArry = [];


			tmpOb = {};
			tmpOb["label1"] = "繳款金額";
			tmpOb["label2"] = this.formatCashInCurrenyAmt(app.DS.Get('paymentAmt')) + " 元";
			tmpOb["label3"] = "";
			tmpOb["label4"] = "";
			tmpOb["localClass"] = "depositHeader";

			newObj.push(tmpOb);

			//Retrieve Notes 100
			if(ACCoreJS.GetATMCIsNoteTypesActive("100")  == true)
			{
				tmpOb = {};
				// tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "100 元" ;
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("100") + " 張";
				// tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("100");

				ACCoreJS.Trace("Notes Entered 100 : " + ACCoreJS.GetATMCNotesEntered("100"));
				ACCoreJS.Trace("Last Notes Entered 100 : " + ACCoreJS.GetATMCLatestNotesEntered("100"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 100 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				// tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$100 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("200")  == true)
			{
				tmpOb = {};
				// tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "200 元";
				// tmpOb["label1"] = "NT$ 200";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("200") + " 張";
				// tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("200");

				ACCoreJS.Trace("Notes Entered 200 : " + ACCoreJS.GetATMCNotesEntered("200"));
				ACCoreJS.Trace("Last Notes Entered 200 : " + ACCoreJS.GetATMCLatestNotesEntered("200"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 200 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				// tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$200 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("500")  == true)
			{
				tmpOb = {};
				// tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "500 元";
				// tmpOb["label1"] = "NT$ 500";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("500") + " 張";
				// tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("500");

				ACCoreJS.Trace("Notes Entered 500 : " + ACCoreJS.GetATMCNotesEntered("500"));
				ACCoreJS.Trace("Last Notes Entered 500 : " + ACCoreJS.GetATMCLatestNotesEntered("500"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 500 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				// tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$500 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("1000")  == true)
			{
				tmpOb = {};
				// tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "1,000 元";
				// tmpOb["label1"] = "NT$ 1,000";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("1000") + " 張";
				// tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("1000");

				ACCoreJS.Trace("Notes Entered 1000 : " + ACCoreJS.GetATMCNotesEntered("1000"));
				ACCoreJS.Trace("Last Notes Entered 1000 : " + ACCoreJS.GetATMCLatestNotesEntered("1000"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 1000 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				// tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$1000 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("2000")  == true)
			{
				tmpOb = {};
				// tmpOb["label1a"] = "NT$";
				tmpOb["label1"] = "2,000 元";

				// tmpOb["label1"] = "NT$ 2,000";
				tmpOb["label2"] = ACCoreJS.GetATMCNotesEntered("2000") + " 張";
				// tmpOb["label3"] = ACCoreJS.GetATMCLatestNotesEntered("2000");

				ACCoreJS.Trace("Notes Entered 2000 : " + ACCoreJS.GetATMCNotesEntered("2000"));
				ACCoreJS.Trace("Last Notes Entered 2000 : " + ACCoreJS.GetATMCLatestNotesEntered("2000"));
				// ACCoreJS.Trace("label2 : " + tmpOb["label2"]);
				// ACCoreJS.Trace("label3 : " + tmpOb["label3"]);

				eachTotalAmt = 2000 * parseInt(tmpOb["label2"]);
				totalAmt += eachTotalAmt;
				// tmpOb["label4"] = this.formatCashInCurrenyAmt(eachTotalAmt);
				tmpOb["localClass"] = "depositBreakdown";

				if(parseInt(tmpOb["label2"]) > 0)
				{
					ejStr = "$2000 * " + String(tmpOb["label2"]);
					ejArry.push(ejStr);
				}

				newObj.push(tmpOb);
			}

			tmpOb = {};
			// tmpOb["label1"] = "";
			// tmpOb["label2"] = "";
			tmpOb["label1"] = "";
			tmpOb["label2"] = "合計 " + this.formatCashInCurrenyAmt(totalAmt) + " 元";
			tmpOb["localClass"] = "depositTotal";

			ejStr = "TOTAL AMT: " + String(totalAmt);
			ejArry.push(ejStr);

			newObj.push(tmpOb);

			if(parseInt(totalAmt) - parseInt(app.DS.Get('paymentAmt')) >= 0)
			{
				tmpOb = {};
				// tmpOb["label1"] = "";
				// tmpOb["label2"] = "";
				tmpOb["label1"] = "找零金額";
				tmpOb["label2"] = this.formatCashInCurrenyAmt(app.DS.Get('BALANCEAMT')) + " 元";
				tmpOb["localClass"] = "depositBalance";

				ejStr = "BALANCE AMT: " + String(totalAmt);
				ejArry.push(ejStr);

				newObj.push(tmpOb);
			}

			// tmpOb = {};
			// tmpOb["label1"] = "實際放入的金額為";
			// tmpOb["label2"] = "";
			// tmpOb["label3"] = "";
			// tmpOb["label4"] = "NT$ " + this.formatCashInCurrenyAmt(totalAmt);
			// tmpOb["localClass"] = "depositSummary";

			// newObj.push(tmpOb);

			ACLib.EJLogging(ejArry);

			app.DS.update({'TXAMT' : totalAmt});

			// object.set("idNo", ACCoreJS.GetUCDIString(String(idNo).substring(1 , String(idNo).length)));
			object.set("idNo", ACLib.ProcessSingleLabelData(idNo));
			object.set("summary" ,newObj);
		},

		getESBSS8KioskCashInAmt : function()
		{
			var totalAmt = 0;
			var eachTotalAmt = 0;
			var paymentAmt = parseInt(app.DS.Get("paymentAmt"));

			totalAmt = parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"));

			//Retrieve Notes 100
			// if(ACCoreJS.GetATMCIsNoteTypesActive("100")  == true)
			// {
			// 	eachTotalAmt = 100 * parseInt(ACCoreJS.GetATMCNotesEntered("100"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("200")  == true)
			// {
			// 	eachTotalAmt = 200 * parseInt(ACCoreJS.GetATMCNotesEntered("200"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("500")  == true)
			// {
			// 	eachTotalAmt = 500 * parseInt(ACCoreJS.GetATMCNotesEntered("500"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("1000")  == true)
			// {
			// 	eachTotalAmt = 1000 * parseInt(ACCoreJS.GetATMCNotesEntered("1000"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("2000")  == true)
			// {
			// 	eachTotalAmt = 2000 * parseInt(ACCoreJS.GetATMCNotesEntered("2000"));
			// 	totalAmt += eachTotalAmt;
			// }

			app.DS.update({'TXAMT' : totalAmt});
			app.DS.update({'BAL_TXAMT' : paymentAmt - totalAmt});
		},

		setBalInqInitPoint : function()
		{
			app.DS.update({"nextIntiPoint" : "navi/conditionState/CONDITION_BALINQ_ACCTLIST" });
			//ACCoreJS.Trace("setTransferInitPoint : " +JSON.stringify(app.DS.Get("nextIntiPoint")));
		},

		setTransferInitPoint : function()
		{
			app.DS.update({"nextIntiPoint" : "navi/sixBtnMenuState/SIXBTN_OTHERS_SETUP_TRANSFERTO_ACCT" });
			//ACCoreJS.Trace("setTransferInitPoint : " + JSON.stringify(app.DS.Get("nextIntiPoint")));
		},

		setChaingTrxInitPoint : function()
		{
			var initPoint = app.DS.Get("nextIntiPoint");

			ACCoreJS.setCookie("ACINITPOINTEXIST" , "1");
			ACCoreJS.setCookie("ACINITNAVIPOINT" , initPoint);
			ACCoreJS.SetUCDIStr("ACINITPOINTEXIST" , "CONTTRX");

			ACCoreJS.Trace("ACINITPOINTEXIST : " + ACCoreJS.getCookie("ACINITPOINTEXIST") );
			ACCoreJS.Trace("ACINITNAVIPOINT : " + ACCoreJS.getCookie("ACINITNAVIPOINT") );
		},

		searchBankIDandSetBankName : function()
		{
			var bkID = app.DS.Get("BKID");
			ACCoreJS.Trace("BANKID : " + bkID);
			var bkName = ACLib.getBankListNameByID(bkID);

			app.DS.update({ "BKNAME" : bkName });
			ACCoreJS.Trace("SET BKNAME : " + bkName);
		},

		processCreditCardStatementAcctNumber : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("R_ATM_PAYNO");

			app.DS.update({ "TRTXACC" : cdiVal });
			ACCoreJS.SetUCDIStr("TRTXACC" , cdiVal);
			//ACCoreJS.Trace("SET TRTXACC : " + cdiVal);

			app.DS.update({ "TRBKID" : "808" });
			ACCoreJS.SetUCDIStr("TRBKID" , "808");
			//ACCoreJS.Trace("SET TRBKID : " + "808");
		},

		processForexAmtCalculation : function()
		{
			var inputValue = app.DS.Get("current+Input+Value");
			var cashValue = app.DS.Get("forexCashValue");

			var afterCalculatVal = parseInt(inputValue) * parseInt(cashValue);

			if(isNaN(parseInt(afterCalculatVal)))
			{
				afterCalculatVal= 0;
			}

			app.DS.update({ "TOTALWITHDRAWALAMT" : FormatInput.currency(afterCalculatVal) });
			app.DS.update({ "TXAMT" : afterCalculatVal });
			//ACCoreJS.Trace("SET TOTALWITHDRAWALAMT : " + FormatInput.currency(afterCalculatVal));
		},

		processCurrencyFormat : function (val)
		{
			return FormatInput.currency(val);
		},

		searchTrfBankIDandSetBankName : function()
		{
			var bkID = app.DS.Get("TRBKID");
			var bkName = ACLib.getBankListNameByID(bkID);

			app.DS.update({ "TRBKNAME" : bkName });
			ACCoreJS.Trace("SET TRBKNAME : " + bkName);
		},

		searchFavBankIDandSetBankName : function()
		{
			var bkID = app.DS.Get("TRBKID");
			var bkName = ACLib.getBankListNameByID(bkID);

			app.DS.update({ "favlabel2" : bkName });

		},

		setTransferAmountIntoFavLbl : function()
		{
			var TXAMT = app.DS.Get("TXAMT");

			app.DS.update({ "favlabel3" : "NT$ " + this.formatCurrenyAmt(TXAMT) });
		},

		processDepositAcctData :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var bankName = "";
			var selectionString = "";
			var account = $(xmlDoc).find("from").find("account");

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(account).each(function(index, value) {
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				bankName = ACLib.getBankListNameByID(bankId);
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "conditionState",';
				selectionString += '"nextScreenID" : "CONDITION_VERIFY_GBRU_TRXACCT_IS_VIRTUALACCT",';

				selectionString += '"localClass" : "' + "withdrawalAccount" + '",';

				selectionString += '"label1" : "' + bankId + " - " + bankName + '",';
				selectionString += '"label3" : "' + accountNumber + '",';


				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TOACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "QNM",';
				selectionString += '"TXCODE" : "QNM",';
				selectionString += '"@TXCODE" : "QNM",';
				selectionString += '"@TXNAME" : "QNM",';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"TRTXACC" : "' + accountNumber + '",';
				selectionString += '"@TRTXACC" : "' + accountNumber + '",';
				selectionString += '"TRBKID" : "' + bankId + '",';
				selectionString += '"@TRBKID" : "' + bankId + '",';
				selectionString += '"DEPEX" : "' + "01" + '",';
				selectionString += '"@DEPEX" : "' + "01" + '",';
				selectionString += '"MSGTYP" : "C2",';
				selectionString += '"@MSGTYP" : "C2"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		GetDepositTotal : function()
		{
			var totalAmt = 0;
			var eachTotalAmt = 0;
			//Retrieve Notes 100
			if(ACCoreJS.GetATMCIsNoteTypesActive("100")  == true) {
				eachTotalAmt = 100 * parseInt(ACCoreJS.GetATMCNotesEntered("100"));
				totalAmt += eachTotalAmt;
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("200")  == true) {
				eachTotalAmt = 200 * parseInt(ACCoreJS.GetATMCNotesEntered("200"));
				totalAmt += eachTotalAmt;
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("500")  == true) {
				eachTotalAmt = 500 * parseInt(ACCoreJS.GetATMCNotesEntered("500"));
				totalAmt += eachTotalAmt;
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("1000")  == true) {
				eachTotalAmt = 1000 * parseInt(ACCoreJS.GetATMCNotesEntered("1000"));
				totalAmt += eachTotalAmt;
			}

			if(ACCoreJS.GetATMCIsNoteTypesActive("2000")  == true) {
				eachTotalAmt = 2000 * parseInt(ACCoreJS.GetATMCNotesEntered("2000"));
				totalAmt += eachTotalAmt;
			}



			return totalAmt;
		},

		esbSS8RemoveValIfIsNotBarCodeTx : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODE":
					returnVal = val;
					break;
				case "NATIONALID":
					returnVal = "";
					break;
				case "CREDITCARDNUMBER":
					returnVal = "";
					break;
			}

			return returnVal;
		},

		esbSS8RemoveValIfIsCCIDTx : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');

			ACCoreJS.Trace("esbSS8RemoveValIfIsCCIDTx : INPUTTYPE >>> " + INPUTTYPE);

			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODE":
					returnVal = "";
					break;
				case "NATIONALID":
					returnVal = "";
					break;
				case "CREDITCARDNUMBER":
					returnVal = val;
					break;
				case "VIRTUALACCT":
					returnVal = "";
					break;
			}

			return returnVal;
		},

		esbSS8RemoveValIfIsNotVirtualAcctIDTx : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');

			ACCoreJS.Trace("esbSS8RemoveValIfIsNotVirtualAcctIDTx : INPUTTYPE >>> " + INPUTTYPE);

			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODE":
					returnVal = "";
					break;
				case "NATIONALID":
					returnVal = "";
					break;
				case "CREDITCARDNUMBER":
					returnVal = "";
					break;
				case "VIRTUALACCT":
					returnVal = val;
					break;
			}

			return returnVal;
		},

		esbSS8RemoveValIfIsNotCCIDTx : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODE":
					returnVal = val;
					break;
				case "NATIONALID":
					returnVal = val;
					break;
				case "CREDITCARDNUMBER":
					returnVal = "";
					break;
				case "VIRTUALACCT":
					returnVal = val;
					break;
			}

			return returnVal;
		},

		esbSS8RemoveValIfIsBarCodeTx : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODE":
					returnVal = "";
					break;
				case "NATIONALID":
					returnVal = val;
					break;
				case "CREDITCARDNUMBER":
					returnVal = "";
					break;
			}

			return returnVal;
		},

		formatCurrenyAmt : function(val)
		{
			if(typeof val != "undefined")
			{
				if(Number(val) == 0)
					return "0";
				else
					return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			}
			else
				return "";

		},

		formatCashInCurrenyAmt : function(val)
		{
			if(typeof val != "undefined")
			{
				if(Number(val) == 0)
					return "0";
				else
					return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			}
			else
				return "0";

		},

		appendToFullLenAcctNum : function(val)
		{
			var totalLen = 16;
			var result = val;
			for(var i = val.length ; i < totalLen ; i++)
			{
				result = "0" + result;
			}

			return result;
		},

		appendCashAmtTo11Digit : function(val)
		{
			var totalLen = 11;
			var result = String(val) + "00";
			var tmp = "";

			ACCoreJS.Trace("appendCashAmtTo11Digit : val >>> " + val);
			ACCoreJS.Trace("appendCashAmtTo11Digit : result >>> " + result);

			for(var i = result.length ; i < totalLen ; i++)
			{
				tmp += "0";
			}

			ACCoreJS.Trace("appendCashAmtTo11Digit : tmp >>> " + tmp);
			ACCoreJS.Trace("appendCashAmtTo11Digit : Finalresult >>> " + tmp + result);

			return tmp + result;
		},

		convertTaxIDNumber : function(val)
		{
			var amendVal;

			switch(val.toString().charAt(0))
			{
				case "A":
					amendVal = "10";
					break;
				case "B":
					amendVal = "11";
					break;
				case "C":
					amendVal = "12";
					break;
				case "D":
					amendVal = "13";
					break;
				case "E":
					amendVal = "14";
					break;
				case "F":
					amendVal = "15";
					break;
				case "G":
					amendVal = "16";
					break;
				case "H":
					amendVal = "17";
					break;
				case "I":
					amendVal = "34";
					break;
				case "J":
					amendVal = "18";
					break;
				case "K":
					amendVal = "19";
					break;
				case "L":
					amendVal = "20";
					break;
				case "M":
					amendVal = "21";
					break;
				case "N":
					amendVal = "22";
					break;
				case "O":
					amendVal = "35";
					break;
				case "P":
					amendVal = "23";
					break;
				case "Q":
					amendVal = "24";
					break;
				case "R":
					amendVal = "25";
					break;
				case "S":
					amendVal = "26";
					break;
				case "T":
					amendVal = "27";
					break;
				case "U":
					amendVal = "28";
					break;
				case "V":
					amendVal = "29";
					break;
				case "W":
					amendVal = "32";
					break;
				case "X":
					amendVal = "30";
					break;
				case "Y":
					amendVal = "31";
					break;
				case "Z":
					amendVal = "33";
					break;
				default:
					amendVal = val.toString().charAt(0);
					break;
			}

			return amendVal + val.toString().substring(1);
		},



		playEjectAlertBeep : function()
		{
			// setTimeout(function()
			// {
				// cardEjectBeeper = setInterval(function(){
					// ACCoreJS.TimeOutBeep();
				// },250);
			// } , 5000);

		},

		stopEjectAlertBeep : function()
		{
			// clearInterval(cardEjectBeeper);
		},

		processDisplayErrorMsg : function(oriData)
		{
			var conditions = oriData.conditions;
			var status = true;
			var errorCode = ACCoreJS.GetUCDIString("R_DSPMSG");


			var foundItem =  _.filter(ATMCErrorCodeData , function(item)
			{
				if(errorCode == item.code)
				{
					ACCoreJS.Trace("Status Code : " + item.code);
					ACCoreJS.Trace("Status Desc : " + item.description);
					app.DS.update({"R_DSPMSG": item.description});
					return item;
				}
			});

			if(foundItem.length > 0 && typeof foundItem[0].code != "undefined")
			{
				oriData["display"] = "1";
				oriData["label1"] = this.ProcessSingleLabelData(conditions[0].label1);
				oriData["label2"] = this.ProcessSingleLabelData(conditions[0].label2);
				oriData["label3"] = this.ProcessSingleLabelData(conditions[0].label3);
				oriData["label4"] = this.ProcessSingleLabelData(conditions[0].label4);
				oriData["label5"] = this.ProcessSingleLabelData(conditions[0].label5);
				oriData["label6"] = this.ProcessSingleLabelData(conditions[0].label6);


			}
			else
			{
				oriData["display"] = "0";
				oriData["label1"] = "";
				oriData["label2"] = "";
				oriData["label3"] = "";
				oriData["label4"] = "";
				oriData["label5"] = "";
				oriData["label6"] = "";
			}

			return oriData;
		},

		processFavoriteLength : function(oriData)
		{
			var conditions = oriData.conditions;
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();

			if(count >= 6)
			{
				oriData["display"] = "1";
				oriData["label1"] = this.ProcessSingleLabelData(conditions[0].label1);
				oriData["label2"] = this.ProcessSingleLabelData(conditions[0].label2);
				oriData["label3"] = this.ProcessSingleLabelData(conditions[0].label3);
				oriData["label4"] = this.ProcessSingleLabelData(conditions[0].label4);
				oriData["label5"] = this.ProcessSingleLabelData(conditions[0].label5);
				oriData["label6"] = this.ProcessSingleLabelData(conditions[0].label6);
			}
			else
			{
				oriData["display"] = "0";
				oriData["label1"] = "";
				oriData["label2"] = "";
				oriData["label3"] = "";
				oriData["label4"] = "";
				oriData["label5"] = "";
				oriData["label6"] = "";
			}

			return oriData;

		},

		processAccountDisplayCount : function(oriData)
		{
			var conditions = oriData.conditions;
			var status = true;
			var postValue = ACCoreJS.GetUCDIString("RCT_UNPOSTED");

			// ACCoreJS.Trace("RCT_UNPOSTED : " + postValue);

			if(parseInt(postValue) >= 0 && conditions.length > 0)
			{
				oriData["display"] = "1";
				oriData["label1"] = this.ProcessSingleLabelData(conditions[0].label1);
				oriData["label2"] = this.ProcessSingleLabelData(conditions[0].label2);
				oriData["label3"] = this.ProcessSingleLabelData(conditions[0].label3);
				oriData["label4"] = this.ProcessSingleLabelData(conditions[0].label4);
				oriData["label5"] = this.ProcessSingleLabelData(conditions[0].label5);
				oriData["label6"] = this.ProcessSingleLabelData(conditions[0].label6);
			}
			else
			{
				oriData["display"] = "0";
				oriData["label1"] = "";
				oriData["label2"] = "";
				oriData["label3"] = "";
				oriData["label4"] = "";
				oriData["label5"] = "";
				oriData["label6"] = "";
			}

			return oriData;
		},

		processHardwareNotificationChecking : function(oriData)
		{
			var conditions = oriData.conditions;
			var status = true;

			oriData["display"] = "0";
			oriData["label1"] = "";
			oriData["label2"] = "";
			oriData["label3"] = "";
			oriData["label4"] = "";
			oriData["label5"] = "";
			oriData["label6"] = "";

			$.each(conditions, function(idx, val) {
				var cdiVal = ACCoreJS.GetUCDIString(val.cdistore);
				var cdiValIndexes = val.charIndex.split(",");
				var cdiValConditions = val.condition.split(",");
				status = true;

				$.each(cdiValIndexes, function(i,v){
					if(cdiVal.charAt(parseInt(v)) == cdiValConditions[i]) {
						status = false;
					}
				});

				if(status == true)
				{
					oriData["display"] = "1";
					oriData["label1"] = conditions[idx].label1;
					oriData["label2"] = conditions[idx].label2;
					oriData["label3"] = conditions[idx].label3;
					oriData["label4"] = conditions[idx].label4;
					oriData["label5"] = conditions[idx].label5;
					oriData["label6"] = conditions[idx].label6;
					return false;
				}
			});


			return oriData;
		},

		processHardwareFavoriteNotificationChecking : function(oriData)
		{
			var conditions = oriData.conditions;
			var status = true;

			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();
			var CWDExist = false;
			var DEPExist = false;

			oriData["display"] = "0";
			oriData["label1"] = "";
			oriData["label2"] = "";
			oriData["label3"] = "";
			oriData["label4"] = "";
			oriData["label5"] = "";
			oriData["label6"] = "";

			if(count > 0)
			{
				$(xmlDoc).find("favoriteTransactionList").each(function(index, value)
				{
					switch($(this).find("TXCODE").text())
					{
						case "CWD":
							CWDExist = true;
							break;
						case "DEP":
							DEPExist = true;
							break;
					}
				});

				$.each(conditions, function(idx, val)
				{
					var cdiVal = ACCoreJS.GetUCDIString(val.cdistore);
					var cdiValIndexes = val.charIndex.split(",");
					var cdiValConditions = val.condition.split(",");
					status = true;



					$.each(cdiValIndexes, function(i,v)
					{
						if(v == "1" && cdiVal.charAt(parseInt(v)) != "1" && CWDExist != true)
						{
							status = false;
						}
						else if(v == "2" && cdiVal.charAt(parseInt(v)) != "1" && DEPExist != true)
						{
							status = false;
						}
						else if(cdiVal.charAt(parseInt(v)) == cdiValConditions[i])
						{
							status = false;
						}
					});

					if(status == true)
					{
						oriData["display"] = "1";
						oriData["label1"] = conditions[idx].label1;
						oriData["label2"] = conditions[idx].label2;
						oriData["label3"] = conditions[idx].label3;
						oriData["label4"] = conditions[idx].label4;
						oriData["label5"] = conditions[idx].label5;
						oriData["label6"] = conditions[idx].label6;
						return false;
					}
				});
			}
			return oriData;
		},

		ProcessNotificationData : function (object)
		{
			var valKey = "";
			var val = "";
			var oriKey = "";

			$.each(object.get("notice")["labels"], function(key, value) {
				value = String(value);
				oriKey = "";
				valKey = "";
				val = "";

				if(value.indexOf('[[') > -1)
				{
					oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
					valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

					val = ACLib.ProcessGenericMappingDataText(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				
				if(value.indexOf('[@') > -1) {
					oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
					valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

					val = ACCoreJS.GetUCDIString(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				} else if(value.indexOf('[&') > -1) {
					oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
					valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

					val = ACCoreJS.GetUCDIIntegar(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				} else if(value.indexOf('[#') > -1) {
					oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
					valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

					val = ACCoreJS.GetComString(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				} else if(value.indexOf('[%') > -1) {
					oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
					valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

					val = ACCoreJS.GetComInt(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				} else if(value.indexOf('{') > -1) {
					oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
					valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

					val = app.DS.Get(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}

				object.get("notice")[key] = value;
			});
		},

		LanguageChecking : function(object) {
			//var languageSelected = ACCoreJS.GetUCDIString("LANGUAGESELECTED");
			var languageSelected = app.DS.Get("LANGUAGESELECTED");

			if(typeof languageSelected != "undefined" && languageSelected == "EN") {
				object.get("labels")["label1"] = object.get("labels")["EN"].label1;
				object.get("labels")["label2"] = object.get("labels")["EN"].label2;
				object.get("labels")["label3"] = object.get("labels")["EN"].label3;

				object.set("localClass",  object.get("localClass") + languageSelected);
			} else {
				object.get("labels")["label1"] = object.get("labels")["CH"].label1;
				object.get("labels")["label2"] = object.get("labels")["CH"].label2;
				object.get("labels")["label3"] = object.get("labels")["CH"].label3;
			}
		},

		getResponseCustName : function()
		{
			ACCoreJS.Trace("START GET CUSTOMER NAME FROM CDI");
			var R_NAME = ACCoreJS.GetUCDIString("R_NAME");
			ACCoreJS.Trace("START GET CUSTOMER NAME FROM ATMC");
			var custName = ACCoreJS.IBMtoBig5(R_NAME);
			ACCoreJS.Trace("GET SUCCESS FROM ATMC");

			app.DS.update({"R_NAME" : custName});
		},

		processLabourDetails : function()
		{
			var CDIValue = "";
			var AfterDecodeVal = "";

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO1");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO1" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO2");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO2" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO3");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO3" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO4");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO4" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO5");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO5" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO6");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO6" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO7");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO7" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_MEMO8");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_MEMO8" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT1");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT1" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT2");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT2" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT3");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT3" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT4");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT4" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT5");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT5" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT6");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT6" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT7");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT7" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_UNIT8");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_UNIT8" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_YEAR");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_YEAR" : AfterDecodeVal});

			CDIValue		 	= ACCoreJS.GetUCDIString("RCT_DAYS");
			AfterDecodeVal 		= ACCoreJS.IBMtoBig5(CDIValue);
			app.DS.update({"RCT_DAYS" : AfterDecodeVal});

		},

		setTrack2NumberIntoCDI : function()
		{
			var track2CDI = "2043";
			var cardNo = this.processTrack2Number(ACCoreJS.GetComString(track2CDI));
			var setters = {
					"TRTXACC" : cardNo,
					"@TRTXACC" : cardNo,
					"TRBKID" : "808",
					"@TRBKID" : "808",
					"BKID" : "808",
					"@BKID" : "808"
				};

			app.DS.update(setters);
		},

		ProcessStandardLabelsData : function (object) {
			var newObj = [];
			var tmpOb = {};
			var t = this;
			_.each(object.get("labelsOri") , function(labelsItem) {
				tmpOb = {};
				$.each(labelsItem , function(key , value) {
					value = t.processTransactData(value); //Reduce repeated coding
					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";

				});
				newObj.push(tmpOb);
			});
			object.set("labels" ,newObj);
			t = null;
		},

		ProcessStandardTextAreasData : function (object)
		{

			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object.get("textAreasOri") , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;
				//ACCoreJS.Trace(object)


				$.each(labelsItem , function(key , value)
				{

					incomplete = 1;

					do
					{
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1)
						{
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[&') > -1)
						{
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[#') > -1)
						{
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('[%') > -1)
						{
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[<') > -1)
						{
							functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
							oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
							valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

							if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
							{
								prefix = valKey.charAt(0);
								valKey = valKey.substring(1 , valKey.length);

								switch(prefix)
								{
									case "@":
										val = ACCoreJS.GetUCDIString(valKey);
										break;
									case "&":
										val = ACCoreJS.GetUCDIIntegar(valKey);
										break;
									case "#":
										val = ACCoreJS.GetComString(valKey);
										break;
									case "%":
										val = ACCoreJS.GetComInt(valKey);
										break;
									case "~":
										val = valKey;
										break;

								}
							}
							else
								val = app.DS.Get(valKey);


							val = ACLib[functionProcessName](val);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('{') > -1)
						{
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else
						{

							incomplete = 0;
						}


					}while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";

				});


				newObj.push(tmpOb);
			});



			object.set("textAreas" ,newObj);
		},

		ProcessNoticeOriModel : function(object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			// _.each(object , function(labelsItem)
			// {
			// 	prefix = "";
			// 	valKey = "";
			// 	val = "";
			// 	tmpOb = {};
			// 	oriKey = "";

			$.each(object , function(key , value)
			{

				if(typeof value != "undefined" && value != "undefined")
					tmpOb[key] = ACLib.processTransactData(value);
				else
					tmpOb[key] = "";
			});

			// 	newObj.push(tmpOb);
			// });

			return tmpOb;
		},

		ProcessDeviceActionFirstRenderImage : function(parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				$.each(labelsItem , function(key , value)
				{

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = ACLib.processTransactData(value);
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);
			});

			parent.set("images" , newObj);
		},

		ProcessDeviceActionScanImage : function(parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				$.each(labelsItem , function(key , value)
				{

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = ACLib.processTransactData(value);
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);
			});

			parent["images"] = newObj;
		},

		ProcessGenericImages : function(parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				$.each(labelsItem , function(key , value)
				{

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = ACLib.processTransactData(value);
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);
			});

			parent.set("images" ,newObj);
		},

		ProcessGenericStandardLabelsData : function (parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				$.each(labelsItem , function(key , value)
				{

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = ACLib.processTransactData(value);
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);
			});

			parent["labels"] = newObj;


		},

		ProcessInputScreenCashAmtObjData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			object["minVal"] = ACLib.processTransactData(object["min"]);
			object["maxVal"] = ACLib.processTransactData(object["max"]);

			// //ACCoreJS.Trace("ProcessInputScreenCashAmtObjDataProcessInputScreenCashAmtObjDataProcessInputScreenCashAmtObjDataProcessInputScreenCashAmtObjData")
			// //ACCoreJS.Trace(object)

		},

		ProcessGenericButtonStandardLabelsData : function (parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(buttonItem)
			{
				newObj = [];

				_.each(buttonItem["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = ACLib.processTransactData(value);
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});

				buttonItem["labels"] = newObj;
			});

		},

		ProcessGenericLabelsLanguageData : function (object)
		{
			_.each(object["labels"] , function(labelsItem)
			{
				labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
				labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];

				// //ACCoreJS.Trace(labelsItem);
			});
		},

		ProcessGenericButtonLabelsLanguageData : function (object)
		{
			_.each(object["buttons"] , function(buttonsItem)
			{
				_.each(buttonsItem["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			});
		},

		processTransactData : function(val)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";
			var value = val;
			do
			{
				value = String(value);
				oriKey = "";
				valKey = "";
				val = "";

				//Slightly different because we are getting from generic mapping then check if any mapping on variable
				if(value.indexOf('[[') > -1)
				{
					oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
					valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

					val = ACLib.ProcessGenericMappingDataText(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				
				if(value.indexOf('[@') > -1)
				{
					oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
					valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

					val = ACCoreJS.GetUCDIString(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('[&') > -1)
				{
					oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
					valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

					val = ACCoreJS.GetUCDIIntegar(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('[#') > -1)
				{
					oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
					valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

					val = ACCoreJS.GetComString(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				else if(value.indexOf('[%') > -1)
				{
					oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
					valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

					val = ACCoreJS.GetComInt(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('[<') > -1)
				{
					functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
					oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
					valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

					if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
					{
						prefix = valKey.charAt(0);
						valKey = valKey.substring(1 , valKey.length);

						switch(prefix)
						{
							case "@":
								val = ACCoreJS.GetUCDIString(valKey);
								break;
							case "&":
								val = ACCoreJS.GetUCDIIntegar(valKey);
								break;
							case "#":
								val = ACCoreJS.GetComString(valKey);
								break;
							case "%":
								val = ACCoreJS.GetComInt(valKey);
								break;
							case "~":
								val = valKey;
								break;

						}
					}
					else
						val = app.DS.Get(valKey);


					val = ACLib[functionProcessName](val);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

				}
				else if(value.indexOf('{') > -1)
				{
					oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
					valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

					val = app.DS.Get(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}
				else
				{

					incomplete = 0;
				}


			}while(incomplete > 0);



			return value;
		},

		objectArrySort : function(field, reverse, primer)
		{

   			var key = primer ?
       		function(x) {return primer(x[field])} :
       		function(x) {return x[field]};

   			reverse = !reverse ? 1 : -1;

   			return function (a, b)
   			{
       			return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     		}
		},

		ProcessHNCBAmtSelectionScreenData : function(object)
		{
			var dataTemplate = object.get("cashAmtSelectionsSetting")["dataTemplate"];
			var cdiValue = ACCoreJS.GetUCDIString('DEFAULTPRESENT');

			var cdiValueJSON = JSON.parse(cdiValue);

			cdiValueJSON.sort(ACLib.objectArrySort('key', true, parseInt));

			var newObj = {};
			var arryData = [];

			for (var i = 0; i < cdiValueJSON.length; i++)
			{
				newObj = {};

				newObj.ID = String(cdiValueJSON[i].key);
				newObj.title1 = String(cdiValueJSON[i].key) + " 元";

				newObj.totalVal = cdiValueJSON[i].key * cdiValueJSON[i].value;


				if(String(cdiValueJSON[i].allow) == "Y")
				{
					newObj.enable = "1";
					newObj.input = {};
					newObj.input.ID = String(cdiValueJSON[i].key) +"input";
					newObj.input.localClass = dataTemplate.input.localClass;
					newObj.max = String(cdiValueJSON[i].value);
					newObj.othersLbl1 = "張";

					if( i+1 < cdiValueJSON.length && String(cdiValueJSON[i+1].allow) != "Y")
					{
						newObj.disableDecrease = "1";
					}

				}
				else
				{
					newObj.enable = "0";
					newObj.max = String(cdiValueJSON[i].value);
					newObj.totalValueLbl = String(cdiValueJSON[i].value);
					newObj.othersLbl1 = "枚";
				}
				// newObj.othersLbl2 = "( 最高張數　: " + String(cdiValueJSON[keys[i]]) + ")";

				arryData.push(newObj);

				// ACCoreJS.Trace(JSON.stringify(newObj));
			}

			object.set("cashAmtSelections" ,arryData);
		},

		// ProcessHNCBAmtSelectionScreenDataUpdate : function(object , id , action)
		// {
		// 	var obj = object.get("cashAmtSelections");
		// 	var totalBalance = app.DS.get(object.get("cashAmtSelectionsSetting")["totalAmtKey"]);
		// 	var totalUp = 0;

		// 	for(var i = 0 ; i < obj.length ; i++)
		// 	{
		// 		if(parseInt(obj[i].ID) > parseInt(id))
		// 		{
		// 			totalUp +=  parseInt(obj[i].totalVal);
		// 		}
		// 		else if(obj[i].ID == id)
		// 		{
		// 			switch(action)
		// 			{
		// 				case "decrease":
		// 					if(obj[i].max > 0 && typeof obj[i+1] != "undefined" && obj[i+1].enable == "1")
		// 					{
		// 						obj[i].max--;
		// 						obj[i].totalVal = obj[i].max * parseInt(id);
		// 					}
		// 					break;
		// 				case "increase":
		// 					// ACCoreJS.Trace("id : " + obj[i].ID);
		// 					// ACCoreJS.Trace("totalBalance : " + totalBalance);
		// 					// ACCoreJS.Trace("totalUp : " + totalUp);

		// 					var finalVal = parseInt((parseInt(totalBalance) - parseInt(totalUp)) / parseInt(id));

		// 					// ACCoreJS.Trace("Minus : " + (parseInt(totalBalance) - parseInt(totalUp)));

		// 					// ACCoreJS.Trace("finalVal : " + finalVal);

		// 					obj[i].max = finalVal;
		// 					obj[i].totalVal = finalVal * parseInt(id);
		// 					break;
		// 			}

		// 			totalUp +=  parseInt(obj[i].totalVal);
		// 		}
		// 		else
		// 		{
		// 			if(obj[i].enable == "1")
		// 			{
		// 				// ACCoreJS.Trace("id : " + obj[i].ID);
		// 				// ACCoreJS.Trace("totalBalance : " + totalBalance);
		// 				// ACCoreJS.Trace("totalUp : " + totalUp);

		// 				var finalVal1 = parseInt((parseInt(totalBalance) - parseInt(totalUp)) / parseInt(obj[i].ID));
		// 				// ACCoreJS.Trace("Minus : " + (parseInt(totalBalance) - parseInt(totalUp)));

		// 				// ACCoreJS.Trace("finalVal : " + finalVal1);
		// 				obj[i].max = finalVal1;
		// 				obj[i].totalVal = finalVal1 * parseInt(obj[i].ID);


		// 			}

		// 			totalUp +=  parseInt(obj[i].totalVal);

		// 		}
		// 	}

		// 	// ACCoreJS.Trace(JSON.stringify(obj));
		// },

		ProcessHNCBAmtSelectionScreenDataUpdate : function(object , id , action)
		{
			var obj = object.get("cashAmtSelections");
			var totalBalance = app.DS.get(object.get("cashAmtSelectionsSetting")["totalAmtKey"]);
			var totalUp = 0;
			var balanceVal = 0;
			var tmpMax = 0;

			var obj500;
			var obj200;
			var obj100;

			for(var i = 0 ; i < obj.length ; i++)
			{
				if(obj[i].enable == "1")
				{
					switch(parseInt(obj[i].ID))
					{
						case 500:
							obj500 = obj[i];
							break;
						case 200:
							obj200 = obj[i];
							break;
						case 100:
							obj100 = obj[i];
							break;
					}
				}
			}

			if(id == "500")
			{
				switch(action)
				{
					case "decrease":
						if(typeof obj500 != "undefined" && obj500 != null && obj500.max > 0)
						{
							obj500.max--;

							totalUp += obj500.max * 500;
							balanceVal = totalBalance - (obj500.max * 500);
							totalBalance = balanceVal;
							obj500.totalVal = obj500.max * 500;
						}
						break;
					case "increase":
						tmpMax = parseInt(totalBalance / 500);
						totalUp += tmpMax * 500;
						balanceVal = totalBalance - (tmpMax * 500);
						totalBalance = balanceVal;
						obj500.max = tmpMax;
						obj500.totalVal = tmpMax * 500;
						break;
				}

				if(typeof obj200 != "undefined" && obj200 != null)
				{
					tmpMax = parseInt(totalBalance / 200);
					totalUp += tmpMax * 200;
					balanceVal = totalBalance - (tmpMax * 200);
					totalBalance = balanceVal;
					obj200.max = tmpMax;
					obj200.totalVal = tmpMax * 200;
				}

				if(typeof obj100 != "undefined" && obj100 != null)
				{
					tmpMax = parseInt(totalBalance / 100);
					totalUp += tmpMax * 100;
					// balanceVal = totalBalance - (tmpMax * 100);
					obj100.max = tmpMax;
					obj100.totalVal = tmpMax * 100;
				}
			}
			else if(id == "200")
			{
				switch(action)
				{
					case "decrease":
						if(typeof obj200 != "undefined" && obj200 != null && obj200.max > 0)
						{
							obj200.max--;

							totalUp += obj200.max * 200;
							balanceVal = totalBalance - (obj200.max * 200);
							totalBalance = balanceVal;
							obj200.totalVal = obj200.max * 200;
						}

						if(typeof obj500 != "undefined" && obj500 != null)
						{
							tmpMax = parseInt(totalBalance / 500);
							totalUp += tmpMax * 500;
							balanceVal = totalBalance - (tmpMax * 500);
							totalBalance = balanceVal;
							obj500.max = tmpMax;
							obj500.totalVal = tmpMax * 500;
						}
						break;
					case "increase":
						if(typeof obj500 != "undefined" && obj500 != null && obj500.max > 0)
						{
							obj500.max--;

							totalUp += obj500.max * 500;
							balanceVal = totalBalance - (obj500.max * 500);
							totalBalance = balanceVal;
							obj500.totalVal = obj500.max * 500;
						}

						if(typeof obj200 != "undefined" && obj200 != null)
						{
							tmpMax = parseInt(totalBalance / 200);
							totalUp += tmpMax * 200;
							balanceVal = totalBalance - (tmpMax * 200);
							totalBalance = balanceVal;
							obj200.max = tmpMax;
							obj200.totalVal = tmpMax * 200;
						}
						break;
				}

				if(typeof obj100 != "undefined" && obj100 != null)
				{
					tmpMax = parseInt(totalBalance / 100);
					totalUp += tmpMax * 100;
					// balanceVal = balanceVal - (tmpMax * 100);
					obj100.max = tmpMax;
					obj100.totalVal = tmpMax * 100;
				}
			}
			else if(id == "100")
			{
				switch(action)
				{
					case "decrease":
						// if(typeof obj100 != "undefined" && obj100 != null && obj100.max > 0)
						// {
						// 	obj100.max--;

						// 	totalUp += obj100.max * 100;
						// 	balanceVal = totalBalance - (obj100.max * 100);
						// 	totalBalance = balanceVal;
						// 	obj100.totalVal = obj100.max * 100;
						// }

						// if(typeof obj500 != "undefined" && obj500 != null)
						// {
						// 	tmpMax = parseInt(balanceVal / 500);
						// 	totalUp += tmpMax * 500;
						// 	balanceVal = totalBalance - (tmpMax * 500);
						// 	totalBalance = balanceVal;
						// 	obj500.max = tmpMax;
						// 	obj500.totalVal = tmpMax * 500;
						// }

						// if(typeof obj200 != "undefined" && obj200 != null)
						// {
						// 	tmpMax = parseInt(totalBalance / 200);
						// 	totalUp += tmpMax * 200;
						// 	// balanceVal = balanceVal - (tmpMax * 200);
						// 	obj200.max = tmpMax;
						// 	obj200.totalVal = tmpMax * 200;
						// }
						break;
					case "increase":
						if(typeof obj500 != "undefined" && obj500 != null && obj500.max > 0)
						{
							obj500.max--;

							totalUp += obj500.max * 500;
							balanceVal = totalBalance - (obj500.max * 500);
							totalBalance = balanceVal;
							obj500.totalVal = obj500.max * 500;
						}

						if(typeof obj200 != "undefined" && obj200 != null && obj200.max > 0)
						{
							obj200.max--;

							totalUp += obj200.max * 200;
							balanceVal = balanceVal - (obj200.max * 200);
							totalBalance = balanceVal;
							obj200.totalVal = obj200.max * 200;
						}

						if(typeof obj100 != "undefined" && obj100 != null)
						{
							tmpMax = parseInt(totalBalance / 100);
							totalUp += tmpMax * 100;
							// balanceVal = balanceVal - (tmpMax * 100);
							obj100.max = tmpMax;
							obj100.totalVal = tmpMax * 100;
						}
						break;
				}

			}

			//ACCoreJS.Trace(JSON.stringify(obj));

		},

		ProcessButtonStandardLabelsData : function (object) {
			var newObj = [];
			var tmpOb = {};
			var t = this;
			_.each(object.get("buttons") , function(buttonItem) {
				newObj = [];
				_.each(buttonItem["labelsOri"] , function(labelsItem) {
					tmpOb = {};
					$.each(labelsItem , function(key , value) {
						value = t.processTransactData(value); //Reduce repeated coding
						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});
				buttonItem["labels"] = newObj;
			});
			t = null;
		},

		ProcessCheckBoxLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object.get("checkbox")["checkBoxList"] , function(checkBoxItem)
			{
				newObj = [];

				_.each(checkBoxItem["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						incomplete = 1;

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";

							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;
										case "~":
											val = valKey;
											break;

									}
								}
								else
									val = app.DS.Get(valKey);

								val = ACLib[functionProcessName](val);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								// incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);

						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});

				checkBoxItem["labels"] = newObj;
			});

		},

		ProcessCheckBoxOnlyLabelsData : function (object) {
			var newObj = [];
			var tmpOb = {};
			var t = this;
			_.each(object.get('checkbox')['labelsOri'] , function(labelsItem) {
				tmpOb = {};
				$.each(labelsItem , function(key , value) {
					value = t.processTransactData(value); //Reduce repeated coding
					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";
				});
				newObj.push(tmpOb);
			});
			object.get('checkbox')["labels"] = newObj;
			t = null;
		},

		ProcessCheckBoxButtonLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

				_.each(object.get("checkbox")["button"]["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						incomplete = 1;

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";

							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;
										case "~":
											val = valKey;
											break;

									}
								}
								else
									val = app.DS.Get(valKey);

								val = ACLib[functionProcessName](val);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								// incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);

						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});

				object.get("checkbox")["button"]["labels"] = newObj;

		},

		ProcessCheckBoxButtonLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

				_.each(object.get("checkbox")["button"]["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						incomplete = 1;

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";

							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;
										case "~":
											val = valKey;
											break;

									}
								}
								else
									val = app.DS.Get(valKey);

								val = ACLib[functionProcessName](val);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								// incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);

						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});

				object.get("checkbox")["button"]["labels"] = newObj;

		},

		ProcessAgreementAreaLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object.get('agreementArea')["headerLabelsOri"] , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;



				$.each(labelsItem , function(key , value)
				{
					incomplete = 1;

					do
					{
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1)
						{
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[&') > -1)
						{
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[#') > -1)
						{
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else if(value.indexOf('[%') > -1)
						{
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('[<') > -1)
						{
							functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
							oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
							valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

							if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
							{
								prefix = valKey.charAt(0);
								valKey = valKey.substring(1 , valKey.length);

								switch(prefix)
								{
									case "@":
										val = ACCoreJS.GetUCDIString(valKey);
										break;
									case "&":
										val = ACCoreJS.GetUCDIIntegar(valKey);
										break;
									case "#":
										val = ACCoreJS.GetComString(valKey);
										break;
									case "%":
										val = ACCoreJS.GetComInt(valKey);
										break;
									case "~":
										val = valKey;
										break;

								}
							}
							else
								val = app.DS.Get(valKey);


							val = ACLib[functionProcessName](val);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						}
						else if(value.indexOf('{') > -1)
						{
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						else
						{

							incomplete = 0;
						}


					}while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";

				});


				newObj.push(tmpOb);
			});

			var tmpObj = {};
			tmpObj = object.get('agreementArea');
			tmpObj.headerlabels = newObj;

			object.set("agreementArea" ,tmpObj);

		},

		ProcessAgreementInfoLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object.get("agreementArea")["agreementInfo"] , function(agreementInfoItem)
			{
				newObj = [];

				_.each(agreementInfoItem['col1']["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						incomplete = 1;

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";

							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;
										case "~":
											val = valKey;
											break;

									}
								}
								else
									val = app.DS.Get(valKey);

								val = ACLib[functionProcessName](val);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								// incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);

						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});
					newObj.push(tmpOb);
				});

				agreementInfoItem["col1"]["labels"] = newObj;

				newObj = [];

				_.each(agreementInfoItem['col2']["labelsOri"] , function(labelsItem)
				{
					prefix = "";
					valKey = "";
					val = "";
					tmpOb = {};
					oriKey = "";
					incomplete = 1;


					$.each(labelsItem , function(key , value)
					{
						incomplete = 1;

						do
						{
							value = String(value);
							oriKey = "";
							valKey = "";
							val = "";

							if(value.indexOf('[[') > -1)
							{
								oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
								valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

								val = ACLib.ProcessGenericMappingDataText(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							
							if(value.indexOf('[@') > -1)
							{
								oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
								valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

								val = ACCoreJS.GetUCDIString(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[&') > -1)
							{
								oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
								valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

								val = ACCoreJS.GetUCDIIntegar(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[#') > -1)
							{
								oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
								valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

								val = ACCoreJS.GetComString(valKey);
								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else if(value.indexOf('[%') > -1)
							{
								oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
								valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

								val = ACCoreJS.GetComInt(valKey);

								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

							}
							else if(value.indexOf('[<') > -1)
							{
								functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
								oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
								valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

								if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1)
								{
									prefix = valKey.charAt(0);
									valKey = valKey.substring(1 , valKey.length);

									switch(prefix)
									{
										case "@":
											val = ACCoreJS.GetUCDIString(valKey);
											break;
										case "&":
											val = ACCoreJS.GetUCDIIntegar(valKey);
											break;
										case "#":
											val = ACCoreJS.GetComString(valKey);
											break;
										case "%":
											val = ACCoreJS.GetComInt(valKey);
											break;
										case "~":
											val = valKey;
											break;

									}
								}
								else
									val = app.DS.Get(valKey);

								val = ACLib[functionProcessName](val);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");

								// incomplete = 0;
							}
							else if(value.indexOf('{') > -1)
							{
								oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
								valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

								val = app.DS.Get(valKey);



								if(typeof val != "undefined" && val != "undefined")
									value = value.replace(oriKey , val);
								else
									value = value.replace(oriKey , "");
							}
							else
							{

								incomplete = 0;
							}


						}while(incomplete > 0);

						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";

					});

					if(typeof labelsItem.hyperlink != "undefined")
					{
						tmpOb.hyperlink = labelsItem.hyperlink;
					}

					newObj.push(tmpOb);
				});

				agreementInfoItem["col2"]["labels"] = newObj;
			});

		},


		ProcessAgreementInfoLabelsLanguageData : function (object)
		{
			_.each(object.get("agreementArea")["agreementInfo"] , function(agreementInfoItem)
			{
				_.each(agreementInfoItem["col1"]["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});

				_.each(agreementInfoItem["col2"]["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			});
		},

		ProcessAgreementHeaderLabelsLanguageData : function (object)
		{
			_.each(object.get("agreementArea")["headerlabels"] , function(labelsItem)
			{
				labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
				labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
			});
		},

		ProcessLabelsLanguageData : function (object)
		{
			_.each(object.get("labels") , function(labelsItem)
			{
				labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
				labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
			});
		},

		ProcessTextAreasLanguageData : function (object)
		{
			_.each(object.get("textAreas") , function(textAreasItem)
			{
				textAreasItem["text"] = textAreasItem["L" + String(app.DS.getLanguageIdx())];
				textAreasItem["localClass"] = textAreasItem["L" + String(app.DS.getLanguageIdx() + "Class")];
			});
		},

		ProcessButtonLabelsLanguageData : function (object)
		{
			_.each(object.get("buttons") , function(buttonsItem)
			{
				_.each(buttonsItem["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			});
		},

		ProcessCheckBoxLabelsLanguageData : function (object)
		{
			_.each(object.get("checkbox")["checkBoxList"] , function(checkBoxItem)
			{
				_.each(checkBoxItem["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			});
		},

		ProcessCheckBoxOnlyLabelsLanguageData : function (object)
		{
			_.each(object.get("checkbox")["labels"] , function(labelsItem)
			{
				labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
				labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
			});
		},

		ProcessCheckBoxButtonLabelsLanguageData : function (object)
		{
			_.each(object.get("checkbox")["button"]["labels"] , function(labelsItem)
			{
				labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
				labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
			});
		},

		ProcessInitFunctions : function(object)
		{
			if(typeof object.model.get('functions') != "undefined" && typeof object.model.get('functions')['initFunctions'] != "undefined")
			{
				_.each(object.model.get('functions')['initFunctions'] , function(functionItem)
				{
					if(typeof functionItem.name != "undefined" && typeof functionItem.params != "undefined")
					{
						ACLib[functionItem.name](object, functionItem.params);
					}
					else
					{
						ACLib[functionItem](object);
					}
				});
			}
		},

		disableButtonIfMatchCriteria : function(object , params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var CDICompareKey = param[1];
			var CDICompareValue = param[2];
			var enableClass = param[3];
			var disableClass = param[4];

			if(String(app.DS.Get(CDICompareKey)) == String(CDICompareValue))
			{
				// object.$el.find("#"+ objectID).class(disableClass);
				$("#"+ objectID).addClass(disableClass).removeClass(enableClass);

				var item = _.filter(object.model.get('buttons') , function(buttonItem)
				{
					if(objectID == buttonItem.ID)
					{
						return buttonItem;
					}
				});

				item[0]["enable"] = "0";
				item[0]["localClass"] = $("#"+ objectID).attr("class");
			}
			else
			{
				$("#"+ objectID).addClass(enableClass).removeClass(disableClass);

				var item = _.filter(object.model.get('buttons') , function(buttonItem)
				{
					if(objectID == buttonItem.ID)
					{
						return buttonItem;
					}
				});

				item[0]["enable"] = "1";
				item[0]["localClass"] = $("#"+ objectID).attr("class");
			}

		},

		disableButtonIfATMSTATUSNotMatchCriteria : function(object , params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var CDICompareKey = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var CDICompareKeyIndex= param[1];
			var CDICompareValue = param[2];
			var enableClass = param[3];
			var disableClass = param[4];

			if(String(CDICompareKey).charAt(CDICompareKeyIndex) != String(CDICompareValue))
			{
				// object.$el.find("#"+ objectID).class(disableClass);
				$("#"+ objectID).addClass(disableClass).removeClass(enableClass);

				var item = _.filter(object.model.get('buttons') , function(buttonItem)
				{
					if(objectID == buttonItem.ID)
					{
						return buttonItem;
					}
				});

				item[0]["enable"] = "0";
				item[0]["localClass"] = $("#"+ objectID).attr("class");
			}
			else
			{
				$("#"+ objectID).addClass(enableClass).removeClass(disableClass);

				var item = _.filter(object.model.get('buttons') , function(buttonItem)
				{
					if(objectID == buttonItem.ID)
					{
						return buttonItem;
					}
				});

				item[0]["enable"] = "1";
				item[0]["localClass"] = $("#"+ objectID).attr("class");
			}

		},

		disableButtonIfBothConditionNotMatch : function(object, params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var CDICompareKey = param[1];
			var CDICompareValue1 = param[2];
			var CDICompareValueIdx1 = param[3];
			var CDICompareValue2 = param[4];
			var CDICompareValueIdx2 = param[5];
			var enableClass = param[6];
			var disableClass = param[7];

			var cdiVal = String(ACCoreJS.GetUCDIString(CDICompareKey));

			ACCoreJS.Trace("CDIValue : " + cdiVal);
			ACCoreJS.Trace("Item1 : " + cdiVal.charAt(parseInt(CDICompareValueIdx1)) + " | " + CDICompareValue1);
			ACCoreJS.Trace("Item1 : " + cdiVal.charAt(parseInt(CDICompareValueIdx2)) + " | " + CDICompareValue2);

			if(cdiVal.charAt(parseInt(CDICompareValueIdx1)) != String(CDICompareValue1) ||
				cdiVal.charAt(parseInt(CDICompareValueIdx2)) != String(CDICompareValue2))
			{
				// object.$el.find("#"+ objectID).class(disableClass);
				$("#"+ objectID).addClass(disableClass).removeClass(enableClass);

				var item = object.model.get(objectID);

				if(typeof item["enable"] == "undefined")
					item["enable"] = new Object();
				item["enable"] = "0";
				item["localClass"] = $("#"+ objectID).attr("class");
			}
			else
			{
				$("#"+ objectID).addClass(enableClass).removeClass(disableClass);

				var item = object.model.get(objectID);
				item["enable"] = "1";
				item["localClass"] = $("#"+ objectID).attr("class");
			}
		},

		disableButtonIfEitherConditionNotMatch : function(object, params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var enableClass = param[1];
			var disableClass = param[2];
			var CDICompareKey = param[3];
			var CDICompareValue = "";
			var CDICompareValueIdx = "";


			var cdiVal = String(ACCoreJS.GetUCDIString(CDICompareKey));

			ACCoreJS.Trace("CDIValue : " + cdiVal);

			for(var i = 4 ; i < param.length ; i++)
			{
				CDICompareValue = param[i];
				CDICompareValueIdx = param[i+1];

				// ACCoreJS.Trace("CDICompareValue : " + CDICompareValue);
				// ACCoreJS.Trace("CDICompareValueIdx : " + CDICompareValueIdx);

				ACCoreJS.Trace("Item [" + i +"]" + cdiVal.charAt(parseInt(CDICompareValue)) + " | " + CDICompareValue);

				if(cdiVal.charAt(parseInt(CDICompareValueIdx)) != String(CDICompareValue) )
				{
					// object.$el.find("#"+ objectID).class(disableClass);
					$("#"+ objectID).addClass(disableClass).removeClass(enableClass);

					var item = object.model.get(objectID);

					if(typeof item["enable"] == "undefined")
						item["enable"] = new Object();
					item["enable"] = "0";
					item["localClass"] = $("#"+ objectID).attr("class");

					break;
				}
				else
				{
					$("#"+ objectID).addClass(enableClass).removeClass(disableClass);

					var item = object.model.get(objectID);
					item["enable"] = "1";
					item["localClass"] = $("#"+ objectID).attr("class");
				}

				i++;

			}





		},

		disableTwoButtonIfATMCStatusNotMatchCriteria : function(object , params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var CDICompareKey = param[1];
			var CDICompareValue = param[2];
			var CDICompareValueIdx = param[3];
			var enableClass = param[4];
			var disableClass = param[5];

			ACCoreJS.Trace("ATMC-STATUS : " + ACCoreJS.GetUCDIString(CDICompareKey));
			ACCoreJS.Trace("Check Index Value : "  + String(ACCoreJS.GetUCDIString(CDICompareKey)).charAt(parseInt(CDICompareValueIdx)));

			if(String(ACCoreJS.GetUCDIString(CDICompareKey)).charAt(parseInt(CDICompareValueIdx)) != String(CDICompareValue))
			{
				// object.$el.find("#"+ objectID).class(disableClass);
				$("#"+ objectID).addClass(disableClass).removeClass(enableClass);

				var item = object.model.get(objectID);

				if(typeof item["enable"] == "undefined")
					item["enable"] = new Object();
				item["enable"] = "0";
				item["localClass"] = $("#"+ objectID).attr("class");
			}
			else
			{
				$("#"+ objectID).addClass(enableClass).removeClass(disableClass);

				var item = object.model.get(objectID);
				item["enable"] = "1";
				item["localClass"] = $("#"+ objectID).attr("class");
			}

		},

		invisibleItemIfATMCStatusNotMatch: function(object , params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var keyValue = param[1];
			var CDICompareValueIdx = param[2];
			var valueToCompare = param[3];

			ACCoreJS.Trace("ATMC-STATUS : " + ACCoreJS.GetUCDIString(keyValue));
			ACCoreJS.Trace("Check Index Value : "  + String(ACCoreJS.GetUCDIString(keyValue)).charAt(parseInt(CDICompareValueIdx)));

			if(String(ACCoreJS.GetUCDIString(keyValue)).charAt(parseInt(CDICompareValueIdx)) != String(valueToCompare))
			{
				$("#"+ objectID).hide();
			}
		},

		visibleItemIfATMCStatusNotMatch: function(object , params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var keyValue = param[1];
			var CDICompareValueIdx = param[2];
			var valueToCompare = param[3];

			ACCoreJS.Trace("ATMC-STATUS : " + ACCoreJS.GetUCDIString(keyValue));
			ACCoreJS.Trace("Check Index Value : "  + String(ACCoreJS.GetUCDIString(keyValue)).charAt(parseInt(CDICompareValueIdx)));

			if(String(ACCoreJS.GetUCDIString(keyValue)).charAt(parseInt(CDICompareValueIdx)) != String(valueToCompare))
			{
				$("#"+ objectID).show();
			}
			else
			{
				$("#"+ objectID).hide();
			}
		},

		visitbleIfEitherConditionNotMatch : function(object, params)
		{
			var param = params.split(',');
			var objectID = param[0];
			var CDICompareKey = param[1];
			var CDICompareValue = "";
			var CDICompareValueIdx = "";


			$("#"+ objectID).hide();

			var cdiVal = String(ACCoreJS.GetUCDIString(CDICompareKey));

			ACCoreJS.Trace("visitbleIfEitherConditionNotMatch : CDIValue : " + cdiVal);
			ACCoreJS.Trace("visitbleIfEitherConditionNotMatch : length  : " + param.length );

			for(var i = 2 ; i < param.length ; i++)
			{
				CDICompareValue = param[i];
				CDICompareValueIdx = param[i+1];

				// ACCoreJS.Trace("CDICompareValue : " + CDICompareValue);
				// ACCoreJS.Trace("CDICompareValueIdx : " + CDICompareValueIdx);

				ACCoreJS.Trace("visitbleIfEitherConditionNotMatch : Item [" + i +"]" + cdiVal.charAt(parseInt(CDICompareValue)) + " | " + CDICompareValue);

				if(cdiVal.charAt(parseInt(CDICompareValueIdx)) != String(CDICompareValue) )
				{
					// object.$el.find("#"+ objectID).class(disableClass);
					$("#"+ objectID).show();
					break;
				}

				i++;

			}



		},


		updateTransactionInfo : function()
		{
			 app.BroadCaster.trigger("UpdateTransactionInfo");
		},

		refreshHeaderAcctInfo : function()
		{
			// app.BroadCaster.trigger("refreshContent" , {trigger: true});
			app.BroadCaster.trigger("refreshSelectMatchAcct" , {TXACC : app.DS.Get("TXACC")});
		},

		GetCardNoFromTrack2 : function(track2)
		{
			var end = track2.indexOf("=");
			var oriTrack2 = "";
			var length = 0;

			if(track2 != null && track2.length > 0 && end > 1)
			{
				track2 = track2.substring(1,end);
				oriTrack2 = track2;

				return track2;
			}
			else
				return "";
		},

		getACProcessData :  function (val)
		{
			var value = val;

			var prefixIndex = "";
			var cdiKey = "";
			var dsKey = "";
			var tmpObj = {};
			var incomplete = 1;
			var processFuncName = "";
			var oriKey = "";
			var valKey = "";

			do
			{
				if(value.indexOf('[[') > -1)
				{
					oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
					valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

					val = ACLib.ProcessGenericMappingDataText(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");
				}

				if(String(value).indexOf('{') > -1 && String(value).indexOf('}') > -1)
				{
					oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
					valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

					val = app.DS.get(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;
				}
				else if(String(value).indexOf('[@') > -1)
				{
					oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
					valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

					val = ACCoreJS.GetUCDIString(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;

				}
				else if(String(value).indexOf('[&') > -1)
				{
					oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
					valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

					val = ACCoreJS.GetUCDIIntegar(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;

				}
				else if(String(value).indexOf('[#') > -1)
				{
					oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
					valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

					val = ACCoreJS.GetComString(valKey);
					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;
				}
				else if(String(value).indexOf('[%') > -1)
				{
					oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
					valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

					val = ACCoreJS.GetComInt(valKey);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;

				}
				else if(String(value).indexOf('[<') > -1)
				{
					functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
					oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
					valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

					if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1)
					{
						prefix = valKey.charAt(0);
						valKey = valKey.substring(1 , valKey.length);

						switch(prefix)
						{
							case "@":
								val = ACCoreJS.GetUCDIString(valKey);
								break;
							case "&":
								val = ACCoreJS.GetUCDIIntegar(valKey);
								break;
							case "#":
								val = ACCoreJS.GetComString(valKey);
								break;
							case "%":
								val = ACCoreJS.GetComInt(valKey);
								break;

						}
					}
					else
						val = app.DS.Get(valKey);


					val = ACLib[functionProcessName](val);

					if(typeof val != "undefined" && val != "undefined")
						value = value.replace(oriKey , val);
					else
						value = value.replace(oriKey , "");

					incomplete = 1;
				}
				else
				{
					incomplete = 0;
				}


			}while(incomplete > 0);

			return value;
		},

		GetCurrentDateTime: function(format)
		{
			var now = new Date();
			var afterFormat = "";

			var YYYY 	= String(now.getFullYear());

			var MM 		= String(now.getMonth()+1);
			if(MM.length <= 1)
				MM 		=	"0"+MM;

			var DD 		= String(now.getDate());
			if(DD.length <= 1)
				DD 		=	"0"+DD;

			var HH 		= String(now.getHours());
			if(HH.length <= 1)
				HH 		= 	"0"+HH;

			var NN 		= String(now.getMinutes()) ;
			if(NN.length <= 1)
				NN 		= 	"0"+NN;

			var SS 		= String(now.getSeconds());
			if(SS.length <= 1)
				SS 		=	"0"+SS;

			var QQQ 	= String(now.getMilliseconds());
			if(QQQ.length <= 1)
				QQQ 	=	"00"+QQQ;
			else if(QQQ.length == 2)
				QQQ 	=	"0"+QQQ;

			switch(format)
			{
				case "YYYYMMDDHHNNSS":
					afterFormat = YYYY + MM + DD + HH + NN + SS;
					break;
				case "YYYYMMDDHHNNSSQQQ":
					afterFormat = YYYY + MM + DD + HH + NN + SS + QQQ;
					break;
				case "YYYYMMDD":
					afterFormat = YYYY + MM + DD;
					break;
			}

			return afterFormat;
		},

		GetReqId : function ()
		{
			var currentDateTime = ACLib.GetCurrentDateTime("YYYYMMDDHHNNSSQQQ");

			var leftLen = 30 - currentDateTime.length;
			var terminalID = ACLib.GetTerminalID();

			var reqid = "";
			reqid += currentDateTime;
			// reqid += terminalID.substr(0 , leftLen);
			reqid += terminalID;

			return reqid;
		},

		GetTerminalID : function()
		{
			if(typeof ACCoreJS.GetUCDIString(ACVar.CDI_ATM_ID) != "undefined")
				return ACCoreJS.GetUCDIString(ACVar.CDI_ATM_ID);
			else
				return "";
		},

		GetIPAddress : function()
		{
			return ACCoreJS.GetIPAddress();
		},

		acRequestProcess : function(obj , reqMode)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			ACCoreJS.Trace("NODEJS ENDPOINT : "  + ConfigData.nodeJS.coreEndPoint + '/ACTransactionRequest/onProcessB64');

			var acctNumFromCDI = ACCoreJS.GetUCDIString(ACVar.CDI_USER_SELECTED_ACCOUNT);
			var CustNum = ACCoreJS.GetUCDIString(ACVar.CDI_USER_SELECTED_CIF);
			var track2Number = this.GetCardNoFromTrack2(ACCoreJS.GetComString(ACVar.CDI_TRACK2));
			var trxNo = parseInt(ACCoreJS.GetUCDIString(ACVar.CDI_WEB_TRX_SEQ_NO));

			var acctNum = acctNumFromCDI;
			var cifNum = CustNum;
			var opCode = app.DS.getOpcode();

			var keyArray = {};

			_.each(obj.dsData , function(item)
			{
				keyArray[item] = app.DS.Get(item);
			});

			var extraObj = _.pairs(obj.extra);
			var dsKey = "";
			var dsVal = "";
			_.each(extraObj , function(items)
			{
				dsKey = items[0];
				dsVal = items[1];
				keyArray[dsKey] = ACLib.getACProcessData(dsVal);
			});

			//ACCoreJS.Trace(keyArray);
			var dt = new Date();

			var reqid = ACLib.GetReqId();
			var transDateTime = ACLib.GetCurrentDateTime("YYYYMMDDHHNNSS");

			var timeStamp = dt.getTime().toString();
			var transRefNo = "";

			trxNo++;

			ACCoreJS.SetUCDIStr(ACVar.CDI_WEB_TRX_SEQ_NO,trxNo.toString());

			var encryptedValue = "";
			var tmpObj = new Object();
			tmpObj.transReq = new Object();
			tmpObj.transReq.msgreqhdr = new Object();
			tmpObj.transReq.msgreqhdr.rqUID = reqid;
			tmpObj.transReq.msgreqhdr.terminalIp = ACLib.GetIPAddress();
			tmpObj.transReq.msgreqhdr.terminalId = ACLib.GetTerminalID();
			tmpObj.transReq.msgreqhdr.cardNo = track2Number;
			tmpObj.transReq.msgreqhdr.scId = "";
			tmpObj.transReq.msgreqhdr.opCode = opCode;
			tmpObj.transReq.msgreqhdr.messageAutentication = "";
			tmpObj.transReq.msgreqhdr.timeStamp = timeStamp;
			tmpObj.transReq.msgreqhdr.languageId = String(app.DS.getLanguageIdx());
			tmpObj.transReq.msgreqhdr.transDateTime = transDateTime;
			tmpObj.transReq.msgreqhdr.transRefNo = trxNo.toString();
			tmpObj.transReq.msgreqhdr.field1 = ACCoreJS.GetUCDIString(ACVar.CDI_ATM_TOKEN_ID);
			tmpObj.transReq.msgreqhdr.field2 = ACCoreJS.GetComString(ACVar.CDI_TSN);
			tmpObj.transReq.msgreqhdr.field3 = reqid;
			tmpObj.transReq.msgreqhdr.field4 = "";
			tmpObj.transReq.msgreqhdr.field5 = "";
			tmpObj.transReq.msgreqhdr.field6 = "";
			tmpObj.transReq.msgreqhdr.field7 = "";
			tmpObj.transReq.msgreqhdr.field8 = "";
			tmpObj.transReq.msgreqhdr.field9 = "";
			tmpObj.transReq.msgreqhdr.field10 = "";

			tmpObj.transReq.reqmsgbody = new Object();
			tmpObj.transReq.reqmsgbody.recordList = [];
			// tmpObj.TransRequest.reqmsgbody.recordList.RecordData = new Object();
			// tmpObj.TransRequest.reqmsgbody.recordList.RecordData.infoList = [];

			var keyArrayObj = _.pairs(keyArray);
			var keyItemObj = new Object();

			_.each(keyArrayObj , function(items)
			{
				keyItemObj = new Object();
				keyItemObj.infoList = new Object();
				keyItemObj.infoList.keyName = items[0];
				keyItemObj.infoList.keyValue = items[1];

				// tmpObj.TransRequest.reqmsgbody.recordList.RecordData.infoList.push(keyItemObj);
				tmpObj.transReq.reqmsgbody.recordList.push(keyItemObj);

			});



			var tempXML = "<TransRequest>";
			tempXML += "<msgreqhdr>";

			tempXML += "<rqUID>" + reqid + "</rqUID>"; //SAIB RqID should be EMpty, other bank have to apply RQUID
			tempXML += "<terminalIp>" + ACLib.GetIPAddress() + "</terminalIp>";
			tempXML += "<terminalId>" + ACLib.GetTerminalID() + "</terminalId>";
			tempXML += "<cardNo>" + track2Number + "</cardNo>"
			tempXML += "<scId>" + "</scId>"
			tempXML += "<opCode>" + opCode + "</opCode>";
			tempXML += "<messageAutentication>" + "" + "</messageAutentication>";
			tempXML += "<timeStamp>" + timeStamp + "</timeStamp>";
			tempXML += "<languageId>" + String(app.DS.getLanguageIdx()) + "</languageId>";
			tempXML += "<transDateTime>" + transDateTime  + "</transDateTime>";
			tempXML += "<transRefNo>" + trxNo.toString() + "</transRefNo>";
			tempXML += "<field1>" + ACCoreJS.GetUCDIString(ACVar.CDI_ATM_TOKEN_ID) + "</field1>";
			tempXML += "<field2>" + ACCoreJS.GetComString(ACVar.CDI_TSN) + "</field2>";

			tempXML += "<field3>" + reqid + "</field3>";
			tempXML += "<field4></field4>";
			tempXML += "<field5></field5>";
			tempXML += "<field6></field6>";
			tempXML += "<field7></field7>";
			tempXML += "<field8></field8>";
			tempXML += "<field9></field9>";

			if(ConfigData.isDebug == "1")
				tempXML += "<field10>dummy</field10>";
			else
				tempXML += "<field10></field10>";

			tempXML += "</msgreqhdr>";

			tempXML += "<reqmsgbody>";
			tempXML += "<recordList>";
			tempXML += "<RecordData>";
			tempXML += "<infoList>";

			// var keyArrayObj = _.pairs(keyArray);

			_.each(keyArrayObj , function(items)
			{
				tempXML += "<Info>";
				tempXML += "<keyName>" +  items[0] + "</keyName>";
				tempXML += "<keyValue><![CDATA[" + items[1] + "]]></keyValue>";
				tempXML += "</Info>";

			});

			tempXML += "</infoList>";
			tempXML += "</RecordData>";
			tempXML += "</recordList>";
			tempXML += "</reqmsgbody>";

			tempXML += "</TransRequest>";

			// alert(tempXML);
			ACCoreJS.Trace("Request XML : " + tempXML);

			var b64Obj = new Object();
			b64Obj.transReqBase64 = String(Base64.encode(tempXML));

			var requestData = { data : b64Obj , reqID : reqid};

			// ACCoreJS.Trace(tempXML);

            $.support.cors = true;

            if(typeof acRequestProcessXHR != "undefined" && acRequestProcessXHR != null)
            {
            	acRequestProcessXHR.abort();
            	acRequestProcessXHR = null;
            }

            acRequestProcessXHR = $.ajax({
            type: 'POST',
            cache : false,
            data: requestData,
            dataType: "json",
            url: ConfigData.nodeJS.coreEndPoint + '/ACTransactionRequest/onProcessB64',
            success: function(data)
            {
            	ACCoreJS.Trace("Success Response.");
                app.BroadCaster.trigger("ACTransactionResponse" , data);
            },

            error : function(data)
            {
            	ACCoreJS.Trace("Error Response.");
                // alert(" error " + JSON.stringify(data));
                if(ConfigData.transactionDebug == "1")
                	app.BroadCaster.trigger("ACTransactionResponse" , data);
                else
                	app.BroadCaster.trigger("ACTransactionResponse" , data);
            }
        	});




		},

		acNodeAssistanceRequest : function(obj , actionObj , timeoutValue , doNotWait)
		{
			var keyArray = {};

			_.each(obj.dsData , function(item)
			{
				keyArray[item] = app.DS.Get(item);
			});

			var extraObj = _.pairs(obj.extra);
			var dsKey = "";
			var dsVal = "";

			_.each(extraObj , function(items)
			{
				dsKey = items[0];
				dsVal = items[1];
				keyArray[dsKey] = ACLib.getACProcessData(dsVal);
			});

			var requestData = new Object();
			requestData["type"] = actionObj["type"];
			requestData["event"] = actionObj["event"];
			requestData["data"]  = keyArray;


			// ACCoreJS.Trace(JSON.stringify(requestData));
			// app.BroadCaster.trigger("transactXRequest" , requestData);

			if(doNotWait == "1")
				app.channel.transactXSendRequestOnly(requestData);
			else
				app.channel.transactXRequest(requestData);
		},

		acNodeWSRequest : function(obj , serviceEndpoint ,timeoutValue)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var keyArray = {};
			var objArry = {};

			_.each(obj.dsData , function(item)
			{
				keyArray[item] = app.DS.Get(item);
			});

			var extraObj = _.pairs(obj.extra);

			var dsKey = "";
			var dsVal = "";

			_.each(extraObj , function(items)
			{
				dsKey = items[0];
				dsVal = items[1];

				keyArray[dsKey] = ACLib.getACProcessData(dsVal);
			});

			var requestData = keyArray;

			if(typeof obj.arryObj != "undefined")
			{
				var arryObj = _.pairs(obj.arryObj);

				_.each(arryObj , function(items)
				{
					dsKey = items[0];
					dsVal = items[1];

					objArry[dsKey] = ACLib.getACProcessData(dsVal);
				});

				requestData.arry = objArry;
			}



			// ACCoreJS.Trace(tempXML);

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            async : true,
            cache : false,
            dataType: "json",
            timeout: timeoutValue,
            url: serviceEndpoint,
            success: function(data)
            {
            	ACCoreJS.Trace("Success Response.");
                app.BroadCaster.trigger("ACNodeWSResponse" , data);
            },

            error : function(data)
            {
            	ACCoreJS.Trace("Error Response.");
                // alert(" error " + JSON.stringify(data));
                if(ConfigData.transactionDebug == "1")
                	app.BroadCaster.trigger("ACNodeWSResponse" , data);
                else
                	app.BroadCaster.trigger("ACNodeWSResponse" , data);
            }
        	});




		},

		CleanUpDSCache : function()
		{
			ACCoreJS.Trace("***** Clean Up DS Cache *****");
			app.DS.cleanUp();
		},

		StartTimer : function(displayType, duration)
		{

			app.BroadCaster.trigger("startTimer", displayType,duration, {trigger: true})
		},

		ResetTimer : function(displayType, duration)
		{
			app.BroadCaster.trigger("resetTimer", displayType, duration, {trigger:true})
		},

		StopTimer : function()
		{
			app.BroadCaster.trigger("stopTimer",{trigger:true})
		},
		StartActiveKBTimer : function()
		{
			app.BroadCaster.trigger("StartActiveKBTimer", {trigger: true});
		},

		ActivateKeyboardTimer : function()
		{
			app.BroadCaster.trigger("ActivateKeyboardTimer", {trigger: true});
		},

		StoptActiveKBTimer : function()
		{
			app.BroadCaster.trigger("StoptActiveKBTimer", {trigger: true});
		},

		HideHeader : function ()
		{
			app.BroadCaster.trigger("HideHeader", {trigger: true});
		},

		createFakeAtmcStatusByForeignStatus : function()
		{
			var cdiVal = String(ACCoreJS.GetUCDIString("FOREIGNCASSETTES"));
			var atmcStatus = String(ACCoreJS.GetUCDIString("ATMC-STATUS"));
			var finalVal = "";
			var amt = "";


			if(cdiVal != "undefined")
			{

				var xmlDoc = $.parseXML(cdiVal);
				var count = $(xmlDoc).find("item").size();
				var currency = "";
				var cassetestatus = "";
				var foundTWD = false;
				var foundCassetStatusIsOne= false;

				$(xmlDoc).find("item").each(function(index, value)
				{
					currency = $(this).find("currency").text();
					cassetestatus = $(this).find("cassetestatus").text();
					amt = parseInt($(this).find("value").text());

					if(currency == "TWD" && amt == 1000 && cassetestatus == "1" && foundTWD == false)
                	{
                		foundTWD = true;
						// return;
                	}

                	if(currency != "TWD" && cassetestatus == "1")
                	{
                		foundCassetStatusIsOne = true;
                	}
				});


				if(cdiVal != "undefined" && cdiVal.length > 0 && count > 0)
				{
					if(foundTWD && foundCassetStatusIsOne)
						finalVal = "1" + atmcStatus.charAt(2) + "1";
					else if(!foundCassetStatusIsOne)
						finalVal = "0" + atmcStatus.charAt(2) + "0";
					else
						finalVal = "0" + atmcStatus.charAt(2) + "1";
				}
				else
				{
					finalVal = atmcStatus.charAt(1) + atmcStatus.charAt(2) + "0";
				}
			}
			else
			{
				finalVal = atmcStatus.charAt(1) + atmcStatus.charAt(2) + "0";
			}

			app.DS.update({"FAKEATMC-STATUS" : finalVal});
			ACCoreJS.Trace("FAKEATMC-STATUS : " + finalVal);
		},

		processESBSS8KioskAcctDataCCTransfer :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
				selectionString += '"nextScreenID" : "' + "CONDITION_CREDITCARD_INPUTTYPE" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processESBSS8KioskAcctDataCCInquiryTransfer :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "naviNoBar" + '",';
				selectionString += '"nextScreenTemplate" : "' + "summaryScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "SUMMARY_INQUIRY_CCNPOINT_TRANSFERACCT_CONFIRMATION" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processESBSS8TransferSetTXACC :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();

				app.DS.update({ "@TXACC" : accountNumber});
				app.DS.update({ "TXACC" : accountNumber});
				app.DS.update({ "@BKID" : bankId});
				app.DS.update({ "BKID" : bankId});
			});

		},

		processESBSS8CashInAmtUpdate :function()
		{
			var totalAmt = parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"));
			var paymentAmt = parseInt(app.DS.Get("paymentAmt"));

			app.DS.update({'TOTALAMT' : totalAmt});

			if(totalAmt >= paymentAmt)
			{

				app.DS.update({'TXAMT' : paymentAmt});
				app.DS.update({'BAL_TXAMT' : Math.abs(parseInt(totalAmt - paymentAmt))});
			}
			else
			{
				app.DS.update({'TXAMT' : totalAmt});
				app.DS.update({'BAL_TXAMT' : "0"});
			}
		},

		processESBSS8ReturnCash :function()
		{
			var txamt = parseInt(app.DS.Get("TXAMT"));
			var TOTALAMT = parseInt(app.DS.Get("TOTALAMT"));

			app.DS.update({'TOTALAMT' : totalAmt});

			if(totalAmt >= paymentAmt)
			{

				app.DS.update({'TXAMT' : paymentAmt});
				app.DS.update({'BAL_TXAMT' : Math.abs(parseInt(totalAmt - paymentAmt))});
			}
			else
			{
				app.DS.update({'TXAMT' : totalAmt});
				app.DS.update({'BAL_TXAMT' : "0"});
			}
		},

		printFakeDate : function()
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			ACCoreJS.Trace("printFakeDate");

			var requestData = {};

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            async: false,
            dataType: "json",
            url: ConfigData.nodeJS.coreEndPoint + "/ThermalPrinter/Print",
            success: function(data)
            {

            }

        	});
		},

		ESBSS8Amend99777toCHID : function()
		{
			var CHID = app.DS.Get("CHID");

			app.DS.update({'TRTXACC' : "99777" + this.convertPaymentIDNumber(CHID)});
			app.DS.update({'@TRTXACC' : "99777" + this.convertPaymentIDNumber(CHID)});
			app.DS.update({'TRTXACC_ORI' : "99777" + this.convertPaymentIDNumber(CHID)});
		},

		convertPaymentIDNumber : function(val)
		{
			var amendVal;

			switch(String(val).charAt(0))
			{
				case "A":
					amendVal = "01";
					break;
				case "B":
					amendVal = "02";
					break;
				case "C":
					amendVal = "03";
					break;
				case "D":
					amendVal = "04";
					break;
				case "E":
					amendVal = "05";
					break;
				case "F":
					amendVal = "06";
					break;
				case "G":
					amendVal = "07";
					break;
				case "H":
					amendVal = "08";
					break;
				case "I":
					amendVal = "09";
					break;
				case "J":
					amendVal = "10";
					break;
				case "K":
					amendVal = "11";
					break;
				case "L":
					amendVal = "12";
					break;
				case "M":
					amendVal = "13";
					break;
				case "N":
					amendVal = "14";
					break;
				case "O":
					amendVal = "15";
					break;
				case "P":
					amendVal = "16";
					break;
				case "Q":
					amendVal = "17";
					break;
				case "R":
					amendVal = "18";
					break;
				case "S":
					amendVal = "19";
					break;
				case "T":
					amendVal = "20";
					break;
				case "U":
					amendVal = "21";
					break;
				case "V":
					amendVal = "22";
					break;
				case "W":
					amendVal = "23";
					break;
				case "X":
					amendVal = "24";
					break;
				case "Y":
					amendVal = "25";
					break;
				case "Z":
					amendVal = "26";
					break;
				default:
					amendVal = String(val).charAt(0);
					break;
			}

			return amendVal + String(val).substring(1);
		},

		formatTaiwanYear4DigitTo3Digits : function(val)
		{
			return String(val).substring(1,val.length);
		},

		convertYYYYMMtoTaiwanYYYMM : function(val)
		{
			var oriVal = val;
			var resultStr = "";

			if(typeof oriVal != "undefined" && oriVal.length >= 4)
			{
				var year = oriVal.substring(0,4);

				var taiwanYear = parseInt(year) - 1911;

				if(taiwanYear >= 100)
					resultStr = "0" + String(taiwanYear) + oriVal.substring(4,6);
				else
					resultStr = "00" + String(taiwanYear) + oriVal.substring(4,6);

				return resultStr;
			}
			else
				return "";

		},

		processESBSS8KioskChipCardStatementPrintData : function()
		{
			var printObj = new Object();
			printObj.BYY = this.formatTaiwanYear4DigitTo3Digits(app.DS.get('BYY'));
			printObj.BMM = String(app.DS.get('BMM')).trim();
			printObj.INTDT = String(app.DS.get('INTDT')).trim();
			printObj.PAYDT = String(app.DS.get('PAYDT')).trim();
			// printObj.PAYDT = "測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試";
			printObj.TAMT = String(app.DS.get('TAMT')).trim();
			printObj.MINPY = String(app.DS.get('MINPY')).trim();
			// printObj.MINPY = String("123123123123123123123123123123123123123");
			printObj.BPAMT = String(app.DS.get('BPAMT')).trim();

			var xmlData = "";
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;

			xmlData = Base64.decode(app.DS.get("DOList"));

			var xmlDoc = $.parseXML(xmlData);
			var tmpObj = new Object();

			var doCounter = 1;
			var remain = true;
			var listCounter = 1;
			var item3 = "";
			var item4 = "";

			$(xmlDoc).find("DO").each(function(index, value)
			{
				tmpObj = new Object();
				item3 = "";
				item4 = "";

				tmpObj.CSMD = String($(this).find("CSMD").text()).trim();
				tmpObj.STMD = String($(this).find("STMD").text()).trim();
				tmpObj.ITEM1 = String($(this).find("ITEM1").text()).trim();
				tmpObj.ITEM2 = String($(this).find("ITEM2").text()).trim();

				// item3 = String($(this).find("ITEM3").text()).trim();
				// item4 = String($(this).find("ITEM4").text()).trim();

				// if(item3.length > 0 && item4.length > 0)
				// {
				// 	tmpObj.ITEM3 = item3 + " / ";
				// 	tmpObj.ITEM4 = item4;
				// }
				// else
				// {
				// 	tmpObj.ITEM3 = item3;
				// 	tmpObj.ITEM4 = item4;
				// }

				tmpObj.ITEM3 = String($(this).find("ITEM3").text()).trim();
				tmpObj.ITEM4 = String($(this).find("ITEM4").text()).trim();
				tmpObj.ITEM5 = String($(this).find("ITEM5").text()).trim();
				tmpObj.ITEM6 = String($(this).find("ITEM6").text()).trim();
				tmpObj.CSCUR = String($(this).find("CSCUR").text()).trim();
				tmpObj.AMTC1 = String($(this).find("AMTC1").text()).trim();
				tmpObj.AMTC2 = String($(this).find("AMTC2").text()).trim();

				newObj.push(tmpObj);

			});


			printObj["list"] = newObj;

			//ACCoreJS.Trace("PrintData : " + JSON.stringify(printObj));

			app.DS.update({"printData" : printObj});
		},

		processESBSS8KioskCCStatementPrintData : function()
		{
			var printObj = new Object();
			printObj.BYY = this.formatTaiwanYear4DigitTo3Digits(app.DS.get('BYY'));
			printObj.BMM = String(app.DS.get('BMM')).trim();
			printObj.INTDT = String(app.DS.get('INTDT')).trim();
			printObj.PAYDT = String(app.DS.get('PAYDT')).trim();
			// printObj.PAYDT = "測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試";
			printObj.TAMT = String(app.DS.get('TAMT')).trim();
			printObj.MINPY = String(app.DS.get('MINPY')).trim();
			// printObj.MINPY = String("123123123123123123123123123123123123123");
			printObj.BPAMT = String(app.DS.get('BPAMT')).trim();

			var xmlData = "";
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;

			xmlData = Base64.decode(app.DS.get("DOList"));

			var xmlDoc = $.parseXML(xmlData);
			var tmpObj = new Object();

			var doCounter = 1;
			var remain = true;
			var listCounter = 1;

			// $(xmlDoc).find("DO").each(function(index, value)
			// {
			// 	tmpObj = new Object();

			// 	tmpObj.CSMD = String($(this).find("CSMD").text()).trim();
			// 	tmpObj.STMD = String($(this).find("STMD").text()).trim();
			// 	tmpObj.ITEM1 = String($(this).find("ITEM1").text()).trim();
			// 	tmpObj.ITEM2 = String($(this).find("ITEM2").text()).trim();
			// 	tmpObj.ITEM3 = String($(this).find("ITEM3").text()).trim();
			// 	tmpObj.ITEM4 = String($(this).find("ITEM4").text()).trim();
			// 	tmpObj.ITEM5 = String($(this).find("ITEM5").text()).trim();
			// 	tmpObj.ITEM6 = String($(this).find("ITEM6").text()).trim();
			// 	tmpObj.CSCUR = String($(this).find("CSCUR").text()).trim();
			// 	tmpObj.AMTC1 = String($(this).find("AMTC1").text()).trim();
			// 	tmpObj.AMTC2 = String($(this).find("AMTC2").text()).trim();

			// 	newObj.push(tmpObj);

			// });


			// printObj["list"] = newObj;

			//ACCoreJS.Trace("PrintData : " + JSON.stringify(printObj));

			app.DS.update({"printData" : printObj});
		},

		ACNodeGeneratePrintPDF : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var param = params.split(',');
			var encodeBase64Str = Base64.encode(JSON.stringify(app.DS.get(param[1])));
			// var encodeBase64Str = "eyJCWVkiOiIxMDQiLCJCTU0iOiIwNSIsIklOVERUIjoiMTA0LzA2LzI3IiwiUEFZRFQiOiLnhKHpnIDnubPmrL7jgIAiLCJUQU1UIjoiMCIsIk1JTlBZIjoiMCIsImxpc3QiOlt7IkNTTUQiOiIiLCJTVE1EIjoiIiwiSVRFTTEiOiLkuIrmnJ/mh4nnubPph5HpoY3vvJrjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIAiLCJJVEVNMiI6IiIsIklURU0zIjoiMCIsIklURU00IjoiIiwiSVRFTTUiOiLjgIDjgIDjgIAiLCJJVEVNNiI6IiIsIkNTQ1VSIjoiIiwiQU1UQzEiOiIiLCJBTVRDMiI6IiJ9LHsiQ1NNRCI6IjIwMTUwNjAyIiwiU1RNRCI6IiIsIklURU0xIjoi44CA5oSf6Kyd5oKo55So57ay6Lev6YqA6KGM57mz5qy+IiwiSVRFTTIiOiIiLCJJVEVNMyI6Ii02NzgiLCJJVEVNNCI6IiIsIklURU01Ijoi44CA44CA44CAIiwiSVRFTTYiOiIiLCJDU0NVUiI6IiIsIkFNVEMxIjoiIiwiQU1UQzIiOiIifSx7IkNTTUQiOiIyMDE1MDYxNSIsIlNUTUQiOiIiLCJJVEVNMSI6IuOAgOaEn+isneaCqOeUqOe2sui3r+mKgOihjOe5s+asviIsIklURU0yIjoiIiwiSVRFTTMiOiItMyw2NDQiLCJJVEVNNCI6IiIsIklURU01Ijoi44CA44CA44CAIiwiSVRFTTYiOiIiLCJDU0NVUiI6IiIsIkFNVEMxIjoiIiwiQU1UQzIiOiIifSx7IkNTTUQiOiIyMDE1MDYxNSIsIlNUTUQiOiIiLCJJVEVNMSI6IuOAgOaEn+isneaCqOeUqOe2sui3r+mKgOihjOe5s+asviIsIklURU0yIjoiIiwiSVRFTTMiOiItMSwzNTYiLCJJVEVNNCI6IiIsIklURU01Ijoi44CA44CA44CAIiwiSVRFTTYiOiIiLCJDU0NVUiI6IiIsIkFNVEMxIjoiIiwiQU1UQzIiOiIifSx7IkNTTUQiOiIiLCJTVE1EIjoiIiwiSVRFTTEiOiLjgIDjgIDjgIDkuIrmnJ/mnKrnubPph5HpoY3vvJrjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIDjgIAiLCJJVEVNMiI6IiIsIklURU0zIjoiIiwiSVRFTTQiOiItNiwzNTYiLCJJVEVNNSI6IuOAgOOAgOOAgCIsIklURU02IjoiIiwiQ1NDVVIiOiIiLCJBTVRDMSI6IiIsIkFNVEMyIjoiIn0seyJDU01EIjoiIiwiU1RNRCI6IiIsIklURU0xIjoi44CA44CA44CA5pys5pyf5oeJ57mz57i96YeR6aGN77ya44CA44CA44CA44CA44CA44CA44CA44CA44CA44CA44CA44CA44CA44CAIiwiSVRFTTIiOiIiLCJJVEVNMyI6IiIsIklURU00IjoiLTYsMzU2IiwiSVRFTTUiOiLjgIDjgIDjgIAiLCJJVEVNNiI6IiIsIkNTQ1VSIjoiIiwiQU1UQzEiOiIiLCJBTVRDMiI6IiJ9XX0=";
			// ACCoreJS.Trace("encodeBase64Str : " + encodeBase64Str);
			var requestData = {formName : param[0] , data : encodeBase64Str , pdf : ConfigData.printPDF};

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            async: false,
            dataType: "json",
            url: ConfigData.nodeJS.coreEndPoint + "/ACPrinter/Print",
            success: function(data)
            {

            }

        	});
		},

		esbKioskSS8AllowTransferOnlyLbl : function(val)
		{
			var status = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if((status.charAt(2) != "1" || status.charAt(7) != "1") && status.charAt(4) == "1")
			{
				return val;
			}
			else
				return "";
		},

		esbKioskSS8AllowCashOnlyLbl : function(val)
		{
			var status = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(status.charAt(4) != "1"  && status.charAt(2) == "1")
			{
				return val;
			}
			else
				return "";
		},

		appendSlashIfValueIsNotEmpty : function(arry)
		{
			var value = "";
			if(arry.length >= 1 && arry[0].length > 0 && arry[1].length > 0)
			{
				value = String(arry[0]) + " / " + String(arry[1]);
			}
			else
			{
				value = String(arry[0]) + String(arry[1]);
			}

			return value;
		},

		hnbcSmartPayRemoveValIfFitInputtype : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODEONLY":
					returnVal = "";
					break;
				case "BARCODE+AMT":
					returnVal = val;
					break;
				case "INPUT":
					returnVal = val;
					break;
			}

			return returnVal;
		},

		hnbcSmartPayRemoveValIfIsNotFitInputtype : function(val)
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			ACCoreJS.Trace("INPUTTYPE : "  + INPUTTYPE);
			var returnVal = "";
			switch(INPUTTYPE)
			{
				case "BARCODEONLY":
					returnVal = val;
					break;
				case "BARCODE+AMT":
					returnVal = "";
					break;
				case "INPUT":
					returnVal = "";
					break;
			}

			return returnVal;
		},

		processHNBCSmartPaymentKioskAcctDataNotFixCardPayment:  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "interNaviNoBar" + '",';
				// selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
				// selectionString += '"nextScreenID" : "' + "TRX_REQ_NOTFIX_CARD_PAYMENT_REQUEST" + '",';

				selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
				selectionString += '"nextScreenID" : "' + "DEVICE_NOTFIX_CARD_PAYMENT_GENERATETAC" + '",';

				selectionString += '"localClass" : "' + "hncbAccountSelectionBtn" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"interNaviData" : "' + "GENERATETAC" + '",';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

        transactXEnableChannel : function(params)
		{
			// var topicID = app.DS.get(params);

			// app.BroadCaster.trigger("transactXEnableChannel");
			app.channel.transactXEnableChannel();
		},

		getRandomUUID : function(val)
		{
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
				{
  				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
  				return v.toString(16);
				});



			return uuid;
		},

		enableAgentVideoContainer : function(param)
		{
			// //ACCoreJS.Trace($("#videoConference"));
			// $("#videoConference").show();
			// var agentUUID = app.DS.get("agentUUID");
			// var userID = "helloWorld";
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				var agentUUID = ACLib.processTransactData(param.agentUUID);
				//ACCoreJS.Trace("AGENT UUID : "  + agentUUID);
				var userID = ACLib.processTransactData(param.userID);
				//ACCoreJS.Trace("userID : "  + userID);
				var sessionID = ACLib.processTransactData(param.sessionID);
				var loc = ConfigData.licodeURL+ "/#terminalClient/" + userID+"/"+agentUUID +"/"+sessionID+"/"+ConfigData.camera.customerCamera;
				//ACCoreJS.Trace(loc);
				ACCoreJS.Trace("enableAgentVideoContainer : " + loc);

				$('#agentVideoConference').attr('src', loc);
			}
		},



		relocateAgentVideoContainer : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				$("#agentVideoConference").css("visibility", "visible");

				if(typeof param.top != "undefined")
					$("#agentVideoConference").css("top", param.top);

				if(typeof param.left != "undefined")
					$("#agentVideoConference").css("left", param.left);

				if(typeof param.width != "undefined")
					$("#agentVideoConference").css("width", param.width);

				if(typeof param.height != "undefined")
					$("#agentVideoConference").css("height", param.height);

				if(typeof param.licodeHeight != "undefined" && typeof param.licodeWidth != "undefined"  )
				{
					var loc = ConfigData.licodeURL+ "/#resizeVideoContainer/" + param.licodeWidth+"/"+param.licodeHeight;
					//ACCoreJS.Trace(ConfigData.licodeURL+ "/#resizeVideoContainer/" + param.licodeWidth+"/"+param.licodeHeight);
					$('#agentVideoConference').attr('src', loc);
				}

			}

		},

		muteUnmuteAgentVideoContainer  : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				if(typeof param != "undefined")
				var loc = ConfigData.licodeURL+ "/#soundControl/" + String(param.isMute);
				//ACCoreJS.Trace(loc);

				$('#agentVideoConference').attr('src', loc);
			}
		},

		hideAgentVideoContainer : function()
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				$("#agentVideoConference").css("visibility", "hidden");
			}
		},

		disableAgentVideoContainer : function()
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				//ACCoreJS.Trace("disableAgentVideoContainer");
				// //ACCoreJS.Trace($("#videoConference"));
				// $("#videoConference").show();
				var loc = ConfigData.licodeURL+ "/";
				$('#agentVideoConference').attr('src', loc);
				$('#agentVideoConference').attr('src', "");
				$("#agentVideoConference").css("visibility", "hidden");
			}

		},

		enableCustomerVideoContainer : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				// //ACCoreJS.Trace($("#videoConference"));
				// $("#videoConference").show();
				// var agentUUID = app.DS.get("agentUUID");
				// var userID = "helloWorld";
				var agentUUID = ACLib.processTransactData(param.agentUUID);
				//ACCoreJS.Trace("enableCustomerVideoContainer AGENT UUID : "  + agentUUID);
				var userID = ACLib.processTransactData(param.userID);
				//ACCoreJS.Trace("enableCustomerVideoContainer userID : "  + userID);
				var loc = ConfigData.licodeURL+ "/#selfTerminalClient/" + userID+"/"+agentUUID+"/"+ConfigData.camera.customerCamera;
				ACCoreJS.Trace("enableCustomerVideoContainer : " + loc);
				//ACCoreJS.Trace(loc);

				$('#selfVideoConference').attr('src', loc);
			}

		},

		muteUnmuteCustomerVideoContainer : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				if(typeof param != "undefined")
				var loc = ConfigData.licodeURL+ "/#soundControl/" + String(param.isMute);
				//ACCoreJS.Trace(loc);

				$('#selfVideoConference').attr('src', loc);
			}
		},

		relocateCustomerVideoContainer : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				$("#selfVideoConference").css("visibility", "visible");

				if(typeof param.top != "undefined")
					$("#selfVideoConference").css("top", param.top);

				if(typeof param.left != "undefined")
					$("#selfVideoConference").css("left", param.left);

				if(typeof param.width != "undefined")
					$("#selfVideoConference").css("width", param.width);

				if(typeof param.height != "undefined")
					$("#selfVideoConference").css("height", param.height);

				// if(typeof param.licodeHeight != "undefined" && typeof param.licodeWidth != "undefined"  )
				// {
				// 	var loc = ConfigData.licodeURL+ "/#resizeVideoContainer/" + param.licodeWidth+"/"+param.licodeHeight;
				// 	//ACCoreJS.Trace(ConfigData.licodeURL+ "/#resizeVideoContainer/" + param.licodeWidth+"/"+param.licodeHeight);
				// 	$('#selfVideoConference').attr('src', loc);
				// }
			}

		},

		hideCustomerVideoContainer : function()
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				$("#agentVideoConference").css("visibility", "hidden");
			}
		},

		disableCustomerVideoContainer : function()
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				var loc = ConfigData.licodeURL+ "/";
				$('#selfVideoConference').attr('src', loc);
				$('#selfVideoConference').attr('src', "");
				$("#selfVideoConference").css("visibility", "hidden");
			}
		},

		enableSecondCameraContainer : function(param)
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				var agentUUID = ACLib.processTransactData(param.agentUUID);
				//ACCoreJS.Trace("AGENT UUID : "  + agentUUID);
				var userID = ACLib.processTransactData(param.userID);
				//ACCoreJS.Trace("userID : "  + userID);
				var sessionID = ACLib.processTransactData(param.sessionID);
				var loc = ConfigData.licodeURL+ "/#secondTerminalClient/" + userID+"/"+agentUUID +"/"+sessionID+"/"+ConfigData.camera.secondCamera;
				//ACCoreJS.Trace(loc);
				ACCoreJS.Trace("enableSecondCameraContainer : " + loc);

				setTimeout(function()
				{
					ACCoreJS.Trace("enableSecondCameraContainer : After delay 5 seconds and display.");
					$('#terminalSecondCamera').attr('src', loc);
				},5000);

			}

		},

		disableSecondCameraContainer : function()
		{
			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				var loc = ConfigData.licodeURL+ "/";
				$('#terminalSecondCamera').attr('src', loc);
				$('#terminalSecondCamera').attr('src', "");
				$("#terminalSecondCamera").css("visibility", "hidden");
			}
		},

		convertFileAsBase64 : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var param = params.split(',');
			var requestData = {file : param[0] , appendString : param[2]};

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            async: false,
            cache : false,
            dataType: "json",
            url: ConfigData.nodeJS.coreEndPoint + "/ACUtility/GetImageBase64",
            success: function(data)
            {
            	var tmpOb = {};
            	tmpOb[param[1]] = data["result"];
                app.DS.update(tmpOb);
            }

        	});
		},

		createKYCPdfAndSubmit : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			ACCoreJS.Trace("Process Function : createKYCPdfAndSubmit");

			var keyArray = {};
			var objArry = {};

			keyArray.formName = "ESBKYCForm";
			keyArray.pdf = "ESBKYCForm";
			keyArray.outputLocation = "C:\\Budds\\SCANDATA\\";

			var today = new Date();
			var todayYear = today.getFullYear() - 1911;

			var todayMonth = today.getMonth()+1;

			if(todayMonth<10)
			{
    			todayMonth='0'+todayMonth
			}

			var todayDate = today.getDate();

			if(todayDate<10)
			{
    			todayDate='0'+todayDate
			}

			objArry.PROCESS_DATE = todayDate + "/" + todayMonth + "/" + todayYear;
			objArry.NAME = app.DS.get('customerName');
			objArry.ID_NO = app.DS.get('customerIDNumber');
			objArry.ACCOUNT_NO = app.DS.get('ACN');
			objArry.SECONDID_VERIFICATION = "yes";
			objArry.SECONDID_TYPE = app.DS.get('customerSecondIDType');
			objArry.SECONDID_OTHER = "";
			objArry.SECONDID_NO = "";
			objArry.ID_PHOTO_VERIFICATION = app.DS.get('idNCustomerMatch');
			objArry.ID_FORGERY_VERIFICATION = app.DS.get('idCondition');

			objArry.DOCUMENT_VERIFICATION = "no";
			objArry.ORIGINAL_DOCUMENT_CHK = "0";
			objArry.ACCOUNT_OPENING_DETAILS_CHK = "0";
			objArry.IMAGES_CHK = "0";

			objArry.IDENTITY_VERIFICATION = "yes";
			objArry.STATUS_VERIFICATION = "yes";

			var tmpOpenPurpose;

			switch(app.DS.get('customerAcctOpenPurpose'))
			{
				case "01":
					tmpOpenPurpose = "0";
					break;
				case "02":
					tmpOpenPurpose = "1";
					break;
				case "04":
					tmpOpenPurpose = "4";
					break;
				case "05":
					tmpOpenPurpose = "5";
					break;
				case "06":
					tmpOpenPurpose = "2";
					break;
			}

			objArry.ACCOUNT_OPENING_PURPOSE_VERIFICATION = tmpOpenPurpose;
			objArry.ACCOUNT_TYPE = app.DS.get('kycAccountOpenTypeStatus');
			objArry.SALARY_INQUIRY_CHK = "0";
			objArry.SALARY_COMPANY_CHK = "0";
			objArry.ACCOUNT_OPENING_PURPOSE_OTHERS = "";
			objArry.AGE_VERIFICATION = "yes";
			objArry.OCCUPATION_VERIFICATION = app.DS.get('jobAppearanceMatch');
			objArry.CONTACT_DETAILS_VERIFICATION = app.DS.get('userBehaviour');
			objArry.DETAILS_VERIFICATION = "yes";
			objArry.AGREENMENT_VERIFICATION = "yes";
			objArry.NON_BUSINESS_TRANSACTION_TYPE = "";

			objArry.NON_BUSINESS_TRANSACTION_OTHERS = "";
			objArry.UNKNOWN_NON_BUSINESS_TRANSACTION_CHK = "";
			objArry.ABNORMAL_ACTIVITIES_VERIFICATION = "yes";
			objArry.USA_CITIZEN_VERIFICATION = "no";
			objArry.USA_CITIZEN_W9_FORM_CHK = "0";
			objArry.USA_CITIZEN_APPLICATION_AGREEMENT_CHK = "0";
			objArry.AMERICAN_OPTION1_CHK = "0";
			objArry.AMERICAN_OPTION2_CHK = "0";
			objArry.AMERICAN_OPTION3_CHK = "0";
			objArry.AMERICAN_OPTION4_CHK = "0";
			objArry.AMERICAN_OPTION5_CHK = "0";
			objArry.AMERICAN_OPTION6_CHK = "0";
			objArry.AMERICAN_OPTION7_CHK = "0";
			objArry.AMERICAN_IDENTIFICATION1_CHK = "0";
			objArry.AMERICAN_IDENTIFICATION2_CHK = "0";
			objArry.AMERICAN_IDENTIFICATION3_CHK = "0";
			objArry.ACCOUNT_OPENING_PURPOSE_VERIFICATION = "";
			objArry.TERMS_AND_CONDITION_CHK = "1";
			objArry.ACCEPTED_CHK = "1";
			objArry.SPECIAL_REASON = "";
			objArry.DECLINED_CHK = "0";
			objArry.NOTIFICATION_CHK = "0";

			objArry.AGENT2 = app.DS.get('field03');
			objArry.AGENT1 = app.DS.get('agentIDCode');

			var requestData = keyArray;
			requestData.arry = objArry;

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            data: requestData,
            async: true,
            cache : false,
            dataType: "json",
            url: ConfigData.nodeJS.utilityEndPoint +"/ACPDFEditor/CreatePDF",
            success: function(data)
            {
            	ACCoreJS.Trace("Create KYC Document Sucessfully");
            	var doumentObj = {};

				doumentObj.sessionId = app.DS.get('sessionID');
				doumentObj.file = "C:\\Budds\\SCANDATA\\ESBKYCForm.pdf";
				doumentObj.fileName = "ESBKYCForm.pdf";
				doumentObj.fileType = "pdf";
				doumentObj.fileCategory = "ESBKYCForm";

            	$.ajax({
	            type: 'POST',
	            data: doumentObj,
	            async: true,
	            cache : false,
	            dataType: "json",
	            url: ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/NewSubmitDocument",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("Uplodate KYC Document Sucessfully");

	            	ACLib.acAgentAudit({action : "SubmitKYCPDF"});
	            }

	        	});
            }

        	});
		},

		imageBarcodeSan : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var requestData = params;

            $.support.cors = true;
            $.ajax({
            type: 'POST',
            async : true,
            cache : false,
            data: requestData,
            dataType: "json",
            url: ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/BARCODEScan",
            success: function(data)
            {
            	var tmpOb = {};
            	tmpOb[params.setterKey] = data["result"];
                app.DS.update(tmpOb);
            }

        	});
		},

		changeTheme: function(val) {
			//ACCoreJS.Trace("change Theme");
			var re = new RegExp('(^|\\s)' + app.theme + '\\S+', 'g');
			$('body').removeClass(function (index, css) { return (css.match (re) || []).join(' '); });
			$('body').addClass(val.newTheme);

			// $(val.selectedElement).removeClass("selected");
			// $(val.selectedElement + "." + val.className).addClass("selected");
		},

		updateConfigData : function(val)
		{
			ConfigData.bank = val.updateVal;
		},

		ExecuteACExtContainer : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var requestData = params;
			var finalCommand = [];

			_.each(params.command , function(item)
			{
				finalCommand.push(ACLib.processTransactData(item));
			});

			requestData.command = finalCommand;

			ACCoreJS.Trace("ExecuteACExtContainer");
			//ACCoreJS.Trace(JSON.stringify(requestData));

            var ajax =
	            $.ajax({
	            type: 'POST',
	            data: requestData,
	            async : true,
	            cache : false,
	            dataType: "json",
	            url: ConfigData.nodeJS.utilityEndPoint + "/ACClientUtility/Spawn",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("Success Response.");
	                // app.BroadCaster.trigger("ACTransactionResponse" , data);
	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ExecuteACExtContainer Success!");
	        })
		},

		TerminalACExtContainer : function(params)
		{
			// if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			// {
			// 	return;
			// }

			// var requestData = params;
			// var finalCommand = [];

			// _.each(params.command , function(item)
			// {
			// 	finalCommand.push(ACLib.processTransactData(item));
			// });

			// requestData.command = finalCommand;

   //          var ajax =
	  //           $.ajax({
	  //           type: 'POST',
	  //           async : true,
	  //           cache : false,
	  //           data: requestData,
	  //           dataType: "json",
	  //           url: ConfigData.nodeJS.utilityEndPoint + "/ACClientUtility/Spawn",
	  //           success: function(data)
	  //           {
	  //           	ACCoreJS.Trace("Success Response.");
	  //               // app.BroadCaster.trigger("ACTransactionResponse" , data);
	  //           }

	  //       	});

	  //       $.when.apply(window , ajax).done(function(){
	  //       	ACCoreJS.Trace("ExecuteACExtContainer Success!");
	  //       })
		},

		ACNodeEditImageFile : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var requestData = params;

            var ajax =
	            $.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.utilityEndPoint + "/ACClientUtility/Exec",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("Success Response.");
	                // app.BroadCaster.trigger("ACTransactionResponse" , data);
	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ACNodeEditImageFile Success!");
	        })
		},

		ACNodeDeleteFile : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			ACCoreJS.Trace("ACNodeDeleteFile");
			//ACCoreJS.Trace(JSON.stringify(params));

			var requestData = params;

            var ajax =
	            $.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.utilityEndPoint + "/ACClientUtility/DeleteFile",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("Success Response.");
	                // app.BroadCaster.trigger("ACTransactionResponse" , data);
	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ACNodeDeleteFile Success!");
	        })
		},

		acAgentAudit : function (params)
		{

			if(ConfigData.producerConsumer.enable == "1" && ConfigData.producerConsumer.role == "terminal")
			{
				// ACCoreJS.Trace("VTMAgentAudit");
				// //ACCoreJS.Trace("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx");
				// //ACCoreJS.Trace(app.dataObj.auditDataColl);

				ACCoreJS.Trace("NODEJS ENDPOINT : "  + ConfigData.nodeJS.broadcastEndPoint + "/ACAudit/VTMAgentAudit");

				var requestData = app.dataObj.auditDataColl[params.action];

				if(typeof requestData != "undefined")
				{
					requestData.action 			= params.action;
					requestData.description 	= ACLib.processTransactData(requestData.description);
					if(requestData.remarks.length > 0)
						requestData.remarks 		= String(ACLib.processObjTransactData(requestData.remarks));
					else
						requestData.remarks 		= "";
					requestData.auditRole 		= "VTM";
					requestData.sessionUUID 	= app.DS.get("sessionID");
				}
				else
				{
					requestData 				= new Object();
					requestData.action 			= params.action;
					requestData.description 	= "Default Description";
					requestData.remarks 		= "";
					requestData.auditRole 		= "VTM";
					requestData.sessionUUID 	= app.DS.get("sessionID");
				}


				// ACCoreJS.Trace(JSON.stringify(requestData));

				$.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.broadcastEndPoint + "/ACAudit/VTMAgentAudit"

	        	});
			}

		},

		processObjTransactData : function(objString)
		{
			var object = JSON.parse(objString);

			ACCoreJS.Trace("AUDITTTTTTTTTTTTTTTTTTT");
			ACCoreJS.Trace(objString);

			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			tmpOb = {};

			$.each(object , function(key , value)
			{
				ACCoreJS.Trace(key + " : " + value);
				if(typeof value != "undefined" && value != "undefined")
					tmpOb[key] = ACLib.processTransactData(value);
				else
					tmpOb[key] = "";
			});

			//ACCoreJS.Trace( JSON.stringify(tmpOb));

			return JSON.stringify(tmpOb);
		},

		hideSelectedAcct : function(param)
		{
			$("#selectedAcctContainer").hide();
		},

		TransactXSendCache : function(param)
		{
			ACCoreJS.Trace("TransactXSendCache");
			var keyArray = {};
			var dsKey = "";
			var dsVal = "";

			var extraObj = _.pairs(param);

			_.each(extraObj , function(items)
			{
				dsKey = items[0];
				dsVal = items[1];
				keyArray[dsKey] = ACLib.getACProcessData(dsVal);
			});

			var requestData = new Object();
			requestData["type"] = "publish";
			requestData["event"] = "sendCache";
			requestData["data"]  = keyArray;

			if(typeof app != "undefined" && typeof app.channel != "undefined")
				app.channel.transactXPublish("sendCache" , keyArray);
		},

		displayPopUpContainer : function(type)
		{
			app.BroadCaster.trigger("DisplayPopUpContainer" , {type : type});
		},

		ProcessFormComponentLabelsData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(formItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				_.each(formItem , function(formItemChild)
				{
					formItemChild.labelCol.labels = [];
					formItemChild.itemCol.labels = [];

					_.each(formItemChild.labelCol.labelsOri , function(labelItem)
					{
						tmpOb = {};

						$.each(labelItem , function(key , value)
						{
							if(typeof value != "undefined" && value != "undefined")
								tmpOb[key] = ACLib.processTransactData(value);
							else
								tmpOb[key] = "";
						});

						tmpOb["text"] = tmpOb["L"+ String(app.DS.getLanguageIdx())];
						tmpOb["localClass"] = tmpOb["L" + String(app.DS.getLanguageIdx() + "Class")];

						formItemChild.labelCol.labels.push(tmpOb);
					});

					_.each(formItemChild.itemCol.labelsOri , function(labelItem)
					{
						tmpOb = {};

						$.each(labelItem , function(key , value)
						{
							if(typeof value != "undefined" && value != "undefined")
								tmpOb[key] = ACLib.processTransactData(value);
							else
								tmpOb[key] = "";
						});

						tmpOb["text"] = tmpOb["L"+ String(app.DS.getLanguageIdx())];
						tmpOb["localClass"] = tmpOb["L" + String(app.DS.getLanguageIdx() + "Class")];

						formItemChild.itemCol.labels.push(tmpOb);
					});
				});
			});
		},
		ProcessPopUpListsFunctions: function(object) {
			if(typeof object.model.get('lists') != "undefined" && typeof object.model.get('lists')['function'] != "undefined") 	{
				_.each(object.model.get('lists')['function'] , function(functionItem) {
					if(typeof functionItem.name != "undefined" && typeof functionItem.params != "undefined")
						ACLib[functionItem.name](object, functionItem.params);
					else
						ACLib[functionItem](object);
				});
			}
		},
		generatePopUpListItem: function(object, param) {
			ACCoreJS.Trace("generatePopUpListItem Start");
			var params = param.split(',');
			// if(params[0] != "city") {
			// 	params.push(params[0]);
			// 	ACPopupGeneration.generateListItem(object, params);
			// } else	{
			//  // if(params[0] == "city")

			// 	params.push($("#accountOpeningAdditionContactAddStateDDL").val());
			// 	$("#accountOpeningAdditionContactAddAreaDDL").val("");
			// 	ACPopupGeneration.generateListItem(object, params);
			// }

			if(params[0] == "city")
			{
				params.push($("#accountOpeningAdditionContactAddStateDDL").val());
				$("#accountOpeningAdditionContactAddAreaDDL").val("");
				ACPopupGeneration.generateListItem(object, params);
			}
			else if(params[0] == "street")
			{
				params.push($("#accountOpeningAdditionContactAddStateDDL").val());
				params.push($("#accountOpeningAdditionContactAddAreaDDL").val());
				// $("#accountOpeningAdditionContactAddAreaDDL").val("");
				ACPopupGeneration.generateListItem(object, params);
			}
			else
			{
				params.push(params[0]);
				ACPopupGeneration.generateListItem(object, params);
			}

			ACCoreJS.Trace("generatePopUpListItem End");
		},

		processPopUpListItemValueReturn : function(type, value)
		{
			var params = [];
			var obj = {};

			params.push(type);

			if(type == "city")
			{
				//ACCoreJS.Trace($("#accountOpeningAdditionContactAddStateDDL"))
				//ACCoreJS.Trace($("#accountOpeningAdditionContactAddStateDDL").val())
				params.push($("#accountOpeningAdditionContactAddStateDDL").val());
				// $("#accountOpeningAdditionContactAddAreaDDL").val("");
			}
			else if(type == "street")
			{
				params.push($("#accountOpeningAdditionContactAddStateDDL").val());
				params.push($("#accountOpeningAdditionContactAddAreaDDL").val());
				// $("#accountOpeningAdditionContactAddAreaDDL").val("");
			}
			else
			{
				params.push(type);
			}

			obj = ACPopupGeneration.processTaiwanAddressDataFromFiles(params, value);

			return obj;
		},

		processOCRFrontData : function()
		{
			var name 			= 	String(app.DS.get('name')).replace(/ /g,'');
			var birthdayyear 	= 	String(app.DS.get('birthdayyear')).replace(/ /g,'');
			var issueData 		= 	String(app.DS.get('issueplace')).replace(/ /g,'');

			// issueData           = 	ACCoreJS.SingleByte2DoubleByte(issueData);

			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(name);
			name           		= 	ACCoreJS.DoubleByte2SingleByte(name);
			name 				= 	name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(name);

			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(birthdayyear);
			birthdayyear        = 	ACCoreJS.DoubleByte2SingleByte(birthdayyear);
			birthdayyear 		= 	birthdayyear.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(birthdayyear);

			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(issueData);
			issueData           = 	ACCoreJS.DoubleByte2SingleByte(issueData);


			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(issueData);

			var issueplace 		=	"";
			var issueType		=	"";
			var issueDate		=	"";

			// 民國79年2目16日
			// 民團m4年4月30 日 (北巿）換發

			birthdayyear = birthdayyear.substring(2, birthdayyear.length);
			var year = birthdayyear.substring(0, birthdayyear.indexOf('年'));
			if(year.length == 2)
				year = "0"+year;
			var month = birthdayyear.substring(birthdayyear.indexOf('年') + 1 , birthdayyear.indexOf('月'));
			if(month.length < 2)
				month = "0" + month;
			var day = birthdayyear.substring(birthdayyear.indexOf('月') + 1, birthdayyear.indexOf('日'));
			if(day.length < 2)
				day = "0" + day;
			var finalbirthdayyear = year + month + day;

			var issueDate 	= 	issueData.substring(2, issueData.indexOf('('));
			issueDate 		= 	issueDate.replace(/\W/g, '');


			var issueyear = issueDate.substring(0, issueDate.indexOf('年'));
			var issuemonth = issueDate.substring(issueDate.indexOf('年') + 1 , issueDate.indexOf('月'));
			if(issuemonth.length < 2)
				issuemonth = "0" + issuemonth;
			var issueday = issueDate.substring(issueDate.indexOf('月') + 1, issueDate.indexOf('日'));
			if(issueday.length < 2)
				issueday = "0" + issueday;
			var finalissueDate = issueyear + issuemonth + issueday;

			// //ACCoreJS.Trace(issueData.indexOf('('));
			// //ACCoreJS.Trace(issueData.indexOf('）'));
			if(issueData.indexOf(')') > -1)
			{
				issueplace = issueData.substring(issueData.indexOf('(') + 1, issueData.indexOf('）'));
				issueType = issueData.substring(issueData.indexOf(')') + 1, issueData.length);
			}
			else
			{
				issueplace = issueData.substring(issueData.indexOf('(') + 1, issueData.indexOf(')'));
				issueType = issueData.substring(issueData.indexOf(')') + 1, issueData.length);
			}

			app.DS.update({ "name" : name});
			app.DS.update({ "birthdayyear" : finalbirthdayyear});
			app.DS.update({ "issueplace" : issueplace});
			app.DS.update({ "issueType" : issueType});
			app.DS.update({ "issueDate" : finalissueDate});
		},

		processOCRBackData : function()
		{
			var birthdayPlace 	= 	String(app.DS.get('birthdayPlace')).replace(/ /g,'');
			var address1 		= 	String(app.DS.get('address1')).replace(/ /g,'');
			var address2 		= 	String(app.DS.get('address2')).replace(/ /g,'');

			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(birthdayPlace);
			birthdayPlace       = 	ACCoreJS.DoubleByte2SingleByte(birthdayPlace);
			birthdayPlace 		= 	birthdayPlace.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(birthdayPlace);			
			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(address1);
			address1        	= 	ACCoreJS.DoubleByte2SingleByte(address1);
			address1 			= 	address1.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(address1);			
			ACCoreJS.Trace("Before Double Byte");
			ACCoreJS.Trace(address2);
			address2        	= 	ACCoreJS.DoubleByte2SingleByte(address2);
			address2 			= 	address2.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			ACCoreJS.Trace("After Double Byte");
			ACCoreJS.Trace(address2);
			app.DS.update({ "birthdayPlace" : birthdayPlace});
			app.DS.update({ "address1" : address1});

			if(address1.indexOf('里') > -1)
			{
				if(address1.indexOf('區') > -1)
				{
					app.DS.update({ "zone1" : address1.substring(address1.indexOf('區') + 1 , address1.indexOf('里'))});
				}
			}

			if(address1.indexOf('鄰') > -1)
			{
				if(address1.indexOf('里') > -1)
				{
					app.DS.update({ "zone2" : address1.substring(address1.indexOf('里') + 1 , address1.indexOf('鄰'))});
				}
			}

			app.DS.update({ "address2" : address2});
		},

		processATMCMachineData : function()
		{
			var terminalID 		=	String(ACCoreJS.GetUCDIString(ACVar.CDI_ATM_ID));
			var branchCode		=	terminalID.substr(1, 4);

			var tmpObj			=	new Object();
			tmpObj.terminalID	=	terminalID;
			tmpObj.branchCode	=	branchCode;

			app.DS.update(tmpObj);

		},

		processGetTodayYear : function(val)
		{
			var today = new Date();
			var finalVal = today.getFullYear() - 1911;

			return finalVal;
		},

		processGetTodayMonth : function(val)
		{
			var today = new Date();
			var finalVal = today.getMonth()+1;

			if(finalVal<10)
			{
    			finalVal='0'+finalVal
			}

			return finalVal;
		},

		processGetTodayDay : function(val)
		{
			var today = new Date();
			var finalVal = today.getDate();

			if(finalVal<10)
			{
    			finalVal='0'+finalVal
			}

			return finalVal;
		},

		processTrueFalseTo01 : function(val)
		{
			if(String(val) == "true")
				return "1";
			else
				return "0";
		},
		vtmAgreedTnC: function(params) {
			var element;

			ACCoreJS.Trace("**********************************");
			ACCoreJS.Trace("FUNCTION: vtmAgreedTnC");
			try{
				ACCoreJS.Trace("ELEMENT: " + params.checkboxElement);
				element = $(params.checkboxElement);

				if(!element.prop('checked')) element.click();
			} catch(e) {
				ACCoreJS.Trace("ERROR: " + e.msg);
			} finally {
				if(element != null) {
					element.off();
					element = null;
					ACCoreJS.Trace("CLEAR VARIABLES");
				}
				ACCoreJS.Trace("FUNCTION END");
			}

			ACCoreJS.Trace("**********************************");
		},

		convertDoubleByte : function(val) {
			ACCoreJS.Trace("**********************************");
			ACCoreJS.Trace("FUNCTION: convertDoubleByte");
			var v = val;
			var returnValue = "";
			ACCoreJS.Trace("VALUE: " + v);
			if(v == 'NaN' || v == null || v == '') {
				returnValue = "";
			} else {
				result="";
				for(i=0;i <= v.length;i++){
					if( v.charCodeAt(i) == 32){
						result+=" ";
					}else{
						if(v.charCodeAt(i) <= 126 && v.charCodeAt(i) >= 33){
							result += String.fromCharCode(v.charCodeAt(i) + 65248);
						} else {
							result += String.fromCharCode(v.charCodeAt(i));
						}
					}
				}
				v=result;

				returnValue = v;

			}
			ACCoreJS.Trace("RETURN VALUE: " + returnValue);
			ACCoreJS.Trace("**********************************");

			return v;
		},

		convertDoubleByteByEO : function(val) {
			ACCoreJS.Trace("**********************************");
			ACCoreJS.Trace("FUNCTION: convertDoubleByteByEO");
			var v = ACCoreJS.SingleByte2DoubleByte(val);

			ACCoreJS.Trace("RETURN VALUE: " + v);
			ACCoreJS.Trace("**********************************");

			return v;
		},

		elementZoomIn: function(obj, params) {
			ACCoreJS.Trace("**********************************");
			ACCoreJS.Trace("FUNCTION: elementZoomIn");
			var maxWidth = 5000;
			var width = $('.innerPopUpAreaImages').css('width');
			var newWidth = parseInt(width) + 50;

			if(newWidth < maxWidth)
				$('.innerPopUpAreaImages').css('width', (parseInt(width) + 50) + "px");
			else
				ACCoreJS.Trace("Reached Maximum Width");

			ACCoreJS.Trace("elementZoomIn End");
			ACCoreJS.Trace("**********************************");
		},

		elementZoomOut: function(obj, params) {
			ACCoreJS.Trace("**********************************");
			ACCoreJS.Trace("FUNCTION: elementZoomOut");
			var minWidth = 500;
			var fixWidth = 956;
			var width = $('.innerPopUpAreaImages').css('width');
			var newWidth = (parseInt(width) - 50);

			if(newWidth > 500 )
				$('.innerPopUpAreaImages').css('width', (parseInt(width) - 50) + "px");
			else
				ACCoreJS.Trace("Reached Minimum Width");

			ACCoreJS.Trace("elementZoomOut End");
			ACCoreJS.Trace("**********************************");
		},

		toggleZoomClass: function() {
			$(".buttonZoomIn, .buttonZoomOut").toggleClass("hidden");
		},

		processTXACCto13DigitAcct : function(val)
		{
			return val.substr(3 , 13);
		},

		ACNodeOCRFiles : function(params)
		{
			// alert(ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/OCRFiles");
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var requestData = params;

            var ajax =
	            $.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/OCRFiles",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("ACNodeOCRFiles : OCR Result Completed! Update response data.");
	            	var tmpObj = {};
	            	ACCoreJS.Trace(data);
	            	//ACCoreJS.Trace(Object.prototype.toString.call( data ));
	            	// app.DS.update(tmpObj);
	                // app.BroadCaster.trigger("ACTransactionResponse" , data);

	                if( Object.prototype.toString.call( data ) === '[object Array]' )
					{
						ACCoreJS.Trace("[object Array]");
						for(var i = 0 ; i < data.length ; i++)
						{
							_.each(data[i] , function(val, key)
							{
								tmpObj = {};
								tmpObj[key] = val;

								app.DS.update( tmpObj);
							});
						}
					}
					else if( Object.prototype.toString.call( data ) === '[object Object]' )
					{

						ACCoreJS.Trace("[object Object]");
						_.each(data , function(parentVal, parentKey)
						{
							// ACCoreJS.Trace(Object.prototype.toString.call( parentVal ));
							if(Object.prototype.toString.call( parentVal ) === '[object Array]')
							{
								ACCoreJS.Trace(parentVal.length);
								for(var i = 0 ; i < parentVal.length ; i++)
								{
									ACCoreJS.Trace(parentVal[i]);
									_.each(parentVal[i] , function(val, key)
									{
										tmpObj = {};
										tmpObj[key] = val;

										app.DS.update( tmpObj);
									});
								}
							}
							else
							{
								_.each(parentVal , function(val, key)
								{
									tmpObj = {};
									tmpObj[key] = val;

									app.DS.update( tmpObj);
								});
							}

						});

					}
					else
					{
						ACCoreJS.Trace("SINI?!");
						_.each(data , function(val, key)
						{
							tmpObj = {};
							tmpObj[key] = val;

							app.DS.update( tmpObj);
						});
					}

					ACLib.processOCRFrontData();
					ACLib.processOCRBackData();
	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ACNodeOCRFiles Success!");
	        })
		},

		ACNodeSubmitFiles : function(params)
		{
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			// //ACCoreJS.Trace("ACNodeSubmitFiles");

			var requestData = {};
			requestData.files = [];

			var tmpObj = {};
			var oriParams = params;

			// //ACCoreJS.Trace("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
			// //ACCoreJS.Trace(requestData);
			// //ACCoreJS.Trace("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
			// //ACCoreJS.Trace(oriParams);
			// //ACCoreJS.Trace("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

			for(var i = 0 ; i < oriParams.files.length ; i++)
			{
				var dsKey, dsVal;

				// //ACCoreJS.Trace(requestData.files[i])
				tmpObj = new Object();

				_.each(oriParams.files[i] , function(key , val)
				{

					// //ACCoreJS.Trace(val)
					// //ACCoreJS.Trace(key)
					dsKey = val;
					dsVal = key;
					tmpObj[dsKey] = ACLib.getACProcessData(dsVal);

				});

				requestData.files.push(tmpObj);

			}


			// //ACCoreJS.Trace(requestData);

            var ajax =
	            $.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/SubmitDocuments",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("ACNodeSubmitFiles : Submit Files Completed!");
	                // app.BroadCaster.trigger("ACTransactionResponse" , data);

	                // //ACCoreJS.Trace(requestData.notification.length)
	                // //ACCoreJS.Trace(requestData.notification)
	               	for(var x = 0 ; x < oriParams.notification.length ; x++)
	               	{
	               		// //ACCoreJS.Trace(requestData.notification[x]['data'])
	               		// //ACCoreJS.Trace(requestData.notification[x]['action'])
		                app.BroadCaster.trigger("acNodeAssistanceRequest" ,
						{
								data  				: oriParams.notification[x]['data'],
								action 				: oriParams.notification[x]['action'],
								timerCount			: 1 * 1000 * 1.2,
								doNotWaitResponse	: "1"

						});
	               	}

	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ACNodeSubmitFiles Success!");
	        })
		},

		ACNodeGetUserExt : function(params)
		{
			ACCoreJS.Trace("ACNodeGetUserExt : Request");

			// alert(ConfigData.nodeJS.coreEndPoint + "/ACDocumentManagement/OCRFiles");
			if(ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal")
			{
				return;
			}

			var extraObj = _.pairs(params);

			var dsKey = "";
			var dsVal = "";
			var keyArray = {};

			_.each(extraObj , function(items)
			{
				dsKey = items[0];
				dsVal = items[1];

				keyArray[dsKey] = ACLib.getACProcessData(dsVal);
			});

			var requestData = keyArray;

			//ACCoreJS.Trace("ACNodeGetUserExt : Request Data");
			//ACCoreJS.Trace(requestData);

            var ajax =
	            $.ajax({
	            type: 'POST',
	            async : true,
	            cache : false,
	            data: requestData,
	            dataType: "json",
	            url: ConfigData.nodeJS.coreEndPoint + "/ACClientVTM/GetUserExtensionData",
	            success: function(data)
	            {
	            	ACCoreJS.Trace("ACNodeGetUserExt : Successfully");
	            	
	            	ACLib.processNodeJsResponseData(data);
					// ACLib.processOCRFrontData();
					// ACLib.processOCRBackData();
	            }

	        	});

	        $.when.apply(window , ajax).done(function(){
	        	ACCoreJS.Trace("ACNodeOCRFiles Success!");
	        })
		},

		processNodeJsResponseData : function(params)
		{
			var tmpObj = {};

            if( Object.prototype.toString.call( params["data"] ) === '[object Array]' )
			{
				 ACCoreJS.Trace("[object Array]");
				for(var i = 0 ; i < params["data"].length ; i++)
				{
					_.each(params["data"][i] , function(val, key)
					{
						tmpObj = {};
						tmpObj[key] = val;

						app.DS.update( tmpObj);
					});
				}
			}
			else if( Object.prototype.toString.call( params["data"] ) === '[object Object]' )
			{

				 ACCoreJS.Trace("[object Object]");
				_.each(params["data"] , function(parentVal, parentKey)
				{
					_.each(parentVal , function(val, key)
					{
						tmpObj = {};
						tmpObj[key] = val;

						app.DS.update( tmpObj);
					});
				});

			}
			else
			{
				 ACCoreJS.Trace("SINI?!");
				_.each(params["data"] , function(val, key)
				{
					tmpObj = {};
					tmpObj[key] = val;

					app.DS.update( tmpObj);
				});
			}
		},

		processBonusPointProductMaxQuantity : function()
		{
			var prodBonusPoint = app.DS.get("TOTAL_PROD_BONUSPOINT");
			var bonusPoint = parseInt(app.DS.get("BONUSPOINT"));
			var quantity = parseInt(parseInt(bonusPoint)/parseInt(prodBonusPoint));

			app.DS.update({"PROD_BONUSPOINT_MAX" : String(quantity)});
		},

		processBonusPointTotalPointCalculation : function()
		{
			var inputValue = app.DS.Get("current+Input+Value");
			var cashValue = app.DS.Get("PROD_BONUSPOINT_ORI");

			// alert(parseInt(inputValue))

			var afterCalculatVal = parseInt(inputValue) * parseInt(cashValue);

			if(isNaN(parseInt(afterCalculatVal)))
			{
				afterCalculatVal= 0;
			}

			app.DS.update({ "TOTAL_PROD_BONUSPOINT" : afterCalculatVal });
			//ACCoreJS.Trace("SET TOTALWITHDRAWALAMT : " + FormatInput.currency(afterCalculatVal));
		},

		processBonusPointBalanceCalculation : function()
		{
			var prodBonusPoint = app.DS.get("TOTAL_PROD_BONUSPOINT");
			var bonusPoint = parseInt(app.DS.get("BONUSPOINT"));

			var balance = parseInt(parseInt(bonusPoint) - parseInt(prodBonusPoint));

			if(isNaN(parseInt(balance)))
			{
				balance= 0;
			}

			app.DS.update({ "BALANCE_PROD_BONUSPOINT" : balance });
		},
		
        GetTerminalLanguageIdx: function() {
            var selectedLang = 0;
            var baseLanguageOffset = ACCoreJS.GetComInt(1248).toString();
            var languageSetting = ""; //ACCoreJS.GetUCDIString("ssmglanguagesetting");

            if (baseLanguageOffset == "" || languageSetting == "" || baseLanguageOffset == "1" ||
                baseLanguageOffset == null || languageSetting == null) {
                selectedLang = 1;
                return selectedLang;
            }

            var languageSettingArry = languageSetting.split(',');

            for (var i = 0; i < languageSettingArry.length; i++) {
                if (baseLanguageOffset == languageSettingArry[i]) {
                    selectedLang = i + 1;
                    break;
                }
            }

            selectedLangG = selectedLang;

            return selectedLang;
        },
		resetFlags: function() {},
		showHeader: function() {},
		showLanguage: function() {},

		ProcessHeaderButtonLabelsLanguageData : function (object) {
			if(typeof object != "undefined") {
				obj = object.toJSON();
				$.each(obj, function(key, val) {
					object.get(key)["labels"][0]["text"] = obj[key]["labels"][0]["L" + String(app.DS.getLanguageIdx())];
					object.get(key)["labels"][0]["localClass"] = obj[key]["labels"][0]["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			}
		},

		GetComValues: function(value) {
			var key = value;
			var prefix = key.charAt(0);
			var val = "";

			switch(prefix) {
				case "@": //UCDIString
					key = String(key).substring(1 , String(key).length);
					val = ACCoreJS.GetUCDIString(key);
					break;
				case "&": //UCDIINT
					key = String(key).substring(1 , String(key).length);
					val = ACCoreJS.GetUCDIIntegar(key);
					break;
				case "#": //COMString
					key = String(key).substring(1 , String(key).length);
					val = String(ACCoreJS.GetComString(key)).replace(/(\r\n|\n|\r)/gm,"");
					break;
				case "%": //ComInt
					key = String(key).substring(1 , String(key).length);
					val = ACCoreJS.GetComInt(key);
					break;
				case "{":
					if(String(key).lastIndexOf('}') > 0) {
						valKey = String(value).substring(1 , String(value).length - 1);
						val = app.DS.Get(valKey);
					} else {
						val = value;
					}
					break;
				default:
					key = key;
					val = app.DS.Get(key);

					if(typeof val == "undefined") val = key;
					break;
			}

			return val;
		},
		
		ProcessAccountSelections:function(object) {
			var key = object.get("data");
			var prefix = key.charAt(0);
			var val = "";
			var buttons = [];
			var FDKPositions = object.get("FDKPositions");
			var naviType = object.get("navigation")["naviType"];
			var nextScreenTemplate = object.get("navigation")["nextScreenTemplate"];
			var nextScreenID = object.get("navigation")["nextScreenID"];
			var titles = object.get("menuTitleProcessing");
			var screens = object.get("screens");
			var lineSeperator = object.get("seperator");
			var screenKey;
			
			val = this.GetComValues(key); //Replace with function
			
			ACCoreJS.Trace(" key >>>>>> " + key);
			ACCoreJS.Trace(" val >>>>>> " + val);

			//MenuTitle Processing
			if(typeof titles != "undefined") {
				var menuTitles = {};

				$.each(titles, function(idx, title) {
					var screenValues = val.split(lineSeperator);
					var result = "";
					$.each(title.lines, function(sIdx, search){
						_.some(screenValues, function(value) {
							if(value.substr(0,2) == search) {
								if(result.length > 0) { result += "<br />"; }
								result += value.substr(2).trim();

								return;
							}
						});
					});
					menuTitles[title.name] = result;
				});

				object.set(menuTitles);
			}
			//End

			//Get Screen Key
			$.each(screens, function(idx, scn){
				if(val.indexOf(idx) >= 0) {
					screenKey = idx;
					return;
				}
			});

			if(typeof screenKey == "undefined")
				FDKPositions = object.get("defaultScreen");
			else
				FDKPositions = screens[screenKey];
			

			$.each(FDKPositions, function(idx, FDK){
				var lines = FDK.lines;
				var start;
				var end;
				var lineSeperatorIndex;
				var endOfLine;
				var display = "";
				var data = "";
				var button = {};

				button.setters = {};

				$.each(lines, function(index, line){
					line = lineSeperator + line;
					start = FDK.start[index];
					ACCoreJS.Trace(" >>>> " + line);
					end = FDK.end[index];
					
					//lineValue = val.substr(val.indexOf(line)).substring(start + line.length, end + line.length).trim();
					//endOfLine = val.indexOf(lineSeperator, start + line.length);
					//if(end > endOfLine) { end = endOfLine; }
					
					//Working
					//lineValue = val.substr(val.indexOf(line)).substring(start + line.length, end + line.length).trim();
					
					if(val.indexOf(line) < 0)
						lineValue = "";
					else
						lineValue = val.substr(val.indexOf(line) + 1);

					ACCoreJS.Trace("1 lineValue >>>> " + lineValue);

					lineSeperatorIndex = lineValue.indexOf(lineSeperator);

					ACCoreJS.Trace("2 lineSeperatorIndex >>>> " + lineSeperatorIndex);

					if(lineSeperatorIndex > 0)
						lineValue = lineValue.substring(0, lineSeperatorIndex);

					ACCoreJS.Trace("3 lineValue >>>> " + lineValue);
					ACCoreJS.Trace("4 end >>>> " + end);

					if(end > lineValue.length)
						end = lineValue.length - 1;

					ACCoreJS.Trace("5 end >>>> " + end);

					lineValue = lineValue.substring(start + line.length - 1, end + line.length -1).trim();

					ACCoreJS.Trace("5 lineValue >>>> " + lineValue);
					
					if(lineValue.length > 0) {
						if(index > 0) { 
							display += "<br />"; 
							data += " - ";
						}
						display += lineValue;
						data += lineValue;
					}

					if(typeof FDK.linesSetters != "undefined" && typeof FDK.linesSetters[index] != "undefined" 
							&& FDK.linesSetters[index] != "") {
						button.setters[FDK.linesSetters[index]] = lineValue;
					}
				});

				if(display.length > 0) {
					button.label1 = display.trim();
					button.naviType = naviType;
					button.nextScreenTemplate = nextScreenTemplate;
					button.nextScreenID = nextScreenID;
					button.localClass = "FDK" + idx;
					button.data = data;
					button.setters["ACCOUNTDISPLAY"] = data;

					buttons.push(button);
				}
			});

			//ACCoreJS.Trace(JSON.stringify(buttons));

			object.set({"buttons" : { "mainmenu" : buttons }});
		},
		ProcessLanguageUpdateFunctions: function(object) {
			if(typeof object.model.get('functions') != "undefined" && typeof object.model.get('functions')['languageUpdateFunctions'] != "undefined") {
				_.each(object.model.get('functions')['languageUpdateFunctions'] , function(functionItem) {
					if(typeof functionItem.name != "undefined" && typeof functionItem.params != "undefined")
						ACLib[functionItem.name](object, functionItem.params);
					else
						ACLib[functionItem](object);
				});
			}
		},			
		ProcessLanguageAndFont : function (object, params) {
			var processObject = "buttons"
			var newObj = [];
			
			$.each(object.get(processObject) , function(key, value) {
				if(typeof value.type != "undefined" && value.type === params.type) {
					if(value.ID === params.ID) { value.selected = "1"; } else { value.selected = "0"; }
				} 
				newObj.push(value);

			});
			
			object.set(processObject, newObj);
		},
		/*changeApplicationLanguageIdx : function(params) {
			var languageIdxVal = parseInt(params);

			app.DS.setLanguageIdx(languageIdxVal);
			app.BroadCaster.trigger("LanguageUpdate");
		},*/
		showLanguage: function() { $("#languageFontContainer") .show(); },
		hideLanguage: function() { $("#languageFontContainer").hide(); },
		ProcessBeforeRenderFunctions : function(object) {
			if(typeof object.model.get('functions') != "undefined" && typeof object.model.get('functions')['beforeRenderFunctions'] != "undefined")
			{
				_.each(object.model.get('functions')['beforeRenderFunctions'] , function(functionItem)
				{
					if(typeof functionItem.name != "undefined" && typeof functionItem.params != "undefined")
					{
						ACLib[functionItem.name](object, functionItem.params);
					}
					else
					{
						ACLib[functionItem](object);
					}
				});
			}
		},

		ProcessNaviFunctions : function(object) {
			if(typeof object.model.get('functions') != "undefined" && typeof object.model.get('functions')['naviFunctions'] != "undefined") {
				_.each(object.model.get('functions')['naviFunctions'] , function(functionItem) {
					if(typeof functionItem.name != "undefined" && typeof functionItem.params != "undefined")
						ACLib[functionItem.name](object, functionItem.params);
					else
						ACLib[functionItem](object);
				});
			}
		},

		ProcessMoreInfoLabelsLanguageData : function (object) {
			
			if(typeof object.get("moreInfo") != "undefined" && typeof object.get("moreInfo").labels != "undefined") {
				_.each(object.get("moreInfo").labels , function(labelsItem) {
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
				});
			}

			if(typeof object.get("lists") != "undefined" && typeof object.get("lists").list != "undefined") {
				_.each(object.get("lists").list, function(labelsItem) {
					if(typeof labelsItem.labelsOri != "undefined") {
						$.each(labelsItem.labelsOri, function(index, item) {
							item["text"] = item["L" + String(app.DS.getLanguageIdx())];
							item["localClass"] = item["L" + String(app.DS.getLanguageIdx() + "Class")];
						});
					}
					
					if(typeof labelsItem.moreInformation != "undefined" && typeof labelsItem.moreInformation.labelsOri != "undefined") {
						$.each(labelsItem.moreInformation.labelsOri, function(index, item) {
							item["text"] = item["L" + String(app.DS.getLanguageIdx())];
						});
					}
				});
			}
		},

		ProcessMoreInfoStandardLabelsData : function (object) {
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";
			_.each(object.get("moreInfo").labelsOri , function(labelsItem) {
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";
				incomplete = 1;
				
				$.each(labelsItem , function(key , value) {
					incomplete = 1;
					do {
						value = String(value);
						oriKey = "";
						valKey = "";
						val = "";

						if(value.indexOf('[[') > -1)
						{
							oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
							valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

							val = ACLib.ProcessGenericMappingDataText(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						}
						
						if(value.indexOf('[@') > -1) {
							oriKey = value.substring(value.indexOf('[@') , value.indexOf(']' , value.indexOf('[@'))+ 1);
							valKey = value.substring(value.indexOf('[@') + 2 , value.indexOf(']' , value.indexOf('[@')));

							val = ACCoreJS.GetUCDIString(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						} else if(value.indexOf('[&') > -1) {
							oriKey = value.substring(value.indexOf('[&') , value.indexOf(']' , value.indexOf('[&'))+ 1);
							valKey = value.substring(value.indexOf('[&') + 2 , value.indexOf(']' , value.indexOf('[&')));

							val = ACCoreJS.GetUCDIIntegar(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						} else if(value.indexOf('[#') > -1) {
							oriKey = value.substring(value.indexOf('[#') , value.indexOf(']' , value.indexOf('[#'))+ 1);
							valKey = value.substring(value.indexOf('[#') + 2 , value.indexOf(']' , value.indexOf('[#')));

							val = ACCoreJS.GetComString(valKey);
							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						} else if(value.indexOf('[%') > -1) {
							oriKey = value.substring(value.indexOf('[%') , value.indexOf(']' , value.indexOf('[%'))+ 1);
							valKey = value.substring(value.indexOf('[%') + 2 , value.indexOf(']' , value.indexOf('[%')));

							val = ACCoreJS.GetComInt(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						} else if(value.indexOf('[<') > -1) {
							functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>' , value.indexOf('[<')) );
							oriKey = value.substring(value.indexOf('[<') , value.indexOf(']' , value.indexOf('[<'))+ 1);
							valKey = value.substring(value.indexOf('>') + 1 , value.indexOf(']' , value.indexOf('[<')));

							if(valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1) {
								prefix = valKey.charAt(0);
								valKey = valKey.substring(1 , valKey.length);

								switch(prefix) {
									case "@":
										val = ACCoreJS.GetUCDIString(valKey);
										break;
									case "&":
										val = ACCoreJS.GetUCDIIntegar(valKey);
										break;
									case "#":
										val = ACCoreJS.GetComString(valKey);
										break;
									case "%":
										val = ACCoreJS.GetComInt(valKey);
										break;
									case "~":
										val = valKey;
										break;
								}
							} else
								val = app.DS.Get(valKey);

							val = ACLib[functionProcessName](val);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");

						} else if(value.indexOf('{') > -1) {
							oriKey = value.substring(value.indexOf('{') , value.indexOf('}' , value.indexOf('{'))+ 1);
							valKey = value.substring(value.indexOf('{') + 1 , value.indexOf('}' , value.indexOf('{')));

							val = app.DS.Get(valKey);

							if(typeof val != "undefined" && val != "undefined")
								value = value.replace(oriKey , val);
							else
								value = value.replace(oriKey , "");
						} else
							incomplete = 0;
					} while(incomplete > 0);

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = value;
					else
						tmpOb[key] = "";
				});
				newObj.push(tmpOb);
			});
			object.get("moreInfo").labels = newObj;
		},
		ProcessMoreInfoBankList: function(lists, def) {
			ACCoreJS.Trace("ProcessMoreInfoBankList");
			var arrList = [];
			$.ajax({
				type: "GET",
				url: "projectAssets/files/bankcode.json",
				dataType: "json",
				success: function(result) {
					var banks = result;
                    
					for(var i=0; i<banks.length; i++) {
						banks[i]["labels"] = [];
						banks[i]["labels"] = banks[i].labelsOri;
						arrList.push(banks[i]);
					}
                    
					lists["list"] = arrList;
					lists["oriList"] = arrList;
					if(typeof def != "undefined") def.resolve("Done");
				},
				error: function(jqXHR, textStatus, errorThrown) {
				  	ACCoreJS.Trace('ProcessMoreInfoBankList read content failed. ErrorThrown: ' + errorThrown );
				}
			});
		},

		ProcessImagesFinal: function(parent , object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object , function(labelsItem)
			{
				prefix = "";
				valKey = "";
				val = "";
				tmpOb = {};
				oriKey = "";

				$.each(labelsItem , function(key , value)
				{

					if(typeof value != "undefined" && value != "undefined")
						tmpOb[key] = ACLib.processTransactData(value);
					else
						tmpOb[key] = "";
				});

				newObj.push(tmpOb);
			});

			parent.set("images" , newObj );
		},

		ProcessSummarysFormData : function (object)
		{
			var newObj = [];
			var prefix = "";
			var valKey = "";
			var val = "";
			var tmpOb = {};
			var oriKey = "";
			var incomplete = 1;
			var functionProcessName = "";

			_.each(object.get("summarys") , function(summaryForm)
			{
				_.each(summaryForm["summary"] , function(rowRecord)
				{
					_.each(rowRecord , function(rowItem)
					{
						newObj = [];

						_.each(rowItem["imagesOri"] , function(imageItem)
						{
							prefix = "";
							valKey = "";
							val = "";
							tmpOb = {};
							oriKey = "";

							$.each(imageItem , function(key , value)
							{

								if(typeof value != "undefined" && value != "undefined")
									tmpOb[key] = ACLib.processTransactData(value);
								else
									tmpOb[key] = "";
							});

							newObj.push(tmpOb);
						});

						rowItem["images"] = newObj;

						newObj = [];
						_.each(rowItem["dataOri"] , function(labelsItem)
						{
							prefix = "";
							valKey = "";
							val = "";
							tmpOb = {};
							oriKey = "";

							$.each(labelsItem , function(key , value)
							{

								if(typeof value != "undefined" && value != "undefined")
									tmpOb[key] = ACLib.processTransactData(value);
								else
									tmpOb[key] = "";
							});
							
							tmpOb["text"] = tmpOb["L" + String(app.DS.getLanguageIdx())];
							tmpOb["localClass"] = tmpOb["L" + String(app.DS.getLanguageIdx() + "Class")];

							newObj.push(tmpOb);
						});

						rowItem["data"] = newObj;
					});
				});
			});

			//ACCoreJS.Trace("Process Summarys!!!!!!!!")
			//ACCoreJS.Trace(object);

			// object.set("summaryData" ,newObj);
		},

		ProcessSummaryStandardLabelsData : function (object) {
			var newObj = [];
			var tmpOb = {};
			var t = this;
			_.each(object.get("summary") , function(summarysItem) {
				newObj = [];
				_.each(summarysItem , function(labelsItem) {
					tmpOb = {};
					$.each(labelsItem , function(key , value) {
						value = t.processTransactData(value); //Reduce repeated coding
						if(typeof value != "undefined" && value != "undefined")
							tmpOb[key] = value;
						else
							tmpOb[key] = "";
					});
					newObj.push(tmpOb);
				});
				summarysItem["labels"] = newObj;
			});
			t = null;
		},

		ProcessSummaryLabelsLanguageData : function (object)
		{
			_.each(object.get("summary") , function(summarysItem)
			{
				_.each(summarysItem["labels"] , function(labelsItem)
				{
					labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
					labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];

				});
			});
		},

		GetFDKKeyMatch :function(val)
		{
			var aandcFDK 	= "ABCDFGHI";
			var activateFDK = "56784321";

			if(aandcFDK.indexOf(String(val)) > -1)
			{
				// ACCoreJS.Trace("GetFDKKeyMatch  VAL: "  + val);
				return val;
			}
			else
			{
				// ACCoreJS.Trace("GetFDKKeyMatch PROCESS : "  + val + " : " + aandcFDK.charAt(activateFDK.indexOf(val)));
				return aandcFDK.charAt(activateFDK.indexOf(val));
			}
		},

		displayIfMorning : function(val)
		{
			var date = new Date();

			if(date.getHours() >= 6 && date.getHours() < 12)
			{
				return val;
			}
			else
				return "";
		},

		displayIfAfternoon : function(val)
		{
			var date = new Date();

			if(date.getHours() >= 12 && date.getHours() < 18)
			{
				return val;
			}
			else
				return "";
		},

		displayIfEverning : function(val)
		{
			var date = new Date();

			if((date.getHours() >= 18 && date.getHours() < 23) || date.getHours() >= 0 && date.getHours() < 6)
			{
				return val;
			}
			else
				return "";
		},
		
		getTemplateTimer: function() {
			ACCoreJS.Trace("getTemplateTimer Start");
			var templateTimer = app.DS.Get("timeoutTimer");
			var tick = 1;
			
			if(typeof TimerConfigData != "undefined" && typeof TimerConfigData["tick"] != "undefined") { 
				ACCoreJS.Trace("Timer Ticker: " + TimerConfigData["tick"]);
				tick = parseFloat(TimerConfigData["tick"]);
			}
			
			if(typeof templateTimer == "undefined" || templateTimer == "undefined" || templateTimer == "") templateTimer = ACCoreJS.GetComInt("3126"); //Get original timer 
			templateTimer = templateTimer * tick;
			ACCoreJS.Trace("Return Timer: " + templateTimer);
			ACCoreJS.Trace("getTemplateTimer End");
			return templateTimer;
		},
		ProcessGenericMappingDataText : function(key) {
			if (typeof app.dataObj.genericMappingDataColl["text"][key] != "undefined")
				return app.dataObj.genericMappingDataColl["text"][key]["L"+String(app.DS.getLanguageIdx())];
			else
				return key;
		},
        ProcessMenuSlidingButtonsPropertiesData: function(object) {
            ACCoreJS.Trace("ProcessMenuSlidingButtonsPropertiesData Start");
            var newObj = [];
            var prefix = "";
            var valKey = "";
            var val = "";
            var tmpOb = {};
            var oriKey = "";
            var incomplete = 1;
            var functionProcessName = "";
            var menu = object.get("menu");
            var t = this;

            if(typeof menu != "undefined")
            {
                _.each(menu, function(menuBtn)
                { 
                    if (typeof menuBtn["buttonsPropeties"] != "undefined") 
                    {

                        menuBtn["buttons"] = "";
                        // ACCoreJS.Trace("ProcessMenuSlidingButtonsPropertiesData Before");
                        // ACCoreJS.Trace(menuBtn["buttons"])   
                        // ACCoreJS.Trace("ProcessMenuSlidingButtonsPropertiesData Processing");
                        menuBtn["buttons"] = t[menuBtn["buttonsPropeties"]["dataProcessFunction"]](menuBtn["buttonsPropeties"]["dataProcessParams"]);    
                        ACCoreJS.Trace("ProcessMenuSlidingButtonsPropertiesData");
                        ACCoreJS.Trace(menuBtn["buttons"])  
                        // ACCoreJS.Trace(menuBtn["buttons"])                                  ;
                    } 
                    else
                        ACCoreJS.Trace("ProcessMenuSlidingButtonsPropertiesData Undefined");
                }) 
                    // var MenuButtons = menubuttons.get("buttons");
               
            }
        },
        ProcessMenuSlidingButtonLabelsData: function(object) {
            ACCoreJS.Trace("ProcessMenuSlidingButtonLabelsData Start");
            var newObj = [];
            var prefix = "";
            var valKey = "";
            var val = "";
            var tmpOb = {};
            var oriKey = "";
            var incomplete = 1;
            var functionProcessName = "";
            var menu = object.get("menu");

            _.each(menu, function(menuBtn){
            	  var menuButtons = menuBtn["buttons"]

            	 if (typeof menuButtons != "undefined") {
                ACCoreJS.Trace("ProcessMenuButtonLabelsData Processing");
                _.each(menuButtons, function(buttonItem) {
                    newObj = [];
                    _.each(buttonItem["labelsOri"], function(labelsItem) { 
                    	
                        prefix = "";
                        valKey = "";
                        val = "";
                        tmpOb = {};
                        oriKey = "";
                        incomplete = 1;

                        $.each(labelsItem, function(key, value) {
                            incomplete = 1;
                            do {
                                value = String(value);
                                oriKey = "";
                                valKey = "";
                                val = "";

                                if(value.indexOf('[[') > -1)
								{
									oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
									valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

									val = ACLib.ProcessGenericMappingDataText(valKey);

									if(typeof val != "undefined" && val != "undefined")
										value = value.replace(oriKey , val);
									else
										value = value.replace(oriKey , "");
								}
                                
                                if (value.indexOf('[@') > -1) {
                                    oriKey = value.substring(value.indexOf('[@'), value.indexOf(']', value.indexOf('[@')) + 1);
                                    valKey = value.substring(value.indexOf('[@') + 2, value.indexOf(']', value.indexOf('[@')));

                                    val = ACCoreJS.GetUCDIString(valKey);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[&') > -1) {
                                    oriKey = value.substring(value.indexOf('[&'), value.indexOf(']', value.indexOf('[&')) + 1);
                                    valKey = value.substring(value.indexOf('[&') + 2, value.indexOf(']', value.indexOf('[&')));

                                    val = ACCoreJS.GetUCDIIntegar(valKey);
                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[#') > -1) {
                                    oriKey = value.substring(value.indexOf('[#'), value.indexOf(']', value.indexOf('[#')) + 1);
                                    valKey = value.substring(value.indexOf('[#') + 2, value.indexOf(']', value.indexOf('[#')));

                                    val = ACCoreJS.GetComString(valKey);
                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } else if (value.indexOf('[%') > -1) {
                                    oriKey = value.substring(value.indexOf('[%'), value.indexOf(']', value.indexOf('[%')) + 1);
                                    valKey = value.substring(value.indexOf('[%') + 2, value.indexOf(']', value.indexOf('[%')));

                                    val = ACCoreJS.GetComInt(valKey);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[<') > -1) {
                                    functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>', value.indexOf('[<')));
                                    oriKey = value.substring(value.indexOf('[<'), value.indexOf(']', value.indexOf('[<')) + 1);
                                    valKey = value.substring(value.indexOf('>') + 1, value.indexOf(']', value.indexOf('[<')));

                                    if (valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1) {
                                        prefix = valKey.charAt(0);
                                        valKey = valKey.substring(1, valKey.length);

                                        switch (prefix) {
                                            case "@":
                                                val = ACCoreJS.GetUCDIString(valKey);
                                                break;
                                            case "&":
                                                val = ACCoreJS.GetUCDIIntegar(valKey);
                                                break;
                                            case "#":
                                                val = ACCoreJS.GetComString(valKey);
                                                break;
                                            case "%":
                                                val = ACCoreJS.GetComInt(valKey);
                                                break;
                                            case "~":
                                                val = valKey;
                                                break;

                                        }
                                    } else
                                     val = app.DS.Get(valKey);

                                    val = ACLib[functionProcessName](val);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } else if (value.indexOf('{') > -1) {
                                    oriKey = value.substring(value.indexOf('{'), value.indexOf('}', value.indexOf('{')) + 1);
                                    valKey = value.substring(value.indexOf('{') + 1, value.indexOf('}', value.indexOf('{')));

                                    val = app.DS.Get(valKey);



                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } 
                                else
                                    incomplete = 0;
                            } while (incomplete > 0);

                            if (typeof value != "undefined" && value != "undefined")
                                tmpOb[key] = value;
                            else
                                tmpOb[key] = "";

                        });
                        newObj.push(tmpOb);
                    })
                     buttonItem["labels"] = newObj;                       
                });
            } else
                ACCoreJS.Trace("ProcessMenuButtonLabelsData Undefined");
            }) 
            //     // var MenuButtons = menubuttons.get("buttons");
               
            // }
        },
        ProcessMenuSlidingLabelsData: function(object) {
            ACCoreJS.Trace("ProcessMenuSlidingLabelsData Start");
            var newObj = [];
            var prefix = "";
            var valKey = "";
            var val = "";
            var tmpOb = {};
            var oriKey = "";
            var incomplete = 1;
            var functionProcessName = "";
            var menu = object.get("menu");
            // var menuButtons = object.get("menu")["buttons"];

            // ACCoreJS.Trace("=====")
            // ACCoreJS.Trace(menu)
            if(typeof menu != "undefined"){
            _.each(menu, function(menuBtn){ 
               
                 if (typeof menuBtn["labelsOri"] != "undefined") {
                     ACCoreJS.Trace("ProcessMenuSlidingLabelsData Processing");
                    newObj = [];
                    _.each(menuBtn["labelsOri"], function(labelsItem) { 
                        ACCoreJS.Trace(labelsItem)
                        prefix = "";
                        valKey = "";
                        val = "";
                        tmpOb = {};
                        oriKey = "";
                        incomplete = 1;

                        $.each(labelsItem, function(key, value) {
                            incomplete = 1;
                            do {
                                value = String(value);
                                oriKey = "";
                                valKey = "";
                                val = "";

                                if(value.indexOf('[[') > -1)
								{
									oriKey = value.substring(value.indexOf('[[') , value.indexOf(']]' , value.indexOf('[['))+ 2);
									valKey = value.substring(value.indexOf('[[') + 2 , value.indexOf(']]' , value.indexOf('[[')));

									val = ACLib.ProcessGenericMappingDataText(valKey);

									if(typeof val != "undefined" && val != "undefined")
										value = value.replace(oriKey , val);
									else
										value = value.replace(oriKey , "");
								}
                                
                                if (value.indexOf('[@') > -1) {
                                    oriKey = value.substring(value.indexOf('[@'), value.indexOf(']', value.indexOf('[@')) + 1);
                                    valKey = value.substring(value.indexOf('[@') + 2, value.indexOf(']', value.indexOf('[@')));

                                    val = ACCoreJS.GetUCDIString(valKey);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[&') > -1) {
                                    oriKey = value.substring(value.indexOf('[&'), value.indexOf(']', value.indexOf('[&')) + 1);
                                    valKey = value.substring(value.indexOf('[&') + 2, value.indexOf(']', value.indexOf('[&')));

                                    val = ACCoreJS.GetUCDIIntegar(valKey);
                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[#') > -1) {
                                    oriKey = value.substring(value.indexOf('[#'), value.indexOf(']', value.indexOf('[#')) + 1);
                                    valKey = value.substring(value.indexOf('[#') + 2, value.indexOf(']', value.indexOf('[#')));

                                    val = ACCoreJS.GetComString(valKey);
                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } else if (value.indexOf('[%') > -1) {
                                    oriKey = value.substring(value.indexOf('[%'), value.indexOf(']', value.indexOf('[%')) + 1);
                                    valKey = value.substring(value.indexOf('[%') + 2, value.indexOf(']', value.indexOf('[%')));

                                    val = ACCoreJS.GetComInt(valKey);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");

                                } else if (value.indexOf('[<') > -1) {
                                    functionProcessName = value.substring(value.indexOf('[<') + 2, value.indexOf('>', value.indexOf('[<')));
                                    oriKey = value.substring(value.indexOf('[<'), value.indexOf(']', value.indexOf('[<')) + 1);
                                    valKey = value.substring(value.indexOf('>') + 1, value.indexOf(']', value.indexOf('[<')));

                                    if (valKey.indexOf('@') > -1 || valKey.indexOf('&') > -1 || valKey.indexOf('#') > -1 || valKey.indexOf('%') > -1 || valKey.indexOf('~') > -1) {
                                        prefix = valKey.charAt(0);
                                        valKey = valKey.substring(1, valKey.length);

                                        switch (prefix) {
                                            case "@":
                                                val = ACCoreJS.GetUCDIString(valKey);
                                                break;
                                            case "&":
                                                val = ACCoreJS.GetUCDIIntegar(valKey);
                                                break;
                                            case "#":
                                                val = ACCoreJS.GetComString(valKey);
                                                break;
                                            case "%":
                                                val = ACCoreJS.GetComInt(valKey);
                                                break;
                                            case "~":
                                                val = valKey;
                                                break;

                                        }
                                    } else
                                        val = app.DS.Get(valKey);

                                    val = ACLib[functionProcessName](val);

                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } else if (value.indexOf('{') > -1) {
                                    oriKey = value.substring(value.indexOf('{'), value.indexOf('}', value.indexOf('{')) + 1);
                                    valKey = value.substring(value.indexOf('{') + 1, value.indexOf('}', value.indexOf('{')));

                                    val = app.DS.Get(valKey);



                                    if (typeof val != "undefined" && val != "undefined")
                                        value = value.replace(oriKey, val);
                                    else
                                        value = value.replace(oriKey, "");
                                } else
                                    incomplete = 0;
                            } while (incomplete > 0);

                            if (typeof value != "undefined" && value != "undefined")
                                tmpOb[key] = value;
                            else
                                tmpOb[key] = "";

                        });
                        newObj.push(tmpOb);
                    })
                     menuBtn["labels"] = newObj;                
                
            } else
                ACCoreJS.Trace("ProcessMenuButtonLabelsData Undefined");
            }) 
                // var MenuButtons = menubuttons.get("buttons");
               
            }
        }, 
        ProcessMenuSlidingButtonLabelsLanguageData: function(object) {
            ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData Start");
            var menu = object.get("menu");
            // var menuButtons = object.get("menu")["buttons"];
             _.each(menu, function(menuBtn){
             	var menuButtons = menuBtn["buttons"]
	            if (typeof menuButtons != "undefined") {
	                ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData Processing");
	                _.each(menuButtons, function(buttonsItem) {
	                	// ACCoreJS.Trace("!!!!!")
	                	// ACCoreJS.Trace(buttonsItem["labels"])
	                    _.each(buttonsItem["labels"], function(labelsItem) {
	                        labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
	                        labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
	                    });
	                });
	            } 
        	
            else
                ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData Undefined");
            })
            ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData End");
        },
        ProcessMenuSlidingLabelsLanguageData: function(object) {
            ACCoreJS.Trace("ProcessMenuSlidingLabelsLanguageData Start");
            var menuButtons = object.get("menu");

            if (typeof menuButtons != "undefined") {
                ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData Processing");
                _.each(menuButtons, function(buttonsItem) {
                    _.each(buttonsItem["labels"], function(labelsItem) {
                        labelsItem["text"] = labelsItem["L" + String(app.DS.getLanguageIdx())];
                        labelsItem["localClass"] = labelsItem["L" + String(app.DS.getLanguageIdx() + "Class")];
                    });
                });
           
            } else
                ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData Undefined");

            ACCoreJS.Trace("ProcessMenuButtonLabelsLanguageData End");
        },
        ProcessMenuButtonCategorization: function(object) {
            ACCoreJS.Trace("ProcessMenuButtonCategorization Start");
            var menuButtons = object.get("menu")["buttons"];
            var menuCategorization = {};
            var defaultCategorization = "";

            if (typeof object.get("menu")["defaultClass"] == "undefined") object.get("menu")["defaultClass"] = "main";
            defaultCategorization = object.get("menu")["defaultClass"];

            if (typeof menuButtons != "undefined") {
                ACCoreJS.Trace("ProcessMenuButtonCategorization Processing");
                menuCategorization[defaultCategorization] = [];

                _.each(menuButtons, function(buttonsItem) {
                    if (typeof buttonsItem.parents == "undefined") {
                        if (typeof menuCategorization[defaultCategorization] == "undefined") menuCategorization[defaultCategorization] = [];
                        menuCategorization[defaultCategorization].push(buttonsItem);
                    } else {
                        _.each(buttonsItem.parents, function(parentElement) {
                            if (typeof menuCategorization[parentElement] == "undefined") menuCategorization[parentElement] = [];
                            menuCategorization[parentElement].push(buttonsItem);
                        });
                    }
                });

                object.get("menu")["menuCategorization"] = menuCategorization;

                //alert(JSON.stringify(object.get("menu")["menuCategorization"]));
            } else
                ACCoreJS.Trace("ProcessMenuButtonCategorization Undefined");

            ACCoreJS.Trace("ProcessMenuButtonCategorization End");
        },
        changeOtherWayLanguage : function(param) {
            if(typeof param != "undefined" && Object.prototype.toString.call( param ) === '[object Object]') {
                ACCoreJS.Trace("changeOtherWayLanguage : " + String(param.language));
                //document.body.className = String(param.language);
                //app.DS.setSystemLanguage(String(param.language));
				var re = new RegExp('(^|\\s)L\\S+', 'g');
				$('body').removeClass(function(index, css) { return (css.match(re) || []).join(' '); });
				$('body').addClass("L" + app.DS.getLanguageIdx());
            } else {   
                ACCoreJS.Trace("changeOtherWayLanguage : L" + app.DS.getLanguageIdx());
                //document.body.className = "L" + app.DS.getLanguageIdx();
				var re = new RegExp('(^|\\s)L\\S+', 'g');
				$('body').removeClass(function(index, css) { return (css.match(re) || []).join(' '); });
				$('body').addClass("L" + app.DS.getLanguageIdx());
            }
        },
        changeApplicationFontSize: function(params) {
            var ele = $("body");
            if (params.type == "L")
                ele.addClass("large");
            else
                ele.removeClass("large");

            $(params.selectedElement).removeClass("selected");
            $(params.selectedElement + "." + params.className).addClass("selected");
            ele = null;
            app.BroadCaster.trigger("closeLanguageContainer");
        },
        changeTheme: function(params) {
            var re = new RegExp('(^|\\s)' + params.prefix + '\\S+', 'g');
            $('body').removeClass(function(index, css) { return (css.match(re) || []).join(' '); });
            $('body').addClass(params.className);

            $(params.selectedElement).removeClass("selected");
            $(params.selectedElement + "." + params.className).addClass("selected");
            app.BroadCaster.trigger("closeLanguageContainer");
        },
		hideLanguageFontsButtons : function(params) {
			$('.languageFontScreenLabels').removeClass("checked");
			$('.languageFontScreenButtons a').removeClass("showButton");
        },
        acJWTSingleRequest: function(obj, serviceEndpoint, timeoutValue) {
            if (ConfigData.producerConsumer.enable != "1" && ConfigData.producerConsumer.role != "terminal") return;
            var keyArray = {};
            var objArry = {};
            _.each(obj.dsData, function(item) { keyArray[item] = app.DS.Get(item); });
            var extraObj = _.pairs(obj.extra);
            var dsKey = "";
            var dsVal = "";
            _.each(extraObj, function(items) {
                dsKey = items[0];
                dsVal = items[1];

                if (typeof dsVal === "object") {
                    var innerObj = _.pairs(dsVal);
                    keyArray[dsKey] = {};
                    _.each(innerObj, function(item) {
                        dsKey1 = item[0];
                        dsVal1 = item[1];
                        keyArray[dsKey][dsKey1] = ACLib.getACProcessData(dsVal1);
                    });
                } else {
                    keyArray[dsKey] = ACLib.getACProcessData(dsVal);
                }
            });
            var requestData = keyArray;
            if (typeof obj.arryObj != "undefined") {
                var arryObj = _.pairs(obj.arryObj);
                _.each(arryObj, function(items) {
                    dsKey = items[0];
                    dsVal = items[1];
                    objArry[dsKey] = ACLib.getACProcessData(dsVal);
                });
                requestData.arry = objArry;
            }
			//Ong added for terminalId & rqUID
			var terminalId = "";
			var rqUid = "";
			var trxCode = "";
			
			if(typeof obj["code"] != "undefined") trxCode = ACLib.getACProcessData(obj["code"]);
			if(typeof obj["terminalId"] != "undefined") terminalId = ACLib.getACProcessData(obj["terminalId"]);
			if(typeof obj["rqUid"] != "undefined") rqUid = ACLib.getACProcessData(obj["rqUid"]);
			//End
			//Ong added for customize section in single request
			var customizeData = {};
            var keyCustArray = {};
            var objCustArry = {};
			if(typeof obj.customize != "undefined") {
				var customizeObj = _.pairs(obj.customize);
				var dsKey = "";
				var dsVal = "";
				_.each(customizeObj, function(items) {
					dsKey = items[0];
					dsVal = items[1];

					if (typeof dsVal === "object") {
						var innerObj = _.pairs(dsVal);
						keyCustArray[dsKey] = {};
						_.each(innerObj, function(item) {
							dsKey1 = item[0];
							dsVal1 = item[1];
							keyCustArray[dsKey][dsKey1] = ACLib.getACProcessData(dsVal1);
						});
					} else {
						keyCustArray[dsKey] = ACLib.getACProcessData(dsVal);
					}
				});
				customizeData = keyCustArray;
				if (typeof obj.arryObj != "undefined") {
					var arryObj = _.pairs(obj.arryObj);
					_.each(arryObj, function(items) {
						dsKey = items[0];
						dsVal = items[1];
						objCustArry[dsKey] = ACLib.getACProcessData(dsVal);
					});
					customizeData.arry = objCustArry;
				}
			}
			//End
            var singleRequestData = {
                "code": trxCode,
                "data": requestData,
				"terminalId": terminalId,
				"rqUid": rqUid,
				"customize": customizeData
            }
            //ACCoreJS.Trace("MASUK [" + serviceEndpoint + "] [" + JSON.stringify(singleRequestData) + "]");
            $.support.cors = true;
            $.ajax({
                type: 'POST',
                data: singleRequestData,
                async: true,
                cache: false,
                dataType: "json",
                timeout: timeoutValue,
                url: serviceEndpoint,
                success: function(data) {
                    ACCoreJS.Trace("Success Response.");
                    app.BroadCaster.trigger("ACNodeWSResponse", data);
                },

                error: function(data) {
                    ACCoreJS.Trace("Error Response.");
                    // alert(" error " + JSON.stringify(data));
                    if (ConfigData.transactionDebug == "1")
                        app.BroadCaster.trigger("ACNodeWSResponse", data);
                    else
                        app.BroadCaster.trigger("ACNodeWSResponse", data);
                }
            });
        },
		refreshIdleData: function(object) {
			var idleLastUpdate;
			var currentDate = new Date();
			var fileData = {};
			var first = false;
			
			if(typeof app.DS.get('idleLastUpdate') == "undefined") {
				ACCoreJS.Trace("Undefined idleLastUpdate.");
				app.DS.update({'idleLastUpdate': currentDate });
				first = true;
			}
			
			idleLastUpdate = app.DS.get('idleLastUpdate');
			ACCoreJS.Trace("Current Date: " + currentDate.toDateString() + "   Last Update: " + idleLastUpdate.toDateString());
			if(currentDate.toDateString() != idleLastUpdate.toDateString() || first) {
				ACCoreJS.Trace("Different Date or First");
				first = false;
				
				if(typeof object.model.get("idleUpdatePath") != "undefined" 
						&& typeof object.model.get("idleImages") != "undefined") {
					var idleImages = object.model.get("idleImages");
					fileData = this.readIdleJSONFile(object.model.get("idleUpdatePath"));
					if(!$.isEmptyObject(fileData)) {
						object.model.set({ "idleImages": fileData });
					}
				}
			}
		},
		readIdleJSONFile: function(path) {
			var returnData = {};
			$.support.cors = true;
			$.ajax({
				type: 'GET',
				dataType: "text",
				async: false,
				url: "../../projectAssets/SCB_THAI/update.json"
				//success: function(data) {
				//	ACCoreJS.Trace("Success Response." + data);
				//	returnData = data;
				//},
				//error : function(xhr, ajaxOptions, thrownError) {
				//	ACCoreJS.Trace("Error. " + thrownError + "     " + JSON.stringify(xhr) + "     " + ajaxOptions);
				//}
			})
			.always(function(xhr, status) {
				if (status === 'error' || typeof xhr == "object") {
					ACCoreJS.Trace("readIdleJSONFile Error");
					try {
						ACCoreJS.Trace("Error: " + JSON.stringify(xhr));
					} catch(e) {
					}
				} else {
					ACCoreJS.Trace("Return Data: " + xhr);
					returnData = JSON.parse(xhr);
				}
			});
			
			return returnData;
		},
				changeBG: function(){
				var time = new Date().toLocaleTimeString();
				if(time.charAt(time.length-2)=='P'){
					$("#main").css("background-image","url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg1.png')");

				}
				else{
					$("#main").css("background-image","url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg.png')");

				}
	
		},
			thankYouBG: function(){
				//var time = new Date().toLocaleTimeString();
				var time = new Date().getHours();
				if(time < 12){
					//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPINEW/Pao_051818/builder/projectAssets/BPI/S1_morning.jpg')"});
					$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/S1_morning.jpg')"});
			
				
				}
				else if(time < 18){
				//$("#main").css({"background-image":"url('C:/Users/mc250457/Desktop/scan bpi/builder/projectAssets/BPI/S1_afternoon.jpg')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/S1_afternoon.jpg')"});

				}
				else{
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPINEW/Pao_051818/builder/projectAssets/BPI/S1_evening.jpg')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/S1_evening.jpg')"});
				}
		},
		coverthankYouBG: function(){
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var time = new Date().getHours();
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						if(time < 12){
							//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/Custom/TY_morning.jpg')"});
							$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_morning2.png')"});
						}
						else if(time < 18){
						//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/BPI/TY_afternoon.jpg')"});
						$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_afternoon2.png')"});

						}
						else{
						//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/BPI/TY_evening.jpg')"});
						$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_evening2.png')"});
						}
					}
					else{
						if(time < 12){
							//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/BPI/TY_morning.jpg')"});
							$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_morning.png')"});	
						}
						else if(time < 18){
						//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/BPI/TY_afternoon.jpg')"});
						$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_afternoon.png')"});

						}
						else{
						//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/05312018 1611/builder/projectAssets/BPI/TY_evening.jpg')"});
						$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/TY_evening.png')"});
						}	
						ACCoreJS.Trace("** ENGLISH **");
					}
			

				ACCoreJS.Trace("** last_trans_checker **");

				try {				

					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);
					ACCoreJS.Trace("** last_trans_checker End **");
					
				} catch (e) {
					ACCoreJS.Trace('last_trans_checker: ' + e.message);
					ACCoreJS.Trace("** last_trans_checker End **");
				}

			
		},
		initPleaseWaitBG: function(){
			
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/053118_FOR_UAT/builder/projectAssets/BPI/bg_popup.png')"});
				//$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg_popup.png')"});

				var time = new Date().getHours();
				if(time < 12){
				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_morning.png')"});
				}
				else if(time < 18){
				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_evening.png')"});

				}
				else{
				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_evening.png')"});

				}

				ACCoreJS.Trace("** last_trans_checker **");

				try {				

					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);
					ACCoreJS.Trace("** last_trans_checker End **");
					
				} catch (e) {
					ACCoreJS.Trace('last_trans_checker: ' + e.message);
					ACCoreJS.Trace("** last_trans_checker End **");
				}


		},

		setBGPopOOS: function(){
			$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg_pop_oos.jpg')"});
		},

		setBGPop: function(){
			$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg_pop.png')"});

				ACCoreJS.Trace("** last_trans_checker **");

				try {				

					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);
					ACCoreJS.Trace("** last_trans_checker End **");
					
				} catch (e) {
					ACCoreJS.Trace('last_trans_checker: ' + e.message);
					ACCoreJS.Trace("** last_trans_checker End **");
				}

		},

		setBGDefault: function(){
			$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/bg.png')"});
		},
		pinentryBG: function(){
				//var time = new Date().toLocaleTimeString();
				var time = new Date().getHours();
				if(time < 12){

				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_morning.png')"});
				}
				else if(time < 18){
				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_afternoon.png')"});

				}
				else{
				
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/Custom/pinentryBG_evening.png')"});

				}

				ACCoreJS.Trace("** last_trans_checker **");

				try {				

					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);
					ACCoreJS.Trace("** last_trans_checker End **");
					
				} catch (e) {
					ACCoreJS.Trace('last_trans_checker: ' + e.message);
					ACCoreJS.Trace("** last_trans_checker End **");
				}


		},

		pinchangeBG1: function(){
				//var time = new Date().toLocaleTimeString();
				var time = new Date().getHours();
				if(time < 12){

				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinChangeBG1_m//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_morning.png')"});
					$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_morning.png')"});
				}
				else if(time < 18){
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_evening.png')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_afternoon.png')"});

				}
				else{
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_evening.png')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_evening.png')"});

				}
		},


		pinchangeBG2: function(){
				//var time = new Date().toLocaleTimeString();
				var time = new Date().getHours();
				if(time < 12){

				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_morning.png')"});
					$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_morning.png')"});
				}
				else if(time < 18){
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_evening.png')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_afternoon.png')"});

				}
				else{
				//$("#main").css({"background-image":"url('C:/Users/cl185155/Desktop/BPI/builder/projectAssets/BPI/pinentryBG_evening.png')"});
				$("#main").css({"background-image":"url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/pinentryBG_evening.png')"});

				}
		},
		

		checkTIME: function(){
				var time = new Date().toLocaleTimeString();
				var languageIndex = app.DS.getLanguageIdx();
				
				app.DS.set({"time":time+""});
			
				if(time.charAt(time.length-2)=='A'){
								app.DS.Set({ "greetings": "Good Morning!" }); 
								app.DS.Set({ "greetings_tagalog": "Magandang Umaga!" }); 
				}
				else{
					time = time.replace(" ","");
					ACCoreJS.Trace("time = " + time);
						if(parseInt(time.charAt(0)) >= 6 && time.charAt(1) == ":" || parseInt(time.charAt(1)) == 0 || parseInt(time.charAt(1)) == 1){
							app.DS.Set({ "greetings": "Good Evening!" }); 
							app.DS.Set({ "greetings_tagalog": "Magandang Gabi!" }); 
						}
						else if (parseInt(time.charAt(0)) == 1 && time.charAt(1) == 2 && parseInt(time.charAt(3)) >= 0  || parseInt(time.charAt(0)) < 2){
								app.DS.Set({ "greetings": "Good Afternoon!" }); 
								app.DS.Set({ "greetings_tagalog": "Magandang Tanghali!" });
						}
						else{
								app.DS.Set({ "greetings": "Good Afternoon!" }); 
								app.DS.Set({ "greetings_tagalog": "Magandang Hapon!" });	
						}
							
						
						
				}
			
		},
	    appendAANDCAmtBuffer: function(val) {
        	    var totalLen = 8;
            	var result = val+"00";
            	for (var i = result.length; i < totalLen; i++) {
	                	result = "0" + result;
            	}

	            return result.replace(" ","");
        },
            ProcessLanguageAndFont: function(object, params) {
                var processObject = "buttons"
                var newObj = [];

                $.each(object.get(processObject), function(key, value) {
                    if (typeof value.type != "undefined" && value.type === params.type) {
                        if (value.ID === params.ID) {
                            value.selected = "1";
                        } else {
                            value.selected = "0";
                        }
                    }

                    newObj.push(value);
                });

                object.set(processObject, newObj);
            },
			changeApplicationLanguageIdx: function(params) {
							var languageIdxVal = parseInt(params);

							app.DS.setLanguageIdx(languageIdxVal);
							app.BroadCaster.trigger("LanguageUpdate");
							if(languageIdxVal==1){
								app.DS.Set({ "greetings": "Sample change in language" });
							}
							
			},
             disableTimer: function() {
                  ACCoreJS.Trace("DisableTimer");
                  app.BroadCaster.trigger("DeactiveKeyboardTimer");
            },
			showCurrentTime: function(){
				$('#dateTimeContainer').show();
			},
			hideCurrentTime: function(){
				$('#dateTimeContainer').hide();
			},
			GetScreenBalance: function() {
				
				//var dmitr = "103104K820.00";
				//var dmitr = "103104KO-         20.00MO-         20.00";
				var dmitr = ACCoreJS.GetUCDIString("DMITRData")+"";
				ACCoreJS.Trace("DMITRDATA = "+ dmitr);
				var current = "";
				var available = "";
				var current_si = 0;
				
				for(var x=0; x<= dmitr.length;x++){
				
					if(dmitr.charAt(x)=="" ){
						current_si++;
						
					}
					if( current_si <= 1){
						current += dmitr.charAt(x)
						current = current.replace("103104K0","");
						current = current.replace("103104KO","");
						current = current.replace("103104K0","");
						current = current.replace("103104K1","");
						current = current.replace("103104K1","");
						current = current.replace("103104K2","");
						current = current.replace("103104K2","");
						current = current.replace("103104K3","");
						current = current.replace("103104K3","");	
						current = current.replace("103104K4","");
						current = current.replace("103104K4","");
						current = current.replace("103104K5","");
						current = current.replace("103104K5","");
						current = current.replace("103104K6","");
						current = current.replace("103104K6","");
						current = current.replace("103104K7","");
						current = current.replace("103104K7","");
						current = current.replace("103104K8","");
						current = current.replace("103104K8","");
						current = current.replace("103104K9","");
						current = current.replace("103104K9","");
						app.DS.Set({ "current_val_bal": "" + current.replace("103104K1","")}); 
					}
					else if(current_si >= 2){
						
						//alert(current.replace("103104K4",""));
						current = current.replace("103104K0","");
						current = current.replace("103104KO","");
						current = current.replace("103104K0","");
						current = current.replace("103104K1","");
						current = current.replace("103104K1","");
						current = current.replace("103104K2","");
						current = current.replace("103104K2","");
						current = current.replace("103104K3","");
						current = current.replace("103104K3","");	
						current = current.replace("103104K4","");
						current = current.replace("103104K4","");
						current = current.replace("103104K5","");
						current = current.replace("103104K5","");
						current = current.replace("103104K6","");
						current = current.replace("103104K6","");
						current = current.replace("103104K7","");
						current = current.replace("103104K7","");
						current = current.replace("103104K8","");
						current = current.replace("103104K8","");
						current = current.replace("103104K9","");
						current = current.replace("103104K9","");
						app.DS.Set({ "current_val_bal": "" + current.replace("103104K1","")}); 
						if(dmitr.charAt(x)==""){
							available = available.replace("M0","");
							available = available.replace("MO","");
							available = available.replace("M0","");
							available = available.replace("M1","");
							available = available.replace("M1","");
							available = available.replace("M2","");
							available = available.replace("M2","");
							available = available.replace("M3","");
							available = available.replace("M3","");
							available = available.replace("M4","");
							available = available.replace("M4","");
							available = available.replace("M5","");
							available = available.replace("M5","");
							available = available.replace("M6","");
							available = available.replace("M6","");
							available = available.replace("M7","");
							available = available.replace("M7","");
							available = available.replace("M8","");
							available = available.replace("M8","");
							available = available.replace("M9","");
							available = available.replace("M9","");

							app.DS.Set({ "available_val_bal": "" + available.replace("M1","")}); 
							break;
						}
						else{
							available+= dmitr.charAt(x);
							
						}
						//break;
					}
					
					if(dmitr == "103104"){
						app.DS.Set({ "current_val_bal": "" + " "}); 
						app.DS.Set({ "available_val_bal": "" + " "}); 
					}	
				}
			},
			GetScreenBalance2: function() {
/*				//var dmitr = "2208A094104FCBALANCE: 78165.00";
				var dmitr = ACCoreJS.GetUCDIString("DMITRData")+"";
				ACCoreJS.Trace("DMITRDATA = "+ dmitr);
				var current = "";
				var start = 0;
								dmitr = dmitr.replace("094104FCBALANCE:","");
				dmitr = dmitr.replace("103104K1","");
				dmitr = dmitr.replace(" ","");

				var parts = dmitr.toString().split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
									
				
				app.DS.Set({ "current_val": "" + parts+".00"}); 
				//alert(current+"");

*/
				
				
				var dmitr = ACCoreJS.GetUCDIString("DMITRData")+"";
				ACCoreJS.Trace("DMITRDATA = "+ dmitr);
				var current = "";
				var available = "";
				var current_si = 0;
				
				for(var x=0; x<= dmitr.length;x++){
					if(dmitr.charAt(x)=="" ){
						current_si++;						
					}
					if( current_si <= 1){
						current += dmitr.charAt(x)
					}
					else if(current_si >= 2){
						//alert(current.replace("103104K4",""));
						current = current.replace("103104K4","");
						current = current.replace("103104K3","");
						current = current.replace("103104K1","");
						app.DS.Set({ "current_val": "" + current.replace("103104K1","")}); 
						if(dmitr.charAt(x)==""){
							available = available.replace("M4","");
							available = available.replace("M3","");
							available = available.replace("M1","");
							app.DS.Set({ "available_val": "" + available.replace("M1","")}); 
							break;
						}
						else{
							available+= dmitr.charAt(x);
						}
						//break;
					}
				}
				if(dmitr == "103104"){
						app.DS.Set({ "current_val": "" + " "}); 
						app.DS.Set({ "available_val": "" + " "}); 
				}

			},
			GetScreenBalanceFast: function() {
				//var dmitr = "094104FCBALANCE: 2120416.65";
				var dmitr = ACCoreJS.GetUCDIString("DMITRData")+"";
				ACCoreJS.Trace("DMITRDATA = "+ dmitr);
				var current = "";
				var start = 0;
				
				/*for(var x=0; x<= dmitr.length;x++){
					if(dmitr.charAt(x)=="" ){
							start = 1;					
					}
					if( start >= 1){
						current += dmitr.charAt(x)
					}
				}*/

				dmitr = dmitr.replace("094104FCBALANCE:","");
				dmitr = dmitr.replace(" ","");
				dmitr = dmitr.replace(".","@");				

				var parts = dmitr.toString().split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
				
				dmitr = parts.toString();
				dmitr = dmitr.replace("@",".");
					
				app.DS.Set({ "current_val": "" + "Available Balance: " + dmitr}); 
				//alert(current+"");

				if(dmitr == "103104"){
						app.DS.Set({ "current_val": "" + " "}); 
						
				}
			},
			displayTime_Only: function(){
				var d = new Date();
				var localeTime = d.toLocaleTimeString();
				var localeTimeSansSeconds = localeTime.replace(/:(\d{2}) (?=[AP]M)/, " ");
				app.DS.Set({ "time": localeTimeSansSeconds+""}); 
			},
			
			GetScreenBalance3: function() {
				//var dmitr = "094104FCBALANCE: 83516.00";
				var dmitr = ACCoreJS.GetUCDIString("DMITRData")+"";
				ACCoreJS.Trace("DMITRDATA = "+ dmitr);
				var current = "";
				var start = 0;
				
				/*for(var x=0; x<= dmitr.length;x++){
					if(dmitr.charAt(x)=="" ){
							start = 1;					
					}
					if( start >= 1){
						current += dmitr.charAt(x)
					}
				}*/

				dmitr = dmitr.replace("094104FCBALANCE:","");
				dmitr = dmitr.replace(".00","");

				dmitr = dmitr.replace(/\B(?=(\d{3})+(?!\d))/g,",");


				app.DS.Set({ "current_val": "" + dmitr}); 
				if(dmitr == "103104"){
						app.DS.Set({ "current_val": "" + " "}); 
						
				}

				//alert(current+"");
			},
			buildForm2: function(){

			var thePrinter;
			
			try {
				thePrinter = parent.leftFrame.document.getElementById("RECEIPT");

				thePrinter.SetPrinter("ReceiptPrinter1");
				ACCoreJS.Trace("SET PRINTER TO RECEIPTPRINTER1");
			} catch(e) {
				ACCoreJS.Trace("SET PRINTER TO RECEIPTPRINTER1 ERROR : " + e.msg);
				//thePrinter.closeSession();
				//alert("here");
			}

			try{
					var val = 0;
					setTimeout(function() {
						var rdata = ACCoreJS.GetUCDIString("OptionalReceipt");

						ACCoreJS.Trace('[UCDI OptionalReceipt]: ' + rdata);
						thePrinter.NewFields();
						ACCoreJS.Trace("thePrinter.NewFields()");
						var fieldX = 1;
						var Field = "Field";
						var temp_string = "";

						for (var x=5; x<= rdata.length; x++){
							
							if(rdata.charAt(x) != "\x0A"){
								temp_string = temp_string + rdata.charAt(x);
							}
							else{
								if(fieldX <= 17){
									thePrinter.Field(Field+fieldX) = temp_string;
									ACCoreJS.Trace("Field = " + temp_string);
									temp_string="";
									fieldX++;									
								}
							}
						}

						

						thePrinter.PrintForm("MAGRECEIPT");
						thePrinter.Eject();
						ACCoreJS.Trace("EJECT");
					}, 5000);


				}catch(e){
					ACCoreJS.Trace('printReceipt: ' + e.message);
					//ACCoreJS.Trace("** printReceipt End **");					
				}
				
			},
			buildForm3: function(){
				try{
					var val = 0;
					setTimeout(function() {
						thePrinter.NewFields();
						ACCoreJS.Trace("thePrinter.NewFields()");
						thePrinter.Field("Field1") = "Sample";
						thePrinter.PrintForm("MAGRECEIPT");
						thePrinter.Eject();
						ACCoreJS.Trace("EJECT");
					}, 5000);


				}catch(e){
					ACCoreJS.Trace('printReceipt: ' + e.message);
					alert('printReceipt: ' + e.message);
					//ACCoreJS.Trace("** printReceipt End **");					
				}
				
			},
			buildForm: function(){
			try {
				var val = 0;
				var thePrinter = document.getElementById("RECEIPT"); //Check if left frame has receipt activex
				//var theUCDI = parent.leftFrame.document.getElementById("UCDI");
				var rdata = ACCoreJS.GetUCDIString("OptionalReceipt");
				ACCoreJS.Trace('[UCDI OptionalReceipt]: ' + rdata);
				var h = 0, NoLf = 0, j = 0;
				var LfPos = [], fieldSize = [];
				for (var i = 0; i < rdata.length; i++) {
					var item = rdata[i];
			
					if (item.substr(0, 1) == "\x0A") {	
						// LF detected
						NoLf += 1;
						LfPos[j] = i;
						fieldSize[j] = i - LfPos[j - 1];
						if (isNaN(fieldSize[j]) == true){fieldSize[j] = i + 1};
						j++;	
					}
				}
				
				thePrinter.NewFields();
				
				
				var  k = 0, l = 0; field="";
				var formField = [k];
				
				for (; k < NoLf + 1 ; k++) {		
					formField[k] = rdata.substr(l,fieldSize[k] -1);				 
					l = LfPos[k] + 1;
					var rField = "Field" + k ;
					logService.debug(source, "["+ rField +"] [" + formField[k] + "]");
					thePrinter.Field(rField,formField[k]);
				};
					
				val = thePrinter.PrintForm("MAGRECEIPT", false); //You need to enter your name

				thePrinter.Field("Date") = this.formatDateToString(new Date(),3); //You need to enter field

				val = thePrinter.PrintForm("MAGRECEIPT", false); //Print the form
				val = thePrinter.Eject(); //Cut & eject
			
			} catch (e) {
					ACCoreJS.Trace('printReceipt: ' + e.message);
					ACCoreJS.Trace("** printReceipt End **");
			}

			},
			printReceipt: function(obj) {
				ACCoreJS.Trace("** printReceipt New Format **");
				try {
					var val = 0;
					//var thePrinter = parent.leftFrame.document.getElementById('RECEIPT'); //Check if left frame has receipt activex
					var thePrinter = document.getElementById('RECEIPT'); //Check if left frame has receipt activex
					ACCoreJS.Trace("here1");
					thePrinter.NewFields();
					ACCoreJS.Trace("here2");
					val = thePrinter.PrintForm("MAGRECEIPT", false); //You need to enter your name
					ACCoreJS.Trace("here3");
					thePrinter.Field("Date") = this.formatDateToString(new Date(),3); //You need to enter field
					ACCoreJS.Trace("here4");
					val = thePrinter.PrintForm("MAGRECEIPT", false); //Print the form
					ACCoreJS.Trace("here5");
					val = thePrinter.Eject(); //Cut & eject
					ACCoreJS.Trace("here6");
					ACCoreJS.Trace("** printReceipt End **");
					return true;
				} catch (e) {
					ACCoreJS.Trace('printReceipt: ' + e.message);
					ACCoreJS.Trace("** printReceipt End **");
				}
			},
			checkLang_last_mag: function() {
				ACCoreJS.Trace("** checkLang_last_mag **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						if(ACCoreJS.GetComString(2014)=="B  A D B"){
						   app.DS.Set({ "opcode": "B  A C B" });
						}
						if(ACCoreJS.GetComString(2014)=="B  B D B"){
						   app.DS.Set({ "opcode": "B  B C B" });
						}
						if(ACCoreJS.GetComString(2014)=="F  B D B"){
						   app.DS.Set({ "opcode": "F  B C B" });
						}
						if(ACCoreJS.GetComString(2014)=="F  A D B"){
						   app.DS.Set({ "opcode": "F  A C B" });
						}
						if(ACCoreJS.GetComString(2014)=="B  B D B"){
						   app.DS.Set({ "opcode": "B  B C B" });
						}
						if(ACCoreJS.GetComString(2014)=="C  B D B"){
						   app.DS.Set({ "opcode": "C  B C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  A D B"){
						   app.DS.Set({ "opcode": "C  A C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="CB   D B"){
						   app.DS.Set({ "opcode": "CB   C B" });
						}						



						if(ACCoreJS.GetComString(2014)=="F    D B"){
						   app.DS.Set({ "opcode": "F    C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="C    D B"){
						   app.DS.Set({ "opcode": "C    C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="FB   D B"){
						   app.DS.Set({ "opcode": "FB   C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  A DDB"){
						   app.DS.Set({ "opcode": "C  A CDB" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B DDB"){
						   app.DS.Set({ "opcode": "C  B CDB" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  C DDB"){
						   app.DS.Set({ "opcode": "C  C CDB" });
						}


						if(ACCoreJS.GetComString(2014)=="C  A D B"){
						   app.DS.Set({ "opcode": "C  A C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B D B"){
						   app.DS.Set({ "opcode": "C  B C B" });
						}
						
						if(ACCoreJS.GetComString(2014)=="CA   D B"){
						   app.DS.Set({ "opcode": "CA   C B" });
						}
						if(ACCoreJS.GetComString(2014)=="CB   D B"){
						   app.DS.Set({ "opcode": "CB   C B" });
						}
						if(ACCoreJS.GetComString(2014)=="CC   D B"){
						   app.DS.Set({ "opcode": "CC   C B" });
						}						

												
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						
						if(ACCoreJS.GetComString(2014)=="B  A D A"){
						 app.DS.Set({ "opcode": "B  A C A" });	
						}
						if(ACCoreJS.GetComString(2014)=="B  B D A"){
						   app.DS.Set({ "opcode": "B  B C A" });
						}
						if(ACCoreJS.GetComString(2014)=="F  B D A"){
						   app.DS.Set({ "opcode": "F  B C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="F  A D A"){
						   app.DS.Set({ "opcode": "F  A C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="B  B D A"){
						   app.DS.Set({ "opcode": "B  B C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B D A"){
						   app.DS.Set({ "opcode": "C  B C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  A D A"){
						   app.DS.Set({ "opcode": "C  A C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="CB   D A"){
						   app.DS.Set({ "opcode": "CB   C A" });
						}						



						if(ACCoreJS.GetComString(2014)=="F    D A"){
						   app.DS.Set({ "opcode": "F    C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C    D A"){
						   app.DS.Set({ "opcode": "C    C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="FB   D A"){
						   app.DS.Set({ "opcode": "FB   C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  A DDA"){
						   app.DS.Set({ "opcode": "C  A CDA" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B DDA"){
						   app.DS.Set({ "opcode": "C  B CDA" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  C DDA"){
						   app.DS.Set({ "opcode": "C  C CDA" });
						}


						if(ACCoreJS.GetComString(2014)=="C  A D A"){
						   app.DS.Set({ "opcode": "C  A C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B D A"){
						   app.DS.Set({ "opcode": "C  B C A" });
						}


						if(ACCoreJS.GetComString(2014)=="CA   D A"){
						   app.DS.Set({ "opcode": "CA   C A" });
						}
						if(ACCoreJS.GetComString(2014)=="CB   D A"){
						   app.DS.Set({ "opcode": "CB   C A" });
						}
						if(ACCoreJS.GetComString(2014)=="CC   D A"){
						   app.DS.Set({ "opcode": "CC   C A" });
						}

					}
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
				}
			},
			checkLang_pin_nom_norec: function() {
				ACCoreJS.Trace("** checkLang_pin_nom_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "F    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "F    C A" });			
					}
					ACCoreJS.Trace("** checkLang_pin_nom_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_pin_nom_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_pin_nom_norec End **");
				}
			},
			checkLang_mc_fast_norec: function() {
				ACCoreJS.Trace("** checkLang_mc_fast_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "F    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "F    C A" });			
					}
					ACCoreJS.Trace("** checkLang_mc_fast_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_mc_fast_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_mc_fast_norec End **");
				}
			},
			checkLang_cirrus_bal_norec: function() {
				ACCoreJS.Trace("** checkLang_cirrus_bal_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "B  B C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "B  B C A" });			
					}
					ACCoreJS.Trace("** checkLang_cirrus_bal_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cirrus_bal_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_cirrus_bal_norec End **");
				}
			},
			checkLang_cirrus_bal_norec_ca: function() {
				ACCoreJS.Trace("** checkLang_cirrus_bal_norec_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "B  A C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "B  A C A" });			
					}
					ACCoreJS.Trace("** checkLang_cirrus_bal_norec_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cirrus_bal_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_cirrus_bal_norec End **");
				}
			},
			checkLang_cirrus_fast_norec: function() {
				ACCoreJS.Trace("** checkLang_cirrus_fast_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						
						if(ACCoreJS.GetComString(2014)=="C  B C B"){
						 app.DS.Set({ "opcode": "C  B C B" });	
						}
						else if(ACCoreJS.GetComString(2014)=="C  A C B"){
						 app.DS.Set({ "opcode": "C  A C B" });	
						}
						else if(ACCoreJS.GetComString(2014)=="F  A C B"){
						 app.DS.Set({ "opcode": "F  A C B" });	
						}						
						else if(ACCoreJS.GetComString(2014)=="F  A C B"){
						 app.DS.Set({ "opcode": "F  A C B" });	
						}
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						if(ACCoreJS.GetComString(2014)=="C  B C A"){
						 app.DS.Set({ "opcode": "C  B C A" });	
						}
						else if(ACCoreJS.GetComString(2014)=="C  A C A"){
						 app.DS.Set({ "opcode": "C  A C A" });	
						}
						else if(ACCoreJS.GetComString(2014)=="F  A C A"){
						 app.DS.Set({ "opcode": "F  A C A" });	
						}						
						else if(ACCoreJS.GetComString(2014)=="F  B C A"){
						 app.DS.Set({ "opcode": "F  B C A" });	
						}					}
					ACCoreJS.Trace("** checkLang_cirrus_fast_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cirrus_fast_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_cirrus_fast_norec End **");
				}
			},
			checkLang_bal_prepaid_norec: function() {
				ACCoreJS.Trace("** checkLang_bal_prepaid_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "B    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "B    C A" });			
					}
					ACCoreJS.Trace("** checkLang_bal_prepaid_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_bal_prepaid_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_bal_prepaid_norec End **");
				}
			},
			checkLang_fast_prepaid_norec: function() {
				ACCoreJS.Trace("** checkLang_fast_prepaid_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "F    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "F    C A" });			
					}
					ACCoreJS.Trace("** checkLang_fast_prepaid_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_fast_prepaid_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_fast_prepaid_norec End **");
				}
			},

			checkLang_MINI_norec: function() {
				ACCoreJS.Trace("** checkLang_MINI_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "DFA    B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "DFA    A" });			
					}
					ACCoreJS.Trace("** checkLang_MINI_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MINI_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_MINI_norec End **");
				}
			},

			checkLang_MINI: function() {
				ACCoreJS.Trace("** checkLang_MINI **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "DFA    B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "DFA    A" });			
					}
					ACCoreJS.Trace("** checkLang_MINI End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MINI: ' + e.message);
					ACCoreJS.Trace("** checkLang_MINI End **");
				}
			},
			checkLang_last_mc: function() {
				ACCoreJS.Trace("** checkLang_last_mc **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "F    D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "F    D A" });			
					}
					ACCoreJS.Trace("** checkLang_last_mc End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_last_mc: ' + e.message);
					ACCoreJS.Trace("** checkLang_last_mc End **");
				}
			},
			checkLang_last_mc_norec: function() {
				ACCoreJS.Trace("** checkLang_last_mc_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "F    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "F    C A" });			
					}
					ACCoreJS.Trace("** checkLang_last_mc_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_last_mc_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_last_mc_norec End **");
				}
			},

			checkLang_change_pin_mag_with_rec: function() {
				ACCoreJS.Trace("** checkLang_change_pin_mag_with_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "DAI  D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "DAI  D A" });			
					}
					ACCoreJS.Trace("** checkLang_change_pin_mag_with_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_change_pin_mag_with_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_change_pin_mag_with_rec End **");
				}
			},
			checkLang_change_pin_mag_without_rec: function() {
				ACCoreJS.Trace("** checkLang_change_pin_mag_without_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "DAI  C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "DAI  C A" });			
					}
					ACCoreJS.Trace("** checkLang_change_pin_mag_without_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_change_pin_mag_without_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_change_pin_mag_without_rec End **");
				}
			},
			checkLang_BAL_CA: function() {
				ACCoreJS.Trace("** checkLang_BAL_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "GA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "GA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
				}
			},			
			
			checkLang_BAL_CA_MAG: function() {
				ACCoreJS.Trace("** checkLang_BAL_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B  A C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B  A C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA End **");
				}
			},			
			
			checkLang_BAL_CA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_BAL_CA_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CA_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA_master End **");
				}
			},			
			
			checkLang_BAL_CA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_CA_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CA_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA_master_norec End **");
				}
			},			
			
			checkLang_BAL_SA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BB   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BB   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA_master End **");
				}
			},			
			
			checkLang_BAL_SA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BB   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BB   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA_master_norec End **");
				}
			},			
			
			checkLang_BAL_CC_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_BAL_CC_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BC   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BC   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CC_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CC_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CC_master End **");
				}
			},			
			
			checkLang_WDL_CA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CA   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CA   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_CA_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master End **");
				}
			},			
			
			checkLang_WDL_CA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_CA_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_CA_MAG_master_norec End **");
				}
			},			
			
			
			checkLang_WDL_SA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CB   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CB   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_SA_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master End **");
				}
			},			
			
			checkLang_WDL_SA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CB   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CB   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_SA_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_SA_MAG_master_norec End **");
				}
			},			
			
			checkLang_WDL_CC_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CC   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CC   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_CC_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master End **");
				}
			},			
			
			checkLang_WDL_CC_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "CC   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "CC   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WDL_CC_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_WDL_CC_MAG_master_norec End **");
				}
			},					
			
			checkLang_BAL_CC_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_CC_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "BC   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "BC   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CC_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CC_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CC_master_norec End **");
				}
			},			
			
			checkLang_BAL_CA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_CA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B  A C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B  A C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_CA_norec  End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_CA_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_CA_norec End **");
				}
			},			
			
			
			checkLang_BAL_SA: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA **");

				try {					
					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B    C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B    C A" });	
						
					}
					ACCoreJS.SetUCDIStr("transaction_type" , "bal_mc");
					ACCoreJS.Trace("** checkLang_BAL_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA End **");
				}
			},			
			
			
			checkLang_BAL_SA_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B    C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B    C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
				}
			},

			checkLang_WTRWL_MC_OTHERAMT: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_SA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C    D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C    D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
				}
			},

			checkLang_WTRWL_MC_OTHERAMT_norec: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_MC_OTHERAMT_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C    C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C    C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_MC_OTHERAMT_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_MC_OTHERAMT_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_MC_OTHERAMT_norec End **");
				}
			},


			checkLang_BAL_SA_MAG: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B  B C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B  B C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA End **");
				}
			},


			checkLang_BAL_SA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B  B C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B  B C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
				}
			},
			checkLang_WTRWL_SA: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_SA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C    D A" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C    D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
				}
			},
			checkLang_WTRWL_SA_MAG: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_SA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C  B D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C  B D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
				}
			},
			checkLang_WTRWL_SA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_SA_MAG_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C  B C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C  B C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_SA_MAG_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_SA_MAG_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_SA_MAG_norec End **");
				}
			},
			checkLang_WTRWL_CA: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "HA   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "HA   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_CA End **");
				}
			},
			checkLang_WTRWL_CA_MAG: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C  A D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C  A D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_CA End **");
				}
			},
			checkLang_WTRWL_CA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_CA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C  A C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C  A C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_CA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_CA End **");
				}
			},			
			checkLang_FAST_CA: function() {
				ACCoreJS.Trace("** checkLang_FAST_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "IAA  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "IAA  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CA End **");
				}
			},			
			checkLang_FAST_CA_MAG: function() {
				ACCoreJS.Trace("** checkLang_FAST_CA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  A D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  A D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  A D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  A D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  A D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  A D A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  A D A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  A D A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  A D A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  A D A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CA End **");
				}
			},			
			checkLang_FAST_CA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IA   D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HA   D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GA   D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FA   D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CA   D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IA   D A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HA   D A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GA   D A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FA   D A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CA   D A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CA_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master End **");
				}
			},			
			checkLang_FAST_SA_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IB   D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HB   D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GB   D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FB   D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CB   D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IB   D A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HB   D A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GB   D A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FB   D A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CB   D A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master End **");
				}
			},			
			checkLang_FAST_CC_MAG_master: function() {
				ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IC   D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HC   D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GC   D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FC   D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CC   D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IC   D A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HC   D A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GC   D A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FC   D A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CC   D A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CC_MAG_master: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master End **");
				}
			},			
			checkLang_FAST_SA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IB   C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HB   C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GB   C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FB   C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CB   C B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IB   C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HB   C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GB   C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FB   C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CB   C A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA_MAG_master_norec End **");
				}
			},			
			checkLang_FAST_CA_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IA   C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HA   C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GA   C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FA   C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CA   C B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IA   C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HA   C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GA   C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FA   C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CA   C A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CA_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CA_MAG_master_norec End **");
				}
			},			
			checkLang_FAST_CC_MAG_master_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					var amount_val = ACCoreJS.GetComString(2000);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IC   C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HC   C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GC   C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FC   C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CC   C B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "IC   C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "HC   C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "GC   C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "FC   C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "CC   C A" });
						}
						
					}
						ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CC_MAG_master_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CC_MAG_master_norec End **");
				}
			},
			checkLang_FAST_SA: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA **");

				try {		

					var amount_ucdi = ACCoreJS.GetUCDIString("amount_ucdi");
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					ACCoreJS.Trace("[amount_ucdi] = " + amount_ucdi);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I    D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H    D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G    D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F    D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C    D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I    D A" });
							ACCoreJS.Trace("** 01000000 **");
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H    D A" });
							ACCoreJS.Trace("** 00500000 **");
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G    D A" });
							ACCoreJS.Trace("** 00200000 **");
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F    D A" });
							ACCoreJS.Trace("** 00100000 **");
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C    D A" });
							ACCoreJS.Trace("** 00050000 **");
						}
						else{
							ACCoreJS.Trace("** NO AMOUNT SELECTED **");
						}

					}

 						ACCoreJS.Trace("** checkLang_FAST_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA End **");
				}
			},
			checkLang_FAST_SA_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I    C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H    C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G    C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F    C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C    C B" });
						}
						
						if(ACCoreJS.GetComString(2014)=="C  A DDB"){
						   app.DS.Set({ "opcode": "C  A CDB" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B DDB"){
						   app.DS.Set({ "opcode": "C  B CDB" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  C DDB"){
						   app.DS.Set({ "opcode": "C  C CDB" });
						}


						if(ACCoreJS.GetComString(2014)=="C  A D B"){
						   app.DS.Set({ "opcode": "C  A C B" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B D B"){
						   app.DS.Set({ "opcode": "C  B C B" });
						}		


						if(ACCoreJS.GetComString(2014)=="CA   D B"){
						   app.DS.Set({ "opcode": "CA   C B" });
						}
						if(ACCoreJS.GetComString(2014)=="CB   D B"){
						   app.DS.Set({ "opcode": "CB   C B" });
						}
						if(ACCoreJS.GetComString(2014)=="CC   D B"){
						   app.DS.Set({ "opcode": "CC   C B" });
						}
				
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I    C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H    C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G    C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F    C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C    C A" });
						}
						
						if(ACCoreJS.GetComString(2014)=="C  A DDA"){
						   app.DS.Set({ "opcode": "C  A CDA" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B DDA"){
						   app.DS.Set({ "opcode": "C  B CDA" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  C DDA"){
						   app.DS.Set({ "opcode": "C  C CDA" });
						}						
						

						if(ACCoreJS.GetComString(2014)=="C  A D A"){
						   app.DS.Set({ "opcode": "C  A C A" });
						}						
						if(ACCoreJS.GetComString(2014)=="C  B D A"){
						   app.DS.Set({ "opcode": "C  B C A" });
						}

						if(ACCoreJS.GetComString(2014)=="CA   D A"){
						   app.DS.Set({ "opcode": "CA   C A" });
						}
						if(ACCoreJS.GetComString(2014)=="CB   D A"){
						   app.DS.Set({ "opcode": "CB   C A" });
						}
						if(ACCoreJS.GetComString(2014)=="CC   D A"){
						   app.DS.Set({ "opcode": "CC   C A" });
						}

						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA_norec End **");
				}
			},
			checkLang_FAST_SA_MAG: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  B D B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  B D B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  B D B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  B D B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  B D B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  B D A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  B D A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  B D A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  B D A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  B D A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA End **");
				}
			},
			checkLang_FAST_SA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  B C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  B C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  B C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  B C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  B C B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  B C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  B C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  B C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  B C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  B C A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_SA End **");
				}
			},
			checkLang_FAST_CA_MAG_norec: function() {
				ACCoreJS.Trace("** checkLang_FAST_CA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					var amount_val = ACCoreJS.GetComString(2000);
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  A C B" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  A C B" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  A C B" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  A C B" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  A C B" });
						}
						
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						if(amount_val == "01000000"){
							app.DS.Set({ "opcode": "I  A C A" });
						}
						else if (amount_val == "00500000"){
							app.DS.Set({ "opcode": "H  A C A" });
						}
						else if (amount_val == "00200000"){
							app.DS.Set({ "opcode": "G  A C A" });
						}
						else if (amount_val == "00100000"){
							app.DS.Set({ "opcode": "F  A C A" });
						}
						else if (amount_val == "00050000"){
							app.DS.Set({ "opcode": "C  A C A" });
						}
						
					}
					ACCoreJS.Trace("** checkLang_FAST_CA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_FAST_CA: ' + e.message);
					ACCoreJS.Trace("** checkLang_FAST_CA End **");
				}
			},
		checkThankYou: function(){
				var time = new Date().toLocaleTimeString();
				var languageIndex = app.DS.getLanguageIdx();
				//alert(languageIndex);
				app.DS.set({"time":time+""});
				if(time.charAt(time.length-2)=='A'){
								app.DS.Set({ "thankyoulbl": "Good Morning !" }); 
								app.DS.Set({ "thankyoulbl_tagalog": "Magandang Umaga !" }); 
				}
				else{
						if(parseInt(time.charAt(0)) >= 6 && time.charAt(1) == ":" || parseInt(time.charAt(1)) == 0 || parseInt(time.charAt(1)) == 1){
							app.DS.Set({ "thankyoulbl": "Good Evening !" }); 
							app.DS.Set({ "thankyoulbl_tagalog": "Magandang Gabi !" }); 
						}
						else {
								app.DS.Set({ "thankyoulbl": "Good Afternoon !" }); 
								app.DS.Set({ "thankyoulbl_tagalog": "Magandang Tanghali !" });
						}
							
						
						
				}
			
		},
		resetLanguage: function(){
			app.DS.setLanguageIdx(1);
			ACCoreJS.SetUCDIStr("lang_type" , "E");  	
			
		},
		resetLanguagetText: function(){
			
			ACCoreJS.Trace("** resetLanguagetText Start **");
				try {					
					var languageIndex = app.DS.getLanguageIdx();
					
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					
					$(".languageButton").removeClass("selected");
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						
						ACCoreJS.SetUCDIStr("lang_type" , "T");  
						$(".btnFontScreenBtnTanglish").addClass("selected");
						$(".btnTaglish_color").css("color", "#FFFFFF");
						$(".btnEnglish_color").css("color", "#646464");	
						//$(".languageFontScreenBtnTanglish").css("background-image", "url('C:/Users/jp185255/Desktop/08-06-18/builder/projectAssets/BPI/btn_lang_red.png')");
						//$(".languageFontScreenBtnEnglish").css("background-image", "url('C:/Users/jp185255/Desktop/08-06-18/builder/projectAssets/BPI/btn_lang.png')");
						$(".languageFontScreenBtnTanglish").css("background-image", "url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btn_lang_red.png')");
						$(".languageFontScreenBtnEnglish").css("background-image", "url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btn_lang.png')");
									
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						ACCoreJS.SetUCDIStr("lang_type" , "E");  
						$(".btnFontScreenBtnEnglish").addClass("selected");
						$(".btnEnglish_color").css("color", "#FFFFFF");
						$(".btnTaglish_color").css("color", "#646464");	
						//$(".languageFontScreenBtnEnglish").css("background-image", "url('C:/Users/jp185255/Desktop/08-06-18/builder/projectAssets/BPI/btn_lang_red.png')");
						//$(".languageFontScreenBtnTanglish").css("background-image", "url('C:/Users/jp185255/Desktop/08-06-18/builder/projectAssets/BPI/btn_lang.png')");
						$(".languageFontScreenBtnEnglish").css("background-image", "url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btn_lang_red.png')");
						$(".languageFontScreenBtnTanglish").css("background-image", "url('C:/Program Files/NCR APTRA/Advance NDC/webatm/builder/projectAssets/BPI/btn_lang.png')");
																			
					}
				} catch (e) {
					ACCoreJS.Trace('resetLanguagetText: ' + e.message);
					ACCoreJS.Trace("** resetLanguagetText End **");
				}			
			
	
			ACCoreJS.Trace("** resetLanguagetText End **");
		},
		checkLang_PINCHANGE_mag_rec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_mag **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAI  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAI  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_FAST_SA End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_mag: ' + e.message);
					ACCoreJS.Trace("** checkLang_PINCHANGE_mag End **");
				}
			},
		checkLang_PINCHANGE_credit_rec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_credi_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DA   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DA   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_credi_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_credi_rec: ' + e.message);
					ACCoreJS.Trace("checkLang_PINCHANGE_credi_rec End **");
				}
			},
		checkLang_PINCHANGE_credit_norec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_credit_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_credit_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_credit_norec: ' + e.message);
					ACCoreJS.Trace("checkLang_PINCHANGE_credit_norec End **");
				}
			},

		checkLang_PINCHANGE_mag_norec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_mag_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAI  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAI  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_mag_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_mag_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PINCHANGE_mag_norec End **");
				}
			},
		checkLang_PINCHANGE_credit: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_credit **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DA   D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DA   D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_credit End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_credit: ' + e.message);
					ACCoreJS.Trace("** checkLang_PINCHANGE_credit End **");
				}
			},
		checkLang_PINCHANGE_credit_norec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_credit_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DA   C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DA   C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_credit_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_credit_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PINCHANGE_credit_norec End **");
				}
			},
		checkLang_PINCHANGE_mc_norec: function() {
				ACCoreJS.Trace("** checkLang_PINCHANGE_mc_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAI  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAI  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PINCHANGE_mc_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PINCHANGE_mc_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PINCHANGE_mc_norec End **");
				}
			},

		checkLang_EXPRESSOL_mag_ca: function() {
				ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBIA D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBIA D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESSOL_mag_ca: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca End **");
				}
			},
		checkLang_EXPRESSOL_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBIA C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBIA C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESSOL_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_ca_norec End **");
				}
			}
			,
		checkLang_EXPRESSOL_mag_sa: function() {
				ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBIB D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBIB D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESSOL_mag_sa: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa End **");
				}
			},
		checkLang_EXPRESSOL_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBIB C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBIB C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESSOL_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESSOL_mag_sa_norec End **");
				}
			},
		checkLang_PHONE_mag_sa: function() {
				ACCoreJS.Trace("** checkLang_PHONE_mag_sa **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBHB D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBHB D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PHONE_mag_sa End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PHONE_mag_sa: ' + e.message);
					ACCoreJS.Trace("** checkLang_PHONE_mag_sa End **");
				}
			},
		checkLang_PHONE_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_PHONE_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBHB C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBHB C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PHONE_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PHONE_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PHONE_mag_sa_norec End **");
				}
			},
		checkLang_PHONE_mag_ca: function() {
				ACCoreJS.Trace("** checkLang_PHONE_mag_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBHA D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBHA D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PHONE_mag_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PHONE_mag_ca: ' + e.message);
					ACCoreJS.Trace("** checkLang_PHONE_mag_ca End **");
				}
			},
		checkLang_PHONE_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_PHONE_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBHA C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBHA C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PHONE_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PHONE_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PHONE_mag_ca_norec End **");
				}
			},
		checkLang_MOBILE_mag_ca: function() {
				ACCoreJS.Trace("** checkLang_MOBILE_mag_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBAA D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBAA D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_MOBILE_mag_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MOBILE_mag_ca: ' + e.message);
					ACCoreJS.Trace("** checkLang_MOBILE_mag_ca End **");
				}
			},
		checkLang_MOBILE_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_MOBILE_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBAA C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBAA C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_MOBILE_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MOBILE_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_MOBILE_mag_ca_norec End **");
				}
			},
		checkLang_MOBILE_mag_sa: function() {
				ACCoreJS.Trace("** checkLang_MOBILE_mag_sa **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBAB D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBAB D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_MOBILE_mag_sa End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MOBILE_mag_sa: ' + e.message);
					ACCoreJS.Trace("** checkLang_MOBILE_mag_sa End **");
				}
			},
		checkLang_MOBILE_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_MOBILE_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBAB C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBAB C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_MOBILE_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_MOBILE_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_MOBILE_mag_sa_norec End **");
				}
			},
		checkLang_BANKING_EN_mag_sa: function() {
				ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBGB D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBGB D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_EN_mag_sa: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa End **");
				}
			},
		checkLang_BANKING_EN_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBGB C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBGB C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_EN_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_sa_norec End **");
				}
			},
		checkLang_BANKING_EN_mag_ca: function() {
				ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBGA D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBGA D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_EN_mag_ca: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca End **");
				}
			},
		checkLang_BANKING_EN_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBGA C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBGA C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_EN_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_EN_mag_ca_norec End **");
				}
			},
		checkLang_BANKING_MPIN_mag_sa: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBFB D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBFB D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_mag_sa: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa End **");
				}
			},
		checkLang_BANKING_MPIN_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBFB C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBFB C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_sa_norec End **");
				}
			},
		checkLang_BANKING_MPIN_mag_ca: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBFA D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBFA D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_mag_ca: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca End **");
				}
			},
		checkLang_BANKING_MPIN_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBFA C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBFA C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_mag_ca_norec End **");
				}
			},


		checkLang_EXPRESS_PHONE_emv: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBH  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBH  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_PHONE_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv End **");
				}
			},
		checkLang_EXPRESS_PHONE_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBH  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBH  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_PHONE_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_PHONE_emv_norec End **");
				}
			},

			
		checkLang_EXPRESS_ONLINE_emv: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBI  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBI  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_ONLINE_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv End **");
				}
			},
		checkLang_EXPRESS_ONLINE_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBI  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBI  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_ONLINE_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_ONLINE_emv_norec End **");
				}
			},		

			
		checkLang_EXPRESS_MOBILE_emv: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBA  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBA  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_MOBILE_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv End **");
				}
			},
		checkLang_EXPRESS_MOBILE_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBA  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBA  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_EXPRESS_MOBILE_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_EXPRESS_MOBILE_emv_norec End **");
				}
			},	


		checkLang_BANKING_ENROLLMENT_emv: function() {
				ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBG  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBG  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_ENROLLMENT_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv End **");
				}
			},
		checkLang_BANKING_ENROLLMENT_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBG  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBG  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_ENROLLMENT_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_ENROLLMENT_emv_norec End **");
				}
			},

		checkLang_BANKING_MPIN_emv: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBF  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBF  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv End **");
				}
			},
		checkLang_BANKING_MPIN_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DBF  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DBF  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BANKING_MPIN_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BANKING_MPIN_emv_norec End **");
				}
			},
			checkLang_PIN_CHANGE_emv: function() {
				ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAI  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAI  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PIN_CHANGE_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv End **");
				}
			},
		checkLang_PIN_CHANGE_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAI  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAI  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PIN_CHANGE_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PIN_CHANGE_emv_norec End **");
				}
			},
			checkLang_PIN_NOMINATION_emv: function() {
				ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PIN_NOMINATION_emv: ' + e.message);
					ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv End **");
				}
			},
		checkLang_PIN_NOMINATION_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_PIN_NOMINATION_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_PIN_NOMINATION_emv_norec End **");
				}
			},
		checkLang_emv_mc: function() {
				ACCoreJS.Trace("** checkLang_emv_mc **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_emv_mc End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_emv_mc: ' + e.message);
					ACCoreJS.Trace("** checkLang_emv_mc End **");
				}
			},
		checkLang_emv_mc_norec: function() {
				ACCoreJS.Trace("** checkLang_emv_mc_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_emv_mc_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_emv_mc_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_emv_mc_norec End **");
				}
			},
		checkLang_emv_mc_pin_nom: function() {
				ACCoreJS.Trace("** checkLang_emv_mc_pin_nom **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_emv_mc_pin_nom End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_emv_mc_pin_nom: ' + e.message);
					ACCoreJS.Trace("** checkLang_emv_mc_pin_nom End **");
				}
			},
		checkLang_emv_mc_pin_nom_norec: function() {
				ACCoreJS.Trace("** checkLang_emv_mc_pin_nom_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAG  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAG  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_emv_mc_pin_nom_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_emv_mc_pin_nom_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_emv_mc_pin_nom_norec End **");
				}
			},
		last_trans_checker: function() {
				ACCoreJS.Trace("** last_trans_checker **");

				try {				

					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);
					ACCoreJS.Trace("** last_trans_checker End **");
					
				} catch (e) {
					ACCoreJS.Trace('last_trans_checker: ' + e.message);
					ACCoreJS.Trace("** last_trans_checker End **");
				}
			},
		checkLang_cardless_bpi: function() {
				ACCoreJS.Trace("** checkLang_cardless_bpi **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "B      B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "B      A" });			
					}
					ACCoreJS.Trace("** checkLang_cardless_bpi End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cardless_bpi: ' + e.message);
					ACCoreJS.Trace("** checkLang_cardless_bpi End **");
				}
		},

		checkLang_dep_prepaid: function() {
				ACCoreJS.Trace("** checkLang_dep_prepaid **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADC  D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADC  D A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_prepaid End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_prepaid: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_prepaid End **");
				}
		},

		checkLang_dep_prepaid_norec: function() {
				ACCoreJS.Trace("** checkLang_dep_prepaid_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADC  C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADC  C A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_prepaid_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_prepaid_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_prepaid_norec End **");
				}
		},

		checkLang_cardless_bpi_family: function() {
				ACCoreJS.Trace("** checkLang_cardless_bpi_family **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "C      B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "C      A" });			
					}
					ACCoreJS.Trace("** checkLang_cardless_bpi_family End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cardless_bpi_family: ' + e.message);
					ACCoreJS.Trace("** checkLang_cardless_bpi_family End **");
				}
		},
		checkLang_cardless_bpi_direct: function() {
				ACCoreJS.Trace("** checkLang_cardless_bpi_direct **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "D      B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "D      A" });			
					}
					ACCoreJS.Trace("** checkLang_cardless_bpi_direct End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_cardless_bpi_direct: ' + e.message);
					ACCoreJS.Trace("** checkLang_cardless_bpi_direct End **");
				}
		},
		checkLang_dep_mag_sa_rec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_sa_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADB  D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADB  D A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_sa_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_sa_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_sa_rec End **");
				}
		},
		checkLang_dep_mag_sa_norec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_sa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADB  C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADB  C A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_sa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_sa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_sa_norec End **");
				}
		},

		checkLang_dep_mag_ca_rec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_ca_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADA  D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADA  D A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_ca_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_ca_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_ca_rec End **");
				}
		},
		checkLang_dep_mag_ca_norec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_ca_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "ADA  C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "ADA  C A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_ca_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_ca_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_ca_norec End **");
				}
		},

		checkLang_dep_mag_pa_rec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_pa_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "D      B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "D      A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_pa_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_pa_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_pa_rec End **");
				}
		},
		checkLang_dep_mag_pa_norec: function() {
				ACCoreJS.Trace("** checkLang_dep_mag_pa_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "D      B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "D      A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_mag_pa_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_mag_pa_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_mag_pa_norec End **");
				}
		},

		checkLang_dep_emv_rec: function() {
				ACCoreJS.Trace("** checkLang_dep_emv_rec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "AB   D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "AB   D A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_emv_rec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_emv_rec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_emv_rec End **");
				}
		},
		checkLang_dep_emv_norec: function() {
				ACCoreJS.Trace("** checkLang_dep_emv_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "AB   C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "AB   C A" });			
					}
					ACCoreJS.Trace("** checkLang_dep_emv_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_dep_emv_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_dep_emv_norec End **");
				}
		},
			customIdle: function(object, params){
			ACCoreJS.Trace("customIdle");
			app.DS.setLanguageIdx(1);
			ACCoreJS.SetUCDIStr("lang_type" , "E");  	

			var imagesPath = object.model.get("idleImages");
			var time = new Date().getHours();
			var idleCounter = 0;
			var greetingImage = "";
			var greetingImage2 = "";
			var prefix = "S1_";
			var prefix2 = "S2_";
			
			$(params["elementBackground"]).css({ "background" : 'url("' + imagesPath[idleCounter] + '") no-repeat'});

			ACCoreJS.Trace("** TIME =  " + time);
			if(time >= 0 && time < 12){ //Morning
				previousTOD = currentTOD;
				currentTOD = "M";
				greetingImage = "S1_Morning.png";
				greetingImage2 = "S2_Morning.png";
				ACCoreJS.Trace("** Morning **");
			} 
			else if(time >= 12 && time < 14){ //Afternoon
				previousTOD = currentTOD;
				currentTOD = "A";
				greetingImage = "S1_Afternoon.png";
				greetingImage2 = "S2_Tanghali.png";	
				ACCoreJS.Trace("** Afternoon **");
				
			} 
			else if(time >= 14 && time < 18){ //Afternoon
				previousTOD = currentTOD;
				currentTOD = "A2";
				greetingImage = "S1_Afternoon.png";
				greetingImage2 = "S2_Afternoon.png";
				ACCoreJS.Trace("** Afternoon **");
				
			} 
			else if (time >= 18){ //Evening
				previousTOD = currentTOD;
				currentTOD = "E";
				greetingImage = "S1_Evening.png";
				greetingImage2 = "S2_Evening.png";
				ACCoreJS.Trace("** Evening **");
				
			}
			if(previousTOD != currentTOD) { //Do Something
				//Set idle images
				ACCoreJS.Trace("customIdle update image");
				$.each(imagesPath, function(idx,val) {
					//imagesPath[idx] = val.replace(params["imagesToReplace"], greetingImage);
					if(val.indexOf(prefix) >= 0) {
						imagesPath[idx] = val.substring(0, val.indexOf(prefix)) + greetingImage;
						//imagesPath[idx] = val.substring(0, val.indexOf(prefix2)) + greetingImage2;
						//alert(imagesPath);
						//ACCoreJS.Trace(val.substring(0, val.indexOf(prefix)));
					}
					else if (val.indexOf(prefix2) >= 0){
						imagesPath[idx] = val.substring(0, val.indexOf(prefix2)) + greetingImage2;
						
					}
					//ACCoreJS.Trace(greetingImage);
					ACCoreJS.Trace(imagesPath[idx]);
				});
				
				$(params["elementBackground"]).css({ "background" : 'url("' + imagesPath[idleCounter] + '") no-repeat'});
				idleCounter++;
				
				clearInterval(idleImageInterval);
				//clearInterval(idleCheckingInterval);
				
				//Interval
				idleImageInterval = setInterval(function()  {
					$(params["elementBackground"]).css({ "background" : 'url("' + imagesPath[idleCounter] + '") no-repeat'});

					if (idleCounter++ == imagesPath.length-1) idleCounter = 0;
				}, 6000);
				
				//idleCheckingInterval = setInterval(function() { ACLib.customIdle(object, params); }, params["interval"]);
			} else { //Do nothing 
				//ACCoreJS.Trace("customIdle do nothing");
			}
			
			clearInterval(idleCheckingInterval);
			idleCheckingInterval = setInterval(function() { 

			ACLib.customIdle(object, params); 

			if(last_trans == " " || last_trans == null || last_trans == ""){
					ACCoreJS.Trace(" last_trans is empty...");
					last_trans = new Date().toLocaleTimeString();					
					ACCoreJS.SetUCDIStr("last_trans" , last_trans);  					
					ACCoreJS.Trace("[last_trans] = " + last_trans);				
			}		

			}, params["interval"]);
		},							
		checkLang_ACTIVATE_EMV_mag: function() {
				ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAH  D B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAH  D A" });	
						
					}
					ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_ACTIVATE_EMV_mag: ' + e.message);
					ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag End **");
				}
			},
		checkLang_ACTIVATE_EMV_mag_norec: function() {
				ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "DAH  C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "DAH  C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_ACTIVATE_EMV_mag_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_ACTIVATE_EMV_mag_norec End **");
				}
			},			
			
			checkLang_BAL_SA_norec: function() {
				ACCoreJS.Trace("** checkLang_BAL_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "B    C B" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "B    C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_BAL_SA_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_BAL_SA_norec End **");
				}
			},
			checkLang_WTRWL_SA_norec: function() {
				ACCoreJS.Trace("** checkLang_WTRWL_SA_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2){
						ACCoreJS.Trace("** TAGALOG **");
						app.DS.Set({ "opcode": "C    C A" });
												
					}
					else{
						ACCoreJS.Trace("** ENGLISH **");
						app.DS.Set({ "opcode": "C    C A" });	
						
					}
					ACCoreJS.Trace("** checkLang_WTRWL_SA_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_WTRWL_SA: ' + e.message);
					ACCoreJS.Trace("** checkLang_WTRWL_SA End **");
				}
			},
			checkLang_force_pin: function() {
				ACCoreJS.Trace("** checkLang_force_pin **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "D    D B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "D    D A" });			
					}
					ACCoreJS.Trace("** checkLang_force_pin End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_force_pin: ' + e.message);
					ACCoreJS.Trace("** checkLang_force_pin End **");
				}
			},
			checkLang_force_pin_norec: function() {
				ACCoreJS.Trace("** checkLang_force_pin_norec **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						ACCoreJS.Trace("** TAGALOG **");	
						   app.DS.Set({ "opcode": "D    C B" });							
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						   app.DS.Set({ "opcode": "D    C A" });			
					}
					ACCoreJS.Trace("** checkLang_force_pin_norec End **");
					
				} catch (e) {
					ACCoreJS.Trace('checkLang_force_pin_norec: ' + e.message);
					ACCoreJS.Trace("** checkLang_force_pin_norec End **");
				}
			},
			checkLang_dep_prepaid_rec: function() {
					ACCoreJS.Trace("** checkLang_dep_prepaid_rec **");

					try {					
						var languageIndex = app.DS.getLanguageIdx();
						ACCoreJS.Trace("[languageIndex] = " + languageIndex);
						if(languageIndex == 2 ){
							ACCoreJS.Trace("** TAGALOG **");	
							   app.DS.Set({ "opcode": "AB D D B" });							
						}
						else if(languageIndex == 1){
							 ACCoreJS.Trace("** ENGLISH **");
							   app.DS.Set({ "opcode": "AB D D A" });			
						}
						ACCoreJS.Trace("** checkLang_dep_prepaid_rec End **");
						
					} catch (e) {
						ACCoreJS.Trace('checkLang_dep_prepaid_rec: ' + e.message);
						ACCoreJS.Trace("** checkLang_dep_prepaid_rec End **");
					}
			},
			/*checkLang_dep_prepaid_norec: function() {
					ACCoreJS.Trace("** checkLang_dep_prepaid_norec **");

					try {					
						var languageIndex = app.DS.getLanguageIdx();
						ACCoreJS.Trace("[languageIndex] = " + languageIndex);
						if(languageIndex == 2 ){
							ACCoreJS.Trace("** TAGALOG **");	
							   app.DS.Set({ "opcode": "AB D C B" });							
						}
						else if(languageIndex == 1){
							 ACCoreJS.Trace("** ENGLISH **");
							   app.DS.Set({ "opcode": "AB D C A" });			
						}
						ACCoreJS.Trace("** checkLang_dep_prepaid_norec End **");
						
					} catch (e) {
						ACCoreJS.Trace('checkLang_dep_prepaid_norec: ' + e.message);
						ACCoreJS.Trace("** checkLang_dep_prepaid_norec End **");
					}
			},*/
			setOpcodeLanguage: function() {
				ACCoreJS.Trace("** setOpcodeLanguage **");

				try {					
					var languageIndex = app.DS.getLanguageIdx();
					ACCoreJS.Trace("[languageIndex] = " + languageIndex);
					if(languageIndex == 2 ){
						 ACCoreJS.Trace("** TAGALOG **");	
						 ACCoreJS.SetUCDIStr("lang_type" , "T");  
					}
					else if(languageIndex == 1){
						 ACCoreJS.Trace("** ENGLISH **");
						 ACCoreJS.SetUCDIStr("lang_type" , "E");	  
					}
					ACCoreJS.Trace("** setOpcodeLanguage End **");
					
				} catch (e) {
					ACCoreJS.Trace('setOpcodeLanguage: ' + e.message);
					ACCoreJS.Trace("** setOpcodeLanguage End **");
				}
			},
			displayBalance_fast: function(){
			ACCoreJS.Trace("displayBalance_fast");
			
					window.setTimeout(function() {
						ACCoreJS.Trace("displayBalance_fast - Timeout");
						$(".btnwhite").css("visibility", "hidden");
						$(".btnred").css("visibility", "hidden");
						$(".btnwhite-disabled").css("visibility", "visible");
						$(".btnred-disabled").css("visibility", "visible");
					}, 6000);
		},
			check_BIN: function(){
				ACCoreJS.Trace("** check_BIN start **");	
				var bin_val = ACCoreJS.GetCDIStoreValue(2043);
				ACCoreJS.Trace(" Track 2 value is = " + bin_val);	
				ACCoreJS.Trace("** check_BIN end **");		
		},
		Peep_Feat: function(){
			ACCoreJS.Trace("Peep_Feat");
			try {					
				window.setTimeout(function() {
						
					$("#clickable")
						.mousedown(function(e) {
							
							 $(".lblcurrent_val_tap").css("visibility", "visible");
							 $(".lblhand").css("visibility", "hidden");
							 
							 
							 //$("#clickable").css("visibility", "hidden");	
							
								window.setTimeout(function() {
									 $(".lblcurrent_val_tap").css("visibility", "hidden");
									 $(".lblhand").css("visibility", "visible"); 			
								}, 1000);
							ACCoreJS.Trace("Clicked");
						})
						.mouseup(function(e) {
							//$(".lblcurrent_val_tap").css("visibility", "hidden");
									 
							//$(".lblhand").css("visibility", "visible"); 			

							ACCoreJS.Trace("Up");
						})
		
						
				

					}, 1000);			
			} catch (e) {
					
				ACCoreJS.Trace("** Peep_Feat Error **");
			}
							
			ACCoreJS.Trace("** Peep_Feat End **");		
		},
		hideHeaderFunc : function(params) {
			$('#headerContainer').hide();
			
        	},
		checkLanguagePlsWait : function() {
			
				var  languageType = ACCoreJS.GetUCDIString("lang_type");
				if(languageType == "T"){
					    app.DS.setLanguageIdx(2);
				}
				else{
					    app.DS.setLanguageIdx(1);
				}
			
        	}			

	};

	return ACLib;
});
