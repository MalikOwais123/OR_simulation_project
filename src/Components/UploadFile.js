import { CloudUpload } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";

function UploadFile({ handleCalculate, isLoading }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input type="file" onChange={handleFileUpload} />
      <LoadingButton
        loading={isLoading}
        variant="contained"
        color="primary"
        onClick={(e) => handleCalculate(e, file)}
        sx={{ mt: 2 }}
      >
        <CloudUpload /> &nbsp; Upload
      </LoadingButton>
    </Box>
  );
}

export default UploadFile;
