function fun1() {
    alert("you just submitted the form");
    var v1 = Number(form1.mark1.value);
    var v2 = Number(form1.mark2.value);
    var v3 = Number(form1.mark3.value);
    var sum = v1 + v2 + v3;
    var avg = (v1 + v2 + v3) / 3;
    form2.sum.value = sum;
    form2.avg.value = avg;
    // alert("you just submitted the form" + sum);
}