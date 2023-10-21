import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookmarksList from "./components/BookmarksList.jsx";
import Provider from "./contexts/user/Provider.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
        <Header title="Bookmarks"/>
        <Provider>
            <BookmarksList />
        </Provider>
    </div>
  );
}

export default App
