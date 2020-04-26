import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";

import DataTable from './DataTable';
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
  EuiFieldNumber,
  EuiFormRow,
  EuiSelect
} from '@elastic/eui';

const data = [
  {
    id: 1,
    SubjectCode:'ce147',
    SubjectName:'C',
    Credits:4,
    Semester: 1
  },
  {
    id: 2,
    SubjectCode:'ce147',
    SubjectName:'C++',
    Credits:4,
    Semester: 2
  },
  {
    id: 3,
    SubjectCode:'ce147',
    SubjectName:'JAVA',
    Credits:4,
    Semester: 3
  },
  {
    id: 4,
    SubjectCode:'ce147',
    SubjectName:'OS',
    Credits:4,
    Semester: 4
  },
  {
    id: 5,
    SubjectCode:'ce147',
    SubjectName:'SMP',
    Credits:4,
    Semester: 8
  },

  
];
const fieldName = ["id", "SubjectCode", "SubjectName", "Credits", "Semester"];

class SubjectData extends Component {
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
componentWillMount(){
  if(localStorage.getItem("login")){
    console.log("login successfull")
  }
  else{
    this.setState({redirect:true});
  }
}
  render() {
    if (this.state.redirect) {
     // return <Redirect to="/login" />;
    }
    let modal;

    if (this.state.isModalVisible) {
      modal = (
        <EuiOverlayMask>
          <EuiModal onClose={this.closeModal}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Add</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
                <h4>Add via CSV!!</h4>
            <Fragment>
                <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                    <EuiFilePicker
                        id="asdf2"
                        multiple
                        initialPromptText="Select or drag and drop multiple files"
                        onChange={files => {
                        this.onChange(files);
                        }}
                        display={this.state.large ? 'large' : 'default'}
                    />
                    <EuiSpacer />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiText>
                    <h3>Files attached</h3>
                    {this.renderFiles()}
                    </EuiText>
                </EuiFlexItem>
                </EuiFlexGroup>
            </Fragment>
         
            <hr/>

            <h4>Add Manualy!!</h4>
            <div >
                <EuiFieldText
                    placeholder="Subject-Code"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                <EuiFieldText
                    placeholder="Subject-Name"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                  <EuiFieldNumber
                      placeholder="Credits"
                      value={this.state.value}
                      onChange={this.onChange}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                    <EuiFormRow
                    label="Semester"
                   >
                    <EuiSelect
                      hasNoInitialSelection
                      options={[
                        { value: '1', text: '1' },
                        { value: '2', text: '2' },
                        { value: '3', text: '3' },
                        { value: '4', text: '4' },
                        { value: '5', text: '5' },
                        { value: '6', text: '6' },
                        { value: '7', text: '7' },
                        { value: '8', text: '8' },
                      ]}
                    />
                  </EuiFormRow>

                 <EuiButton size='s' fill onClick={() => window.alert('Button clicked')}>
                Upload
                </EuiButton>
            </div>
            
            
            </EuiModalBody>
            <EuiModalFooter>
              <EuiButtonEmpty onClick={this.closeModal}>Cancel</EuiButtonEmpty>

              <EuiButton onClick={this.closeModal} fill>
                Save
              </EuiButton>
            </EuiModalFooter>
          </EuiModal>
        </EuiOverlayMask>
      );
    }
    return (
      <div className=''>      
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Subject Data</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection>
            <EuiButton size='s' onClick={this.showModal}>Add</EuiButton>
              {modal}
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <DataTable fieldName={fieldName} data={data} />   

          </EuiPageContentBody>
        </EuiPageContent>
    </div>
    );
  }
}
export default SubjectData;
