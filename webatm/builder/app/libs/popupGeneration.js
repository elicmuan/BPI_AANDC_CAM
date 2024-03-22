define([
	"app"/*,
	"../data/Input/city",
	"../data/Input/district",
	"../data/Input/income",
	"../data/Input/occupation",
	"../data/Input/reason",
	"../data/Input/status",
	"../data/Input/iDIssuePlace",
	"../data/Input/iDIssueType",
	"../data/Input/street",
	"../data/Input/taiwanBirthLocation" */
], 
function(app) { //, city, district, income, occupation, reason, status , IDIssuePlace , IDIssueType, street ,taiwanBirthLocation){
	var PopupGeneration = {
		generateListItem: function(object, params) {
			ACCoreJS.Trace("generateListItem Start");
			var lists = object.model.get('lists');
			var data;
			var item;
			lists.listItem = [];

			try {
				// ACCoreJS.Trace("*********");
				// ACCoreJS.Trace(params[0]);
				// ACCoreJS.Trace(params[1]);
				// ACCoreJS.Trace(params[2]);
				if(params[0] == "street")
				{
					// ACCoreJS.Trace(reason);
					data = street[params[1]];
					for(var i=0; i < data[params[2]].length; i++) 
					{
						item = 
						{
							ID: params[0] + (i+1),
							value: String(data[params[2]][i]),
							code: String(data[params[2]][i]),
							labels: [
								{ text : String(data[params[2]][i]), localClass : "" }
							]
						};
						lists.listItem.push(JSON.parse(JSON.stringify(item)));
					}
				}
				else
				{
					data = eval(params[0]);

					//ACCoreJS.Trace("xxxxxxxxxxxxxxxxxxxxxxx");
					//ACCoreJS.Trace(data);
					for(var i=0; i < data[params[1]].length; i++) 
					{
						item = 
						{
							ID: params[0] + (i+1),
							value: String(data[params[1]][i]['value']),
							code: String(data[params[1]][i]['code']),
							labels: [
								{ text : String(data[params[1]][i]['value']), localClass : "" }
							]
						};
						lists.listItem.push(JSON.parse(JSON.stringify(item)));
					}
				}
				

			} catch(e) {
				ACCoreJS.Trace("generateListItem Error: " + e.message);
			}
			ACCoreJS.Trace("generateListItem End");
		},

		processTaiwanAddressDataFromFiles : function(params , value)
		{
			var item;
			ACCoreJS.Trace("processTaiwanAddressDataFromFiles Start");
			try {
				if(params[0] == "street")
				{
					// ACCoreJS.Trace("xxxxxxxxxxx street street xxxxxxxxxxxx");
					// ACCoreJS.Trace(value);
					// ACCoreJS.Trace(params[1]);
					// ACCoreJS.Trace(params[2]);
					// ACCoreJS.Trace(reason);
					data = street[params[1]];
					// ACCoreJS.Trace(data);
					// ACCoreJS.Trace(data[params[2]].length);
					// ACCoreJS.Trace(data[params[2]]);
					for(var i=0; i < data[params[2]].length; i++) 
					{
						if(value.indexOf(String(data[params[2]][i])) > -1)
						{
							item = 
							{
								value: String(data[params[2]][i]),
								code: String(data[params[2]][i])
							};
							break;
						}	

					}
				}
				else
				{
					data = eval(params[0]);

					// ACCoreJS.Trace("xxxxxxxxxxxxxxxxxxxxxxx");
					// ACCoreJS.Trace(data);
					for(var i=0; i < data[params[1]].length; i++) 
					{
						// ACCoreJS.Trace(value);
						// ACCoreJS.Trace(String(data[params[1]][i]['value']));
						// ACCoreJS.Trace(value.indexOf(String(data[params[1]][i]['value'])));
						// ACCoreJS.Trace(value.substr(value.indexOf(String(data[params[1]][i]['value'])) , String(data[params[1]][i]['value']).length));
						// if(value.indexOf(String(data[params[1]][i]['value'])) > -1 && value.length == String(data[params[1]][i]['value']).length)
						if(value.indexOf(String(data[params[1]][i]['value'])) > -1 && 
							value.substr(value.indexOf(String(data[params[1]][i]['value'])) , String(data[params[1]][i]['value']).length) == String(data[params[1]][i]['value']))
						{
							item = 
							{
								value: String(data[params[1]][i]['value']),
								code: String(data[params[1]][i]['code'])
							};
							// ACCoreJS.Trace("FOUND!");
							// ACCoreJS.Trace(item);
							break;
						}
					}
				}
				ACCoreJS.Trace("processTaiwanAddressDataFromFiles End");
				return item;

			} catch(e) {
				ACCoreJS.Trace("processTaiwanAddressDataFromFiles Error: " + e.message);
			}


		}
	};

	return PopupGeneration;
});
