// // "use client";

// // import { Bell, User } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // import { Button } from "./ui/button";


// // export function Navbar() {
// //   return (
// //     <header className="h-16 border-b bg-white flex items-center justify-between px-6">
// //       <h1 className="font-semibold text-xl">Dashboard</h1>
// //       <div className="flex items-center space-x-4">
// //         <Button variant="ghost" size="icon">
// //           <Bell className="w-5 h-5" />
// //         </Button>
// //         <Button variant="ghost" size="icon">
// //           <User className="w-5 h-5" />
// //         </Button>
// //       </div>
// //     </header>
// //   );
// // }

// "use client";

// import { Bell, Search, Settings } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// export function Navbar() {
//   return (
//     <header className="h-16 border-b bg-white flex items-center justify-between px-6">
//       {/* Left side - Title / Logo */}
//       <h1 className="font-semibold text-xl">Dashboard</h1>

//       {/* Center - Search */}
//       <div className="hidden md:flex w-1/3">
//         <div className="relative w-full">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//           <Input
//             type="text"
//             placeholder="Search..."
//             className="pl-10 pr-4"
//           />
//         </div>
//       </div>

//       {/* Right side - Actions */}
//       <div className="flex items-center space-x-4">
//         {/* Notifications */}
//         <Button variant="ghost" size="icon" className="rounded-full">
//           <Bell className="w-5 h-5" />
//         </Button>

//         {/* Settings */}
//         <Button variant="ghost" size="icon" className="rounded-full">
//           <Settings className="w-5 h-5" />
//         </Button>

//         {/* User Menu */}
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Avatar className="cursor-pointer">
//               <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
//               <AvatarFallback>U</AvatarFallback>
//             </Avatar>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>My Account</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Profile</DropdownMenuItem>
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuItem>Logout</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// }


"use client";

import { Bell, Search, Settings } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white border-b flex items-center justify-between px-6 lg:pl-[280px]">
      <div className="hidden md:flex w-1/3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="w-5 h-5" />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="w-5 h-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
