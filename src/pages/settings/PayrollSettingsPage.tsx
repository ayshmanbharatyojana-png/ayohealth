import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SettingsField, SettingsToggleRow } from "@/components/shared/SettingsField"
import { SettingsLayout, SettingsSection } from "@/components/shared/SettingsLayout"

export function PayrollSettingsPage() {
  return (
    <SettingsLayout active="payroll" toolbar={<Button>Save Changes</Button>}>
      <div className="flex flex-col gap-4">
        <SettingsSection title="Pay Cycle">
          <SettingsField label="Pay Cycle">
            <Select defaultValue="monthly">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="biweekly">Bi-weekly</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
          <SettingsField label="Pay Day">
            <Select defaultValue="last">
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="last">Last working day</SelectItem>
                <SelectItem value="1">1st of the month</SelectItem>
                <SelectItem value="7">7th of the month</SelectItem>
              </SelectContent>
            </Select>
          </SettingsField>
        </SettingsSection>

        <SettingsSection title="Statutory Contributions">
          <SettingsField label="PF Contribution (Employer)">
            <div className="flex items-center gap-2">
              <Input defaultValue="12" className="w-20 text-right" />
              <span className="text-muted-foreground text-sm">%</span>
            </div>
          </SettingsField>
          <SettingsField label="ESI Contribution (Employer)">
            <div className="flex items-center gap-2">
              <Input defaultValue="3.25" className="w-20 text-right" />
              <span className="text-muted-foreground text-sm">%</span>
            </div>
          </SettingsField>
          <SettingsToggleRow label="Professional Tax" hint="Deduct professional tax as per state slabs" />
          <SettingsToggleRow label="Labour Welfare Fund" hint="Deduct LWF where applicable" defaultChecked={false} />
        </SettingsSection>

        <SettingsSection title="Automation">
          <SettingsToggleRow label="Overtime Calculation" hint="Auto-calculate overtime pay from attendance" defaultChecked={false} />
          <SettingsToggleRow label="Auto-generate Payslips" hint="Generate payslips automatically after each run" />
          <SettingsToggleRow label="Email Payslips to Employees" hint="Send payslips automatically on payday" />
        </SettingsSection>
      </div>
    </SettingsLayout>
  )
}
