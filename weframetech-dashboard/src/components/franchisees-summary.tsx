// // components/franchisees-summary.tsx
// import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// interface FranchiseesSummaryProps {
//   total: number
//   growth: number // percentage, can be negative
// }

// export function FranchiseesSummary({ total, growth }: FranchiseesSummaryProps) {
//   const isPositive = growth >= 0

//   return (
//     <div className="flex flex-col items-start">
//       {/* Total Franchisees */}
//       <p className="text-4xl font-bold">{total}</p>
//       <p className="text-muted-foreground text-sm mb-2">
//         Total Franchisees Onboard
//       </p>

//       {/* Growth Indicator */}
//       <div
//         className={`flex items-center text-sm font-medium ${
//           isPositive ? "text-green-600" : "text-red-600"
//         }`}
//       >
//         {isPositive ? (
//           <ArrowUpRight className="w-4 h-4 mr-1" />
//         ) : (
//           <ArrowDownRight className="w-4 h-4 mr-1" />
//         )}
//         {growth}%
//         <span className="ml-1 text-muted-foreground">vs last month</span>
//       </div>
//     </div>
//   )
// }

// components/franchisees-summary.tsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

interface FranchiseesSummaryProps {
  total: number
  growth: number // percentage, can be negative
}

export function FranchiseesSummary({ total, growth }: FranchiseesSummaryProps) {
  const isPositive = growth >= 0

  return (
    <div className="flex flex-col items-start">
      {/* Total Franchisees */}
      <p className="text-4xl font-bold">{total}</p>
      <p className="text-muted-foreground text-sm mb-2">
        Total Franchisees Onboard
      </p>

      {/* Growth Indicator */}
      <div
        className={`flex items-center text-sm font-medium ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isPositive ? (
          <ArrowUpRight className="w-4 h-4 mr-1" />
        ) : (
          <ArrowDownRight className="w-4 h-4 mr-1" />
        )}
        {growth}%
        <span className="ml-1 text-muted-foreground">vs last month</span>
      </div>
    </div>
  )
}
