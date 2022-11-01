import React from "react";
import "./PopUpModal.css";

const popUpModal = (props) => {
  const handleSubmit = (event) => {
    event.preventventDefault();
    event.stopPropagation();
    console.log("rfhrfrfhjf");
  };
  return (
    <>
      <div className={`modal ${props?.visible ? "showModal" : "hideModal"}`}>
        <div className="box" onClick={props?.handleHideModal}>
          <span
            onClick={props?.handleHideModal}
            className="close"
            title="Close Modal"
          >
            ×
          </span>
        </div>
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="container">
            <h1>User Details</h1>
            <form>
              <div className="form-div">
                <div className="form-labels">
                  <label>Name:</label>
                  <label>Total Working Hours:</label>
                  <label>Work Shift:</label>
                </div>
                <div className="form-fields">
                  <input type="text" name="name" required />
                  <input
                    type="number"
                    name="TotalHours"
                    required
                    min="2"
                    max="12"
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <div>
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value={1}
                        required
                        defaultChecked
                      />
                      <label id="InputValue">Morning</label>
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value={2}
                        required
                      />
                      <label id="InputValue">Afternoon</label>
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value={3}
                        required
                      />
                      <label id="InputValue">Night</label>
                    </div>
                    {/* <div
                    // style={{
                    //   width: "100%",
                    //   display: "flex",
                    //   flexDirection: "row",
                    // }}
                    >
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value="morning"
                        required
                        defaultChecked
                      />
                      <label
                      // style={{
                      //   margin: "auto",
                      //   width: "100%",
                      //   padding: "5px",
                      // }}
                      >
                        Morning
                      </label>
                    </div>
                    <div>
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value="night"
                        required
                      />
                      <label>Afternoon</label>
                    </div>
                    <div>
                      <input
                        id="radio"
                        type="radio"
                        name="shift"
                        value="night"
                        required
                      />
                      <label>Night</label>
                    </div> */}
                  </div>
                </div>
              </div>
              <input id="form-submit" type="submit" value="Submit" />
            </form>
            <div className="clearfix"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default popUpModal;
