import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h1>About Me</h1>
          <p>Welcome to my personal website! My name is [Your Name] and I'm a [Your Profession] based in [Your City].</p>
          <p>[Tell a little bit about yourself - your education, work experience, skills, etc.]</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>[Describe your project and what you learned from it]</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>[Describe your project and what you learned from it]</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>[Describe your project and what you learned from it]</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at:</p>
          <ul>
            <li>Email: [Your email address]</li>
            <li>LinkedIn: [Link to your LinkedIn profile]</li>
            <li>GitHub: [Link to your GitHub profile]</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}
          [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
