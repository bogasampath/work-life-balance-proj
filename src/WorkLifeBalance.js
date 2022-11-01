import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

import Header from "./Header";
import Notification from "./Notifications/Notifiction";
import PopUpModal from "./PopUpModal/PopUpModal";

import Logo from "./Assets/work-life-balance-logo.png";
import "./WorkLifeBalance.css";

const WorkLifeBalance = () => {
  const [hideModal, setHideModal] = useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const handleHideModal = () => {
    console.log("cross");
    setHideModal(!hideModal);
  };

  const userName = urlParams.get("name") ? urlParams.get("name") : "Guest";
  const totalHours = parseInt(urlParams.get("TotalHours"));
  const shift = parseInt(urlParams.get("shift"));
  console.log(shift, "fjeif");
  let temp = (totalHours * 0.1) / 60;
  let breakTotal = temp.toFixed(2) * 100;

  useEffect(() => {
    setName(userName);
    console.log(typeof totalHours);

    console.log(breakTotal);

    setData([
      { title: "Total", value: totalHours, color: "#E38627" },
      { title: "Break", value: breakTotal, color: "#C13C37" },
      { title: "Lunch", value: 1, color: "#6A2135" },
    ]);
  }, []);

  return (
    <div>
      <Header handleHideModal={handleHideModal} />
      <div>
        <img id="logo" src={Logo} width="200px" />
      </div>
      <div>
        <PopUpModal
          visible={hideModal}
          handleHideModal={handleHideModal}
          //handleSubmit={handleFormData}
        />
      </div>
      <div>
        <h4 id="trackHeader">Track your Day</h4>
      </div>
      <div className="data card">
        <div className="labels">
          <label id="id01">Name:</label>
          <label id="id01">Total working Hours:</label>
          <label id="id01">Shift:</label>
          <label id="id01">Break in hours:</label>
          <label id="id01">Lunch in hours:</label>
          <label id="id01">Tasks responded:</label>
        </div>

        <div className="values">
          <p>{name}</p>
          <p>{totalHours ? totalHours : 0}</p>
          <p>
            {shift
              ? shift === 1
                ? "Morning"
                : shift === 2
                ? "Afternoon"
                : "Night"
              : "N/A"}
          </p>
          <p>{breakTotal ? breakTotal : 0}</p>
          <p>1</p>
          <p>7</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <PieChart
          style={{ height: "160px", width: "160px", textAlign: "center" }}
          data={data}
          label={({ dataEntry }) => dataEntry.value}
          labelPosition={100 - 75 / 2}
          labelStyle={{
            fill: "#fff",
            opacity: 0.75,
            pointerEvents: "none",
          }}
        />
      </div>

      <Notification />
    </div>
  );
};

export default WorkLifeBalance;
