import { useState } from "react";
import { Box, Card, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountSetting from "./shared/AccountSetting";
import Grid from "@mui/material/Grid2";
import PreferenceSetting from "./shared/PreferenceSetting";
import SecuritySetting from "./shared/SecuritySetting";
import NotificationSetting from "./shared/NotificationSetting";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 1200,
  margin: "0 auto"
}));

const sections = [
  { key: "account", label: "Account" },
  { key: "preferences", label: "Preferences" },
  { key: "security", label: "Security" },
  { key: "notifications", label: "Notifications" }
];

export default function Setting() {
  const [active, setActive] = useState("account");

  return (
    <Wrapper>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* SIDEBAR */}
        <Grid xs={12} md={3}>
          <Card>
            <List disablePadding>
              {sections.map((s) => (
                <ListItemButton
                  key={s.key}
                  selected={active === s.key}
                  onClick={() => setActive(s.key)}
                >
                  <ListItemText primary={s.label} />
                </ListItemButton>
              ))}
            </List>
          </Card>
        </Grid>

        {/* CONTENT */}
        <Grid xs={12} md={9}>
          {active === "account" && <AccountSetting />}
          {active === "preferences" && <PreferenceSetting />}
          {active === "security" && <SecuritySetting />}
          {active === "notifications" && <NotificationSetting />}
        </Grid>
      </Grid>
    </Wrapper>
  );
}
