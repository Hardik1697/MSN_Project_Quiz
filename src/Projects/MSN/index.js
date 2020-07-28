/**
 * Implement posting to php
 * Create Next Page button to link to next page
 */

// var com = false
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
    if (q1 == "q1_a1") {
        q1_bool = true
        score++
    }
    if (q2 == "q2_a1") {
        q2_bool = true
        score++
    }
    if (q3 == "q3_a1") {
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
        document.getElementById("q1_check").innerHTML = "Question 1: Incorrect, correct choice is: Choice#1";
    }
    if (q2_bool == true) {
        document.getElementById("q2_check").innerHTML = "Question 2: Correct";
    } else {
        document.getElementById("q2_check").innerHTML = "Question 2: Incorrect, correct choice is: Choice#1";
    }
    if (q3_bool == true) {
        document.getElementById("q3_check").innerHTML = "Question 3: Correct";
    } else {
        document.getElementById("q3_check").innerHTML = "Question 3: Incorrect, correct choice is: Choice#1";
    }
    if (q4_bool == true) {
        document.getElementById("q4_check").innerHTML = "Question 4: Correct";
    } else {
        document.getElementById("q4_check").innerHTML = "Question 4: Incorrect, correct choice is: Choice#1";
    }
    document.getElementById("tot_score").innerHTML = "Total score: " + score;
    // com = true
}

/**
 function next_page() {
    if (com != true) {
        alert("Please complete the quiz to go to the next page!")
    }
}
 **/