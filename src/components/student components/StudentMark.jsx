import React, { Component, Fragment } from 'react';
import DataTable from '../AdminComponents/DataTable';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiFieldText,
  EuiFieldPassword,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';

const data = [
  {
    Subject: "DBMS",
    Exam: "DBMS EXAM",
    Attendance: "100%",
    Total: "90%"
  },
  {
    Subject: "DBMS",
    Exam: "DBMS EXAM",
    Attendance: "100%",
    Total: "90%"
  },
  {
    Subject: "DBMS",
    Exam: "DBMS EXAM",
    Attendance: "100%",
    Total: "90%"
  },
  {
    Subject: "DBMS",
    Exam: "DBMS EXAM",
    Attendance: "100%",
    Total: "90%"
  },
 
];
const fieldName = ["Subject", "Exam", "Attendance", "Total",];

class StudentMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      files: {},
      large: true,
    };

    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  onChange = files => {
    this.setState({
      files: files,
    });
  };
  renderFiles() {
    if (this.state.files.length > 0) {
      return (
        <ul>
          {Object.keys(this.state.files).map((item, i) => (
            <li key={i}>
              <strong>{this.state.files[item].name}</strong> (
              {this.state.files[item].size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>Add some files to see a demo of retrieving from the FileList</p>
      );
    }
}
  render() {
    return (
      <div className=''>    
      
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Student Data</h2>

            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiFlexGroup gutterSize="l">
      <div id="profileCard">
    <EuiFlexItem>
      <EuiCard
        textAlign="center"
        image="https://source.unsplash.com/400x200/?Nature"
        title = "Rishabh"
        description = "student"
    
      />
       {/* <DataTable fieldName={fieldName} data={data} /> */}
    </EuiFlexItem>
      </div>
  </EuiFlexGroup>  
  <div id="studentMark">
        <EuiPageContent>
          <EuiPageContentBody>
          <EuiTitle>
              <h2>First Semester</h2>

            </EuiTitle>
            <DataTable fieldName={fieldName} data={data} />
          </EuiPageContentBody> 
        </EuiPageContent>

        </div>
        <div></div>
        <div id="studentMark">
        <EuiPageContent>
          <EuiPageContentBody>
          <EuiTitle>
              <h2>Second Semester</h2>

            </EuiTitle>
            <DataTable fieldName={fieldName} data={data} />
          </EuiPageContentBody> 
        </EuiPageContent>

        </div>
        <div></div>
  <div id="studentMark">
        <EuiPageContent>
          <EuiPageContentBody>
          <EuiTitle>
              <h2>Third Semester</h2>

            </EuiTitle>
            <DataTable fieldName={fieldName} data={data} />
          </EuiPageContentBody> 
        </EuiPageContent>

        </div>
        <div></div>
        <div id="studentMark">
        <EuiPageContent>
          <EuiPageContentBody>
          <EuiTitle>
              <h2>Fourth Semester</h2>

            </EuiTitle>
            <DataTable fieldName={fieldName} data={data} />
          </EuiPageContentBody> 
        </EuiPageContent>

        </div>  
    </div>
    );
  }
}
export default StudentMark;