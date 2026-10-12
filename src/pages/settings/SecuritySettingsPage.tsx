import { Monitor, Smartphone, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SettingsField, SettingsToggleRow } from "@/components/shared/SettingsField"
import { SettingsLayout, SettingsSection } from "@/components/shared/SettingsLayout"
import { MASKED } from "@/lib/format"

const sessions = [
  { icon: Laptop, device: "MacBook Pro", browser: "Chrome on macOS", location: "Bengaluru, India", current: true, lastActive: "Active now" },
  { icon: Smartphone, device: "iPhone 15", browser: "Safari on iOS", location: "Bengaluru, India", current: false, lastActive: "2 hours ago" },
  { icon: Monitor, device: "Windows PC", browser: "Edge on Windows", location: "Mumbai, India", current: false, lastActive: "3 days ago" },
]

export function SecuritySettingsPage() {
  return (
    <SettingsLayout active="security" toolbar={<Button>Save Changes</Button>}>
      <div className="flex flex-col gap-4">
        <SettingsSection title="Change Password">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input type="password" defaultValue={MASKED} placeholder="Current password" />
            <div className="hidden sm:block" />
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm new password" />
            <Button variant="outline" className="w-fit sm:col-span-2">Update Password</Button>
          </div>
        </SettingsSection>

        <SettingsSection title="Authentication">
          <SettingsToggleRow label="Two-Factor Authentication" hint="Require a verification code at login" />
          <SettingsToggleRow label="Login Alerts" hint="Email me when a new device logs in" />
          <SettingsToggleRow label="Enforce Strong Passwords" hint="Require uppercase, number and symbol" />
        </SettingsSection>

        <SettingsSection title="Password Policy">
          <SettingsField label="Minimum Password Length">
            <span className="text-sm font-medium text-foreground">8 characters</span>
          </SettingsField>
          <SettingsField label="Password Expiry">
            <span className="text-sm font-medium text-foreground">90 days</span>
          </SettingsField>
        </SettingsSection>

        <SettingsSection title="Active Sessions">
          {sessions.map((s) => (
            <div key={s.device} className="flex items-center gap-3">
              <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-lg text-foreground"><s.icon className="size-4.5" /></div>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  {s.device} {s.current && <span className="text-success-foreground text-xs font-normal">(This device)</span>}
                </p>
                <p className="text-muted-foreground text-xs">{s.browser} · {s.location} · {s.lastActive}</p>
              </div>
              {!s.current && <Button size="sm" variant="outline">Revoke</Button>}
            </div>
          ))}
        </SettingsSection>
      </div>
    </SettingsLayout>
  )
}
