function answerCorrect(questionNumber, answer)
    {
        //declare a variable to hold return value
        var correct = false;
        //if answer provided is same as correct answer then correct variable is true
        if (answer == answers[questionNumber])
        {
            correct = true;
        }
        //return whether the answer was correct or not
        return correct;
    }

var questionNumber;

function getQuestion ()
    {
        questionNumber = Math.floor(Math.random() * (questions.length));
        var questionHTML = "<p>" + questions[questionNumber][0] + "</p>";
        var questionLength = questions[questionNumber].length;
        var questionChoice;
        for (questionChoice = 1; questionChoice < questionLength; questionChoice++)
        {
            questionHTML = questionHTML + "<input type=radio name=radQuestionChoice";
            if (questionChoice == 1)
            {
                questionHTML = questionHTML + " checked";
            }
            questionHTML = questionHTML + ">";
            questionHTML = questionHTML + questions[questionNumber][questionChoice];
            questionHTML = questionHTML + "<br>";
        }
        document.QuizQuestionForm.txtQNumber.value = "Question " + (questionNumber + 1);
        questionHTML = questionHTML + "<br>";
        return questionHTML;
    }

function buttonCheckQ_onclick()
    {
        var answer = 0;
        while (document.QuizQuestionForm.radQuestionChoice[answer].checked != true)
        {
            answer ++;
        }
        answer = String.fromCharCode(65 + answer);
        if (answerCorrect(questionNumber, answer) == true)
        {
            alert("You got it right");
        }
        else
        {
            alert("You got it wrong");
        }
        window.location.reload();
    }
//questions and answers arrays will hold questions and answers
var questions = new Array();
var answers = new Array();
//define question 1
questions[0] = new Array();
//the question
questions[0][0] = "What year was Einstein's annus mirabilis ?";
//first choiced
questions[0][1] = "1890";
//second choice
questions[0][2] = "1905";
//third choice
questions[0][3] = "1918";
//assign answer for question 1
answers[0] = "B";

//define question 2
questions[1] = new Array();
questions[1][0] = "Richard Feynman was born in";
questions[1][1] = "Chicago";
questions[1][2] = "San Fransisco";
questions[1][3] = "New York";
questions[1][4] = "Paris";
//assign answer for question 2
answers[1] = "C";

//define question 3
questions[2] = new Array();
questions[2][0] = "Niels Bohr was";
questions[2][1] = "Swedish";
questions[2][2] = "Danish";
questions[2][3] = "Norwegian";
questions[2][4] = "German";
//assign answer for question 3
answers[2] = "B";

//define question 4
questions[3] = new Array();
questions[3][0] = "Which Nobel Prize did Marie Curie win ?";
questions[3][1] = "Physics in 1903";
questions[3][2] = "Chemistry in 1903";
questions[3][3] = "Physics in 1903 and Chemistry in 1911";
questions[3][4] = "Chemistry in 1903 and Physics in 1911";
//assign answer for question 4
answers[3] = "C";

//define question 5
questions[4] = new Array();
questions[4][0] = "Niels Bohr won the Nobel Prize in";
questions[4][1] = "1906";
questions[4][2] = "1912";
questions[4][3] = "1922";
questions[4][4] = "1932";
//assign answer for question 5
answers[4] = "C";

//define question 6
questions[5] = new Array();
questions[5][0] = "Albert Einstein won the Nobel prize for his";
questions[5][1] = "Theory of General Relativity";
questions[5][2] = "Theory of Brownian Motion";
questions[5][3] = "Theory of Special Relativity";
questions[5][4] = "The Law of the Photoelectric Effect";
//assign answer for question 6
answers[5] = "D";

//define question 7
questions[6] = new Array();
questions[6][0] = "How many times was Albert Einstein married ?";
questions[6][1] = "Once";
questions[6][2] = "Twice";
questions[6][3] = "Three Times";
questions[6][4] = "Never";
//assign answer for question 7
answers[6] = "B";

//define question 8
questions[7] = new Array();
questions[7][0] = "Richard Feynman enjoyed a good party and played a musical instrument. Which one";
questions[7][1] = "Bongo Drum";
questions[7][2] = "Ukelele";
questions[7][3] = "Saxophone";
questions[7][4] = "Guitar";
//assign answer for question 8
answers[7] = "A";

//define question 9
questions[8] = new Array();
questions[8][0] = "Enrico Fermi was";
questions[8][1] = "Spanish";
questions[8][2] = "French";
questions[8][3] = "Italian";
questions[8][4] = "German";
//assign answer for question 9
answers[8] = "C";

//define question 10
questions[9] = new Array();
questions[9][0] = "The J in J. Robert Oppenheimer stands for";
questions[9][1] = "James";
questions[9][2] = "Joseph";
questions[9][3] = "Johan";
questions[9][4] = "Julius";
//assign answer for question 10
answers[9] = "D";