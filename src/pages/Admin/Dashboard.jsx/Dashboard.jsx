import React from "react";
import { GoChevronRight } from "react-icons/go";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import logout from "../../../assets/icons/logout.png";
import TopCardWrappers from "../../../components/AdminDashboardCharts/TopCardWrapper";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import BestSelling from "../../../components/AdminDashboardCharts/BestSelling";
import RecentOrders from "../../../components/AdminDashboardCharts/RecentOrders";

import ProgressBar from "../../../components/AdminDashboardCharts/ProgressBar";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:w-full lg:ml-72 mt-4 mb-2 ">
      <div className="flex justify-between mb-14 mt-20 lg:mt-0">
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

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full overflow-hidden gap-x-8 gap-y-12 ">
        <TopCardWrappers
          title={"Total Sales"}
          description={"This Month"}
          price={"$4,235"}
          chart={
            <Stack direction="row" sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                  plotType="bar"
                  data={[
                    1, 4, 2, 5, 7, 2, 4, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 1, 1,
                    5, 5, 4, 4, 3, 3, 4, 9, 8, 7, 5, 5, 8, 8, 4, 4, 3, 2, 1, 5,
                    5, 5, 4, 5, 5, 5, 4, 4, 3, 8, 7, 6, 9, 8, 9, 9, 9, 9,
                  ]}
                  height={100}
                />
              </Box>
            </Stack>
          }
        />
        <TopCardWrappers
          title={"Customers"}
          description={"This Month"}
          price={"2571"}
          chart={
            <Stack direction="row" sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                  data={[1, 4, 5, 6, 7, 2, 3, 3, 2, 4, 6, 8, 2, 6, 9, 4, 6]}
                  height={100}
                />
              </Box>
            </Stack>
          }
        />
        <TopCardWrappers
          title={"Orders"}
          description={"Month Goals: 1,000"}
          price={"734"}
          chart={<ProgressBar />}
        />
        <BestSelling />
        <RecentOrders />
      </div>
    </div>
  );
}
