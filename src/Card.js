import React from "react";
import "./card.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { prettyPrintStat } from "./utilities";

function InfoCard({ title, changes, isActive, total, ...props }) {
  return (
    <Card
      className={`infoCard ${
        isActive
          ? title !== "Corona Virus Recoveries"
            ? "infoCard--selectedRed"
            : "infoCard--selectedGreen"
          : ""
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoCard__title">
          {title}
        </Typography>
        <h2
          className={
            title === "Corona Virus Recoveries"
              ? "infoCard__changes green"
              : "infoCard__changes"
          }
        >
          {prettyPrintStat(changes)}
        </h2>
        <Typography color="textSecondary" className="infoCard__total">
          {prettyPrintStat(total)} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
