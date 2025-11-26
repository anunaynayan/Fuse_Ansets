import i18n from '@i18n';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18n.addResourceBundle('en', 'navigation', en);
i18n.addResourceBundle('tr', 'navigation', tr);
i18n.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
  {
    id: "apps-ansassets",
    title: "Ansets",
    type: "collapse",
    icon: "lucide:graduation-cap",
    // url: "ansassets",
    badge: {
      title: "NEW",
    },
    children: [
      {
        id: "ansassets-charts",
        title: "Charts",
        type: "collapse",
        url: "/ansassets/charts/apexcharts",
        children: [
          {
            id: "apex-charts",
            title: "Apex Charts",
            type: "item",
            url: "/ansassets/charts/apexcharts",
            end: true,
          },
          {
            id: "d3-charts",
            title: "D3 Charts",
            type: "item",
            url: "/ansassets/charts/D3charts",
            end: true,
          },
          {
            id: "barcharts",
            title: "Bar Chart",
            type: "item",
            url: "/ansassets/charts/barchart",
            end: true,
          },
          {
            id: "linecharts",
            title: "Line Chart",
            type: "item",
            url: "/ansassets/charts/linechart",
            end: true,
          },
          {
            id: "columncharts",
            title: "Columnn Chart",
            type: "item",
            url: "/ansassets/charts/columnchart",
            end: true,
          },
          {
            id: "piechart",
            title: "Pie Chart",
            type: "item",
            url: "/ansassets/charts/piechart",
            end: true,
          },
          {
            id: "donutchart",
            title: "Donut Chart",
            type: "item",
            url: "/ansassets/charts/donutchart",
            end: true,
          },
          {
            id: "areachart",
            title: "Area Chart",
            type: "item",
            url: "/ansassets/charts/areachart",
            end: true,
          },
          {
            id: "funnelchart",
            title: "Funnel Chart",
            type: "item",
            url: "/ansassets/charts/funnelchart",
            end: true,
          },
           {
            id: "networkgraph",
            title: "Network Graph",
            type: "item",
            url: "/ansassets/charts/networkgraph",
            end: true,
          },
        ],
      },
      // {
      //   id: "ansassets-tables",
      //   title: "Tables",
      //   type: "item",
      //   url: "/ansassets/tables",
      // },
      // {
      //   id: "ansassets-forms",
      //   title: "Forms",
      //   type: "item",
      //   url: "/ansassets/forms",
      // },
      {
        id: "ansassets-authscreens",
        title: "Auth Screens",
        type: "item",
        url: "/ansassets/authentication-screens",
      },
      {
        id: "ansassets-heatmap",
        title: "Heat Maps",
        type: "item",
        url: "/ansassets/heatmap",
      },
      {
        id: "ansassets-metriccards",
        title: "Metric Cards",
        type: "item",
        url: "/ansassets/metric-cards/cards",
      },
      {
        id: "ansassets-guageMeter",
        title: "Guage Meters",
        type: "item",
        url: "/ansassets/guage-meter/meters",
      },
    ],
  },
];

export default navigationConfig;
