import React from "react";
import { SectionHeading } from "./AboutSection";

const ContactSection = ({ contact, codingProfiles }) => (
  <section id="contact" className="fade-in py-24 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeading>Contact</SectionHeading>
      <div className="grid md:grid-cols-2 gap-6">

        {/* Info card */}
        <article className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 space-y-5">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">Get In Touch</h4>
          <div className="space-y-3">
            {[
              { icon: "✉️", label: "Email", value: contact.email },
              { icon: "📞", label: "Phone", value: contact.phone },
              { icon: "💼", label: "LinkedIn", value: contact.linkedin },
              { icon: "🐙", label: "GitHub", value: contact.github },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <span className="text-base">{icon}</span>
                <span className="font-medium text-slate-700 dark:text-slate-300 w-16">{label}</span>
                <span className="text-slate-600 dark:text-slate-400">{value}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Coding Profiles</h4>
            <ul className="space-y-2">
              {codingProfiles.map((profile) => (
                <li key={profile} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  {profile}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Contact form */}
        <form
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h4>
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map(({ id, label, type }) => (
            <div key={id} className="flex flex-col gap-1.5">
              <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
              <input
                id={id}
                type={type}
                name={id}
                required
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition"
              />
            </div>
          ))}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-auto px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
