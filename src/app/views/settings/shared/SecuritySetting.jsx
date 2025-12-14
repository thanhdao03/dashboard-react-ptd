import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

export default function SecuritySetting() {
  const SettingCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3)
  }));

  return (
    <SettingCard>
      <Typography variant="h6" fontWeight={600}>
        Security
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid xs={12} md={6}>
          <TextField fullWidth type="password" label="Current password" />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField fullWidth type="password" label="New password" />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Button variant="contained">Update password</Button>
    </SettingCard>
  );
}
