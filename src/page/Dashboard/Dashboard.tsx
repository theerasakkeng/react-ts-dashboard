import { FunctionComponent } from "react";
import "./Dashboard.css";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import ReactEChartsCore from "echarts-for-react";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TooltipComponent, CanvasRenderer, LegendComponent]);

const Dashboard: FunctionComponent = () => {
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
      <div>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          style={{ width: "600px", height: "300px" }}
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
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eos voluptatem explicabo doloribus culpa, perspiciatis impedit minima consequuntur adipisci cumque nihil iusto deserunt omnis nesciunt non perferendis, veniam a ex vero eligendi? Est ea magni reprehenderit impedit assumenda perspiciatis aspernatur fugiat incidunt commodi. Corrupti, ullam dignissimos est ratione dolorem aliquid fugiat sunt labore consequatur aperiam asperiores adipisci deserunt tenetur? Consectetur rerum vel minus repellendus maiores, facilis sapiente ex beatae error qui! Modi nemo rerum vitae impedit hic, sit nostrum illo mollitia est laudantium expedita exercitationem reprehenderit! Dicta quis natus asperiores sunt dolorem commodi, suscipit cum deserunt ipsam beatae ut aperiam quos corporis iusto aliquam nulla accusantium possimus nemo. Quisquam quibusdam iure, omnis totam perspiciatis sit quod nisi esse modi. Autem deleniti eos quia quod consequatur. Aut totam odit sapiente nisi quisquam saepe dolor facilis, nostrum itaque necessitatibus ea nobis mollitia facere beatae corrupti iste provident ipsam ducimus? Tempore at ipsum possimus aperiam praesentium. Sunt modi maiores sint nostrum adipisci, reprehenderit deserunt error dolor recusandae odit cumque et natus commodi non excepturi eligendi eos ex libero. Sit incidunt repellendus tempora recusandae, ut voluptate. Omnis odit unde, cupiditate magnam tempora laboriosam necessitatibus molestiae nemo corrupti facere minima beatae velit possimus exercitationem laborum optio suscipit perferendis soluta assumenda ipsum! Harum cum, dignissimos facilis veritatis et eaque? Nemo ducimus tempore voluptatibus commodi molestiae, delectus fugit quisquam reiciendis quaerat tenetur quod libero repellat doloribus, quae dolorem, pariatur sed. Consequuntur ratione qui distinctio porro! Aspernatur nostrum nisi possimus mollitia nemo expedita alias quos sequi, cumque quae iure, voluptate nihil vel eaque id. Architecto reiciendis sit quae porro amet cumque molestias officiis eum soluta voluptates perspiciatis quod expedita officia doloremque laborum, nam quasi esse adipisci quos ab. Qui laudantium quaerat culpa in aliquid, molestias officiis iusto laboriosam aliquam libero, atque, modi perspiciatis! Quisquam at illum pariatur fugiat, maiores doloribus culpa, dolorem neque ea veniam labore repudiandae in tenetur mollitia tempora itaque minus? Error sequi obcaecati aspernatur magnam, dolorem praesentium sapiente culpa ex aliquam illo eveniet aperiam, quis porro distinctio libero exercitationem aut quod in labore ratione iste? Natus culpa deserunt assumenda animi velit eum laudantium corrupti optio temporibus rerum dolore omnis fugiat illo, mollitia minus veniam sed accusamus placeat. Itaque officia, non aliquam error necessitatibus praesentium facere officiis quaerat minus eos ullam tempora possimus. Voluptates similique quia dignissimos ipsam possimus excepturi facilis in corporis minus, incidunt at perferendis alias quod minima impedit quo consequuntur quisquam placeat. Blanditiis optio impedit totam, sed sit dolores omnis porro, reiciendis mollitia soluta eligendi cupiditate aut nesciunt veniam quis vitae, recusandae eos dolore? Necessitatibus consequatur, veniam delectus voluptatum repellat porro, est facilis nesciunt earum, nostrum illo deleniti expedita quas sunt esse hic libero quos nemo corrupti ipsam recusandae doloribus nihil? Dolorem maiores fugit, adipisci odio sit qui dolores temporibus dolore magni! Nisi et facilis neque mollitia eius libero, sequi iusto voluptas quod beatae magni odio. Vero dignissimos aperiam, labore nostrum ipsam laudantium, ut quo obcaecati ab in quae temporibus, sed corporis. Quis vitae aut praesentium veritatis itaque perferendis iure ut deserunt, at asperiores magnam eaque tempora doloremque, cum quas officia doloribus quidem. Doloremque ad ullam mollitia ipsa autem tempore ratione quisquam architecto beatae eveniet reiciendis corporis unde maiores earum error inventore tempora repellat minima iste voluptas consequuntur, atque vitae sint? Dolorem facere eligendi sint? Aliquid non quibusdam, praesentium repellat obcaecati eligendi amet blanditiis dolorum, culpa dolor, nesciunt ducimus fuga aliquam. Consequuntur sit quod alias, ipsum deserunt consequatur iste soluta ex quisquam, libero perspiciatis, eius quam quia. Ducimus culpa corrupti necessitatibus ut doloremque, accusamus eos libero! Nobis cumque maxime enim corrupti debitis similique harum ipsa eius voluptates exercitationem unde earum nemo voluptatibus culpa, pariatur provident odio omnis veritatis possimus at excepturi esse rem? Maxime ducimus incidunt, quos dolorem laudantium animi aspernatur tempore quia minima, hic, nulla exercitationem voluptatibus voluptatem nihil veritatis eos quis illo modi fugiat perferendis deserunt! Accusamus modi accusantium ea consequatur dicta rerum praesentium eos. Id vitae fuga nesciunt, velit sint atque modi eum perferendis. Reiciendis eos doloremque unde ad sint. Quasi totam reiciendis fugiat, libero quibusdam dolores, et magni molestiae rerum, veritatis ut nulla iusto itaque. Dolorem commodi omnis sunt quae praesentium officia quod? Beatae, maiores tempore id, quam harum, reprehenderit vitae nostrum quos officiis placeat tenetur praesentium repellendus dolor quis saepe. Repellat sit provident quam, ut vero reiciendis esse odit eos quas. Alias accusamus eius commodi voluptate ut eos consequuntur provident obcaecati dignissimos minus tenetur illo deserunt in, ipsam nobis nostrum iusto placeat eligendi, itaque ad? Quae iure illo, culpa reiciendis assumenda voluptas cumque expedita. Ad officiis quam ipsum nobis repellat eum alias debitis tempora est laudantium accusamus illum asperiores quaerat eveniet delectus reprehenderit, ullam vero excepturi consectetur modi pariatur sapiente consequuntur natus veniam! Praesentium earum nostrum facere adipisci, nihil inventore corporis eligendi soluta natus blanditiis? Laudantium et minus ipsum, tenetur consequatur hic consectetur ut neque eum quod at cum atque fugiat doloremque sapiente reprehenderit nostrum repudiandae aspernatur amet numquam. Labore, nostrum porro, vero voluptate facere quidem ratione cum non praesentium impedit similique distinctio, sunt saepe obcaecati! Autem consequuntur animi temporibus qui deleniti sint velit unde saepe blanditiis excepturi quo minus facere quod dolores, mollitia maiores beatae dolorem. Nemo, corrupti, consequuntur commodi cupiditate hic omnis nesciunt, numquam ab vel libero expedita earum dolorem eaque officia mollitia eveniet debitis velit id laudantium dolores voluptatem porro exercitationem voluptatibus? Ut, quaerat error veniam modi culpa libero quod et id, nam enim pariatur illum, quasi numquam minus necessitatibus provident iure. Facere, corrupti? Cupiditate soluta repellat sit neque totam assumenda amet laboriosam quas consectetur ipsum, alias animi illum minima maxime, quisquam necessitatibus eligendi! Dignissimos, voluptate possimus quasi incidunt eligendi saepe minus facere consectetur ducimus inventore culpa iure sint, nobis molestiae animi quibusdam sunt, impedit voluptatum adipisci ab. Assumenda totam excepturi dolores aliquam quasi error, dolorum repellendus in magnam sapiente vel, ratione ad perspiciatis quae dolorem sint harum quos laudantium expedita quam cumque sed? Totam optio harum quisquam non accusantium dicta sint omnis modi accusamus. Est corporis hic sapiente autem qui blanditiis doloribus eligendi quibusdam expedita, porro asperiores incidunt nihil eos nulla ducimus nobis! Facere.</div>
    </div>
  );
};
export default Dashboard;
