import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "partnerships/apply.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      full_name: requireString(record.fullName, "Full name", 120),
      email: requireEmail(record.email),
      organization: cleanString(record.organization, 200),
      phone: cleanString(record.phone, 40),
      interest_type: requireString(record.interestType, "Partnership interest", 60),
      message: cleanString(record.message, 4000),
      ...leadContext(record),
    };
  });
}
