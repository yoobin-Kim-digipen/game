class Vec2
{
    constructor(tempX = 0,tempY = 0)
    {
        this.x = tempX;
        this.y = tempY;
    }



    setY(tempY)
    {
        this.y = tempY;
    }

    setX(tempX)
    {
        this.x = tempX;
    }

    set(_x,_y)
    {
        this.x = _x;
        this.y = _y;
    }


    

    getAngle()
    {
        return atan2(this.y,this.x);
    }

    setAngle(angle_in_radians)
    {
        var length = this.getLength();
        this.x = cos(radians(angle_in_radians)) * length;
        this.y = sin(radians(angle_in_radians)) * length;
    }

    getLength()
    {
       return sqrt(this.x*this.x + this.y * this.y);
    }

    setLength(length)
    {
        var angle = this.getAngle();
        this.x = length * cos(angle);
        this.y = length * sin(angle);
    }
    add(v2)
    {
        var v3 = new Vec2(this.x + v2.x,this.y+v2.y);
        return v3;
    }

    addTo(v2)
    {
        this.x += v2.x;
        this.y += v2.y;
    }

    addToTimeDelta(v2)
    {
        this.x += v2.x * deltaTime/1000;
        this.y += v2.y * deltaTime/1000;
        
    }




    subtract(v2)
    {
        var v3 = new Vec2(this.x - v2.x,this.y-v2.y);
        return v3;
    }

    subtractFrom(v2)
    {
        this.x -= v2.x;
        this.y -= v2.y;
    }

    multiply(scalar)
    {
        return new Vec2(this.x*scalar,this.y*scalar);
    }

    multiplyBy(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar)
    {
        return new Vec2(this.x/scalar,this.y/scalar);
    }

    divideBy(scalar)
    {
        this.x /= scalar;
        this.y /= scalar;
    }
    limitY(_y)
    {
        if(abs(this.y) > abs(_y))
        {
            this.y = _y
        }
    }

    limit(length)
    {
        if(this.getLength() > length)
        {
            this.setLength(length);
        }
    }





    reactionY()
    {
        return new Vec2(0,-this.y);
    }

    reactionX()
    {
        return new Vec2(-this.x,0);
    }

    reaction()
    {
        return new Vec2(-this.x,-this.y);
    }






}