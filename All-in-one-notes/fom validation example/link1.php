<?
$t1=$_POST['t1'];
$t2=$_POST['t2'];
$t3=$_POST['t3'];
$t4=$_POST['t4'];
$t5=$_POST['t5'];
$t6=$_POST['t6'];
$t7=$_POST['t7'];

$msg="Senders Full Detail : Name\t$t1\n";
$msg.="Address:\t$t2\n";
$msg.="Email:\t$t3\n";
$msg.="Phone:\t$t4\n";
$msg.="Enquiry For:\t$chk1$chk2$chk3$chk4$chk5$chk6$chk7$\n";
$msg.="Message:\t$t6\n";

//$mailheaders=$t2
//$mailheaders.="Reply-To: $t2\n\n";
//exit();
mail("statuswlc@statuswaterlevelcontroller.com","Enquiry Report",$msg,"From : $t3");
header("Location:http://www.statuswaterlevelcontroller.com");
echo "Your mail has been sent";
echo "Thank You,$t1\t";
?>
