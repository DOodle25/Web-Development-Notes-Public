function validate_name(){
    var name1=signupform.name1.value;
    if(name1==""){
        //signupform.name1.focus();
        alert("Name must be filled out");
        return false;
    }
    else if(true){
        for(var i = 0;i <name1.length; i++){
            if(name1[i] >= '0' && name1[i] <= '9'){
                if (name1[i] > 0 && name1[i] < 9){
                    alert("name mustnot contain number")
                    signupform.name1.focus();
                    return false;
                } 
            }
        }
    }
}
function validate_email(){
    var email = signup-form.email.value;
}
function validate_password(){
    var password = signup-form.password.value;
}
function validate_gender(){
    var gender = signup-form.gender.value;
}
function validate_address(){
    var address = signup-form.address.value;
}
function validate_phone(){
    var phone = signup-form.phone.value;
}
function validate_designation(){
    var designation = signup-form.designation.value;
}
function validate_identification(){
    var identification = signup-form.identification.value;
}