import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import FoodIcon from "mdi-material-ui/FoodVariant";
import NutrientsIcon from "mdi-material-ui/FormatListBulletedType";
import CalcIcon from "mdi-material-ui/Calculator";
import RestaurantIcon from "mdi-material-ui/RoomService";
import MenuIcon from "mdi-material-ui/SilverwareForkKnife";
import DeliveryIcon from "mdi-material-ui/TruckDelivery";

import Nutrition from "./nutrition";
import Bmi from "../containers/bmi";
import Home from "../components/home";

export const navObjects = [
  {
    text: "Home",
    to: "/",
    icon: (
      <SvgIcon>
        <path d="M 23.415221,9.1819488 0.68619305,0.00562875 V 6.7819987 L 13.956558,12.005419 0.68619305,16.946509 v 7.05873 L 23.415221,14.828929 Z" />
      </SvgIcon>
    )
  },
  {
    text: "Food",
    icon: <FoodIcon />,
    children: [
      {
        text: "Nutrients",
        icon: <NutrientsIcon />,
        to: "/nutrition"
      },
      {
        text: "Body Calculator",
        icon: <CalcIcon />,
        to: "/calc"
      }
    ]
  },
  {
    text: "Restaurant",
    icon: <RestaurantIcon />,
    WIP: true,
    children: [
      {
        text: "Our Menu",
        icon: <MenuIcon />,
        to: "/menu",
        disabled: true
      },
      {
        text: "Delivery",
        icon: <DeliveryIcon />,
        to: "/delivery",
        disabled: true
      }
    ]
  }
];

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/nutrition",
    main: () => <Nutrition />
  },
  {
    path: "/calc",
    main: () => <Bmi />
  }
];
