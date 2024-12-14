import './App.css'
import BottmBarMain from './components/BottomBar/BottmBarMain'
import MainContentsMain from './components/MainContents/MainContentsMain'
import StoriesBarMain from './components/StoriesBar/StoriesBarMain'
import TopBarMain from './components/TopBar/TopBarMain'

function App() {

  return (
    <div className='main'>
      <TopBarMain/>
      <div className='Contents'>
        <StoriesBarMain/>
        <MainContentsMain/>
      </div>
      <BottmBarMain/>
    </div>
  )
}

export default App
