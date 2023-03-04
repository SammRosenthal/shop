import NavBar from "~/components/NavBar";
import SideBar from "~/components/SideBar";

export function NavWithSideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="flex grow bg-red-500">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default NavWithSideBar;
