/**
 * Subscribe · Substack's own form, in the page.
 *
 * WHY AN IFRAME AND NOT OUR OWN FORM
 *
 * Our own form could not subscribe anyone. Substack's signup endpoint
 * answers 403 to a server-side post and the browser preflight comes back
 * with no Access-Control-Allow-Origin, so the previous build took a name
 * and an email, then handed the reader to Substack to click a second
 * time. Two steps, and everyone who did not take the second one was lost
 * silently.
 *
 * This is Substack's own page in a frame, so the post happens on their
 * origin and it is one step. It is the only version whose success does
 * not have to be taken on trust: the form that works on their site is
 * literally the form on the page.
 *
 * WHAT WE GIVE UP
 *
 * The first name. Substack takes an email and nothing else, and the name
 * we were collecting went to a log line rather than to a list — nothing
 * read it and nothing could export it. A field we could not use was not
 * worth a step that lost people.
 *
 * We also give up the typography. Inside a frame we cannot restyle it:
 * Spectral rather than Playfair. The button is already #0D1F4E, so the
 * one colour that matters is right. Presented as a white card on the
 * cream ground, which reads as a deliberate inset rather than a seam.
 *
 * THE RULES IT STILL KEEPS
 *
 * In the page, never over it. No modal, no overlay, no sticky bar, no
 * exit intent, and it gates nothing — the writing is free and stays
 * free. Those were the build spec's hard rules and they do not change
 * because the mechanism did.
 *
 * HEIGHT IS FIXED AND THAT IS DELIBERATE
 *
 * The embed centres its card in whatever height it is given, so too much
 * is padding and too little is a scrollbar. Measured on the live embed:
 * about 345px of content at 560px wide, about 420px at 340px wide, where
 * the description wraps to three lines. 460 clears both.
 *
 * NOT lazy. It was, and the frame stayed blank — the request is never
 * made until the browser decides the element is near enough, and a
 * subscribe box that sometimes does not exist is worse than one more
 * request. This is the only thing on the page anyone converts on.
 */

const EMBED = 'https://atlas.omameh.com.au/embed';

export default function SubscribeEmbed({ id = 'subscribe' }) {
  return (
    <aside className="subemb" id={id}>
      <iframe
        src={EMBED}
        title="Subscribe to The Unlearning"
        className="subemb__f"
        scrolling="no"
      />
    </aside>
  );
}
