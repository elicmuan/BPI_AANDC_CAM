//---------------------------------------------
//VerifyPayerID: For Bill Payment Transaction
//InPut: lvID = CustID / Businness ID
// lvCheckCode = Check Type
//        - Type1: A=10, B=11, C=12...   
//        - Type2: A=01, B=02, C=03... 
//---------------------------------------------
function VerifyPayerIDJS(lvID)
{ 
	var intID = '';
	var i = '';
	var blnChk = '';
	var lvCheckCode = '1';
	var strIDCode = 'A-10 B-11 C-12 D-13 E-14 F-15 G-16 H-17 I-34 J-18 K-19 L-20 M-21 N-22 O-35 P-23 Q-24 R-25 S-26 T-27 U-28 V-29 W-32 X-30 Y-31 Z-33';
	
	intID = lvID.trim().length;
	
	if(lvID.length == 8 || lvID.length == 11 )
	{
		if (intID == 8 )	//Business ID
		{
			blnChk = tax_check_ban(lvID);
			if (blnChk == false)
			{
				return String('4');
			}
			else
			{
				return String('0');
			}
		}
	}
	else
	{
		return String('3');
	}
	
	if (intID == 11)
	{
		switch(lvCheckCode)
		{
			case '1':
				if (strIDCode.indexOf(lvID.substr(0,2)) == -1)
				{
					return String('3');
				}
				else
				{
					//verify CustID
					blnChk = tax_check_cid(lvID);
					
					if (blnChk == false)
					{
						return String('5');
					}
					else
					{
						return String('0');
					}
				}
			break;
			
			case '2':
				//Error: ID
				for (i = 1; i <= 26; i++)
				{
					if (parseInt(lvID.substr(0,2)) == i)
					{
						return String('0');
						break;
					}
				}
			break;
			
			default:
				return  String('6');
			break;
		}
	}
}

function tax_check_ban(cid)
{
	var ban_weigh = '12121241';
	var sum = 0;
	var i;
	var x;
	var q;
	var r;
	var s;
	var result;
	
	if (cid == '00000000')
	{
		return false;
	}
	
	for (i = 0; i <= 7; i++)
	{
		x = parseInt(cid.substr(i, 1)) * parseInt(ban_weigh.substr(i, 1));
		if ( x >= 10 )
		{
			s = Math.floor(x / 10) + x % 10;
			sum = sum + s;
		}
		else
		{
			sum = sum + x;
		}
	}
	
	result = (sum % 10 == 0);
	
	if ( !result && cid.substr(6, 1) == '7')
	{
		//try again
		sum = 0;
		for (i = 0; i <=7 ; i++ )
		{
			x = parseInt(cid.substr(i, 1)) * parseInt(ban_weigh.substr(i, 1));
			
			if ( x >= 10)
			{
				s = Math.floor(x / 10) + x % 10;
				
				if (s >= 10)	//only the 7th byte is 7: 7*4=28 -> 2+8=10 -> 1
				{
					s = parseInt(s.toString().substr(0,1));
				}
				sum = sum + s;
			}
			else
			{
				sum = sum + x;
			}
		}
		result = (sum % 10 == 0);
	}
	return result;
}

function ConvertIDCode(lvCode)
{
	lvCode = lvCode.substr(0, 2);
	switch (lvCode) 
	{
		case '10':
			lvCode = 'A';
			break;
		case '11':
			lvCode = 'B';
			break;
		case '12':
			lvCode = 'C';
			break;
		case '13':
			lvCode = 'D';
			break;
		case '14':
			lvCode = 'E';
			break;
		case '15':
			lvCode = 'F';
			break;
		case '16':
			lvCode = 'G';
			break;
		case '17':
			lvCode = 'H';
			break;
		case '34':
			lvCode = 'I';
			break;
		case '18':
			lvCode = 'J';
			break;
		case '19':
			lvCode = 'K';
			break;
		case '20':
			lvCode = 'L';
			break;
		case '21':
			lvCode = 'M';
			break;
		case '22':
			lvCode = 'N';
			break;
		case '35':
			lvCode = 'O';
			break;
		case '23':
			lvCode = 'P';
			break;
		case '24':
			lvCode = 'Q';
			break;
		case '25':
			lvCode = 'R';
			break;
		case '26':
			lvCode = 'S';
			break;
		case '27':
			lvCode = 'T';
			break;
		case '28':
			lvCode = 'U';
			break;
		case '29':
			lvCode = 'V';
			break;
		case '32':
			lvCode = 'W';
			break;
		case '30':
			lvCode = 'X';
			break;
		case '31':
			lvCode = 'Y';
			break;
		case '33':
			lvCode = 'Z';
			break;
		default:
			lvCode = lvCode;
			break;        
    }
	return lvCode;
}

function tax_check_digitJS(val)
{
	var accno;
	var kind;
	var amt;
	var dt;
	var chk1;
	var chk2;
	var taxacno;
	var xx;
	var len;
	var valArry;
	
	valArry = val;
	accno = valArry[0];
	kind = valArry[1];
	amt = valArry[2];
	dt = valArry[3];
	
	chk1 = parseInt(accno.substr(0, 1));
	chk2 = parseInt(accno.substr(1, 1));
	accno = accno.trim();
	taxacno = accno.substr(2, 14);
	len = taxacno.length;
	if (len < 14)
	{
		taxacno = taxacno + "7".repeat(14-len);
	}
	
	xx = kind + taxacno;
	
	if ( tax_digit(xx) != chk1 )
	{
		// tax_check_digit = '1';
		return String('1');
	}
	
	xx = taxacno.substr(11, 3);
	if (kind.substr(1,1) == '2' || kind.substr(1,1) == '4')
	{
		xx = xx + "0".repeat(7);
	}
	else
	{
		
		len = (amt.toString()).length;
		if (len < 7)
		{
			xx = xx + "0".repeat(7-len) + amt.trim();
		}
		else
		{
			xx = xx + amt.trim();
		}
	}
	xx = xx + dt;
	if ( tax_digit(xx) != chk2 )
	{	
		return String('1');
	}
	return String('0');
}

function tax_digit(ss)
{
	var digit_weigh = '1313131313131313';
	var sum1 = 0;
	var i;
	var x;
	var y;
	var str;
	
	for (i=0;i<=15;i++)
	{
		str = ss.substr(i,1);
		if(str == ' '){str = '0';}
			x = parseInt(str) * parseInt(digit_weigh.substr(i,1));
			sum1 = sum1 + x;
	}
	
	y = sum1 % 10;
	if (y != 0)
	{
		return  10 - y;
	}
	else
	{
		return  0;
	}
}

function tax_check_cid(cid)
{
	var cid_weigh = '19876543211';
	var sum = 0;
	var i;
	
	
	if (parseInt(cid.substr(0,2)) < 10 || parseInt(cid.substr(0,2)) > 35)
	{
		return false;
	}
	
	for (i=0;i<=10;i++) 
	{
		sum = sum + parseInt(cid.substr(i,1)) * parseInt(cid_weigh.substr(i,1));
	}
	return (sum % 10 == 0);
}

String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}