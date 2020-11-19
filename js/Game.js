class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
        
      }
      form = new Form()
      form.display();

    }

    car1 = createSprite(100,-displayHeight*4);
    car1.addImage("car1",car1image)

    car2 = createSprite(300,-displayHeight*4);
    car2.addImage("car2",car2image)

    car3 = createSprite(500,-displayHeight*4);
    car3.addImage("car3",car3image)

    car4 = createSprite(700,-displayHeight*4);
 car4.addImage("car4",car4image)
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
background("black")
image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*4)
    Player.getPlayerInfo();
    player.getCarCount()
    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 100;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight/10 - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
         // cars[index - 1].shapeColor = "red";
         
        fill("red");
         ellipse (x,y,70,70)
         
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
if(player.distance>3860){
  gameState=2;
  player.rank =player.rank + 1
  Player.updateCarCount(player.rank)
}

    drawSprites();
  }
end ()
{
 
  game.update(2)
  console.log(player.rank)
}
}