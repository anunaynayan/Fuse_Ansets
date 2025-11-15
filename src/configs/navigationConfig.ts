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
    id: "example-component",
    title: "Example",
    translate: "EXAMPLE",
    type: "item",
    icon: "lucide:star",
    url: "example",
  },
  {
    id: "apps-ansassets",
    title: "Ansets",
    type: "collapse",
    icon: "lucide:graduation-cap",
    url: "ansassets",
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
        ],
      },
      {
        id: "ansassets-tables",
        title: "Tables",
        type: "item",
        url: "/ansassets/tables",
      },
      {
        id: "ansassets-forms",
        title: "Forms",
        type: "item",
        url: "/ansassets/forms",
      },
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
        type: "collapse",
        url: "/ansassets/metric-cards/cards",
        children: [
          {
            id: "metric-cards",
            title: "Cards",
            type: "item",
            url: "/ansassets/metric-cards/cards",
            end: true,
          },
          {
            id: "docs",
            title: "View Docs",
            type: "item",
            url: "/ansassets/metric-cards/docs",
            end: true,
          },
        ],
      },
      {
        id: "ansassets-guageMeter",
        title: "Guage Meters",
        type: "collapse",
        url: "/ansassets/guage-meter/meters",
        children: [
          {
            id: "meters",
            title: "Meters",
            type: "item",
            url: "/ansassets/guage-meter/meters",
            end: true,
          },
          {
            id: "docs",
            title: "View Docs",
            type: "item",
            url: "/ansassets/metric-cards/docs",
            end: true,
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
