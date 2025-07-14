import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Body />
      </div>
    </HashRouter>
  );
}

export default App;
