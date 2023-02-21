var rd_actionlist;
var rd_info;
var scroll = true;
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
    document.getElementById("invalid").style.display="none";
    clear()
    var val = ""
    //console.log(RDInput.value);
    if (RDInput.value === '') {
        scroll = true;
        return document.getElementById("invalid").style.animation="hideInvalid 0.3s linear forwards";
    }
    if (isJsonString(RDInput.value)) {
        //document.getElementById("invalid").style.display = "none";
        document.getElementById("invalid").style.animation="hideInvalid 0.3s linear forwards";
        val = RDInput.value

        loadData(val)

    } else {
        document.getElementById("invalid").style.display="grid";
        document.getElementById("invalid").style.animation="showInvalid 0.3s linear forwards";
    }
    //console.log(val)
}


function loadData(val) {

    if (rd_actionlist) {
        rd_actionlist.remove()
    }

    let data = JSON.parse(val);
    let joe = document.createElement("form")
    let container = document.createElement("div")
    container.className = "action-list"
    joe.className = "container"
    joe.id = "holder"
    //console.log(data.actions)
    var actions = data.actions
    joe.appendChild(container);
    
    actions.forEach((item, index) => {
        console.log(item.name)
        const button = document.createElement("div");
        button.innerHTML = `<b>#${index+1}</b> ${item.name}`; // Use the name property of each object as the button text
        button.className = "action-item"; // Use the name property of each object as the button text
        container.appendChild(button); // Add the button to the buttonListDiv
    });
    
    document.body.appendChild(joe)
    rd_actionlist = joe
    
    if (scroll) setTimeout(()=>{document.activeElement.blur(); document.getElementById("holder").scrollIntoView({ behavior: 'smooth', block: 'center'})},50)
    scroll = false
}

function clear() {
    try {
        rd_actionlist.remove()
    } catch (e) {
    }
    try {
        rd_info.remove()
    } catch (e) {
    }
}