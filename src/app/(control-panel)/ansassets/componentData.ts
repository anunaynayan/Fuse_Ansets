export type ComponentItem = {
id: string;
name: string;
description: string;
category?: string;
href: string; // route to the component demo or docs
icon?: string; // optional icon name (for future use)
};


export const componentsData: ComponentItem[] = [
// Charts - Pie
{
id: "pie-simple",
name: "Pie Chart",
description: "A clean, minimal pie chart with active-slice info box; copy/paste ready.",
category: "Charts",
href: "/ansassets/charts/piechart",
},


// Charts - Line (example)
{
id: "line-basic",
name: "Line Chart",
description: "Responsive line chart variants with interactions.",
category: "Charts",
href: "/ansassets/charts/linechart",
},


// Metric cards
{
id: "metric-simple",
name: "Metric Card",
description: "Small metric card variants used in dashboards.",
category: "UI",
href: "/ansassets/metric-cards/cards",
},


// Authentication screens (example)
{
id: "auth-login",
name: "Auth Screens",
description: "Auth components like Login, Register, Forgot Password.",
category: "Screens",
href: "/ansassets/authentication-screens",
},


// Gauges
{
id: "gauge-circular",
name: "Circular Gauge",
description: "Gauge components for visualizing single-value metrics.",
category: "Charts",
href: "/ansassets/guage-meter/meters",
},


//  Accordians

{
  id:"accodrions",
  name:"Accordians",
  description:"Accordians are used to display a list of items with a title and a description.",
  category:"UI",
  href:"/ansassets/accordians/accordian",
},


// badge 

{
  id:"badge",
  name:"Badge",
  description:"Badge component for display small count or status information, such as an icon or button.",
  category:"UI",
  href:"/ansassets/badge/badge",
},

// Color Picker

{
  id:"color-picker",
  name:"Color Picker",
  description:"Color Picker is a customizable React color picker component built using MUI and react-color.",
  category:"UI",
  href:"/ansassets/color-picker/colorpicker", 
},












// Add more components below. Adding an object here will auto-show on the landing page.
];