import React from "react";
import { Route } from "react-router-dom";

import LoginPageComponent from "../components/Login";
import AdminRouting from "../components/AdminComponents/AdminRouting";
import FacultyMainPage from "../components/faculty components/FacultyMainPage";
import StudentMainPage from "../components/student components/StudentMainPage";
import RegisterComponent from "../components/Register";
import GetForgetPassword from "../components/GetForgetPassword";
import ChangePassword from "../components/ChangePassword";
import CheckOtp from "../components/CheckOtp";
import ForgetPassword from "../components/ForgetPassword";
import ForgetCheckOtp from "../components/ForgetCheckOtp";

const Routing = () => {
  return (
    <>
        <Route exact path="/">
        <LoginPageComponent />
      </Route>
      <Route exact path="/register">
        <RegisterComponent />
      </Route>

      <Route exact path="/getforget">
        <GetForgetPassword />
      </Route>
      <Route exact path="/forget">
        <ForgetPassword />
      </Route>
      <Route exact path="/changepassword">
        <ChangePassword />
      </Route>
      <Route exact path="/checkotp">
        <CheckOtp />
      </Route>
      <Route exact path="/forgetcheckotp">
        <ForgetCheckOtp />
      </Route>
      <Route path="/adminDashboard">
        <AdminRouting />
      </Route>

      <Route path="/facultyDashboard" component={FacultyMainPage} />
  

      <Route path="/studentDashboard">
        <StudentMainPage />
      </Route>


    </>
  );
};

export default Routing;
