$(document).ready(function () {


    var questionNumber
    var playerGuessed
    var userPick
    var interval
    var timeRemaining = 15

    //Start game
    $("#start-button").show()
    function newGame() {

        //Initial hiding of elements on page
        $("#question-page").hide()
        $("#answer-page").hide()
        $("#game-over-page").hide()

    }

    //Start New Game
    $("#start-reset-button").click(function () {

        //hide button
        $(this).hide()

        //hide
        $("#game-over-page").hide()
        $("#question-page").show()

        //clear counter displays
        $("#number-correct").empty()
        $("#number-incorrect").empty()
        $("#number-unanswered").empty()

        //reset counters
        questionNumber = 0
        correct = 0
        incorrect = 0
        timeouts = 0

        //start with first question
        nextQuestion()
    })

    //Loads next question page
    function nextQuestion() {

        //Start timer
        timerStart()

        //Hide answer page
        $("#answer-page").hide()

        //Display question and possible choices
        $("#question-number").html("Question " + (questionNumber + 1))
        $("#question").html(questionList[questionNumber].questionText)
        for (var i = 0; i < questionList[questionNumber].answerChoices.length; i++) {
            var userChoices = $("<div>")
            userChoices.addClass("playerChoices")
            userChoices.attr("data-value", i)
            userChoices.text(questionList[questionNumber].answerChoices[i])
            $("#question-page").append(userChoices)
        }

        //Player clicks on answer from list of choices
        $(".playerChoices").click(function () {
            userPick = $(this).data("value")
            playerGuessed = true
            timerStop()
        })

        if (timeRemaining === -1) {
            timerStop()
        }
    }

    //Loads answer page after player makes choice or time runs out
    function nextAnswer() {
        $("#countdown").empty()
        $("#question-number").empty()
        $("#question").empty()
        $(".playerChoices").empty()


        //Displays player was correct
        if (userPick === questionList[questionNumber].correct && playerGuessed === true) {
            $("#answer-check").html("Correct!")
            $("#answer-check-message").empty()
            $("#answer-page").show()
            correct++

            //Displays player was incorrect and correct answer
        } else if (userPick !== questionList[questionNumber].correct && playerGuessed === true) {
            $("#answer-check").html("Incorrect!")
            $("#answer-check-message").html("The correct answer was: " + questionList[questionNumber].answerChoices[questionList[questionNumber].correct])
            $("#answer-page").show()
            incorrect++

            //Displays time ran out and correct answer
        } else {
            $("#answer-check").html("Too slow! Out of time!")
            $("#answer-check-message").html("The correct answer was: " + questionList[questionNumber].correct)
            $("#answer-page").show()
            timeouts++
        }

        //Display gif relating to question
        $("#image").html("<img src='assets/images/" + questionList[questionNumber].image + "' width='500px'>")

        //Display answer page for 5 seconds
        setTimeout(checkRemaining, 5000)

        //Increase to next question number
        questionNumber++

        //Check if any remaining questions
        function checkRemaining() {

            //Display game over page if no more questions
            if (questionNumber >= questionList.length) {
                gameOver()

                //Display next question if there are more questions in list
            } else {

                //Reset player guessed
                playerGuessed = false
                nextQuestion()
            }
        }
    }

    //Display the game over page with game statistics
    function gameOver() {

        //Hide answer page
        $("#answer-page").hide()

        //Display game over page
        $("#game-over-page").show()
        $("#game-over-message").html("Thanks for playing!")
        $("#number-correct").append("Correct: " + correct)
        $("#number-incorrect").append("Incorrect: " + incorrect)
        $("#number-unanswered").append("Unanswered: " + timeouts)

        //change start button into a reset button
        $("#start-reset-button").text("Try Again")
        $("#start-reset-button").show()
    }

    newGame()

    //Countdown Timer
    //Begins the countdown timer
    function timerStart() {
        //Display initial countdown
        $("#countdown").html("<h2>Time Remaining: " + timeRemaining + "</h2>")
        //Prevents multiple instances of decrementing from running
        clearInterval(interval)
        //Begin counting down by one second
        interval = setInterval(decrement, 1000)
    }

    //Decreases remaining time, displays it, and checks if time is up
    function decrement() {

        //Decrease remaining time by one
        timeRemaining--

        //Display updated remaining time
        $("#countdown").html("<h2>Time Remaining: " + timeRemaining + "</h2>")

        //Check if time is up or player has guessed
        if (timeRemaining === -1) {
            timerStop()
        }
    }

    function timerStop() {

        //Prevents multiple instances of decrementing from running
        clearInterval(interval)

        //Reset remaining time to 30
        timeRemaining = 15

        //Reset
        nextAnswer()
    }
    
    //Game Questions
    var questionList = [
        question = {

            //Question
            questionText: "Dumbo is able to fly with the use of his large ____.",

            //Answer Choices
            answerChoices: ["Nose", "Ears", "Tail", "Feet"],

            //Correct Answer
            correct: 1,

            //Related Image
            image: "dumbo.gif"
        },

        question = {

            //Question
            questionText: "David Spade voiced this character in 'The Emperor's New Groove'.",

            //Answer Choices
            answerChoices: ["Yzma", "Kronk", "Kuzco", "Pacha"],

            //Correct Answer
            correct: 2,

            //Related Image
            image: "kuzco.gif"
        },

        question = {

            //Question
            questionText: "Which of the following celebrities does Genie in 'Aladdin' impersonate?",

            //Answer Choices
            answerChoices: ["Rodney Dangerfield", "Bruce Willis", "Hugh Jackman", "Ben Stiller"],

            //Correct Answer
            correct: 0,

            //Related Image
            image: "genie.gif"
        },

        question = {

            //Question
            questionText: "What type of dance does Timon and Puumba perform to distract the hyenas in 'The Lion King'",

            //Answer Choices
            answerChoices: ["Souja Boy", "Waltz", "Electric Slide", "Hula"],

            //Correct Answer
            correct: 3,

            //Related Image
            image: "timon.gif"
        },

        question = {

            //Question
            questionText: "What is the name of Philip Sherman's neice that pesters the tank gang in 'Finding Nemo'?",

            //Answer Choices
            answerChoices: ["Dierdre", "Darla", "Daria", "Dory"],

            //Correct Answer
            correct: 1,

            //Related Image
            image: "darla.gif"
        }
    ]
}
)