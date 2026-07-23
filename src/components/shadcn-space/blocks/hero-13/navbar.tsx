"use client";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Equal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
export type NavigationSection = {
  name: string;
  href: string;
  isActive?: boolean;
};

const NavLink = ({
  item,
  onClick,
}: {
  item: NavigationSection;
  onClick?: () => void;
}) => {
  return (
    <li className={cn( "group flex items-center transition-all duration-500 ease-in-out w-fit",item.isActive ? "gap-3" : "gap-0 hover:gap-3",)}>
      <div className={cn("overflow-hidden transition-all duration-500 ease-in-out flex items-center",item.isActive ? "max-w-6 opacity-100" : "max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100",)}>
        <div className="w-6 h-0.5 rounded-full bg-foreground" />
      </div>
      <a href={item.href} onClick={onClick} className={cn("text-2xl sm:text-3xl sm:leading-10 leading-8 font-medium transition-colors duration-300",item.isActive ? "text-foreground" : "text-foreground/80",)}>
        {item.name}
      </a>
    </li>
  );
};


const Navbar = ({ navigationData }: {navigationData: NavigationSection[];}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-background backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 py-4 w-full">
        <nav className="flex items-center justify-between">
          <a href="#">
            <Logo />
          </a>

          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-10">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.name}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "p-0 text-base text-foreground hover:text-foreground/80 font-normal hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                      navItem.isActive && "font-medium",
                    )}
                  >
                    {navItem.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu */}
          <div className="lg:hidden relative">
              <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <AnimatePresence>
                  {menuOpen && (
                    <DropdownMenuPortal>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-40 backdrop-blur-sm"
                      />
                    </DropdownMenuPortal>
                  )}
                </AnimatePresence>
                <DropdownMenuTrigger className="rounded-full h-auto p-2.5 gap-2 border border-border cursor-pointer bg-gray-950 dark:bg-white text-white dark:text-gray-950">
                      <Equal className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className="min-w-xs sm:min-w-sm bg-background py-8 px-6 shadow-2xl rounded-3xl border border-border -mt-12 z-50"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-foreground">Menu</p>
                      <Button onClick={() => setMenuOpen(false)}
                        className="cursor-pointer rounded-full h-auto p-2.5"
                      >
                        <X size={20} />
                      </Button>
                    </div>
                    <hr className="border-border" />
                    {/* Navigation */}
                    <ul className="flex flex-col gap-3.5 pb-4">
                      {navigationData.map((item, index) => (
                        <NavLink
                          key={index}
                          item={item}
                          onClick={() => setMenuOpen(false)}
                        />
                      ))}
                    </ul>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
