define([], function(){
	var FormatInput = {
		currency: function(value) {
			if(Number(value) == 0)
				return 0;
			else
				return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		},
		number: function(value) {
			if(value == "") { return ""; } //if empty
			return Number(value.replace(/[^0-9\.]+/g,""));
		},
		standardString : function(value)
		{
			return value;
		},

		formatDate: function(value)
		{
			return value;
		},

		formatTaiwanDate8Digit : function(value)
		{

		},

		formatTaiwanDate7Digit : function(value)
		{

		},

		formatCreditCard : function(val)
		{
			return val;
		},

		formatCreditCardNo : function(val)
		{

				var creditCardNo1 = "";
				var creditCardNo2 = "";
				var creditCardNo3 = "";
				var creditCardNo4 = "";
				var creditCardNo = "";

				if(val.length == 16){
					var creditCardNo1 = parseInt(val.substring(0,4));
					var creditCardNo2 = parseInt(val.substring(4,8));
					var creditCardNo3 = parseInt(val.substring(8,12));
					var creditCardNo4 = parseInt(val.substring(12,16));
					//ACCoreJS.Trace(creditCardNo1)
					//ACCoreJS.Trace(creditCardNo2)
					//ACCoreJS.Trace(creditCardNo3)
					//ACCoreJS.Trace(creditCardNo4)
					var creditCardNo = "";
					creditCardNo = creditCardNo1 + "-" + creditCardNo2 + "-"+ creditCardNo3 + "-" + creditCardNo4;
					return creditCardNo;
				}
				else{
						return val;
				}

		},

		formatCreditCardNo_testing: function(val){
			var copyVal = val;
			var filterCCardNo = copyVal.replace(/-/g,"");
			var length = filterCCardNo.length;
			var creditCardNo = "";
			if(length >= 4){
			var creditCardNo1 = parseInt(filterCCardNo.substring(0,4));
			creditCardNo += creditCardNo1 + "-";
			}
			if(length >= 5){
				var creditCardNo2 = parseInt(filterCCardNo.substring(4,8));
				creditCardNo += creditCardNo2 + "-";
			}
			if(length >= 9){
				var creditCardNo3 = parseInt(filterCCardNo.substring(8,12));
				creditCardNo += creditCardNo3 + "-";
			}
			 if(length >= 13){
				var creditCardNo4 = parseInt(filterCCardNo.substring(12,16));
				creditCardNo += creditCardNo4;
			}

			if(length >= 4){
				return creditCardNo;
			}else if(length < 4){
				return val;
			}
		},

		formatMaskData :  function(val)
		{
			return "***********";
		},
		decimalCurrency: function(value) {
			if(Number(value) == 0){
				return "";
			}
			else
			{
				return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+".00";
			}
		}
	};

	return FormatInput;
});
