import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';
import ContactForm from '../_components/ContactForm';

/**
 * Contact · /contact
 *
 * Rebuilt 18 October 2026 from WIREFRAME — contact.html.
 * Reworked 19 October on Bijal's instruction.
 *
 * ── WHAT CHANGED ON 19 OCTOBER ─────────────────────────────────────
 * "We probably just put the same form which we have built everywhere
 * to go straight to the Intuka CRM... we keep press and partnerships
 * at the bottom and then we just put that form over here and remove
 * the three ways."
 *
 * So: the CRM form is now ON the page rather than behind a modal, the
 * "Or start smaller / three ways in" section is gone, and Press and
 * Partnerships stays at the bottom where it was.
 *
 * THE INBOX LINE SURVIVES, and deliberately. "No form that disappears,
 * no routing, no queue. Write and I read it." was the differentiator
 * and putting a form on the page appears to contradict it — so the
 * copy now says both things honestly: the form routes into the CRM so
 * nothing is lost, and the address is still there, still direct, for
 * anyone who would rather just write. A visitor who distrusts forms
 * loses nothing. Deleting the address to make room for a form would
 * have been the version that breaks the promise.
 *
 * THE FORM IS THE SAME COMPONENT, not a copy. ContactForm and the
 * IntukaDemo modal both post to the one Intuka WebForm endpoint with
 * the same field names and the same `product` category, so an enquiry
 * from this page is indistinguishable from one raised by the modal
 * anywhere else on the site. One form in the CRM, one place to change
 * the endpoint. Building a second form would have been how the two
 * silently drift apart.
 *
 * THE DIAGNOSTIC AND ROUNDTABLE DID NOT DIE WITH THE THREE CARDS. They
 * are options in the form's category list, so the two routes Bijal
 * cared about still arrive tagged — they are now a choice inside one
 * ask rather than three competing calls to action.
 *
 * Three dead references remain gone and verified absent: "Four series,
 * free", "Join a cohort" and "The Independent Practice".
 *
 * BAND RHYTHM · hero(plain) · warm(the form) · dark(press and
 * partnerships). Matches the pre-rebuild page, which ran
 * hero · warm · dark and is the shape this page had when it worked.
 */

export const metadata = pageMeta({
  title: 'One inbox. It reaches me.',
  description:
    'Tell me what you are trying to move. No routing, no queue — it reaches me.',
  path: '/contact',
});

const MAILTO = (subject) =>
  `mailto:contact@omameh.com.au?subject=${encodeURIComponent(subject)}`;

const __MARKUP = String.raw`
<section class="hero">
  <span class="arc top" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">Contact</p>
    <h1>One inbox. <em>It reaches me.</em></h1>
    <p class="lede">Tell me what you are trying to move and I will tell you whether we are the right people for it. No routing, no queue, and no junior calling you back.</p>
    <p class="mailline"><a class="link maillink" href="${MAILTO('Hello')}">contact@omameh.com.au</a></p>
    <p class="mailnote">Or write directly, if you would rather not use a form. It reaches the same place.</p>
  </div>
</section>

<section class="warm" id="enquire">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
    <div class="w-narrow" data-reveal>
      <p class="eyebrow">Start here</p>
      <h2>What are you trying to move?</h2>
      <p class="lede formlede">A few lines is enough. Tell me which of these it is and roughly what you are dealing with, and I will come back to you myself.</p>
      <div data-contact-form>
        <!-- With JavaScript off this slot is empty, so the section would
             render a heading and a lede over nothing. <noscript> is the
             one thing that shows only in that case, and createPortal
             appends rather than replaces, so this cannot double up when
             the form does mount. -->
        <noscript>
          <p class="lede nojs-note">This form needs JavaScript. It is not working for you right now, so write to <a class="link" href="${MAILTO('Hello')}">contact@omameh.com.au</a> instead &mdash; it reaches exactly the same place, and I read it myself.</p>
        </noscript>
      </div>
    </div>
  </div>
</section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">If you are here for something specific</p>
      <h2>Press and partnerships.</h2>
    </div>

    <div class="grid two" data-reveal-group>
      <div class="card">
        <span class="k">Press, speaking and moderating</span>
        <p>Interviews, briefings, keynotes, panels and roundtables. Portraits and bios are in the media kit.</p>
        <a class="link cardlink" href="/rooms">Rooms &rarr;</a>
      </div>
      <div class="card">
        <span class="k">Partnerships</span>
        <p>Delivery in region, or taking each other&rsquo;s software to market. Tell us which direction and what you are trying to reach.</p>
        <a class="link cardlink" data-intuka-demo data-demo-product="Partnership" href="${MAILTO('Partnership enquiry')}">Start a conversation &rarr;</a>
      </div>
    </div>

    <p class="lede aftergrid">Sydney and Hyderabad. One team, two countries.</p>
  </div>
</section>
`;

export default function ContactPage() {
  return (
    <>
      <RouteShell id="contact" label="Contact" markup={__MARKUP} />
      {/* Mounts into [data-contact-form] inside the markup above — the
          page is dangerouslySetInnerHTML, so a React child cannot be
          nested into it directly and is portalled in instead. */}
      <ContactForm mountSelector="[data-contact-form]" />
      <IntukaDemo />
    </>
  );
}
