export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3002";

export const site = {
  name: "Neha Singh",
  title: "Neha Singh - HR Recruiter in Noida | Human Resources Portfolio",
  description:
    "HR Recruiter and MBA Human Resources graduate in Ghaziabad/Noida, skilled in IT recruitment, HR operations, onboarding, ATS tracking, and employee engagement.",
  url: siteUrl,
  email: "ns291999@gmail.com",
  phone: "+91-9717421034",
  linkedin: "https://linkedin.com/in/nehas29",
  whatsapp: "https://wa.me/919717421034",
  resume: "/Neha_Singh_HR_Resume.pdf",
};
