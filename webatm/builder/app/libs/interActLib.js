define([
        "app",
         "../../app/libs/interActVars"
    ],

    function(app ,ACVars)
    {
        var cardEjectBeeper;

        var interActLib =
        {
            setTerminalProfile: function(xml) {
                var terminalProfile = [];
                var XMLelement = null;

                terminalProfile["appHeight"] = parseInt($(xml).find("terminal").find("resolutionHeight").text());
                terminalProfile["appWidth"] = parseInt($(xml).find("terminal").find("resolutionWidth").text());
                terminalProfile["screenType"] = $(xml).find("terminal").find("screenType").text();

                terminalProfile["terminalGroup"] = [];
                XMLelement = $(xml).find("terminalGroups").find("terminalGroup");
                for(var i=0; i < XMLelement.length; i++) {
                    terminalProfile.terminalGroup.push({
                        "id" : $(XMLelement[i]).find("id").text(),
                        "name" : $(XMLelement[i]).find("name").text()
                    });
                }

                terminalProfile["peakHour"] = [];
                XMLelement = $(xml).find("profile").find("campaignInactiveTimeGroup").find("campaignInactiveTime");
                for(var j=0; j < XMLelement.length; j++){
                    terminalProfile.peakHour.push({
                        "id": $(XMLelement[j]).find("id").text(),
                        "startHour": this.GetHour($(XMLelement[j]).find("startTime").text()),
                        "startMin": this.GetMin($(XMLelement[j]).find("startTime").text()),
                        "endHour": this.GetHour($(XMLelement[j]).find("endTime").text()),
                        "endMin": this.GetMin($(XMLelement[j]).find("endTime").text())
                    });
                }


                terminalProfile["allIdleProfiles"] = [];
                XMLelement = $(xml).find("profile").find("idleProfileGroup").find("idleProfile");
                for (var k=0; k < XMLelement.length; k++) {
                    var start = $(XMLelement[k]).find("startDate").text().split(/[- :]/);
                    var end = $(XMLelement[k]).find("endDate").text().split(/[- :]/);
                    terminalProfile.allIdleProfiles.push({
                        "profileId": $(XMLelement[k]).find("id").text(),
                        "templateId": $(XMLelement[k]).attr("idleProfileId"),
                        "name": $(XMLelement[k]).find("name").text(),
                        "startDate": new Date(start[0], start[1]-1, start[2], "00", "00", "00"),
                        "endDate": new Date(end[0], end[1]-1, end[2], "23", "59", "59"),
                        "startHour": this.GetHour($(XMLelement[k]).find("startTime").text()),
                        "startMin": this.GetMin($(XMLelement[k]).find("startTime").text()),
                        "endHour": this.GetHour($(XMLelement[k]).find("endTime").text()),
                        "endMin": this.GetMin($(XMLelement[k]).find("endTime").text()),
                        "isDefault": $(XMLelement[k]).find("isDefault").text()
                    });
                }

                //ACCoreJS.Trace(">>>>>>> " + terminalProfile.allIdleProfiles.length);
                XMLelement = null;

                return terminalProfile;
            },

            GetHour: function(val) {
                var tmp = val.split(":");
                return tmp[0];
            },

            GetMin: function(val) {
                var tmp = val.split(":");
                return tmp[1];
            },

            GetPx : function (val)
            {
                return String(parseInt(val) * 4 / 3);

            },

            GenerateFeedbackXML: function(type, val ,bank ,campaignTemplateType) {
                var xmlStr = "";
                //ACCoreJS.Trace(type);
                //ACCoreJS.Trace(JSON.stringify(val));

                if(campaignTemplateType == "campaignWithCouponTemplate")
                {
                    ACCoreJS.SetUCDIIntegar("InterActAnswer" , 1);
                }

                switch (type.toUpperCase())
                {
                    case "CAMPAIGNNOTIFYTEMPLATE.SWF":
                        xmlStr += "<feedback>";

                        for(var i=0; i<val.length; i++)
                        {

                            if(val.length == 1 || (val.length == 2 && i > 0)) //Set last page result as seen
                            {
                                val[i].result = "SEEN";
                            }

                            xmlStr += "<feedbackList>";
                            xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                            xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                            xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                            xmlStr += "<id>"+ "" +"</id>";
                            xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                            xmlStr += "<result>" + this.processBankFeedBackResult(val[i].result,bank) + "</result>";
                            xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                            xmlStr += "</feedbackList>";
                        }

                        xmlStr += "</feedback>";
                        break;
                    case "TEMPLATE3DQA.SWF":
                        var feebacklists = [];
                        var lastIndex = val.length - 1;
                        xmlStr += "<feedback>";

                        if(lastIndex > 1)
                        {

                            if(val[lastIndex].result.toUpperCase() == "NO" ||
                                val[lastIndex].result.toUpperCase() == "UNDECIDED" ||
                                val[lastIndex].result.toUpperCase() == "LATER" )
                            {
                                xmlStr += "<feedbackList>";
                                xmlStr += "<campaignId>"+ val[lastIndex].campaignId +"</campaignId>";
                                xmlStr += "<cardHolderName>"+ val[lastIndex].cardHolderName +"</cardHolderName>";
                                xmlStr += "<cardNo>"+ val[lastIndex].cardNo +"</cardNo>";
                                xmlStr += "<id>"+ "" +"</id>";
                                xmlStr += "<itemNo>"+ val[lastIndex].itemNo +"</itemNo>";
                                xmlStr += "<result>"+ this.processBankFeedBackResult(val[lastIndex].result,bank) +"</result>";
                                xmlStr += "<terminalIp>"+ val[lastIndex].terminalIp +"</terminalIp>";
                                xmlStr += "</feedbackList>";
                            }
                            else
                            {
                                if(val.length == 3)
                                {
                                    lastIndex--;
                                } //Ignore confirmation page

                                for(var i=0; i<=lastIndex; i++)
                                {
                                    xmlStr += "<feedbackList>";
                                    xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                                    xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                                    xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                                    xmlStr += "<id>"+ "" +"</id>";
                                    xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                                    xmlStr += "<result>"+ this.processBankFeedBackResult(val[i].result,bank) +"</result>";
                                    xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                                    xmlStr += "</feedbackList>";
                                }
                            }


                        }
                        else
                        {
                            xmlStr += "<feedbackList>";
                            xmlStr += "<campaignId>"+ val[lastIndex].campaignId +"</campaignId>";
                            xmlStr += "<cardHolderName>"+ val[lastIndex].cardHolderName +"</cardHolderName>";
                            xmlStr += "<cardNo>"+ val[lastIndex].cardNo +"</cardNo>";
                            xmlStr += "<id>"+ "" +"</id>";
                            xmlStr += "<itemNo>"+ val[lastIndex].itemNo +"</itemNo>";
                            xmlStr += "<result>"+ this.processBankFeedBackResult(val[lastIndex].result,bank) +"</result>";
                            xmlStr += "<terminalIp>"+ val[lastIndex].terminalIp +"</terminalIp>";
                            xmlStr += "</feedbackList>";
                        }

                        xmlStr += "</feedback>";

                        break;
                    case "CAMPAIGNONLYSMSEMAILTEMPLATE.SWF":
                        xmlStr += "<feedback>";

                        for(var i=0; i<val.length; i++) {
                            xmlStr += "<feedbackList>";
                            xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                            xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                            xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                            xmlStr += "<id>"+ "" +"</id>";
                            xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                            xmlStr += "<result>" + this.processBankFeedBackResult(val[i].result,bank) + "</result>";
                            xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                            xmlStr += "</feedbackList>";
                        }

                        xmlStr += "</feedback>";
                        break;
                    case "CAMPAIGNINTERACTIVEBANNER.SWF":

                        xmlStr += "<feedback>";

                        var itemIdx = 1;

                        for(var bannerIdx=0 ; bannerIdx < val.length ; bannerIdx++)
                        {

                            if(val[bannerIdx].result.toUpperCase() == "YES" || val[bannerIdx].result.toUpperCase() == "NO" || val[bannerIdx].result.toUpperCase() == "UNDECIDED" || val[bannerIdx].result.toUpperCase() == "LATER" )
                            {
                                xmlStr += "<feedbackList>";
                                xmlStr += "<campaignId>"		+ val[bannerIdx].campaignId 		+"</campaignId>";
                                xmlStr += "<cardHolderName>"	+ val[bannerIdx].cardHolderName 	+"</cardHolderName>";
                                xmlStr += "<cardNo>"			+ val[bannerIdx].cardNo 			+"</cardNo>";
                                xmlStr += "<id>"				+ "" 								+"</id>";
                                xmlStr += "<itemNo>"			+ itemIdx.toString()				+"</itemNo>";
                                xmlStr += "<result>" 			+ this.processBankFeedBackResult(val[bannerIdx].result,bank) 			+"</result>";
                                xmlStr += "<terminalIp>"		+ val[bannerIdx].terminalIp 		+"</terminalIp>";
                                xmlStr += "</feedbackList>";

                                itemIdx++;
                            }
                            else if(val[bannerIdx].result.toString().length == 0)
                            {
                                //DO Nothing
                            }
                            else
                            {
                                var keyArry = val[bannerIdx].key.toString().split(',');
                                var keyValueArry = val[bannerIdx].result.toString().split(',');

                                for(var keyIdx = 0 ; keyIdx < keyArry.length ; keyIdx++)
                                {
                                    xmlStr += "<feedbackList>";
                                    xmlStr += "<campaignId>"		+ val[bannerIdx].campaignId 			+"</campaignId>";
                                    xmlStr += "<cardHolderName>"	+ val[bannerIdx].cardHolderName 		+"</cardHolderName>";
                                    xmlStr += "<cardNo>"			+ val[bannerIdx].cardNo 				+"</cardNo>";
                                    xmlStr += "<id>"				+ "" 									+"</id>";
                                    xmlStr += "<itemNo>"			+ itemIdx.toString() 					+"</itemNo>";
                                    xmlStr += "<result>" 			+ this.processBankFeedBackResult(keyArry[keyIdx],bank) 						+"</result>";
                                    xmlStr += "<terminalIp>"		+ val[bannerIdx].terminalIp 			+"</terminalIp>";
                                    xmlStr += "</feedbackList>";

                                    itemIdx++;

                                    xmlStr += "<feedbackList>";
                                    xmlStr += "<campaignId>"		+ val[bannerIdx].campaignId 			+"</campaignId>";
                                    xmlStr += "<cardHolderName>"	+ val[bannerIdx].cardHolderName 		+"</cardHolderName>";
                                    xmlStr += "<cardNo>"			+ val[bannerIdx].cardNo 				+"</cardNo>";
                                    xmlStr += "<id>"				+ "" 									+"</id>";
                                    xmlStr += "<itemNo>"			+ itemIdx.toString() 					+"</itemNo>";
                                    xmlStr += "<result>" 			+ this.processBankFeedBackResult(keyValueArry[keyIdx],bank) 					+"</result>";
                                    xmlStr += "<terminalIp>"		+ val[bannerIdx].terminalIp 			+"</terminalIp>";
                                    xmlStr += "</feedbackList>";

                                    itemIdx++;
                                }
                            }

                        }

                        xmlStr += "</feedback>";

                        break;
                }

                return xmlStr;
            },

            GenerateFeedbackOBJ: function(type, val ,bank ,campaignTemplateType) {
                var xmlStr = "";
                //ACCoreJS.Trace(type);
                //ACCoreJS.Trace(JSON.stringify(val));
                var resObj = new Object();
                var tmpObj = new Object();

                if(campaignTemplateType == "campaignWithCouponTemplate")
                {
                    ACCoreJS.SetUCDIIntegar("InterActAnswer" , 1);
                }

                switch (type.toUpperCase())
                {
                    case "CAMPAIGNNOTIFYTEMPLATE.SWF":
                        // xmlStr += "<feedback>";
                         resObj.feedbackList = []
                        for(var i=0; i<val.length; i++)
                        {

                            if(val.length == 1 || (val.length == 2 && i > 0)) //Set last page result as seen
                            {
                                val[i].result = "SEEN";
                            }

                            tmpObj = new Object();
                            tmpObj.campaignId = val[i].campaignId;
                            tmpObj.cardHolderName = val[i].cardHolderName;
                            tmpObj.cardNo = val[i].cardNo;
                            tmpObj.id = "";
                            tmpObj.itemNo = val[i].itemNo;
                            tmpObj.result = this.processBankFeedBackResult(val[i].result,bank);
                            tmpObj.terminalIp = val[i].terminalIp;

                            resObj.feedbackList.push(tmpObj);

                            // xmlStr += "<feedbackList>";
                            // xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                            // xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                            // xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                            // xmlStr += "<id>"+ "" +"</id>";
                            // xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                            // xmlStr += "<result>" + this.processBankFeedBackResult(val[i].result,bank) + "</result>";
                            // xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                            // xmlStr += "</feedbackList>";
                        }

                        // xmlStr += "</feedback>";
                        break;
                    case "TEMPLATE3DQA.SWF":
                        var feebacklists = [];
                        var lastIndex = val.length - 1;
                        xmlStr += "<feedback>";
                        resObj.feedbackList = []

                        if(lastIndex > 1)
                        {

                            if(val[lastIndex].result.toUpperCase() == "NO" ||
                                val[lastIndex].result.toUpperCase() == "UNDECIDED" ||
                                val[lastIndex].result.toUpperCase() == "LATER" )
                            {
                                // xmlStr += "<feedbackList>";
                                // xmlStr += "<campaignId>"+ val[lastIndex].campaignId +"</campaignId>";
                                // xmlStr += "<cardHolderName>"+ val[lastIndex].cardHolderName +"</cardHolderName>";
                                // xmlStr += "<cardNo>"+ val[lastIndex].cardNo +"</cardNo>";
                                // xmlStr += "<id>"+ "" +"</id>";
                                // xmlStr += "<itemNo>"+ val[lastIndex].itemNo +"</itemNo>";
                                // xmlStr += "<result>"+ this.processBankFeedBackResult(val[lastIndex].result,bank) +"</result>";
                                // xmlStr += "<terminalIp>"+ val[lastIndex].terminalIp +"</terminalIp>";
                                // xmlStr += "</feedbackList>";

                                tmpObj = new Object();
                                tmpObj.campaignId = val[lastIndex].campaignId;
                                tmpObj.cardHolderName = val[lastIndex].cardHolderName;
                                tmpObj.cardNo = val[lastIndex].cardNo;
                                tmpObj.id = "";
                                tmpObj.itemNo = val[lastIndex].itemNo;
                                tmpObj.result = this.processBankFeedBackResult(val[lastIndex].result,bank);
                                tmpObj.terminalIp = val[lastIndex].terminalIp;

                                resObj.feedbackList.push(tmpObj);
                            }
                            else
                            {
                                if(val.length == 3)
                                {
                                    lastIndex--;
                                } //Ignore confirmation page

                                for(var i=0; i<=lastIndex; i++)
                                {
                                    // xmlStr += "<feedbackList>";
                                    // xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                                    // xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                                    // xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                                    // xmlStr += "<id>"+ "" +"</id>";
                                    // xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                                    // xmlStr += "<result>"+ this.processBankFeedBackResult(val[i].result,bank) +"</result>";
                                    // xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                                    // xmlStr += "</feedbackList>";

                                    tmpObj = new Object();
                                    tmpObj.campaignId = val[i].campaignId;
                                    tmpObj.cardHolderName = val[i].cardHolderName;
                                    tmpObj.cardNo = val[i].cardNo;
                                    tmpObj.id = "";
                                    tmpObj.itemNo = val[i].itemNo;
                                    tmpObj.result = this.processBankFeedBackResult(val[i].result,bank);
                                    tmpObj.terminalIp = val[i].terminalIp;

                                    resObj.feedbackList.push(tmpObj);
                                }
                            }


                        }
                        else
                        {
                            // xmlStr += "<feedbackList>";
                            // xmlStr += "<campaignId>"+ val[lastIndex].campaignId +"</campaignId>";
                            // xmlStr += "<cardHolderName>"+ val[lastIndex].cardHolderName +"</cardHolderName>";
                            // xmlStr += "<cardNo>"+ val[lastIndex].cardNo +"</cardNo>";
                            // xmlStr += "<id>"+ "" +"</id>";
                            // xmlStr += "<itemNo>"+ val[lastIndex].itemNo +"</itemNo>";
                            // xmlStr += "<result>"+ this.processBankFeedBackResult(val[lastIndex].result,bank) +"</result>";
                            // xmlStr += "<terminalIp>"+ val[lastIndex].terminalIp +"</terminalIp>";
                            // xmlStr += "</feedbackList>";

                            tmpObj = new Object();
                            tmpObj.campaignId = val[lastIndex].campaignId;
                            tmpObj.cardHolderName = val[lastIndex].cardHolderName;
                            tmpObj.cardNo = val[lastIndex].cardNo;
                            tmpObj.id = "";
                            tmpObj.itemNo = val[lastIndex].itemNo;
                            tmpObj.result = this.processBankFeedBackResult(val[lastIndex].result,bank);
                            tmpObj.terminalIp = val[lastIndex].terminalIp;

                            resObj.feedbackList.push(tmpObj);
                        }

                        // xmlStr += "</feedback>";

                        break;
                    case "CAMPAIGNONLYSMSEMAILTEMPLATE.SWF":
                        xmlStr += "<feedback>";
                        resObj.feedbackList = []
                        for(var i=0; i<val.length; i++) {
                            // xmlStr += "<feedbackList>";
                            // xmlStr += "<campaignId>"+ val[i].campaignId +"</campaignId>";
                            // xmlStr += "<cardHolderName>"+ val[i].cardHolderName +"</cardHolderName>";
                            // xmlStr += "<cardNo>"+ val[i].cardNo +"</cardNo>";
                            // xmlStr += "<id>"+ "" +"</id>";
                            // xmlStr += "<itemNo>"+ val[i].itemNo +"</itemNo>";
                            // xmlStr += "<result>" + this.processBankFeedBackResult(val[i].result,bank) + "</result>";
                            // xmlStr += "<terminalIp>"+ val[i].terminalIp +"</terminalIp>";
                            // xmlStr += "</feedbackList>";

                            tmpObj = new Object();
                            tmpObj.campaignId = val[i].campaignId;
                            tmpObj.cardHolderName = val[i].cardHolderName;
                            tmpObj.cardNo = val[i].cardNo;
                            tmpObj.id = "";
                            tmpObj.itemNo = val[i].itemNo;
                            tmpObj.result = this.processBankFeedBackResult(val[i].result,bank);
                            tmpObj.terminalIp = val[i].terminalIp;

                            resObj.feedbackList.push(tmpObj);
                        }

                        xmlStr += "</feedback>";
                        break;
                    case "CAMPAIGNINTERACTIVEBANNER.SWF":

                        xmlStr += "<feedback>";
                        resObj.feedbackList = []
                        var itemIdx = 1;

                        for(var bannerIdx=0 ; bannerIdx < val.length ; bannerIdx++)
                        {

                            if(val[bannerIdx].result.toUpperCase() == "YES" || val[bannerIdx].result.toUpperCase() == "NO" || val[bannerIdx].result.toUpperCase() == "UNDECIDED" || val[bannerIdx].result.toUpperCase() == "LATER" )
                            {
                                // xmlStr += "<feedbackList>";
                                // xmlStr += "<campaignId>"        + val[bannerIdx].campaignId         +"</campaignId>";
                                // xmlStr += "<cardHolderName>"    + val[bannerIdx].cardHolderName     +"</cardHolderName>";
                                // xmlStr += "<cardNo>"            + val[bannerIdx].cardNo             +"</cardNo>";
                                // xmlStr += "<id>"                + ""                                +"</id>";
                                // xmlStr += "<itemNo>"            + itemIdx.toString()                +"</itemNo>";
                                // xmlStr += "<result>"            + this.processBankFeedBackResult(val[bannerIdx].result,bank)            +"</result>";
                                // xmlStr += "<terminalIp>"        + val[bannerIdx].terminalIp         +"</terminalIp>";
                                // xmlStr += "</feedbackList>";

                                tmpObj = new Object();
                                tmpObj.campaignId = val[bannerIdx].campaignId;
                                tmpObj.cardHolderName = val[bannerIdx].cardHolderName;
                                tmpObj.cardNo = val[bannerIdx].cardNo;
                                tmpObj.id = "";
                                tmpObj.itemNo = val[bannerIdx].itemNo;
                                tmpObj.result = this.processBankFeedBackResult(val[bannerIdx].result,bank);
                                tmpObj.terminalIp = val[bannerIdx].terminalIp;

                                resObj.feedbackList.push(tmpObj);

                                itemIdx++;
                            }
                            else if(val[bannerIdx].result.toString().length == 0)
                            {
                                //DO Nothing
                            }
                            else
                            {
                                var keyArry = val[bannerIdx].key.toString().split(',');
                                var keyValueArry = val[bannerIdx].result.toString().split(',');

                                for(var keyIdx = 0 ; keyIdx < keyArry.length ; keyIdx++)
                                {
                                    // xmlStr += "<feedbackList>";
                                    // xmlStr += "<campaignId>"        + val[bannerIdx].campaignId             +"</campaignId>";
                                    // xmlStr += "<cardHolderName>"    + val[bannerIdx].cardHolderName         +"</cardHolderName>";
                                    // xmlStr += "<cardNo>"            + val[bannerIdx].cardNo                 +"</cardNo>";
                                    // xmlStr += "<id>"                + ""                                    +"</id>";
                                    // xmlStr += "<itemNo>"            + itemIdx.toString()                    +"</itemNo>";
                                    // xmlStr += "<result>"            + this.processBankFeedBackResult(keyArry[keyIdx],bank)                      +"</result>";
                                    // xmlStr += "<terminalIp>"        + val[bannerIdx].terminalIp             +"</terminalIp>";
                                    // xmlStr += "</feedbackList>";

                                    tmpObj = new Object();
                                    tmpObj.campaignId = val[bannerIdx].campaignId;
                                    tmpObj.cardHolderName = val[bannerIdx].cardHolderName;
                                    tmpObj.cardNo = val[bannerIdx].cardNo;
                                    tmpObj.id = "";
                                    tmpObj.itemNo = val[bannerIdx].itemNo;
                                    tmpObj.result = this.processBankFeedBackResult(keyArry[keyIdx],bank);
                                    tmpObj.terminalIp = val[bannerIdx].terminalIp;

                                    resObj.feedbackList.push(tmpObj);

                                    itemIdx++;

                                    // xmlStr += "<feedbackList>";
                                    // xmlStr += "<campaignId>"        + val[bannerIdx].campaignId             +"</campaignId>";
                                    // xmlStr += "<cardHolderName>"    + val[bannerIdx].cardHolderName         +"</cardHolderName>";
                                    // xmlStr += "<cardNo>"            + val[bannerIdx].cardNo                 +"</cardNo>";
                                    // xmlStr += "<id>"                + ""                                    +"</id>";
                                    // xmlStr += "<itemNo>"            + itemIdx.toString()                    +"</itemNo>";
                                    // xmlStr += "<result>"            + this.processBankFeedBackResult(keyValueArry[keyIdx],bank)                     +"</result>";
                                    // xmlStr += "<terminalIp>"        + val[bannerIdx].terminalIp             +"</terminalIp>";
                                    // xmlStr += "</feedbackList>";

                                    tmpObj = new Object();
                                    tmpObj.campaignId = val[bannerIdx].campaignId;
                                    tmpObj.cardHolderName = val[bannerIdx].cardHolderName;
                                    tmpObj.cardNo = val[bannerIdx].cardNo;
                                    tmpObj.id = "";
                                    tmpObj.itemNo = val[bannerIdx].itemNo;
                                    tmpObj.result = this.processBankFeedBackResult(keyValueArry[keyIdx],bank);
                                    tmpObj.terminalIp = val[bannerIdx].terminalIp;

                                    resObj.feedbackList.push(tmpObj);

                                    itemIdx++;
                                }
                            }

                        }

                        xmlStr += "</feedback>";

                        break;
                }

                return resObj;
            },

            processBankFeedBackResult : function(result , bank)
            {
                var returnResult = "";
                switch(result)
                {
                    case "TIMEOUT":
                        if(bank != ACVars.BANKCODE_CIMBMY)
                        {
                            returnResult = "UNDECIDED";
                        }
                        else
                        {
                            returnResult = result;
                        }
                        break;
                    default:
                        returnResult = result;
                        break;
                }

                return returnResult;
            },


            GetCardNoFromTrack2 : function(track2)
            {
                var val;
                var endIdx = -1;
                if(String(track2).indexOf(";") == -1)
                {
                    endIdx = String(track2).indexOf("=");
                    val = String(track2).substring(0 , endIdx);
                }
                else
                {
                    endIdx = String(track2).indexOf("=");
                    val = String(track2).substring(1 , endIdx);
                }

                return val;
            }
        };

        return interActLib;
    });
