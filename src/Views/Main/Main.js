import React, {lazy} from 'react';
import {GeneratedForm, MainContainer} from "./MainStyles";


const FormOptions = lazy(() => import("../../Components/FormOptions/FormOptions"));

export default function Main() {
  return (
    <MainContainer>
      <FormOptions/>

      <GeneratedForm>
        This is the place for generated form
      </GeneratedForm>

    </MainContainer>
  );
}

