
import './styles/App.scss';


import Header from './components/Header/Header'
import NavigationLink from './components/NavigationLink/NavigationLink';
import Sidebar from './components/Sidebar/Sidebar';
import TotalBalance from './components/TotalBalance/TotalBalance';
import ReferralLink from './components/ReferralLink/ReferralLink';
import RecentContacts from './components/RecentContacts/RecentContacts';





function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <NavigationLink />
        <Sidebar />
        <div className='pageContainer'>
          <div className='referralWrapper'>
            <TotalBalance />
            <ReferralLink />
          </div>
          <RecentContacts />

        </div>
      </div>

    </>
  )
}

export default App
