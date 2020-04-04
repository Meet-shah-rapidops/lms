import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PostData from "../services/PostData";

import {
  EuiForm,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
 
} from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      newPassword: "",
      confirmPassword: "",
      redirect: false
    };
  }

  forgotPassword = () => {
    console.warn(this.state);
    PostData("forgotPassword", this.state)
      .then(result => {
        let responseJSON = result;
        console.log(responseJSON);
        if (result.message) {
          console.log(result);
          this.setState({ redirect: true });
        } else if (result.error) {
          console.log(result.error);
          alert(result.error);
        }
      })
      .catch(error => {
        alert(error.error);
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="">
        <EuiPage>
          <EuiPageBody>
            <EuiPageContent
              verticalPosition="center"
              horizontalPosition="center"
            >
              <EuiPageContentHeader>
                <EuiPageContentHeaderSection>
                  <EuiTitle>
                    <h2>Change Password</h2>
                  </EuiTitle>
                </EuiPageContentHeaderSection>
              </EuiPageContentHeader>
              <EuiPageContentBody>
                <EuiForm style={{ width: 350 }}>

                  <EuiFormRow
                    label="Email"
                    name='email'
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  >
                    <EuiFieldText icon="email" />
                  </EuiFormRow>

                  <EuiFormRow
                    label="New-Password"
                    name='newPassword'
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ newPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>
                  <EuiFormRow
                    label="Confirm-Password"
                    name='confirmPassword'
                    helpText="Must include one number and one symbol"
                    value={this.state.value}
                    onChange={event =>
                      this.setState({ confirmPassword: event.target.value })
                    }
                  >
                    <EuiFieldPassword icon="lock" />
                  </EuiFormRow>
                  <EuiSpacer />
                  <EuiButton
                    type="submit"
                    fill
                    onClick={() => {
                      this.forgotPassword();
                    }}
                  >
                    Change Password
                  </EuiButton>
                </EuiForm>
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      </div>
    );
  }
}

export default ForgetPassword;
