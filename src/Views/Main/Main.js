import React, {lazy, useEffect, useState} from 'react';
import {GeneratedForm, MainContainer} from "./MainStyles";


const FormOptions = lazy(() => import("../../Components/Forms/FormOptions"));

export default function Main() {
  const [savedInputData, setSavedInputData] = useState([])
  const [savedCheckboxData, setSavedCheckboxData] = useState([])


  useEffect(() => {
    const storedInputData = localStorage.getItem('inputFormDetails');
    const storedCheckboxData = localStorage.getItem("checkboxFormDetails")

    if (storedInputData) {
      setSavedInputData(JSON.parse(storedInputData));
    }

    if (storedCheckboxData){
      setSavedCheckboxData(JSON.parse(storedCheckboxData));
    }
  },[])

  return (
    <MainContainer>
      <FormOptions/>

      <GeneratedForm>
        This is the place for generated form
      </GeneratedForm>

    </MainContainer>
  );
}

