import Grid from "@mui/material/Grid2";
import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function AccountSetting() {
  const SettingCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3)
  }));

  return (
    <SettingCard>
      <Typography variant="h6" fontWeight={600}>
        Account information
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Update your basic account details
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField fullWidth label="Full name" />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField fullWidth label="Email" />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField fullWidth label="Username" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Button variant="contained">Save changes</Button>
    </SettingCard>
  );
}
