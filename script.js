dieOne = false; 
dieTwo = false; 
dieThree = false; 

firstDie = 1; 
secondDie = 1; 
thirdDie = 1; 

total = 0;
totalCounter = 0; 
oneCounter=0;
twoCounter=0;
threeCounter=0;
fourCounter=0;
fiveCounter=0;
sixCounter=0;
doubleCounter = 0;
tripleCounter = 0;


dieOneCount = 0;
dieTwoCount = 0;
dieThreeCount = 0;

var arrayNum = new Array();
var diceRow = new Array();

function initialize()
{
    numRolls = document.getElementById("num"); 
    rollingNum = 0; 

    dieOne = true; 
    dieTwo = false; 
    dieThree = false; 
    
    diceTable = document.getElementById("dicetable");
    doubles = document.getElementById("double"); 
    triples = document.getElementById("triple");
    mean = document.getElementById("Mean");
    mode = document.getElementById("Mode");
    median = document.getElementById("Median"); 

    dieonecounter = document.getElementById("dieOneCounter");
    dietwocounter = document.getElementById("dieTwoCounter");
    diethreecounter = document.getElementById("dieThreeCounter");

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
    mean.innerHTML = (total/totalCounter).toFixed(2);
    mode.innerHTML = findMode();
    median.innerHTML = findMedian();
    doubles.innerHTML = doubleCounter; 
    triples.innerHTML = tripleCounter; 
    dieonecounter.innerHTML = dieOneCount;
    dietwocounter.innerHTML = dieTwoCount;
    diethreecounter.innerHTML = dieThreeCount;


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
    console.clear();
    console.log("Roll Amount Per Die: " + rollingNum);
    rollXTimes(rollingNum);
    totalCounter += rollingNum;
    display(); 
    console.log(diceRow);
}

function rollXTimes(x)
{
    for (i = 0; i < x; i++) {
        if(dieOne)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            
            if(diceTable.rows.length > 6){
                diceTable.deleteRow(1);                                     
            }

            var newRow = diceTable.insertRow();
            var newCell = newRow.insertCell();
            newCell.innerHTML = firstDie;

            total+=firstDie; 
            arrayNum.push(firstDie);
            diceRow.push(firstDie);

            dieOneCount++;

        }
        if(dieTwo)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            secondDie = parseInt((Math.random() * (6 - 1 + 1) + 1))

            if(diceTable.rows.length > 12){
                diceTable.deleteRow(1);               
                                    
            }

            var newRow = diceTable.insertRow();
            var newCell = newRow.insertCell();
            newCell.innerHTML = firstDie;

            var newCell = newRow.insertCell();
            newCell.innerHTML = secondDie;
            
            total+=firstDie; 
            total += secondDie;
            arrayNum.push(firstDie);
            arrayNum.push(secondDie);
            diceRow.push(firstDie);
            diceRow.push(secondDie);

            if(firstDie==secondDie)
            {
                doubleCounter++;
            }
            dieOneCount++;
            dieTwoCount++;

        }
        if(dieThree)
        {
            firstDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            secondDie = parseInt((Math.random() * (6 - 1 + 1) + 1))
            thirdDie = parseInt((Math.random() * (6 - 1 + 1) + 1))

            if(dicetable.rows.length > 18){
                diceTable.deleteRow(1);                
               
            }

            var newRow = diceTable.insertRow();
            var newCell = newRow.insertCell();
            newCell.innerHTML = firstDie;

            var newCell = newRow.insertCell();
            newCell.innerHTML = secondDie;

            var newCell = newRow.insertCell();
            newCell.innerHTML = thirdDie;

            total += secondDie;
            total+=thirdDie;
            arrayNum.push(firstDie);
            arrayNum.push(secondDie);
            arrayNum.push(thirdDie);
            diceRow.push(firstDie);
            diceRow.push(secondDie);
            diceRow.push(thirdDie);

            if(firstDie==secondDie && firstDie==thirdDie && secondDie==thirdDie)
            {
                tripleCounter++;
            }

            dieOneCount++;
            dieTwoCount++;
            dieThreeCount++;

        }
    }       
}

function counter()
{
    for (index = 0; index < arrayNum.length; index++)
    {
        if(arrayNum[index]==(1))
        {
            oneCounter++;
        }
        if(arrayNum[index]==(2))
        {
            twoCounter++;
        }
        if(arrayNum[index]==(3))
        {
            threeCounter++;
        }
        if(arrayNum[index]==(4))
        {
            fourCounter++;
        }
        if(arrayNum[index]==(5))
        {
            fiveCounter++;
        }
        if(arrayNum[index]==(6))
        {
            sixCounter++;
        }  
    }
}

function findMode()
{
    counter();
    max = 0; 
    let arrayName = [oneCounter, twoCounter, threeCounter, fourCounter, fiveCounter, sixCounter];
    for (index = 0; index < arrayName.length; index++)
    {
        if(arrayName[index]>max)
        {
            max = arrayName[index]; 
        }
    }

    if(max==(oneCounter))
    {
        return 1; 
    }
    else if (max==(twoCounter))
    {
        return 2; 
    }
    else if(max==(threeCounter))
    {
        return 3; 
    }
    else if(max==(fourCounter))
    {
        return 4; 
    }
    else if(max==(fiveCounter))
    {
        return 5; 
    }
    else
    {
        return 6; 
    }

}


function findMedian()
{
    arrayNum.sort();
    let len = arrayNum.length;
    middleIndex = parseInt(len / 2); 
    m = arrayNum[middleIndex];
    return m;
}

