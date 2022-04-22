import './App.css';
import Message from './components/Message/Message';

function App() {
  return (
    <>
      <main>
        <Message id="first" author="Jerry" message="Hello there" isImportant />
        <Message id="second" author="Tom" message="Hi" />
        <Message id="third" author="Jerry" message="Bye" isImportant/>
      </main>
    </>
  );
}

export default App;
