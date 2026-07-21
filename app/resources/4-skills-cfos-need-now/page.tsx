import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "4 Skills CFOs Need Now",
  description:
    "The finance leadership playbook for an era of automation, real-time data and AI-assisted decision making.",
  alternates: {
    canonical: "https://www.erpexperts.co.uk/resources/4-skills-cfos-need-now",
  },
  openGraph: {
    title: "4 Skills CFOs Need Now | ERP Experts",
    description:
      "The finance leadership playbook for an era of automation, real-time data and AI-assisted decision making.",
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      eyebrow="Leadership"
      title="4 skills CFOs need now"
      excerpt="The finance leadership playbook for an era of automation, real-time data and AI-assisted decision making."
      readTime="7 min read"
    >
      <p>
        The CFO role has changed more in the last five years than in
        the previous twenty. Real-time data, automation and AI have
        shifted the job from reporting on what happened to shaping
        what happens next. The CFOs who thrive are the ones building
        the skills that matter now, not the ones that mattered then.
      </p>
      <p>
        Here are the four we see separating the best from the rest.
      </p>

      <h2>1. Systems thinking</h2>
      <p>
        The modern finance function runs on systems. Your ERP, your
        reporting tools, your data warehouse, your budgeting platform.
        The CFOs who succeed are the ones who understand how those
        systems fit together, where the data comes from and where it
        breaks.
      </p>
      <p>
        You do not need to be technical. But you do need to be able to
        ask the right questions: where does this number come from, how
        fresh is it, what would break if we changed the process
        upstream. CFOs who cannot ask those questions are at the mercy
        of whoever can.
      </p>
      <p>
        In practice, this means getting close to your NetSuite
        configuration, not delegating it entirely to IT. The system is
        the operating model. If you do not understand it, you do not
        fully understand your own business.
      </p>

      <h2>2. Data literacy</h2>
      <p>
        Real-time data is only useful if you can read it. The best
        CFOs can look at a dashboard and tell you not just what the
        number is, but whether it is trustworthy, what would move it,
        and what it does not tell you.
      </p>
      <p>
        This is harder than it sounds. Most finance teams have spent
        years working with month-end reports that were static,
        reconciled and definitive. Real-time data is messier. It
        changes. It has gaps. Learning to make decisions from
        imperfect, real-time data, rather than waiting for the perfect
        monthly number, is a genuine skill shift.
      </p>
      <p>
        The CFOs who get this right invest in their team&apos;s data
        literacy as much as their own. They make dashboards the
        default, not a nice-to-have. They teach their teams to
        interrogate numbers, not just report them.
      </p>

      <h2>3. Commercial storytelling</h2>
      <p>
        Numbers on their own do not change anything. The CFOs who
        drive decisions are the ones who can turn a set of numbers
        into a story the rest of the leadership team can act on.
      </p>
      <p>
        That means being clear about what the numbers mean, what they
        do not mean, what you would do about them and what the risk of
        inaction is. It means resisting the temptation to bury the
        insight under the data. And it means being able to hold an
        executive room&apos;s attention for long enough to land the
        point.
      </p>
      <p>
        This is not a soft skill. It is the skill that turns a finance
        team from a reporting function into a decision-making one.
      </p>

      <h2>4. Change leadership</h2>
      <p>
        Every meaningful finance transformation is, at its heart, a
        change project. New system, new process, new ways of working.
        The technology is the easy bit. The people are the hard bit.
      </p>
      <p>
        The CFOs who succeed are the ones who own the change, not the
        ones who delegate it to a project manager. They communicate
        the why, not just the what. They bring the business with them
        rather than imposing change from the top. And they stay close
        enough to the work to know when it is going sideways.
      </p>
      <p>
        If your team has lost faith in the system they run on, no
        amount of process redesign will fix it until you fix the
        trust. That is leadership work, not IT work.
      </p>

      <h2>Putting it together</h2>
      <p>
        None of these skills exist in isolation. Systems thinking
        without data literacy is just curiosity. Data literacy without
        commercial storytelling is just analysis. Storytelling without
        change leadership is just persuasion. The CFOs who are
        genuinely shaping their businesses are the ones building all
        four at once.
      </p>
      <blockquote>
        The role of finance is no longer to report what happened. It is
        to shape what happens next.
      </blockquote>
      <p>
        If you are a CFO working through this shift, your ERP is the
        foundation. If it is not giving you clean, real-time data you
        can trust, that is the place to start. Everything else builds on
        it.
      </p>
    </GuideLayout>
  );
}
