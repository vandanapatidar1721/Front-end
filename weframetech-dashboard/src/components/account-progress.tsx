// // "use client";

// // import React from "react";

// // interface AccountProgressProps {
// //   value: number; // percentage (0–100)
// // }

// // export function AccountProgress({ value }: AccountProgressProps) {
// //   const radius = 45;
// //   const circumference = 2 * Math.PI * radius;
// //   const offset = circumference - (value / 100) * circumference;

// //   return (
// //     <div className="flex flex-col items-center justify-center">
// //       {/* relative wrapper to keep text inside */}
// //       <div className="relative w-32 h-32 flex items-center justify-center">
// //         <svg className="w-32 h-32">
// //           <circle
// //             cx="50%"
// //             cy="50%"
// //             r={radius}
// //             stroke="#e5e7eb"
// //             strokeWidth="10"
// //             fill="none"
// //           />
// //           <circle
// //             cx="50%"
// //             cy="50%"
// //             r={radius}
// //             stroke="#22c55e"
// //             strokeWidth="10"
// //             fill="none"
// //             strokeDasharray={circumference}
// //             strokeDashoffset={offset}
// //             strokeLinecap="round"
// //             className="transition-all duration-500"
// //           />
// //         </svg>
// //         {/* Percentage text centered */}
// //         <span className="absolute text-xl font-bold">{value}%</span>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import React from "react";

// interface AccountProgressProps {
//   value: number; // percentage (0–100)
// }

// export function AccountProgress({ value }: AccountProgressProps) {
//   const radius = 45;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (value / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center justify-center">
//       {/* relative wrapper to keep text inside */}
//       <div className="relative w-32 h-32 flex items-center justify-center">
//         <svg className="w-32 h-32">
//           <circle
//             cx="50%"
//             cy="50%"
//             r={radius}
//             stroke="#e5e7eb"
//             strokeWidth="10"
//             fill="none"
//           />
//           <circle
//             cx="50%"
//             cy="50%"
//             r={radius}
//             stroke="#22c55e"
//             strokeWidth="10"
//             fill="none"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             strokeLinecap="round"
//             className="transition-all duration-500"
//           />
//         </svg>
//         {/* Percentage text centered */}
//         <span className="absolute text-xl font-bold">{value}%</span>
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";

interface AccountProgressProps {
  value: number; // percentage (0–100)
}

export function AccountProgress({ value }: AccountProgressProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* relative wrapper to keep text inside */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-32 h-32">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#22c55e"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Percentage text centered */}
        <span className="absolute text-xl font-bold">{value}%</span>
      </div>
    </div>
  );
}
