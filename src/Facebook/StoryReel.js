import "./StoryReel.css";
import React from "react";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="CENA.jpg" profileSrc="CENA.jpg" title="John Cena" />
      <Story image="CENA.jpg" profileSrc="CENA.jpg" title="John Cena" />
      <Story image="CENA.jpg" profileSrc="CENA.jpg" title="John Cena" />
      <Story image="CENA.jpg" profileSrc="CENA.jpg" title="John Cena" />
      <Story image="CENA.jpg" profileSrc="CENA.jpg" title="John Cena" />
    </div>
  );
}

export default StoryReel;
