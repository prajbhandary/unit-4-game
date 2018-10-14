var totalScore = 0;
var targetScore = 0;
var first =0;
var second = 0;
var third = 0;
var fourth =0;
var winCount =0;
var loseCount =0;



function reset() {
    
    //re- initializing values
    targetScore = Math.floor(Math.random() * 101) +19;
    first = Math.floor(Math.random() * 12) +1;
    second = Math.floor(Math.random() * 12)+1;
    third = Math.floor(Math.random() * 12)+1;
    fourth = Math.floor(Math.random() * 12)+1;
    totalScore = 0;
    // initializing finished

   
      //display targetScore and totalScore
    
    
    console.log('targetScore ' + targetScore);
    console.log('first ' + first);
    console.log('second ' + second);
    console.log('third ' +third);
    console.log('fourth ' +fourth);
    console.log('totalScore '+totalScore);

    display()

}
reset();

function display() {
      //display targetScore and totalScore
      $("#targetScore").html('Total ABV allowed : ' +targetScore); // print the targetscore
      $("#totalScore").html('You have already consumed :' + totalScore); // print the targetscore
      $("#win").html('Total Wins :' + winCount); // print the winCount
      $("#lose").html('Total lost :' + loseCount); // print the loseCount
}


    $('#1').click(function(){
        totalScore = totalScore + first;
        console.log('totalScore ' +totalScore);
        display()
        win();
    });
    $('#2').click(function(){
        totalScore = totalScore + second;
        console.log('totalScore '+totalScore);
        display()
        win();
    });
    $('#3').click(function(){
        totalScore = totalScore + third;
        console.log('totalScore '+totalScore);
        display()
        win();

    });   

    $('#4').click(function(){
        totalScore = totalScore + fourth;
        console.log('totalScore '+totalScore);
        display()
        win();

    });   



function win (){
    if (targetScore === totalScore){
        alert("You are Good!");
        winCount++;
        reset();
    }
    if (targetScore < totalScore){
        alert("One two Many!!!");
        loseCount++;
        reset();
    }

}
