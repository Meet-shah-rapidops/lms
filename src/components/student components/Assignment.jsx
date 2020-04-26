import React, { Component, Fragment } from 'react';
import DataTable from '../AdminComponents/DataTable';
import {
  EuiButton,
  EuiPanel,
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
} from '@elastic/eui';

const data = [
  {
    id: 1,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com",
    age: 26,
  },
  {
    id: 2,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com"
  },
  {
    id: 3,
    firstName: "Nawal",
    lastName: "Kishor",
    Email: "nawal2733@gmail.com"
  }
];
const fieldName = ["id", "firstName", "lastName", "Email", "age",];

class Assignment extends Component {
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
//   renderFiles() {
//     if (this.state.files.length > 0) {
//       return (
//         <ul>
//           {Object.keys(this.state.files).map((item, i) => (
//             <li key={i}>
//               <strong>{this.state.files[item].name}</strong> (
//               {this.state.files[item].size} bytes)
//             </li>
//           ))}
//         </ul>
//       );
//     } else {
//       return (
//         <p>Add some files to see a demo of retrieving from the FileList</p>
//       );
//     }
// }
  render() {
    let modal;

    if (this.state.isModalVisible) {
      modal = (
        // <EuiOverlayMask>
        //   <EuiOverlayMask>
<EuiPanel >
<p>1. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​ last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the array.</p>
<p>2. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​ ​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-) between​ ​ each​ ​ two​ ​ even​ ​ numbers.</p>
<p>3. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ find​ ​ the​ ​ most​ ​ frequent​ ​ item​ ​ of​ ​ an​ ​ array.</p>
<p>4. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​ array.</p>
<p> 5. Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​ of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays.</p>
<Fragment>
                <EuiFlexGroup >
                <EuiFlexItem grow={null} >
                    <EuiFilePicker
                        id="asdf2"
                        multiple
                        initialPromptText="Select or drag and drop multiple files"
                        onChange={files => {
                        this.onChange(files);
                        }}
                        display={this.state.small ? 'small' : 'default'}
                    />
                    <EuiSpacer />
                </EuiFlexItem>
                <EuiFlexItem grow={null}>
                <EuiButton size='s' fill onClick={() => window.alert('Button clicked')}>
            Upload
            </EuiButton>

           
                </EuiFlexItem>
                <EuiFlexItem grow={null}>
                   <EuiButton  color="danger" size='s' fill onClick={this.closeModal}>Cancel</EuiButton>
                </EuiFlexItem>
                
           
                {/* <EuiFlexItem>
                    <EuiText>
                    <h3>Files attached</h3>
                    {this.renderFiles()}
                    </EuiText>
                </EuiFlexItem> */}
                </EuiFlexGroup>
                
            </Fragment>
            
            </EuiPanel>
            
      );
    }
    return (
      <div className=''>      
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Student Data</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
         
        </EuiPageContentHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <DataTable fieldName={fieldName} data={data} />   
          </EuiPageContentBody>
        </EuiPageContent>
        <EuiPageContentHeaderSection>
            <EuiButton size='s' onClick={this.showModal}>Add</EuiButton>
              {modal}
          </EuiPageContentHeaderSection>
    </div>
    );
  }
}
export default Assignment;