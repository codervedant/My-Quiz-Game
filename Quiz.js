class Quiz {
  constructor(){}

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
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play(){

    question.hide();

    background("yellow");    

    textSize(30);
    text("Result: ", 250, 50);

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("NOTE: Contestants who gave the right answer will be highlighted in green!!", 130, 230);
}

   for(var plr in allContestants){
     var correctA = "2";
     if(correctA === allContestants[plr].answer){
      fill("green");
} else{
      fill("red");
}
}
    
}

}
