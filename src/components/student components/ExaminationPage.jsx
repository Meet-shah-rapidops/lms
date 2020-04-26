import React, { Component } from 'react'
import {
    EuiButton,
    EuiFlexGroup,
    EuiCallOut,
    EuiFlexItem,
} from '@elastic/eui';

 class ExaminationPage extends Component {
    render() {
        return (
            <div>
                <EuiCallOut title="Warning" color="danger" >
                    <p>
                    Do Not Press Back/refresh Button
                    </p>
                </EuiCallOut>
                <div className="Esummary">
                   
                <div className="ExamQuestions">
                <h4>
                    QUESTION 1 OF 20
                </h4><br/>
                <p>
                    India Won The World Championship Of Cricket Defeating Pakistan In The Final By 8 Wickets.Who Was The Man Of Tournament?
                </p><br/>
                <EuiFlexItem grow={false} className="startExam">
                    <EuiButton fill >
                    Previous
                    </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false} className="startExam">
                    <EuiButton fill color="danger">
                    Mark 
                    </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false} className="startExam">
                    <EuiButton fill >
                    Clear
                    </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false} className="startExam">
                    <EuiButton fill color="secondary">
                    Next
                    </EuiButton>
                </EuiFlexItem>
                </div>
                <div className="ExamSummary">
                    <h4>Pre Test</h4>
                <p className="QuestionSummary"> 
                    1
                    </p>
                <p className="QuestionSummary"> 
                    2
                    </p>
                    <p className="QuestionSummary"> 
                    3
                    </p>
                    <p className="QuestionSummary"> 
                    4
                    </p>
                    <p className="QuestionSummary"> 
                    5
                    </p>
                    <p className="QuestionSummary"> 
                    6
                    </p>
                    <p className="QuestionSummary"> 
                    7
                    </p>
                    <p className="QuestionSummary"> 
                    8
                    </p>
                    <p className="QuestionSummary"> 
                    9
                    </p>
                    <p className="QuestionSummary"> 
                    10
                    </p>
                    <p className="QuestionSummary"> 
                    11
                    </p>
                    <p className="QuestionSummary"> 
                    12
                    </p>
                    <p className="QuestionSummary"> 
                    13
                    </p>
                    <p className="QuestionSummary"> 
                    14
                    </p>
                    <p className="QuestionSummary"> 
                    15
                    </p>
                    <p className="QuestionSummary"> 
                    16
                    </p>
                    <p className="QuestionSummary"> 
                    17
                    </p>
                    <p className="QuestionSummary"> 
                    18
                    </p>
                    <p className="QuestionSummary"> 
                    19
                    </p>
                    <p className="QuestionSummary"> 
                    20
                    </p>

                   
                </div>
                </div>
               
                </div>
        )
    }
}

export default ExaminationPage;
