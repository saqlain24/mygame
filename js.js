var username=[];
var password=[];
var a,b,c;
var score=0;
var user1;
var count=0;
var currentUser="";
var operator=['+','-','*','/'];
var topScore=[];

document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}
function register() {

    document.getElementById("login-form").style.display="none";
    document.getElementById("reg").style.display="block";
 


}

function regg() {
    a=document.getElementById("user1").value;
    b=document.getElementById("p1").value;
    c=document.getElementById("p2").value;



   var d=username.find(function(element) {
        return element===a;

    });
    var userValidation =/^[A-Za-z]+$/;
    var passwordValidation=/[0-9a-zA-Z]/g;
    var passwordValidation2=/[!@#$%^&*(),.?":{}|<>]/g;
    var passwordValidation3=/[!@#$%^&*(),.?":{}|<>]/g;
    var checkUserLen= a.length>6;
    var checkUser=userValidation.test(a);
    var checkValidP=passwordValidation.test(b);
    var checkValidP2=passwordValidation.test(c);
    var passChar1=passwordValidation2.test(b);
    var passChar2=passwordValidation3.test(c);
    var passWordStrenght= b.length>6 && b.length<14;
    var passWordStrenght2=c.length>6 && c.length<14;
    var purePassvalidation= b===c;
    var d=username.find(function(element) {
        return element===a;


    });
    if (d=== undefined) {


        if (checkUserLen) {

        } else {
            alert("Username length must be greater than 6")
        }
        if (checkUser) {
            console.log("complete")
        } else {
            alert('Field only Contain text');
        }
        if (checkValidP && passChar1) {
            console.log("complete")
        } else {
            alert('Field should contaion [a-z][A-Z] followed by Special Char')
        }
        if (passWordStrenght) {
            console.log("complete")
        } else {
            alert('Password Should be Greater than 6 less than 13')
        }
        


        if (purePassvalidation) {
            if (b === c) {
                console.log('Testing');
            }
        } else {
            alert('Password Not Matched');
        }

        if (checkUserLen && checkUser && checkValidP && checkValidP2 && passChar1 && passChar2 && passWordStrenght && passWordStrenght2 && purePassvalidation) {


            alert("registration successful");
            password.push(b);
            username.push(a);
            count++;
           
            document.getElementById("reg").reset();
            document.getElementById("login-form").style.display = "block";
            document.getElementById("reg").style.display = "none";
            document.getElementById("user").focus();
            

        } else {
            alert('Form Validation Incomplete')
        }
    }
    else
    {
        alert('Username Already Exist')
    }

}
 


function login() {
 

    var num1=document.getElementById("user").value;
    var num2=document.getElementById("pass").value;
    var i,state=true;
    for (i=0;i< count;i++) {
        if ((username[i] === num1) && (password[i] === num2))
        {
            alert("login successful");
            currentUser=username[i];
            state=false;
            document.getElementById("login-form").reset();
            document.getElementById("login-form").style.display="none";
            document.getElementById("play").style.display="block";
            document.getElementById("u1").innerHTML=username[i];
            document.getElementById("u2").innerHTML=username[i];
            score=0;


        }


    }
    if(state)
    {
        alert("Enter Correct Credential");
    }
}
function loginAgain() {
    document.getElementById("login-form").style.display="block";
    document.getElementById("reg").style.display="none";


}
var v1,v2,ans,opt;
function playGame() {
    document.getElementById("play").style.display="none";
    document.getElementById("grid").style.display="block";
    document.getElementById("score").innerHTML=score;
    v1=Math.floor((Math.random() * 100) + 1);
    v2=Math.floor((Math.random() * 50) + 1);
    var v3=Math.floor((Math.random() * 3));
    document.getElementById("question").innerHTML = "What is value of  " + v1 + "  "+operator[v3]+" " +v2 +" ?";
    opt = [(v1+v2), (v1-v2), (v1*v2), (v1/v2).toFixed(2)];
    document.getElementById("c1").innerHTML = opt[0];
    document.getElementById("c2").innerHTML = opt[1];
    document.getElementById("c3").innerHTML = opt[2];
    document.getElementById("c4").innerHTML = opt[3];
    ans=eval((v1+""+operator[v3]+""+v2)).toFixed(2);


}
function gameEval() {
    var o=document.getElementsByName("r1");
    for (var j=0;j<o.length;j++)
    {

        if(o[j].checked)
        {
            var val1=o[j].value;
           a='opt'+j;
            document.getElementById(a).checked=false;
        }
    }
    if(opt[val1] == ans){
        //alert("Correct Answer");
        score++;

        playGame();

    }
    else if(opt[val1] == null){
        alert("please enter the answer");
    }
    else{
        alert("Wrong Answer");
        document.getElementById("grid").style.display = "none";
        document.getElementById("point").style.display = "block";
        var add={name: currentUser, score: score};
        topScore.push(add);
        display();


    }

}
function display(){
    sorting();
    var display1 = "<table><tr><th>NickName</th><th>Score</th></tr>";
    for( var i=0; i<topScore.length; i++)
    {
        var add=topScore[i].name;
        var add1=topScore[i].score;
        display1+="<tr><td>"+topScore[i].name+"</td><td>"+topScore[i].score+"</td></tr>";
    }
    //display1+="</table>";
    document.getElementById("display").innerHTML = display1;

}
function sorting(){

    topScore.sort(function(a, b){return a.score - b.score});
    topScore.reverse();
    if(topScore.length>5){
        topScore.pop();
    }
}

function loginAgain() {


    document.getElementById("point").style.display = "none";
    document.getElementById("reg").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}
function tab() {
    document.getElementById("play").style.display="none";
    document.getElementById("point").style.display="block";

}
function disable(){
     a=document.getElementById("user1").value;
    b=document.getElementById("p1").value;
    c=document.getElementById("p2").value;
 
    if(b===c){
        document.getElementById("regg1").disabled = false;
    }
 
          
    
}
