"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

function Navbar({className}:{className?:string}) {
    const [active,setActive] = useState<string|null> (null);
  return (
    <div className={cn("fixed top-10 inset-x-0 w-full sm:w-[80vw] max-w-5xl mx-auto z-50", className)}>
   
      <Menu setActive={setActive}> 
        <Link href={"/"}>
            <MenuItem setActive={setActive} active ={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active ={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Our lab">Our Lab</HoveredLink>
          <HoveredLink href="/Our team">Our Team</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active ={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Contact Us">Blogs</HoveredLink>
          <HoveredLink href="/Join Us">Projects</HoveredLink>
          <HoveredLink href="/Join Us">Publications</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active ={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Join Us">FAQs</HoveredLink>
          <HoveredLink href="/Contact Us">Internal Resources</HoveredLink>
          <HoveredLink href="/Join Us">External Resources</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active ={active} item="let's Connect">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Contact Us">Contact Us</HoveredLink>
          <HoveredLink href="/Join Us">Join Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </div>
  )
}

export default Navbar