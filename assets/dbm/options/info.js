info = {
    "messages": {
        "errJSON": "Invalid JSON. Please enter valid Raw Data.",
        "errType": "The value provided is not an object. Please enter valid Raw Data.",
        "errRD": "The JSON provided doesn't seem to be valid DBM Raw Data."
    },
    "command": {
        "_id": {
            "label": "ID"
        },
        "permissions": {
            "label": "Required Permissions"
        },
        "permissions2": {
            "label": "Secondary Required Permissions"
        },
        "restriction": {
            "label": "Command Restriction",
            "values": ["Server only"]
        }
    },
    "event": {
        "_id": {
            "label": "ID"
        },
        "event-type": {
            "label": "Event Trigger",
            "values": []
        },
        "temp": {
            "label": "Temp Variable Name"
        },
        "temp2": {
            "label": "Second Temp Variable Name"
        }
    },
    "actions": { // this does not and will (probably) never support mods
        "common": {
            "varName": {"label": "Variable Name", "value": "string"},
            "storage": {"label": "Store In", "value": "choice", "values": ["Nothing", "Temp Variable", "Server Variable", "Global Variable"]},
            "inputs": {
                "send-reply-target-input": ["Same Channel", "Command User", "Mentioned User", "Interacted User", "Mentioned Channel", "Command Message", "Slash Command Parameter", "Default Channel", "Public Updates Channel", "Rules Channel", "Join/Boost Notify Channel", "Temp Variable", "Server Variable", "Global Variable", "User (Name)", "User (ID)", "Channel (Name)", "Channel (ID)"]
            }
        },
        "Send Message": {
            "channel": {"label": "Send To", "value": "send-reply-target-input"},
        }
    }
}