import AboutFirstFrame from "../icons/AboutFirstFrame";
import AboutSecondFrame from "../icons/AboutSecondFrame";
import AboutThirdFrame from "../icons/AboutThirdFrame";

export const HeroData = () => ({
  title: "Welcome to SEARCHART !",
  content:
    "The ultimate data analytics platform designed for managers in business, education, economics, health, and army, as well as government officials and researchers. Our dashboards are specifically designed to help you make critical strategic decisions, whether you're looking to benchmark your organization's performance against industry standards, evaluate different countries' performances, or conduct further research.",
});

export const aboutData = () => [
  {
    id: 1,
    frame: <AboutFirstFrame />,
    content:
      "Our key value proposition lies in our ability to provide insights that drive better decision-making. With Searchart, you can easily access over 300 KPIs across different policy areas and compare the performances of different countries simultaneously. We offer a range of different dashboard types, each with a unique purpose to help you gain valuable insights into your organization's performance.",
  },

  {
    id: 2,
    frame: <AboutSecondFrame />,
    content:
      "Our country comparison dashboard, for instance, allows you to select multiple countries and multiple KPIs or one KPI. You can then compare their performances for the selected KPI and countries, both in the current situation and through time series analysis to compare past years' performance. The dashboard provides information on the improvement or decrease of country rank between those years, and you can also observe time series rank trend of countries. This can help you gain a deeper understanding of the performance trends across different countries.",
  },

  {
    id: 3,
    frame: <AboutThirdFrame />,
    content: `Our country overview dashboard, on the other hand, provides an overview of each country's score across different indexes such as power, economic development, and welfare. You can also observe the country's performance for each sector, including education, health, army, technology, and agriculture. Each sector has a bunch of different KPIs, giving you a comprehensive view of the country's performance across different policy areas.
   _ At Searchart, we provide data that matters. Our dashboards are designed to provide you with actionable insights that you can use to drive better decision-making. Whether you're looking to benchmark your organization's performance, evaluate different countries' performances, or conduct further research, Searchart has got you covered.`,
  },
];
