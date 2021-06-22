class Item{
    constructor(_image,_x,_y)
    {
        this.image = _image;
        this.x = _x;
        this.y = _y;
        this.isRemove = 0;

    }

    draw()
    {
        circle(this.x,this.y,10);
        image(this.image[0],this.x,this.y);
    }

    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    checkPlayer(player,door)
    {
        if(this.checkRange(player.upLeft.x,player.upRight.x,this.x,this.x+64) && this.checkRange(player.upLeft.y,player.downRight.y,this.y,this.y+64))
        {
            door.isOpen = 1;
            this.isRemove = 1;
        }
    }
    



}