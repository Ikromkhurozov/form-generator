import React, {lazy} from 'react';
import { MainContainer} from "./MainStyles";

const FormOptions = lazy(() => import("../../Components/Forms/FormOptions"));
const Form = lazy(() => import("../../Components/Forms/Form"));

export default function Main() {

  return (
    <MainContainer>
      <FormOptions/>

      <Form/>
    </MainContainer>
  );
}

