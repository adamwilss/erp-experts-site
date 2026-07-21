import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ERP Experts collects, uses and protects your personal data.",
  alternates: { canonical: "https://www.erpexperts.co.uk/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 2026">
      <p>
        This privacy policy explains how {`ERP Experts Ltd`} ("we", "us",
        "our") collects, uses and protects your personal data when you
        visit our website or get in touch with us. We are committed to
        protecting your privacy and complying with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act
        2018.
      </p>

      <h2>What we collect</h2>
      <p>We may collect the following personal data:</p>
      <ul>
        <li>Your name, company, email address and phone number when you submit our contact form or email us.</li>
        <li>Anonymous analytics data about how you use our website, such as pages visited and referring URLs.</li>
        <li>Technical data such as your IP address and browser type, collected in server logs for security and abuse prevention.</li>
      </ul>

      <h2>Why we collect it</h2>
      <p>We use your personal data for the following purposes:</p>
      <ul>
        <li>To respond to your enquiries and provide information about our services.</li>
        <li>To deliver and improve our services to clients.</li>
        <li>To understand how visitors use our website so we can improve it.</li>
        <li>To comply with our legal and regulatory obligations.</li>
      </ul>

      <h2>Legal basis</h2>
      <p>
        We process your personal data on the following legal bases under
        the UK GDPR:
      </p>
      <ul>
        <li><strong>Consent</strong>, where you have provided your details through our contact form or by emailing us.</li>
        <li><strong>Legitimate interests</strong>, where we process data to run our business, respond to enquiries or improve our website.</li>
        <li><strong>Legal obligation</strong>, where we are required to retain data for accounting or regulatory purposes.</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        We retain personal data only for as long as is necessary for the
        purposes for which it was collected. Enquiry data is typically
        retained for up to 24 months after our last interaction, unless
        you become a client, in which case your data is retained for the
        duration of our relationship and for the period required by
        accounting and tax law afterwards.
      </p>

      <h2>Your rights</h2>
      <p>Under the UK GDPR, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate personal data.</li>
        <li>Request deletion of your personal data in certain circumstances.</li>
        <li>Object to or restrict the processing of your data.</li>
        <li>Withdraw consent at any time, where processing is based on consent.</li>
        <li>Request a copy of your data in a portable format.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{" "}
        <a href="mailto:hello@erpexperts.co.uk">hello@erpexperts.co.uk</a>.
      </p>

      <h2>Sharing your data</h2>
      <p>
        We do not sell your personal data. We may share it with trusted
        third-party service providers who help us run our business (for
        example, our website hosting provider or email platform), but
        only where they have agreed to process it on our behalf and in
        line with this policy. We may also disclose data where required
        to do so by law.
      </p>

      <h2>Cookies</h2>
      <p>
        Our use of cookies is described in our{" "}
        <a href="/cookies">Cookie Policy</a>. You can control cookies
        through your browser settings.
      </p>

      <h2>Data security</h2>
      <p>
        We take appropriate technical and organisational measures to
        protect your personal data against unauthorised access, loss,
        destruction or disclosure. No method of transmission or storage
        is completely secure, but we work to protect your data using
        industry-standard safeguards.
      </p>

      <h2>Your right to complain</h2>
      <p>
        If you have a concern about how we handle your personal data,
        you have the right to complain to the Information
        Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk">ico.org.uk</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date of the
        last update is shown at the top of this page. We encourage you
        to review it periodically.
      </p>
    </LegalLayout>
  );
}
