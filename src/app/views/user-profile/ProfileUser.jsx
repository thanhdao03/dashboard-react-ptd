import { Fragment, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { DataProfileUser } from "app/views/user-profile/shared/data";
import { Chip } from "@mui/material";

// STYLED COMPONENTS (giữ giống trước)
const ContentBox = styled("div")(({ theme }) => ({
  margin: "2rem",
  [theme.breakpoints.down("sm")]: { margin: "1rem" }
}));

// const Title = styled("span")(() => ({
//   fontSize: "1rem",
//   fontWeight: "500",
//   marginRight: ".5rem",
//   textTransform: "capitalize"
// }));

// const SubTitle = styled("span")(({ theme }) => ({
//   fontSize: "0.875rem",
//   color: theme.palette.text.secondary
// }));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "1rem",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function ProfileUser() {
  const [user, setUser] = useState(DataProfileUser);
  const [editing, setEditing] = useState(true); // mặc định bật edit để dễ demo
  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    // Ở đây bạn có thể gọi API để save
    console.log("Saved user:", user);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // 2s thông báo Saved
    setEditing(false);
  }

  function handleAvatarChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, avatarUrl: url }));
    setSaved(false);
  }

  return (
    <Fragment>
      <ContentBox>
        <Grid container spacing={3}>
          {/* LEFT: PROFILE CARD */}
          <Grid size={{ md: 4, xs: 12 }}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Avatar
                src={user.avatarUrl}
                alt={user.name}
                sx={{
                  width: 96,
                  height: 96,
                  mx: "auto",
                  mb: 2,
                  fontSize: 36
                }}
              >
                {user.name?.charAt(0)}
              </Avatar>

              <Typography variant="h6" fontWeight={700}>
                {user.name}
              </Typography>

              <Typography color="text.secondary">{user.role}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.location}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1} alignItems="flex-start">
                <Typography variant="body2">📧 {user.email}</Typography>
                <Typography variant="body2">📞 {user.phone}</Typography>
                <Typography href={user.website} className="link" variant="body2">
                  🌐 {user.website}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} sx={{ mt: 2 }} justifyContent="center">
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={() => setEditing(true)}
                >
                  Edit
                </Button>

                <label htmlFor="upload-avatar">
                  <input
                    hidden
                    accept="image/*"
                    id="upload-avatar"
                    type="file"
                    onChange={handleAvatarChange}
                  />
                  <IconButton component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>
              <H4>Quick Stats</H4>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
                <Card variant="outlined" sx={{ p: 1.2, minWidth: 90, textAlign: "center" }}>
                  <Typography sx={{ fontWeight: 700 }}>{user.gpa}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    GPA
                  </Typography>
                </Card>

                <Card variant="outlined" sx={{ p: 1.2, minWidth: 120, textAlign: "center" }}>
                  <Typography sx={{ fontWeight: 700 }}>{user.projects?.length ?? 0}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Projects
                  </Typography>
                </Card>
              </Stack>
            </Card>
          </Grid>

          {/* RIGHT: PROFILE DETAILS */}
          <Grid size={{ md: 8, xs: 12 }}>
            {/* BASIC INFO */}
            <Card sx={{ p: 3, mb: 3 }}>
              <H4>Basic Information</H4>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </Grid>
              </Grid>
            </Card>

            {/* SUMMARY */}
            <Card sx={{ p: 3, mb: 3 }}>
              <H4>Summary</H4>
              <Typography color="text.secondary">{user.summary}</Typography>
            </Card>

            {/* EDUCATION */}
            <Card sx={{ p: 3, mb: 3 }}>
              <H4>Education</H4>
              <Typography fontWeight={600}>{user.education.school}</Typography>
              <Typography color="text.secondary">{user.education.major}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.education.period}
              </Typography>
            </Card>

            {/* EXPERIENCE */}
            <Card sx={{ p: 3, mb: 3 }}>
              <H4>Work Experience</H4>
              <Typography fontWeight={600}>{user.experience.company}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.experience.period} — {user.experience.location}
              </Typography>

              <ul style={{ paddingLeft: 18, marginTop: 8 }}>
                {user.experience.description.map((item, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </ul>
            </Card>

            {/* PROJECTS */}
            <Card sx={{ p: 3 }}>
              <H4>Projects</H4>

              <Stack spacing={3}>
                {user.projects.map((project, index) => (
                  <Fragment key={index}>
                    <Stack spacing={1} sx={{ width: "100%" }}>
                      <Typography fontWeight={600}>{project.name}</Typography>

                      <Typography variant="body2" color="text.secondary">
                        {project.role} • {project.period}
                      </Typography>

                      <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                        {project.description.map((item, idx) => (
                          <li key={idx}>
                            <Typography variant="body2">{item}</Typography>
                          </li>
                        ))}
                      </ul>

                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.technologies.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Stack>

                      {project.github && (
                        <Button
                          href={project.github}
                          target="_blank"
                          size="small"
                          sx={{ alignSelf: "flex-start" }}
                        >
                          View GitHub
                        </Button>
                      )}
                    </Stack>

                    {/* Divider giữa các project */}
                    {index !== user.projects.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Fragment>
                ))}
              </Stack>
            </Card>

            {/* ACTION */}
            {editing && (
              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSave}>
                  Save Changes
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => {
                    setUser(initialUser);
                    setEditing(false);
                  }}
                >
                  Cancel
                </Button>

                {saved && (
                  <Typography color="success.main" sx={{ alignSelf: "center" }}>
                    Saved successfully!
                  </Typography>
                )}
              </Stack>
            )}
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
