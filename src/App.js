import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Timer from "./components/timer";


function App() {
  const [questions, setQuestions] = useState([
    {
      question: "Html Stands For _______________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [stop, setStop] = useState(false);

  console.log(<div className="timer"><Timer  setStop={setStop} questions={questions.length}  /></div>);

  let checkQuestion = (a, b) => {
    if (a == b) {
      setScore(score + 1);
    }
    if (indexNumber + 1 == questions.length) {
      setShowResult(true);
    } else {
      setIndexNumber(indexNumber + 1);
    }
   
  };




  return (

    <div className="App">
  
      <h1>quiz time 15 seconds</h1>
  <div className="timer">15 <Timer  setStop={setStop} questions={questions.length}  /></div>
    {showResult || stop?<h1 className="question">your percentage is <br/> {(score/questions.length)*100}<br/> <br/> your score is <br/> {score}</h1>:
 
  
    <Box>
       <Box sx={{ padding: 1 }}>
         <Typography variant="h1" setStop={stop} >
           Question # {indexNumber + 1}/{questions.length}
         </Typography>
       </Box>
       <Box sx={{ padding: 1 }}>
         <Typography className="question" setStop={stop}  variant="h2">
           {questions[indexNumber].question}
         </Typography>
       </Box>
       <Box>
         <Grid container>
           {questions[indexNumber].options.map((x, i) => (
             <Grid key={i}  item md={6}>
               <Chip label="primary" color="primary" 
                 onClick={() =>
                   checkQuestion(x, questions[indexNumber].correctAns)
                 }
                 label={x}
               />
             </Grid>
           ))}
         </Grid>
       </Box>        
     </Box>}
     
   </div>
 );
}
export default App;
