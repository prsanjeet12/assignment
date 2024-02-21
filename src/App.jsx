import React from 'react';
import TopHeader from './components/Dashboard/TopHeader.tsx';
import SideBar from './components/Dashboard/SideBar.tsx';
import Header from './components/Dashboard/Header.tsx';
import MiddleContainer from './components/Dashboard/MiddleContainer.tsx';
import RightContainer from './components/Dashboard/RightContainer.tsx';
// import Footer from './components/Dashboard/Footer.tsx';

function App() {
  return (
    <div className='relative'>
      <TopHeader />
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <div className="flex flex-col w-full lg:flex-grow">
          <Header />
          {/* <Footer/> */}
          <div className='mt-5 lg:flex flex-col'> 
            <MiddleContainer className="mt-4" />
            <RightContainer/>
         
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
