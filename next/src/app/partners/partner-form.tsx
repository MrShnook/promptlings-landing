"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    contactEmail: "",
    role: "",
    orgType: "",
    gradeLevels: "",
    studentCount: "",
    programType: "",
    timeline: "",
    referralSource: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Partner intake form:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-mint/10 border border-mint/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3
          className="text-mint font-bold text-xl mb-2"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          Application Received!
        </h3>
        <p className="text-white-dim">
          We&apos;ll review your information and reach out within 48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-navy-deep/60 border border-violet/30 rounded-xl text-cosmic-white placeholder:text-white-dim/50 focus:border-violet-glow focus:outline-none focus:ring-2 focus:ring-violet-glow/20 text-sm";
  const selectClass =
    "w-full px-4 py-3 bg-navy-deep/60 border border-violet/30 rounded-xl text-cosmic-white text-sm cursor-pointer focus:border-violet-glow focus:outline-none focus:ring-2 focus:ring-violet-glow/20";
  const labelClass = "block text-white-dim text-sm font-medium mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>School / Organization Name *</label>
          <Input
            name="schoolName"
            required
            value={formData.schoolName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Lincoln Elementary"
          />
        </div>
        <div>
          <label className={labelClass}>Contact Name *</label>
          <Input
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Contact Email *</label>
          <Input
            name="contactEmail"
            type="email"
            required
            value={formData.contactEmail}
            onChange={handleChange}
            className={inputClass}
            placeholder="jane@school.edu"
          />
        </div>
        <div>
          <label className={labelClass}>Your Role *</label>
          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" className="bg-navy-deep">
              Select role...
            </option>
            <option value="principal" className="bg-navy-deep">
              Principal
            </option>
            <option value="teacher" className="bg-navy-deep">
              Teacher
            </option>
            <option value="curriculum-director" className="bg-navy-deep">
              Curriculum Director
            </option>
            <option value="pta" className="bg-navy-deep">
              PTA/PTO Leader
            </option>
            <option value="afterschool-director" className="bg-navy-deep">
              After-School Director
            </option>
            <option value="other" className="bg-navy-deep">
              Other
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Organization Type *</label>
          <select
            name="orgType"
            required
            value={formData.orgType}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" className="bg-navy-deep">
              Select type...
            </option>
            <option value="public-school" className="bg-navy-deep">
              Public School
            </option>
            <option value="private-school" className="bg-navy-deep">
              Private School
            </option>
            <option value="charter" className="bg-navy-deep">
              Charter School
            </option>
            <option value="afterschool" className="bg-navy-deep">
              After-School Program
            </option>
            <option value="nonprofit" className="bg-navy-deep">
              Nonprofit
            </option>
            <option value="other" className="bg-navy-deep">
              Other
            </option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Grade Levels</label>
          <Input
            name="gradeLevels"
            value={formData.gradeLevels}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., 3rd-8th"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Estimated Student Count</label>
          <Input
            name="studentCount"
            value={formData.studentCount}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., 20-40"
          />
        </div>
        <div>
          <label className={labelClass}>Program Type Interest</label>
          <select
            name="programType"
            value={formData.programType}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" className="bg-navy-deep">
              Select program...
            </option>
            <option value="after-school" className="bg-navy-deep">
              After-School
            </option>
            <option value="summer-camp" className="bg-navy-deep">
              Summer Camp
            </option>
            <option value="in-school" className="bg-navy-deep">
              In-School Integration
            </option>
            <option value="teacher-pd" className="bg-navy-deep">
              Teacher PD
            </option>
            <option value="multiple" className="bg-navy-deep">
              Multiple / Not Sure
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Desired Timeline</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" className="bg-navy-deep">
              Select timeline...
            </option>
            <option value="spring-2026" className="bg-navy-deep">
              Spring 2026
            </option>
            <option value="summer-2026" className="bg-navy-deep">
              Summer 2026
            </option>
            <option value="fall-2026" className="bg-navy-deep">
              Fall 2026
            </option>
            <option value="exploring" className="bg-navy-deep">
              Just Exploring
            </option>
          </select>
        </div>
        <div>
          <label className={labelClass}>How Did You Hear About Us?</label>
          <Input
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className={inputClass}
            placeholder="Google, referral, conference..."
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="Tell us about your goals, questions, or special requirements..."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-br from-violet to-[#5B21B6] text-white border border-violet-glow/40 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all px-8 py-4 tracking-widest uppercase text-sm font-bold"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        Submit Partnership Inquiry
      </Button>
    </form>
  );
}
