import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SimpleForm from './components/Form';
import Api from './components/Api';
import TodoList from './components/TodoList';
// import { Form } from 'react-router-dom';
import MyAccordion from './components/Accordion';
import Footer from './components/Footer';
import Popup from './components/Popup';
// import FormWithValidation from './components/Form';



function App() {
 
  return (
    <div className="App">
      <Header />
      <Home />
      <SimpleForm />
      <Api />
      <TodoList />
      <MyAccordion />
      <Popup />
      <Footer />
    </div>
  );
}

export default App;


