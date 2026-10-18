import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Contact · /contact
 *
 * Rebuilt 18 October 2026 from WIREFRAME — contact.html.
 *
 * The inbox stays an inbox. "No form that disappears, no routing, no
 * queue. Write and I read it." is the differentiator and it costs
 * nothing to keep true — so the address is a mailto and is not being
 * replaced by a form.
 *
 * The three ways in ladder by TIME, not by price — fifteen minutes,
 * ninety minutes, nothing. A reader picks by what they can spare,
 * which is the real objection.
 *
 * Three dead references are gone and verified absent: "Four series,
 * free" (the series are retired), "Join a cohort" and "The Independent
 * Practice" (that course and the cohort model both went with the seat
 * model on /fluency). The roundtable replaces the cohort as the middle
 * rung, which is the right register — convening, not teaching.
 *
 * Also removed: the "everything in one place" block. It pointed at
 * /follow, which is noindex, and duplicated links already in the
 * footer. A contact page should narrow, not fan out.
 *
 * Two of the three ways in route to the CRM rather than a mailto, so
 * they arrive as leads with the right category on them. "Just read"
 * goes straight to Substack — it is the one that must never ask for
 * anything.
 */

export const metadata = pageMeta({
  title: 'One inbox. It reaches me.',
  description:
    'No form that disappears, no routing, no queue. Write and I read it.',
  path: '/contact',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Contact</p>
  <h1>One inbox. <em>It reaches me.</em></h1>
  <p class="lede">No form that disappears, no routing, no queue. Write and I read it.</p>
  <p style="margin:var(--s4) 0 0"><a class="link" style="font-size:clamp(19px,2.4vw,25px);font-family:var(--display);border-bottom-width:2px" href="${MAILTO('Hello')}">contact@omameh.com.au</a></p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Or start smaller</p>
  <h2>Three ways in that are not a sales call.</h2>

  <div class="grid three">
    <div class="card">
      <span class="k">Fifteen minutes</span>
      <h3 style="margin:0;font-size:clamp(19px,2.3vw,23px)">Take the read</h3>
      <p>A scored view of where you sit, with the working shown. Yours whether we speak again or not.</p>
      <a class="link" style="margin-top:auto" data-intuka-demo data-demo-product="Diagnostic" href="${MAILTO('Diagnostic request')}">Ask for the diagnostic &rarr;</a>
    </div>
    <div class="card">
      <span class="k">Ninety minutes</span>
      <h3 style="margin:0;font-size:clamp(19px,2.3vw,23px)">Sit at a table</h3>
      <p>One industry, a dozen people who actually run something, no slides and nothing sold — by anyone, including us.</p>
      <a class="link" style="margin-top:auto" data-intuka-demo data-demo-product="Roundtable" href="${MAILTO('Roundtable interest')}">Register interest &rarr;</a>
    </div>
    <div class="card">
      <span class="k">Nothing yet</span>
      <h3 style="margin:0;font-size:clamp(19px,2.3vw,23px)">Just read</h3>
      <p>The Unlearning. Ungated, and it stays that way.</p>
      <a class="link" style="margin-top:auto" href="https://atlas.omameh.com.au" target="_blank" rel="noopener">atlas.omameh.com.au &rarr;</a>
    </div>
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">If you are here for something specific</p>

  <div class="grid two">
    <div class="card">
      <span class="k">Press, speaking and moderating</span>
      <p>Interviews, briefings, keynotes, panels and roundtables. Portraits and bios are in the media kit.</p>
      <a class="link" style="margin-top:auto" href="/rooms">Rooms &rarr;</a>
    </div>
    <div class="card">
      <span class="k">Partnerships</span>
      <p>Delivery in region, or taking each other&rsquo;s software to market. Same address — tell us which direction and what you are trying to reach.</p>
      <a class="link" style="margin-top:auto" data-intuka-demo data-demo-product="Partnership" href="${MAILTO('Partnership enquiry')}">Start a conversation &rarr;</a>
    </div>
  </div>

  <p class="lede" style="margin-top:var(--s4)">Sydney and Hyderabad. One team, two countries.</p>
</div></section>
`;

export default function ContactPage() {
  return (
    <>
      <RouteShell id="contact" label="Contact" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
