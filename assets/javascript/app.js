$(document).ready(function () {

    var currentQuestion
    var userChoice
    var correct
    var incorrect
    var unanswered

    //Start game
    function newGame() {
        $("#start-button").show()
        $("#question-page").hide()
        $("#answer-page").hide()
        $("#game-over-page").hide()
        currentQuestion = 0
        correct = 0
        incorrect = 0
        unanswered = 0
    }
    
    $("#start-button").click(function() {
        $(this).hide()
        $("#question-page").show()
        
    })

    function nextQuestion () {

    }

    newGame()
    //Make Questions
    var questionList = [
        question = {
            //Question
            question: "Question",
            //Answer Choices
            answerChoices: ["1", "2", "3", "4"],
            //Correct Answer
            correct : answerChoices[i]
        },

        question = {
            //Question
            question: "Question",
            //Answer Choices
            answerChoices: ["1", "2", "3", "4"],
            //Correct Answer
            correct : answerChoices[i]
        },

        question = {
            //Question
            question: "Question",
            //Answer Choices
            answerChoices: ["1", "2", "3", "4"],
            //Correct Answer
            correct : answerChoices[i]
        }
    ]

    //Make Timer

})