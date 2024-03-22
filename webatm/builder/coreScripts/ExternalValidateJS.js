var ExternalValidateJS = 
{
	VerifyPayerID : function(ID)
	{
		if(typeof(VerifyPayerIDJS) == "undefined")
			return parent.frames["atmcScript"].VerifyPayerID(ID);
		else
			return VerifyPayerIDJS(ID);
	},
	
	tax_check_digit : function(arry)
	{
		if(typeof(tax_check_digitJS) == "undefined")
			return parent.frames["atmcScript"].tax_check_digit(arry);
		else
			return tax_check_digitJS(arry);		
	}
	
};