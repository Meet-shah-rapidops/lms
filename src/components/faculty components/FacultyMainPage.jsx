import React, { Component } from "react";
import NavbarComponent from "../Navbar";
import {
  Route,
} from "react-router-dom";
import { EuiPage, EuiPageBody, EuiPageSideBar } from "@elastic/eui";
import TreeView from "./TreeView";
import FacultyDashboard from "./FacultyDashboard";
import FacultySubjects from "./FacultySubjects";
import FacultyProfile from "./FacultyProfile";
import FacultyEditProfile from "./FacultyEditProfile";
import Forum from "./Forum";
import GeneralForum from "./GeneralForum";
import LessonForum from "./LessonForum";
import ForumThread from "./ForumThread";
import AddTest from "./AddTest";
import AddAssignment from "./AddAssignment";
import Assignment from "./Assignment";
import ViewAssignment from "./ViewAssignment";

export class FacultyMainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(">>>>>>>>>>>>>>", this.props.history);
  }
  componentDidUpdate() {
    console.log("||||", this.props.history);
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <EuiPage>
          <EuiPageSideBar>
            <TreeView />
          </EuiPageSideBar>
          <EuiPageBody>
            <Route
              exact
              path="/facultyDashboard"
              component={FacultyDashboard}
            />
            <Route
              exact
              path="/facultyDashboard/subjects"
              component={FacultySubjects}
            />
            <Route
              exact
              path="/facultyDashboard/profile"
              component={FacultyProfile}
            />
            <Route
              exact
              path="/facultyDashboard/editprofile"
              component={FacultyEditProfile}
            />
            <Route exact path="/facultyDashboard/addtest" component={AddTest} />
            <Route
              exact
              path="/facultyDashboard/viewAssignment"
              component={Assignment}
            />
            <Route
              exact
              path="/facultyDashboard/gradeAssignment"
              component={ViewAssignment}
            />
            <Route
              exact
              path="/facultyDashboard/addassignment"
              component={AddAssignment}
            />
            <Route exact path="/facultyDashboard/forum" component={Forum} />
            <Route
              exact
              path="/facultyDashboard/generalforum"
              component={GeneralForum}
            />
            <Route
              exact
              path="/facultyDashboard/lessonforum"
              component={LessonForum}
            />
            <Route
              exact
              path="/facultyDashboard/forumthread"
              component={ForumThread}
            />
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default FacultyMainPage;
