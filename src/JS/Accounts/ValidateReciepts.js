function ValidateReceipt() {
    var recieptNo = document.recieptForm.recieptNo;

    // validating Reciept No
    // var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if (!recieptNo.value.length == "") {
        recieptNo.style.border = '1px solid red';
        document.getElementById("recieptNoError").innerHTML = "Enter reciept number";

        return false;
    }
    
}