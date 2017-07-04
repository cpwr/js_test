function populate () {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        var question_text = document.getElementById('question');
        question_text.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var choice = document.getElementById("choice" + i);
            choice.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showScores () {
    var gameOverTag = "<h1>Result</h1>";
    gameOverTag += "<h2 id='score'>Your score is:" + quiz.score + "</h2>";
    var score = document.getElementById("quiz");
    score.innerHTML = gameOverTag;
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var progress = document.getElementById("progress");
    progress.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

var questions = [
    new Question('Is Javascript hard to learn?', ["Yes", "No", "What is Javascript?", "I know Haskell bitch!"], "No"),
    new Question('Do you know the difference between "undefined" and "infinity"?', ["Yes", "No", "Is this about Javascript?", "I know Haskell bitch!"], "Yes"),
    new Question('Who was earlier: Java or Javascript?', ["Hen", "Egg", "Java is the best language!", "Cobol bitch!"], "Cobol bitch!"),
    new Question('Did you know that Javascript has been invented by Chuck Norris?', ["Yes", "No", "Are you mad?", "He made Haskell too!"], "He made Haskell too!"),
    new Question('What is the best framework?', ["ReactJS", "VanillaJS", "AngularJS", "Yesod"], "ReactJS")
];

var quiz = new Quiz(questions);

populate();
