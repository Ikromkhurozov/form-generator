import React, {lazy, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {
  CustomInput,
  CustomInputWrapper,
  CustomText,
  FormPageContainer,
  FormWrapper,
  Label
} from "../../assets/styles/CommonStyles";

const ButtonGroup = lazy(() => import("./ButtonGroup"));

 export default function TextForm() {
   const navigate = useNavigate()
   const [inputData, setInputData] = useState({
     inputLabel: '',
     placeholder: '',
     inputType: '',
     defaultValue: '',
     inputLength: '',
     inputRequired: true,
   });

   const handleInputValue = (e) => {
     const { name, value } = e.target;
     setInputData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };

   const handleSave =() => {
    navigate(`/`)
  }

  const handleBack = () => {
    navigate(`/`)
  }


   return (
      <FormPageContainer>
        <CustomText fontSize="22px" weight="600" color="#555">
          Fill all the Fields to create <mark>Input</mark>
        </CustomText>

        <FormWrapper>
          <CustomInputWrapper>
            <Label>Label of input</Label>
            <CustomInput onChange={handleInputValue} name="inputLabel" placeholder="Example: Firstname" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Placeholder of input</Label>
            <CustomInput onChange={handleInputValue} name="placeholder" placeholder="Example: Enter your name" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Type of input (text, email, number, etc.)</Label>
            <CustomInput onChange={handleInputValue} name="inputType" placeholder="Example: text" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Default Value of input (optional)</Label>
            <CustomInput onChange={handleInputValue} name="defaultValue" placeholder="Example: Ikrom" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Min length (text, password)</Label>
            <CustomInput onChange={handleInputValue} name="inputLength" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Your input must be Required or Not (true, false) </Label>
            <CustomInput onChange={handleInputValue} name="inputRequired" placeholder="Example: true" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
        </FormWrapper>

        <ButtonGroup onBack={handleBack} onSave={handleSave}/>

      </FormPageContainer>
  );
}
