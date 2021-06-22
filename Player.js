const MAIN = 0;
const RIGHT = 1;
const LEFT = 2;
const LEFTATTACK = 3;
const RIGHTATTACK = 4;
const LEFTGUARD = 5;
const RIGHTGUARD = 6;
const RIGHTROLL = 7;
const LEFTROLL = 8;




class Player
{
    constructor(_defaultImage,_rightImage,_leftImage,_leftAttackImage,_rightAttackImage,_guardRight,_guardLeft,_uiImage,RollImage)
    {

        this.pos = new Vec2(100,500);
        this.gravityVel = new Vec2(0,0);
        this.accGravity = new Vec2(0,0.5);
        this.moveAcc = new Vec2(0,0);
        this.moveVel = new Vec2(0,0);
        this.jumpVel = new Vec2(0,0);
        this.vel = new Vec2(0,0);
        this.attackedVel = new Vec2(0,0);
        this.shieldVel = new Vec2(0,0);
        


        this.animState = 0;
        //defualtImage
        this.animDefaultDelta = 0;

        //RightMotion
        this.RightDeltaTime = 0;
        
        //LeftButton
        this.LeftDeltaTime = 0;

        //LeftAttack
        this.LeftAttackDeltaTime = 0;

        //RightAttack
        this.RightAttackDeltaTime = 0;


        //JumpTime
        this.jumpTime = 0 ;

        //attackCheck
        this.attackCheck = 0;

        //카메라 체크
        this.cameraR = false;
        this.cameraL = false;

        //오른쪽 꼭짓점.
        this.downRight = new Vec2(this.pos.x+62,this.pos.y+100);

        //왼쪽 꼭짓점.
        this.downLeft = new Vec2(this.pos.x+37,this.pos.y+100);

        //오른쪽 위 꼭짓점.
        this.upLeft = new Vec2(this.pos.x+30,this.pos.y+20);
        //왼쪽위 꼭짓점.
        this.upRight = new Vec2(this.pos.x+62,this.pos.y+20);

        //내려가는거 체크.
        this.downCheck = false;
        //내려가는거 시간 체크
        this.downCheckDelta = 0;
        //
        this.downCheck_2 = false;

        

        


        this.defaultImage = _defaultImage;
        this.rightImage = _rightImage;
        this.leftImage = _leftImage;
        this.leftAttackImage = _leftAttackImage;
        this.rightAttackImage = _rightAttackImage;
        this.guardRightImage = _guardRight;
        this.guardLeftImage = _guardLeft;
        this.RollImage = RollImage;



        this.defaultCheck = 0;


        //Player Collision


        //점프판정?
        this.isJump = false;
        
        this.checkCameraX = 600;
        this.checkCameraX_L = 500;
        this.attackLeft = new Vec2(0,0);

        //왼쪽 오른쪽인지 체크하는 코드.
        this.checkA = 0;
        this.isAttack = 0;


        //isAttack 을 한번만 실행되게 하는 것.
        this.attOne = 0;

        //공격받는걸 한번만 되게 체크하는거.
        this.attackedCheck = 0;
        
        this.attackedDelta = 0;





        //가드 중?
        this.isGuard = 0;
        //패링가능?
        this.isParrying = 0;
        //가드 오른쪽 델타타임.
        this.guardRightDeltaTime = 0;
        //가드 왼쪽 델타타임.
        this.guardLeftDeltaTime = 0;
        //가드를 다시 채워주는 값.
        this.guardRefillDelta = 0;



        //체력.
        this.life = 5;
        //방어 갯수.
        this.shieldCount = 3;
        //한번만 떨어지게 하는것
        this.shieldCheck = 0;

        //uiImage
        this.uiImage = _uiImage;

        //왼쪽 콤보 상태.
        this.lComboState = 0;
        this.lComboDelta = 0;
        //오른쪽콤보 상태.
        this.rComboState = 0;
        this.rComboDelta = 0;


        //
        this.jumpDeltaTime = 0;
        this.jumpForce = 1600;
        this.doJump = false;


        // Gravity Force.
        this.gravityForce = 900;
        //jumpHeight





        //checkCamera
        this.checkMoveCamera = 0;
        //checkCamera




        //구르기 체크.
        this.checkRoll = 0;
        //구르기 추가 속도.
        this.rollVec = new Vec2(0,0);
        //구를때 deltaTime.
        this.rollDeltaTime = 0;

        //시작을 알림
        this.startPlay = 0;

    }

    update()
    {
        
        // this.moveVel.addTo(this.moveAcc);
        // this.moveVel.limit(5);



        // this.gravityVel.addTo(this.accGravity);
        // this.gravityVel.addTo(this.jumpVel);
        // this.gravityVel.limit(15)
        
        this.pos.y +=  this.gravityForce * deltaTime/1000;

        if(this.isJump && this.jumpForce > 0)
        {
            this.gravityForce = 900;
            this.jumpDeltaTime += deltaTime / 1000;
            this.pos.y -= this.jumpForce * deltaTime/1000;
            this.jumpForce -= this.gravityForce * deltaTime / 1000;
            
            if(this.jumpForce > this.gravityForce)
            {
                this.doJump = true;
            }else{
                this.doJump = false;
            }
            
        }else{
            this.jumpForce = 1600;
            this.isJump = false;
            this.gravityForce = 900;
        }
        




        // this.vel.addTo(this.gravityVel);
        // this.vel.addTo(this.moveVel);
        // this.vel.addTo(this.jumpVel);
        // this.vel.limit(7);
        // this.vel.limitY(7)
        
        
        this.pos.addToTimeDelta(this.moveVel);
        this.pos.addToTimeDelta(this.rollVec);
        if(this.attackedDelta <0.2 && this.attackedDelta > 0)
        {
            
            this.pos.addToTimeDelta(this.attackedVel);
        }

        if(this.shieldCheck == 1 )
        {
            this.pos.addToTimeDelta(this.shieldVel);
        }


        
        
        
        
        // this.pos.addTo(this.gravityVel);
    
        //this.pos.x+37,this.pos.y+100
        // this.downLeft.setX(this.pos.x+30);
        // this.downLeft.setY(this.pos.y+100);
        // //this.pos.x+62,this.pos.y+100
        // this.downRight.setX(this.pos.x+69);
        // this.downRight.y = this.pos.y+100;
        // this.upLeft.set(this.pos.x+30,this.pos.y+20);
        // this.upRight.set(this.pos.x+69,this.pos.y+20);


        ////+80 -30   , rect(this.pos.x-30,this.pos.y+40,60,50)
        //키로 하자 키로. vel 말고
        // if(this.moveVel.x > 0 )
        // {
        //     
        // }else if(this.moveVel.x < 0)
        // {
        //     console.log("addd");
        //     this.attackLeft.set(this.pos.x-30,this.pos.y+40);
        // }else{
        //     this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        // }
        
        if(this.checkA == 1)
        {
            this.attackLeft.set(this.pos.x-30,this.pos.y+40);
        }else{
            this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        }
        // rect(this.attackLeft.x,this.attackLeft.y,60,50);
        // quad(this.upLeft.x,this.upLeft.y,this.upRight.x,this.upRight.y,this.downRight.x,this.downRight.y,this.downLeft.x,this.downLeft.y);
        
        
        // circle(this.pos.x,this.pos.y,30);
        
    }



    updateAnim()
    {
        this.animDefaultDelta += deltaTime;
        if(this.shieldCount < 3)
        {
            this.guardRefillDelta += deltaTime/1000;
            if(this.guardRefillDelta > 5)
            {
                this.guardRefillDelta = 0;
                this.shieldCount++;
            }
        }
        


        if(this.attackedDelta > 1.8)
        {
            this.attackedCheck = 0;
            this.attackedDelta = 0;
        }


        //어택드 체크
        if(this.attackedCheck == 1)
        {
            
            
            this.attackedDelta += deltaTime/1000;
            tint(255, 128);
            
        }
        //페링 타이밍 재주는 거.
        if(this.guardLeftDeltaTime >0.3 && this.guardLeftDeltaTime < 0.5)
        {
            fill('red');
            rect(this.pos.x+30,this.pos.y,this.guardLeftDeltaTime*30,10);
        }else{
            rect(this.pos.x+30,this.pos.y,this.guardLeftDeltaTime*30,10);
        }

        if(this.guardRightDeltaTime >0.3 && this.guardRightDeltaTime < 0.5)
        {
            fill('red');
            rect(this.pos.x+30,this.pos.y,this.guardRightDeltaTime*30,10);
        }else{
            rect(this.pos.x+30,this.pos.y,this.guardRightDeltaTime*30,10);
        }


        

        if(this.animState == MAIN)
        {
            if(this.animDefaultDelta < 1000 && this.animDefaultDelta >600 )
            {
                image(this.defaultImage[1],this.pos.x,this.pos.y,100,100);
                this.defaultCheck = 1;
            }else
            {
                image(this.defaultImage[0],this.pos.x,this.pos.y,100,100);
                if(this.defaultCheck == 1)
                {
                    this.animDefaultDelta = 0;
                    this.defaultCheck = 0;
                }
            }

        }else if(this.animState == RIGHT && this.animState != RIGHTROLL)
        {
            
            
            this.RightDeltaTime += deltaTime/1000;
            if(this.RightDeltaTime > 0.75)
            {
                
                this.RightDeltaTime = 0;
                image(this.rightImage[4],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.6)
            {
                image(this.rightImage[4],this.pos.x-10,this.pos.y,130,130);
                
            }else if(this.RightDeltaTime > 0.45)
            {
                
                image(this.rightImage[3],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.3)
            {
                
                image(this.rightImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightDeltaTime > 0.05)
            {
                
                image(this.rightImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.rightImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFT)
        {
            
            
            this.LeftDeltaTime += deltaTime/1000;
            if(this.LeftDeltaTime > 0.75)
            {
                
                this.LeftDeltaTime = 0;
                image(this.leftImage[4],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.6)
            {
                image(this.leftImage[4],this.pos.x-10,this.pos.y,130,130);
                
            }else if(this.LeftDeltaTime > 0.45)
            {
                
                image(this.leftImage[3],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.3)
            {
                
                image(this.leftImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftDeltaTime > 0.05)
            {
                
                image(this.leftImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.leftImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFTATTACK && this.lComboState == 0)
        {
            
            this.LeftAttackDeltaTime += deltaTime/1000;
            if(this.LeftAttackDeltaTime > 0.6)
            {
                image(this.leftAttackImage[6],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.LeftAttackDeltaTime = 0;
                this.lComboState = 1;
                
            }else if(this.LeftAttackDeltaTime > 0.5)
            {
                this.attOne = 0;
                image(this.leftAttackImage[5],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftAttackDeltaTime > 0.4)
            {
                image(this.leftAttackImage[4],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftAttackDeltaTime > 0.3)
            {
                image(this.leftAttackImage[3],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 0)
                {
                    this.isAttack = 1;
                    this.attOne = 1;
                }
                
            }else if(this.LeftAttackDeltaTime > 0.2)
            {
                image(this.leftAttackImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.LeftAttackDeltaTime > 0.1)
            {
                image(this.leftAttackImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.leftAttackImage[0],this.pos.x-10,this.pos.y,130,130);
            }


        }else if(this.animState == LEFTATTACK && this.lComboState == 1)
        {
            this.LeftAttackDeltaTime += deltaTime/1000;
            if(this.LeftAttackDeltaTime > 0.35)
            {
                image(this.leftAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.LeftAttackDeltaTime = 0;
                this.lComboState = 0;
                this.lComboDelta = 0;
                this.attOne = 0;
            }else if(this.LeftAttackDeltaTime > 0.25 && this.LeftAttackDeltaTime < 0.35)
            {
                image(this.leftAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.pos.addToTimeDelta(new Vec2(-150,0));
                //else if(this.RightAttackDeltaTime > 0.25 && this.RightAttackDeltaTime < 0.35)
            }else if(this.LeftAttackDeltaTime > 0.15 && this.LeftAttackDeltaTime < 0.25)
            {
                image(this.leftAttackImage[8],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 0)
                {
                    this.isAttack = 1;
                    this.attOne = 1;
                }
            }else{
                
                image(this.leftAttackImage[7],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == RIGHTATTACK && this.rComboState == 0)
        {
            
            this.RightAttackDeltaTime += deltaTime/1000;
            
            if(this.RightAttackDeltaTime > 0.6)
            {
                image(this.rightAttackImage[6],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.RightAttackDeltaTime = 0;
                this.rComboState = 1;
            }else if(this.RightAttackDeltaTime > 0.5)
            {
                this.attOne = 0;
                image(this.rightAttackImage[5],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightAttackDeltaTime > 0.4)
            {
                image(this.rightAttackImage[4],this.pos.x-10,this.pos.y,130,130);
                
            }else if(this.RightAttackDeltaTime > 0.3)
            {
                image(this.rightAttackImage[3],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 0)
                {
                    this.isAttack = 1;
                    this.attOne = 1;
                }
                
            }else if(this.RightAttackDeltaTime > 0.2)
            {
                image(this.rightAttackImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.RightAttackDeltaTime > 0.1)
            {
                image(this.rightAttackImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.rightAttackImage[0],this.pos.x-10,this.pos.y,130,130);
            }


        }else if(this.animState == RIGHTATTACK && this.rComboState == 1)
        {
            this.RightAttackDeltaTime += deltaTime/1000;
            if(this.RightAttackDeltaTime > 0.35)
            {
                image(this.rightAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.attackCheck = 0;
                this.RightAttackDeltaTime = 0;
                this.rComboState = 0;
                this.rComboDelta = 0;
                this.attOne = 0;
            }else if(this.RightAttackDeltaTime > 0.25 && this.RightAttackDeltaTime < 0.35)
            {
                image(this.rightAttackImage[9],this.pos.x-10,this.pos.y,130,130);
                this.pos.addToTimeDelta(new Vec2(150,0));

            }else if(this.RightAttackDeltaTime > 0.15 && this.RightAttackDeltaTime < 0.25)
            {
                
                image(this.rightAttackImage[8],this.pos.x-10,this.pos.y,130,130);
                if(this.attOne == 0)
                {
                    
                    this.isAttack = 1;
                    this.attOne = 1;
                }
            }else{
                
                image(this.rightAttackImage[7],this.pos.x-10,this.pos.y,130,130);
            }


        }else if(this.animState == RIGHTGUARD)
        {
            this.guardRightDeltaTime += deltaTime/1000;
            if(this.guardLeftDeltaTime > 0.5)
            {
                image(this.guardRightImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
            else if(this.guardRightDeltaTime >0.5 && this.isGuard == 1)
            {
                image(this.guardRightImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
                
            }else if (this.guardRightDeltaTime >0.4)
            {
                image(this.guardRightImage[4],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardRightDeltaTime >0.3)
            {
                image(this.guardRightImage[3],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardRightDeltaTime >0.2)
            {
                image(this.guardRightImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else if (this.guardRightDeltaTime >0.1)
            {
                image(this.guardRightImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else{
                image(this.guardRightImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
        }else if(this.animState == LEFTGUARD)
        {
            this.guardLeftDeltaTime += deltaTime/1000;
            if(this.guardRightDeltaTime > 0.5)
            {
                image(this.guardLeftImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
            else if(this.guardLeftDeltaTime >0.5 && this.isGuard == 1)
            {
                image(this.guardLeftImage[5],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
                console.log(this.guardLeftDeltaTime);
            }else if (this.guardLeftDeltaTime >0.4)
            {
                image(this.guardLeftImage[4],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardLeftDeltaTime >0.3)
            {
                image(this.guardLeftImage[3],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 1;
            }else if (this.guardLeftDeltaTime >0.2)
            {
                image(this.guardLeftImage[2],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else if (this.guardLeftDeltaTime >0.1)
            {
                image(this.guardLeftImage[1],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }else{
                image(this.guardLeftImage[0],this.pos.x-10,this.pos.y,130,130);
                this.isParrying = 0;
            }
        //
        }else if(this.animState == RIGHTROLL)
        {
            
            this.rollDeltaTime += deltaTime/1000;
            if(this.rollDeltaTime > 0.4)
            {
                image(this.RollImage[2],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.rollDeltaTime = 0;
                this.checkRoll = 0;
                this.rollVec.x = 0;
                

            }else if(this.rollDeltaTime > 0.2)
            {
                image(this.RollImage[2],this.pos.x-10,this.pos.y,130,130);
            }else if(this.rollDeltaTime > 0.1)
            {
                image(this.RollImage[1],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.RollImage[0],this.pos.x-10,this.pos.y,130,130);
            }
        }else if(this.animState == LEFTROLL)
        {
            this.rollDeltaTime += deltaTime/1000;
            if(this.rollDeltaTime > 0.4)
            {
                image(this.RollImage[5],this.pos.x-10,this.pos.y,130,130);
                this.animState = 0;
                this.rollDeltaTime = 0;
                this.checkRoll = 0;
                this.rollVec.x = 0;
                

            }else if(this.rollDeltaTime > 0.2)
            {
                image(this.RollImage[5],this.pos.x-10,this.pos.y,130,130);
            }else if(this.rollDeltaTime > 0.1)
            {
                image(this.RollImage[4],this.pos.x-10,this.pos.y,130,130);
            }else{
                image(this.RollImage[3],this.pos.x-10,this.pos.y,130,130);
            }
        }
        
        if(this.isGuard == 0)
        {
                
                this.guardRightDeltaTime = 0;
                this.guardLeftDeltaTime = 0;

        }

        if(this.rComboState > 0 && this.animState != RIGHTATTACK)
        {
            this.rComboDelta += deltaTime/1000;
        }
        if(this.rComboDelta > 2 && this.animState != RIGHTATTACK)
        {
            this.rComboState = 0;
            this.rComboDelta = 0;
        }

        if(this.lComboState > 0 && this.animState != LEFTATTACK)
        {
            this.lComboDelta += deltaTime/1000;
        }
        if(this.lComboDelta > 2 && this.animState != LEFTATTACK)
        {
            this.lComboState = 0;
            this.lComboDelta = 0;
        }

        
        
    }

    checkKeyboard()
    {
        // if(this.moveVel.x > 0 )
        // {
        //     this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        // }else if(this.moveVel.x < 0){
        //     console.log("addd");
        //     this.attackLeft.set(this.pos.x-30,this.pos.y+40);
        // }else{
        //     this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        // }




        //카메라
        // if(this.pos.x < this.checkCameraX){
                
        //     this.cameraR = false;
        //     this.cameraL = false;
            
        // }





        // 가만히있는상태.
        if(!keyIsPressed && this.attackCheck == 0 && this.checkRoll == 0)
        {
            
            this.animState = 0;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            // this.attackLeft.set(this.pos.x+80,this.pos.y+40);
            this.checkA = 0;
            this.isGuard = 0;
            
            
        }

        if(keyIsDown(65) && this.attackCheck == 0 && (!keyIsDown(37)) && this.checkRoll == 0)
            {
                
                this.animState = 4
                this.attackCheck = 1;
                this.moveVel.x = 0;
                this.moveAcc.x = 0;
                this.moveAcc.y = 0;
                this.isGuard = 0;
                this.checkA = 0;
                this.startPlay = 1;
                
            }
        
        // 오른쪽키가기.
        if(keyIsDown(39) && this.attackCheck == 0 && this.checkRoll == 0)
        {
            this.animDefaultDelta = 0;
            this.moveVel.x = 500;
            
            if(this.pos.x>600)
            {
                this.checkMoveCamera += 500 * deltaTime/1000;
            }else{
                this.checkMoveCamera=0
            }
            
            // if(this.pos.x > this.checkCameraX)
            // {
            //     this.cameraR = true;
            // }
            this.checkA = 0;
            this.startPlay = 1;
            

            

                       
            // if(this.checkRoll == 0)
            // {
                this.animState = 1;
            // }else{
            //     this.animState = RIGHTROLL;
            // }
            
            // this.attackLeft.set(this.pos.x+80,this.pos.y+40);
        }
        //왼쪽으로가기.
        if(keyIsDown(37) && this.attackCheck == 0 && this.checkRoll == 0)
        {
            this.animDefaultDelta = 0;
            this.animState = 2;
            this.moveVel.x = -500;
            
            if(this.pos.x>600)
            {
                this.checkMoveCamera -= 500 * deltaTime/1000;
            }else{
                this.checkMoveCamera=0
            }
                
            
            // if(this.pos.x < this.checkCameraX_L)
            // {  
            //     this.cameraL = true;
                
            // }
            // this.attackLeft.set(this.pos.x-30,this.pos.y+40);
            this.checkA = 1;
            this.startPlay = 1;
            

        }
        if(keyIsDown(65) && this.attackCheck == 0 && keyIsDown(37) && this.checkRoll == 0)
        {
            
            this.animState = 3
            this.attackCheck = 1;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            this.isGuard = 0;
            this.checkA = 1;
            console.log(this.checkA);
            this.startPlay = 1;
        }

        if(keyIsDown(65) && this.attackCheck == 0 && keyIsDown(39) && this.checkRoll == 0)
        {
            
            this.animState = 4
            this.attackCheck = 1;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            this.isGuard = 0;
            
            this.checkA = 0;
            this.startPlay = 1;
        }

        if(keyIsDown(32) && this.isJump == false && this.checkRoll == 0)
        {
            
            this.isJump = true;
            // this.attackLeft.set(this.pos.x+80,this.pos.y+40);
            this.checkA = 0;
            this.startPlay = 1;
        }

        if(keyIsDown(40) && this.checkRoll == 0)
        {
            this.downCheck = true;
            this.downCheck_2 = true;
            this.startPlay = 1;
        }else if(this.downCheckDelta > 0.3){
            this.downCheck = false;
            this.downCheck_2 = false;
            this.downCheckDelta = 0;
        }

        if(this.downCheck_2)
        {
            this.downCheckDelta += deltaTime/1000;
        }


        if(keyIsDown(68) && (!keyIsDown(37)) && (!keyIsDown(39)) && this.attackCheck == 0 && this.shieldCount >0 && this.checkRoll == 0)
        {
            console.log("68")
            this.isGuard = 1;
            this.checkA = 0;
            this.animState = RIGHTGUARD;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            this.startPlay = 1;
        }

        if(keyIsDown(68) && keyIsDown(37)&& this.attackCheck == 0 && this.shieldCount >0 && this.checkRoll == 0)
        {
            console.log("37")
            this.checkA = 1;
            this.isGuard = 1;
            this.animState = LEFTGUARD;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            this.startPlay = 1;
        }

        // 방어하는것.
        if(keyIsDown(68) && keyIsDown(39)&& this.attackCheck == 0 && this.shieldCount >0 && this.checkRoll == 0)
        {
            console.log("39");
            this.checkA = 0;
            this.isGuard = 1;
            this.animState = RIGHTGUARD;
            this.moveVel.x = 0;
            this.moveAcc.x = 0;
            this.moveAcc.y = 0;
            this.startPlay = 1;

        }
        if(!keyIsDown(68))
        {
            
            this.isGuard = 0;

        }

        //구르기
        if(keyIsDown(83) && keyIsDown(39) && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0)
        {
            console.log("여기는23?");
            this.animState = RIGHTROLL;
            this.checkRoll = 1;
            this.rollVec.x = 300;
            this.startPlay = 1;
            
        }

        if(keyIsDown(83) && keyIsDown(37) && this.checkRoll == 0 && !this.isJump && this.attackCheck == 0)
        {
            this.animState = LEFTROLL;
            this.checkRoll = 1;
            this.rollVec.x = -300;
            this.startPlay = 1;
        }








        
    }




    addGravity()
    {
        
        this.downLeft.setX(this.pos.x+30);
        this.downLeft.setY(this.pos.y+100);
        this.downRight.setX(this.pos.x+69);
        this.downRight.setY(this.pos.y+100);
        this.upLeft.set(this.pos.x+30,this.pos.y+20);
        this.upRight.set(this.pos.x+69,this.pos.y+20);
        
        
    }
    
    cameraMove()
    {
        if(this.cameraR == true)
        {
            this.checkCameraX += (this.jumpVel.x+this.checkMoveCamera+this.gravityVel.x+this.attackedVel.x);
            this.checkCameraX_L += (this.jumpVel.x+this.checkMoveCamera+this.gravityVel.x+this.attackedVel.x);
            return -(this.jumpVel.x+this.checkMoveCamera+this.gravityVel.x+this.attackedVel.x);
        }else if(this.cameraL == true)
        {
            this.checkCameraX += (this.jumpVel.x+this.moveVel.x+this.gravityVel.x+this.attackedVel.x);
            this.checkCameraX_L += (this.jumpVel.x+this.moveVel.x+this.gravityVel.x+this.attackedVel.x);
            return -(this.jumpVel.x+this.moveVel.x+this.gravityVel.x+this.attackedVel.x);
        }else{
            return 0;
        }
        
    }
    checkCamera()
    {
        
        if(this.pos.x < this.checkCameraX)
        {
            this.cameraL = false;
            this.cameraR = false;
        }
        if(this.pos.x >= this.checkCameraX)
        {
            
            this.cameraR = true;
        }else if((this.pos.x <= this.checkCameraX_L && keyIsDown(37)) || (this.pos.x <= this.checkCameraX_L && keyIsDown(68)) || (this.pos.x <= this.checkCameraX_L && this.attackedCheck == 1))
        {
            this.cameraL = true;
        }
    }


    
    checkAttack(monster)
    {
        
                
        
        

        if(this.attackCheck == 1)
        {

        
        if(this.isAttack == 1)
        {  

            for(var a = 0; a<monster.length;a++)
            {
                
                if(this.checkRange(this.attackLeft.x,this.attackLeft.x+60,monster[a].upLeft.x,monster[a].upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster[a].upLeft.y,monster[a].downRight.y))
                    {

                        if(monster[a].life >0)
                        {  
                        
                        monster[a].life -= 1;
                        
                        //오른쪽 네모
                        if(this.checkA == 0 )
                        {
                            console.log("add");
                            
                            if(monster[a].type != 3)
                            {
                                console.log("여기가 들어왔는가?");
                                monster[a].animState = 7;
                                monster[a].isAttacked = 1;
                            }
                            
                            monster[a].pos.addTo(new Vec2(15,0));
                            
                        }else{
                            
                            if(monster[a].type != 3)
                            {
                                console.log("여기가 들어왔는가?");
                                monster[a].animState = 8;
                                monster[a].isAttacked = 1;
                            }
                            monster[a].pos.addTo(new Vec2(-15,0));
                            
                        }
                        
                        
                        }
                    
                        
                    }

                    this.isAttack = 0;

                }
            
        }
        
        
    }
        
        


        
    }
    

    checkRange(min0,max0,min1,max1)
    {
        return max(min0, max0) >= min(min1,max1) && min(min0,max0) <= max(min1,max1);
    }

    checkAttacked(monster)
    {
        if(this.attackedCheck == 0)
        {

            
            if(this.checkRange(this.downLeft.x,this.downRight.x,monster.upLeft.x,monster.upRight.x) && this.checkRange(this.upLeft.y,this.downLeft.y,monster.upLeft.y,monster.downRight.y))
            {
                
                this.attackedCheck = 1;
                if(this.pos.x+50 > monster.pos.x)
                {
                    console.log("오른쪽입니다.")
                    this.life -= 1;
                    this.gravityVel.addTo(new Vec2(5,-10));
                }else{
                    console.log("왼쪽 입니다.");
                    this.life -= 1;
                    this.gravityVel.addTo(new Vec2(-5,-10));
                }
            }


        }

        if(this.isGuard == 1 && this.attackedCheck == 0)
        {

            if(this.checkA == 0)
            {
                    if(this.checkRange(this.attackLeft.x,this.attackLeft.x+10,monster.upLeft.x,monster.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster.upLeft.y,monster.downRight.y))
                    {
                        
                        console.log("막았습니다.1");
                        if(this.pos.x > monster.pos.x)
                        {
                            this.attackedVel.addTo(new Vec2(15,-2));
                            this.shieldCount -= 1;
                        }else{
                            this.attackedVel.addTo(new Vec2(-15,-2));
                            this.shieldCount -= 1;
                        }
                    }
            }else{
                if(this.checkRange(this.attackLeft.x+50,this.attackLeft.x+60,monster.upLeft.x,monster.upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster.upLeft.y,monster.downRight.y))
                {
                    console.log("막았습니다.2");
                    if(this.pos.x > monster.pos.x)
                    {
                        this.attackedVel.addTo(new Vec2(15,-2));
                        this.shieldCount -= 1;
                    }else{
                        this.attackedVel.addTo(new Vec2(-15,-2));
                        this.shieldCount -= 1;
                    }
                }
            }
            


        }
    }

    checkDist(monsterList)
    {
        let checkList = [];
        let min;
        let number = 0;


        for(var a =0;a< monsterList.length;a++)
        {
            // checkList.push(dist(this.pos.x+20,this.pos.y,monsterList[a].pos.x,monsterList[a].pos.y));
            if(monsterList[a].life == 0)
            {
                monsterList.splice(a,1);
            }
        }



        for(var a =0;a< monsterList.length;a++)
        {
            checkList.push(dist(this.attackLeft.x+30,this.attackLeft.y+25,monsterList[a].pos.x,monsterList[a].pos.y));
        }
        
        for(var a= 0;a<checkList.length;a++)
        {
            if(a == 0)
            {
                min = checkList[a];
                number = a;
                
            }else{
                if(min > checkList[a])
                {
                    min = checkList[a];
                    number = a
                }
            }

            
        }
        
        
        this.checkAttack(monsterList[number]);


    }


    seeUIImage(x)
    {
        if(this.life == 5)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
            image(this.uiImage[0],x+120,10,25,25);
            image(this.uiImage[0],x+150,10,25,25);

        }else if(this.life == 4)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
            image(this.uiImage[0],x+120,10,25,25);
        }
        else if(this.life == 3)
        {

            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
            image(this.uiImage[0],x+90,10,25,25);
        }else if(this.life == 2)
        {
            image(this.uiImage[0],x+30,10,25,25);
            image(this.uiImage[0],x+60,10,25,25);
        }else if(this.life == 1)
        {
            image(this.uiImage[0],x+30,10,25,25);
        }else
        {
            
        }
        // image(uiImage)
        if(this.shieldCount == 3)
        {
            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[1],x+1100-100,10,100,100);
            image(this.uiImage[1],x+1100-200,10,100,100);

        }else if(this.shieldCount == 2)
        {

            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[1],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
        }else if(this.shieldCount == 1)
        {
            image(this.uiImage[1],x+1100,10,100,100);
            image(this.uiImage[2],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
        }else if(this.shieldCount <= 0)
        {
            image(this.uiImage[2],x+1100,10,100,100);
            image(this.uiImage[2],x+1100-100,10,100,100);
            image(this.uiImage[2],x+1100-200,10,100,100);
            this.shieldCount = 0;
        }

        rect(x+1020,120,100/10*this.guardRefillDelta,10);
        rect(x+1120,120,0,10);


    }

    checkLeft()
    {
        if(this.pos.x < -25)
        {
            this.pos.x = -25;
        }
        
    }






















}