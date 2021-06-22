


class Monster
{
    constructor(_type,_defaultImage,_x,_y,_right,_left,_up,_down,_rayDown,_rightAttack = null)
    {

        this.type = _type;


        this.defaultImage = _defaultImage;
        this.rightAttack = _rightAttack;


        this.pos = new Vec2(_x,_y);

        this.gravityVel  = new Vec2(0,0);
        this.accGravity = new Vec2(0,0.5);

        this.attackVel = new Vec2(0,0);



        this.vel = new Vec2(0,0);

        this.acc = new Vec2(0,0);

        this.animState = 0;
        this.animDefaultDelta = 0;

        //default 상태를 체크
        this.defaultCheck = 0;


        //행동 체크.
        this.moveDelta = 0;
        this.moveState = 0;

        this.right = _right;
        this.left = _left;
        this.up = _up;
        this.down = _down;
        //오른쪽 밑 왼쪽 밑.
        this.downRight = new Vec2(this.pos.x+_right,this.pos.y+this.up);
        this.downLeft = new Vec2(this.pos.x+_left,this.pos.y+this.up);
        //오른위 왼쪽 위
        this.upRight = new Vec2(this.pos.x+_right,this.pos.y+this.down);
        this.upLeft = new Vec2(this.pos.x+_left,this.pos.y+this.down);

        //레이 선.
        this.rayDown = _rayDown;
        this.ray = new Vec2((this.pos.x+this.right+20,this.pos.y+this.rayDown));

        this.isAttacked = 0;

        this.life = 3;


        this.isPlayer = 0;
        

        //isAttack 공격 상태 인가?
        this.isAttack = 0;
        //오른쪽 공격 관련 변수.
        this.rightAttackDelta = 0;
        


    }
    
    animSlimeUpdate()
    {
        console.log(this.animState);
        quad(this.upLeft.x,this.upLeft.y,this.upRight.x,this.upRight.y,this.downRight.x,this.downRight.y,this.downLeft.x,this.downRight.y);
        push();
        imageMode(CENTER);
        if(this.type == 0)
        {
            // animState == 0 은 defualt
            if(this.animState == 0)
            {
                this.animDefaultDelta += deltaTime/1000;
                if(this.animDefaultDelta > 0.8 && this.animDefaultDelta < 1.2)
                {
                    image(this.defaultImage[2],this.pos.x,this.pos.y-10);
                    this.defaultCheck = 1;
                }else if(this.animDefaultDelta > 0.4 && this.animDefaultDelta < 0.8)
                {
                    image(this.defaultImage[1],this.pos.x,this.pos.y-10);
                }else{
                    image(this.defaultImage[0],this.pos.x,this.pos.y-10);
                    if(this.defaultCheck == 1)
                    {
                        this.animDefaultDelta = 0;
                        this.defaultCheck = 0;
                    }
                }
    
            // animState == 1 은 피격모션.
            }else if(this.animState == 1)
            {
                image(this.defaultImage[3],this.pos.x,this.pos.y-10);
            }
        }else if(this.type ==1)
        {
            // animState == 0 은 defualt
            if(this.animState == 0)
            {
                this.animDefaultDelta += deltaTime/1000;
                if(this.animDefaultDelta > 0.8 && this.animDefaultDelta < 1.2)
                {
                    image(this.defaultImage[2],this.pos.x,this.pos.y-10,300,300);
                    this.defaultCheck = 1;
                }else if(this.animDefaultDelta > 0.4 && this.animDefaultDelta < 0.8)
                {
                    image(this.defaultImage[1],this.pos.x,this.pos.y-10,300,300);
                }else{
                    image(this.defaultImage[0],this.pos.x,this.pos.y-10,300,300);
                    if(this.defaultCheck == 1)
                    {
                        this.animDefaultDelta = 0;
                        this.defaultCheck = 0;
                    }
                }
                //오른쪽 공격.
            }else if(this.animState == 2)
            {
                
                
                this.rightAttackDelta += deltaTime/1000;
                console.log(this.rightAttackDelta);
                if(this.rightAttackDelta > 1.6)
                {

                    this.isAttack = 0;
                    this.rightAttackDelta = 0
                    this.animState = 0;
                }else if(this.rightAttackDelta > 1.3 && this.rightAttackDelta < 1.4)
                {
                    image(this.rightAttack[2],this.pos.x,this.pos.y-10,300,300);
                    console.log("마지막");
                    
                    
                }else if(this.rightAttackDelta > 1.2 && this.rightAttackDelta<1.3)
                {
                    console.log("두번째");
                    image(this.rightAttack[1],this.pos.x,this.pos.y-10,300,300);
                }else
                {
                    console.log("처음");
                    image(this.rightAttack[0],this.pos.x,this.pos.y-10,300,300);
                }

            }
        }


        pop();
    }

    animSkeletonUpdate()
    {
        
    }


    behavior(player)
    {

        if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 400)
        {
            
            this.isPlayer = 1;
            if(player.pos.x < this.pos.x && this.isAttack == 0)
            {
                this.vel.x = 0;
                this.acc.x -= (this.pos.x-player.pos.x)*0.001;
                if(this.type == 1)
                {
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 150)
                    {
                        this.isAttack = 1;
                        this.animState = 2;
                        this.acc.x = 0;
                        
                    }
                }
            }else if(player.pos.x > this.pos.x && this.isAttack == 0){
                this.vel.x = 0;
                this.acc.x += (player.pos.x-this.pos.x)*0.001;
                if(this.type == 1)
                {
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 100)
                    {
                        this.isAttack = 1;
                        this.animState = 2;
                        this.acc.x = 0;
                        
                    }
                }
            }
        }else{
            this.isPlayer = 0;
        }




    }









    update()
    {
        this.gravityVel.addTo(this.accGravity);
        this.gravityVel.limit(15);
        this.vel.addTo(this.acc);
        this.vel.limit(2);
        this.pos.addTo(this.attackVel);
        this.pos.addTo(this.gravityVel);
        this.pos.addTo(this.vel);
        
        
        
        if(this.vel.x > 0)
        {
            this.ray.set(this.pos.x+this.right+20,this.pos.y+this.rayDown)
        }else if(this.vel.x < 0)
        {
            this.ray.set(this.pos.x-(this.right+20),this.pos.y+this.rayDown)
        }else{
            this.ray.set(this.pos.x+this.right+20,this.pos.y+this.rayDown)
        }
        //this.downRight = new Vec2(this.pos.x+_right,this.pos.y+27.5);
        this.downRight.set(this.pos.x+this.right,this.pos.y+this.up);
        this.downLeft.set(this.pos.x+this.left,this.pos.y+this.up)
        //this.upRight = new Vec2(this.pos.x+_right,this.pos.y-27.5);
        // this.upLeft = new Vec2(this.pos.x+_left,this.pos.y-27.5);
        this.upRight.set(this.pos.x+this.right,this.pos.y+this.down);
        this.upLeft.set(this.pos.x+this.left,this.pos.y+this.down);
        

    }

    moveUpdate()
    {
        if(this.isPlayer == 0)
        {
            this.moveDelta += deltaTime/1000;
            if(this.moveDelta > 4)
            {
                this.moveState = floor(random(0,4));
                this.moveDelta = 0;
                if(this.moveState == 1)
                {
                    this.acc.set(-1,0);
                }else if(this.moveState == 2)
                {
                    this.acc.set(1,0);
                }
            }
            if(this.moveState == 0)
            {
                this.acc.set(0,0);
                this.vel.set(0,0);
            }
        }
        

    }

    platformCheck(platform)
    {
        if(this.isAttacked == 0)
        {
            if(! ( (this.ray.x> platform.x && this.ray.x < platform.x+platform.width) && ((this.ray.y >= platform.y-3) && (this.ray.y <=platform.y+platform._height)) ))
            {
                
                this.acc.x *= -1;
                this.vel.x *= -1;
            }
        }
    }

    rayUpdate()
    {
        
        rect(this.ray.x,this.ray.y,10,50);
       

        
        
    }



    



    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    
    checkedAttack(player)
    {
        
        if(player.isAttack == 1)
        {   
        // if(player.checkA == 0)
        // {
            console.log(this.upLeft);
        if(this.life >0)
        {    
            
        if(this.checkRange(player.attackLeft.x,player.attackLeft.x+60,this.upLeft.x,this.upRight.x) && this.checkRange(player.attackLeft.y,player.attackLeft.y+50,this.upRight.y,this.downRight.y))
            {

                
                
                this.life -= 1;
                //오른쪽 네모
                if(player.checkA == 0 )
                {
                    this.isAttacked = 1;
                    this.animState = 1;
                    this.gravityVel.addTo(new Vec2(5,-10));
                    
                }else{
                    this.isAttacked = 1;
                    this.animState = 1;
                    this.gravityVel.addTo(new Vec2(-5,-10));
                    
                }
                
                
            }
            player.isAttack = 0;
            
        }

        // }else{
        //     if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,monster.upLeft.x,monster.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster.upLeft.y,monster.downRight.y))
        //     {
        //         console.log("들어왔다.");
        //     }
        // }
        }
    }







}
