class Minions{
    constructor(x,y,vx,vy,bullets,consumebullets,si1){
    this.mini = createSprite(x,y,50,50)  
    this.mini.addImage('sample',si1)
    
    this.mini.velocityX= 5;
    this.mini.velocityY= 5;
    this.vx = vx
    this.vy = vy
this.bullets= bullets
    
    }
    display(){
        if(this.vx!=0 || this.vy!=0)
        {
            console.log(0)
            this.mini.velocityX= this.vx;
            this.mini.velocityY= this.vy;   
        }
        if(this.bullets!=0){
            if(frameCount%Random(51,58)===0){
                var bull = createSprite(this.mini.x, this.mini.y,10,10)
                bull.velocityX= 8
                bull.velocityY= 8
                this.bullets=this.bullets-1
            }
        }
    }
}
