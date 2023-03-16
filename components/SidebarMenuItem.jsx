import React from "react";

export default function SidebarMenuItem({ text, Icon }) {
  return (
    <div className="hoverEffect">
      <Icon className="h-7" />
      {text}
    </div>
  );
}
