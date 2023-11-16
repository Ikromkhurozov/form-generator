import React, {lazy, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
  Button,
  CustomInput,
  CustomInputWrapper,
  CustomText,
  FormPageContainer,
  FormWrapper,
  Label
} from "../../assets/styles/CommonStyles";

import {CreatingOptionWrapper, ItemContent, List, ListItem} from "./SelectFormStyles"

const ButtonGroup = lazy(() => import("./ButtonGroup"));

export default function SelectForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState([]);
  const [selectData, setSelectData] = useState({
    selectLabel: '',
    optionValue: '',
    regionValue: '',
    optionName: '',
    inputRequired: true,
  });

  const handleSelectValue = (e) => {
    const { name, value } = e.target;
    setSelectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddField = () => {
    setFormData([...formData, { ...selectData }]);
    setSelectData({
      selectLabel: '',
      optionValue: '',
      regionValue: '',
      optionName: '',
      inputRequired: '',
    });
  };

  const handleRemoveField = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
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
        Fill all the Fields to create <mark>Selectable</mark> Input
      </CustomText>

      <FormWrapper>
        <CustomInputWrapper>
          <Label>Label of Select</Label>
          <CustomInput onChange={handleSelectValue} value={selectData.selectLabel} name="selectLabel" placeholder="Example: Select region" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CustomInputWrapper>
          <Label>Value of option</Label>
          <CustomInput onChange={handleSelectValue} value={selectData.optionValue} name="optionValue" placeholder="Example: tashkent " marginTop="8px"></CustomInput>
        </CustomInputWrapper>

        <CustomInputWrapper>
          <Label>Enter Region</Label>
          <CustomInput onChange={handleSelectValue} value={selectData.regionValue} name="regionValue" placeholder="Example: tashkent" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CreatingOptionWrapper>
          <CustomInputWrapper>
            <Label>Enter Options (District)</Label>
            <CustomInput onChange={handleSelectValue} value={selectData.optionName} width="210px" name="optionName" placeholder="Example: mirabad" marginTop="8px"></CustomInput>
          </CustomInputWrapper>
          <Button onClick={handleAddField} width="70px" color="#fff" marginLeft="12px" marginTop="30px" height="40px">Add</Button>
        </CreatingOptionWrapper>

        <CustomInputWrapper>
          <Label>Your input must be Required or Not (true, false) </Label>
          <CustomInput onChange={handleSelectValue} value={selectData.inputRequired} name="inputRequired" placeholder="Example: true" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
      </FormWrapper>

      <List>
        {formData.map((data, index) => (
          <ListItem key={index}>
            <ItemContent> OptionValue: {data.optionValue} | regionValue: {data.regionValue} | optionName: {data.optionName} | inputRequired: {data.inputRequired}</ItemContent>
            <Button onClick={() => handleRemoveField(index)} color="#fff" bgColor="red" width="80px" height="30px" marginLeft="20px" fontSize="14px" >Remove</Button>
          </ListItem>
        ))}
      </List>

      <ButtonGroup onBack={handleBack} onSave={handleSave}/>

    </FormPageContainer>
  );
}
