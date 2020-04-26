import React, { Component } from 'react'
import NavbarComponent from "../Navbar";
import { 
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
} from '@elastic/eui'
import TreeView from './TreeView'
import StudentDashboard from './StudentDashboard'
import StudentSubjects from './StudentSubjects';
import StudentProfile from './StudentProfile';
import StudentEditProfile from './StudentEditProfile';
import Forum from './Forum';
import GeneralForum from './GeneralForum';
import LessonForum from './LessonForum';
import ForumThread from './ForumThread';
import Assignment from './Assignment';
import ExamWarning from './ExamWarning';
import ExaminationPage from './ExaminationPage';
import StudentExamSchedule from './StudentExamSchedule';
import StudentMark from './StudentMark';

export class StudentMainPage extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <NavbarComponent />
                <EuiPage>
                    <EuiPageSideBar><TreeView /></EuiPageSideBar>
                    <EuiPageBody>
                        
                            <Switch>
                                <Route exact path="/studentDashboard/" component={StudentDashboard} />
                                <Route exact path="/studentDashboard/subjects" component={StudentSubjects} />
                                <Route exact path="/studentDashboard/profile" component={StudentProfile} />
                                <Route exact path="/studentDashboard/editprofile" component={StudentEditProfile} />
                                <Route exact path="/studentDashboard/forum" component={Forum} />
                                <Route exact path="/studentDashboard/generalforum" component={GeneralForum} />
                                <Route exact path="/studentDashboard/lessonforum" component={LessonForum} />
                                <Route exact path="/studentDashboard/forumthread" component={ForumThread} />
                                <Route exact path="/studentDashboard/assignment" component={Assignment} />
                                <Route exact path="/studentDashboard/schedule" component={StudentExamSchedule} />
                                <Route exact path="/studentDashboard/examWarning" component={ExamWarning} />
                                <Route exact path="/studentDashboard/exam" component={ExaminationPage} />
                            </Switch>
                        
                    </EuiPageBody>
                </EuiPage>
                </BrowserRouter>
            </div>
        )
    }
}

export default StudentMainPage;
