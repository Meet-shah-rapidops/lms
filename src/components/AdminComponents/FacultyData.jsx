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
  EuiFormRow,
  EuiSelect,
  EuiFieldNumber
} from '@elastic/eui';

const data = [
  {
    id: 1,
    Name: "Meet",
    Email: "meet@gmail.com",
    Branch:'CE',
    YearOfJoining: '2001',
    SubjectWithBatch:'Java->ce-d-1,ce-d-2,ce-a-1',
    Designation:'Assistant Professor'
  },
  {
    id: 2,
    Name: "Mayur",
    Email: "mayur@gmail.com",
    Branch:'CE',
    YearOfJoining: '2007',
    SubjectWithBatch:'C++->ce-d-1,ce-d-2,ce-a-1',
    Designation:'Assistant Professor'
  },
  {
    id: 3,
    Name: "Nawal",
    Email: "nawal@gmail.com",
    Branch:'CE',
    YearOfJoining: '2011',
    SubjectWithBatch:'C->ce-d-1,ce-d-2,ce-a-1',
    Designation:'Assistant Professor'
  },
  {
    id: 4,
    Name: "Jatin",
    Email: "jatin@gmail.com",
    Branch:'CE',
    YearOfJoining: '2011',
    SubjectWithBatch:'OS->ce-d-1,ce-d-2,ce-a-1',
    Designation:'Assistant Professor'
  },
  {
    id: 5,
    Name: "Aman",
    Email: "aman@gmail.com",
    Branch:'CE',
    YearOfJoining: '2011',
    SubjectWithBatch:'TOC->ce-d-1,ce-d-2,ce-a-1',
    Designation:'Assistant Professor'
  },
  
];
const fieldName = ["id", "Name", "Email", "Branch","YearOfJoining","SubjectWithBatch","Designation"];

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
      //return <Redirect to="/login" />;
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
                    placeholder="Username"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                <EuiFieldText
                    placeholder="Email"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                    <EuiFormRow
                    label="Branch"
                   >
                    <EuiSelect
                      hasNoInitialSelection
                      options={[
                        { value: 'CE', text: 'CE' },
                        { value: 'IT', text: 'IT' },
                        { value: 'Civil', text: 'Civil' },
                        { value: 'Mechanical', text: 'Mechanical' },
                      ]}
                    />
                  </EuiFormRow>
                    <EuiSpacer/>
                    <EuiFieldNumber
                      placeholder="Year of Joining"
                      value={this.state.value}
                      onChange={this.onChange}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                    <EuiFieldText
                    placeholder="Subject with Batches"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>
                    <EuiFieldText
                    placeholder="Designation"
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-label="Use aria labels when no actual label is in use"
                    />
                    <EuiSpacer/>

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
              <h2>Faculty Data</h2>
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
