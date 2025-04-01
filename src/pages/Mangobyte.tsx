import React from "react";
import {container ,grid, typography} from '@mui/material';
import { Navbar } from "../components/layout/Navbar";
import { ProjectCard } from "../components/layout/ProjectCard";
import { Description, Javascript } from "@mui/icons-material";
import { title } from "process";
import { Link } from "react-router-dom";

const projects = [

    {
        title: "Mangobyte Website",
        description: "WordPress Website using Elementor and custom templates",
        image: "../images/Portfolio.webp",
        link: "https://mangobytedigital.com/",
        tags: "WordPress, Elementor",
    }

];

