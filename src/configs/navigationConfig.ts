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
          {
        id: "ansassets-heatmap",
        title: "Heat Maps",
        type: "item",
        url: "/ansassets/charts/heatmap",
      }
        ],
      },
      {
        id: "ansassets-tables",
        title: "Tables",
        type: "collapse",
        url: "/ansassets/tables",
        // children: [
        //   {id: "ansassets-tables",
        // title: "Heat Maps",
        // type: "item",
        // url: "/ansassets/tables",}
        // ]
      },
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
        id: "ansassets-feedbackComps",
        title: "Feedback Comps",
        type: "collapse",
        children: [
          {
        id: "ansassets-metriccards",
        title: "Metric Cards",
        type: "item",
        url: "/ansassets/feedbackandnavcomps/metric-cards/cards",
      },
          {id: "snackbar",
            title: "Snackbar",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/snackbar",
            end:true,
          },
          {id: "alerts",
            title: "Alert",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/alert",
            end:true,
          },
          {id: "dialog",
            title: "Dialog",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/dialog",
            end:true,
          },
          {id: "modals",
            title: "Modal",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/modals",
            end:true,
          },
          {id: "banner",
            title: "Banner",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/banner",
            end:true,
          },
          {id: "drawer",
            title: "Drawer",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/drawer",
            end:true,
          },
          {id: "backdrop",
            title: "Backdrop",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/backdrop",
            end:true,
          },
          {id: "notifications",
            title: "Notification Bell",
            type: "item",
            url: "/ansassets/feedbackandnavcomps/notifications",
            end:true,
          }
        ]
      },

      // Accordian
   {
  id: "ansassets-accordians-root",
  title: "Accordians",
  type: "collapse",
  children: [
    {
               id:"ansassets-accordians-accordian",
               title:"Accordion Com",
               type:"item",
               url:"/ansassets/accordians/accordian",
               end:true,
             },
    
  
    {
      id: "ansassets-accordians-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/accordians/docs",
      end: true,
    }
  ]
},


// Drawer
  {
  id: "ansassets-drawer-root",
  title: "Drawer  ",
  type: "collapse",
  children: [
    {
               id:"ansassets-drawer-drawer",
               title:"Drawer Com",
               type:"item",
               url:"/ansassets/drawer/drawer",
               end:true,
             },
    
  
    {
      id: "ansassets-drawer-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/drawer/docs",
      end: true,
    }
  ]
},

//




// rating star
{
  id: "ansassets-rating-star",
  title: "Rating Star ", 
  type: "collapse",
  children: [
    {
               id:"ansassets-rating-star-rating",
               title:"Rating",
               type:"item",
               url:"/ansassets/rating-star/rating",
               end:true,
             },
    
  
    {
      id: "ansassets-rating-star-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/rating-star/docs",
      end: true,
    }
  ]
},

// toast component

{
  id: "ansassets-toast-root",
  title: "Toast  ",
  type: "collapse",
  children: [
    {
               id:"ansassets-toast-toast",
               title:"Toast Com",
               type:"item",
               url:"/ansassets/toast/toast",
               end:true,
             },
    
  
    {
      id: "ansassets-toast-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/toast/docs",
      end: true,
  
  
    },
  ]
},

// tooltip

   {
  id: "ansassets-tooltip-root",
  title: "ToolTip  ",
  type: "collapse",
  
  children: [
    {
               id:"ansassets-tooltip-tooltip",
               title:"Tooltip Com",
               type:"item",
               url:"/ansassets/tooltip/tooltip",
               end:true,
             },
    
  
    {
      id: "ansassets-tooltip-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/tooltip/docs",
      end: true,
   
    },
  ]
},


// loader

   {
  id: "ansassets-loader-root",
  title: "Loader ",
  type: "collapse",
  
  children: [
    {
               id:"ansassets-loader-loader",
               title:"Loader Com",
               type:"item",
               url:"/ansassets/loader/loader",
               end:true,
             }, 
    {
      id: "ansassets-loader-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/loader/docs",
      end: true,  
    },
  ]
},


// success page

 {
  id: "ansassets-succespage-root",
  title: "Success Page  ",
  type: "collapse",
  
  children: [
    {
               id:"ansassets-succespage-successpage",
               title:"SuccessPage Com",
               type:"item",
               url:"/ansassets/succespage/successpage",
               end:true,
             }, 
    {
      id: "ansassets-succespage-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/succespage/docs",
      end: true,  
    },
  ]
},


//  BADGE COMPONENT

{
  id: "ansassets-badge-root",
  title: "Badge  ",
  type: "collapse",
 
  children: [
    {
               id:"ansassets-badge-badge",
               title:"Badge Com",
               type:"item",
               url:"/ansassets/badge/badge",
               end:true,
             }, 
    {
      id: "ansassets-badge-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/badge/docs",
      end: true,  
    },
  ]
},


  //  Date picker

   {
  id: "ansassets-date-picker-root",
  title: "Date Picker  ",
  type: "collapse",
  children: [
    {
               id:"ansassets-date-picker-datepicker", 
               title:"Date Picker Com",
               type:"item",
               url:"/ansassets/date-picker/datepicker",
               end:true,
             }, 
    {
      id: "ansassets-date-picker-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/date-picker/docs",
      end: true,  
    },
  ]
    
   },


//  COLOR-PICKER

   {
    id: "ansassets-color-picker-root",
    title:"Color Picker",
    type: "collapse",
   
    children: [
      {
                 id:"ansassets-color-picker-colorpicker",
                 title:"Color Picker Com",
                 type:"item",
                 url:"/ansassets/color-picker/colorpicker",
                 end:true,
               }, 
      {
        id: "ansassets-color-picker-docs",
        title: "View Docs",
        type: "item",
        url: "/ansassets/color-picker/docs",
        end: true,  
      },
    ]
   },



//  DIALOG COMPONENT

    {
    id: "ansassets-dialog-root",
    title:"Dialog",
    type: "collapse",
    
    children: [
      {
                 id:"ansassets-dialog-dialog",
                 title:"Dialog Com",
                 type:"item",
                 url:"/ansassets/dialog/dialog",
                 end:true,
               }, 
      {
        id: "ansassets-dialog-docs",
        title: "View Docs",
        type: "item",
        url: "/ansassets/dialog/docs",
        end: true,  
      },
    ]
   },


// ERROR PAGE COMPONENT
 {
    id: "ansassets-error-root",
    title:"Error",
    type: "collapse",
    
    children: [
      {
                 id:"ansassets-error-error",
                 title:"Error page",
                 type:"item",
                 url:"/ansassets/error/error",
                 end:true,
               }, 
      {
        id: "ansassets-error-docs",
        title: "View Docs",
        type: "item",
        url: "/ansassets/error/docs",
        end: true,  
      },
    ]
   },

//  File Uploader

 {
  id: "ansassets-file-uploader-root",
  title:"File Uploader",
  type: "collapse",
 
  children: [
    {
               id:"ansassets-file-uploader-file",
               title:"File Com",
               type:"item",
               url:"/ansassets/file-uploader/file",
               end:true,
             }, 
    {
      id: "ansassets-file-uploader-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/file-uploader/docs",
      end: true,  
    },
  ]
 },

//  progressbar

{
  id: "ansassets-progressbar-root",
  title:"Progressbar",
  type: "collapse",
  
  children: [
    {
               id:"ansassets-progressbar-progress",
               title:"Progress Com",
               type:"item",
               url:"/ansassets/progressbar/progress",
               end:true,
             }, 
    {
      id: "ansassets-progressbar-docs",
      title: "View Docs",
      type: "item",
      url: "/ansassets/progressbar/docs",
      end: true,  
    },
  ]
},

//  SEARCHBAR

   {
    id: "ansassets-searchbar-root",
    title:"Search Bar",
    type: "collapse",
   
    children: [
      {
                 id:"ansassets-searchbar-search",
                 title:"Search Com",
                 type:"item",
                 url:"/ansassets/searchbar/search",
                 end:true,
               }, 
      {
        id: "ansassets-searchbar-docs",
        title: "View Docs",
        type: "item",
        url: "/ansassets/searchbar/docs",
        end: true,  
      },
    ]
   },


  //   Form Components

  {
    id:"ansassets-form-components-root",
    title:"Form Components",
    type: "collapse",
  
    children: [
      {
                 id:"ansassets-form-components-forms",
                 title:"Forms Com",
                 type:"item",
                 url:"/ansassets/form-components/forms",
                 end:true,
               }, 
      {
        id: "ansassets-form-components-docs",
        title: "View Docs",
        type: "item",
        url: "/ansassets/form-components/docs",
        end: true,  
      },
    ]
  },

  
// Navigation bar 

     {
      id:"ansassets-navigation",
      title:"Naviagtion",
      type:"collapse",
       children:[
        {
          id:"ansassets-navigation-floatingtoolbar",
          title:"Floating Toolbar",         
          type:"collapse",
          url:"/ansassets/navigation/floatingtoolbar",
          end:true ,  
          children:[
            {
              id:"ansassets-navigation-floatingtoolbar-floating",
              title:"Floating Com",
              type:"item",
              url:"/ansassets/navigation/floatingtoolbar/floating",
              end:true,
            },
            {
              id:"ansassets-navigation-floatingtoolbar-docs",
              title:"View Docs",
              type:"item",
              url:"/ansassets/navigation/floatingtoolbar/docs",
            },
            
          ]      
        },

        {
          id: "ansasets-navigation-breadcrumb",
          title: "Breadcrumb",
          type: "collapse",
          url: "/ansassets/navigation/breadcrumb",
          end: true,
          children: [
            {
              id: "ansassets-navigation-breadcrumb-breadcrumb",
              title: "Breadcrumb",
              type: "item",
              url: "/ansassets/navigation/breadcrumb/breadcrumb",
              end: true,
            },
            {
              id: "ansassets-navigation-breadcrumb-docs",
              title: "View Docs",
              type: "item",
              url: "/ansassets/navigation/breadcrumb/docs",
              end: true,
            },
          ],
        },

        {
          id:"ansassets-navigation-dropdownMenu",
          title:"Dropdown Menu",
          type:"collapse",
          url:"/ansassets/navigation/dropdownMenu",
          end:true ,  
          children:[
            {
              id:"ansassets-navigation-dropdownMenu-dropDown",
              title:"Dropdown",
              type:"item",
              url:"/ansassets/navigation/dropdownMenu/dropDown",
              end:true,
            },
            {
              id:"ansassets-navigation-dropdownMenu-docs",
              title:"View Docs",
              type:"item",
              url:"/ansassets/navigation/dropdownMenu/docs",
              end:true,
            },  
          ]
            
           
          
        },






        {
          id:"ansassets-navigation-speeddial",
          title:"Speed Dial",
          type:"collapse",
           url:"/ansassets/navigation/speeddial",
          end:true,
          children:[
            {
              id:"ansassets-navigation-speeddial-speeddial",
              title:"Speed Dial",
              type:"item",
              url:"/ansassets/navigation/speeddial/speeddial",
              end:true,
           },
           {
            id:"ansssets-navigation-speeddial-docs",
            title:"View Docs",
            type:"item",
            url:"/ansassets/navigation/speeddial/docs"
           }
          ]
        },
        {
          id:"ansssets-navigation-steper",
          title:"Steper Bar",
          type:"collapse",
           url:"/ansassets/navigation/steper",
          children:[
            {
              id:"ansssets-navigation-steper-steperbar",
              title:"Steper",
              type:"item",
              url:"/ansassets/navigation/steper/steperbar",
            },
            {
              id:"ansssets-navigation-steper-docs",
              title:"View Docs",
              type:"item",
              url:"/ansassets/navigation/steper/docs"
            }
          ]
        },

        {
          id:"ansassetes-navigation-pagination",
          title:"Pagination",
          type:"collapse",
           url:"/ansassets/navigation/pagination",
          children:[
            {
              id:"ansssets-navigation-pagination-pagination",
              title:"Pagination",
              type:"item",
              url:"/ansassets/navigation/pagination/pagination",
            },
            {
              id:"ansssets-navigation-pagination-docs",
              title:"View Docs",
              type:"item",
              url:"/ansassets/navigation/pagination/docs"
            }
          ]
        },

  {
    id:"ansassets-navigation-tabs",
    title:"Tabs",
    type:"collapse",
     url:"/ansassets/navigation/tabs",
    children:[
      {
        id:"ansssets-navigation-tabs-tab",
        title:"Tabs",
        type:"item",
        url:"/ansassets/navigation/tabs/tab",
      },
      {
        id:"ansssets-navigation-tabs-docs",
        title:"View Docs",
        type:"item",
        url:"/ansassets/navigation/tabs/docs"
      }
    ]
  },




       
       ]
     }







    ],
  },
];

export default navigationConfig;
