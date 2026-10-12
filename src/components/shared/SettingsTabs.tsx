import { useNavigate } from "react-router-dom"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const SETTINGS_TABS = [
  { value: "org", label: "Organization Settings", href: "/settings" },
  { value: "users", label: "Users & Roles", href: "/settings/users-roles" },
  { value: "prefs", label: "Preferences", href: "/settings/preferences" },
  { value: "security", label: "Security", href: "/settings/security" },
  { value: "financial", label: "Financial Settings", href: "/settings/financial" },
  { value: "payroll", label: "Payroll Settings", href: "/settings/payroll" },
  { value: "audit", label: "Audit Log", href: "/settings/audit-log" },
] as const

export type SettingsTabValue = (typeof SETTINGS_TABS)[number]["value"]

export function SettingsTabs({ active }: { active: SettingsTabValue }) {
  const navigate = useNavigate()

  return (
    <Tabs value={active} onValueChange={(v) => navigate(SETTINGS_TABS.find((t) => t.value === v)!.href)}>
      <TabsList>
        {SETTINGS_TABS.map((t) => (
          <TabsTrigger key={t.value} value={t.value}>{t.label}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
