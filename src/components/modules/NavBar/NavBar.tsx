"use client";
import React from "react";
import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { useUtilAuth } from "@/context/UtilityContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import logo from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BellDotIcon,
  Calendar1Icon,
  ChevronDown,
  HomeIcon,
  Menu,
  Star,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

type Checked = DropdownMenuCheckboxItemProps["checked"];
const NavBar = () => {
  // const { setOpen } = useUtilAuth();
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const router = useRouter();
  return (
    <div className="sticky  top-0 z-10 flex h-16 items-center justify-between bg-white px-5 shadow-lg xl:h-[88px] xl:px-9">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          {" "}
          <Image
            src={"/images/logo.png"}
            alt=""
            width={500}
            height={200}
            className="hidden lg:block h-auto w-16 object-cover   "
          />
        </Link>

        <div className="block lg:hidden flex items-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex items-start">
              <Menu size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                <Link href="/">Home</Link>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                
              >
                <Link href="/group">
                  Groups
                  </Link>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                <Link href="/my-events">Events</Link>
              </DropdownMenuCheckboxItem>
              <DropdownMenuItem>
                {" "}
                <Link
                  href="#"
                  className="hidden w-full  bg-red-500 p-2 lg:flex justify-center items-center gap-2 text-white"
                >
                  <Star fill="#FFD700" color="#FFD700" size={12} />
                  Subscribe now - 20% off
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <div className="flex flex-col gap-y-3 items-center w-full">
                  <Button
                    variant="default"
                    className="h-10 w-full bg-primary cursor-pointer text-white hover:bg-black rounded shadow-lg"
                    type="submit"
                    disabled={false}
                    onClick={() => router.push("/login")}
                  >
                    Login
                    {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
                  </Button>
                  <Button
                    variant="default"
                    className="h-10 cursor-pointer w-full active:bg-black bg-black text-white hover:bg-primary rounded shadow-lg"
                    type="submit"
                    disabled={false}
                    onClick={() => router.push("/register")}
                  >
                    Sign up
                    {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
                  </Button>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-x-3 items-center">
          <Link
            href="#"
            className="hidden   bg-red-500 p-2 lg:flex justify-center items-center gap-2 text-white"
          >
            <Star fill="#FFD700" color="#FFD700" size={12} />
            Subscribe now - 20% off
          </Link>
          <Separator orientation="vertical" />
          <span>
            <BellDotIcon />
          </span>
          <Link href="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="hidden lg:flex gap-x-3 items-center">
            <Button
              variant="default"
              className="h-10 w-full bg-[#ABBB00] cursor-pointer text-white hover:bg-black rounded-[20px] shadow-lg"
              type="submit"
              disabled={false}
              onClick={() => router.push("/login")}
            >
              Login
              {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
            </Button>
            <Button
              variant="default"
              className="h-10 cursor-pointer w-full active:bg-black bg-black text-white hover:bg-[#ABBB00] rounded-[20px] shadow-lg"
              type="submit"
              disabled={false}
              onClick={() => router.push("/register")}
            >
              Sign up
              {/* {false ? <Spinner size="2" loading={true} /> : <>Log In</>} */}
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <span className="flex items-center gap-2">
                <Image
                  src={"/images/empty-user-img.svg"}
                  alt=""
                  width={500}
                  height={200}
                  className="w-8 h-8 xl:h-11 xl:w-11 rounded-full object-cover"
                />
                <ChevronDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/my-events">My Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/groups">Groups</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>  <Link href="/settings">Settings</Link></DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
