//Default project imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Import Styles
import './styles/global.css'

//Componet imports
import InitialScreen from './components/initialScreen';
import Presentation from './components/presentation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <div className='h-screen w-screen flex bg-page'>
      <div className='presentationState-Mobile md:presentationState-Full'>
        <Presentation/>
      </div>
      <div className="informationState-Mobile md:informationState-Full">
        <InitialScreen/>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();