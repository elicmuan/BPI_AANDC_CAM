var applicationReady = false;
var incomingMessageExist = false;
var vtmMessageArry = [];

function TransactXPublishMessage(data)
{
	if(applicationReady)
		ACCoreJS.TransactXPublishMessage(data);
	else
	{
		incomingMessageExist = true;
		vtmMessageArry.push(data);
	}
}

function TransactXTerminateAssist()
{
	if(applicationReady)
		ACCoreJS.TransactXTerminateAssist();
}

function TransactXApplicationReady(val)
{
	applicationReady = val;

	if(incomingMessageExist)
	{
		for(var i = 0 ; i < vtmMessageArry.length ; i++)
		{
			ACCoreJS.TransactXPublishMessage(vtmMessageArry[i]);	
		}

		vtmMessageArry = [];
	}
}

function TransactXBonusPointSimulationRequest(val)
{
	if(applicationReady)
		ACCoreJS.TransactXBonusPointSimulationRequest(val);
	else
	{
		
	}
}

