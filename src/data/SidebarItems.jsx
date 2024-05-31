import { SiCoursera } from "react-icons/si";
import {
  MdDashboardCustomize,
  MdVideoLibrary,
  MdMenuBook,
  MdPayment,
  MdAdminPanelSettings,
} from "react-icons/md";
import {
  PiBookBookmarkFill,
  PiUserCircleDuotone,
  PiSignOutBold,
  PiStudentFill,
} from "react-icons/pi";
import { FaUserSecret } from "react-icons/fa6";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";
const Navigations = [
  {
    id: "01",
    icon: <MdDashboardCustomize />,
    downicon: <IoCaretDownOutline />,
    forwardicon: <IoCaretForwardOutline />,
    name: "Dashboard",
    // path: "/dashboard",
    subroutes: [
      {
        id: "01B",
        icon: <MdAdminPanelSettings />,
        name: "Admin Dashboard",
        path: "/Admin",
      },
      {
        id: "01A",
        icon: <PiStudentFill />,
        name: "Student Dashboard",
        path: "/student",
      },
      {
        id: "01C",
        icon: <FaUserSecret />,
        name: "Creator Dashboard",
        path: "/creator",
      },
    ],
  },

  {
    id: "02",
    icon: <SiCoursera />,
    name: "Courses",
    downicon: <IoCaretDownOutline />,
    forwardicon: <IoCaretForwardOutline />,
    // path: "/courses",
    subroutes: [
      {
        id: "01D",
        icon: <MdAdminPanelSettings />,
        name: "General",
        path: "/courses/general",
      },
      {
        id: "01E",
        icon: <PiStudentFill />,
        name: "Enrolled",
        path: "/courses/enrolled",
      },
    ],
  },

  {
    id: "04",
    icon: <MdMenuBook />,
    name: "Exams",
    downicon: <IoCaretDownOutline />,
    forwardicon: <IoCaretForwardOutline />,
    // path: "/exams",
    subroutes: [
      {
        id: "01G",
        icon: <MdAdminPanelSettings />,
        name: "Hnd Exams",
        path: "/exams/hndexams",
      },
      {
        id: "01H",
        icon: <PiStudentFill />,
        name: "B.sc Exams",
        path: "/exams/bscexams",
      },
      {
        id: "01L",
        icon: <FaUserSecret />,
        name: "G.C.E Exams",
        path: "/exams/gceexams",
      },
    ],
  },
  {
    id: "03",
    icon: <MdVideoLibrary />,
    name: "Videos",
    path: "/video",
  },
  {
    id: "05",
    icon: <PiBookBookmarkFill />,
    name: "Notes",
    path: "/notes",
  },

  {
    id: "06",
    icon: <MdPayment />,
    name: "Billing",
    path: "/billing",
  },

  {
    id: "07",
    icon: <PiUserCircleDuotone />,
    name: "Profile",
    path: "/profile",
  },
  {
    id: "08",
    icon: <PiUserCircleDuotone />,
    name: "Chats",
    path: "/profile",
  },
  {
    id: "09",
    icon: <PiSignOutBold />,
    name: "SignOut",
    path: "/login",
  },
];
export { Navigations };
