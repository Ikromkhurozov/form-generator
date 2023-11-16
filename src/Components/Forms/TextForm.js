import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
  BtnWrapper,
  Button,
  CustomInput,
  CustomInputWrapper,
  CustomText,
  FormPageContainer,
  FormWrapper,
  Label
} from "../../assets/styles/CommonStyles";
 export default function TextForm() {
   const navigate = useNavigate()
   const [inputData, setInputData] = useState({
     inputLabel: '',
     placeholder: '',
     inputType: '',
     defaultValue: '',
     inputLength: '',
     inputRequired: '',
   });

   const handleInputValue = (e) => {
     const { name, value } = e.target;
     setInputData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };

   const onSave =() => {
     navigate(`/`)
   }

   const onBack = () => {
     navigate(`/`)
   }


   return (
      <FormPageContainer>
        <CustomText fontSize="22px" weight="600" color="#555">
          Fill all the Fields to create Input
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

        <BtnWrapper>
          <Button onClick={onBack} bgColor="#999" color="#fff">Back</Button>
          <Button onClick={onSave} bgColor="green" color="#fff">Save</Button>
        </BtnWrapper>

      </FormPageContainer>
  );
}
