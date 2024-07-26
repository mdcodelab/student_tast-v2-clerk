import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Layout({ children }) {
  return (
      <main className="grid lg:grid-cols-[1fr,3fr]">
        {/* first col hides on small screen */}
        <div className="hidden lg:block lg:min-h-screen">
          <Sidebar />
        </div>
        {/* second col hides dropdown on big screen */}
        <div className="lg:col-span-1">
          <Navbar />
          <div className="py-16 px-4 sm:px-8 lg:py-16">{children}</div>
        </div>
      </main>
  );
}

export default Layout;
