
import './App.css';
import Row from './components/Row/Row';
import requests from './requests'


function App() {
  return (
    <div className="app">
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} posterLarge />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
