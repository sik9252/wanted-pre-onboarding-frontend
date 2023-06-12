import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/** pages */
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Todo from "../pages/Todo";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
