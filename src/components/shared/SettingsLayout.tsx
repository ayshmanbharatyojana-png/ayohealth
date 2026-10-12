import type { ReactNode } from "react"
import { Building2 } from "lucide-react"

import { PageHeader } from "@/components/shared/PageHeader"
import { SettingsTabs, SETTINGS_TABS, type SettingsTabValue } from "@/components/shared/SettingsTabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MASKED } from "@/lib/format"

// Every settings tab renders inside this shell so switching tabs only swaps
// the content under the tab bar — header, card frame and sidebar stay put.
export function SettingsLayout({
  active,
  toolbar,
  children,
}: {
  active: SettingsTabValue
  /** Tab-specific actions (Save, Invite, Export…) shown right-aligned above the content. */
  toolbar?: ReactNode
  children: ReactNode
}) {
  const tab = SETTINGS_TABS.find((t) => t.value === active)!

  return (
    <div>
      <PageHeader
        crumbs={[{ label: "Settings", href: "/settings" }, { label: tab.label }]}
        title="Settings"
        description="Manage your organization, preferences and system configurations."
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <Card>
            <CardContent className="pt-5">
              <SettingsTabs active={active} />
              {toolbar && <div className="mt-5 flex flex-wrap items-center justify-end gap-2">{toolbar}</div>}
              <div className="mt-5">{children}</div>
            </CardContent>
          </Card>
        </div>

        <SettingsSidebar />
      </div>
    </div>
  )
}

/** A titled, bordered group of settings rows inside a tab. */
export function SettingsSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border">
      <h3 className="border-b px-4 py-3 text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-col divide-y px-4 [&>*]:py-3">{children}</div>
    </section>
  )
}

function SettingsSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader><CardTitle>Company Profile</CardTitle></CardHeader>
        <CardContent className="pb-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="bg-info-bg text-info-foreground flex size-11 items-center justify-center rounded-lg"><Building2 className="size-5" /></div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-foreground">Demo Company</p>
                <Badge variant="success">Active</Badge>
              </div>
              <p className="text-muted-foreground text-xs">CIN: {MASKED}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">GSTIN: {MASKED}</p>
          <p className="text-muted-foreground mb-4 text-sm">123 Business Street, Bengaluru, Karnataka - 560001</p>
          <Button variant="outline" className="w-full">Edit Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Storage Usage</CardTitle></CardHeader>
        <CardContent className="pb-5">
          <div className="bg-muted mb-2 h-2 w-full overflow-hidden rounded-full">
            <div className="bg-primary h-full" style={{ width: "34%" }} />
          </div>
          <p className="text-muted-foreground text-xs">3.45 GB / 10 GB Used</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Subscription</CardTitle></CardHeader>
        <CardContent className="pb-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold text-foreground">Finovo Pro Plan</p>
            <Badge variant="success">Active</Badge>
          </div>
          <p className="text-muted-foreground mb-3 text-sm">Valid till 31 Dec 2026</p>
          <Button variant="outline" className="w-full">View Plan Details</Button>
        </CardContent>
      </Card>
    </div>
  )
}
