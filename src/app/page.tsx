'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import HomePageLight from './components/HomePageLight';
import HomePageLight2 from './components/HomePageLight2';
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

interface Article {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface FilterOptions {
  keyword: string;
  sortBy: 'publishedAt' | 'relevancy';
}

export  function Home() {
  return (
    <main>
      <HomePage />
      {/* ...other content (if any)... */}
    </main>
  );
}

