"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  requirementType: string;
  message: string;
}

const inputClass =
  "w-full bg-[#f6f6f6] rounded-[4px] px-5 h-[72px] lg:h-[85px] font-tasa-orbiter text-[#6b7280] text-lg lg:text-[22px] outline-none focus:ring-2 focus:ring-[#275ff9]/30 transition-all placeholder:text-[#6b7280]";

export default function ContactWithUs() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    requirementType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedMessage = `
Message:
${formData.message || "No message provided"}

--------------------------------------
Submitted Form Details:
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• City: ${formData.city}
• Requirement: ${formData.requirementType || "Not specified"}
`;

    const templateParams = {
      from_name: "Skybridge Inquiry",
      reply_to: formData.email,
      fullName: formData.fullName,
      name: formData.fullName,
      email: formData.email,
      emailAddress: formData.email,
      phone: formData.phone,
      phoneNumber: formData.phone,
      company: "N/A",
      city: formData.city,
      requirementType: formData.requirementType,
      message: formattedMessage.trim(),
      fileName: "No file uploaded",
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      setTimeout(() => setStatus(null), 5000);
      setFormData({ fullName: "", email: "", phone: "", city: "", requirementType: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white w-full py-16 lg:py-[100px] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 lg:gap-[32px]">

        {/* Header */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <div className="w-[10px] h-[10px] bg-[#275ff9] rounded-[1px] shrink-0" />
            <span
              className="font-ibm-mono font-semibold text-[#275ff9] uppercase tracking-[0.25em]"
              style={{ fontSize: "clamp(12px, 1.5vw, 20px)" }}
            >
              CONTACT WITH US
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-oswald font-normal text-[#10296e] text-center"
            style={{ fontSize: "clamp(36px, 5vw, 70px)", lineHeight: 1.08 }}
          >
            Write a Message
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Row 1: Full Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[50px]">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name*"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address*"
              required
              className={inputClass}
            />
          </div>

          {/* Row 2: Phone + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[50px]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City*"
              required
              className={inputClass}
            />
          </div>

          {/* Row 3: Requirement Type */}
          <div className="relative w-full">
            <select
              name="requirementType"
              value={formData.requirementType}
              onChange={handleChange}
              className={`${inputClass} appearance-none cursor-pointer pr-10`}
            >
              <option value="" disabled>
                Requirement Type
              </option>
              <option value="Capital Markets">Capital Markets</option>
              <option value="Strategic Advisory">Strategic Advisory</option>
              <option value="Private Wealth">Private Wealth Management</option>
              <option value="Trade Finance">Trade Finance</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#6b7280]">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Row 4: Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly share your company profile and primary objective..."
            className="w-full bg-[#f6f6f6] rounded-[4px] px-5 py-6 h-[160px] lg:h-[206px] font-tasa-orbiter text-[#6b7280] text-lg lg:text-[22px] outline-none focus:ring-2 focus:ring-[#275ff9]/30 transition-all resize-none placeholder:text-[#6b7280]"
          />

          {status && (
            <div className="flex justify-center w-full mt-4">
              <div
                className={`text-center py-3 px-6 rounded-xl text-sm font-semibold max-w-md w-full transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                    : "bg-rose-50 text-rose-600 border border-rose-200"
                }`}
              >
                {status.message}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-6 lg:pt-[44px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center gap-3 bg-[#10296e] text-white rounded-full md:px-8 md:py-5 font-tasa-orbiter text-xl lg:text-2xl uppercase tracking-[0.8px] hover:bg-[#0d2159] transition-colors duration-200 sm:w-auto justify-center ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              style={{
                minWidth: "clamp(240px, 30vw, 417px)",
                boxShadow:
                  "0px 0px 18px 0px rgba(6,182,212,0.2), 0px 10px 24px 0px rgba(0,0,0,0.15)",
              }}
            >
              <span>{isSubmitting ? "Sending..." : "SEND A MESSAGE"}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
