import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Carregando...
      </Typography>
    </Box>
  );
};

export default Loading;
