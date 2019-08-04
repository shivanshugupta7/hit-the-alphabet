var GameManager = new function()
{
    this.score = 0;
    this.health = 10;
    this.game = null;

    this.createGame = function(game_name="game",width=600,height=500)
    {
        this.game = new gameScene(game_name,width,height);
        return this.game;
    }

    this.showStats = function()
    {
        var bar = this.game.div.width * this.health * 0.1;
        this.game.context.save();
        this.game.context.fillStyle = "#33cc33"
        this.game.context.fillRect(0,this.game.div.height-10, bar,10);
        this.game.context.restore();
    }
}