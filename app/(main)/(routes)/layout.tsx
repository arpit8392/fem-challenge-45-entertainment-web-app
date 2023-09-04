import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="lg:flex-1">
        <SearchBar />
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
