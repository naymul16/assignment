//function for feet to mile
function feetToMile(feet){
    if(feet<0){
        return "Distance can't be negative";
    }
    var mile=feet*0.000189394;
    return mile;
}
//function for wood calculator
function woodCalculator(chair,table,bed){
    if(chair<0){
        return "Quantity of Chair can't be nagative";
    }
    else if(table<0){
        return "Quantity of table can't be nagative";
    }
    else if(bed<0){
        return "Quantity of bed can't be nagative"
    }
    var woodForChair=chair*1;
    var woodForTable=table*3;
    var woodForBed=bed*5;
    var totalWood= woodForChair+ woodForTable+woodForBed;
    return totalWood;

}
//function for brick calculator
function brickCalculator(floor){
    var totalFloor=0;
    if(floor==0){
        return "floor can't be zero";
    }
    if(floor>0 && floor<11){
        for(var i=1;i<=floor;i++){
            totalFloor=totalFloor+15;
        }
        return totalFloor*1000;
    }
    else if(floor<21){
        for(var i=1;i<=10;i++){
            totalFloor=totalFloor+15;
        }
        for(var i=11;i<=floor;i++){
            totalFloor=totalFloor+12;
        }
        return totalFloor*1000;

    }
    else if(floor>20){
        for(var i=1;i<=10;i++){
            totalFloor=totalFloor+15;
        }
        for(var i=11;i<=20;i++){
            totalFloor=totalFloor+12;
        }
        for(var i=21;i<=floor;i++){
            totalFloor=totalFloor+10;
        }
        return totalFloor*1000;
    }
}
//function for tiny friend
function tinyFriend(name){
    if(name.length==0){
        return "string can't be empty"
    }
    var min=name[0].length;
    var friendName=name[0];
    for(var i=1;i<name.length;i++){
        if(name[i].length<min){
            min=name[i].length;
            friendName=name[i];
        }
    }
    return friendName;
}