import logo from './logo.svg';
import './App.css';

function App() {

  let dataVal = "123";
  
  function test()
  {
    return 100;
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div> 개발 Blog</div>
      </div>
      <img src={ logo } />
      <h4 style={ { color:'blue', fontSize : '30px' } }>{ dataVal }</h4>
      <h4>{ test() }</h4>
    </div>
  );
}

export default App;
