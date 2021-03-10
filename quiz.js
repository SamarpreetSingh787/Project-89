player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name;

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    actual_ans = parseInt(no1) * parseInt(no2);
    console.log("Actual answerr = " + actual_ans);

    ques_n = "<h4>" + no1 + "X" + no2 + "<h4>"; 
    ipt_bx = "<br>Answer: <input type='text' id='ipt_word' placeholder='Enter your answer here'>";
    check_btn = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = ques_n + ipt_bx + check_btn;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}