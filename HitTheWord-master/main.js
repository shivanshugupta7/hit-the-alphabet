// One time
function play()
{
    Scene1 = new Scene("scene1");
    Scene1.addLayer(GameManager.createGame("game1"));

    letters = new Letters();
    GameManager.game.addLayer(letters);

    keyboard.addNode(letters);
}

var interval = setInterval(update,2);

// Run Every frame
function update()
{
    if(GameManager.health > 0)
    {
        GameManager.game.clear();
        letters.createLetter();
        letters.update();
        GameManager.game.render();
        GameManager.showStats();
    }
    else
    {
        GameManager.game.clear();
        GameManager.game.context.font = "30px Arial";
        GameManager.game.context.fillText("Score: " + GameManager.score,
        GameManager.game.div.width/3,GameManager.game.div.height/2);
        clearInterval(interval);
    }
}