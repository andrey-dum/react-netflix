
import './App.css';
import Row from './components/Row/Row';
import requests from './requests'
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      
    </div>
  );
}

export default App;
