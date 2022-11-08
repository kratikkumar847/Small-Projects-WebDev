var curr_task = prompt("Enter the option");

tasks =[]
var i=0;
if(curr_task == 'new'){
    var item = prompt("Enter the new task")
    tasks[i] = item;
    i++;
}
else if(curr_task == 'List'){
    
    for(let j=0; j<i; j++)
    {
        console.log(tasks[j]);
    }
    
}
else if(curr_task == 'Delete'){
    let now = tasks.lenght;
    tasks[now] = null;
    i--;
}
else if(curr_task == 'Quit'){
    console.log("******************* Thank You *******************")
}