/**
 * Implement posting to php
 * Create Next Page button to link to next page
 */

var submitted = false
function validate() {
    var q1 = document.quiz.q1.value
    var q2 = document.quiz.q2.value
    var q3 = document.quiz.q3.value
    var q4 = document.quiz.q4.value
    var q1_bool = false
    var q2_bool = false
    var q3_bool = false
    var q4_bool = false
    var score = 0
    if (q1 == "q1_a3") {
        q1_bool = true
        score++
    }
    if (q2 == "q2_a2") {
        q2_bool = true
        score++
    }
    if (q3 == "q3_a4") {
        q3_bool = true
        score++
    }
    if (q4 == "q4_a1") {
        q4_bool = true
        score++
    }
    document.getElementById("submitted").style.visibility = "visible";
    if (q1_bool == true) {
        document.getElementById("q1_check").innerHTML = "Question 1: Correct";
    } else {
        document.getElementById("q1_check").innerHTML = "Question 1: Incorrect, correct choice is: 3";
    }
    if (q2_bool == true) {
        document.getElementById("q2_check").innerHTML = "Question 2: Correct";
    } else {
        document.getElementById("q2_check").innerHTML = "Question 2: Incorrect, correct choice is: AI used in vacuum cleaners";
    }
    if (q3_bool == true) {
        document.getElementById("q3_check").innerHTML = "Question 3: Correct";
    } else {
        document.getElementById("q3_check").innerHTML = "Question 3: Incorrect, correct choice is: Robert De Niro";
    }
    if (q4_bool == true) {
        document.getElementById("q4_check").innerHTML = "Question 4: Correct";
    } else {
        document.getElementById("q4_check").innerHTML = "Question 4: Incorrect, correct choice is: Yes";
    }
    document.getElementById("tot_score").innerHTML = "Total score: " + score;
    submitted = true
}

function submitted_or_not() {
    if (submitted == true) {
        alert("Sorry, you have already submitted the quiz!")
    } else {
        validate()
    }
}

function next_click() {
    var choice = false
    if (confirm("Proceeding further will not let you go back Do you wish to continue?")) {
        choice = true;
    }
    if (choice == true) {
        var x = document.getElementById("article_div");
        x.style.display = "none";
        var y = document.getElementById("quiz_div");
        if (y.style.visibility = "hidden") {
            y.style.visibility = "visible";
        }
    }
}