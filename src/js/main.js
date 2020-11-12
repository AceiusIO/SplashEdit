const loadNotification = new Notification('SplashEdit', {
    body: 'SplashEdit home sucessfully loaded'
})
  
loadNotification.onclick = () => {
    console.log('Sucessfully loaded home')
}

function openEditor() {
    $('#home').slideUp();
    $('#loading').slideDown();
}

//======================================================\\
$("#loading").hide();