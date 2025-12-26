import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          color:"blue",
          height: "100vh",
          width:"100%"
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;
