var gamekeyboard = function()
{
}

gamekeyboard.prototype = new gameLayer("keyboard");

document.addEventListener('keydown', function(event){
    for(var i=0;i<keyboard.nodes.length;i++)
    {
        keyboard.nodes[i].control(event.keyCode);
    }
}, true);

keyboard = new gamekeyboard();