import { pageMeta } from '@/lib/seo/page-meta';
import RouteShell from '../_components/RouteShell';

/**
 * Founder · /founder
 *
 * ── THE HISTORY OF THIS ROUTE, BECAUSE IT MATTERS ──────────────────
 *
 * It existed through V11 and V12 carrying an eleven-paragraph essay,
 * "Why I built this", plus the name-origin aside. On 18 October the
 * handover said the page was "folded into /about". That was read as
 * "replace with a summary": the route was deleted, 301'd to
 * /about#founder, and the essay replaced with a three-paragraph note.
 * The writing was not lost — git keeps everything — but it was off the
 * site, and Bijal noticed the link was gone before she noticed anything
 * else.
 *
 * On 19 October the essay was restored into /about. That worked, but it
 * made /about 9,463px on desktop and 13,386px on mobile, and Bijal's
 * call was the right one: "it might need its own separate page."
 *
 * So the route is back, with the essay on it. /about keeps the short
 * founder note and links here. The 301 in next.config.js is removed —
 * leaving it would have made this page unreachable, which is the exact
 * mistake that is invisible until someone clicks.
 *
 * ── THE WRITING ────────────────────────────────────────────────────
 * Verbatim from app/founder/page.jsx at commit 607f4bc~1. Not
 * paraphrased, not trimmed, not "improved". The only change is markup:
 * the original ran on the V11 legacy stylesheet (.fo-hero, .fo-name,
 * .why, --space-8) and this is V12, so the same words now sit on
 * .w-narrow, .pq and the craft layer.
 *
 * The name story needed no new words. An earlier version of /about
 * carried a commented-out block marked "NEEDS YOUR WORDS" asking Bijal
 * for two or three sentences about the name. She had already written
 * them — on this page, which we had deleted.
 *
 * BAND RHYTHM · deep hero · warm (the name) · plain (the essay) ·
 * dark (the close). The essay sits on plain cream at .w-narrow because
 * it is the longest read on the site and wants a measure and a quiet
 * ground, not a texture competing with it.
 */

export const metadata = pageMeta({
  title: 'Founder',
  description:
    'Bijal Sejpal · founder of Omameh. Two decades inside the architecture of large institutions. Why I built this — Transformation Strategy is the discipline almost no one writes down.',
  path: '/founder',
});

const __MARKUP = String.raw`
<section class="deep hero">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="fo-split">
      <div class="fo-words">
        <p class="eyebrow">Founder · the first door</p>
        <h1>Bijal Sejpal.</h1>
        <p class="fo-role">Founder &amp; CEO of Omameh.</p>
        <p class="fo-where">Sydney · Hyderabad · One team, two countries</p>
        <p class="lede">Two decades inside the architecture of large institutions &mdash; financial services, healthcare, government, media, and technology. I&rsquo;ve seen what scales, what stalls, and what it takes to move either.</p>
        <a class="link" href="https://www.linkedin.com/in/bijal-sejpal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bijal-sejpal &nearr;</a>
      </div>
      <figure class="fr portrait" style="--ar:880/1179">
        <img src="/about/bijal-seated-teal.jpg" alt="Bijal Sejpal, founder and chief executive of Omameh" width="880" height="1179" loading="eager" fetchpriority="high" decoding="async">
      </figure>
    </div>
  </div>
</section>

<section class="warm">
  <span class="arc left sm" aria-hidden="true"></span>
  <div class="w">
    <div class="w-narrow mid namebox" data-reveal>
      <p class="eyebrow">The name</p>
      <h2 class="nameword">Om<em>a</em>meh</h2>
      <p class="namepron">(O · Ma · Meh)</p>
      <p class="lede nameline">Omameh is my mother&rsquo;s name, woven with my two daughters&rsquo;. The <em>Om</em> at the front is for infinity. I named the practice for the three women who define my why &mdash; the one who taught me what boldness looks like, and the two who remind me every day what I am building towards.</p>
    </div>
  </div>
</section>

<section class="essay-band"><div class="w">
  <div class="w-narrow" data-reveal>
    <p class="eyebrow">Why</p>
    <h2 class="whyhead">Why I <em>built this.</em></h2>

    <p class="essay-open">What I do is structural. Why I do it is the people inside it.</p>

    <p>Boards know business strategy. They know execution. The strategy of how you transform &mdash; how you sequence the shifts, calibrate ambition against appetite, work with the maturity the organisation actually carries &mdash; is the conversation that should happen before the budget is approved. It rarely does.</p>

    <p>Most Artificial Intelligence-era ambitions fail in that gap.</p>

    <p>Business strategy sets the value. Execution is where it is meant to land. The architecture between them is what converts one into the other &mdash; or quietly loses it.</p>

    <p>What organisations reach for instead are tools. Heatmaps. Interlocks. Prioritisation sessions of more art than science. The same three questions surface every year &mdash; how much, why, what&rsquo;s the benefit. The answers get written down. The benefits rarely land.</p>

    <p>Organisations are ecosystems running through silos, and the connective tissue between them is improvised every time. When the architecture fails, the people running the work carry weight that should be held for them. Strategy gets the credit. They carry the loss. And the loss compounds &mdash; the invoice arrives in three years.</p>

    <div class="chapbreak" role="separator" aria-label="Chapter break"><span>Q · 002</span></div>

    <p>The discipline behind sequencing transformation has a name almost no one writes down: <em>Transformation Strategy.</em></p>

    <p>That is the gap I built Omameh to work in. The architecture between strategy and execution. The operating model that can carry the ambition. The governance that holds at 7am to a regulator. The capability that compounds &mdash; because the people inside it are ready, equipped, and trusted, and because the return compounds with them.</p>

    <p>And the target never holds still. Customer behaviour shifts, adoption curves bend &mdash; what you are transforming toward does not sit still, so the operating model cannot either. Architecture designed once is already Day 2. The work is building one that re-sequences as the picture changes: <em>strategically patient about where it is going, tactically impatient about getting there.</em></p>

    <p>Most consultancies sell the strategy. Most platforms sell the tools. <strong>Almost no one does the architectural work in between.</strong></p>

    <p>The leaders who define the next generation are the ones whose organisations are more capable, more confident, and more humane after they have gone.</p>

    <p class="pq">Human-Led. AI-Operated. Built for the era we are actually in.</p>

    <p class="coda">Change everything but the reason you began. Build what stays Day 1 without you &mdash; <em>in the hands of people who no longer need you.</em></p>

    <p class="signoff"><span class="signoff-name">Bijal</span><span class="signoff-role">Founder · Omameh</span></p>
  </div>
</div></section>

<section class="dark">
  <span class="arc" aria-hidden="true"></span>
  <div class="w">
    <div class="shead" data-reveal>
      <p class="eyebrow">And who does the work</p>
      <h2>There is a team behind this.</h2>
      <p class="lede">Twenty people and growing &mdash; architecture, engineering, data, cloud, clinical and domain specialists. None of it gets designed alone.</p>
    </div>
    <div class="cta"><a class="btn" href="/about">About Omameh &rarr;</a><a class="btn ghost" href="/contact">Start a conversation</a></div>
  </div>
</section>
`;

export default function FounderPage() {
  return <RouteShell id="founder" label="Founder" markup={__MARKUP} />;
}
