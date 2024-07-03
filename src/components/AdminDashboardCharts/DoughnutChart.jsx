import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 500 },
  { label: "Group B", value: 250 },
  { label: "Group C", value: 250 },
];

export default function DoughnutChart() {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 30,
            outerRadius: 50,
            data,
          },
        ]}
        width={150}
        height={150}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}
