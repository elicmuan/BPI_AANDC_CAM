
define([
	"app",
	 "../../app/libs/library",
	   "../../app/libs/formatinput"
],

function(app , ACLib , FormatInput) {
	var ACValidation = {
		validateOnUSWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 0;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var vendorCDI = ACCoreJS.GetUCDIString('ATM-VENDOR');
			var cdmTypeCDI = ACCoreJS.GetUCDIString('CDMTYPE');
			var MAXCWDAMT = parseInt(ACCoreJS.GetUCDIString('MAXCWDAMT'));
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			// switch(String(vendorCDI).toUpperCase())
			// {
			// 	case "WINCOR":
			// 		maxAmount = 50000;
			// 		break;
			// 	case "NCR":
			// 		if(cdmTypeCDI == "S2")
			// 		{
			// 			maxAmount = 50000;
			// 		}
			// 		else
			// 		{
			// 			maxAmount = 30000;
			// 		}
			// 		break;
			// 	default:
			// 		maxAmount = 30000;
			// 		break;
			// }

			maxAmount = MAXCWDAMT;


			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >=1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 30000;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var MAXCWDAMT = parseInt(ACCoreJS.GetUCDIString('MAXCWDAMT'));
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			maxAmount = MAXCWDAMT;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >=1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateCCWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 50000;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >=1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateGBRUWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 100000;

			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var MAXCWDAMT = parseInt(ACCoreJS.GetUCDIString('MAXCWDAMT'));
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			maxAmount = MAXCWDAMT;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$ " + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$ " + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >=1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateUnionCardWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				if(amount >= 1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateOffUsWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 20000;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >= 1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validateOffUsCCWithdrawalAmount: function(amount) {
			var minAmount = 100;
			var maxAmount = 20000;
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else if (amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額最多為 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
			}
			else
			{
				if(amount >= 1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
				}

			}

			return validation;
		},

		validatePaymentAmt: function(amount)
		{
			var minAmount = 1;

			var validation = {};

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateWithdrawalEnglishOnlyAmount: function(amount) {
			var minAmount = 1;
			var maxAmount = 20000;
			var validation = {};
			var atmcStatusCdi = ACCoreJS.GetUCDIString('ATMC-STATUS');
			var hundredCDIStatus = String(atmcStatusCdi).charAt(6);
			var thousandCDIStatus = String(atmcStatusCdi).charAt(5);
			var validation = {};
			var lastTwoDigitRegExp = /00$/g;

			if(amount < minAmount) {
				validation.status = 1;
				validation.error1 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
				validation.error2 = "";
			} else if (amount > maxAmount) {
				validation.status = 1;
				validation.error1 = "Please enter amount less than <br>NT$ " + FormatInput.currency(maxAmount);
				validation.error2 = "";
			} else {
				if(amount >= 1000 && amount % 1000 == 0 && thousandCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(amount < 1000 && amount % 100 == 0 && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else if(String(amount).match(lastTwoDigitRegExp) != null && thousandCDIStatus == "1" && hundredCDIStatus == "1")
				{
					validation.status = 0;
				}
				else
				{
					validation.status = 1;
					validation.error1 = "Invalid amount, <br>please re-enter amount ";
					validation.error2 = "";
				}
			}

			return validation;
		},

		validateDepositAmount : function(amount)
		{
			var minAmount = 1;
			var validation = {};
			var multiply = 100;

			if(amount < minAmount) {
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			} else if (amount % multiply != 0) {
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateDepositAmountOtherAccount : function(amount)
		{
			var minAmount = 1;
			var validation = {};
			var multiply = 100;

			if(amount < minAmount) {
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			} else if (amount % multiply != 0) {
					validation.status = 1;
					validation.error1 = "金額輸入錯誤, <br> 請重新輸入";
					validation.error2 = "Invalid amount, <br>please re-enter amount";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		// validateDepositAmountOtherAccount : function(amount)
		// {
			// var minAmount = 100;
			// var maxAmount = 30000;
			// var validation = {};
			// var multiply = 100;
//
			// if(amount < minAmount) {
				// validation.status = 1;
				// validation.error1 = "輸入金額至少為 NT$" + minAmount;
				// validation.error2 = "Please enter amount more than NT$ " + minAmount;
			// } else if (amount > maxAmount) {
				// validation.status = 1;
				// validation.error1 = "輸入金額最多為 NT$" + maxAmount;
				// validation.error2 = "Please enter amount less than NT$ " + maxAmount;
			// } else if (amount % multiply != 0) {
				// validation.status = 1;
				// validation.error1 = "金額錯誤";
				// validation.error2 = "Invalid amount entered";
			// } else {
				// validation.status = 0;
			// }
//
			// return validation;
		// },

		validateDepositOthersAcct : function(acct)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};

			if(acct.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (acct.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateTaxPaymentType : function(tax)
		{
			var minDigit = 5;
			var maxDigit = 5;
			var validation = {};

			if(tax.length == minDigit) {
				validation.status = 0;
			} else {
				validation.status = 1;
				validation.error1 = "輸入值需為五個號碼";
				validation.error2 = "Please enter 5 digits value";
			}

			return validation;
		},

		validateTaxPaymentInstitionCode : function(code)
		{
			var minDigit = 1;
			var maxDigit = 3;
			var validation = {};

		   if (code.length == maxDigit) {
				validation.status = 0;
			}
			else
			{

				validation.status = 1;
				validation.error1 = "輸入值需為三個號碼";
				validation.error2 = "Please enter 3 digits value";
			}

			return validation;
		},

		validateTaxPaymentIDNumber : function(val)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};
			var alphaExp = /^[a-zA-Z][0-9]+$/;
        	var numericExp = /^[0-9]+$/;
        	var afterConvert;
			var result = "1";
			var valid;

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			}
			else
			{
	 			if(val.match(alphaExp))
		        {
		            afterConvert = ACLib.convertTaxIDNumber(val.toUpperCase());
		        }
		        else if(val.match(numericExp))
		        {
		             afterConvert = val;
		        }
		        else
		        {
		        	valid = "false";
		        }

				if(valid != "true")
				{
					result = ExternalValidateJS.VerifyPayerID(afterConvert);
				}

				if(result != "0")
				{
					validation.status = 1;
					validation.error1 = "輸入號碼不符合規格";
					validation.error2 = "Please enter valid format number.";
				}
				else
				{
					validation.status = 0;
				}

			}

			return validation;
		},

		validateTaxPaymentAmt : function(amt)
		{
			var minAmount = 1;
			var validation = {};

			if(amt < minAmount) {
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateTaxNon15PaymentNumber : function(number)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};

			if(number.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (number.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},
		validateTaxPaymentNon15Amt : function(amt)
		{
			var minAmount = 1;
			var maxAmount = 30000;
			var validation = {};

			if(amt < minAmount) {
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateTaxPaymentNon15DueDate : function(date)
		{
			var minDigit = 1;
			var maxDigit = 6;
			var validation = {};

			if(date.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (date.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateBirthday : function(date)
		{
			var minDigit = 6;
			var maxDigit = 7;
			var validation = {};

			if(date.length == minDigit) {
				validation.status = 0;
			} else {

				validation.status = 1;
				validation.error1 = "輸入日期不正確";
				validation.error2 = "Please enter valid date";
			}

			return validation;
		},

		validatePaymentESBBankId : function(id)
		{
			var digit = 3;
			var validation = {};


			if(id.length == digit)
			{
				validation.status = 0;
			}
			else
			{
				validation.status = 1;
				validation.error1 = "請輸入三位數銀行代碼";
				validation.error2 = "Please enter 3 digits bank ID";

			}

			return validation;
		},

		validatePaymentESBTransferAcct : function(acct)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};

			if(acct.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (acct.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateForexCurrencyWithdrawal : function (amt)
		{
			var minAmount = 1;
			var validation = {};

			if(amt < minAmount)
			{
				validation.status = 1;
				validation.error1 = "張數輸入錯誤 請重新輸入";
				validation.error2 = "Please re-enter";
			}
			else if(amt > 40)
			{
				validation.status = 1;
				validation.error1 = "輸入張數最高為四十張,請重新輸入";
				validation.error2 = "Exceed maximum 40 pieces, please re-enter";
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validatePaymentESBTransferAmt : function(amt)
		{
			var minAmount = 1;
			var validation = {};

			if(amt < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validatePaymentCreditCardAcctNumber : function(acct)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};

			if(acct.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (acct.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validatePaymentCreditCardAmt : function(amt)
		{
			var minAmount = 1;
			var validation = {};

			if(amt < minAmount) {
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "Please enter amount more than <br>NT$ " + FormatInput.currency(minAmount);
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateChipPin : function(val)
		{
			var minDigit = 6;
			var maxDigit = 12;
			var validation = {};

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入至少要六位數密碼";
				validation.error2 = "Please enter value not less than 6 digits";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入最多十二位數密碼";
				validation.error2 = "Please enter value not more than 12 digits";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateOthersTrackPin : function(val)
		{
			var minDigit = 4;
			var maxDigit = 4;
			var validation = {};

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入四位數密碼";
				validation.error2 = "Please enter 4 digits value";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入四位數密碼";
				validation.error2 = "Please enter 4 digits value";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateOthersInternationalFinanceCardPin : function(val)
		{
			var minDigit = 4;
			var maxDigit = 4;
			var validation = {};

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入四位數密碼";
				validation.error2 = "Please enter 4 digits value";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入四位數密碼";
				validation.error2 = "Please enter 4 digits value";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateTaxNon15TypeMaster : function(arry)
		{
			var validation = {};
			var result;
			var checkArry = [];

			checkArry[0] = arry[0];
			checkArry[1] = app.DS.Get("PAYTYPE");
			checkArry[2] = arry[1];
			checkArry[3] = arry[2];

			result = ExternalValidateJS.tax_check_digit(checkArry);

			if(result != "0")
			{
				validation.status = 1;
				validation.error1 = "輸入值不符合規格, <br> 請重新輸入.";
				validation.error2 = "Data entered is not valid, <br> please enter again.";
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateMobileNumber : function(val)
		{
			var minDigit = 10;
			var maxDigit = 10;
			var validation = {};

			if(val.length == minDigit)
			{
				if(val.charAt(0) == "0" && val.charAt(1) == "9")
					validation.status = 0;
				else
				{
					validation.status = 1;
					validation.error1 = "輸入手機號碼不符合規格";
					validation.error2 = "Please enter valid mobile number";
				}
			}
			else
			{

				validation.status = 1;
				validation.error1 = "輸入十位數手機號碼";
				validation.error2 = "Please enter 10 digits value.";
			}

			return validation;
		},

		validateFake:function(val)
		{
			var validation = {};

			validation.status = 0;

			return validation;
		},

		validateESBSS8PaymentAmt: function(amount)
		{
			var minAmount = 1;
			var maxAmount = 499999;

			var validation = {};

			if(amount < minAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額至少為 <br>NT$" + FormatInput.currency(minAmount);
				validation.error2 = "";
			}
			else if(amount > maxAmount)
			{
				validation.status = 1;
				validation.error1 = "輸入金額不可超過 <br>NT$" + FormatInput.currency(maxAmount);
				validation.error2 = "";
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateESBSS8TaxPaymentIDNumber : function(val)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};
			var alphaExp = /^[a-zA-Z][0-9]+$/;
        	var numericExp = /^[0-9]+$/;
        	var afterConvert;
			var result = "1";
			var valid;

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "";
			}
			else
			{
	 			if(val.match(alphaExp))
		        {
		            afterConvert = ACLib.convertTaxIDNumber(val.toUpperCase());
		        }
		        else if(val.match(numericExp))
		        {
		             afterConvert = val;
		        }
		        else
		        {
		        	valid = "false";
		        }

				if(valid != "true")
				{
					result = ExternalValidateJS.VerifyPayerID(afterConvert);
				}

				if(result != "0")
				{
					validation.status = 1;
					validation.error1 = "輸入號碼不符合規格";
					validation.error2 = "";
				}
				else
				{
					validation.status = 0;
				}

			}

			return validation;
		},

		validateESBSS8Birthday : function(date)
		{
			var minDigit = 8;
			var maxDigit = 8;
			var validation = {};
			var validDate = true;

			 if(!/^\d{1,4}\/\d{1,2}\/\d{2}$/.test(date))
		        validDate = false;


		    var year = parseInt(date.substr(0,4), 10);
		    var month = parseInt(date.substr(4,2), 10);
		    var day = parseInt(date.substr(6,2), 10);

		    // Check the ranges of month and year
		    if(year < 1000 || year > 3000 || month == 0 || month > 12)
		        validDate = false;

		    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

		    // Adjust for leap years
		    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
		        monthLength[1] = 29;

		    // Check the range of the day
		    if(day > 0 && day <= monthLength[month - 1])
		    {
		    	validDate = true;
		    }

			if(date.length == minDigit && validDate == true) {
				validation.status = 0;
			} else {

				validation.status = 1;
				validation.error1 = "輸入日期不正確";
				validation.error2 = "";
			}

			return validation;
		},

		validateESBSS8PaymentCreditCardAcctNumber : function(acct)
		{
			var minDigit = 16;
			var maxDigit = 16;
			var validation = {};

			if(acct.length == minDigit) {
				validation.status = 0;
			} else {
				validation.status = 1;
				validation.error1 = "輸入值需要為16位數";
				validation.error2 = "";
			}

			return validation;
		},

		validateESBSS8PaymentESBTransferAcct : function(acct)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};

			if(acct.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "";
			} else if (acct.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "";
			} else {
				validation.status = 0;
			}

			return validation;
		},


		validateHNCBPaymentESBTransferAcct : function(acct)
		{
			var minDigit = 12;
			var maxDigit = 16;
			var validation = {};

			if(acct.length < minDigit) {
				validation.status = 1;
				validation.error1 = "* 輸入值至少要十二個號碼";
				validation.error2 = "";
			} else if (acct.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "* 輸入值最多十六個號碼";
				validation.error2 = "";
			} else {
				validation.status = 0;
			}

			return validation;
		},

		validateHNCBPaymentAmt: function(amount)
		{
			var minLength = 1;
			var maxLength = 7;

			var validation = {};

			if(minLength > amount.length )
			{
				validation.status = 1;
				validation.error1 = "* 請輸入金額";
				validation.error2 = "";
			}
			else if(maxLength < amount.length)
			{
				validation.status = 1;
				validation.error1 = "* 輸入金額不可超過 " + maxLength + "位數";
				validation.error2 = "";
			}
			else
			{
				validation.status = 0;
			}

			return validation;
		},

		validateNameMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateStateMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateAreaMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateStreetMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateBirthPlaceMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請選出生地";
			validation.error2 = "";

			return validation;
		},

		validateCustomerIDIssuedLocationMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateCustomerIDReissuedTypeMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateAddressMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		// validateBirthday: function(val) {
		// 	var validation = this.validateMinimumLength(val, 1);
		// 	validation.error1 = "請輸入戶籍住址";
		// 	validation.error2 = "";

		// 	return validation;
		// },

		validateIDNumber: function(val) {
			var validation = {};
			var regex = /^[A-Za-z]{1}[0-9]{9}$/;
			validation.error1 = "";
			validation.error2 = "";

			if(regex.test(val))
				validation.status = 0;
			else {
				validation.status = 1;
				validation.error1 = "請輸入正確身分證字號";
			}

			return validation;
		},

		validateMinimumLength : function(val, minLength) {
			var validation = {};

			if(val.trim().length >= minLength)
				validation.status = 0;
			else
				validation.status = 1;

			return validation;
		},

		validateMGBirthday: function(val) {
			var validation = this.validateMingGuoDate(val);
			if(validation.status == 0)
			{
				validation = this.validateBdayMoreThan20YO(val);
				validation.error1 = "本開戶通路適用滿20 歲之本國自然人";
			}
			else
			{
				validation.error1 = "請重新核對紅色框內的身份資訊！";
			}


			return validation;
		},

		validateIssuedDate: function(val) {
			var validation = this.validateMingGuoDate(val);
			validation.error1 = "請重新核對紅色框內的身份資訊！";

			return validation;
		},

		validateBdayMoreThan20YO : function(val)
		{

			var validation = {};
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			var day = date.getDate();
			var minusYear = 1911;
			var validYear = year - minusYear;

			var enteredYear = validYear - parseInt(val.substr(0,3));
			var enteredMonth = parseInt(val.substr(3,2));
			var enteredDay = parseInt(val.substr(5,2));

			if(enteredYear > 20)
			{
				validation.status = 0;
				return validation;
			}
			else if(enteredYear == 20)
			{
				if(enteredMonth < month)
				{
					validation.status = 0;
					return validation;
				}
				else if(enteredMonth == month)
				{
					if(enteredDay < day)
					{
						validation.status = 0;
						return validation;
					}
					else if(enteredDay == day)
					{
						validation.status = 0;
						return validation;
					}
					else
					{
						validation.status = 1;
						return validation;
					}
				}
				else
				{
					validation.status = 1;
					return validation;
				}
			}
			else
			{
				validation.status = 1;
				return validation;
			}

		},

		validateMingGuoDate: function(val) {
			var validation = {};
			var date = new Date();
			var year = date.getFullYear();
			var minusYear = 1911;
			var validYear = year - minusYear;
			var validLeapYearDate = ['31','29','31','30','31','30','31','31','30','31','30','31'];
			var validDate = ['31','28','31','30','31','30','31','31','30','31','30','31'];

			if(val.length < 7) { validation.status = 1; return validation; }

			var enteredYear = val.substr(0,3);
			var enteredMonth = val.substr(3,2);
			var enteredDay = val.substr(5,2);
			var enteredNormalYear = parseInt(enteredYear) + parseInt(minusYear);

			if(enteredYear > validYear || enteredYear < 0) { validation.status = 1; return validation; }
			if(enteredMonth < 1 || enteredMonth > 12) { validation.status = 1; return validation; }
			if(enteredNormalYear%4 == 0) { //Leap Year
				if(enteredDay < 1 || enteredDay > validLeapYearDate[enteredMonth -1]) { validation.status = 1; return validation; }
			} else {
				if(enteredDay < 1 || enteredDay > validDate[enteredMonth -1]) { validation.status = 1; return validation; }
			}

			validation.status = 0;
			return validation;
		},

		validateFirstBankPasswordLength : function(passwordB)
		{
			var validation = {};

			if(passwordB.length == 4)
			{
				validation.status = 0;
			}
			else
			{
				validation.status = 1;
				validation.error1 = "密碼設定錯誤! 請重新輸入!";
				validation.error2 = "";
			}

			return validation;
		},

		validateFirstBankPassword : function(passwordB)
		{
			var passwordA = app.DS.get('customerBankPassword');
			var validation = {};

			if(passwordA == passwordB)
			{
				validation.status = 0;
			}
			else
			{
				validation.status = 1;
				validation.error1 = "密碼設定錯誤! 請重新輸入!";
				validation.error2 = "";
			}

			return validation;
		},


		validateFirstCardPasswordLength : function(passwordB)
		{
			var validation = {};

			if(passwordB.length >= 4 && passwordB.length <= 12)
			{
				validation.status = 0;
			}
			else
			{
				validation.status = 1;
				validation.error1 = "密碼設定錯誤! 請重新輸入!";
				validation.error2 = "";
			}

			return validation;
		},

		validateFirstCardPassword : function(passwordB)
		{
			var passwordA = app.DS.get('customerBankCardPassword');
			var validation = {};

			if(passwordA == passwordB)
			{
				validation.status = 0;
			}
			else
			{
				validation.status = 1;
				validation.error1 = "密碼設定錯誤! 請重新輸入!";
				validation.error2 = "";
			}

			return validation;
		},

		validateEmailAddress: function(val) {
			var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			var validation = {};
			validation.error1 = "";
			validation.error2 = "";

			if(regex.test(val)) {
				validation.status = 0;
			} else {
				validation.status = 1;
				validation.error1 = "請重新核對紅色框內的身份資訊！";
			}

			return validation;
		},

		validateAnnualIncomeMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateOccupationMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateIdentityMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateAcctOpenPurposeMinLength: function(val) {
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請重新核對紅色框內的身份資訊！";
			validation.error2 = "";

			return validation;
		},

		validateAcctOpenBdayLocation : function(val)
		{
			var validation = this.validateMinimumLength(val, 1);
			validation.error1 = "請輸入出生地";
			validation.error2 = "";

			if(validation.status == 0)
			{
				if(String(val) == "美國" || String(val).indexOf("美") > -1)
				{
					validation.status = 1;
					validation.error1 = "本開戶通路適用不具美國納稅人義務身分";
					validation.error2 = "";
				}
			}

			return validation;
		},

		validateVTMTaxPaymentIDNumber : function(val)
		{
			var minDigit = 1;
			var maxDigit = 16;
			var validation = {};
			var alphaExp = /^[a-zA-Z][0-9]+$/;
        	var numericExp = /^[0-9]+$/;
        	var afterConvert;
			var result = "1";
			var valid;

			if(val.length < minDigit) {
				validation.status = 1;
				validation.error1 = "輸入值至少要一個號碼";
				validation.error2 = "Please enter value not less than 1 digit";
			} else if (val.length > maxDigit) {
				validation.status = 1;
				validation.error1 = "輸入值最多十六個號碼";
				validation.error2 = "Please enter value not more than 16 digits";
			}
			else
			{
	 			if(val.match(alphaExp))
		        {
		            afterConvert = ACLib.convertTaxIDNumber(val.toUpperCase());
		        }
		        else if(val.match(numericExp))
		        {
		             afterConvert = val;
		        }
		        else
		        {
		        	valid = "false";
		        }

				if(valid != "true")
				{
					result = ExternalValidateJS.VerifyPayerID(afterConvert);
				}

				if(result != "0")
				{
					validation.status = 1;
					validation.error1 = "請確認身分證號是否正確";
					validation.error2 = "";
				}
				else
				{
					validation.status = 0;
				}

			}

			return validation;
		},

		validateVTMMobileNumber : function(val)
		{
			var minDigit = 10;
			var maxDigit = 10;
			var validation = {};

			if(val.length == minDigit)
			{
				if(val.charAt(0) == "0" && val.charAt(1) == "9")
					validation.status = 0;
				else
				{
					validation.status = 1;
					validation.error1 = "請重新核對紅色框內的身份資訊！";
					validation.error2 = "";
				}
			}
			else
			{

				validation.status = 1;
				validation.error1 = "請重新核對紅色框內的身份資訊！";
				validation.error2 = "";
			}

			return validation;
		},
		validateCreditCardNo: function(val)
		{
			var creditCardNo = val.replace(/-/g,"");
			//var creditCard = parseInt(creditCardNo);
			var validCreditCard = true;
			//ACCoreJS.Trace(creditCard)
			//ACCoreJS.Trace(creditCardNo.length)
			var validation = {};
			if( creditCardNo.length < 16 ){
				validCreditCard = false;
				validation.error1 = "信用卡必須是十六位數"
			}

			if(validCreditCard == true){
				validation.status = 0;
				validation.error1 = "";
				validation.error2 = "";

			}else{
				validation.status = 1;
			}

			return validation;

		},
		validateCreditCardExpMonth: function(val)
		{
				var creditCardExpMonth = $("#creditCardExpMonth").val();
				var month = parseInt(creditCardExpMonth);
				var validMonth = true;
				var validation = {};

				if( month > 12 || month < 1 || creditCardExpMonth.length < 1){
					validMonth = false;
					validation.error1 = "輸入月份不正确";
				}

				if(validMonth == true){
					validation.status = 0;
					validation.error1 = "";
					validation.error2 = "";

				}else{
					validation.status = 1;

				}
				return validation;
		},

		validateCreditCardExpYear: function(val)
		{
			var creditCardExpYear = $("#creditCardExpYear").val();
			var year = parseInt(creditCardExpYear);
			var validYear = true;
			var validation = {};

			if( year == "undefined" || creditCardExpYear.length < 2){
				validYear = false;
				validation.error1 = "輸入年份不正确"
			}

			if(validYear == true){
				validation.status = 0;
				validation.error1 = "";
				validation.error2 = "";

			}else{
				validation.status = 1;

			}
			return validation;

		},

		validateCreditCardCode: function(val)
		{

			var cardCodeNo = $("#creditCardCode").val();
			var cardCode = parseInt(cardCodeNo);
			var validCode = true;
			var validation = {};

			if(cardCodeNo.length < 3 ){
				validCode = false;
				validation.error1 = "輸入三碼必須是三位數"
			}

			if(validCode == true){
				validation.status = 0;
				validation.error1 = "";
				validation.error2 = "";

			}else{
				validation.status = 1;

			}
			return validation;
		}
	};

	return ACValidation;
});
