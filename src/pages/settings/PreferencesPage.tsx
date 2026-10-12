import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SettingsField, SettingsToggleRow } from "@/components/shared/SettingsField"
import { SettingsLayout, SettingsSection } from "@/components/shared/SettingsLayout"

export function PreferencesPage() {
  return (
    <SettingsLayout active="prefs" toolbar={<Button>Save Changes</Button>}>
      <div className="flex flex-col gap-4">
        <SettingsSection title="Regional">
          <SettingsField label="Date Format">
            <Select defaultValue="dd-mm-yyyy">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsField label="Currency">
            <Select defaultValue="inr">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="inr">INR (₹)</SelectItem>
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsField label="Number Format">
            <Select defaultValue="indian">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="indian">Indian (1,23,456)</SelectItem>
                <SelectItem value="international">International (123,456)</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsField label="Timezone">
            <Select defaultValue="ist">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ist">(GMT+5:30) India Standard Time</SelectItem>
                <SelectItem value="utc">(GMT+0:00) UTC</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsField label="Language">
            <Select defaultValue="en">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
        </SettingsSection>

        <SettingsSection title="Appearance">
          <SettingsField label="Theme">
            <Select defaultValue="system">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsToggleRow label="Compact Sidebar" hint="Reduce sidebar width to fit more content" defaultChecked={false} />
        </SettingsSection>
      </div>
    </SettingsLayout>
  )
}
