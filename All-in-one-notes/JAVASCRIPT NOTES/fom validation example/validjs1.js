
function echeck(str) 
{
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID.")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID.")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID.")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID.")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID.")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID.")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID.")
		    return false
		 }

 		 return true					
}

// Declaring required variables
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 10;

function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function check()
{
if(form1.t1.value=="")
{
alert("Name Should Not Be Blank.");
form1.t1.focus();
return false;
}
else if(form1.t2.value=="")
{
alert("Address Should Not Be Blank.");
form1.t2.focus();
return false;
}
else if(form1.t3.value=="")
{
alert("E-Mail Should Not Be Blank.");
form1.t3.focus();
return false;
}
else if(echeck(form1.t3.value)==false)
{
		form1.t3.value="";
		form1.t3.focus();
		return false;
}
else if(form1.t4.value=="")
{
alert("Phone No. Should Not Be Blank.");
form1.t4.focus();
return false;
}
else if(checkInternationalPhone(form1.t4.value)==false)
{
		alert("Please Enter a Valid Phone Number.");
		form1.t4.value="";
		form1.t4.focus();
		return false;
}
else if(form1.chk1.checked==false && form1.chk2.checked==false &&  form1.chk3.checked==false &&  form1.chk4.checked==false &&  form1.chk5.checked==false &&  form1.chk6.checked==false &&  form1.chk7.checked==false)
{
alert("Atleast One Item Should Be Selected.");
return false;
}
else if(form1.t6.value=="")
{
alert("Message Should Not Be Blank.");
form1.t6.focus();
return false;
}
}

