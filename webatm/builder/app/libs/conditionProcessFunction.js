define([
	"app",
  "../../app/libs/library"
	],

function(app, AcLib)
{
	var ACProcessConditionLib =
	{
		verifyFavoriteServerStatusCDI: function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("SERVER_DOWN");

			if(cdiVal == "0")
			{
				return "0";
			}
			else
				return "1";
		},

		verifyCashWithdrawalCDI : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(cdiVal.charAt(1) == "1")
			{
				return "0";
			}
			else
				return "1";
		},

		verifyCardReaderCDI : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(cdiVal.charAt(4) == "1")
			{
				return "0";
			}
			else
				return "1";
		},


		verifyGBRUCashWithdrawalCDI : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(cdiVal.charAt(1) == "1" || cdiVal.charAt(2) == "1")
			{
				return "0";
			}
			else
				return "1";
		},

		triggleCashWithdrawalAllow : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(cdiVal.charAt(1) == "1")
			{
				return "1";
			}
			else
				return "0";
		},

		triggleGBRUCashWithdrawalAllow :function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ATMC-STATUS");

			if(cdiVal.charAt(1) == "0" && cdiVal.charAt(2)  == "0")
			{
				return "0";
			}
			else
				return "1";
		},

		triggleThisButtonForWincor : function()
		{
			return "1";
		},

		triggleThisButton : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "1";

			// if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			// {
			// 	val = "0";
			// }
			// else
			// {
				AcLib.CleanUpDSCache();
				val = "1";
			// }

			return val;
		},

		trigglerThisButtonIfVTMCWDDEP : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "1";



			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "CWDDEP")
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMCWDDEP");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);

			return val;
		},

		trigglerThisButtonIfVTMPAYTAX : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "0";

			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "PAYTAX")
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMPAYTAX");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);

			return val;
		},


		trigglerThisButtonIfVTMTRANSFER : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "0";

			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "TRANSFER")
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMTRANSFER");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);

			return val;
		},

		trigglerThisButtonIfVTMFAVORITE : function()
		{
			// var serverStatus = ACCoreJS.GetUCDIString("SERVER_DOWN");
			// var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			// var xmlDoc = $.parseXML(cdiVal);
			// var count = $(xmlDoc).find("favoriteTransactionList").size();

			// // ACCoreJS.Trace(cdiVal);

			// if(serverStatus == "0" && count > 0)
			// 	return "1";
			// else
			// 	return "0";

			var serverStatus = ACCoreJS.GetUCDIString("SERVER_DOWN");
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "1";

			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "FAVORITE" && serverStatus == "0" && count > 0)
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMFAVORITE");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);
			// ACCoreJS.Trace(serverStatus);
			// ACCoreJS.Trace(String(count));

			return val;
		},

		trigglerThisButtonIfVTMINQUIRY : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "0";

			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "INQUIRY")
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMINQUIRY");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);

			return val;
		},

		trigglerThisButtonIfVTMOTHERS : function()
		{
			var cdiVal  = ACCoreJS.GetUCDIString("VTMTXNAME");
			var val = "0";

			if(typeof cdiVal != "undefined" && String(cdiVal).length > 0)
			{
				if(cdiVal == "OTHERS")
					val = "1";
				else
					val = "0";
			}

			// ACCoreJS.Trace("trigglerThisButtonIfVTMOTHERS");
			// ACCoreJS.Trace(cdiVal);
			// ACCoreJS.Trace(val);

			return val;
		},

		verifyFavoriteItemsLength : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();

			if(count <= 0)
				return "1";
			else
				return "0";
		},

		triggleMenuButtonIfFavoriteExist : function()
		{
			var serverStatus = ACCoreJS.GetUCDIString("SERVER_DOWN");
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();

			// ACCoreJS.Trace(cdiVal);

			if(serverStatus == "0" && count > 0)
				return "1";
			else
				return "0";
		},

		verifyFavoriteMoreThanOne :  function()
		{
			var serverStatus = ACCoreJS.GetUCDIString("SERVER_DOWN");
			var cdiVal = ACCoreJS.GetUCDIString("InterActFavorList");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("favoriteTransactionList").size();

			if(typeof cdiVal == "undefined")
				count = 0;

			// ACCoreJS.Trace(cdiVal);

			if(serverStatus == "0" && count > 0)
				return "1";
			else
			{
				return "2";
			}

		},

		verifyUserPrefPrintData : function()
		{
			// var CDIVAL = ACCoreJS.GetUCDIString("USER_PRINTING_SETTINGS");
			var SelectedVal = app.DS.Get("USER_PRINTING_SETTINGS");
			var RECEIPT_CDIVAL = String(ACCoreJS.GetUCDIString("ATMC-STATUS")).charAt(0);

			//If CDI Value is 2 , Which mean user never setup favorite, need to always ask to print receipt
			//If CDI Value is 1 , directly go Print Receipt
			//If CDI Value is 0 , do not print Receipt and go to summary screen.

			if(SelectedVal == "0" || RECEIPT_CDIVAL == "0" || RECEIPT_CDIVAL == "2")
				return "1";
			else if(SelectedVal == "1")
			{
				return "2";
			}
			else if(SelectedVal == "2")
				return "3";
			else
				return "3";
		},

		verifyReceiptStatus : function()
		{
			var RECEIPT_CDIVAL = String(ACCoreJS.GetUCDIString("ATMC-STATUS")).charAt(0);

			ACCoreJS.Trace("ATMC-STATUS : " + String(ACCoreJS.GetUCDIString("ATMC-STATUS")));
			ACCoreJS.Trace("RECEIPT CDI VALUE : " + RECEIPT_CDIVAL);

			if(RECEIPT_CDIVAL == "1")
				return "1";
			else
				return "2";
		},

		verifyDepositTrxType : function()
		{
			var DepositTrxType = app.DS.Get("DEPOSIT_TRX_TYPE");

			if(typeof DepositTrxType != "undefined" && String(DepositTrxType).length > 0 && DepositTrxType == "DP2")
				return "1";
			else
				return "2";
		},

		verifyTrxType : function()
		{
			var trxType = app.DS.Get("trxType");
			var navi = "1";

			switch(trxType)
			{
				case "CASHWITHDRAWAL":
					navi = "1";
					break;
				case "BALINQ":
					navi = "2";
					break;
				case "PAYMENT":
					navi = "3";
					break;
				case "TRANSFER":
					navi = "4";
					break;
				case "CREDITCARD":
					navi = "5";
					break;
				default:
					navi = "6";
					break;
			}

			return navi;
		},

		verifyFavoriteExist : function()
		{
			var favModels = app.DS.Get("favorList");
			var BKID = app.DS.Get('BKID');
			var TXACC = app.DS.Get('TXACC');
			var TRBKID = app.DS.Get('TRBKID');
			var TRTXACC = app.DS.Get('TRTXACC');
			var TXCODE = app.DS.Get('TXCODE');
			var TXAMT = app.DS.Get('TXAMT');
			// var USERFAVSETTINGS = ACCoreJS.GetUCDIString("USER_FAVORITE_SETTINGS");
			var USERFAVSETTINGS = app.DS.Get("USER_FAVORITE_SETTINGS");
			var SERVERSTATUS = ACCoreJS.GetUCDIString("SERVER_DOWN");
			var favitem ;

			//If USERFAVSETTINGS Value is 2 , Which mean user never setup favorite, need to always ask to add to favorite
			//If USERFAVSETTINGS Value is 1 , ask user add to favorite
			//If USERFAVSETTINGS Value is 0 , do not ask add to favorite

			if((typeof favModels != "undefined" && favModels.length >= 6) || SERVERSTATUS != "0")
			{
				return "2";
			}
			else
			{
				if( USERFAVSETTINGS == "0" )
				{
					return "2";
				}
				else
				{
					switch(TXCODE)
					{
						case "CWD":
							favitem = _.find(favModels , function(item)
							{
								if(item["TXCODE"] == TXCODE && item["BKID"] == BKID && item["TXACC"] == TXACC && item["TXAMT"] == TXAMT)
								{
									return item;
								}
							});
							break;
						case "INQ":
							favitem = _.find(favModels , function(item)
							{
								if(item["TXCODE"] == TXCODE && item["BKID"] == BKID && item["TXACC"] == TXACC)
								{
									return item;
								}
							});
							break;
						case "TFR":
						case "FEE":
							favitem = _.find(favModels , function(item)
							{
								if(item["TXCODE"] == TXCODE && item["BKID"] == BKID && item["TXACC"] == TXACC && item["TRBKID"] == TRBKID && item["TRTXACC"] == TRTXACC)
								{
									return item;
								}
							});
							break;
					}

					if(typeof favitem == "undefined")
						return "1";
					else
						return "2";
				}
			}
		},

		verifyAcctListIsMoreThanOne : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("from").find("account").size();

			if(count <= 0)
				return "1";
			else if(count == 1)
				return "2";
			else
				return "3";
		},

		verifyTransferAddAcctLength : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("to").find("account").size();

			if(count < 1)
				return "1";
			else if(count == 8)
				return "2";
			else
				return "3";
		},

		verifyDepositToAcctIsOnUs : function()
		{
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var count = $(xmlDoc).find("to").find("account").size();

			var obj = $(xmlDoc).find("to").find("account").filter(function()
			{
				return $(this).find("bankId").text() === "808";
			});

			if(String($(obj).find("bankId").text()).length > 0)
				return "1";
			else
				return "2";

		},

		verifyTaxPaymentType : function()
		{

			var cdiVal = app.DS.Get('taxPaymentType');

			if(cdiVal.substr(0 , 2) == "15")
			{
				return "1";
			}
			else
				return "2";
		},

		verifyPaymentBankID : function()
		{
			var bankID = app.DS.Get('paymentESBBankID');

			if(bankID == "808")
			{
				var TRTXACC = app.DS.Get('TRTXACC');
				var dataArry = ["9977"];
				var found = false;

				for(var i = 0 ; i < dataArry.length ; i++)
				{
					if(TRTXACC.indexOf(dataArry[i]) > -1)
					{
						found = true;
						break;
					}
				}

				if(found == true)
					return "2";
				else
					return "1";
			}
			else
				return "2";
		},

		verifyTransferBankID : function()
		{
			var bankID = app.DS.Get('TRBKID');

			if(bankID == "808")
			{
				var TRTXACC = app.DS.Get('TRTXACC');
				var dataArry = ["9977"];
				var found = false;

				for(var i = 0 ; i < dataArry.length ; i++)
				{
					if(TRTXACC.indexOf(dataArry[i]) > -1)
					{
						found = true;
						break;
					}
				}

				if(found == true)
					return "2";
				else
					return "1";
			}
			else
				return "2";
		},

		verifyFavoriteTrxFlow : function()
		{
			var TXCODE = app.DS.Get('TXCODE');
			var entry = "1";

			switch(TXCODE)
			{
				case "CWD":
					entry = "1";
					break;
				case "INQ":
					entry = "2";
					break;
				case "TFR":
					entry = "3";
					break;
				case "FEE":
					var feeType = app.DS.Get('FEETYPE');
					if(feeType == "1")
						entry = "4";
					else if(feeType =="2")
						entry = "5";
					else if(feeType == "3")
						entry = "6";
					break;
				case "DEP":
					entry = "7";
					break;
			}

			return entry;
		},

		verifyCashInTotalCounter : function()
		{
			var addCashCounter = parseInt(app.DS.Get('AddCashCounter'));
			var depositType = parseInt(app.DS.Get('DepositType'));
			var maximum = 30000;
			var entry = "1";

			var totalAmt = AcLib.GetDepositTotal();

			if(addCashCounter < 3)
			{
				addCashCounter++;
				app.DS.update({'AddCashCounter': addCashCounter});

				entry = "1";

				if(depositType == "OTHERACCOUNT")
				{
					if(totalAmt < maximum)
					{
						entry = "1";
					}
					else if (totalAmt = maximum)
					{
						entry = "2";
					}
					else if(totalAmt > maximum)
					{
						entry = "3";
					}
					else if(totalAmt == 0)
					{
						entry = "4";
					}
				}
				else
				{
					if(totalAmt == 0)
					{
						entry = "4";
					}
				}
			}
			else
			{
				entry = "2";



				if(depositType == "OTHERACCOUNT" && totalAmt > maximum) {
					entry = "3";
				}
				else if(totalAmt == 0)
				{
					entry = "5";
				}
			}

			return entry;
		},

		verifyNumberOfAccount : function() {
			var cdiVal = ACCoreJS.GetUCDIString("ssmgaccnumlist");
			var xmlDoc = $.parseXML(cdiVal);
			var account = $(xmlDoc).find("from").find("account");
			var setters = "";

			if(account.length > 1) { //Multiple Account
				return "1";
			} else { //Single Account
				var accountNumber = $(account[0]).find("no").text();
				var bankId = $(account[0]).find("bankId").text();

				setters = {
					"interNaviData" : "QNM",
					"TXCODE" : "QNM",
					"@TXCODE" : "QNM",
					"@TXNAME" : "QNM",
					"TXACC" : accountNumber,
					"@TXACC" : accountNumber,
					"TRTXACC" : accountNumber,
					"@TRTXACC" : accountNumber,
					"BKID" : bankId,
					"@BKID" : bankId,
					"TRBKID" : bankId,
					"@TRBKID" : bankId,
					"MSGTYP" : "C2",
					"@MSGTYP" : "C2",
					"depositType" : "THISCARD",
					"@DEPEX"	: "01",
					"DEPEX" 	: "01"
				};

				app.DS.update(setters);

				return "2";
			}
		},

		verifyWithdrawalAmtForChangeNote : function()
		{
			var TXAMT = app.DS.Get('TXAMT');
			var CDIVAL = String(ACCoreJS.GetUCDIString("ATMC-STATUS")).charAt(6);

			if(parseInt(TXAMT) % 1000 == 0 && CDIVAL == "1")
			{
				return "1";
			}
			else
			{
				return "2";
			}
		},

		verifyGBRUOnUsWithdrawalAmtForChangeNote : function()
		{
			var TXAMT = app.DS.Get('TXAMT');
			var CDIVAL = String(ACCoreJS.GetUCDIString("ATMC-STATUS")).charAt(6);

			if(parseInt(TXAMT) % 1000 == 0 && CDIVAL == "1" && parseInt(TXAMT) <= 90000)
			{
				return "1";
			}
			else
			{
				return "2";
			}
		},

		verifyTransferAcctLength :  function()
		{
			var TRTXACC = app.DS.Get('TRTXACC');
			var dataArry = ["9977"];
			var found = false;

			if(typeof TRTXACC != "undefined" && String(TRTXACC).length > 0)
			{
				for(var i = 0 ; i < dataArry.length ; i++)
				{
					if(TRTXACC.indexOf(dataArry[i]) > -1)
					{
						found = true;
						break;
					}
				}
			}

			if(found == true)
				return "2";
			else
				return "1";
		},

		verifyCreditCardStatementFlow: function()
		{
			var ALLPAYAMTCDI = ACCoreJS.GetUCDIString("R_ALLPAY_AMT");
			var ALLPAYAMT = parseInt(ALLPAYAMTCDI.replace(/[^0-9\.]+/g,""));

			var LOWPAYAMTCDI = ACCoreJS.GetUCDIString("R_LOWPAY_AMT");
			var LOWPAYAMT = parseInt(LOWPAYAMTCDI.replace(/[^0-9\.]+/g,""));

			if(ALLPAYAMT <= 20000 && LOWPAYAMT <= 20000)
			{
				return "1";
			}
			else if(ALLPAYAMT > 20000 && LOWPAYAMT <= 20000)
			{
				return "2";
			}
			else if(ALLPAYAMT > 20000 && LOWPAYAMT > 20000)
			{
				return "3";
			}
			else
			{
				return "1";
			}
		},

		verifyForeignCasseteAndCashWithdrawalCDI : function()
		{
			var cdiVal = String(ACCoreJS.GetUCDIString("FOREIGNCASSETTES"));

			if(cdiVal != "undefined")
			{
				var xmlDoc = $.parseXML(cdiVal);
				var count = $(xmlDoc).find("item").size();
				var currency = "";
				var cassetestatus = "";
				var foundTWD = false;
				var foundOtherCurrency = false;
				var foundCasseteStatusIsOne = false;

				$(xmlDoc).find("item").each(function(index, value)
				{
					currency = $(this).find("currency").text();
					cassetestatus = $(this).find("cassetestatus").text();

					if(cassetestatus == "1")
                	{
                		foundCasseteStatusIsOne = true;
                		return;
                	}
				});



				if(cdiVal != "undefined" && cdiVal.length > 0 && count > 0)
				{
					if(foundCasseteStatusIsOne)
					{
						return "0";
					}
					else
						return "1";
				}
				else
				{
					return "0";
				}
			}
			else
			{

				return "0";
			}
		},

		verifyCurrentMachineCashWithdrawalType: function()
		{
			var cdiVal = String(ACCoreJS.GetUCDIString("FOREIGNCASSETTES"));

			// alert(cdiVal);

			if(cdiVal != "undefined")
			{
				var xmlDoc = $.parseXML(cdiVal);
				var count = $(xmlDoc).find("item").size();
				var currency = "";
				var cassetestatus = "";
				var foundTWD = false;
				var foundCassetStatusIsOne= false;
				var amt = "";

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
						return "1";
					else if(!foundCassetStatusIsOne)
						return "2";
					else
						return "3";
				}
				else
				{
					return "2";
				}
			}
			else
			{
				return "2";
			}

		},

		verifyForexRateReplyAmtAndCardType: function()
		{
			var ntAmt = parseFloat(String(ACCoreJS.GetUCDIString("R_FWD_NTAMT")).replace(/\D/g,''));
			var cardType = app.DS.Get('CARD_TYPE');
			var conditionVal = "1";

			ACCoreJS.Trace("cardType : " + cardType);
			ACCoreJS.Trace("ntAmt : " + ntAmt.toString());

			switch(cardType)
			{
				case "ONUS":
					if(ntAmt <= 30000)
						conditionVal = "1";
					else
						conditionVal = "2";
					break;
				case "OFFUS":
					if(ntAmt <= 20000)
						conditionVal = "1";
					else
						conditionVal = "3";
					break;
			}

			return conditionVal;

		},


		verifyCurrAccValue: function()
		{
			var CURR_ACC = app.DS.Get('CURR_ACC');
			var conditionVal = "1";

			if(CURR_ACC == "1")
			{
				conditionVal = "1";
			}
			else
				conditionVal = "2";

			return conditionVal;

		},

		verifyCreditCardInputType : function()
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var conditionVal = "2";

			switch(INPUTTYPE)
			{
				case "BARCODE":
					conditionVal = "1";
					break;
				case "NATIONALID":
					conditionVal = "2";
					break;
				case "CREDITCARDNUMBER":
					conditionVal = "2";
					break;
				case "VIRTUALACCT":
					conditionVal = "2";
					break;
			}

			return conditionVal;
		},

		verifySelectedInputType : function()
		{
			var INPUTTYPE = app.DS.Get('INPUTTYPE');
			var conditionVal = "2";

			switch(INPUTTYPE)
			{
				case "BARCODE":
					conditionVal = "1";
					break;
				case "NATIONALID":
					conditionVal = "2";
					break;
				case "CREDITCARDNUMBER":
					conditionVal = "3";
					break;
				case "VIRTUALACCT":
					conditionVal = "4";
					break;
			}

			return conditionVal;
		},

		verifyInsertedCardType : function()
		{
			var INPUTTYPE = app.DS.Get('INQUIRYCARDTYPE');
			var conditionVal = "1";

			switch(INPUTTYPE)
			{
				case "CHIPCARD":
					conditionVal = "1";
					break;
				case "CREDITCARD":
					conditionVal = "2";
					break;

			}

			return conditionVal;
		},


		verifyCreditCardPaymentBalanceReturnType : function()
		{

			var balanceReturnType = app.DS.Get('balanceReturnType');
			var conditionVal = "1";

			ACCoreJS.Trace("*** verifyCreditCardPaymentBalanceReturnType ***");
			ACCoreJS.Trace("Type : " + balanceReturnType);

			switch(balanceReturnType)
			{
				case "CASH":
					conditionVal = "1";
					break;
				case "TRANSFERTOOWNACCT":
					conditionVal = "2";
					break;
				case "DEDUCTFROMNEXTMONTH":
					conditionVal = "3";
					break;
			}

			return conditionVal;
		},

		verifyESBSS8CashInAmt : function()
		{
			var INSERTEDAMT = 0;
			var conditionVal = "1";
			var txamt = parseInt(app.DS.Get("TXAMT"));
			var TOTALAMT = parseInt(app.DS.Get("TOTALAMT"));

			if(isNaN(parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"))))
			{
				INSERTEDAMT = 0;
			}
			else
			{
				INSERTEDAMT = parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"));
			}

			if(parseInt(INSERTEDAMT) == 0)
			{

				// app.DS.update({'BAL_TXAMT' : "0"});
				conditionVal = "1";

			}
			else
			{
				app.DS.update({'BAL_TXAMT' : Math.abs(parseInt(INSERTEDAMT))});
				conditionVal = "2";
			}


			return conditionVal;
		},

		verifyESBSS8CashInAmtAndEnterAmt : function()
		{

			var totalAmt = 0;
			var eachTotalAmt = 0;
			var conditionVal = "1";
			var paymentAmt = parseInt(app.DS.Get("paymentAmt"));
			var eachTotalNote = 0;

			if(isNaN(parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"))))
			{
				totalAmt = 0;
			}
			else
			{
				totalAmt = parseInt(ACCoreJS.GetUCDIString("INSERTEDAMT"));
			}



			// //Retrieve Notes 100
			// if(ACCoreJS.GetATMCIsNoteTypesActive("100")  == true)
			// {
			// 	eachTotalNote = parseInt(ACCoreJS.GetATMCNotesEntered("100"));
			// 	eachTotalAmt = 100 * eachTotalNote;
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("200")  == true)
			// {
			// 	eachTotalNote = parseInt(ACCoreJS.GetATMCNotesEntered("200"));
			// 	eachTotalAmt = 200 * parseInt(ACCoreJS.GetATMCNotesEntered("200"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("500")  == true)
			// {
			// 	eachTotalNote = parseInt(ACCoreJS.GetATMCNotesEntered("500"));
			// 	eachTotalAmt = 500 * parseInt(ACCoreJS.GetATMCNotesEntered("500"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("1000")  == true)
			// {
			// 	eachTotalNote = parseInt(ACCoreJS.GetATMCNotesEntered("1000"));
			// 	eachTotalAmt = 1000 * parseInt(ACCoreJS.GetATMCNotesEntered("1000"));
			// 	totalAmt += eachTotalAmt;
			// }

			// if(ACCoreJS.GetATMCIsNoteTypesActive("2000")  == true)
			// {
			// 	eachTotalNote = parseInt(ACCoreJS.GetATMCNotesEntered("2000"));
			// 	eachTotalAmt = 2000 * parseInt(ACCoreJS.GetATMCNotesEntered("2000"));
			// 	totalAmt += eachTotalAmt;
			// }


			app.DS.update({'TOTALAMT' : totalAmt});

			if(totalAmt >= paymentAmt)
			{

				app.DS.update({'TXAMT' : paymentAmt});
				app.DS.update({'BAL_TXAMT' : Math.abs(parseInt(totalAmt - paymentAmt))});
				conditionVal = "1";
			}
			else
			{
				app.DS.update({'TXAMT' : totalAmt});
				app.DS.update({'BAL_TXAMT' : "0"});
				conditionVal = "2";
			}


			return conditionVal;
		},

		verifyESBSS8InsertedCashRequireReturnBal : function()
		{
			var balanceReturnType = app.DS.Get('balanceReturnType');
			var conditionVal = "0";

			ACCoreJS.Trace("*** verifyESBSS8InsertedCashRequireReturnBal ***");
			// ACCoreJS.Trace("type : " + balanceReturnType);


			// switch(balanceReturnType)
			// {
			// 	case "DEDUCTFROMNEXTMONTH":
			// 	case "TRANSFERTOOWNACCT":
			// 		conditionVal = "2";
			// 		break;
			// 	default:
					var BAL_TXAMT = parseInt(app.DS.Get("BAL_TXAMT"));

					ACCoreJS.Trace("BAL_TXAMT : " + BAL_TXAMT);

					if(BAL_TXAMT > 0)
						conditionVal = "1";
					else if(BAL_TXAMT == 0)
						conditionVal = "2";
					// break;
			// }



			return conditionVal;
		},

		verifyESBSS8KioskIsCardInserted : function()
		{
			var cardInserted = app.DS.Get("cardInserted");
			var conditionVal = "0";

			if(cardInserted == "1")
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;

		},

		verifyESBSS8KioskCardTypeInserted : function()
		{
			var CARDTYPE = ACCoreJS.GetUCDIString("CARDTYPE");
			var conditionVal = "0";

			if(CARDTYPE == "IC_ONUS")
				conditionVal = "1";
			else if(CARDTYPE == "TK2_ONUS")
				conditionVal = "2";
			else
				conditionVal = "3";

			return conditionVal;
		},

		verifyESBSS8KioskCardTypeInsertedCHIPCARD : function()
		{
			var CARDTYPE = ACCoreJS.GetUCDIString("CARDTYPE");
			var conditionVal = "0";

			if(CARDTYPE == "IC_ONUS")
				conditionVal = "1";
			else if(CARDTYPE == "IC_OFFUS")
				conditionVal = "2"
			else if(CARDTYPE == "TK2_ONUS")
				conditionVal = "3";
			else
				conditionVal = "4";

			return conditionVal;
		},
		verifyCardExistsOrNot : function(){
			var CARDTYPE = ACCoreJS.GetUCDIString("CARDTYPE");
			var conditionVal = "0";
			if(CARDTYPE == "IC_ONUS" || CARDTYPE == "IC_OFFUS" || CARDTYPE == "TK2_ONUS") // got card inserted
				conditionVal = "1";
			else
				conditionVal = "2"; //no card inserted

			return conditionVal;

		},

		 verifyProductList : function(){
			 	var productlist = app.DS.get("productVO");
				//ACCoreJS.Trace("productlist")
				//ACCoreJS.Trace(productlist)
				//ACCoreJS.Trace(productlist.length);
				if(typeof productlist == "undefined"){
					return "0";
				}else if(productlist.length < 1){
					return "1"
				}else{
					return "2"
				}
		 },

		verifyCampaignIDisEmpty : function()
		{
			var CAMPAIGNID = ACCoreJS.GetUCDIString("CAMPAIGNID");
			var conditionVal = "0";

			if(typeof CAMPAIGNID != "undefined" && CAMPAIGNID.length > 0)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},

		verifyScanDataNotEmpty : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length > 0)

				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},


		verifyScanDataLengthAmount : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length <= 6)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},

		verifyScanDataLength9 : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length == 9)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},

		verifyScanDataLength14 : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length == 14)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},


		verifyScanDataLength16 : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length == 16)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},

		verifyScanDataLength12To16 : function()
		{
			var SCANDATA = ACCoreJS.GetUCDIString("SCANDATA");
			var conditionVal = "0";

			if(typeof SCANDATA != "undefined" && SCANDATA.length >= 12 && SCANDATA.length <= 16 && /[a-z]/i.test(SCANDATA) == false)
				conditionVal = "1";
			else
				conditionVal = "2";

			return conditionVal;
		},

		verifyAlwaysCondition1 : function()
		{
			return "1";
		},

		verifyHNBCCashInTotalCounter : function()
		{
			var inputAmt = parseInt(app.DS.Get('paymentAmt'));
			var entry = "1";

			var totalAmt = AcLib.GetDepositTotal();

			ACCoreJS.SetUCDIStr("DEPAMT", totalAmt);

			var resultAmt = parseFloat(( totalAmt - inputAmt ) / 2000);
			var balanceAmt = 0;

			if(parseFloat(totalAmt) > 0)
				balanceAmt = Math.abs(parseFloat( totalAmt - inputAmt ));

			app.DS.update({"BALANCEAMT" : balanceAmt});

			ACCoreJS.Trace("verifyHNBCCashInTotalCounter");
			ACCoreJS.Trace("inputAmt : " + inputAmt);
			ACCoreJS.Trace("totalAmt : " + totalAmt);
			ACCoreJS.Trace("resultAmt : " + resultAmt);

			if(totalAmt == 0)
			{
				entry = "4";
			}
			else if(totalAmt < inputAmt)
			{
				entry = "1";
			}
			else
			{
				if(resultAmt > 1)
				{
					entry = "2";
				}
				else
				{
					entry = "3";
				}
			}

			return entry;
		},

		verifyHNBCCashInToRefundFlow : function()
		{
			var inputAmt = parseInt(app.DS.Get('paymentAmt'));
			var entry = "1";

			var totalAmt = AcLib.GetDepositTotal();

			ACCoreJS.SetUCDIStr("DEPAMT", totalAmt);

			var resultAmt = Math.abs(parseFloat( totalAmt - inputAmt ));

			app.DS.update({"BALANCEAMT" : resultAmt});

			if(resultAmt >= 500)
			{
				entry = "1";
			}
			else if( resultAmt >= 100 && resultAmt < 500)
			{
				entry = "2";
			}
			else if(resultAmt > 0 && resultAmt < 100)
			{
				entry = "3";
			}
			else if(resultAmt == 0)
			{
				entry = "4";
			}


			return entry;
		},

		verifyHNBCReturnCashBalanceType : function()
		{
			var inputAmt = parseInt(app.DS.Get('paymentAmt'));
			var entry = "1";

			var totalAmt = AcLib.GetDepositTotal();

			ACCoreJS.SetUCDIStr("DEPAMT", totalAmt);

			var resultAmt = Math.abs(parseFloat( totalAmt - inputAmt ));

			app.DS.update({"BALANCEAMT" : resultAmt});

			if(resultAmt % 100 == 0)
			{
				entry = "1";
			}
			else
			{
				entry = "2";
			}

			return entry;
		},

		verifyHNCBTotalAMTPaymentLimit : function()
		{
			var inputAmt = parseInt(app.DS.Get('paymentAmt'));
			var atmcStatus =  ACCoreJS.GetUCDIString("ATMC-STATUS");
			var entry = "1";


			if(parseInt(inputAmt) <= 100000)
			{
				entry = "1";
			}
			else
			{
				if(atmcStatus.charAt(4) == "1")
					entry = "2";
				else
					entry = "3";
			}

			return entry;
		},

                verifySTSCD : function()
		{
			var STSCD = app.DS.Get('STSCD');
			var entry = "1";


			if(STSCD == "N" || STSCD == "X")
			{
				entry = "1";
			}
			else
			{
				entry = "1";
			}

			return entry;
		},

		verifySTSCDLast : function()
		{
			var STSCD = app.DS.Get('STSCD');
			var entry = "1";


			// if(STSCD == "Y")
			// {
			// 	entry = "1";
			// }
			// else
			// {
			// 	entry = "2";
			// }

			return entry;
		},

		verifyQCDID : function()
		{
			var QCDID = app.DS.Get('QCDID');
			var entry = "1";


			// if(QCDID == "N" || QCDID == "X")
			// {
			// 	entry = "1";
			// }
			// else
			// {
			// 	entry = "1";
			// }

			return entry;
		},

		verifyHNCBACResponseErrCode : function()
		{
			var ERRCODE = app.DS.Get('ERRCODE');
			var entry = "0";


			if(typeof ERRCODE != "undefined" || ERRCODE.length > 0)
			{
				if(ERRCODE == "9999")
					entry = ERRCODE;
				else
					entry = "0";
			}
			else
			{
				entry = "0";
			}

			return entry;
		},

		verifyCreditCardCashAdvance : function()
		{
			var Magnetic =  ACCoreJS.GetUCDIString("Magnetic");
			var AuthorizedCreditCard =  ACCoreJS.GetUCDIString("AuthorizedCreditCard");
			var entry = "0";


			if(Magnetic.toUpperCase() == "Y" || AuthorizedCreditCard.toUpperCase() == "Y")
			{
				entry = "1";
			}
			else
			{
				entry = "2";
			}

			return entry;
		},

		verifyCreditCardCirrus : function()
		{
			var Magnetic =  ACCoreJS.GetUCDIString("Magnetic");
			var AuthorizedCreditCard =  ACCoreJS.GetUCDIString("AuthorizedCreditCard");
			var EMVCardType =  ACCoreJS.GetUCDIString("EMVCardType");
			var entry = "2";


			if(Magnetic == "Y")
			{
				entry = "1";
			}
			else
			{
				if((AuthorizedCreditCard.toUpperCase() == "Y" && EMVCardType.toUpperCase() == "CIRRUS") || (AuthorizedCreditCard.toUpperCase() == "Y" && EMVCardType.toUpperCase() == "MASTERCARD"))
				{
					entry = "1";
				}
			}

			return entry;
		},

		verifyReturnAgentUUIDType : function()
		{
			var agentUUID = app.DS.Get('agentUUID');
			var entry = "1";

			if( Object.prototype.toString.call( agentUUID ) === '[object Object]' )
			{
				entry = "2";
			}
			else
			{
				entry = "1";
			}

			return entry;
		},

		verifyESBVTMIsDebugMode : function()
		{
			var entry = "2";

			if(typeof ConfigData.vtmTransaction != "undefined" && typeof ConfigData.vtmTransaction.isDebug != "undefined" && ConfigData.vtmTransaction.isDebug == "1")
				entry = "1";

			return entry;

		},

		verifyESBVTMServiceTime: function()
		{
			var currentDateTime = new Date();
			var entry = "2";
			var today = currentDateTime.getDay();

			if( currentDateTime.getHours() >= 9 && currentDateTime.getHours() < 18 && today > 0 && today < 6)
			{
				entry = "1";
			}
			else
				entry = "2";

			if(typeof ConfigData.vtmTransaction != "undefined" && typeof ConfigData.vtmTransaction.isDebug != "undefined" && ConfigData.vtmTransaction.isDebug == "1")
				entry = "1";

			return entry;

		},

		verifyESBVTMCaringServiceTime: function()
		{
			var currentDateTime = new Date();
			var entry = "2";
			var today = currentDateTime.getDay();

			if( currentDateTime.getHours() >= 9 && currentDateTime.getHours() < 18 && today > 0 && today < 6)
			{
				entry = "1";
			}
			else
				entry = "2";

			if(typeof ConfigData.vtmTransaction != "undefined" && typeof ConfigData.vtmTransaction.isDebug != "undefined" && ConfigData.vtmTransaction.isDebug == "1")
				entry = "1";

			return entry;

		},

		verifyESBVTMScanIDCondition : function()
		{
			var scanIDCondition = app.DS.get('scanIDCondition');
			var entry = "1";

			switch(String(scanIDCondition).toUpperCase())
			{
				case "NEW":
					entry = "1";
					break;
				case "FIRSTIDFRONT":
					entry = "2";
					break;
				case "FIRSTIDBACK":
					entry = "3";
					break;
				case "FIRSTIDBOTH":
					entry = "4";
					break;
				case "SECONDIDFRONT":
					entry = "5";
					break;
				case "SECONDIDBACK":
					entry = "6";
					break;
				case "SECONDIDBOTH":
					entry = "7";
					break;

			}

			return entry;

		},

		verifyESBVTMScanDocumentCounter : function()
		{
			var currentCounter = app.DS.get('ESBVTMScanDocumentCounter');
			var entry = "1";

			//ACCoreJS.Trace("verifyESBVTMScanDocumentCounter");
			//ACCoreJS.Trace(currentCounter);
			if(typeof currentCounter == "undefined")
				currentCounter = 1;
			else
			{
				currentCounter = parseInt(app.DS.get('ESBVTMScanDocumentCounter'));
				currentCounter++;
			}

			app.DS.update({ "ESBVTMScanDocumentCounter" : currentCounter });

			if(currentCounter < 3)
			{
				entry = "1";
			}
			else
			{
				entry = "2";
			}

			return entry;
		},

		verifyESBVtmAgentRejectESIP : function()
		{
			var requireESIPFlag = app.DS.get('ischecked');
			var entry = "1";

			if(typeof requireESIPFlag != "undefined" && parseInt(requireESIPFlag) == 1)
			{
				return "1";
			}
			else
			{
				return "2";
			}
		},

		verifyESBVTMNewDispenseCardIsInsideSlot : function()
		{
			var isInsideSlot = app.DS.get('STARTCARDDISPENSERINSERTED');

			if(typeof isInsideSlot != "undefined" &&isInsideSlot == "1")
			{
				return "1";
			}
			else
				return "2";
		},

		verifyESBVTMAccountOpenStatus : function()
		{
			var accountOpeningStatus = app.DS.get('accountOpeningStatus');

			if(typeof accountOpeningStatus != "undefined" && accountOpeningStatus == "20")
			{
				return "1";
			}
			else
				return "2";
		},

		verifyESBVTMAccountOpenAvailability : function()
		{
			var VTM_OPENACC =  ACCoreJS.GetUCDIString("VTM_OPENACC");
			var entry = "2";


			if(typeof VTM_OPENACC == "undefined" || VTM_OPENACC.length == "0" || VTM_OPENACC == "0")
			{
				entry = "1";
			}

			return entry;
		},

		verifyPublicAffairCDI  : function()
		{
			var GovPayment =  ACCoreJS.GetUCDIString("GOVPAYMENT");
			var entry = "2";


			if(typeof GovPayment == "undefined" || GovPayment.length == "0" || GovPayment == "0")
			{
				entry = "1";
			}

			return entry;
		},
		verifyESBATMCardTypeInserted : function()
		{
			var CARDTYPE = ACCoreJS.GetUCDIString("CARDTYPE");
			var conditionVal = "0";

			if(CARDTYPE == "IC_ONUS")
				conditionVal = "1";
			else if(CARDTYPE == "TK2_ONUS")
				conditionVal = "2";
			else
				conditionVal = "3";

			return conditionVal;
		},
		checkUserGroup: function() {
			var userGroup = ACCoreJS.GetUCDIString("USERGROUP");
			
			if(userGroup == "11") 
				return "1";
			else
				return "0";
		},
		checkReceiptAvailability: function() 
		{
			var receipt = ACCoreJS.GetUCDIString("isReceiptAvailable");
			//var receipt = "true"; //For testing
			
			if(receipt == false || receipt == "false") 
				return "1";
			else
				return "0";
		}

	};

	return ACProcessConditionLib;
});
