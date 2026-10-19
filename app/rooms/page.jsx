import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';
import IntukaDemo from '../_components/IntukaDemo';

/**
 * Rooms · /rooms — new 18 October 2026, from WIREFRAME — rooms.html.
 * Rebuilt as a gallery 19 October 2026.
 *
 * ── WHY IT WAS REBUILT ─────────────────────────────────────────────
 * Bijal, 19 October: "I don't really like the room page design at all.
 * The pictures are too big and it's not really done it properly. And
 * even where you put the embedded links of LinkedIn, I actually prefer
 * pictures. I don't really prefer the writing."
 *
 * Both faults were real and both were mine.
 *
 * THE PICTURE WAS TOO BIG. The 17 September photograph ran full
 * container width — 1140px of a 1800px file — as its own section. On a
 * credentials page that makes one room shout over nine others.
 * It is now a gallery item at the same size as every other room, which
 * is also the only honest presentation: it is one of them.
 *
 * THE LINKEDIN EMBEDS ARE GONE. Four iframes rendered LinkedIn's own
 * typography, avatars and chrome inside the page, which is exactly why
 * they read as foreign — they are someone else's design system sitting
 * in the middle of this one, and they cannot be restyled because they
 * are cross-origin. Replaced by image cards.
 *
 * ── WHERE THE IMAGES COME FROM ─────────────────────────────────────
 * They have to be supplied as files. LinkedIn's embed is a cross-origin
 * iframe: its images cannot be read out of it, and scraping the post
 * page breaks the first time LinkedIn changes its markup — which is a
 * credentials page quietly going blank. So every room has an optional
 * `img`, and the page is built to be correct either way:
 *
 *   · with a file   -> the photograph, in a 3:2 frame
 *   · without one   -> a brand-native ground built from the open-ring
 *                      motif, with the host set in type
 *
 * The fallback is a designed state, not a placeholder, so the page is
 * finished right now and improves as files arrive. To add one, drop a
 * 1200x800 JPEG (exactly 3:2) into /public/rooms/ and set `img`.
 * Nothing else changes. See PENDING — who has to do what.md.
 *
 * ── WHAT IS DELIBERATELY NOT ON THIS PAGE ──────────────────────────
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
 * THE PHOTOGRAPH IS STILL NEVER CROPPED TO SQUARE. It is exactly 3:2
 * (1800 x 1200, re-encoded from a 2048 x 1365 original), and the frame
 * it now sits in is 3:2, so it still takes no crop. The event screen is
 * the top third and carries the whole credential: the panel title, the
 * date, the venue, and Lee Hickin and Dr Tom Gao named. The alt text
 * carries those facts, because the evidence here is visual and a screen
 * reader gets none of it. Caption below, never over — two corners
 * already carry burned-in branding.
 *
 * No host logo beside this item — the event branding is already inside
 * the photograph, and the mark twice is the mark twice.
 *
 * The two ALT-not-for-page-* frames are not used: in one she is turned
 * away with nothing identifying the panel, and the other is a good
 * photograph of a panellist that barely has her in it.
 *
 * "For Stripe" is ON the monetisation roundtable — confirmed by Bijal
 * on 18 October. It was held back while it was a guess.
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
 * Every room, in one list, newest first.
 *
 * img   · a file in /public/rooms, exactly 3:2. Omit until one exists.
 * alt   · required whenever img is set, and it carries the facts.
 * host  · set in type on the fallback ground, so a room with no
 *         photograph still shows who convened it.
 */
const ROOMS = [
  {
    img: '/rooms/cloud-datacenter-convention-17sep2026.jpg',
    alt: 'Bijal Sejpal moderating the Industry Deep-Dive Panel, AI & Cloud Transformation Across Industries, at the Cloud and Datacenter Convention, ICC Sydney, 17 September 2026.',
    caption: 'Cloud &amp; Datacenter Convention · ICC Sydney',
    host: 'W.Media',
    meta: '17 September 2026 · ICC Sydney',
    role: 'Moderator',
    title: 'AI &amp; Cloud Transformation Across Industries',
    body: 'The hardest part of enterprise AI is not the pilot. It is everything that has to change after the pilot works.',
    people: PANEL_17_SEP,
    link: POST('simonfletcher1_cloud-ai-transformation-share-7495331001980682240-y90L/'),
    linkLabel: 'W.Media&rsquo;s own panel announcement',
  },
  {
    /* The Ortus Club's own photograph — their watermark is in frame,
       which is what makes it publishable here. Source 1280x853 is 3:2
       to a rounding error, so the conversion cropped nothing at all. */
    img: '/rooms/ortus-saas-evolution.jpg',
    alt: 'Executives seated along a long table at The Ortus Club roundtable on AI in SaaS evolution, Cafe Sydney, with Bijal Sejpal moderating.',
    caption: 'The Ortus Club · Cafe Sydney',
    host: 'The Ortus Club',
    meta: '2026 · Cafe Sydney',
    role: 'Moderator',
    title: 'The Intelligence Era: AI in SaaS Evolution',
    body: 'Token-based pricing, and why speed of experimentation has become the real competitive advantage.',
    link: POST('theortusclub-knowledgesharing-saasevolution-ugcPost-7483382872242872321-3gL0/'),
    linkLabel: 'The Ortus Club&rsquo;s write-up',
  },
  {
    /* Supplied by Bijal 19 October. The Ortus Club's own photograph —
       their watermark is in the frame, which is what makes it
       publishable here: §5a, and this page's own promise that "what
       gets published is what the host publishes".

       Source was 2000x1334, which is 3:2 to within a rounding error, so
       the 1200x800 conversion cropped 0.1% off the top and nothing
       else.

       TWO OTHER FRAMES WERE SUPPLIED AND ARE NOT USED. Both are close
       portraits of identifiable attendees, and neither carries the host
       watermark. A Chatham House roundtable is the one room where
       publishing recognisable faces of the people who came needs the
       host's publication behind it, not ours. The wide shot is also the
       better photograph for this card: it shows the convening, which is
       the credential, rather than individuals. */
    img: '/rooms/ortus-ai-monetisation.jpg',
    alt: 'A long private dining table of about twenty executives mid-discussion at The Ortus Club roundtable on AI and monetisation, The Meat & Wine Co, Sydney.',
    caption: 'The Ortus Club · The Meat &amp; Wine Co, Sydney',
    host: 'The Ortus Club',
    meta: '2026 · The Meat &amp; Wine Co, Sydney',
    role: 'Moderator',
    title: 'AI &amp; Monetisation: Pricing, Billing and Growth',
    body: 'The agentic paradigm is already here, and most revenue infrastructure was not built for it. For Stripe.',
    link: POST('theortusclub-knowledgesharing-aimonetisation-ugcPost-7473220419118845953-WPZg/'),
    linkLabel: 'The Ortus Club&rsquo;s write-up',
  },
  {
    /* Different provenance from the two Ortus frames: no host watermark,
       and it reads as a photograph taken in the room rather than one
       published by IBM. It is used anyway, and the distinction is worth
       recording. A panel is a public speaking engagement, not a Chatham
       House roundtable — the two close Ortus portraits were held back
       precisely because that room was the latter.

       Source 1280x960 is 4:3, so 107px had to go. The crop is biased
       upward (focal 0.3): it keeps the whole panel and trims foreground
       chairs rather than cutting the speakers' heads. */
    img: '/rooms/ibm-techwomen.jpg',
    alt: 'A four-person panel seated in front of an audience at the TechWomen by IBM A/NZ event in Sydney, Bijal Sejpal second from left.',
    caption: 'TechWomen by IBM A/NZ · Sydney',
    host: 'TechWomen by IBM A/NZ',
    meta: 'March 2025 · Sydney',
    role: 'Panellist',
    title: 'Women leading in AI and quantum computing',
    body: 'International Women&rsquo;s Day week. Sydney, then Melbourne the following day at capacity.',
    link: POST('ibm_techwomen-activity-7303005232110739456-0000/'),
    linkLabel: 'The host&rsquo;s own post',
  },
  {
    host: '6 Degrees Media',
    meta: '6 November 2025 · 6DAI Sydney',
    role: 'Speaker',
    title: '6DAI Sydney',
    body: 'Alongside the National AI Centre, Westpac, ANZ, Commonwealth Bank, NAB, Service NSW, Healthdirect and MinterEllison.',
    people: SIX_D,
    footnote: 'Plus Domain, Rest, EBOS, ACCC, Airtasker, Reece, Google Cloud, Dell, UiPath, Elastic and Avanade.',
  },
  {
    /* The only frame that exists for this one, and it is used on that
       basis rather than because it is the right photograph.

       NOT UPSCALED. The source is 566x566; cropped to 3:2 that is
       566x377, and the card renders about 360px wide, so it holds up.
       Interpolating it to 1200x800 to match the others would have made
       it softer, not sharper — a bigger file of the same information.

       Two things to know. It is a posed group photograph rather than a
       room, so it evidences attendance rather than the "Presented" verb
       on the card. And three identifiable colleagues are in it with no
       host watermark — the same consent question that kept two Ortus
       close portraits off this page. Bijal knows these people and made
       the call; it is recorded here so it stays a decision. */
    img: '/rooms/mercermarsh-benefits.jpg',
    alt: 'Bijal Sejpal with three colleagues at the MercerMarsh Benefits Workers Compensation Colleague Conference.',
    host: 'MercerMarsh Benefits',
    meta: 'Early 2024 · Workers Compensation Colleague Conference',
    role: 'Presented',
    title: 'Trends and advancements in AI and generative AI',
    body: 'With colleagues from QBE, to a room of brokers and clients — in early 2024.',
  },
  {
    /* A portrait rather than a room, because this one is an interview —
       the subject is her, and it gives the gallery one human close-up
       among the room shots.

       NOT the photograph on Morgan McKinley's own page. That asset's
       rights sit with them or their photographer, republishing it on a
       commercial site is a different use from them running it in an
       interview, and it is styled nothing like the rest of this site.

       NOT founder-portrait.png either, which is the obvious file and is
       WATERMARKED "OMAMEH · EDITORIAL USE ONLY" across the full frame —
       a proof, not a delivered asset. og/bijal-portrait-1080.jpg is the
       same frame, clean, and was already in the repo.

       Deliberately a different shot from the one on the homepage,
       /about and /founder (about/bijal-seated-teal.jpg, grey jumper,
       dark ground) so the same face is not repeated four times in one
       visit. */
    img: '/rooms/morgan-mckinley.jpg',
    alt: 'Bijal Sejpal, founder and chief executive of Omameh.',
    host: 'Morgan McKinley',
    meta: '21 May 2024',
    role: 'Interview',
    title: 'Stand Up and Succeed: Leadership Tips for Technology',
    body: 'On assuming positive intent, and learning to say no.',
    link: 'https://www.morganmckinley.com/au/article/stand-and-succeed-leadership-tips-technology-bijal-sejpal',
    linkLabel: 'Read the interview',
  },
];

/**
 * One gallery card.
 *
 * The image slot is always present and always 3:2, so the grid stays
 * even whether or not a photograph exists. Without one it renders the
 * open-ring ground with the host set in type — a designed state, not a
 * grey box with "image coming".
 */
/**
 * One gallery card, in two forms.
 *
 * WITH a photograph: image slot on top, words beneath, like any card.
 *
 * WITHOUT one: the whole card becomes the open-ring ground and the
 * words sit on it. Bijal, 19 October: "do the write-up on the motif
 * ground rather than at the bottom, so it becomes like its own banner,
 * rather than a blank banner up the top."
 *
 * She is right, and the first version had a second fault she did not
 * have to name: the host was printed twice on those cards, once large
 * on the motif ground and again in the meta line directly below it.
 * Merging the two removes the repetition and turns a card that read as
 * "missing image" into a typographic card that reads as a choice.
 */
const roomCard = ({ img, alt, caption, host, meta, role, title, body, people, footnote, link, linkLabel }) => String.raw`
    <article class="rm${img ? '' : ' noimg'}">
      ${img
        ? `<figure class="fr zoom rm-img"><img src="${img}" alt="${alt}" width="1800" height="1200" loading="lazy" decoding="async"></figure>`
        : ''}
      <div class="rm-body">
        <div class="rm-top">
          <span class="rm-meta">${host} · ${meta}</span>
          <span class="chip live">${role}</span>
        </div>
        <h3 class="rm-title">${title}</h3>
        ${body ? `<p class="body-sm">${body}</p>` : ''}
        ${people ? `<ul class="rm-people">${people.map((p) => `<li>${p}</li>`).join('')}</ul>` : ''}
        ${footnote ? `<p class="rm-foot">${footnote}</p>` : ''}
        ${caption ? `<p class="fcap">${caption}</p>` : ''}
        ${link ? `<a class="link cardlink" href="${link}" target="_blank" rel="noopener">${linkLabel} &rarr;</a>` : ''}
      </div>
    </article>`;

const __MARKUP = String.raw`
<section class="hero">
  <span class="arc top" aria-hidden="true"></span>
  <div class="w">
    <p class="eyebrow">Rooms · Speaking, moderating and media</p>
    <h1>Rooms I have been <em>trusted to run.</em></h1>
    <p class="lede">Moderating, panels, webinars and podcasts — for the organisations whose rooms they were. Chatham House holds. What gets published is what the host publishes.</p>
  </div>
</section>

<section class="warm"><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Upcoming</p>
    <h2>Next.</h2>
  </div>
  <div class="grid two" data-reveal-group>
${UPCOMING.map(([when, role, title, body]) => String.raw`    <div class="card">
      <div class="rm-top"><span class="rm-meta">${when}</span><span class="chip live">${role}</span></div>
      <h3 class="card-h">${title}</h3>
      <p>${body}</p>
    </div>`).join('\n')}
  </div>
</div></section>

<section><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">The rooms</p>
    <h2>Moderating, panels and press.</h2>
    <p class="lede">Senior rooms, no slides, and a conversation that has to go somewhere by the time the plates are cleared.</p>
  </div>

  <div class="rmgrid" data-reveal-group>
${ROOMS.map(roomCard).join('')}
  </div>
</div></section>

<section class="dark">
  <span class="arc left" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">Podcasts and press</p>
      <h2>On the record.</h2>
    </div>

    <div class="pod" data-reveal>
      <div class="pod-words">
        <div class="rm-top">
          <span class="rm-meta">A Human Element · July 2026 · The Transformation Group · host Adam Higgins</span>
          <span class="chip live">Guest</span>
        </div>
        <h3 class="rm-title">Looking in the Leadership Mirror: Leading in the Age of AI</h3>
        <p class="body-sm">Curiosity as a load-bearing capability, and the conviction underneath it. 51 minutes.</p>
        <blockquote class="pq">The next decade will not reward the fastest mover. It will reward the most structurally ready.</blockquote>
        <a class="link" href="https://open.spotify.com/episode/5vF7MSo3K4eYlAZ3JNcQmr" target="_blank" rel="noopener">Listen on Spotify &rarr;</a>
      </div>
      <div class="pod-video">
        <iframe src="https://www.youtube-nocookie.com/embed/7IuI5hbk5OY" title="Looking in the Leadership Mirror: Leading in the Age of AI" loading="lazy" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<section class="warm"><div class="w">
  <div class="shead" data-reveal>
    <p class="eyebrow">Memberships</p>
    <h2>On the register.</h2>
  </div>
  <div class="grid two" data-reveal-group>
    <div class="card"><span class="k">Australian Institute of Company Directors</span><p>Member</p></div>
    <div class="card"><span class="k">Australian Business Summit Council Inc</span><p>Member</p></div>
  </div>
</div></section>

<section><div class="w">
  <div class="grid two" data-reveal-group>
    <div class="card">
      <span class="k">Book a room</span>
      <h3 class="card-h">Keynotes, panels and moderation.</h3>
      <p>Webinars and private roundtables too. Sydney, Asia-Pacific and remote.</p>
      <a class="link cardlink" data-intuka-demo data-demo-product="Speaking" href="mailto:contact@omameh.com.au?subject=Speaking%20enquiry">contact@omameh.com.au &rarr;</a>
    </div>
    <div class="card">
      <span class="k">Media kit</span>
      <h3 class="card-h">Portraits, bios and QR codes.</h3>
      <p>Approved portraits, four bio lengths written to be lifted verbatim, and QR codes.</p>
      <a class="link cardlink" data-intuka-demo data-demo-product="Media kit" href="mailto:contact@omameh.com.au?subject=Media%20kit">Open the kit &rarr;</a>
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
