
// "use client";

// import { Home, Upload, Users, Settings } from "lucide-react";
// import Link from "next/link";

// const menuItems = [
//   { name: "Home", icon: Home, href: "/" },
//   { name: "Stages & Checklist", icon: Users, href: "/stages" },
//   { name: "Upload Docs", icon: Upload, href: "/uploads" },
//   { name: "Settings", icon: Settings, href: "/settings" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col">
//       {/* Logo */}
//       <div className="p-6 font-bold text-xl">weframeTech</div>

//       {/* Menu */}
//       <nav className="flex-1 px-4 space-y-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700"
//           >
//             <item.icon size={20} />
//             {item.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Logout */}
//       <div className="p-4 border-t border-slate-700">
//         <button className="w-full py-2 rounded bg-red-500 hover:bg-red-600">
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

"use client";

import { Home, Upload, Users, Settings, LogOut, File, Lightbulb, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const menuItems = [
  { name: "Home", icon: Home, href: "/dashboard" },
  { name: "Stages & Checklist", icon: File, href: "/stages" },
  { name: "Upload Docs", icon: Upload, href: "/uploads" },
  { name: "Preferred Vendors", icon: UserRound, href: "/vendors" },
  { name: "Tech Stack", icon: Lightbulb, href: "/techstack" },
  { name: "Targets", icon: Users, href: "/targets" },
  { name: "Zoo Sales Targets", icon: Users, href: "/zoosales" },
  { name: "MAI Settings", icon: Settings, href: "/maisettings" },
  { name: "Pending Questions", icon: Users, href: "/questions", count: 2 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="p-6 font-bold text-xl">weframeTech</div>

      {/* Menu */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700 relative"
          >
            <item.icon size={20} />
            {item.name}
            {item.count && (
              <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* User and Logout */}
      <div className="p-4 border-t border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">N</span>
            <span className="text-xs text-slate-400">Logout</span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-white">
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
}
