import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="bg-image shadow-2-strong">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6  col-xl-6 col-lg-12 col-sm-12">
              <form className="bg-color  rounded-5 shadow-5-strong  p-5 reg-form">
                <h4>Register</h4>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <h3>Username *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <h3>E-mail *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <h3>First Name *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <h3>Last Name *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <h3>Password *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <h3>Repeat Password *</h3>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="CheckBox mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Premium - 199$ / 1 Month{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      {" "}
                      Standard - 99$ / 1 Month{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Basic - 29$ / 1 Month{" "}
                    </label>
                  </div>
                </div>
                <div>
                  <button className="reg-btn" type="button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
