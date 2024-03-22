window.onerror=function(msg, url, linenumber)
{
	ACCoreJS.Trace("================================================================================");
	ACCoreJS.Trace("=====                                                                      =====");
	ACCoreJS.Trace("=====                    GLOBAL ERROR CAPTURED                             =====");
	ACCoreJS.Trace("=====                                                                      =====");
	ACCoreJS.Trace("================================================================================");
	ACCoreJS.Trace("LINE    : [ " + linenumber + " ] ");
	ACCoreJS.Trace("URL     : [ " + url + " ] ");
	ACCoreJS.Trace("MESSAGE : [ " + msg + " ] ");
	ACCoreJS.Trace("================================================================================");
		
	return true;
}

// $(window).error(function(e){
//         e.preventDefault();
// });  // IGNORE ALL ERROR JQUERY!