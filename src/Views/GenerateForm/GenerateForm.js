import React, {lazy} from 'react';
import { useParams } from 'react-router-dom';

const NotFound = lazy(() => import("../NotFound/NotFound"))
const TextForm = lazy(() => import("../../Components/Forms/TextForm"))
const SelectForm = lazy(() => import("../../Components/Forms/SelectForm"))
const CheckboxForm = lazy(() => import("../../Components/Forms/CheckboxForm"))
export default function GenerateForm() {
  const { id } = useParams();

  const renderFormContent = () => {
    if (id ==="text-input"){
      return <TextForm/>
    } else if (id ==="select-input"){
      return <SelectForm/>
    } else if (id === "checkbox-input"){
      return <CheckboxForm/>
    } else{
      return <NotFound/>
    }
  }
  return renderFormContent();
}
