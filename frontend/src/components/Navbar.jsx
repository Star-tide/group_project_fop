"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useOutletContext, useNavigate } from "react-router-dom";
import { logOut } from "../utils/auth";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Learning Module", href: "/learn/:course_id" },
  { name: "Create Course", href: "/create" },
  { name: "Courses", href: "/courses" },
];
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useOutletContext();

  const handleLogOut = () => {
    setUser(null);
    console.log(logOut());
    navigate("/");
  };
  return (
    <header className=" mx-auto bg-secondary flex-grow">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
          {/* Logo Div  */}
        <div className="">
          <img
                alt=""
                src="public/logo-png.png"
                className="h-16 w-auto rounded-full mr-6"
              />
        </div>
          
          {/* Center Div  */}
          <div className="hidden lg:flex lg:gap-x-12 pl-40 flex-grow justify-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          {/* Logout Div  */}
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div> */}
        <a onClick={handleLogOut} href="#" className="-m-1.5 p-1.5">
          <img alt="" src="" className="h-8 w-auto" />
        </a>
        <div className="flex flex-1 justify-end">
          <a
            href="/login/"
            className="text-sm font-semibold leading-6 text-gray-900">
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>






      {/* <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6"> */}
          {/* <div className="flex items-center justify-between"> */}
            {/* <div className="flex flex-1">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div> */}
          {/* </div> */}



          
          {/* <div className="mt-6 space-y-2"> */}
            {/* {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {item.name}
              </a>
            ))} */}
          {/* </div> */}
        {/* </DialogPanel>
      </Dialog> */}
    </header>
  );
}
