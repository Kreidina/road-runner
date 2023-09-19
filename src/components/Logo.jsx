import { useEffect, useState } from "react";

export const LogoRoadRunner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.font = "bold 20px Mooli";

    const hovered = isHovered || isFocused;

    ctx.strokeStyle = hovered ? "#fff" : "#3470ff";
    ctx.fillStyle = hovered ? "#3470ff" : "#fff";
    const roadX = 0;
    const roadY = 35;
    ctx.lineWidth = 3;
    ctx.strokeText("Road", roadX, roadY);
    ctx.fillText("Road", roadX, roadY);

    ctx.strokeStyle = hovered ? "#3470ff" : "#fff";
    ctx.fillStyle = hovered ? "#fff" : "#3470ff";
    const runnerX = 52;
    const runnerY = 35;
    ctx.lineWidth = 3;
    ctx.strokeText("Runner", runnerX, runnerY);
    ctx.fillText("Runner", runnerX, runnerY);
  }, [isHovered, isFocused]);

  return (
    <canvas
      id="myCanvas"
      width="160"
      height="50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex="0"
    ></canvas>
  );
};
