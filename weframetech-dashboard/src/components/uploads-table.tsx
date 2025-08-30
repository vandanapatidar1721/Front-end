// import { MoreHorizontal } from "lucide-react"

// interface Upload {
//   name: string
//   status: "Pending" | "Approved" | "Rejected"
//   uploadedAt: string
// }

// const uploads: Upload[] = [
//   { name: "Franchise Agreement.pdf", status: "Approved", uploadedAt: "2025-08-15" },
//   { name: "KYC_Document.png", status: "Pending", uploadedAt: "2025-08-20" },
//   { name: "Bank_Statement.pdf", status: "Rejected", uploadedAt: "2025-08-22" },
// ]

// export function UploadsTable() {
//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border-collapse text-sm">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="p-3 font-medium">File Name</th>
//             <th className="p-3 font-medium">Status</th>
//             <th className="p-3 font-medium">Uploaded At</th>
//             <th className="p-3 font-medium text-right">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uploads.map((upload, index) => (
//             <tr key={index} className="border-b hover:bg-gray-50">
//               <td className="p-3">{upload.name}</td>
//               <td className="p-3">
//                 <span
//                   className={`px-2 py-1 rounded text-xs font-medium ${
//                     upload.status === "Approved"
//                       ? "bg-green-100 text-green-700"
//                       : upload.status === "Pending"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {upload.status}
//                 </span>
//               </td>
//               <td className="p-3">{upload.uploadedAt}</td>
//               <td className="p-3 text-right">
//                 <button className="p-1 rounded hover:bg-gray-200">
//                   <MoreHorizontal className="w-4 h-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

import { MoreHorizontal, FileText, FileImage, FileBarChart, FileAudio } from "lucide-react"
import { Badge } from "./badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

interface Upload {
  id: string;
  name: string
  type: "Legal" | "Vendors & Assets" | "Technology" | "Financial" | "Onboarding" | "Audio"
  aiInclusion: boolean;
  dashboardInclusion: boolean;
  stageAccess: "Full" | "Onboarding" | "Franchisee" | "Prospect"
}

const uploads: Upload[] = [
  { id: "1", name: "Tech requirement v05.pdf", type: "Legal", aiInclusion: true, dashboardInclusion: false, stageAccess: "Full" },
  { id: "2", name: "Dashboard screenshot.jpg", type: "Vendors & Assets", aiInclusion: false, dashboardInclusion: true, stageAccess: "Onboarding" },
  { id: "3", name: "Dashboard prototype recording.mp4", type: "Technology", aiInclusion: true, dashboardInclusion: false, stageAccess: "Franchisee" },
  { id: "4", name: "Financial Overview v0.2.xls", type: "Financial", aiInclusion: false, dashboardInclusion: false, stageAccess: "Prospect" },
  { id: "5", name: "UX Design Guidelines.docx", type: "Legal", aiInclusion: false, dashboardInclusion: true, stageAccess: "Onboarding" },
  { id: "6", name: "Dashboard Interaction.aep", type: "Financial", aiInclusion: false, dashboardInclusion: true, stageAccess: "Franchisee" },
  { id: "7", name: "Briefing call recording.mp3", type: "Audio", aiInclusion: true, dashboardInclusion: false, stageAccess: "Prospect" },
];

const getIconForType = (type: string) => {
  switch (type) {
    case "Legal":
    case "Onboarding":
      return <FileText className="w-4 h-4 text-blue-500 mr-2" />;
    case "Vendors & Assets":
    case "Technology":
      return <FileImage className="w-4 h-4 text-green-500 mr-2" />;
    case "Financial":
      return <FileBarChart className="w-4 h-4 text-yellow-500 mr-2" />;
    case "Audio":
      return <FileAudio className="w-4 h-4 text-purple-500 mr-2" />;
    default:
      return <FileText className="w-4 h-4 text-gray-500 mr-2" />;
  }
};

export function UploadsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="text-left font-medium text-gray-500 border-b">
            <th className="p-3">Document Name</th>
            <th className="p-3">Document Type</th>
            <th className="p-3 text-center">AI Inclusion</th>
            <th className="p-3 text-center">Dashboard Inclusion</th>
            <th className="p-3">Stage Access</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload) => (
            <tr key={upload.id} className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-center">
                {getIconForType(upload.type)}
                {upload.name}
              </td>
              <td className="p-3">
                <Badge variant="secondary" className="bg-gray-200 text-gray-700">{upload.type}</Badge>
              </td>
              <td className="p-3 text-center">
                <input type="checkbox" checked={upload.aiInclusion} readOnly className="h-4 w-4 text-blue-600 rounded" />
              </td>
              <td className="p-3 text-center">
                <input type="checkbox" checked={upload.dashboardInclusion} readOnly className="h-4 w-4 text-blue-600 rounded" />
              </td>
              <td className="p-3">
                <select className="border rounded-md p-1 bg-white">
                  <option>{upload.stageAccess}</option>
                </select>
              </td>
              <td className="p-3">
                <button className="p-1 rounded hover:bg-gray-200 h-auto">
                  Edit
                </button>
                <button className="p-1 rounded hover:bg-gray-200 h-auto text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
