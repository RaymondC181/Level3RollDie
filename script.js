function initialize()
{
    numRolls = document.getElementById("num"); 

    rollingNum = 0; 
    
}

function add()
{
    rollingNum+=1; 
    display(); 
}

function display()
{
    numRolls.innerHTML = rollingNum; 
}




