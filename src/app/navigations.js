const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },

  // { label: "Components", type: "label" },
  // {
  //   name: "Components",
  //   icon: "favorite",
  //   badge: { value: "30 +", color: "secondary" },
  //   children: [
  //     { name: "Table", path: "/material/table", iconText: "T" },
  //     { name: "Icons", path: "/material/icons", iconText: "I" },
  //     { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
  //     { name: "Buttons", path: "/material/buttons", iconText: "B" },
  //     { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
  //     { name: "Dialog", path: "/material/dialog", iconText: "D" },
  //     { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
  //     { name: "Form", path: "/material/form", iconText: "F" },
  //     { name: "Menu", path: "/material/menu", iconText: "M" },
  //     { name: "Progress", path: "/material/progress", iconText: "P" },
  //     { name: "Radio", path: "/material/radio", iconText: "R" },
  //     { name: "Switch", path: "/material/switch", iconText: "S" },
  //     { name: "Slider", path: "/material/slider", iconText: "S" },
  //     { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
  //   ]
  // },



  { label: "Auth", type: "label" },
  {
    name: "Session/Auth",
    icon: "security",
    children: [
      { name: "Sign in", iconText: "SI", path: "/session/signin" },
      { name: "Sign up", iconText: "SU", path: "/session/signup" },
      { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
      { name: "Error", iconText: "404", path: "/session/404" }
    ]
  },
  { label: "Settings", type: "label" },
  {
    name: "Settings",
    path: "page-layouts/user-settings",
    icon: "settings",
  },
  // {
  //   name: "Charts",
  //   icon: "trending_up",
  //   children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
  // },
  { label: "User", type: "label" },
  {
    name: "Profile",
    path: "page-layouts/user-profile",
    icon: "person",
  },
  {
    name: "Portfolio",
    icon: "launch",
    type: "extLink",
    path: "https://react-portfolio-ptd.netlify.app/projects"
  },
];

export default navigations;
