
define([
	"app"
], 

function(app  ) {
	var InterActValidation = {

		validateInputDataLength: function(type, val, min, max )
		{
			// var result = true;

			// alert(min + " : " + parseInt(val) + " = " + max );

			// switch(type)
			// {
			// 	case "S":
			// 	case "AN":
			// 		if(min > 0 && (val.length < min || val.length > max) && min != 0)
			// 		{
			// 			result = false;
			// 		}
			// 		break;
			// 	case "I":
			// 	case "N":
			// 		if(min > 0 && ( parseInt(val) < min || parseInt(val) > max))
			// 		{
			// 			result = false;
			// 		}
			// 		break;
			// }

			// return result;

			var result = true;

			switch(type)
			{
				case "S":
				case "AN":
					if(val.length > max)
					{
						result = false;
					}
					break;
				case "I":
				case "N":
					if(parseInt(val) > max)
					{
						result = false;
					}
					break;
			}

			return result;
		},

		validateInputData: function(type, val, min, max , inputName)
		{
			var result = true;

			switch(type)
			{
				case "S":
				case "AN":
					if(min > 0 && (val.length < min || val.length > max))
					{
						result = false;
					}
					break;
				case "I":
				case "N":
					if(isNaN(parseInt(val)))
					{
						val = 0;
					}
					
					if(min > 0 && ( parseInt(val) < min || parseInt(val) > max))
					{
						result = false;
					}
					break;
			}

			if(result == true && type == "AN" && inputName == "EMAIL")
			{
				result = ACCoreJS.validateEmail(val);
			}

			return result;
		},

		validateInputData_old: function(type, val, min, max) {
			if(min > 0 && val.length == 0) { return false; }
			//Check Input length
			if((type == "S" || type == "AN") && min > 0 && val.length < min)
			{
				return false;
			}
			if((type == "S" || type == "AN") && val.length > max)
			{
				return false;
			}

			//Check Input Numberic Amount
			if((type == "I" || type == "N") && min > 0 && parseInt(val) < min)
			{
				return false;
			}
			if((type == "I" || type == "N") && parseInt(val) > max)
			{
				return false;
			}

			if(val.length > 0)
			{
				if(type == "I" || type == "S" || type == "N")
				{ //Validate Numeric value
					return /^\d+$/.test(val);
				}
				else if(type == "AN")
				{ //Alphanumberic
					return /^[a-z0-9]+$/i.test(val);
				}
			}
			else
			{
				return true;
			}
		},

		validateEmail: function(email) {
    		return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email);
		}
	};

	return InterActValidation;
});