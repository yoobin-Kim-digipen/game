
let defaultImage = [];


let backgroundImage;
let rightMoveImage = [];
let leftMoveImage = [];
let leftAttackImage = [];
let rightAttackImage = [];
let rigthGuardImage = [];
let leftGuardImage = [];
let RRollImage = [];


let doorImage = [];

let verPlatForm;
let platFormImage;
// let hpImage;

let uiImage =[];


let slimeDefualt = [];

let skeletonDefault = [];
let skelRAttack = [];
let skelLAttack = [];
let skelMove = [];

let mageMove = [];
let mageRAttack = [];
let mageLAttack = [];
let magicImage = [];

let bigSkelRA = [];
let bigSkelLA = [];
let bigSkelL = [];
let bigSkelR = [];
let bigSkelEffect = [];

let archerMove = [];
let archerLA = [];
let archerRA = [];
let archerArrow = [];


let effectImage;

var defaultTime;
var defaultCheck = 0;

var player_x = 100;
var player_y = 200;

var cameraMove = 0;


let player;

let slime = [];
let mage = [];
let skeleton;


let platForm = [];
let mainImage = [];

let pikeImage = [];



let door;
let itemImage = [];
let key;



//현재가 몇번째 인지 확인하기.
let stateCheck;
let screenCheck = 0;
//스폰 체크 하는것.
let spawnCheck = 0;

//체크
let checkFrame = 0;

//체크 퍼즈.
let checkPause = false;
let cameraState = 2400;

let backgroundMusic;



function preload()
{

    //뮤직
    backgroundMusic = loadSound("./Assets/Music/The golden Forest.mp3");


    platFormImage = loadImage("./Assets/platForm.png");

    backgroundImage = loadImage("./Assets/bg_forest.png");
    defaultImage.push(loadImage("./Assets/Default.PNG"));
    defaultImage.push(loadImage("./Assets/Default_2.PNG"));
    rightMoveImage.push(loadImage("./Assets/Right/right_1.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_2.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_3.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_4.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_5.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_1.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_2.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_3.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_4.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_5.png"));

    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack1.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack2.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack3.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack4.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack5.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack6.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack7.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_1.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_2.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_3.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftSkill_1.PNG"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftSkill_2.PNG"));
    


    rightAttackImage.push(loadImage("./Assets/RightAttack/right_1.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_2.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_3.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_4.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_5.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_6.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_7.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_1.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_2.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_3.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/rightSkill_1.PNG"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/rightSkill_2.PNG"));
    
    
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_1.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_2.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_3.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_4.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_5.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_6.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_1.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_2.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_3.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_4.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_5.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_6.png"));

    
    RRollImage.push(loadImage("./Assets/RRoll/RollR_2.png"));
    RRollImage.push(loadImage("./Assets/RRoll/RollR_3.png"));
    RRollImage.push(loadImage("./Assets/RRoll/RollR_4.png"));

    RRollImage.push(loadImage("./Assets/LRoll/RollL_1.png"));
    RRollImage.push(loadImage("./Assets/LRoll/RollL_2.png"));
    RRollImage.push(loadImage("./Assets/LRoll/RollL_3.png"));

    mageMove.push(loadImage("./Assets/Mage/Move/moveR.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/moveL.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/RAttacked_1.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/LAttacked_1.png"));

    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_1.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_2.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_3.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_4.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_5.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_6.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_7.png"));

    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_1.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_2.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_3.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_4.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_5.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_6.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_7.png"));


    magicImage.push(loadImage("./Assets/Mage/Magic/magic_1.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_2.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_3.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_4.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_5.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_6.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_7.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_8.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_9.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_10.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_11.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_12.png"));

    //BigSkelton
    
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_1.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_2.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_3.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_4.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_5.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_6.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_7.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_8.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_9.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_10.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_11.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_12.png"));
    

    
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_2.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_3.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_4.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_5.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_6.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_7.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_8.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_9.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_10.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_11.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_12.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_13.png"));

    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_1.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_2.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_3.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_4.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_5.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_6.png"));

    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_1.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_2.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_3.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_4.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_5.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_6.png"));

    
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_3.png"));
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_4.png"));
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_5.png"));

    
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_3.png"));
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_4.png"));
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_5.png"));


    //Archer
    archerArrow.push(loadImage("./Assets/Archer/Arrow/LArrow.png"));
    archerArrow.push(loadImage("./Assets/Archer/Arrow/RArrow.png"));

    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_1.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_2.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_3.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_4.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_5.png"));

    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_1.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_2.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_3.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_4.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_5.png"));

    archerMove.push(loadImage("./Assets/Archer/Move/LAttacked.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/RAttacked.png"));

    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_2.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_3.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_4.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_5.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_6.png"));

    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_2.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_3.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_4.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_5.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_6.png"));

    mainImage.push(loadImage("./Assets/MainMenu.png"));
    mainImage.push(loadImage("./Assets/Start.png"));
    





    //수직 플랫폼
    verPlatForm = loadImage("./Assets/PlatForm/Vetical_Platfrom.png");
    //아이템
    itemImage.push(loadImage("./Assets/Item/Key.png"));

    //이펙트 이미지
    effectImage = loadImage("./Assets/Effect/Effect.png");

    //도어
    doorImage.push(loadImage("./Assets/PlatForm/door_1.png"));
    doorImage.push(loadImage("./Assets/PlatForm/door_2.png"));
    doorImage.push(loadImage("./Assets/PlatForm/door_3.png"));

    //Skeleton
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_1.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_2.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_3.png"));
    
    skeletonDefault.push(loadImage("./Assets/Skleton/AttackedRight/AttackedRIght_2.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/AttackedLeft/LeftAttacked_2.png"));



    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_1.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_2.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_3.png"));
    //여기부턴 스턴.
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_1.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_2.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_3.png"));

    //왼쪽공격
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_1.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_2.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_3.png"));

    //스턴
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_1.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_2.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_3.png"));

    //무브 오른쪽
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_1.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_2.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_3.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_4.png"));
    
    //무브 왼쪽
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_1.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_2.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_3.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_4.png"));

    //피격모션.
    skelMove.push(loadImage("./Assets/Skleton/attackedImage/attackedLeft.png"));
    skelMove.push(loadImage("./Assets/Skleton/attackedImage/attackedRight.png"));


    
    slimeDefualt.push(loadImage("./Assets/Slime/Slime_0.png"));
    slimeDefualt.push(loadImage("./Assets/Slime/Slime_1.png"));
    slimeDefualt.push(loadImage("./Assets/Slime/Slime_2.png"));
    slimeDefualt.push(loadImage("./Assets/Slime/slime_Attacked.png"));

    //UI
    // hpImage = loadImage("./Assets/UI/HP.png");
    uiImage.push(loadImage("./Assets/UI/HP.png"));
    uiImage.push(loadImage("./Assets/UI/shield.png"));
    uiImage.push(loadImage("./Assets/UI/brokenShield.png"));

    uiImage.push(loadImage("./Assets/UI/Roll_0.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_1.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_2.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_3.png"));

    uiImage.push(loadImage("./Assets/Effect/skillEffect.png"));
    
    uiImage.push(loadImage("./Assets/UI/Skill.png"));

    pikeImage.push(loadImage("./Assets/PlatForm/Pike_1.PNG"));
    pikeImage.push(loadImage("./Assets/PlatForm/Pike_2.PNG"));


    
    player = new Player(defaultImage, rightMoveImage , leftMoveImage,leftAttackImage, rightAttackImage,rigthGuardImage,leftGuardImage,uiImage,RRollImage);
    // platForm.push(new PlatForm(0,500,1200,100,true,0));
    // platForm.push(new PlatForm(1300,500,1200,100,true,0));
    // platForm.push(new PlatForm(900,300,1200,100,false,0));
    // platForm_2.push(new PlatForm(0,500,1200,100,true,0));
    // platForm_2.push(new PlatForm(1300,500,1200,100,true,0));
    // platForm_2.push(new PlatForm(900,300,1200,100,false,0));
    


    //_x,_y,_width,_height,_base,_type,_vertical = 
    
    
}



function setup()
{
    createCanvas( 1200, 600 );
    frameRate(60);
    defaultTime = 0;
    checkTime = 0;
    stateCheck = 0;
    backgroundMusic.loop();
    
}

function draw()
{
    
    
    background( 0 );
    push();
    if(!focused && screenCheck == 1)
    {
        
        checkPause = 1;
    }

    if(screenCheck == 1)
    {
    stateManager();
   
    
    if(player.pos.x > 600 && player.pos.x <= cameraState-500)
    {
        
        translate(-(player.pos.x-600),0);
        
        image(backgroundImage,player.pos.x-600,0);
        player.seeUIImage(player.pos.x-600);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",player.pos.x-100,300);
        }
        
    }else if(player.pos.x >= cameraState-500)
    {
        
        translate(-(cameraState-1100),0);
        image(backgroundImage,cameraState-1100,0);
        player.seeUIImage(cameraState-1100);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",cameraState-600,300);
        }
    }else{
        translate(0,0);
        image(backgroundImage,0,0);
        player.seeUIImage(0);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",500,300);
        }
    }
    



    
    
    if(checkPause == 0)
    {

        
        
            if(spawnCheck == 0)
            {
                firstStateSpawn(stateCheck);
                spawnCheck = 1;
            }

            
            updateMonsterAndPlatForm();
            door.colPlayer(player);
            door.animUpdate();
            
            if(slime.length == 0 && key.isRemove == 0)
            {
            
                key.draw();
                key.checkPlayer(player,door);
            }

            push();
            player.updateAnim();
            pop();
            player.checkKeyboard();
            player.update();
            player.addGravity();
            player.checkCamera();
            player.checkLeft();
            cameraMove += player.cameraMove();
            playerCheck();


    }
    
    pop();
    }else if(screenCheck == 0){
        mainMenu();
    }
    
    
}





function stateManager()
{
    if(player.pos.x > cameraState)
    {
        stateCheck++;
        console.log("여기들어와봐");
        player.pos.x = 100;
        player.checkCameraX = 600;
        player.checkCameraX_L = 500;
        cameraMove = 0;
        spawnCheck = 0;
        player.startPlay = 0;
        if(stateCheck == 1)
        {
            cameraState = 3600;
        }
        
        
    }
}

function firstStateSpawn(state)
{
    if(state == 0)
    {
        slime.splice(0,slime.length);
        platForm.splice(0,platForm.length);

        door = new Door(doorImage,2400,400,100,100);
        key = new Item(itemImage,1800,440);
        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(2400,0,100,400,true,1,verPlatForm));
        platForm.push(new Pike(500,436,pikeImage,10.0));

        slime.push(new Skeleton(1,skeletonDefault,1200,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,1400,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        // slime.push(new Skeleton(1,skeletonDefault,1500,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        // slime.push(new Skeleton(1,skeletonDefault,1000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        // slime.push(new Skeleton(1,skeletonDefault,900,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        // // slime.push(new Skeleton(1,skeletonDefault,550,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        // // slime.push(new Skeleton(1,skeletonDefault,400,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,2000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,2100,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        // // slime.push(new Skeleton(1,skeletonDefault,1900,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        // // slime.push(new Mage(2,magicImage,400,350,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage));
        slime.push(new BigSkel(3,bigSkelEffect,2300,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage));
        slime.push(new Archer(4,archerArrow,1100,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage));
        // slime.push(new Archer(4,archerArrow,450,350,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage));
        slime.push(new Mage(2,magicImage,1600,250,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage));
    }else if(state == 1)
    {
        slime.splice(0,slime.length);
        platForm.splice(0,platForm.length);

        
        key = new Item(itemImage,3000,440);

        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(2500,500,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(3600,0,100,400,true,1,verPlatForm));
        slime.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new Mage(2,magicImage,700,450,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage));

        slime.push(new Skeleton(1,skeletonDefault,2000,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,1700,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new BigSkel(3,bigSkelEffect,2000,250,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage));

        slime.push(new Archer(4,archerArrow,3000,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage));
        slime.push(new Archer(4,archerArrow,3100,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage));
        slime.push(new Mage(2,magicImage,3300,250,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage));
        slime.push(new BigSkel(3,bigSkelEffect,2800,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
        slime.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));

        
        door = new Door(doorImage,3600,400,100,100);
    }
    
}

function updateMonsterAndPlatForm()
{

    for(var a= 0; a<platForm.length;a++)
            {

                platForm[a].draw();
                platForm[a].colPlayer(player);
            }


    for(var a = 0; a<slime.length;a++)
    {
        if(slime[a].life > 0)
        {
            slime[a].animSlimeUpdate();
            
            slime[a].update();
            slime[a].rayUpdate();
            if(slime[a].type == 1)
            {
                slime[a].checkParry(player);
                slime[a].checkAttack(player);
            }else{
                slime[a].checkAttack(player);
                slime[a].magic(player);
            }
                for(var b = 0;b<platForm.length;b++)
                {
                    
                    if(platForm[b].type != 3)
                    {
                        slime[a].platformCheck(platForm[b]);
                        if(player.startPlay == 1)
                        {
                            slime[a].behavior(player,platForm[b]);
                            slime[a].moveUpdate();
                        }
                        platForm[b].colMonster(slime[a]);
                    }
                    
                }
            
        }else{
            slime.splice(a,1);
        }
    }
    player.checkAttack(slime);

   
}

function playerCheck()
{
    if(player.pos.y > 600 && player.startPlay == 1)
    {
        player.life -= 1;
        player.pos.x = 100;
        player.pos.y = 480;
    }
    if(player.life <1)
    {
        stateCheck = 0;
        spawnCheck = 0;
        player.pos.x = 100;
        player.pos.y = 480;
        player.life = 5;
        player.startPlay = 0;
        checkPause = 1;
        cameraState = 2400;
        player.rollCount = 3;
        player.skillCount = 1;
        player.animState = 0;
        player.isSkill = 0;
        player.attackCheck = 0;

        //이미지 오류시 여기로오기
        player.attackedVel.x = 0;
        player.attackedCheck = 0;
        player.rollVec.x = 0;
        player.checkRoll = 0;
        player.rollCountDeltaTime = 0;
        player.skillCountDelta = 0;
        player.guardRefillDelta = 0;
    }
}


function mainMenu()
{
  
    image(mainImage[0],400,50,400,200);
    // rect(500,300,200,50);
    image(mainImage[1],500,300);
    rect(500,400,200,50);
   
}

function mousePressed()
{
    if(screenCheck == 0)
    {
        if((mouseX > 500 && mouseX < 700) && (mouseY > 300 && mouseY < 350))
        {
            screenCheck++;
        }
    }
    console.log(mouseX);
    
}

function keyPressed()
{
    if(checkPause == 1 && keyCode == 27)
    {
        checkPause = 0;
    }else if(checkPause == 0 && keyCode == 27)
    {
        checkPause = 1;
    }
}