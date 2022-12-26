import { FC, useEffect, useState } from "react";
import "./Dashboard.css";

import Api from "../../api/api";

import Grid from "@mui/material/Unstable_Grid2";

import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useLoading } from "../../context/loading";

echarts.use([TooltipComponent, CanvasRenderer, LegendComponent]);

const Dashboard: FC = () => {
  const { show, hide } = useLoading();

  const [covidData, setCovidData] = useState<any>({});
  const [covidDataProvince, setCovidDataProvince] = useState<object[]>([]);
  const [covidDataProvinceTopFive, setCovidDataProvinceTopFive] = useState<
    object[]
  >([]);

  const getCovid = async () => {
    show();
    try {
      let res: any = await Api.GetCovidDataAll();
      setCovidData(res[0]);
    } catch (error) {
    } finally {
      setTimeout(() => {
        hide();
      }, 3000);
    }
  };

  const getCovidProvinces = async () => {
    show();
    try {
      let res: any = await Api.GetCovidDataProvices();
      res.sort((a: any, b: any) => {
        return b.total_case - a.total_case;
      });
      res.forEach((item: any, index: number) => {
        if (index !== 0) {
          if (index < 6) {
            let data = {
              value: item.total_case,
              name: item.province,
            };
            covidDataProvinceTopFive.push(data);
          }
        }
      });
    } catch (error) {
    } finally {
      setTimeout(() => {
        hide();
      }, 3000);
    }
  };

  const addComma = (text: any) => {
    if (text) {
      return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return text;
    }
  };

  useEffect(() => {
    getCovid();
    getCovidProvinces();
  }, []);

  let option_pie = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 1,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: covidDataProvinceTopFive,
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
          <div className="card-wrap">
            <div>ป่วยสะสม</div>
            <div>{`${addComma(covidData.total_case)}(+${addComma(
              covidData.new_case
            )})`}</div>
          </div>
        </Grid>
        <Grid xs={12} md={4}>
          <div className="card-wrap">
            <div>เสียชีวิตสะสม</div>
            <div>{`${addComma(covidData.total_death)}(+${addComma(
              covidData.new_death
            )})`}</div>
          </div>
        </Grid>
        <Grid xs={12} md={4}>
          <div className="card-wrap">
            <div>หายป่วยสะสม</div>
            <div>{`${addComma(covidData.total_recovered)}(+${addComma(
              covidData.new_recovered
            )})`}</div>
          </div>
        </Grid>
      </Grid>
      <div>
        {covidDataProvinceTopFive.length > 0 && (
          <ReactEChartsCore
            echarts={echarts}
            option={option_pie}
            style={{ width: "100%", height: "300px" }}
          />
        )}
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
