import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from '../public/pages/HomePage';
import AboutMePage from '../public/pages/AboutMePage';
import IceCreamPage from '../public/pages/IceCreamPage';
import PopsiclePage from '../public/pages/PopsiclePage';
import IceCreamSandwichPage from '../public/pages/IceCreamSandwichPage';

const PageRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutMePage/>} />
        <Route path="/iceCream" element={<IceCreamPage/>} />
        <Route path="/popsicle" element={<PopsiclePage/>} />
        <Route path="/sandwich" element={<IceCreamSandwichPage/>} />
      </Routes>
  );
};

export default PageRouter;
