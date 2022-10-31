import { Box, CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";

interface LoadingProps {
  condition: boolean;
  children: ReactNode;
}

const Loading = ({ condition, children }: LoadingProps) => {
  return (
    <>
      {condition ? (
        <Box
          width="100%"
          height="90vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
