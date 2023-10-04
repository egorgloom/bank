
import './styles/App.scss';


import Header from './components/Header/Header'
import NavigationLink from './components/NavigationLink/NavigationLink';
import Sidebar from './components/Sidebar/Sidebar';
import Balance from './components/Balance/Balance';





function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <NavigationLink />
        <Sidebar />
        <div>
        <Balance />

        </div>
      </div>

    </>
  )
}

export default App
