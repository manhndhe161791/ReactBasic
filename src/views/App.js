import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent';
import ListTodo from './todo/ListTotdo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ListTodo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
