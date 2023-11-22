import React, {lazy, Suspense} from "react";
import { Routes, Route} from 'react-router-dom';

import PageLoader from "./Components/Loaders/PageLoader";

const Main = lazy(() => import("./Views/Main/Main"));
const GenerateForm = lazy(() => import("./Views/GenerateForm/GenerateForm"));

export default function App() {

  return (
    <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="generate">
            <Route path=":id" element={<GenerateForm/>}/>
          </Route>
        </Routes>
    </Suspense>
  );
}

