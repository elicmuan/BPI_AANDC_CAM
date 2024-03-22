window.onerror=function(msg, url, linenumber) {
	try { 
		Trace("<<ACTransact - error (AptraConsFuncExternal) >> Message : " + msg + "   url : " + url + "   line number : " + linenumber); 
	} catch (e) {}
	return true;
}

function globalException(msg, url, linenumber) {
	try { 
		Trace("<<ACTransact - global exception (AptraConsFuncExternal) >> Message : " + msg + "   url : " + url + "   line number : " + linenumber); 
	} catch (e) {}
}

function RESATMCExecuteFunc(functionName , stringParameter) {
	try { 
		Trace("RESATMCExecuteFunc Name: " + functionName);
		Trace("RESATMCExecuteFunc Parameter: " + stringParameter); 
		ACCoreJS.ATMCExecuteFunction(functionName , stringParameter);
	} catch (e) {
		Trace("RESATMCExecuteFunc Error: " + e.message); 
	}
}