import "./Widgets.css";
import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      {/* <h1>here</h1> */}
      <iframe
        // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&tabs=timeline&width=340&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FdarksoulsEU%2F&tabs=timeline&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
// Facebook Social plugin
