import {FaExclamation, FaThLarge} from "react-icons/fa";
import {MdCalendarToday, MdHelpOutline, MdList, MdSettings, MdTask} from "react-icons/md";

const sidebarItems = [
    { title: "Dashboard", to: "/dashboard", icon: <FaThLarge /> },
    { title: "My Tasks", to: "/task", icon: <FaExclamation /> },
    { title: "My Sub Tasks", to: "/subTask", icon: <MdTask /> },
    { title: "Task Categories", to: "/taskCategory", icon: <MdList /> },
    { title: "Calendar", to: "/calendar", icon: <MdCalendarToday /> },
    { title: "Settings", to: "/settings", icon: <MdSettings /> },
    { title: "Help", to: "/help", icon: <MdHelpOutline /> }
];

export default sidebarItems;