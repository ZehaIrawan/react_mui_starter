import { Container, Typography, Button, Box } from "@mui/material";

const AccountPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <Typography variant="h6">This is Account Page</Typography>
        <Button
          href="/"
          sx={{ backgroundColor: "tomato", marginTop: "1rem" }}
          variant="contained"
        >
          Go to Dashboard page
        </Button>
      </Box>
    </Container>
  );
};

export default AccountPage;
