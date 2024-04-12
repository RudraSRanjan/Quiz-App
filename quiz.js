const quesJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
];

let score = 0;
const totalScore= quesJSON.length;

let currentQues = 0;

const divQ = document.getElementById("question");

const option = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl= document.getElementById("next");

nextEl.addEventListener('click',()=>
{
  scoreEl.textContent = `Score: ${score}/${totalScore}`;
  NextQues();
});


//To Display every question of quesJSON
showQues();

function showQues() {
  /*DESTRUCTURING OBJECT*/
  const {correctAnswer,options, question } = quesJSON[currentQues];

  divQ.textContent = question;

  const shuffled = shuffleOptions(options);

  shuffled.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    option.append(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }

      scoreEl.textContent = `Score: ${score}/${totalScore}`;
      // NextQues();
      
    });
  });

  
}

function NextQues()
{
  currentQues++;
  option.textContent="";
  if(currentQues>=quesJSON.length)
  {
    divQ.textContent="Quiz Completed!";
    nextEl.remove();
    
  }
  else
  {
    showQues();
  }

}

//Shuffling Options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }

  return options;
}

