"use client";
import React from "react";
import BallCanvas from "./canvas/Ball";

const Test = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BallCanvas icon="/path-to-your-icon.png" />
    </div>
  );
};

export default Test;
