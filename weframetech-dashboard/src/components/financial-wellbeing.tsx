// // import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// // export function FinancialWellbeing() {
// //   const isPositive = true; // Placeholder for logic
// //   const growth = 2.1;

// //   return (
// //     <div className="flex flex-col w-full">
// //       <div className="flex items-center justify-between mb-2">
// //         <span className="text-2xl font-bold">20</span>
// //         <div className={`flex items-center text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
// //           {isPositive ? (
// //             <ArrowUpRight className="w-4 h-4 mr-1" />
// //           ) : (
// //             <ArrowDownRight className="w-4 h-4 mr-1" />
// //           )}
// //           {growth}%
// //         </div>
// //       </div>
// //       <p className="text-sm text-gray-500 mb-4">Total Franchisees</p>
// //       <div className="relative pt-1">
// //         <div className="flex mb-2 items-center justify-between text-xs text-gray-500">
// //           <span>Target</span>
// //           <span>Current</span>
// //         </div>
// //         <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200">
// //           <div style={{ width: "90%" }} className="flex flex-col justify-center bg-blue-500"></div>
// //         </div>
// //         <div className="flex items-center justify-between text-xs font-semibold">
// //           <span>$500,000</span>
// //           <span>$450,000</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// export function FinancialWellbeing() {
//   const isPositive = true; // Placeholder for logic
//   const growth = 2.1;

//   return (
//     <div className="flex flex-col w-full">
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-2xl font-bold">20</span>
//         <div className={`flex items-center text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
//           {isPositive ? (
//             <ArrowUpRight className="w-4 h-4 mr-1" />
//           ) : (
//             <ArrowDownRight className="w-4 h-4 mr-1" />
//           )}
//           {growth}%
//         </div>
//       </div>
//       <p className="text-sm text-gray-500 mb-4">Total Franchisees</p>
//       <div className="relative pt-1">
//         <div className="flex mb-2 items-center justify-between text-xs text-gray-500">
//           <span>Target</span>
//           <span>Current</span>
//         </div>
//         <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200">
//           <div style={{ width: "90%" }} className="flex flex-col justify-center bg-blue-500"></div>
//         </div>
//         <div className="flex items-center justify-between text-xs font-semibold">
//           <span>$500,000</span>
//           <span>$450,000</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function FinancialWellbeing() {
  const isPositive = true; // Placeholder for logic
  const growth = 2.1;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold">20</span>
        <div className={`flex items-center text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          {growth}%
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4">Total Franchisees</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between text-xs text-gray-500">
          <span>Target</span>
          <span>Current</span>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200">
          <div style={{ width: "90%" }} className="flex flex-col justify-center bg-blue-500"></div>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold">
          <span>$500,000</span>
          <span>$450,000</span>
        </div>
      </div>
    </div>
  );
}
