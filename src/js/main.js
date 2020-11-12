// SplashEdit HTML Editor
// (c) 2020 by Go Have a Think

// Written by AceiusIO

window.$ = window.jQuery = require('jquery');

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
    var $txt = jQuery("#notepad");
    var caretPos = $txt[0].selectionStart;
    var textAreaTxt = $txt.val();
    var txtToAdd = "<h" + $("#headingControls").val() + ">Heading " + $("#headingControls").val() + "</h" + $("#headingControls").val() + ">"
    $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
    
}

// Main
$('#loading').hide();
$('#editor').hide();
$('#notepad').hide();