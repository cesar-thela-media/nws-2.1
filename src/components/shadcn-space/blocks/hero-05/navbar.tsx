"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type NavbarProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Navbar = ({ navigationData, className }: NavbarProps) => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <header
      className={cn(
        "inset-x-0 z-50 flex items-center justify-center sticky top-0 h-20",
        sticky
          ? "bg-background shadow-md dark:shadow-foreground/10"
          : "bg-background",
        className,
      )}
    >
      <div
        className={
          "max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 w-full flex items-center h-fit justify-between"
        }
      >
        {/* Logo */}
        <a href="#">
          <Logo className="gap-3" />
        </a>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-6">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "p-0 text-base font-normal text-foreground hover:text-teal-400 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                      navItem.isActive && "text-teal-400",
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="flex gap-4">
          <Button
            size="lg"
            className="hidden lg:flex px-5 py-2.5 rounded-lg w-fit cursor-pointer h-auto"
          >
            Register
          </Button>

          <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">
                    <Menu size={16} className="text-foreground"/>
                    <span className="sr-only">Menu</span>
                  </div>
                </SheetTrigger>

                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full sm:w-96 p-0 border-l-0 dark"
                >
                  <div className="flex items-center justify-between p-6">
                    <a href="#">
                      <Logo className="gap-2" />
                    </a>
                    <SheetClose>
                      <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer">
                        <X size={16} className="shrink-0 text-foreground" />
                      </div>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-5 px-6 pb-6 overflow-y-auto">
                    <div className="flex flex-col gap-8">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <NavigationMenu
                        orientation="vertical"
                        className="items-start flex-none"
                      >
                        <NavigationMenuList className="flex flex-col items-start gap-3">
                          {navigationData.map((item) => (
                            <NavigationMenuItem key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                    "p-0 text-xl font-medium text-foreground hover:text-teal-400 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                    item.isActive && "text-teal-400",
                                  )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                      <Button
                      size="lg"
                      className="px-5 py-2.5 rounded-lg w-full sm:w-fit h-12 cursor-pointer"
                    >
                      Register
                    </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
