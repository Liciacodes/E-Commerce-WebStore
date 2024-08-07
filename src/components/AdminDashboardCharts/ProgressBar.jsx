import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function ProgressBar() {
  return (
    <div className="lg:mt-16">
      <p>266 Left</p>
      <Stack spacing={10} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={70} />
      </Stack>
    </div>
  );
}
