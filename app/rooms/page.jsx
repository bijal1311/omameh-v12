import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Rooms · /rooms — new 18 October 2026, from WIREFRAME — rooms.html.
 * The media kit folds in here as a card, and /media 301s to this page.
 *
 * WHAT IS DELIBERATELY NOT ON THIS PAGE
 *
 * "For Stripe" against the AI & Monetisation roundtable. Stripe
 * sponsored one of the two Ortus roundtables and the wireframe's own
 * note says the placement is a guess, not a verified fact. Putting a
 * sponsor against the wrong room is exactly the error that unravels a
 * credentials page, so the attribution waits for Bijal to confirm
 * which. The room itself is listed; only the sponsor line is held.
 *
 * The Bupa UK interview. Found but never read — it is either a real
 * press credential or a two-line mention, and nobody has opened it.
 *
 * "Driven by Data". She was never on it; it reached the sheet through
 * a reshare. Do not restore it under any circumstances.
 *
 * Dr Tom Gao's title. The host's slide and the host's LinkedIn post
 * disagree, so "Dr Tom Gao — City of Sydney" is the only safe form.
 *
 * Tech Council of Australia. Not a member; membership is under
 * discussion. It goes up the day it is signed.
 *
 * The Connect & Cheers photographs. They are of other people at a
 * private diplomacy event and "attached for you to enjoy" is not
 * permission to publish. Attending is also not a room she was trusted
 * with — this page's power is its verbs.
 *
 * LOGOS: none yet. §5a splits hosts (who published her themselves)
 * from sponsors (who funded a room). Sponsors are set in type, never
 * as marks — Stripe and SAP both restrict third-party use, and on a
 * typographic page the set names look better anyway.
 *
 * THE PHOTOGRAPH, placed 18 October, full width and uncropped. It is
 * exactly 3:2 (1800 x 1200, re-encoded from a 2048 x 1365 original) so
 * it needs no crop — and must never get one. The event screen is the
 * top third and it carries the whole credential: the panel title, the
 * date, the venue, and Lee Hickin and Dr Tom Gao named. A square crop
 * destroys it. Caption below, never over, because two corners already
 * carry burned-in branding. The alt text carries the facts, because
 * the evidence here is visual and a screen reader gets none of it.
 *
 * No host logo beside this item — the event branding is already inside
 * the photograph, and the mark twice is the mark twice.
 *
 * The two ALT-not-for-page-* frames are not used: in one she is turned
 * away with nothing identifying the panel, and the other is a good
 * photograph of a panellist that barely has her in it.
 *
 * "For Stripe" is now ON the monetisation roundtable — confirmed by
 * Bijal on 18 October. It was held back while it was a guess.
 */

export const metadata = pageMeta({
  title: 'Rooms I have been trusted to run.',
  description:
    'Moderating, panels, webinars and podcasts — for the organisations whose rooms they were. Speaking, moderating and media.',
  path: '/rooms',
});

const UPCOMING = [
  ['27 October', 'Moderator', "The IT & AI Infrastructure Leaders' Luncheon", 'Sydney. Infrastructure for distributed AI across Asia-Pacific. Co-hosted by AT&amp;T and Digital Realty, convened by The Ortus Club.'],
  ['12 November', 'Moderator', 'Smarter Channels, Stronger Commercial Growth', 'Virtual masterclass, 4:00pm AEDT. 15–25 leaders across Asia-Pacific. Sponsored by SAP, convened by The Ortus Club.'],
];

const PANEL_17_SEP = [
  'Lee Hickin — Executive Director, National AI Centre',
  'Dr Tom Gao — City of Sydney',
  'Kate Carruthers — AGSM, UNSW Business School',
  'Cale Maxwell — CEO, Credara Oceania',
];

const SIX_D = [
  'Lee Hickin — Executive Director, Australian National AI Centre',
  'David Walker — Group CTO, Westpac',
  'Tim Hogarth — CTO, ANZ',
  'Brendan Hopper — CIO Technology, Commonwealth Bank',
  'Joanna Gurry — Executive Data Platforms, NAB',
  'Christina Igasto — Chief Digital Officer, Service NSW',
  'Nirvana Luckraj — Chief Medical Officer, Healthdirect Australia',
  'Chelsea Gordon — Legal Lead, AI Advisory, MinterEllison',
];

const POST = (slug) => `https://www.linkedin.com/posts/${slug}`;

/**
 * One item. The text, the attribution and the outbound link are ALWAYS
 * rendered — that is the link card, and it is what a reader sees if
 * linkedin.com is blocked, which some corporate networks do. The iframe
 * is only ever an enhancement: lazy, and with no border, so a blocked
 * one is whitespace rather than an empty frame.
 *
 * Only four of the six posts embed. Tested signed out on 18 October,
 * which is the only test that counts — an embed that renders for Bijal
 * and not for a visitor fails invisibly:
 *
 *   activity:7303005232110739456  TechWomen IBM         200, renders
 *   ugcPost:7483382872242872321   Ortus · SaaS          200, renders
 *   ugcPost:7473220419118845953   Ortus · Monetisation  200, renders
 *   share:7178639395707658240     MercerMarsh           200, renders
 *   activity:7198925334858121216  Morgan McKinley       404
 *   share:7495331001980682240     W.Media               404
 *
 * The URN type does not predict it: an activity 404s and both ugcPosts
 * work. It is per post, and only testing tells you. Re-test before
 * adding one — LinkedIn can withdraw an embed at any time.
 */
const room = ({ meta, role, title, body, people, link, linkLabel, embed }) => String.raw`
    <div style="padding:clamp(26px,3.2vw,38px) 0;border-top:1px solid var(--rule);display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:baseline;justify-content:space-between">
        <span style="font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft)">${meta}</span>
        <span class="chip live">${role}</span>
      </div>
      <h3 style="margin:0;font-size:clamp(20px,2.5vw,26px)">${title}</h3>
      ${body ? `<p style="margin:0;font-size:15.5px;line-height:1.6;color:var(--ink-soft)">${body}</p>` : ''}
      ${people ? `<ul style="margin:6px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:7px">${people.map((p) => `<li style="font-size:14.5px;line-height:1.5;color:var(--ink-soft)">${p}</li>`).join('')}</ul>` : ''}
      ${link ? `<a class="link" href="${link}" target="_blank" rel="noopener">${linkLabel} &rarr;</a>` : ''}
      ${embed ? `<iframe src="https://www.linkedin.com/embed/feed/update/${embed}" title="${linkLabel}" loading="lazy" frameborder="0" scrolling="no" style="width:100%;max-width:560px;height:420px;border:0;display:block;margin-top:4px"></iframe>` : ''}
    </div>`;

const __MARKUP = String.raw`
<section class="hero"><div class="w">
  <p class="eyebrow">Rooms · Speaking, moderating and media</p>
  <h1>Rooms I have been <em>trusted to run.</em></h1>
  <p class="lede">Moderating, panels, webinars and podcasts — for the organisations whose rooms they were. Chatham House holds. What gets published is what the host publishes.</p>
</div></section>

<section><div class="w">
  <p class="eyebrow">Upcoming</p>
  <h2>Next.</h2>
  <div style="border-bottom:1px solid var(--rule)">
${UPCOMING.map(([meta, role, title, body]) => room({ meta, role, title, body })).join('')}
  </div>
</div></section>

<section><div class="w">
  <figure style="margin:0">
    <img src="/rooms/cloud-datacenter-convention-17sep2026.jpg" alt="Bijal Sejpal moderating the Industry Deep-Dive Panel, AI &amp; Cloud Transformation Across Industries, at the Cloud and Datacenter Convention, ICC Sydney, 17 September 2026." width="1800" height="1200" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:3px">
    <figcaption style="margin-top:14px;font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft)">Cloud &amp; Datacenter Convention · ICC Sydney · 17 September 2026</figcaption>
  </figure>
</div></section>

<section><div class="w">
  <p class="eyebrow">Moderating</p>
  <h2>Executive roundtables and panels.</h2>
  <p class="lede">Senior rooms, no slides, and a conversation that has to go somewhere by the time the plates are cleared.</p>

  <div style="margin-top:var(--s4);border-bottom:1px solid var(--rule)">
${room({
  meta: 'Cloud &amp; Datacenter Convention · 17 September 2026 · ICC Sydney · W.Media',
  role: 'Moderator',
  title: 'AI &amp; Cloud Transformation Across Industries: Lessons from Pilots to Enterprise Rollouts',
  body: 'The hardest part of enterprise AI is not the pilot. It is everything that has to change after the pilot works.',
  people: PANEL_17_SEP,
  link: POST('simonfletcher1_cloud-ai-transformation-share-7495331001980682240-y90L/'),
  linkLabel: 'W.Media&rsquo;s own panel announcement',
})}
${room({
  meta: 'The Ortus Club · 2026 · Cafe Sydney',
  role: 'Moderator',
  title: 'The Intelligence Era: AI in SaaS Evolution',
  body: 'Token-based pricing, and why speed of experimentation has become the real competitive advantage.',
  link: POST('theortusclub-knowledgesharing-saasevolution-ugcPost-7483382872242872321-3gL0/'),
  linkLabel: 'The Ortus Club&rsquo;s write-up',
  embed: 'urn:li:ugcPost:7483382872242872321',
})}
${room({
  meta: 'The Ortus Club · 2026 · The Meat &amp; Wine Co, Sydney',
  role: 'Moderator',
  title: 'AI &amp; Monetisation: Pricing, Billing and Growth',
  body: 'The agentic paradigm is already here, and most revenue infrastructure was not built for it. For Stripe.',
  link: POST('theortusclub-knowledgesharing-aimonetisation-ugcPost-7473220419118845953-WPZg/'),
  linkLabel: 'The Ortus Club&rsquo;s write-up',
  embed: 'urn:li:ugcPost:7473220419118845953',
})}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Speaking and panels</p>
  <h2>6DAI Sydney.</h2>
  <p class="lede">6 Degrees Media · 6 November 2025</p>
  <ul style="margin:var(--s3) 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:9px">
${SIX_D.map((p) => String.raw`    <li style="font-size:14.5px;line-height:1.5;color:var(--ink-soft)">${p}</li>`).join('\n')}
  </ul>
  <p class="lede" style="margin-top:var(--s3)">Plus Domain, Rest, EBOS, ACCC, Airtasker, Reece, Google Cloud, Dell, UiPath, Elastic and Avanade.</p>

  <div style="margin-top:var(--s5);border-bottom:1px solid var(--rule)">
${room({
  meta: 'TechWomen Events by IBM A/NZ · March 2025 · Sydney',
  role: 'Panellist',
  title: 'Women leading in AI and quantum computing',
  body: 'International Women&rsquo;s Day week. Sydney, then Melbourne the following day at capacity.',
  link: POST('ibm_techwomen-activity-7303005232110739456-0000/'),
  linkLabel: 'The host&rsquo;s own post',
  embed: 'urn:li:activity:7303005232110739456',
})}
${room({
  meta: 'MercerMarsh Benefits · early 2024 · Workers Compensation Colleague Conference',
  role: 'Presented',
  title: 'Trends and advancements in AI and generative AI',
  body: 'With colleagues from QBE, to a room of brokers and clients — in early 2024.',
  embed: 'urn:li:share:7178639395707658240',
  linkLabel: 'The post',
})}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Podcasts and press</p>
  <h2>On the record.</h2>

  <div style="margin-top:var(--s4);padding-top:clamp(26px,3.2vw,38px);border-top:1px solid var(--rule);display:flex;flex-direction:column;gap:14px">
    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:baseline;justify-content:space-between">
      <span style="font-family:var(--mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft)">A Human Element · July 2026 · The Transformation Group · host Adam Higgins</span>
      <span class="chip live">Guest</span>
    </div>
    <h3 style="margin:0;font-size:clamp(20px,2.5vw,26px)">Looking in the Leadership Mirror: Leading in the Age of AI</h3>
    <p style="margin:0;font-size:15.5px;line-height:1.6;color:var(--ink-soft)">Curiosity as a load-bearing capability, and the conviction underneath it. 51 minutes.</p>
    <blockquote style="margin:6px 0 0;padding-left:18px;border-left:2px solid var(--gold);font-family:var(--display);font-size:clamp(19px,2.4vw,25px);line-height:1.4;color:var(--navy)">The next decade will not reward the fastest mover. It will reward the most structurally ready.</blockquote>
    <div style="margin-top:6px;max-width:680px;aspect-ratio:16/9">
      <iframe src="https://www.youtube-nocookie.com/embed/7IuI5hbk5OY" title="Looking in the Leadership Mirror: Leading in the Age of AI" loading="lazy" allowfullscreen style="width:100%;height:100%;border:1px solid var(--rule);border-radius:3px;display:block"></iframe>
    </div>
    <a class="link" href="https://open.spotify.com/episode/5vF7MSo3K4eYlAZ3JNcQmr" target="_blank" rel="noopener">Listen on Spotify &rarr;</a>
  </div>

  <div style="border-bottom:1px solid var(--rule)">
${room({
  meta: 'Morgan McKinley · 21 May 2024',
  role: 'Interview',
  title: 'Stand Up and Succeed: Leadership Tips for Technology',
  body: 'On assuming positive intent, and learning to say no.',
  link: 'https://www.morganmckinley.com/au/article/stand-and-succeed-leadership-tips-technology-bijal-sejpal',
  linkLabel: 'Read the interview',
})}
  </div>
</div></section>

<section><div class="w">
  <p class="eyebrow">Memberships</p>
  <div class="grid two">
    <div class="card"><span class="k">Australian Institute of Company Directors</span><p>Member</p></div>
    <div class="card"><span class="k">Australian Business Summit Council Inc</span><p>Member</p></div>
  </div>
</div></section>

<section><div class="w">
  <div class="grid two">
    <div class="card">
      <span class="k">Book a room</span>
      <p>Keynotes, panels, moderation, webinars and private roundtables. Sydney, Asia-Pacific and remote.</p>
      <a class="link" style="margin-top:auto" data-intuka-demo data-demo-product="Speaking" href="mailto:contact@omameh.com.au?subject=Speaking%20enquiry">contact@omameh.com.au &rarr;</a>
    </div>
    <div class="card">
      <span class="k">Media kit</span>
      <p>Approved portraits, four bio lengths written to be lifted verbatim, and QR codes.</p>
      <a class="link" style="margin-top:auto" data-intuka-demo data-demo-product="Media kit" href="mailto:contact@omameh.com.au?subject=Media%20kit">Open the kit &rarr;</a>
    </div>
  </div>
</div></section>
`;

export default function RoomsPage() {
  return (
    <>
      <RouteShell id="rooms" label="Rooms" markup={__MARKUP} />
      <IntukaDemo />
    </>
  );
}
