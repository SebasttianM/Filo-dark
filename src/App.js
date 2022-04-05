import './App.css';
import FiloNav from './components/FiloNav';
import Functions from './components/Functions';
import Head from './components/Head';
import Mid from './components/Mid';

function App() {
  return (
    <div className="container border-2 border-green-600 mx-auto">
      <FiloNav />
      <Head />
      <Functions />
      <Mid />
    </div>
  )
}

export default App;
