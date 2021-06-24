class Boss 
{
    constructor(_type,_defaultImage,_x,_y,_right,_left,_up,_down,_rayDown,_rightAttack = null,_leftAttack,_moveImage,_effectImage)
    {

        this.type = _type;


        this.magicImage = _defaultImage;
        this.rightAttack = _rightAttack;
        this.leftAttack = _leftAttack;
        this.moveImage = _moveImage;
        this.effectImage = _effectImage;


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

        this.life = 30;


        this.isPlayer = 0;
        

        //isAttack 공격 상태 인가?
        this.isAttack = 0;
        //오른쪽 공격 관련 변수.
        this.rightAttackDelta = 0;
        //페링이 됬는가?
        this.isParried = 0;
        //페링이 가능한 시간대.
        this.isCanParry = 0;
        //스턴체크 한번.
        this.stunCheck = 0;

        //공격 판정 부분
        this.attackLeft = new Vec2(0,0);
        //공격부분 방향체크
        this.checkA = 0;

        //스턴 델타타임
        this.stunDeltaTime = 0;

        //왼쪽공격 델타 타임.
        this.leftAttackDelta = 0;



        //behavior 체크
        this.behaviorCheck = 0;

        //왼쪽으로 걷기.
        this.leftWalkDelta = 0;



        //오른쪽으로 걷기.
        this.rightWalkDelta = 0;
        //behavior 체크
        this.isBehavior = 0;
        


        //이펙트 델타타임.
        this.effectDelta = 0;







        //공격 어택타임.
        this.attackPlayerDelta = 0;
        // 매직 체크.
        this.magicCheck = 0;
        this.magicDeltaTime = 0;
        this.magicCastDeltaTime = 0;

        //포스체크
        this.playerPosCheck = 0;
        this.playerPos_x = 0;
        this.playerPos_y = 0;
        this.platformY = 0;

        this.isMagic = 0;

        this.whereMagic = 0;
        this.rightAttackRange = 0;

        //왼쪽으로 가는거


        //Wide
        this.wide = 0;
    

        
        
        this.platformCheckY = 0;
        this.playerShieldCheck = 0;
        
        //pattern
        this.patternIs = 0;
        this.patternDeltaTime = 0;
        this.pattern = 0;

        //change range
        this.range = 0;

        


    }
    
    animSlimeUpdate()
    {
        push();
        imageMode(CENTER);
        if(this.patternIs == 0)
        {
            this.patternDeltaTime += deltaTime/1000;
            if(this.patternDeltaTime > 1.0)
            {
                this.patternIs = 1;
                this.patternDeltaTime = 0;
                let a = floor(random(0,10));
                if(a <4)
                {
                    this.pattern = 1;
                }else{
                    this.pattern = 0;
                }
            }

        }
        if(this.type == 5)
        {
            
            
            // animState == 0 은 defualt
            if(this.animState == 0)
            {
               
                if(this.checkA == 0)
                {
                    image(this.moveImage[4],this.pos.x,this.pos.y-40,300,300);
                }else{
                    image(this.moveImage[0],this.pos.x,this.pos.y-40,300,300);
                }
                
            //왼쪽 움직임.
            }else if(this.animState == 1)
            {
                    this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[3],this.pos.x,this.pos.y-40,300,300);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[3],this.pos.x,this.pos.y-40,300,300);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[2],this.pos.x,this.pos.y-40,300,300);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[1],this.pos.x,this.pos.y-40,300,300);
                }else
                {
                    image(this.moveImage[0],this.pos.x,this.pos.y-40,300,300);
                }
            //오른쪽 움직임
            }else if(this.animState == 2)
            {

                this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[7],this.pos.x,this.pos.y-40,300,300);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[7],this.pos.x,this.pos.y-40,300,300);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[6],this.pos.x,this.pos.y-40,300,300);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[5],this.pos.x,this.pos.y-40,300,300);
                }else
                {
                    image(this.moveImage[4],this.pos.x,this.pos.y-40,300,300);
                }

            //오른쪽 공격.
            }else if(this.animState == 3)
            {

                 
                this.rightAttackDelta += deltaTime/1000;
                if(this.rightAttackDelta > 1.85)
                {
                    image(this.rightAttack[7],this.pos.x,this.pos.y-40,400,400);
                    console.log("add2");
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.rightAttackDelta = 0
                    this.playerShieldCheck = 0;
                    this.patternIs = 0;
                }else if(this.rightAttackDelta > 1.60 && this.rightAttackDelta < 1.85)
                {
                    
                    image(this.rightAttack[7],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 0;
                    this.isAttack = 1;
                }
                else if(this.rightAttackDelta > 1.35 && this.rightAttackDelta < 1.60)
                {
                    image(this.rightAttack[6],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 600;
                    this.wide = 0;
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                }else if(this.rightAttackDelta > 1.10 && this.rightAttackDelta < 1.35)
                {
                    
                    image(this.rightAttack[5],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 0;
                    
                }else if(this.rightAttackDelta > 0.85 && this.rightAttackDelta < 1.10)
                {
                    
                    image(this.rightAttack[4],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 600;
                    this.wide = 1;
                    this.isAttack = 1;
                }else if(this.rightAttackDelta > 0.6 && this.rightAttackDelta < 0.85)
                {
                    
                    image(this.rightAttack[3],this.pos.x,this.pos.y-40,400,400);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                }else if(this.rightAttackDelta > 0.4 && this.rightAttackDelta<0.6)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.rightAttack[2],this.pos.x,this.pos.y-40,400,400);
                }else if(this.rightAttackDelta > 0.2 && this.rightAttackDelta < 0.4)
                {


                    image(this.rightAttack[1],this.pos.x,this.pos.y-40,400,400);
                }else
                {
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    image(this.rightAttack[0],this.pos.x,this.pos.y-40,400,400);
                    
                    
                }
            //왼쪽 공격.
            }else if(this.animState == 4)
            {
                
                this.leftAttackDelta += deltaTime/1000;
                if(this.leftAttackDelta > 1.85)
                {
                    image(this.leftAttack[7],this.pos.x,this.pos.y-40,400,400);
                    console.log("add2");
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.leftAttackDelta = 0
                    this.patternIs = 0;
                    
                }else if(this.leftAttackDelta > 1.60 && this.leftAttackDelta < 1.85)
                {
                    
                    image(this.leftAttack[7],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 0;
                    this.isAttack = 1;
                }
                else if(this.leftAttackDelta > 1.35 && this.leftAttackDelta < 1.60)
                {
                    image(this.leftAttack[6],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = -600;
                    this.wide = 0;
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                }else if(this.leftAttackDelta > 1.10 && this.leftAttackDelta < 1.35)
                {
                    
                    image(this.leftAttack[5],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = 0;
                }else if(this.leftAttackDelta > 0.85 && this.leftAttackDelta < 1.10)
                {
                    
                    image(this.leftAttack[4],this.pos.x,this.pos.y-40,400,400);
                    this.vel.x = -600;
                    this.wide = 1;
                    this.isAttack = 1;
                }else if(this.leftAttackDelta > 0.6 && this.leftAttackDelta < 0.85)
                {
                    
                    image(this.leftAttack[3],this.pos.x,this.pos.y-40,400,400);
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                }else if(this.leftAttackDelta > 0.4 && this.leftAttackDelta<0.6)
                {
                    
                    this.isCanParry = 1;
                    this.isAttack = 1;
                    image(this.leftAttack[2],this.pos.x,this.pos.y-40,400,400);
                }else if(this.leftAttackDelta > 0.2 && this.leftAttackDelta < 0.4)
                {


                    image(this.leftAttack[1],this.pos.x,this.pos.y-40,400,400);
                }else
                {
                    this.isCanParry = 0;
                    this.isAttack = 0;
                    this.playerShieldCheck = 0;
                    image(this.leftAttack[0],this.pos.x,this.pos.y-40,400,400);
                    
                    
                }
            }else if(this.animState == 5)
            {
                this.magicDeltaTime += deltaTime/1000;
                if(this.magicDeltaTime > 2.6)
                {
                    image(this.rightAttack[20],this.pos.x,this.pos.y-40,400,400);
                    this.animState = 0;
                    this.behaviorCheck = 0;
                    this.magicDeltaTime = 0;
                    this.patternIs = 0;


                    
                }else if(this.magicDeltaTime >2.4 && this.magicDeltaTime < 2.6)
                {
                    image(this.rightAttack[20],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >2.2 && this.magicDeltaTime < 2.4)
                {
                    image(this.rightAttack[19],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >2.0 && this.magicDeltaTime < 2.2)
                {
                    image(this.rightAttack[18],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >1.8 && this.magicDeltaTime < 2.0)
                {
                    image(this.rightAttack[17],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >1.6 && this.magicDeltaTime <1.8 )
                {
                    image(this.rightAttack[16],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime > 1.4&& this.magicDeltaTime <1.6 )
                {
                    image(this.rightAttack[15],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime > 1.2&& this.magicDeltaTime < 1.4)
                {
                    image(this.rightAttack[14],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime > 1.0&& this.magicDeltaTime < 1.2)
                {
                    image(this.rightAttack[13],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >0.8 && this.magicDeltaTime < 1.0)
                {
                    image(this.rightAttack[12],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >0.6 && this.magicDeltaTime < 0.8)
                {
                    image(this.rightAttack[11],this.pos.x,this.pos.y-40,400,400);
                }else if(this.magicDeltaTime >0.4 && this.magicDeltaTime < 0.6)
                {
                    image(this.rightAttack[10],this.pos.x,this.pos.y-40,400,400);
                    if(this.magicCheck == 0)
                    {
                        this.playerPosCheck = 1;
                    }else{
                        this.playerPosCheck = 0;
                    }
                    this.magicCheck = 1;
                }else if(this.magicDeltaTime >0.2 && this.magicDeltaTime < 0.4)
                {
                    image(this.rightAttack[9],this.pos.x,this.pos.y-40,400,400);
                }else{
                    image(this.rightAttack[8],this.pos.x,this.pos.y-40,400,400);
                }

                
            }
            
        }

        //this.behaviorCheck = 1;
        // this.animState = 1;
        // this.acc.x = 0;
        // this.checkA = 1;
        // this.leftWalkDelta = 0;
        // this.rightWalkDelta = 0;




        // if(this.isAttacked == 1 && this.effectDelta < 0.15)
        // {
        //     this.effectDelta += deltaTime/1000;
        //     image(effectImage,this.pos.x,this.pos.y);
        // }else if(this.isAttacked == 0){
        //     this.effectDelta = 0
        // }
        if(this.isAttacked == 1)
        {
            image(effectImage,this.pos.x,this.pos.y);
        }else if(this.isAttacked == 0){
            
        }
        pop();



        
        
    }

    magic(player)
    {
        // circle(this.attackLeft.x,this.attackLeft.y,30);
        if(this.playerPosCheck == 1)
        {
            this.playerPos_x = player.pos.x-75;
            this.playerPos_y = 400;
        }
       if(this.magicCheck == 1)
       {
            
            this.magicCastDeltaTime += deltaTime/1000;
            if(this.magicCastDeltaTime >1.8)
            {
            //12
                image(this.magicImage[5],this.playerPos_x,this.playerPos_y-120,300,300);
                
                this.magicCheck = 0;
                this.isMagic = 0;
                this.magicCastDeltaTime = 0;
                this.range = 0;
            }else if(this.magicCastDeltaTime >1.4 && this.magicCastDeltaTime <1.8 )
            {
                image(this.magicImage[5],this.playerPos_x,this.playerPos_y-120,300,300);
                this.range = 200;
            }else if(this.magicCastDeltaTime >1.2 && this.magicCastDeltaTime < 1.4)
            {
                image(this.magicImage[4],this.playerPos_x,this.playerPos_y-120,300,300);
            }else if(this.magicCastDeltaTime >1.0 && this.magicCastDeltaTime < 1.2)
            {
                this.range = 150;
                image(this.magicImage[3],this.playerPos_x,this.playerPos_y-120,300,300);
            }else if(this.magicCastDeltaTime > 0.8&& this.magicCastDeltaTime < 1.0)
            {
                this.range = 100;
                image(this.magicImage[2],this.playerPos_x,this.playerPos_y-120,300,300);
            }else if(this.magicCastDeltaTime > 0.6&& this.magicCastDeltaTime < 0.8)
            {
                this.isMagic = 1;
                this.range = 50;
                console.log(this.isMagic);
                image(this.magicImage[1],this.playerPos_x,this.playerPos_y-120,300,300);
                
                
            }else{
                image(this.magicImage[0],this.playerPos_x,this.playerPos_y-120,300,300);
            }

            if(dist(this.pos.x,this.pos.y,player.pos.x,player.pos.y) < 150)
            {
                
                    
                    this.pattern = 0;
                    this.magicDeltaTime = 0;
                    this.magicCheck = 0;
                    this.isMagic = 0;
                    this.magicCastDeltaTime = 0;
                    this.range = 0;
                    this.rightAttackDelta = 0;
                    this.leftAttackDelta = 0;
                    this.behaviorCheck = 0;
                    
                
            }



           
       }else{

       }

       console.log(this.animState, this.pattern);
    }




































    behavior(player,platform)
    {
        if(this.patternIs == 1)
        {
           
        if((this.downRight.x> platform.x && this.downRight.x < platform.x+platform.width+this.right) && ((this.downRight.y >= platform.y-10) && (this.downRight.y <=platform.y+15)))
        {

        if(this.pattern == 0)
{
        if(this.checkRange(platform.x,platform.x+platform.width,player.downLeft.x,player.downRight.x) && this.checkRange(player.downRight.y,player.upLeft.y,platform.y,platform.y-500))
        {
            
            this.isBehavior =1;
            this.isPlayer = 1;
            if(player.pos.x+50 < this.pos.x && this.behaviorCheck == 0 && this.isAttack == 0  && this.isAttacked == 0)
            {
                
                // this.vel.x = 0;
                this.animState = 1;
                console.log("여기가 일단 들어와야지 아루");
                // this.vel.x = -(this.pos.x-player.pos.x)
                this.vel.x = -350;
                this.checkA = 1;
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 180 )
                    {
                        
                        this.behaviorCheck = 1;
                        this.animState = 4;
                        this.acc.x = 0;
                        this.checkA = 1;
                        this.leftWalkDelta = 0;
                        this.rightWalkDelta = 0;
                        this.vel.x = 0;
                        console.log("여기인가erer32424");
                    }
                
            }else if(player.pos.x+40 > this.pos.x && this.behaviorCheck == 0 && this.isAttack == 0 && this.isAttacked == 0){
                // this.vel.x = 0;
                this.animState = 2;
                // this.vel.x = (player.pos.x-this.pos.x)
                this.vel.x = 350 + random(-50,50);
                
                this.checkA = 0;
                
                
                    if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) < 120)
                    {
                        
                        this.behaviorCheck = 1;
                        this.animState = 3;
                        this.acc.x = 0;
                        this.checkA = 0;
                        this.rightWalkDelta = 0;
                        this.leftWalkDelta = 0;
                        this.vel.x = 0;
                        console.log("여기인가ere111r");
                    }
                
            }
        }else if(dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y) > 400 && !(this.animState == 3 || this.animState == 4))
        {
            this.isPlayer = 0;
            this.isBehavior = 0;
        }
    }else{
        console.log("여기로 들어와지나 설마?");
        this.behaviorCheck = 1;
        this.animState = 5;
        this.acc.x = 0;
        this.checkA = 1;
        this.leftWalkDelta = 0;
        this.rightWalkDelta = 0;
        this.vel.x = 0;
    }

    }
}else{
    this.animState = 0;
}

    }



    update()
    {
        this.gravityVel.addTo(this.accGravity);
        this.gravityVel.limit(15);
        // this.vel.addTo(this.acc);
        
        this.pos.addTo(this.gravityVel);
        
        // this.pos.addTo(this.vel);
        this.pos.addToTimeDelta(this.vel);
        
        
        
        
        
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

        


        if(this.checkA == 1)
        {
            this.attackLeft.set(this.pos.x-90,this.pos.y-30);
        }else{
            this.attackLeft.set(this.pos.x+30,this.pos.y-30);
        }

    





        

    }

    moveUpdate()
    {
        // if(this.isPlayer == 0)
        // {
        //     this.moveDelta += deltaTime/1000;
        //     if(this.moveDelta > 4)
        //     {
        //         this.moveState = floor(random(0,4));
        //         this.moveDelta = 0;
        //         if(this.moveState == 1)
        //         {
                    
        //             // this.acc.set(-1,0);
        //             this.vel.x = -300;
        //             this.animState = 1;
        //         }else if(this.moveState == 2)
        //         {
        //             // this.acc.set(1,0);
        //             this.vel.x = 300;
        //             this.animState = 2;
        //         }
        //     }
        //     if(this.moveState == 0)
        //     {
        //         this.acc.set(0,0);
        //         this.vel.set(0,0);
        //         this.animState = 0;
        //     }
        // }
        // this.vel.limit(2);

    }

    platformCheck(platform)
    {
        
        if(platform.type == 0)
        {

            
        if(this.isAttacked == 0)
        {
            if((this.downRight.x> platform.x && this.downRight.x < platform.x+platform.width+this.right) && ((this.downRight.y >= platform.y-10) && (this.downRight.y <=platform.y+15)))
            {

            
            //!(((this.ray.x> platform.x && this.ray.x+10 < platform.x+platform.width) && (this.ray.y >= platform.y-3)) && ((this.ray.y+50 <=platform.y+platform._height)))     
            // if(!(this.checkRange(this.ray.x,this.ray.x+10,platform.x,platform.x+platform.width) && this.checkRange(this.ray.y,this.ray.y+50,platform.y-3,platform.y+platform._height)) && this.isBehavior == 1)
            // {
                
            //     console.log(platform);
            //     this.animState = 0;
            //     this.acc.x = 0;
            //     this.vel.x = 0;
            //     this.gravityVel.x = 0;

            // }else 
            if(!(this.checkRange(this.ray.x,this.ray.x+10,platform.x,platform.x+platform.width) && this.checkRange(this.ray.y,this.ray.y+50,platform.y-3,platform.y+platform._height)))
            {
                if(this.vel.x > 0)
                {
                    this.animState = 1;
                    this.behaviorCheck = 0;
                    this.isAttack =0;
                    this.leftAttackDelta = 0
                    this.rightAttackDelta = 0
                }else if(this.vel.x <0){
                    this.animState = 2;
                    this.behaviorCheck = 0;
                    this.isAttack =0;
                    this.leftAttackDelta = 0
                    this.rightAttackDelta = 0
                }
                this.vel.x *= -1;
            }
        }
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
        
        
        // if(player.checkA == 0)
        // {

        
            
        if(this.checkRange(player.attackLeft.x,player.attackLeft.x+60,this.upLeft.x,this.upRight.x) && this.checkRange(player.attackLeft.y,player.attackLeft.y+50,this.upRight.y,this.downRight.y))
            {
                if(player.isAttack == 1)
        {   
                if(this.life >0)
                {    
                this.life -= 1;
                //오른쪽 네모
                if(player.checkA == 0 )
                {
                    this.isAttacked = 1;
                    this.gravityVel.addTo(new Vec2(5,-10));
                    
                }else{
                    this.isAttacked = 1;
                    this.gravityVel.addTo(new Vec2(-5,-10));
                    
                }
            }
            player.isAttack = 0;
        }
            
    }
        
    }




    checkAttack(player)
    {
        
        // rect(this.playerPos_x+this.rightAttackRange,this.playerPos_y,this.rightAttackRange+100,50);
        // rect(this.playerPos_x-(this.rightAttackRange*2),this.playerPos_y,200,50);
        // rect(this.attackLeft.x-20,this.attackLeft.y,70,50);
        // circle(this.attackLeft.x,this.attackLeft.y,30);
        if(this.playerShieldCheck == 0)
        {
            player.shieldCheck = 0;
        }
        if(this.isAttack == 1 && player.attackedCheck == 0 && player.checkRoll == 0)
        {  

            if(player.life >0)
            {   
                
                if(this.checkA == 0)
                {
                 
                    if(this.wide == 0 && this.checkRange(this.attackLeft.x,this.attackLeft.x+110,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y-10,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        
                        
                        //오른쪽 네모
                        if(player.isGuard == 0)
                        {
                            if(player.attackedCheck == 0)
                            {
                                player.life -= 1;
                            }

                            player.attackedCheck = 1;
                            
                            
                            // player.gravityVel.addTo(new Vec2(2,-2));
                            // player.pos.x += 100;
                            player.attackedVel.x = 300;
                            
                            
                        }else{
                            if(this.playerShieldCheck == 0)
                            {
                                player.shieldCount -= 1;
                                player.shieldCheck = 1;
                                console.log("여기인가?");
                            }
                            this.playerShieldCheck = 1;
                            player.shieldVel.x = 300;
                        }
                        
                        
                    }else if(this.wide == 1 && this.checkRange(this.attackLeft.x,this.attackLeft.x+110,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y-100,this.attackLeft.y+50,player.upLeft.y,player.downRight.y)){
                        if(player.isGuard == 0 )
                        {
                            if(player.attackedCheck == 0)
                            {
                                player.life -= 1;
                            }

                            player.attackedCheck = 1;
                            
                            
                            // player.gravityVel.addTo(new Vec2(2,-2));
                            // player.pos.x += 100;
                            player.attackedVel.x = 300;
                            
                            
                        }else{
                        
                            if(this.playerShieldCheck == 0)
                            {
                                player.shieldCount -= 1;
                                player.shieldCheck = 1;
                                console.log("여기인가?");
                            }
                            this.playerShieldCheck = 1;
                            player.shieldVel.x = 300;
                            
                            
                        }
                    }
                }else{
                    if(this.wide == 0 && this.checkRange(this.attackLeft.x-40,this.attackLeft.x+70,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y-10,this.attackLeft.y+50,player.upLeft.y,player.downRight.y))
                    {

                        
                        
                        if(player.isGuard == 0)
                        {
                            if(player.attackedCheck == 0)
                            {
                                player.life -= 1;
                            }

                            player.attackedCheck = 1;
                            
                            
                            // player.gravityVel.addTo(new Vec2(2,-2));
                            // player.pos.x += 100;
                            player.attackedVel.x = -300;
                            
                            
                        }else{
                            if(this.playerShieldCheck == 0)
                            {
                                player.shieldCount -= 1;
                                player.shieldCheck = 1;
                                console.log("여기인가?");
                            }
                            this.playerShieldCheck = 1;
                            player.shieldVel.x = -300;
                        }
                        
                        
                    }else if(this.wide == 1 && this.checkRange(this.attackLeft.x-40,this.attackLeft.x+70,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y-100,this.attackLeft.y+50,player.upLeft.y,player.downRight.y)){

                        if(player.isGuard == 0)
                        {
                            if(player.attackedCheck == 0)
                            {
                                player.life -= 1;
                            }

                            player.attackedCheck = 1;
                            
                            
                            // player.gravityVel.addTo(new Vec2(2,-2));
                            // player.pos.x += 100;
                            player.attackedVel.x = -300;
                            
                            
                        }else{
                            if(this.playerShieldCheck == 0)
                            {
                                player.shieldCount -= 1;
                                player.shieldCheck = 1;
                                console.log("여기인가?");
                            }
                            this.playerShieldCheck = 1;
                            player.shieldVel.x = -300;
                        }
                    }
                }
                
                
                }
                //매직부분
            }else if(this.isMagic == 1 && player.attackedCheck == 0)
            {
                
                if(player.life >0)
                {   
                    
                   
                        
                        console.log("여기는 일단 맞는가?");
                        if(this.checkRange(this.playerPos_x+50,this.playerPos_x+250,player.upLeft.x,player.upRight.x) && this.checkRange(this.attackLeft.y+70-this.range,this.attackLeft.y+70,player.upLeft.y,player.downRight.y))
                        {
    
                            
                            
                            //오른쪽 네모
                            
                                if(player.attackedCheck == 0)
                                {
                                    player.life -= 1;
                                }
    
                                player.attackedCheck = 1;
                                
                            
                            
                        }else{
    
                        }
                    
                    
                    
                    }
            }
        }

}