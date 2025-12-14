import { Button, Card, Divider, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function PreferenceSetting() {
  const SettingCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3)
  }));

  return (
    <SettingCard>
      <Typography variant="h6" fontWeight={600}>
        Preferences
      </Typography>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <FormControlLabel control={<Switch />} label="Enable dark mode" />
        <FormControlLabel control={<Switch />} label="Compact layout" />
        <FormControlLabel control={<Switch />} label="Auto save changes" />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Button variant="contained">Save preferences</Button>
    </SettingCard>
  );
}
