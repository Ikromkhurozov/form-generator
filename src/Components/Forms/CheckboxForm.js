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

export default function CheckboxForm() {
  const navigate = useNavigate()
  const [checkboxData, setCheckboxData] = useState({
    checkboxLabel: '',
    valueCheckbox: '',
    nameCheckbox: '',
    inputType: "checkbox",
    inputRequired: true,
  });

  const handleCheckboxValue = (e) => {
    const { name, value } = e.target;
    setCheckboxData((prevData) => ({
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

      <FormWrapper maxWidth="750px">
        <CustomInputWrapper>
          <Label>Label of Checkbox</Label>
          <CustomInput onChange={handleCheckboxValue} name="checkboxLabel" placeholder="Example: Please check languages, you wanna learn" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Value of Checkbox</Label>
          <CustomInput onChange={handleCheckboxValue} name="valueCheckbox" placeholder="Example: russian, english" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Name of Checkbox</Label>
          <CustomInput onChange={handleCheckboxValue} name="nameCheckbox" placeholder="Example: nameCheckbox" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Type of input (text, email, number, etc.)</Label>
          <CustomInput onChange={handleCheckboxValue} name="inputType" placeholder="Checkbox" marginTop="8px" disabled="disabled"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Your input must be Required or Not (true, false) </Label>
          <CustomInput onChange={handleCheckboxValue} name="inputRequired" placeholder="Example: true" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
      </FormWrapper>

      <ButtonGroup onBack={handleBack} onSave={handleSave}/>

    </FormPageContainer>
  );
}
