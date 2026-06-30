"use client";

import React, { useState } from "react";

interface Office {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapQ: string;
}

const OFFICES: Office[] = [
  {
    id: 1,
    city: "Mumbai",
    address: "30, Fl. 2, Nawab Bldg, D.N Rd Hutatma Chowk Fort, Mumbai G.P.O., Maharashtra, India 400001",
    phone: "+91 91366 41303",
    email: "partnership@skybridgegroup.in",
    mapQ: "Fort+Mumbai+Maharashtra+India",
  },
  // {
  //   id: 2,
  //   city: "New York",
  //   address: "Coming Soon",
  //   phone: "Coming Soon",
  //   email: "Coming Soon",
  //   mapQ: "New+York+City+USA",
  // },
  // {
  //   id: 3,
  //   city: "Abu Dhabi",
  //   address: "Coming Soon",
  //   phone: "Coming Soon",
  //   email: "Coming Soon",
  //   mapQ: "Abu+Dhabi+UAE",
  // },
  // {
  //   id: 4,
  //   city: "London",
  //   address: "Coming Soon",
  //   phone: "Coming Soon",
  //   email: "Coming Soon",
  //   mapQ: "London+United+Kingdom",
  // },
];

function PinIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="45" height="45" rx="8" fill="#EEF3FF" />
      <path d="M22.5 10C17.806 10 14 13.806 14 18.5C14 24.75 22.5 35 22.5 35C22.5 35 31 24.75 31 18.5C31 13.806 27.194 10 22.5 10ZM22.5 21.75C20.706 21.75 19.25 20.294 19.25 18.5C19.25 16.706 20.706 15.25 22.5 15.25C24.294 15.25 25.75 16.706 25.75 18.5C25.75 20.294 24.294 21.75 22.5 21.75Z" fill="#275ff9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="45" height="45" rx="8" fill="#EEF3FF" />
      <path d="M16.5 13H20.5L22.5 18L20 19.5C21.071 21.671 23.329 23.929 25.5 25L27 22.5L32 24.5V28.5C32 29.328 31.328 30 30.5 30C20.284 30 12 21.716 12 11.5C12 10.672 12.672 10 13.5 10H17.5L16.5 13Z" fill="#275ff9" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="45" height="45" rx="8" fill="#EEF3FF" />
      <path d="M33 13H13C11.9 13 11 13.9 11 15V31C11 32.1 11.9 33 13 33H33C34.1 33 35 32.1 35 31V15C35 13.9 34.1 13 33 13ZM33 17L23 23L13 17V15L23 21L33 15V17Z" fill="#275ff9" />
    </svg>
  );
}

export default function OurOffice() {
  const [activeId, setActiveId] = useState(1);
  const activeOffice = OFFICES.find((o) => o.id === activeId)!;

  return (
    <section className="bg-white w-full py-16 lg:py-[200px] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          className="font-oswald font-normal text-[#10296e] capitalize mb-10 lg:mb-12"
          style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1 }}
        >
          Our Offices
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Accordion list */}
          <div className="w-full lg:flex-1 flex flex-col gap-5">
            {OFFICES.map((office) => {
              const isActive = office.id === activeId;

              if (isActive) {
                return (
                  <div
                    key={office.id}
                    className="relative rounded-tr-[12px] rounded-br-[12px] border-l-4 border-[#275ff9] overflow-hidden"
                    style={{
                      background: "linear-gradient(to right, #fff 0%, #f5f8ff 100%)",
                      boxShadow: "0px 1.5px 1.5px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="p-8 lg:p-[50px] flex flex-col gap-6">
                      {/* Number + City */}
                      <div className="flex items-center gap-6">
                        <div className="bg-[#275ff9] rounded-full size-[50px] flex items-center justify-center shrink-0">
                          <span className="font-tasa-orbiter font-bold text-white text-[22px] leading-none">
                            {office.id}
                          </span>
                        </div>
                        <span className="font-tasa-orbiter font-semibold text-[#111827] text-[28px] lg:text-[31px] leading-[1.4]">
                          {office.city}
                        </span>
                      </div>

                      {/* Detail rows */}
                      <div className="flex flex-col gap-5">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <PinIcon />
                          <p className="font-tasa-orbiter text-[#4b5563] text-base lg:text-[20px] leading-[1.6]">
                            {office.address}
                          </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                          <PhoneIcon />
                          <p className="font-tasa-orbiter text-[#4b5563] text-base lg:text-[20px]">
                            {office.phone}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                          <EmailIcon />
                          <p className="font-tasa-orbiter text-[#4b5563] text-base lg:text-[20px] break-all">
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={office.id}
                  onClick={() => setActiveId(office.id)}
                  className="w-full text-left bg-white border border-[#f6f6f6] rounded-[12px] p-8 lg:p-10 flex items-center gap-6 cursor-pointer hover:border-[#e0e8ff] transition-colors duration-200"
                >
                  <div className="bg-[#6b7280] rounded-full size-[50px] flex items-center justify-center shrink-0">
                    <span className="font-tasa-orbiter font-bold text-white text-[22px] leading-none">
                      {office.id}
                    </span>
                  </div>
                  <span className="font-tasa-orbiter font-semibold text-[#6b7280] text-[26px] lg:text-[28px] leading-[1.4]">
                    {office.city}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Map */}
          <div className="w-full lg:flex-1 rounded-[38px] overflow-hidden h-[320px] sm:h-[420px] lg:h-[754px] shadow-[inset_0px_3px_6px_0px_rgba(0,0,0,0.05)]">
            <iframe
              key={activeOffice.mapQ}
              src={`https://maps.google.com/maps?q=${activeOffice.mapQ}&output=embed`}
              title={`Map of ${activeOffice.city}`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
