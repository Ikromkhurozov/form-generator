import React, {lazy, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {
  Button,
  CheckboxInput,
  CustomInput,
  CustomInputWrapper,
  CustomText,
  FormPageContainer,
  FormWrapper,
  Label
} from "../../assets/styles/CommonStyles";
import {ItemContent, List, ListItem} from "./SelectFormStyles";

const ButtonGroup = lazy(() => import("./ButtonGroup"));

 export default function TextForm() {
   const navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const [inputData, setInputData] = useState({
     inputLabel: "",
     placeholder: "",
     inputType: "",
     defaultValue: "",
     inputLength: "",
     id: "",
     inputRequired: false,
   });
   const [savedData, setSavedData] = useState([]);

   const handleInputValue = (e) => {
     const { name, value, type, checked } = e.target;
     setInputData((prevInputData) => ({
       ...prevInputData,
       [name]: type === 'checkbox' ? checked : value,
     }));
   };

   const onAddInput = () => {
     setSavedData((prevSavedData) => [...prevSavedData, {...inputData}]);

     setInputData({
       inputLabel: "",
       placeholder: "",
       inputType: "",
       defaultValue: "",
       inputLength: "",
       id: "",
       inputRequired: false,
     });
   }

   const onRemoveElement = (index) => {
     const updatedData = [...savedData];
     updatedData.splice(index, 1);
     setSavedData(updatedData);
   };

   const handleSave = () => {
     setLoading(true);

     setTimeout(() => {
       localStorage.setItem('inputFormDetails', JSON.stringify(savedData))

       setLoading(false);
       navigate(`/`)
     }, 1100);
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
            <CustomInput onChange={handleInputValue} name="inputLabel"  value={inputData.inputLabel} placeholder="Example: Firstname" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Placeholder of input</Label>
            <CustomInput onChange={handleInputValue} name="placeholder" value={inputData.placeholder} placeholder="Example: Enter your name" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Type of input (text, email, number, etc.)</Label>
            <CustomInput onChange={handleInputValue} name="inputType" value={inputData.inputType} placeholder="Example: text" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Default Value of input (optional)</Label>
            <CustomInput onChange={handleInputValue} name="defaultValue" value={inputData.defaultValue} placeholder="Example: (your name)" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>Max length of text (optional)</Label>
            <CustomInput onChange={handleInputValue} name="inputLength" value={inputData.inputLength} marginTop="8px" placeholder="Example: 100"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Label>ID for input</Label>
            <CustomInput onChange={handleInputValue} name="id" value={inputData.id} marginTop="8px" placeholder="Example: 1234"></CustomInput>
          </CustomInputWrapper>
          <CustomInputWrapper flexDirection="row" alignItems="center">
            <CheckboxInput onClick={handleInputValue} value={inputData.inputRequired} checked={inputData.inputRequired} marginRight="10px" name="inputRequired"></CheckboxInput>
            <Label>Please check if input should be Required!</Label>
          </CustomInputWrapper>
          <CustomInputWrapper>
            <Button onClick={onAddInput} color="#fff" width="80px" bgColor="#17B35D">Add !</Button>
          </CustomInputWrapper>
        </FormWrapper>

        <List>
          {savedData.map((data, index) => (
            <ListItem key={index}>
              <ItemContent> inputLabel: {data?.inputLabel} | placeholder: {data.placeholder} | inputType: {data?.inputType} | defaultValue: {data.defaultValue} | inputLength: {data?.inputLength} | id: {data?.id} inputRequired: {data?.inputRequired ? "Yes" : "No"}</ItemContent>
              <Button onClick={() => onRemoveElement(index)} color="#fff" bgColor="red" width="180px" height="30px" marginLeft="20px" fontSize="14px" >Remove item if it isn't true</Button>
            </ListItem>
          ))}
        </List>

        <ButtonGroup onBack={handleBack} onSave={handleSave} isLoading={loading}/>

      </FormPageContainer>
   );
}
