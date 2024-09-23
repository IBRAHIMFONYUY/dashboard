import React from "react";
import { UserRoundPlus, Users } from "lucide-react";
import { Line, Bar, Doughnut, PolarArea, Radar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import Data from "./data";

Chart.register(CategoryScale, ...registerables);
const Home = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "june",
      "july",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "blue",
        borderColor: "white",
        borderWidth: 0.3,
        tension: 0.1,
      },
      {
        label: "New Users",
        data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "white",
        borderWidth: 0.3,
        tension: 0.1,
      },
    ],
  };

  const data_2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "dataset",
        data: [100, 94, 90, 70, 56, 55, 40],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "New Users",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "white",
        borderWidth: 0.3,
        fill: true,
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };
  return (
    <div className="main-home-cnt">
      <h1>Dasboard</h1>
      <div className="home">
        <div className="graph-cnt-1">
          <div className="graph-1">
            <div className="bar-chart">
              <h1>Sales</h1>January - July 2023January - July 2023
              <Line data={data_2} options={options} />
            </div>
          </div>
          <div className="sub-graph-cnt-1">
            <div className="sub-graph-1">
              <div className="sub-graph-1-content">Total Users</div>
            </div>
            <div className="sub-graph-2">
              <div className="sub-graph-1-content">Total Users</div>
            </div>
          </div>
        </div>
        <div className="graph-cnt-2">
          <div className="bar-chart">
            <div className="user-lg">
              <h1>Traffic</h1>January 01, 2023 - December 31, 2023
            </div>
            <Bar className="bar-chart" data={data}  />
          </div>
        </div>
      </div>
      <div className="users-main-cnt">
        <div className="users-cnt">
          <div className="users-cnt-head">
            <div className="user-lg">
              <h1>Users</h1>1.232.150 registered users
            </div>
            <div className="users-btn">
              <UserRoundPlus /> Add new user
            </div>
          </div>
          <div className="users-data">
            <div className="users-data-head">
              <div className="">
                <Users />
              </div>
              <div className="" style={{ width: "180px", marginLeft: "40px" }}>
                Users
              </div>
              <div className="" style={{ marginLeft: "100px" }}>
                Country
              </div>
              <div className="" style={{ width: "230px", marginLeft: "40px" }}>
                Usage
              </div>
              <div className="">Activity</div>
            </div>
            {Data.map((user, index) => (
              <div className="users-main" key={index}>
                <div className="users-pic">
                  <img src={user.pic} />
                </div>
                <div className="users-created">
                  <div className="users-created-cnt">
                    <b>{user.name}</b>
                    <div
                      className="users-created-under"
                      style={{ color: "rgb(100, 100, 100)" }}
                    >
                      {user.type} | Registered: {user.registerd}
                    </div>
                  </div>
                </div>
                <div className="users-country">{user.country}</div>
                <div className="users-usage">{user.usage}</div>
                <div className="users-activity">{user.activity}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="users-cnt-right">
          <div className="users-block"><Line className="users-block-charts" data={data_2}/></div>
          <div className="users-block"><Bar className="users-block-charts" data={data_2}/></div>
          <div className="users-block mid">this is it</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
