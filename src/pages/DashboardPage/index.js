import { styled } from "@mui/material/styles";
import { Typography, Button, Container, Box } from "@mui/material";

const CustomButton = styled(Button)`
  background-color: BurlyWood;
`;

const DashboardPage = () => {
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
        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          This is Dashboard Page
        </Typography>
        <CustomButton href="/account" variant="contained">
          Go to Account page
        </CustomButton>
      </Box>
    </Container>
  );
};

export default DashboardPage;
