import React, {useReducer} from 'react';
import {InfoContext} from './components/InfoContext'
import { Routes, Route, Navigate} from 'react-router-dom';
import ShowInfo from  './components/ShowInfo';
import GenderSelect from './components/GenderSelect'
import './App.css';
import Header from './components/Header'
import Form from './components/Form'



function App() {

  const initialInfo = {
    male: [],
    female: []
  }
  const reducer = (info, action) => {
    switch(action.type){
      case "male":
        return {
          ...info,
          male: [...info.male, action.data]
        }
      case "female":
        return {
          ...info,
          female: [...info.female, action.data]
        }
      default:
    }
  }
  const [info, dispatch] = useReducer(reducer,initialInfo)
  const {male, female} = info


  const setForMale = (data) => {
    dispatch({
      type: "male",
      data: data
    })
  }

  const setForFemale = (data) => {
    dispatch({
      type: "female",
      data: data
    })
  }

  return (
      <div>
          <InfoContext.Provider value={{setForMale, setForFemale, male, female}}>
            <Header />
            <Form />
              <div id="show">
                  <GenderSelect/>  
                  <Routes>
                    <Route path="/male" element={<ShowInfo gender="male"/>}/>
                    <Route path="/female" element={<ShowInfo gender="female"/>}/>
                    <Route path="/" element={<Navigate to="/male"/>} />
                  </Routes>            
              </div>

          </InfoContext.Provider>

      </div>
  );
}

export default App;
