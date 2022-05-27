import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Sidebar = ({ userImage, userName }) => {
  return (
    <aside className="p-2 mt-5 md:max-w-[600px] xl:min-w-[300px]">
      {/* because of the node:jit, I can use square brackets ☝️ */}
      <SidebarRow src={userImage} title={userName} />
      <SidebarRow Icon={UsersIcon} title="friends" />
      <SidebarRow Icon={UserGroupIcon} title="groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="events" />
      <SidebarRow Icon={ClockIcon} title="memories" />
      <SidebarRow Icon={ChevronDownIcon} title="see more" />
    </aside>
  );
};

export default Sidebar;
