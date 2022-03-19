import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="container py-4">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function Home() {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/5064a47c-b32f-4945-8d16-138eed3f3cc4.jpg?alt=media&token=cc94169f-71c8-4a57-9d66-49e5ed824e05',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/090cd433-2336-4028-a248-aaec98d630ed.jpg?alt=media&token=d2ff1c71-dae7-4155-b160-06b2446944a9',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/70007507-a5d2-4ab0-abc2-8930cb7768ae.jpg?alt=media&token=86940c32-c07e-4c94-834f-18043b2e8ce9',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16142096402082422.jpg?alt=media&token=33f78456-bf61-4751-9104-60d4b5da5915',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16144508857435195.jpg?alt=media&token=c316ae39-f4cf-4b32-8d7b-58e6e0a84660',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/d9a02033-bf8c-49f1-9243-1d679f1cec82.jpg?alt=media&token=36cf5198-34a1-4468-9461-c79496b59e94',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/f7f9d870609d2e8ae565d3a96656fd5b.jpg?alt=media&token=8d5e1ed2-9314-4166-83fc-d555f7571f22',
    'https://truyen3s.com/cover/images/0676b73aed9a8d41…466633435326463343731383037303039353438302e6a7067',
    'https://truyen3s.com/cover/images/a714f48a5e528b58…935356138376165623634373338343139373837312e6a7067',
    'https://truyen3s.com/cover/images/4cad4afe0c467108…935386666333033373432373330303338393631312e6a7067',
    'https://truyen3s.com/cover/images/c3f98c216c2e42b7…639383338633534613337393537373530363636302e6a7067',
    'https://truyen3s.com/cover/images/35270480c2dcb99d…531633863393166323137323731343337383138342e6a7067',
    'https://truyen3s.com/cover/images/71d07fead414cb90…039306631653534313633303832363834393634332e6a7067',
    'https://truyen3s.com/cover/images/b87f0ffc689c27f0…262633864356631653337353132313832333030362e6a7067',
    'https://truyen3s.com/cover/images/0ce5339b43816b50…531393235663934303537343436373538393537322e6a7067',
    'https://truyen3s.com/cover/images/d448d8c3581d7006…365303065653566373335393837303337303935322e6a7067',
    'https://truyen3s.com/cover/images/0d8f74fafeb9f04a…661623064343235623638323032373830303630322e6a7067',
    'https://truyen3s.com/cover/images/c6005c1ad6a2c827…235333265616637393436353436343633363938342e6a7067',
    'https://truyen3s.com/cover/images/57e902751c052924…630373531303937353437343137363434303931382e6a7067',
    'https://truyen3s.com/cover/images/a80d8f023339cd58…764663364636666303735343934363434393233332e6a7067',
    'https://truyen3s.com/cover/images/8fc6344d30513c54…138643639396365643436383939393935303730392e6a7067',
    'https://truyen3s.com/cover/images/b6ed2cc53808b69b…064316562363062643133393235323839383037392e6a7067',
  ];

  return (
    <div className="list-group">
      {images.map((image) => {
        return (
          <li className="list-group-item pb-2">
            <img className="w-100" src={image} alt="" />
          </li>
        );
      })}
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
