import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel"
import { projects } from "../../pages/Projects/projects";

export const Carrousel = () => {
   return (
      <Carousel width={"70%"} showThumbs={false} autoPlay>
         {
            projects.map((e,i) => {
               return (
               <a key={i} target ="_blank" href={e.ref}>
                  <img className="imgs"  src={e.imgSRC} alt=""/>
                  <p className="legend">{e.name}</p>
               </a>
               )
            })
         }
      </Carousel>
   )
}