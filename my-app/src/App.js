// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
   <Navbar title = "TextUtils"/>
   <div className='container'>
   <TextForm/>
   <TextForm heading="Enter the text to"></TextForm>
   </div>
   </>
  );
}

export default App;
