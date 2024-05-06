function fun2()
{
f1.t1.value="";
}

function fun1()
{
var name=f1.t1.value;
var age=f1.t2.value;

     if(name=="")
	 {
	 alert("Please Enter Name");
	 f1.t1.focus();
	 return false;
	 }
	 
	 else if(age=="")
	 {
	 alert("Please Enter Age");
	 f1.t2.focus();
	 return false;
	 }
	 else
	 {
	 alert("Proceed")
	 }
}