// import RegistrationForm from '../component/Registration';
// import { useEffect, useState } from 'react';

// function Home() {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setShowModal(true);
//     }, 5000);
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Homepage</h1>
//       <RegistrationForm showModal={showModal} setShowModal={setShowModal} />
//     </div>
//   );
// }

// export default Home;

import React from 'react'
import {TopStories, Footer, Recommendation,Trending} from '../component/defaults'

const Home = () => {
  return (
    <div>
      <TopStories />
      <Trending />
      <Recommendation />
      <Footer />
    </div>
  )
}

export default Home
