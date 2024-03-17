function submitPost() {
    var postContent = document.getElementById("postContent").value;
    var fontSelect = document.getElementById("fontSelect").value;
    var fontSizeSelect = document.getElementById("fontSizeSelect").value;
    var colorSelect = document.getElementById("colorSelect").value;
    if (postContent.trim() !== "") {
        localStorage.setItem("postContent", postContent);
        localStorage.setItem("fontSelect", fontSelect);
        localStorage.setItem("fontSizeSelect", fontSizeSelect);
        localStorage.setItem("colorSelect", colorSelect);
        window.location.href = "viewpost.html";
    } else {
        alert("Please write something before posting.");
    }
}

function changeBackgroundColor() {
    var colorSelect = document.getElementById("colorSelect").value;
    document.getElementById("postContent").style.backgroundColor = colorSelect;
}

function changeFont() {
    var fontSelect = document.getElementById("fontSelect").value;
    document.getElementById("postContent").style.fontFamily = fontSelect;
};

 function changefontSize() {
    var fontSizeSelect = document.getElementById("fontSizeSelect").value;
    document.getElementById("postContent").style.fontSize = fontSizeSelect;
};

window.onload = function() {
    var postContent = localStorage.getItem('postContent');
    var fontSelect = localStorage.getItem('fontSelect');
    var fontSizeSelect = localStorage.getItem('fontSizeSelect');
    var colorSelect = localStorage.getItem('colorSelect');

    var textarea = document.getElementById('viewPostContent');
    textarea.value = postContent;
    textarea.style.fontFamily = fontSelect;
    textarea.style.fontSize = fontSizeSelect;
    textarea.style.backgroundColor = colorSelect;
};
