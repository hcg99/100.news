'use client';

import HomePageLight from './components/HomePageLight';
import ContactPageDark from './components/ContactPageDark';
import HomePage from './components/HomePage';

export default function Home_L() {
  return (
    <main>
      <HomePageLight />
      {/* <HomePageLight2 /> */}
      {/* ...other content (if any)... */}
    </main>
  );
}

export  function Contact_D() {
  return (
    <main>
      <ContactPageDark />
      {/* ...other content (if any)... */}
    </main>
  );
}

export  function Home() {
  return (
    <main>
      <HomePage />
      {/* ...other content (if any)... */}
    </main>
  );
}

