
function validate(){
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")			 
	var email = document.getElementById("email")
	var phone = document.getElementById("phone")
	var password = document.getElementById("password") 
    var address1 = document.getElementById("add1")
    var address2 = document.getElementById("add2")
    var address3 = document.getElementById("add3")
    var address4 = document.getElementById("add4")
    var address5 = document.getElementById("add5")
    var address6 = document.getElementById("add6")
    var username = document.getElementById("username")
    var message = document.getElementById("message")
    var date = document.getElementById("date")
    var regx = /^[7-9]\d{9}$/
    

    
    if(fname.value.trim()==""){
        alert("Please enter your First Name!!")
        return false
    }
    else if(lname.value.trim()==""){
        alert("Please enter your Last Name!!")
        return false
    }
    else if(date.value.trim()==""){
        alert("Please enter Your Birthday Date!!")
        return false
    }
    
    else if(username.value.trim()==""){
        alert("Please enter your Username!!")
        return false
    }
    else if(password.value.trim().length<8 || password.value.trim()==""){
        alert("Please enter your Password!!")
        return false
    }
    else if(address1.value.trim()==""){
        alert("Please enter your Address!!")
        return false
    }
    else if(address2.value.trim()==""){
        alert("Please enter your Address!!")
        return false
    }
    else if(address3.value.trim()==""){
        alert("Please enter your City!!")
        return false
    }
    else if(address4.value.trim()==""){
        alert("Please enter your State!!")
        return false
    }
    else if(address5.value.trim()==""){
        alert("Please enter your Zip Code!!")
        return false
    }
    else if(address6.value.trim()==""){
        alert("Please enter your Country!!")
        return false
    }
    else if(email.value.trim()==""){
        alert("Please enter your Email!!")
        return false
    }
    else if(email.value.indexOf(".", 0) < 0 ||email.value.indexOf("@", 0) < 0){
        alert("Please provide a valid Email!!")
        return false
    }
    else if(phone.value.trim()==""){
        alert("Please enter your Phone No.!!")
        return false
    }
    else if(message.value.trim()==""){
        alert("Please enter some message!!")
        return false
    }
    else if(phone.value){
        if(phone.value.match(regx)){
            return true
        }
        else{
            alert("Please enter a valid Phone No.!!")
            return false
        }

        
    }
    
    

    
    else{
        true
    }
    
}


