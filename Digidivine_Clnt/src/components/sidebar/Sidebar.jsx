import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

import {
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// import KpiCard1 from "./kapa";
// import MembersTable from "./Table";
function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function Sidebar({ open, navOpen, navStatus,SetNavOpen }) {
  // console.log(adminDeatails);

  //   let check = open;
  //   if (navStatus) {
  //     check = navOpen;
  //   } else {
  //     check = open;
  //   }
  return (
    <>
      {navOpen ? (
        <>
          <div
            className={`drop-shadow-md ...    fixed  z-30  transform    p-4 transition-transform  h-full w-[15em]    bg-gray-200 `}
          >
            <div className="flex flex-col ">
              {/* <hr class="border-gray-300"></hr> */}

              {/* <Typography variant="h2" color="blue-gray" className="mb-4 border-slate-200 text-wrap ">
      Hii,sudhanshusdsds
        </Typography> */}

              { true ? (
                <>
                  <div className="mt-6 mb-4 flex items-center   gap-2 ">
                    {/* <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                    /> */}
                     <NavLink to={"/"} onClick={ ()=>{SetNavOpen(!navOpen)}}>
                    <p>Digidivine Online</p>
                     </NavLink>
                  </div>
                  <div className=" container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                      <NavLink to={"/about"} onClick={ ()=>{SetNavOpen(!navOpen)}}>
                        <NavItem>
                          <UserCircleIcon className="h-6 w-6" />
                          About
                        </NavItem>
                      </NavLink>

                      <NavLink to={"/contact"} onClick={ ()=>{SetNavOpen(!navOpen)}}>
                        <NavItem>
                          <Squares2X2Icon className="h-6 w-6" />
                          Contact
                        </NavItem>
                      </NavLink>

                      <NavLink to={"/blog"} onClick={ ()=>{SetNavOpen(!navOpen)}}>
                        <NavItem>
                          <CommandLineIcon className="h-6 w-6" />
                          Blog
                        </NavItem>
                      </NavLink>   
                       <NavLink to={"/services"} onClick={ ()=>{SetNavOpen(!navOpen)}}>
                        <NavItem>
                          <CommandLineIcon className="h-6 w-6" />
                          Services
                        </NavItem>
                      </NavLink>
                    </ul>
                  </div>
                </>
              ) : (
                <></>
              )}
              <></>
            </div>

            {/* End power Button section */}
            <div className="  h-[50vh] flex flex-col justify-end items-center">
              <PowerIcon className="h-5 w-5 text-gray-50 " />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
