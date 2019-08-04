var canvasNode = function(canvas_name,width,height)
{
    Node.call(this,canvas_name,"canvas","game");
    this.div.width = width;
    this.div.height = height;
    this.context = this.div.getContext("2d");
}