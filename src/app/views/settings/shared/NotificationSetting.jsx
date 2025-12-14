import { Card, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function NotificationSetting() {
  const SettingCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3)
  }));

  return (
    <SettingCard>
      <Typography variant="h6" fontWeight={600}>
        Notifications
      </Typography>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <FormControlLabel control={<Switch />} label="Email notifications" />
        <FormControlLabel control={<Switch />} label="SMS notifications" />
        <FormControlLabel control={<Switch />} label="System alerts" />
      </Stack>
    </SettingCard>
  );
}
