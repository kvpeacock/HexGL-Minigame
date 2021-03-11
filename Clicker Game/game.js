
var click_button = document.createElement("button");
click_button.innerHTML = "Eat Apple";
var body = document.getElementsByTagName("body")[0];
body.appendChild(click_button);

var end_button = document.createElement("button");
end_button.innerHTML = "Finish";
body.appendChild(end_button);

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\&$');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$|)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

click_button.addEventListener ("click", function() {
    times_clicked+=1;
    document.getElementById("times_clicked").innerHTML = "Apples Eaten: " + times_clicked;
    //window.parent.document.dispatchEvent (new CustomEvent ('myCustomEvent', { detail : times_clicked }));
});

end_button.addEventListener ("click", function() {
    var parse_string = times_clicked+"|"+player_name;
    window.parent.document.dispatchEvent (new CustomEvent ('End_Button_Pressed', { detail : parse_string }));
});

var times_clicked = 0;
var URL = window.location.href;
var player_name = getParameterByName("name");
var apple = getParameterByName("apple");
document.getElementById("name_display").innerHTML = player_name + " is an "+apple;