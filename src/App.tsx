import styles from './App.module.css'
import Cities from './components/cities/Cities'
import CurrentWeather from './components/current-weather/CurrentWeather'
import Forecast from './components/forecast/Forecast'
import LocalDate from './components/local-date/LocalDate'
import Search from './components/search/Search'

function App() {
  return (
    <main className='container mx-auto sm:w-1/2'>
      <div className={styles.wrapper}>
        <Cities />
        <Search />
        <LocalDate />
        <CurrentWeather />
        <Forecast />
      </div>
    </main>
  )
}

export default App
