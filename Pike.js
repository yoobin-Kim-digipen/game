class Pike{


    constructor(_x , _y , _image , _time, _reverse,_type = 3)
    {
        this.pos = new Vec2(_x,_y);
        this.pikeImage = _image;

        this.checkDeltaTime = 0;
        this.checkPike = 0;
        this.pikeTime = _time;
        this.type = _type;
        this.reverse = _reverse;


    }

    draw()
    {
        this.checkDeltaTime += deltaTime/1000;
        
        push();
        imageMode(CENTER);
        if(this.reverse == 0)
        {
            if(this.checkDeltaTime > this.pikeTime)
            {
                image(this.pikeImage[1],this.pos.x,this.pos.y,128,128);
                this.checkPike = 0;
                this.checkDeltaTime = 0;
            }else if(this.checkDeltaTime > this.pikeTime/2)
            {
                image(this.pikeImage[1],this.pos.x,this.pos.y,128,128);
                this.checkPike = 1;
            }else{
                image(this.pikeImage[0],this.pos.x,this.pos.y,128,128);
            }
        }else if(this.reverse == 1)
        {
            if(this.checkDeltaTime > this.pikeTime)
            {
                image(this.pikeImage[0],this.pos.x,this.pos.y,128,128);
                this.checkPike = 0;
                this.checkDeltaTime = 0;
            }else if(this.checkDeltaTime > this.pikeTime/2)
            {
                image(this.pikeImage[0],this.pos.x,this.pos.y,128,128);
                this.checkPike = 0;
                
            }else{
                image(this.pikeImage[1],this.pos.x,this.pos.y,128,128);
                this.checkPike = 1;
            }
        }
        pop();
        
    }

    colPlayer(player)
    {
        
        if(this.checkPike == 1)
        {
            if(this.checkRange(this.pos.x-50,this.pos.x+50,player.upLeft.x,player.upRight.x) && this.checkRange(this.pos.y-64,this.pos.y+64,player.upLeft.y,player.downRight.y))
            {
                if(player.attackedCheck == 0)
                {
                    player.life--;
                    player.attackedCheck = 1;
                    if(this.pos.x > player.pos.x+50)
                    {
                        player.attackedVel.x = -300;
                    }else{
                        player.attackedVel.x = 300;
                    }
                }
            }
        }
    }

    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }
    


}