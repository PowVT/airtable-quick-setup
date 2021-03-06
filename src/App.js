import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import SomeChart from "./components/SomeChart"

const base = new Airtable({ apiKey: "your-key" }).base("your-base");

function App() {

  const [ siteData, setSiteData  ] = useState([]);
  
  function getData() {
    base("Table Name")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setSiteData(records);
        console.log(records);      
        fetchNextPage();
      });
  }


  console.log(siteData)

  return (
    <div>

    <SomeChart
    siteData={siteData}
    getData={getData}>  
    </SomeChart>
      
    </div>
  );
}

export default App;
