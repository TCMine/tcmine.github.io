const DBMInfo = info


var rd_actionlist;
var rd_info;
var scroll = true;
var RDInput = document.getElementById("rawdata-input");
var container;
var element;
var element2;

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const data = urlParams.get('data')
// console.log(data);
// RDInput.value = data

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

RDInput.focus();

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
        val = RDInput.value;

        //check if object
        if (typeof JSON.parse(val) != "object" || Array.isArray(JSON.parse(val))) {
            document.getElementById("invalidText").innerHTML = info.messages.errType
            document.getElementById("invalid").style.display="grid";
            document.getElementById("invalid").style.animation="showInvalid 0.3s linear forwards";
            return
        }


        //check if rd
        if (JSON.parse(val).actions === undefined) {
            document.getElementById("invalidText").innerHTML = info.messages.errRD
            document.getElementById("invalid").style.display="grid";
            document.getElementById("invalid").style.animation="showInvalid 0.3s linear forwards";
            return
        }

        loadData(val)
        dataInfoSetup(val)

    } else {
        document.getElementById("invalidText").innerHTML = info.messages.errJSON
        document.getElementById("invalid").style.display="grid";
        document.getElementById("invalid").style.animation="showInvalid 0.3s linear forwards";
    }
    //console.log(val)
}


function loadData(val) {

    clear(0)

    let data = JSON.parse(val);
    
    let dbmcont = document.createElement("div")
    dbmcont.id = "datainfo"
    dbmcont.className = "container flex-container"
    document.body.appendChild(dbmcont)
    rd_info = dbmcont

    let container = document.createElement("div")
    container.id = "action-list"
    container.className = "action-list"
    
    let joe = document.createElement("form")
    joe.className = "container flex-container"
    joe.id = "holder"
    
    //console.log(data.actions)
    var actions = data.actions ?? [{name:"?"}]
    
    dataInfoSetup(data, joe)
    joe.appendChild(container);
    
    actions.forEach((item, index) => {
        //console.log(item.name)
        const button = document.createElement("div");
        button.innerHTML = `<b class="action-item-n">#${index+1}</b><span style="margin-left:13%;display:inline-block">${item.name}</span>`; // Use the name property of each object as the button text
        button.className = "action-item"; // Use the name property of each object as the button text
        container.appendChild(button); // Add the button to the buttonListDiv
    });
    
    document.body.appendChild(joe)
    rd_actionlist = joe
    infoSetup(joe)

    
    if (scroll) setTimeout(()=>{document.activeElement.blur(); document.getElementById("datainfo").scrollIntoView({ behavior: 'smooth', block: 'start'})},50)
    scroll = false
}

function infoSetup(t) {
    let info = document.createElement("div")
    info.className = "action-info"
    info.id = "jo"

    let divider = document.createElement("div")
    divider.className = "divider"
    
    let title = document.createElement("p")
    title.className = "action-info-title"
    title.innerHTML = "No action selected."


    //let joe = document.getElementById("holder")

    if (t) {

        t.appendChild(divider)
        t.appendChild(info);
        info.appendChild(title)
    }

    //scroll with window
    const stickyElement = document.getElementById('jo');
    const ac = document.getElementById('action-list');
    const cont = document.getElementById('holder');
    
    window.addEventListener('scroll', () => {
    let rect = ac.getBoundingClientRect();
    const distanceFromTop = cont.offsetTop - window.pageYOffset || document.documentElement.scrollTop;
    //console.log(parseInt(window.getComputedStyle(cont).getPropertyValue('padding-top')), (distanceFromTop-distanceFromTop*2)+window.getComputedStyle(cont).getPropertyValue('padding-top'))
    if (rect.top < 0) {
        if (rect.bottom >= window.innerHeight - 5) {
            stickyElement.style.marginTop = `${(distanceFromTop-distanceFromTop*2)-parseInt(window.getComputedStyle(cont).getPropertyValue('padding-top'))+10}px`;
        }
    } else {
        stickyElement.style.marginTop = 0
    }
    });
}

function clear(num=0) {
    if (num === 0) {
        if (rd_actionlist) {
            rd_actionlist.remove()
            rd_actionlist == null
        }
        if (rd_info) {
            rd_info.remove()
            rd_info == null
        }
    }
    if (num === 1) {
        try {
            rd_actionlist.remove()
            rd_actionlist == null
            return true
        } catch (e) {
            return false
        }
    }
    if (num === 2) {
        try {
            rd_info.remove()
            rd_info == null
            return true
        } catch (e) {
            return false
        }
    }
}

function dataInfoSetup(dat, jo) {

    var type = "command"

    if (!dat) return false

    if (dat.event-type && dat.temp) type = "event"

    

    console.log(type)

}

// $(document).ready(function() {
//     var container = $(".flex-container");
//     var element = $("#jo");
//     var element2 = document.getElementById("jo2")
  
//     var containerTop = container.offset().top;
//     var containerBottom = containerTop + container.outerHeight() - element.outerHeight();
  
// });
