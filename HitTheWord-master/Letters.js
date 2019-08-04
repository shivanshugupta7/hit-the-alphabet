function Letter(style = "30px Arial")
{
    this.char;
    this.x;
    this.y;
    this.speed;
    
    gameNode.call(this,"char");

    this.render = function(context)
    {
        context.font = style;
        context.fillText(this.char,this.x,this.y);
    }
}

function Letters()
{
    var nletter = 2;

    this.createLetter = function()
    {
        if (this.nodes.length < nletter)
        {
        letter = new Letter();
        letter.char = String.fromCharCode(Math.round(getRandom(65,90)));
        letter.id = letter.char;
        letter.x = getRandom(10,GameManager.game.div.width-12);
        letter.y = 0;
        letter.speed = getRandom(1,12);
        
        this.addNode(letter);
        }

        if(GameManager.score > 5 && GameManager.score <=15)
        nletter = 3;
        else if(GameManager.score > 15 && GameManager.score <=30)
        nletter = 4;
        else if(GameManager.score > 30 && GameManager.score<=50)
        nletter = 5;
        else if(GameManager.score > 50 && GameManager.score<=70)
        nletter = 6;
        else if(GameManager.score > 70)
        nletter = 7;
    }

    this.control = function(key)
    {
        var ln = this.nodes.length;
        this.deleteNode(String.fromCharCode(key));
        GameManager.score += ln - this.nodes.length;
    }

    this.update = function()
    {
        for(i=0;i<this.nodes.length;i++)
        {
            if(this.nodes[i].y > GameManager.game.div.height)
            {
                this.nodes[i].id = "#";
                this.deleteNode("#");
                GameManager.health--;
            }
            else
            this.nodes[i].y += this.nodes[i].speed * 0.05; 
        }
    }
}

Letters.prototype = new gameLayer("letters");