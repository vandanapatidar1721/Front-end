// import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react"

// interface Insight {
//   message: string
//   type: "info" | "success" | "warning"
// }

// const insights: Insight[] = [
//   { message: "3 franchisees need document verification", type: "warning" },
//   { message: "Onboarding rate improved by 15%", type: "success" },
//   { message: "Average approval time: 2 days", type: "info" },
// ]

// export function InsightsCard() {
//   return (
//     <div className="space-y-3">
//       {insights.map((insight, index) => {
//         let Icon
//         let color
//         switch (insight.type) {
//           case "success":
//             Icon = TrendingUp
//             color = "text-green-600"
//             break
//           case "warning":
//             Icon = AlertTriangle
//             color = "text-yellow-600"
//             break
//           default:
//             Icon = Lightbulb
//             color = "text-blue-600"
//         }

//         return (
//           <div key={index} className="flex items-center space-x-2">
//             <Icon className={`w-4 h-4 ${color}`} />
//             <span className="text-sm">{insight.message}</span>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react"

interface Insight {
  message: string
  type: "info" | "success" | "warning"
}

const insights: Insight[] = [
  { message: "3 franchisees need document verification", type: "warning" },
  { message: "Onboarding rate improved by 15%", type: "success" },
  { message: "Average approval time: 2 days", type: "info" },
]

export function InsightsCard() {
  return (
    <div className="space-y-3">
      {insights.map((insight, index) => {
        let Icon
        let color
        switch (insight.type) {
          case "success":
            Icon = TrendingUp
            color = "text-green-600"
            break
          case "warning":
            Icon = AlertTriangle
            color = "text-yellow-600"
            break
          default:
            Icon = Lightbulb
            color = "text-blue-600"
        }

        return (
          <div key={index} className="flex items-center space-x-2">
            <Icon className={`w-4 h-4 ${color}`} />
            <span className="text-sm">{insight.message}</span>
          </div>
        )
      })}
    </div>
  )
}
