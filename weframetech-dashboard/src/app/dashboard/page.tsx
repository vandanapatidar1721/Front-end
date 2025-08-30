// // app/dashboard/page.tsx
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { AccountProgress } from "@/components/account-progress"
// import { FranchiseesSummary } from "@/components/franchisees-summary"
// import { InsightsCard } from "@/components/insights-card"
// import { UploadsTable } from "@/components/uploads-table"



// export default function DashboardPage() {
//   return (
//     <div className="px-6 py-6">
//       <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Account Progress */}
//         <Card className="col-span-1">
//           <CardHeader>
//             <CardTitle>Account Progress</CardTitle>
//           </CardHeader>
//           <CardContent className="min-h-[220px] flex items-center justify-center">
//             <AccountProgress value={85} />
//           </CardContent>
//         </Card>

//         {/* Total Franchisees + Insights */}
//         <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader className="pb-2">
//               <CardTitle>Total Franchisees Onboard</CardTitle>
//             </CardHeader>
//             <CardContent className="min-h-[220px] flex items-center">
//               <CardContent>
//             <FranchiseesSummary total={128} growth={12} />
//             </CardContent>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="pb-2">
//               <CardTitle>Key Insights & Feedback</CardTitle>
//             </CardHeader>
//             <CardContent className="min-h-[220px]">
//               <CardContent>
//             <InsightsCard />
//             </CardContent>

//             </CardContent>
//           </Card>
//         </div>

//         {/* My Uploads */}
//         <Card className="col-span-1 lg:col-span-3">
//           <CardHeader className="pb-2">
//             <CardTitle>My Uploads</CardTitle>
//           </CardHeader>
//           <CardContent className="min-h-[420px]">
//             <CardContent>
//             <UploadsTable />
//         </CardContent>

//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AccountProgress } from "@/components/account-progress"
import { FranchiseesSummary } from "@/components/franchisees-summary"
import { InsightsCard } from "@/components/insights-card"
import { UploadsTable } from "@/components/uploads-table"
import { FinancialWellbeing } from "@/components/financial-wellbeing"
import { ProspectLeads } from "@/components/prospect-leads"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 p-6 lg:pl-72 pt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Franchisee
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Account Progress */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Account Progress</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[220px] flex flex-col items-center justify-center">
            <AccountProgress value={85} />
          </CardContent>
        </Card>

        {/* Total Franchisees Onboard + Financial Wellbeing */}
        <div className="col-span-1 grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Total Franchisees Onboard</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-center min-h-[100px]">
              <FranchiseesSummary total={14} growth={-7.4} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Financial Wellbeing</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[100px] flex items-center">
              <FinancialWellbeing />
            </CardContent>
          </Card>
        </div>

        {/* Key Insights & Feedback + Prospect Leads */}
        <div className="col-span-1 grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Key Insights & Feedback</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[100px]">
              <InsightsCard />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Prospect Leads</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[100px]">
              <ProspectLeads />
            </CardContent>
          </Card>
        </div>

        {/* My Uploads */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle>My Uploads</CardTitle>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input type="text" placeholder="Search here..." className="pl-10 pr-4 py-2 text-sm border rounded-md" />
            </div>
          </CardHeader>
          <CardContent>
            <UploadsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
