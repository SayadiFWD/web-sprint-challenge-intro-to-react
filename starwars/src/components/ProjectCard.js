import React from "react";
import styled, { css } from "styled-components";





const ProjectCard = ({
  name,
  created,
  climate,
  diameter,
  edited,
  gravity,
  population,
  rotation,
  surface,
  terrain,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <ul>Created : {created}</ul>
      <ul>Clinate : {climate}</ul>
      <ul>Diameter : {diameter}</ul>
      <ul>Edited : {edited}</ul>
      <ul>Gravity : {gravity}</ul>
      <ul>Population : {population}</ul>
      <ul>Rotation : {rotation}</ul>
      <ul>Surface : {surface}</ul>
      <ul>Terrain : {terrain}</ul>
    </div>
  );
};
export default ProjectCard;
