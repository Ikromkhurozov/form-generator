import React, {lazy, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
  Button, CheckboxInput,
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
  const [showOption, setShowOption] = useState(false)
  const [formData, setFormData] = useState([]);
  const [selectData, setSelectData] = useState({
    selectLabel: '',
    regionValue: '',
    options: {
      optionName: "",
      optionValue: "",
    },
    inputRequired: false,
  });

  const handleSelectValue = (e) => {
    const { name, value, type, checked } = e.target;

    setSelectData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onAddOption = () => {
    setFormData([...formData, { ...selectData }]);
    setSelectData({
      options: {
        optionName: "",
        optionValue: "",
      },
    });
    setShowOption(false)

    console.log("selectData", selectData)
  };

  const handleRemoveField = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const handleSave =() => {
    setFormData([...formData, {...selectData}]);
    setSelectData({
      selectLabel: '',
      regionValue: '',
      options: {
        optionName: "",
        optionValue: "",
      },
      inputRequired: false,
    })

    console.log("formData", formData)
    // navigate(`/`)
  }

  const handleBack = () => {
    navigate(`/`)
  }

  const onOpenOptions = () => {
    setShowOption(true)
  }

  const onCancelOption = () => {
    setShowOption(false)
  }


  return (
    <FormPageContainer>
      <CustomText fontSize="22px" weight="600" color="#555">
        Fill all the Fields to create <mark>Selectable</mark> Input
      </CustomText>

      <FormWrapper display="flex" maxWidth="560px">
        <CustomInputWrapper>
          <Label>Label of Select</Label>
          <CustomInput onChange={handleSelectValue} value={selectData.selectLabel} name="selectLabel" placeholder="Example: Select region" marginTop="8px"></CustomInput>
        </CustomInputWrapper>

        <CustomInputWrapper>
          <Label>Enter Region</Label>
          <CustomInput width="350px" onChange={handleSelectValue} value={selectData.regionValue} name="regionValue" placeholder="Example: tashkent" marginTop="8px"></CustomInput>
        </CustomInputWrapper>
        <CreatingOptionWrapper>

          {!showOption && <Button onClick={onOpenOptions} width="190px" color="#fff" bgColor="#4CA008" marginRight="15px" height="40px">Add option</Button>}

          {showOption && (
            <>
              <CustomInputWrapper>
                <Label>Name of Option (district)</Label>
                <CustomInput onChange={handleSelectValue}  width="190px" name="optionName" placeholder="Example: mirabad" marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <CustomInputWrapper margin="15px 0 15px 20px">
                <Label>Value of option</Label>
                <CustomInput onChange={handleSelectValue}  name="optionValue" placeholder="Example: tashkent " marginTop="8px"></CustomInput>
              </CustomInputWrapper>
              <Button onClick={onCancelOption} width="60px" color="#fff" bgColor="#999" marginLeft="12px" marginTop="30px" height="40px">Cancel</Button>
              <Button onClick={onAddOption} width="60px" color="#fff" marginLeft="12px" marginTop="30px" height="40px">Save</Button>
            </>
          )}
        </CreatingOptionWrapper>

        <CustomInputWrapper flexDirection="row" alignItems="center">
          <CheckboxInput onClick={handleSelectValue} checked={selectData.inputRequired} marginRight="10px" name="inputRequired"></CheckboxInput>
          <Label>Please check if input should be Required!</Label>
        </CustomInputWrapper>
      </FormWrapper>

      <List>
        {formData.map((data, index) => (
          <ListItem key={index}>
            <ItemContent> OptionValue: {data?.optionValue} | regionValue: {data.regionValue} | optionName: {data?.options?.optionName} | inputRequired: {data.inputRequired}</ItemContent>
            <Button onClick={() => handleRemoveField(index)} color="#fff" bgColor="red" width="80px" height="30px" marginLeft="20px" fontSize="14px" >Remove</Button>
          </ListItem>
        ))}
      </List>

      <ButtonGroup onBack={handleBack} onSave={handleSave}/>

    </FormPageContainer>
  );
}
