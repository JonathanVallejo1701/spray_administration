import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { CarFront, SquareUserRound, ListChecks, MapPin, LogOut } from "lucide-react";


export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Account."
                icon={<SquareUserRound />}
                href="accounts"
              />
              <SidebarItem
                isActive={pathname === "/cars"}
                title="Cars."
                icon={<CarFront />}
                href="cars"
              />
              <SidebarItem
                isActive={pathname === "/reservations"}
                title="Reservations"
                icon={<ListChecks />}
                href="reservations"
              />
              <SidebarItem
                isActive={pathname === "/locations"}
                title="Locations."
                icon={<MapPin />}
                href="locations"
              />
            </SidebarMenu>

          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Log Out"} color="primary">
              <div className="max-w-fit flex items-center gap-2">
                <LogOut />
                <span className="text-sm">Log Out</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
