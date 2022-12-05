

console.log(list);
function whatHappend(){

    var list = ["akash" , "rabbi" , "reza","atik","naeem","shohag","rubayet","siam","kabir","antor","tanvir","shahid","mostafa","robin","rimon","saki","saiful","anis","shuvo" ];
    
    var inputName = document.getElementById('name').value;
    var listName = list.includes(inputName);

    if(listName == true){
        document.getElementById('result').innerHTML = "Welcome " + inputName + " you are Invited ";
        document.getElementById('happy').src='img/happy.png';
    }
    else{
        document.getElementById('result').innerHTML = "Sorry " + inputName + " you are not Invited ";
        document.getElementById('happy').src='img/sad.png';
    }
}

