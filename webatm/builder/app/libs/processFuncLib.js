define([
	"app",
  	"./library",
	"extraResourceBaseURL/data/ATMCErrorCodeData",
	 "../../app/libs/formatinput"

	],

function(app ,ACLib , ATMCErrorCodeData , FormatInput )
{
	var cardEjectBeeper;

	var ACProcessFuncLib =
	{


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




		processESBFavoriteData : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var atmcStatus = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var withdrawalStatus = atmcStatus.charAt(1);
			var depositStatus = atmcStatus.charAt(2);
			var thousandDollarStatus = atmcStatus.charAt(5);
			var hundredDollarStatus = atmcStatus.charAt(6);
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
							// enable = withdrawalStatus;

							if(withdrawalStatus == "1")
							{
								if( parseInt($(this).find("TXAMT").text()) >= 1000 && thousandDollarStatus == "1")
								{
									if(parseInt($(this).find("TXAMT").text()) % 1000 > 0 && hundredDollarStatus != "1" )
										enable = "0";
									else
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
							else
								enable = "0";
							// enable = withdrawalStatus;
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
			var depositStatus = atmcStatus.charAt(2);
			var thousandDollarStatus = atmcStatus.charAt(5);
			var hundredDollarStatus = atmcStatus.charAt(6);
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
								// 		maxCWDAmt = 50000;
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
									if( parseInt($(this).find("TXAMT").text()) >= 1000 && thousandDollarStatus == "1")
									{
										if(parseInt($(this).find("TXAMT").text()) % 1000 > 0 && hundredDollarStatus != "1" )
											enable = "0";
										else
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
			selectionString += '"interNaviData" : "' + "CRW" + '",';
			selectionString += '"TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXNAME" : "' + "CRW" + '",';
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
			selectionString += '"interNaviData" : "' + "CRW" + '",';
			selectionString += '"TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXNAME" : "' + "CRW" + '",';
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
			selectionString += '"interNaviData" : "' + "CRW" + '",';
			selectionString += '"TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXNAME" : "' + "CRW" + '",';
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
			selectionString += '"interNaviData" : "' + "CRW" + '",';
			selectionString += '"TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXNAME" : "' + "CRW" + '",';
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
			selectionString += '"interNaviData" : "' + "CRW" + '",';
			selectionString += '"TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXCODE" : "' + "CRW" + '",';
			selectionString += '"@TXNAME" : "' + "CRW" + '",';
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
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "DEVICEPROCESS_UNIONCARD_EMVPREAUTHORISE" + '",';

			selectionString += '"label1" : "餘額查詢",';
			selectionString += '"label3" : "BALANCE INQUIRY",';

			selectionString += '"localClass" : "withdrawalOthers",';

			selectionString += '"setters" : {';
			selectionString += '"interNaviData" : "' + "EMVPREAUTHRISE" + '",';
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
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "DEVICEPROCESS_UNIONCARD_EMVPREAUTHORISE" + '",';

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
			selectionString += '"interNaviData" : "' + "EMVPREAUTHRISE" + '",';
			selectionString += '"TXAMT" : "1000",';
			selectionString += '"@TXAMT" : "1000"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "DEVICEPROCESS_UNIONCARD_EMVPREAUTHORISE" + '",';

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
			selectionString += '"interNaviData" : "' + "EMVPREAUTHRISE" + '",';
			selectionString += '"TXAMT" : "3000",';
			selectionString += '"@TXAMT" : "3000"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));


			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "DEVICEPROCESS_UNIONCARD_EMVPREAUTHORISE" + '",';

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
			selectionString += '"interNaviData" : "' + "EMVPREAUTHRISE" + '",';
			selectionString += '"TXAMT" : "5000",';
			selectionString += '"@TXAMT" : "5000"';
			selectionString += '}}';

			arrSelections.push($.parseJSON(selectionString));

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "interNavi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "deviceProcessState" + '",';
			selectionString += '"nextScreenID" : "' + "DEVICEPROCESS_UNIONCARD_EMVPREAUTHORISE" + '",';

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
			selectionString += '"interNaviData" : "' + "EMVPREAUTHRISE" + '",';
			selectionString += '"TXAMT" : "20000",';
			selectionString += '"@TXAMT" : "20000"';
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

		processOnUsCGBRUCashWithdrawalBtnStatus : function(oriData)
		{
			var arrSelections = [];
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");
			var cssDisableClassName = "";

			selectionString = ' { ';
			selectionString += '"naviType" : "' + "navi" + '",';
			selectionString += '"nextScreenTemplate" : "' + "conditionState" + '",';
			selectionString += '"nextScreenID" : "' + "CONDITION_ONUS_GBRU_CASHWITHDRAWAL_TYPE" + '",';


			var FOREIGNCASSETTESCDIVAL = String(ACCoreJS.GetUCDIString("FOREIGNCASSETTES"));
			var enableWithdrawal = "0";

			if(FOREIGNCASSETTESCDIVAL != "undefined")
			{
				var xmlDoc = $.parseXML(FOREIGNCASSETTESCDIVAL);
				var count = $(xmlDoc).find("item").size();
				var currency = "";
				var cassetestatus = "";
				var foundTWD = false;
				var foundCassetStatusIsOne= false;

				$(xmlDoc).find("item").each(function(index, value)
				{
					currency = $(this).find("currency").text();
					cassetestatus = $(this).find("cassetestatus").text();

                	if( cassetestatus == "1")
                	{
                		foundCassetStatusIsOne = true;
                		return;
                	}
				});


				if(FOREIGNCASSETTESCDIVAL != "undefined" && FOREIGNCASSETTESCDIVAL.length > 0 && count > 0)
				{
					if(foundCassetStatusIsOne)
						enableWithdrawal = "1";
					else
						enableWithdrawal = "0";
				}
				else if(cdiVal.charAt(1) == "1")
				{
					enableWithdrawal = "1";
				}

			}

			// if(cdiVal.charAt(1) == "1")
			// {
			// 	selectionString += '"localClass" : "withdrawalOthers",';
			// 	selectionString += '"enable" : "1",';

			// }
			// else
			// {
			// 	selectionString += '"localClass" : "withdrawalDisableOthers",';
			// 	selectionString += '"enable" : "0",';
			// }

			if(enableWithdrawal == "1")
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

		processKioskDirectDebitAcctData :  function(oriData)
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
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_INQUIRY_CREDITCARD_AUTO_DEDUCTION_EDIT" + '",';

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

	  			selectionString += '"functions" : [';
	  			selectionString += '"refreshHeaderAcctInfo"';
	  			selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"CURR_ACC" : "' + "0" + '",';
				selectionString += '"@CURR_ACC" : "' + "0" + '",';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"bankID" : "' + bankId + '",';
				selectionString += '"accountNumber" : "' + accountNumber + '"';
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
                        case "JPY":
                            selectionString += '"CURRENCY" : "' + "53" + '",';
                            selectionString += '"@CURRENCY" : "' + "53" + '"';
                            break;
                        case "RMB":
                        case "CNY":
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

		processBonusPointProductMaxQuantity : function()
		{
			var prodBonusPoint = app.DS.get("TOTAL_PROD_BONUSPOINT");
			var bonusPoint = parseInt(app.DS.get("BONUSPOINT"));
			var quantity = parseInt(parseInt(bonusPoint)/parseInt(prodBonusPoint));

			app.DS.update({"PROD_BONUSPOINT_MAX" : String(quantity)});
		},

		processProductQuantity: function(val){
			var arrSelections = [];
			var selectionString = "";
				var prodBonusPoint = app.DS.get("PROD_BONUSPOINT");
				var bonusPoint = parseInt(app.DS.get("BONUSPOINT"));
				var quantity = parseInt(parseInt(bonusPoint)/parseInt(prodBonusPoint));
				//ACCoreJS.Trace("QUAN")
				//ACCoreJS.Trace(quantity)
				for(var i = 0; i < quantity; i++){
					selectionString = ' { ';
					selectionString += '"naviType" : "' + "navi" + '",';
					selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
					selectionString += '"nextScreenID" : "' + "INPUT_MOBILENUMBER_BONUSPOINT" + '",';
					selectionString += '"label1" : "' + parseInt(i+1) + '",';
					//selectionString += '"labelClass1" : "' + "label1ForProductlist" + '",';
					//selectionString += '"label2" : " ' + "紅利點數"  + productlist[i].Field01 + "點" + '",';
					selectionString += '"enable" : "' + 1 + '",';
					selectionString += '"setters" : {';
					selectionString += '"PROD_QUANTITY" : "' + parseInt(i+1) + '",';
					selectionString += '"TOTAL_PROD_BONUSPOINT" : "' + prodBonusPoint*(i+1) + '",';
					selectionString += '"BONUSPOINT" : "' + (bonusPoint - (prodBonusPoint*(i+1))) + '"';
					selectionString += '}}';

					arrSelections.push($.parseJSON(selectionString));
				}
				ACCoreJS.Trace(arrSelections)
				return arrSelections;
		},

		processProductList: function(val){
			var productlist = app.DS.get("productVO");

			//ACCoreJS.Trace(productlist);

			var bonusPoint = app.DS.get("BONUSPOINT");
			// app.DS.update({"BONUSPOINT": bonusPoint})

			//var bonusPoint = 2000;
			var enable = 1;
			var arrSelections = [];
			//ACCoreJS.Trace("PRODUCT LIST")
			//ACCoreJS.Trace(JSON.stringify(productlist))
			var selectionString = "";

			if(typeof productlist == "undefined")
				return arrSelections;

			for(var i = 0; i < productlist.length; i++){
				//ACCoreJS.Trace(productlist[i].field01 + "ji")
				if( parseInt(productlist[i].field01) > bonusPoint){
					enable = 0;
				}else{
					enable = 1;
				}
				//ACCoreJS.Trace(JSON.stringify(productlist))

		//		var longDesc = (productlist[i].longDesc).replace(/\n/g, "<br>");

		//		var longDesc = longDesc.replace(/[\\]/g, "\\\\");
			//	var longDesc = longDesc.replace(/\"/g, "\\\"");
			//	var longDesc = longDesc.replace(/\//g, "\\\/");
			//	var longDesc = longDesc.replace(/\f/g, "\\\f");
			//	var longDesc = longDesc.replace(/\r/g, "\\\r");
			//	var longDesc = longDesc.replace(/\t/g, "\\\t");
				var longDesc = (productlist[i].longDesc).replace(/[\\]/g, '\\\\')
					  .replace(/[\"]/g, '\\\"')
					  .replace(/[\/]/g, '\\/')
					  .replace(/[\b]/g, '\\b')
					  .replace(/[\f]/g, '\\f')
					  .replace(/[\n]/g, '<br>')
					  .replace(/[\r]/g, '\\r')
					  .replace(/[\t]/g, '\\t');
				//ACCoreJS.Trace(longDesc)
				//ACCoreJS.Trace(ConfigData.bonusPoint.imageDir  + productlist[i].id + "\\" + productlist[i].src)
				selectionString = ' { ';
				selectionString += '"naviType" : "' + "navi" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_BONUSPOINT_PURCHASE_INSERT_INFO" + '",';
				selectionString += '"id" : "' + "productlist" + '",';
				selectionString += '"dataRevealID" : "' + "firstModal" + '",';
				selectionString += '"itemListClass" : "' + "productlistclass" + '",';
			//	selectionString += '"bonusPoint" : "' + "累計至2016/OO/OO  紅利點數共"+ bonusPoint + "點" + '",';
				selectionString += '"localClass" : "' + "sixButtonImageClass" + i + '",';
				selectionString += '"label1" : "' + productlist[i].name + '",';
				selectionString += '"labelClass1" : "' + "label1ForProductlist" + '",';
				selectionString += '"label3" : " ' + "紅利點數:" + '",';
				selectionString += '"labelClass3" : "' + "label3ForProductlist" + '",';
				selectionString += '"label4" : " ' +  productlist[i].field01 + '",';
				selectionString += '"labelClass4" : "' + "label4ForProductlist" + '",';
				selectionString += '"enable" : "' + enable + '",';
				selectionString += '"buttonPopUp" : { "type" : "ESUNBonusPointProductDetails"},';
				selectionString += '"backgroundImage" : "' + ConfigData.bonusPoint.imageDir + "/bonuspoint/"  + productlist[i].id + "/" + productlist[i].src + '",';
				selectionString += '"functions" : [ "processBonusPointProductMaxQuantity" ],';
				selectionString += '"setters" : {';
				selectionString += '"PROD_ID" : "' + productlist[i].id + '",';
				selectionString += '"PROD_SRC" : "' + productlist[i].src + '",';
				selectionString += '"PROD_NAME" : "' + productlist[i].name + '",';
				selectionString += '"PROD_CODE" : "' + productlist[i].code + '",';
				selectionString += '"PROD_DES" : "' + longDesc + '",';
				selectionString += '"PROD_IMAGEFULLPATH" : "' + ConfigData.bonusPoint.imageDir + "/bonuspoint/"  + productlist[i].id + "/" + productlist[i].src + '",';
				selectionString += '"PROD_BONUSPOINT_ORI" : "' +  productlist[i].field01 + '",';
				selectionString += '"TOTAL_PROD_BONUSPOINT" : "' +  productlist[i].field01 + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
				//ACCoreJS.Trace(arrSelections)
			}
			//ACCoreJS.Trace(arrSelections)
			return arrSelections;
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

		setBalInqInitPoint : function()
		{
			app.DS.update({"nextIntiPoint" : "navi/conditionState/CONDITION_BALINQ_ACCTLIST" });
			ACCoreJS.Trace("setTransferInitPoint : " +JSON.stringify(app.DS.Get("nextIntiPoint")));
		},

		setTransferInitPoint : function()
		{
			app.DS.update({"nextIntiPoint" : "navi/sixBtnMenuState/SIXBTN_OTHERS_SETUP_TRANSFERTO_ACCT" });
			ACCoreJS.Trace("setTransferInitPoint : " + JSON.stringify(app.DS.Get("nextIntiPoint")));
		},

		setChaingTrxInitPoint : function()
		{
			var initPoint = app.DS.Get("nextIntiPoint");

			ACCoreJS.setCookie("ACINITPOINTEXIST" , "1");
			ACCoreJS.setCookie("ACINITNAVIPOINT" , initPoint);

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

		processCurrencyFormat : function (val)
		{
			return FormatInput.currency(val);
		},

		processBonusPointTotalPointCalculation : function()
		{
			var inputValue = app.DS.Get("current+Input+Value");
			var cashValue = app.DS.Get("PROD_BONUSPOINT_ORI");



			var afterCalculatVal = parseInt(inputValue) * parseInt(cashValue);

			if(isNaN(parseInt(afterCalculatVal)))
			{
				afterCalculatVal= 0;
			}

			app.DS.update({ "TOTAL_PROD_BONUSPOINT" : afterCalculatVal });
			//ACCoreJS.Trace("SET TOTALWITHDRAWALAMT : " + FormatInput.currency(afterCalculatVal));
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

		formatCurrenyAmt : function(val)
		{
			if(typeof val != "undefined")
			{
				if(Number(val) == 0)
					return "$ --";
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

		processDisplayErrorMsgIfKeyLenNotZero : function(oriData)
		{
			var conditions = oriData.conditions;
			var verifyKeyData = oriData.verifyKeyData;
			var keyValue = app.DS.Get(oriData.verifyKeyData);

			if(typeof keyValue != "undefined" && keyValue.length > 0)
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

		processCIMStatus : function(oriData)
		{
			var CIMStatus = ACCoreJS.GetUCDIString("ATMC-STATUS").charAt(2);

			if(CIMStatus != "1")
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

		processHardwareNotificationCheckingFromDS : function(oriData)
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
				// var cdiVal = ACCoreJS.GetUCDIString(val.cdistore);
				var cdiVal = app.DS.Get(val.cdistore);
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

		processATMCVendorChecking : function(oriData)
		{
			var conditions = oriData.conditions;

			oriData["display"] = "0";
			oriData["label1"] = "";
			oriData["label2"] = "";
			oriData["label3"] = "";
			oriData["label4"] = "";
			oriData["label5"] = "";
			oriData["label6"] = "";

			$.each(conditions, function(idx, val) {
				var cdiVal1 = ACCoreJS.GetUCDIString(val.cdistore1);
				var cdiVal2 = ACCoreJS.GetUCDIString(val.cdistore2);
				var vendor = val.vendor;
				var type = val.type;
				var compareVal1 = cdiVal1 + cdiVal2;
				var compareVal2 = vendor + type;


				ACCoreJS.Trace(cdiVal1 + " : " + vendor);
				ACCoreJS.Trace(cdiVal2 + " : " + type);

				if(compareVal1 == compareVal2)
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

		processHardwareNotificationCheckingEither : function(oriData)
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
				status = false;

				$.each(cdiValIndexes, function(i,v){
					if(cdiVal.charAt(parseInt(v)) != cdiValConditions[i]) {
						status = true;

						return;
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

		processAndDisplayNotice: function(oriData)
		{
			var conditions = oriData.conditions;
			var status = true;

			oriData["display"] = "1";
			oriData["label1"] = conditions[0].label1;
			oriData["label2"] = conditions[0].label2;
			oriData["label3"] = conditions[0].label3;
			oriData["label4"] = conditions[0].label4;
			oriData["label5"] = conditions[0].label5;
			oriData["label6"] = conditions[0].label6;


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

		updateTransactionInfo : function()
		{
			 app.BroadCaster.trigger("UpdateTransactionInfo");
		},

		refreshHeaderAcctInfo : function()
		{
			app.BroadCaster.trigger("refreshContent" , {trigger: true});
		},

		HideHeader : function ()
		{
			app.BroadCaster.trigger("HideHeader", {trigger: true});
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

		processESBSS8KioskAcctDataVirtualTransfer :  function(oriData)
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
				selectionString += '"nextScreenTemplate" : "' + "summaryScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "SUMMARY_VIRTUALACCT_PAYBY_TRANSFER" + '",';

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

		processESBSS8KioskAcctDataCCInquirySharingAcct :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";
			var cropAcctNum = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				cropAcctNum = accountNumber.substr(3,accountNumber.length);
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "naviNoBar" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_INQUIRY_SETTING_SHARING_ACCTNUMBER" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"TXACC" : "' + cropAcctNum + '",';
				selectionString += '"@TXACC" : "' + cropAcctNum + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
		},

		processESBATMAcctDataCCInquirySharingAcct :  function(oriData)
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var arrSelections = [];
			var accountNumber = "";
			var bankId = "";
			var selectionString = "";
			var cropAcctNum = "";

			_.each(oriData , function(item)
			{
				arrSelections.push(item);
			});


			$(xmlDoc).find("from").find("account").each(function(index, value)
			{
				accountNumber = $(this).find("no").text();
				cropAcctNum = accountNumber.substr(3,accountNumber.length);

				// alert(accountNumber + " : " + cropAcctNum);
				bankId = $(this).find("bankId").text();
				selectionString = "";

				selectionString = ' { ';
				selectionString += '"naviType" : "' + "naviNoBar" + '",';
				selectionString += '"nextScreenTemplate" : "' + "inputScreenState" + '",';
				selectionString += '"nextScreenID" : "' + "INPUT_ATM_INQUIRY_SETTING_SHARING_ACCTNUMBER" + '",';

				selectionString += '"localClass" : "' + "balanceInquiryAcct" + '",';

				selectionString += '"label1" : "' + accountNumber + '",';
				// selectionString += '"label3" : "' + bankId + '",';

				// selectionString += '"EJ" : [';
				// selectionString += '"USER SELECT TXACC: ' + bankId + '-' + accountNumber + '"';
				// selectionString += '],';

				selectionString += '"setters" : {';
				selectionString += '"TXACC" : "' + accountNumber + '",';
				selectionString += '"@TXACC" : "' + accountNumber + '",';
				selectionString += '"TXACC13DIGIT" : "' + cropAcctNum + '",';
				selectionString += '"BKID" : "' + bankId + '",';
				selectionString += '"@BKID" : "' + bankId + '",';
				selectionString += '"MSGTYP" : "' + "AA" + '",';
				selectionString += '"@MSGTYP" : "' + "AA" + '"';
				selectionString += '}}';

				arrSelections.push($.parseJSON(selectionString));
			});

			return arrSelections;
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
				selectionString += '"nextScreenTemplate" : "' + "transactionState" + '",';
				selectionString += '"nextScreenID" : "' + "TRX_REQ_NOTFIX_CARD_PAYMENT_REQUEST" + '",';

				selectionString += '"localClass" : "' + "hncbAccountSelectionBtn" + '",';

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

		matchKeyForValid : function(params)
		{
			var valid = false;
			var checkVal = app.DS.get(params);

			// ACCoreJS.Trace("matchKeyForValid");
			// ACCoreJS.Trace(params + " : " + checkVal);

			if(typeof checkVal != "undefined" && checkVal == "1")
			{
				valid = true;
			}

			// ACCoreJS.Trace(" valid : " + String(valid));

			return valid;

		},

		processOCRFrontData : function()
		{
			var name 			= 	String(app.DS.get('name')).replace(/ /g,'');
			var birthdayyear 	= 	String(app.DS.get('birthdayyear')).replace(/ /g,'');
			var issueData 		= 	String(app.DS.get('issueplace')).replace(/ /g,'');

			var issueplace 		=	"";
			var issueType		=	"";
			var issueDate		=	"";

			// 民國79年2目16日
			// 民國m4年4月30 日 (」匕巿)換發

			birthdayyear = birthdayyear.substring(2, birthdayyear.length);

			app.DS.update({ "name" : name});
			app.DS.update({ "birthdayyear" : birthdayyear});
			app.DS.update({ "issueplace" : issueplace});
			app.DS.update({ "issueType" : issueType});
			app.DS.update({ "issueDate" : issueDate});



		},

		processOCRBackData : function()
		{
			var birthdayPlace 	= 	String(app.DS.get('birthdayPlace')).replace(/ /g,'');
			var address1 		= 	String(app.DS.get('address1')).replace(/ /g,'');
			var address2 		= 	String(app.DS.get('address2')).replace(/ /g,'');

			app.DS.update({ "birthdayPlace" : birthdayPlace});
			app.DS.update({ "address1" : address1});
			app.DS.update({ "address2" : address2});
		},

		processESBVTMAcctOpenIDIssueTypeCode : function()
		{

		},

		convertDoubleByte : function(val)
		{
			var v = val;
			if(v == 'NaN' || v == null || v == '')
			{
				return 0;
			}
			else
			{
				//全行轉半型
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
				//val.value = result;
				v=result;

				$("#output").val(v);
				return v;
			}
		}
	};

	return ACProcessFuncLib;
});
