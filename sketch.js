var hypnoticBall;

var database;

function setup(){
    createCanvas(500,500);

    // database has firebase's database
    database = firebase.database();

    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    // function name() { }
    // ()=>{ } - arrow
    database.ref('ball/position').on("value",( data )=>{
        position = data.val();
        //hypnoticBall.x = 250
        hypnoticBall.x = position.x;
        hypnoticBall.y = position.y;
    });


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){

        //function call (argument)
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

//json - { 'key': value , 'key1': value}
// updating to firebase x and y
//function definition(parameter)
function writePosition(x,y){
    database.ref('ball/position').set(
        {
            'x':position.x + x,'y':position.y + y 
        }
    )
}


