import React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";
// import { data } from "../../../data";
import { GoChevronRight } from "react-icons/go";
import logout from "../../../assets/icons/logout.png";
import TopCardWrappers from "../../../components/AdminDashboardCharts/TopCardWrapper";
// import AdminLayout from "../Admin Dashboard/AdminLayout";
// import "@mantine/charts/styles.css";
import { BarChart } from "@mui/x-charts/BarChart";
import BestSelling from "../../../components/AdminDashboardCharts/BestSelling";
import RecentOrders from "../../../components/AdminDashboardCharts/RecentOrders";

export const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:w-full lg:ml-72 mt-4 mb-2 ">
      <div className="flex justify-between mb-16 mt-20 lg:mt-0">
        <div className="flex items-center">
          <p className="font-interFont font-medium text-[14px] text-black mr-1">
            Admin
          </p>
          <span>
            <GoChevronRight className="ml-2" />
          </span>
          <span className="text-black font-medium ml-2">Dashboard</span>
        </div>
        <div>
          <img src={logout} alt="logout" />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 lg:w-full overflow-hidden ">
        <TopCardWrappers
          title={"Total Sales"}
          description={"This Month"}
          price={"$4,235"}
          chart={
            <BarChart
              // xAxis={[
              //   {
              //     id: "barCategories",
              //     data: ["bar A", "bar B", "bar C"],
              //     scaleType: "band",
              //   },
              // ]}
              series={[
                {
                  data: [2, 5, 3],
                },
              ]}
              width={300}
              height={150}
            />
          }
        />
        <TopCardWrappers
          title={"Customers"}
          description={"This Month"}
          price={"2571"}
          // chart={
          //   <LineChart
          //     width={300}
          //     height={150}
          //     data={data}
          //     dataKey="month"
          //     series={[{ name: "Apples", color: "indigo.6" }]}
          //     curveType="linear"
          //     connectNulls
          //   />
          // }
        />
        <TopCardWrappers
          title={"Orders"}
          description={"Month Goals: 1,000"}
          price={"734"}
        />
        <BestSelling />
        <RecentOrders />
      </div>
    </div>
  );
}
