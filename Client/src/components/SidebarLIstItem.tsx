import React, { ReactNode } from "react";
import { Link, RouterProps } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { IconType } from "react-icons/lib";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
interface ListProps {
  icon: ReactNode;
  text: string;
  path: string;
  itemidx: number;
}

const SidebarLIstItem: React.FC<ListProps> = ({
  icon,
  text,
  path,
  itemidx,
  ...destination
}) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "unset" }}
      key={itemidx}
      {...destination}
    >
      <div
        className="sidebar_container_item"
        //@ts-ignore
      >
        <div>{icon}</div>
        <Typography variant="subtitle2">{text}</Typography>
      </div>
    </Link>
  );
};

export default SidebarLIstItem;
