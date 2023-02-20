var RDInput = document.getElementById("rawdata-input")

if (RDInput.focus) {
    

}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function joe() {
    var val = ""
    console.log(RDInput.value);
    if (RDInput.value === '') return document.getElementById("invalid").style.animation="hideInvalid 0.3s linear forwards";
    if (isJsonString(RDInput.value)) {
        //document.getElementById("invalid").style.display = "none";
        document.getElementById("invalid").style.animation="hideInvalid 0.3s linear forwards";
        val = RDInput.value

        loadData(val)

    } else {
        document.getElementById("invalid").style.animation="showInvalid 0.3s linear forwards";
    }
    console.log(val)
}

function loadData() {
    
}