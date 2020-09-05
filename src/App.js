import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InfoCard from "./Card";
import Map from "./Map";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "./Table";
import { sortData } from "./utilities";
import LineGraph from "./LineGraph";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./About";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryData, setCountryData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const _countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          // console.log(sortedData);
          setTableData(sortedData);
          // setTableData(data);
          setCountries(_countries);
        });
    };
    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const fetchURL =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryData(data);
      });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <div className="app__left">
              {/* Header */}
              <div className="app__header">
                {/* Title */}
                <Link to="/about">
                  <h1 className="logo">COVID TRACKER</h1>
                </Link>
                {/* DropDown Menu */}
                <FormControl className="app__headerOptions">
                  <Select
                    variant="outlined"
                    value={country}
                    onChange={onCountryChange}
                  >
                    <MenuItem value={"worldwide"}>{"World-Wide"}</MenuItem>
                    {countries.map((country) => (
                      <MenuItem value={country.value} key={country.value}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* Header Closed */}
              {/* Cards Info *3*/}
              <div className="app__stats">
                {/* Card Total */}
                <InfoCard
                  isActive={casesType === "cases"}
                  onClick={(e) => setCasesType("cases")}
                  title="Corona Virus Cases"
                  changes={countryData.todayCases}
                  total={countryData.cases}
                />
                {/* Card Deaths */}
                <InfoCard
                  isActive={casesType === "deaths"}
                  onClick={(e) => setCasesType("deaths")}
                  title="Corona Virus Deaths"
                  changes={countryData.todayDeaths}
                  total={countryData.deaths}
                />
                {/* card Recoveries */}
                <InfoCard
                  isActive={casesType === "recovered"}
                  onClick={(e) => setCasesType("recovered")}
                  title="Corona Virus Recoveries"
                  changes={countryData.todayRecovered}
                  total={countryData.recovered}
                />
              </div>
              {/* Graph or Chart */}
              <Map
                totalCases={countryData.cases}
                recovered={countryData.recovered}
                deaths={countryData.deaths}
                casesType={casesType}
              />
            </div>
            <Card className="app__right">
              <CardContent>
                <h2 className="uppercase">Stats By Country</h2>
                {/* Table of stats */}
                <Table countries={tableData} />
                <h2 className="uppercase mb-10">Worldwide {casesType}</h2>
                {/* Graph */}
                <LineGraph casesType={casesType} />
              </CardContent>
            </Card>
          </div>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <div className="footer">
        Corona Tracking App developed by Vidur Khanal, all data were provided by{" "}
        <a href="https://corona.lmao.ninja/docs">disease.sh</a> and website
        built on React JS Library and deployed on Google's firebase.
      </div>
    </Router>
  );
}

export default App;
