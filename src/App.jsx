import './App.css'
import Header from './components/Header'
import Home from './components/Home/Home'
import MoviePost from './components/MoviePost/MoviePost'
import {orginals,action,comedy,horror,romance,drama,toprated,documentry} from './components/Url'
function App() {
  return (
    <>
    <Header/>

    <Home/>
    <MoviePost url={orginals} title='Netflix Orginals'/>
    <MoviePost url={toprated} title='Top Rated' isSmall={true}/>
    <MoviePost url={action} title='Action Movies' isSmall={true}/>
    <MoviePost url={comedy} title='Comedy Movies' isSmall={true}/>
    <MoviePost url={drama} title='Drama Movies' isSmall={true}/>
    <MoviePost url={horror} title='Horror Movies' isSmall={true}/>
    <MoviePost url={romance} title='Romance Movies' isSmall={true}/>
    <MoviePost url={documentry} title='Documentries' isSmall={true}/>

    </>
  )
}

export default App
