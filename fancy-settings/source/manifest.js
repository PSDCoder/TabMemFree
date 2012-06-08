// SAMPLE
this.manifest = {
    "name": "TabMemFree",
    "icon": "../../img/icon30.png",
    "settings": [
        {
            "tab": "Common",
            "group": " ",
            "name": "timeout",
            "type": "slider",
            "label": "Tab timeout",
            "max": 24*60*60,
            "min": 15*60,
            "step": 15*60,
            "display": true,
            "displayModifier": function(value){
                return (value/60).floor() + " min.";
            }
        },
        {
            "tab": "Common",
            "group": " ",
            "name": "tick",
            "type": "slider",
            "label": "Check period",
            "max": 15*60,
            "min": 60,
            "step": 60,
            "display": true,
            "displayModifier": function(value){
                return (value).floor() + " sec.";
            }
        }
    ],
    "alignment": [
        [
            'timeout',
            'tick'
        ]
    ]
};