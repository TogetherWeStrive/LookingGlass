import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/pages/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import PostBuilder from './components/Functions/Post/PostBuilder';
import React from 'react';
import './App.css';
import useToken from './useToken.js';
import AxiosRegister from './components/pages/Register/AxiosRegister';
import AxiosLogin from './components/pages/Login/AxiosLogin';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/pages/MediaPage/Menu';
import { PLACES } from './components/pages/MediaPage/Places';
import Greet from './components/pages/MediaPage/Greet';
import CompletedProjects from './components/pages/CompletedProjects/CompletedProjects';
import { idText, isNotEmittedStatement } from 'typescript';
import noteItem from './Notes'
import Notes from 'components/pages/Home/NoteIdeas';
import Footer from 'components/pages/Home/Footer';
import noteIdeas from 'components/pages/Home/NoteIdeas';
import { func } from 'prop-types';
import professional, {profesionalUser} from './dummyData/data';
import React, {useState} from 'react';
import { ProgressPlugin } from 'webpack';




notIdea = new noteItem();


const feasibleCount = 0;
const limitedCount = 0;
const proApproved = 0;
const proDenied = 0;
const isLoggedIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);
const greeting = '';
const isDone = false;
const [count, setCount] = useState(0);
const timeNow = new Date().toLocaleDateString();
const [time, setTime] = useState(timeNow);
const [input, setInput] = useState();
const[items, setItems] = useState();

const [professionalOccupation1, professionalOccupation2, professionalOccupation3] = profesionals;

const [contact, setContact] = useState({

  fName: "",
  lName: "",
  email: "",
  linedinUrl: "",
  });

  function handleChangeAccountLogin(event) {
    const {name, value } = event.target;

    setContact(preValue => {
      return {
        ... preValue,
        [name]: value

      }
    });

  }


  function addItem (inputText) {

      setItems((prevItems) => {
        return[...prevItems, inputText];

      });

  }

  function deleteItem () {

    setItems((prevItems) => {
      return prevItems.filter((item, index) =>{

        return index !== id;

      })

    });

}


const {
  professionalStats: {job: jobTitle, skills:Java}

} = professionalOccupation1

const {
  professionalStats: {experience: yearsExperience, skills:Java}

} = professionalOccupation2

const {
  professionalStats: {experience: yearsExperience, skills:Java}

} = professionalOccupation3


const [ engineer, jobTitle, topSkills] = profesionalUser(professiobyhnalOccupation1);

console.log(professionalOccupation1)

const [headintText, setHeadingTesxt] = useState("Welcome");
const [isMouseover, setMouseOver] = useState(false);



function handleClick(){
  setHeadingTesxt("submitted");

}

function handleMouseOver(){
  setMouseOver(true)

}


function handleMouseOut () {

  setMouseOver(false)
}

function collectUserinformation() {
  return
  <di className="getUserInfoContainer">
    <h1> Welcome to the LookingGlass. Please provide the following information to be matched on a team</h1>
    <input type = "text" placeholder = " What is your name?"/>
    <input type = "text" placeholder = " What is your email?"/>
    <input type = "text" placeholder = " What is your professional occupation?"/>
    <input type = "text" placeholder = " How many years of experience do you have?"/>
    <input type = "text" placeholder = " What are your top 3 skills?"/>
    <button style = {{backgroundColor: isMouseover ? "black" : "white"}} onclick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> Submit </button>

  </di>

}

function getUserInfo() {

  const [fullName, setFullName] = useState({

    fName = "",
    lName = ""


  });

}

function handleNameChange(event) {
  const {value, name} = event.target;

  setFullName(preValue => {
    if (name === "fName") {
      return {
        fName: value,
        lName: preValue.lName
      };
    } else if ( name === "lName") {

      return {
        fName: preValue.fName,
        lName: value

      };
    }
  });

}








function createidea(noteIdea) {

  return (<Note key={noteItem.key}
    tittle={noteIdea.tittle}
    content={noteIdea.content}
  />
  );
}

function updateTime () {
  const newTime = new Date().toLocaleDateString();
  setTime( newTime);


}

function showTime (){
  return
  <div>
    <h1> The current time is {timeNow} </h1>
    <button onClick={updateTime}>Update Your Time</button>

  </div>

}

const customStyle  = {
  color = ""
}

if (currentTime < 12) {
  greeting = " Good Morning";
  customStyle.color ="blue";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color= "green"

} else{
  greeting = "Good Evening";
  customStyle.color: "purple";

}


function increaseFeasibility () {
  setCount(feasibleCount + 1);
  <button className="feasible" onClick={increaseFeasibility}> Feasible Appproaches </button>
  if(button.onclick === true){
    feasibleCount++;

   }
    console.log("nothing clicked");

  return

  feasibleCount;
}

function decreaseFeasibility () {

  setCount(limitedCount - 1);


  <button className="feasible" conClick={decreaseFeasibility}> Limited Approaches </button>

  if(button.onclick === true){
    limitedCount++;

   }
    console.log("nothing clicked");


  return
  feasibleCount

}


function proApproval(){
  setCount(proApproved + 1);

  <button className="feasible" conClick={proApproved}> Pros have suggested feasible Approaches </button>

  if(button.onclick === true){
    proApproved++;

   }
    console.log("nothing clicked");


  return

  proApproved;

}


function proDenial(){

  setCount(proDenied - 1);
  <button className="feasible" conClick={proCount}> Pros cannot think of enough feasible Approaches </button>

  if(button.onclick === true){
    proDenied--;

   }
    console.log("nothing clicked");



  return

   proDenied;

}


function IdeaFeasibility () {
  const feasibility = {increaseFeasibility}/{decreaseFeasibility};
  return
  <div>
   <h1> as of {timeNow}, Professionals who believe this idea is worth pursueing with a feasibility of {feasibility} + %</h1>
   <h2>{feasibleCount} profesionals believe this idea is worth pursuiong as of {timeNow} </h2>
   <button onclick={increaseFeasibility}>Feasible +</button>
   <button onclick={decreaseFeasibility}>Feasible -</button>

  </div>

}

function ProfessionalsApproved (){

    return
    <div>
      <h1> {proApproved} Verified Domain Experts believe this idea is worth pursuing by a team! as of {timeNow}</h1>
      <h2> {proDenied} Verified Domain Experts believe this idea is not worth pursuing by a team! as of {timeNow}</h2>

      <button onclick={proApproval}>Domain Expert Approval + </button>
      <button onclick={proDenial}>Domain Expert Denial - </button>
    </div>



}






















function strike() {
  isDone = true

}

function unStrike() {
  isDone = false

}




function TestApp() {





  const { token, setToken } = useToken();

 if(!token) {
   return <Login setToken={setToken} />
   isLoggedIn = true

 }
  return (
    <div className="wrapper">
    <div className="container">{
      isLoggedIn === true ? <h1>{greeting}, Welcome at the cusp of Freedom.</h1> : <Login/>
}  </div>;
    <div>
        <p style ={isDone ? textDecoration: "line-through"}> {noteIdeas}</p>
        <button conClick={increaseFeasibility}>Feasible</button>
        <button onClick={decreaseFeasibility}>Limited</button>

        <button onClick={strike} > strike through idea</button>
        <button onClick={unStrike} > unstrike idea</button>
        <button onclick={addItem} > Add </button>

    </div>
      <Headers/>
      {Notes.map(createidea => (
        <Note
        key = {noteIdea.key}
        title={noteIdea.tittle}
        content={noteIdea.content}
      />
      ))}

      <Footer/>
      <h1>LookingGlass</h1>
      <BrowserRouter>
        <Routes>

          <Route path="/CompletedProjects">
           <CompletedProjects />
          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default TestApp;