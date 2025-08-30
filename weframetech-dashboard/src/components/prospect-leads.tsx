// import { User, ChevronRight } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// interface Prospect {
//   name: string;
//   stage: string;
//   image: string;
// }

// const prospects: Prospect[] = [
//   { name: "Wade Warren", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/men/32.jpg" },
//   { name: "Ava Wright", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/women/44.jpg" },
//   { name: "Cody Fisher", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/men/45.jpg" },
// ];

// export function ProspectLeads() {
//   return (
//     <div className="space-y-4">
//       {prospects.map((prospect, index) => (
//         <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50">
//           <div className="flex items-center space-x-4">
//             <Avatar className="h-10 w-10">
//               <AvatarImage src={prospect.image} alt={prospect.name} />
//               <AvatarFallback><User /></AvatarFallback>
//             </Avatar>
//             <div>
//               <p className="font-semibold">{prospect.name}</p>
//               <p className="text-sm text-gray-500">{prospect.stage}</p>
//             </div>
//           </div>
//           <ChevronRight className="h-5 w-5 text-gray-400" />
//         </div>
//       ))}
//     </div>
//   );
// }

import { User, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface Prospect {
  name: string;
  stage: string;
  image: string;
}

const prospects: Prospect[] = [
  { name: "Wade Warren", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ava Wright", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Cody Fisher", stage: "Stage: Initial Inquiry", image: "https://randomuser.me/api/portraits/men/45.jpg" },
];

export function ProspectLeads() {
  return (
    <div className="space-y-4">
      {prospects.map((prospect, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={prospect.image} alt={prospect.name} />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{prospect.name}</p>
              <p className="text-sm text-gray-500">{prospect.stage}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      ))}
    </div>
  );
}
