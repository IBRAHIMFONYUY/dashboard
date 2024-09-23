import React, { useEffect, useState } from "react";
import colordata from "./color-data";
const Colors = () => {
  return (
    <div className="main-home-cnt">
      <h1>Colors</h1>
      <div className="colors-cnt">
        <h3>Theme Colors</h3>
        <div className="colors-cnt-items">
          {colordata.map((color, index) => (
            <div className="colors" key={index}>
              <div className="color" style={{ background: color.bg }}></div>
              <div className="color-desc">
                <b>{color.name}</b>
                <br />
                <b>Hex:</b> {color.hex}
                <br />
                <b>RGB:</b> {color.rgb}
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Colors;
