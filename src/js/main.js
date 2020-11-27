// SplashEdit HTML Editor
// (c) 2020 by Go Have a Think

// Written by AceiusIO

window.$ = window.jQuery = require('jquery');
const fs = require('fs');
const app = require('electron');

// Defs

const loadNotification = new Notification('SplashEdit', {
    body: 'SplashEdit home sucessfully lauched!'
});
  
loadNotification.onclick = () => {
    console.log('Sucessfully loaded home')
}

function openEditor() {
    $('#home').slideUp();
    $('#loading').slideDown();
    setTimeout(function() {
        $('#loading').slideUp();
        $('#editor').slideDown();
        setTimeout(function() {
            $('#notepad').slideDown();
        }, 750);
    }, 1000);
}

function editorAddHeading() {
    let editorContent = $("#notepad");
    let caretPos = editorContent[0].selectionStart;
    let textAreaTxt = editorContent.val();
    let txtToAdd = "<h" + $("#headingControls").val() + ">Heading " + $("#headingControls").val() + "</h" + $("#headingControls").val() + ">"
    editorContent.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
}

function editorAddImage() {
    let editorContent = $("#notepad");
    let ImgUrl = $("#imageControls").val();
    if (ImgUrl == 'Image URL') {
        alert("Please enter a valid URL!")
    }
    let caretPos = editorContent[0].selectionStart;
    let textAreaTxt = editorContent.val();
    let txtToAdd = "<img " + "src=" + "'" + ImgUrl + "' />"
    editorContent.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
    $("#imageControls").val("Image URL");
}

function editorRender() {
    const previewWindow = window.open("","Preview","width=300,height=300")
    const renderContent = '<link rel="stylesheet" href="index.css" />' + $("#notepad").val();
    previewWindow.document.write(renderContent);
}

function editorExport() {
    const renderContent = $("#notepad").val();
    try {
        fs.writeFileSync('output.html', renderContent, 'utf-8');
        alert('Saved File!')
    }
    catch(e) {
        alert('Failed to save!');
    }
}

// Main
$('#loading').hide();
$('#editor').hide();
$('#notepad').hide();