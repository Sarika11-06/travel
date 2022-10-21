import './App.css';
import Header from './components/Header'
import Body from './components/Body';
import data from './data';

function App() {

  const cards = data.map(item => {
    return (
      <Body 
      key = {item.id}
        image = {item.image}
        title = {item.title}
        location = {item.location}
        Google_Maps = {item.googleMaps}
        start_date = {item.start}
        end_date = {item.end}
        description = {item.description}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
