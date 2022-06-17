import './App.css';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';

const App = () => {
  const favoriteFood = ["Sate", "Miso", "Soto", "Bakso", "Mie Ayam"];

  return (
    <div>
      <h1>Fauzi Ihsan</h1>
      <ul>
        {
          favoriteFood.map((food) => {
            return <li>{food}</li>
        })
        }
      </ul>

      <div style={{ backgroundColor: 'lightblue', margin: '20px' }}>
        <ButtonClass text="I'm button class from props"/>
        <ButtonClass text="Button Baru"/>
        <ButtonClass/>
        <ButtonFunction
          tulisan="I'm button function from props"
          color='blue'
        />
        <ButtonFunction
          tulisan="I'm button function from props"
          color='blue'
        />

        <ButtonFunction
        />
      </div>
      
      {
        <p>{favoriteFood[0]}</p>
      }
    </div>
  );
  
}

export default App;
