import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about NetSuite, implementation, support and working with ERP Experts.",
  alternates: { canonical: "https://www.erpexperts.co.uk/faq" },
  openGraph: {
    title: "FAQ | ERP Experts",
    description:
      "Answers to the most common questions about NetSuite, implementation, support and working with ERP Experts.",
  },
};

const faqs = [
  {
    q: "What does ERP Experts actually do?",
    a: "We implement, support and rescue NetSuite for mid-market businesses. That means we help you go live on NetSuite from scratch, we support your existing NetSuite instance, and we run fixed-scope rescue projects for implementations that have gone sideways. We are a UK Oracle NetSuite Certified Partner.",
  },
  {
    q: "How long does a NetSuite implementation take?",
    a: "A typical implementation runs 10 to 16 weeks from kickoff to go-live, depending on complexity. Our manufacturing case study went from kickoff to go-live in 12 weeks. We give you a clear timeline as part of the scoping phase, and we stick to it because our pricing is fixed.",
  },
  {
    q: "How much does NetSuite cost?",
    a: "NetSuite is a subscription product, priced per user per month, plus a one-off implementation fee. The implementation cost depends on the scope of your project. We work on fixed-price implementation, which means you know the cost before we start. Book a conversation and we will give you an honest indication based on your requirements.",
  },
  {
    q: "Why should we choose ERP Experts over a bigger partner?",
    a: "Because the consultant who scopes your project is the one who builds it. Bigger partners often bait and switch to a junior team after the contract is signed. We do not. You get senior consultants throughout, fixed pricing so there are no surprises, and a commitment to making your team independent rather than dependent on us.",
  },
  {
    q: "Do you work with businesses already live on NetSuite?",
    a: "Yes. A large part of our work is supporting, optimising and rescuing existing NetSuite instances. If your implementation has drifted, your team has lost faith in the system, or you just want to get more out of what you have, we can help. Start with a health audit.",
  },
  {
    q: "What is a NetSuite Certainty Project?",
    a: "A Certainty Project is a fixed-scope, fixed-price rescue engagement for NetSuite implementations that have stalled, drifted or broken. We diagnose what is wrong, fix it and hand back a system you can trust. The certainty is in the name: you get a fixed scope and price before any remediation starts.",
  },
  {
    q: "What industries do you work in?",
    a: "We work across manufacturing, distribution, retail, professional services, technology and more. NetSuite is a general-purpose ERP, and our consultants have delivered it across a wide range of sectors. The principles of a good implementation do not change much between industries; the configuration does.",
  },
  {
    q: "Where are you based?",
    a: "We have three offices: Stafford (our headquarters), Manchester (our northern office) and Dubai (our Middle East office). We work with clients across the UK and internationally.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "Yes. We offer three support relationships, from Essentials (a safety net for stable systems) through to Embedded (a dedicated consultant on your team). Every support relationship is tailored to your system and your team. The common thread is that the team supporting you knows your configuration.",
  },
  {
    q: "How do we get started?",
    a: "The first step is a conversation. Book a call or send us an email and we will arrange a no-obligation chat with a senior consultant. We will listen to what you are trying to achieve, tell you honestly whether we can help, and if we can, propose a fixed-scope next step. No hard sell, no scripts.",
  },
];

export default function FAQPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, answered.</>}
        subtitle="The most common questions we get about NetSuite, implementation, support and working with us. If yours is not here, just ask."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="section bg-paper">
        <div className="container-site max-w-3xl">
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        subtitle="If your question is not answered here, we would rather you ask than guess. Get in touch and a senior consultant will get back to you."
      />
    </SiteShell>
  );
}
