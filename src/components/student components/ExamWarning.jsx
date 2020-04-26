import React, { Component } from 'react'
import {
    EuiButton,
    EuiFlexGroup,
    EuiCallOut,
    EuiFlexItem,
  } from '@elastic/eui';

 class ExamWarning extends Component {
    render() {
        return (
            <div className="changecolor">
                <EuiCallOut title="Warning" color="danger" >
                    <p>
                    Do Not Press Back/refresh Button
                    </p>
                </EuiCallOut>

                <h1>Exam Name : </h1>
                <h3>Exam Instruction 1 :</h3>
                <h6><span className="messageHeading">Please make sure that:</span></h6>
                <p>
                If you are using your personal laptop, please make sure that you have installed the necessary software and programs before the examination day. 
                It is important that your laptop fulfils the system requirements of the programme.You must bring your own power supply for use during the examination.
                If failure to comply with these recommendations results in technical problems that cause a delay in your examination, you cannot expect to be granted extended time.
                </p>
                <EuiFlexItem grow={false} className="startExam">
                    <EuiButton fill href="/studentDashboard/exam">
                    Start Exam
                    </EuiButton>
                </EuiFlexItem>

                
            </div>
        )
    }
}

export default ExamWarning;
