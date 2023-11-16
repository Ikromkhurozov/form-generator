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

export default function RadioForm() {
  const navigate = useNavigate()
  const [radioData, setRadioData] = useState({
    radioLabel: '',
    valueRadio: '',
    nameRadio: '',
    inputType: "radio",
    inputRequired: true,
  });

  const handleRadioValue = (e) => {
    const { name, value } = e.target;
    setRadioData((prevData) => ({
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
        Fill all the Fields to create <mark>Radio</mark>
      </CustomText>

      <FormWrapper>
        <CustomInputWrapper>
          <Label>Label of Radio</Label>
          <CustomInput onChange={handleRadioValue} name="radioLabel" placeholder="Example: Please select your age" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Value of Radio</Label>
          <CustomInput onChange={handleRadioValue} name="valueRadio" placeholder="Example: 12-20 or 20-30" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Name of Radio</Label>
          <CustomInput onChange={handleRadioValue} name="nameRadio" placeholder="Example: nameRadio" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Type of input (text, email, number, etc.)</Label>
          <CustomInput onChange={handleRadioValue} name="inputType" placeholder="Radio" marginTop="8px" disabled="disabled"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Your input must be Required or Not (true, false) </Label>
          <CustomInput onChange={handleRadioValue} name="inputRequired" placeholder="Example: true" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
      </FormWrapper>

      <ButtonGroup onBack={handleBack} onSave={handleSave}/>

    </FormPageContainer>
  );
}
