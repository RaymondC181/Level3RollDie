dieOne = false; 
dieTwo = false; 
dieThree = false; 


firstDie = 1; 
secondDie = 1; 
thirdDie = 1; 

function initialize()
{
    numRolls = document.getElementById("num"); 
    rollingNum = 0; 

    dieOne = true; 
    dieTwo = false; 
    dieThree = false; 
    
}

function add()
{
    if(rollingNum<6)
   {
    rollingNum++; 
   }
   display();
}

function display()
{
    numRolls.innerHTML = rollingNum; 
}

function minus()
{
   if(rollingNum>1)
   {
    rollingNum--; 
   }
   display();
}

function oneDie()
{
    dieOne = true; 
    dieTwo = false; 
    dieThree = false; 

    console.clear();
    console.log("Die one: " + dieOne);
    console.log("Die two: " + dieTwo);
    console.log("Die three: " + dieThree);
}
function twoDie()
{
    dieOne = false; 
    dieTwo = true; 
    dieThree = false; 

    console.clear();
    console.log("Die one: " + dieOne);
    console.log("Die two: " + dieTwo);
    console.log("Die three: " + dieThree);
}
function threeDie()
{
    dieOne = false; 
    dieTwo = false; 
    dieThree = true; 

    console.clear();
    console.log("Die one: " + dieOne);
    console.log("Die two: " + dieTwo);
    console.log("Die three: " + dieThree);
}

function roll()
{
    amountOfRolls = (document.getElementById("num")); 
    rollXTimes(amountOfRolls);
    
}

function rollXTimes(x)
{
    for (i = 0; i < x; i++) {
        if(dieOne)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
        }
        if(dieTwo)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            secondDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
        }
        if(dieThree)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            secondDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            thirdDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
        }
    }       
}


