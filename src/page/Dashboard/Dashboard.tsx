import { FC, useEffect, useState } from "react";
import "./Dashboard.css";

import Api from "../../api/api";

import Grid from "@mui/material/Unstable_Grid2";

import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { number } from "echarts";

echarts.use([TooltipComponent, CanvasRenderer, LegendComponent]);

const Dashboard: FC = () => {
  const [covidData, setCovidData] = useState<object>({});

  useEffect(() => {
    Api.GetCovidDataAll().then((res: any) => {
      setCovidData(res[0]);
    });
  }, []);
  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  let option_bar = {
    grid: {
      left: "10%",
      right: "10%",
    },
    textStyle: {
      color: "#000",
    },
    xAxis: {
      max: "dataMax",
      name: "Quantity",
      position: "top",
      nameTextStyle: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "DBHelvethaicaX45Li",
      },
    },
    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 6, // only the largest 3 bars will be displayed
      name: "ชื่อโครงการ",
      nameLocation: "start",
      nameTextStyle: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        padding: [15, 0],
        fontFamily: "DBHelvethaicaX45Li",
      },
    },
    series: [
      {
        color: "#72CDF4",
        realtimeSort: true,
        type: "bar",
        data: [120, 200, 150, 80, 70, 110, 130],
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
        },
      },
    ],
    legend: {
      show: true,
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
  };
  let height: number = 600;
  return (
    <div className="dashboard-wrap">
      <Grid container>
        <Grid xs={12} md={4}>
          <div className="card-wrap">{covidData.total_case}</div>
        </Grid>
        <Grid xs={12} md={4}>
          <div className="card-wrap">{covidData.total_death}</div>
        </Grid>
        <Grid xs={12} md={4}>
          <div className="card-wrap">{covidData.total_recovered}</div>
        </Grid>
      </Grid>
      <div>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          style={{ width: "100%", height: "300px" }}
        />
      </div>
      <div className="chart-bar-wrap">
        <div className="chart-bar-area">
          <ReactEChartsCore
            echarts={echarts}
            option={option_bar}
            style={{ height: `${height}px` }}
          />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
