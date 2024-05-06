function check(){
    var mcq1 = frm.mcq1.value;
    var mcq2 = frm.mcq2.value;
    var marks = 0;
    if (mcq1 ==""){
        alert("Please select an option for question 1");
        return;
    
    }
    if (mcq2 ==""){
        alert("Please select an option for question 2");
        return;
    
    }
    if(mcq1 == "StaticPage"){
        marks += 1;
    }
    if(mcq2 == "DynamicPage"){
        marks += 1;
    }
    frm.marks.value = marks;
}