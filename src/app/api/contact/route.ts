import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "contact/submit.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      full_name: requireString(record.fullName, "Full name", 120),
      email: requireEmail(record.email),
      phone: cleanString(record.phone, 40),
      inquiry_type: requireString(record.inquiryType, "Reason for contact", 60),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}
