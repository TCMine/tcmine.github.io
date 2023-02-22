var rd_actionlist;
var rd_info;
var scroll = true;
var RDInput = document.getElementById("rawdata-input")

var container;
var element;
var element2;

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

    clear(0)

    let data = JSON.parse(val);
    let joe = document.createElement("form")
    let container = document.createElement("div")

    

    container.className = "action-list"
    joe.className = "container flex-container"
    joe.id = "holder"
    //console.log(data.actions)
    var actions = data.actions ?? [{name:"?"}]

    dataInfoSetup(data, joe)
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
    infoSetup(joe)

    
    if (scroll) setTimeout(()=>{document.activeElement.blur(); document.getElementById("holder").scrollIntoView({ behavior: 'smooth', block: 'start'})},50)
    scroll = false
}

function infoSetup(t) {
    let info = document.createElement("div")
    info.className = "action-info"
    info.id = "jo"

    let infoSpot = document.createElement("div")
    infoSpot.className = "action-info"
    infoSpot.id = "jo2"
    infoSpot.style.display = "none"
    infoSpot.style.visibility = "hidden"

    let divider = document.createElement("div")
    divider.className = "divider"

    if (t) {
        t.appendChild(divider)
        t.appendChild(info);
        t.appendChild(infoSpot);
    }
    container = $(".flex-container");
    element = $("#jo");
    element2 = document.getElementById("jo2")
    var containerTop = container.offset().top;
    var containerBottom = containerTop + container.outerHeight() - element.outerHeight();

    $(window).scroll(function() {
        
      
      var windowTop = $(window).scrollTop();
      if (windowTop >= containerTop && windowTop <= containerBottom) {
        element.addClass("fixed");
        element2.style.display = "grid";
        element.css("top", "-8.1%");
      } else {
        element.removeClass("fixed");
        element2.style.display = "none";
        if (windowTop < containerTop) {
          element.css("top", "0");
        } else {
          element.css("top", containerBottom - containerTop);
        }
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

    let cont = document.createElement("div")
    cont.id = "datainfo"
    cont.className = "container"

    //let joe = document.getElementById("holder")
    document.appendChild(cont)

}

// $(document).ready(function() {
//     var container = $(".flex-container");
//     var element = $("#jo");
//     var element2 = document.getElementById("jo2")
  
//     var containerTop = container.offset().top;
//     var containerBottom = containerTop + container.outerHeight() - element.outerHeight();
  
// });
