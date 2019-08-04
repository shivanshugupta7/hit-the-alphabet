function gameScene(scene_name="game",width=600,height=500)
{
    this.layers = new Array();
    this.id = scene_name;

    canvasNode.call(this,scene_name,width,height);
}

gameScene.prototype.addLayer = function(layer)
{
    this.layers.push(layer);
}

gameScene.prototype.deleteLayer = function(layer_name)
{
    for(i=this.layers.length-1;i>=0;i--)
    {
        if(this.layers[i].id == layer_name)
        this.layers.splice(i,1);
    }
}

gameScene.prototype.render = function()
{
    for(i=0;i<this.layers.length;i++)
    {
        this.layers[i].render(this.context);
    }
}

gameScene.prototype.clear = function()
{
    this.context.clearRect(0,0,this.div.width,this.div.height);
}

function gameLayer(layer_name="gameLayer")
{
    this.nodes = new Array();
    this.id = layer_name;
}

gameLayer.prototype.addNode = function(node)
{
    this.nodes.push(node);
}

gameLayer.prototype.deleteNode = function(node_name)
{
    for(i=this.nodes.length-1;i>=0;i--)
    {
        if(this.nodes[i].id == node_name)
        {
            this.nodes.splice(i,1);
        }
    }
}

gameLayer.prototype.render = function(context)
{
    for(i=0;i<this.nodes.length;i++)
    {
        this.nodes[i].render(context);
    }
}

function gameNode(node_name="gameNode")
{
    this.id  = node_name;
}