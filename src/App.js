import './App.css';
import Navbar from './components/navbar'
import Intro from './components/Intro'
import Content from './components/Content';
import Thr from './components/Thr';

function App() {
  return (
    <div>
      <div className='navbg' id='home'>
        <Navbar />
        <Intro />
      </div>
      <div className='content'>
        <Content />
      </div>
      <div className='footer d-flex justify-content-center align-items-center'>
        <Thr />
      </div>
    </div>
  );
}

export default App;
