import { useMemo, useState } from "react"
import { Users2, UsersRound, Building2, Briefcase, User, Landmark, Star, Headphones, Search, ChevronDown, Filter, Calendar, Plus, Pencil, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DialogTrigger } from "@/components/ui/dialog"
import { NewGroupDialog } from "@/components/shared/EntityDialogs"

const statusStyle: Record<string, { pill: string; dot: string }> = {
  Active: { pill: "bg-success-bg text-success-foreground", dot: "bg-success-foreground" },
  Inactive: { pill: "bg-danger-bg text-danger-foreground", dot: "bg-danger-foreground" },
}

function StatusPill({ status }: { status: string }) {
  const s = statusStyle[status]
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ${s.pill}`}>
      <span className={`size-1.5 shrink-0 rounded-full ${s.dot}`} />
      {status}
    </span>
  )
}

const typeColors: Record<string, "info" | "warning"> = {
  System: "info",
  Custom: "warning",
}

const iconStyle = [
  { icon: Users2, bg: "bg-success-bg text-success-foreground" },
  { icon: Building2, bg: "bg-info-bg text-info-foreground" },
  { icon: Briefcase, bg: "bg-warning-bg text-warning-foreground" },
  { icon: User, bg: "bg-purple-bg text-purple-foreground" },
  { icon: Landmark, bg: "bg-success-bg text-success-foreground" },
  { icon: UsersRound, bg: "bg-warning-bg text-warning-foreground" },
  { icon: Star, bg: "bg-danger-bg text-danger-foreground" },
  { icon: Headphones, bg: "bg-purple-bg text-purple-foreground" },
]

const groups = [
  { name: "All Clients", default: true, desc: "All client contacts", type: "System", contacts: 108, status: "Active", by: "John Doe", on: "18 May 2025" },
  { name: "Vendors", desc: "All vendor contacts", type: "System", contacts: 86, status: "Active", by: "John Doe", on: "18 May 2025" },
  { name: "Deductors", desc: "TDS deductors", type: "Custom", contacts: 32, status: "Active", by: "John Doe", on: "16 May 2025" },
  { name: "Deductees", desc: "TDS deductees", type: "Custom", contacts: 45, status: "Active", by: "John Doe", on: "16 May 2025" },
  { name: "Banks", desc: "All bank contacts", type: "Custom", contacts: 12, status: "Active", by: "Rahul Mehta", on: "12 May 2025" },
  { name: "Internal Team", desc: "Company internal contacts", type: "Custom", contacts: 15, status: "Active", by: "John Doe", on: "10 May 2025" },
  { name: "Important Clients", desc: "High priority clients", type: "Custom", contacts: 18, status: "Inactive", by: "Rahul Mehta", on: "08 May 2025" },
  { name: "Service Providers", desc: "Third party service providers", type: "Custom", contacts: 9, status: "Inactive", by: "John Doe", on: "05 May 2025" },
]

/** Groups tab content, rendered inside the Contacts page's tabbed card. */
export function GroupsPanel() {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return groups.filter((g) => !q || g.name.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <div className="mt-4 mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input placeholder="Search groups..." className="pl-9" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          <Button variant="outline">All Status <ChevronDown className="size-3.5" /></Button>
          <Button variant="outline">All Types <ChevronDown className="size-3.5" /></Button>
          <Button variant="outline"><Filter className="size-4" /> Filters</Button>
          <Button variant="outline" size="icon"><Calendar className="size-4" /></Button>
          <NewGroupDialog>
            <DialogTrigger asChild>
              <Button><Plus className="size-4" /> New Group</Button>
            </DialogTrigger>
          </NewGroupDialog>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground border-b text-left text-xs">
              <th className="pb-2 font-medium">Group Name</th>
              <th className="pb-2 font-medium">Description</th>
              <th className="pb-2 font-medium">Group Type</th>
              <th className="pb-2 font-medium">Contacts</th>
              <th className="pb-2 font-medium">Status</th>
              <th className="pb-2 font-medium">Created By</th>
              <th className="pb-2 font-medium">Created On</th>
              <th className="pb-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((g, i) => {
              const IconInfo = iconStyle[i % iconStyle.length]
              return (
                <tr key={g.name} className="border-b last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${IconInfo.bg}`}>
                        <IconInfo.icon className="size-4" />
                      </div>
                      <span className="flex items-center gap-2 font-medium whitespace-nowrap text-foreground">
                        {g.name}
                        {g.default && <Badge variant="secondary">Default</Badge>}
                      </span>
                    </div>
                  </td>
                  <td className="text-muted-foreground py-3 whitespace-nowrap">{g.desc}</td>
                  <td className="py-3"><Badge variant={typeColors[g.type]}>{g.type}</Badge></td>
                  <td className="text-foreground py-3">{g.contacts}</td>
                  <td className="py-3"><StatusPill status={g.status} /></td>
                  <td className="text-muted-foreground py-3 whitespace-nowrap">{g.by}</td>
                  <td className="text-muted-foreground py-3 whitespace-nowrap">{g.on}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1.5">
                      <Button size="icon-sm" variant="outline"><Pencil className="size-4" /></Button>
                      <Button size="icon-sm" variant="ghost"><MoreVertical className="size-4" /></Button>
                    </div>
                  </td>
                </tr>
              )
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="text-muted-foreground py-8 text-center">No groups found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-muted-foreground mt-4 text-sm">Showing {filtered.length} of {groups.length} groups</div>
    </>
  )
}
