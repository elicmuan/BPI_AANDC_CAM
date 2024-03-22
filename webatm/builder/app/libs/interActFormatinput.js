define([], function(){
	var FormatInput = {
		formatMessageData : function(val) {
			//Replace Normal New line with HTML new line
			return val.replace(/(\r\n|\n|\r)/gm, "<br />");
		}
	};

	return FormatInput;
});