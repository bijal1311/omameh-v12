import TrialForm from '../_components/TrialForm';

/**
 * /trial — the first trial.
 *
 * NOT a ported page. This route does not exist in the content source, so
 * unlike every other route the copy here is written rather than lifted, in
 * the Practice register. It exists because Case 00 closes by inviting
 * readers into the first trial, and that invitation needs somewhere to land.
 *
 * It is also the one route that is a plain React page rather than a
 * String.raw markup block through RouteShell. The established pattern
 * renders through dangerouslySetInnerHTML, which cannot carry the form's
 * state (sending, failed, sent) without wiring it back through the DOM by
 * hand. A stateful form is what the React component model is for; the page
 * still uses the site's own classes so it is indistinguishable visually.
 *
 * Not indexed. It is reached from the essay, not from search.
 */

export const metadata = {
  title: 'The first trial',
  description:
    'A small number of growing businesses, running the operating layer on their own work for a fortnight.',
  robots: { index: false, follow: true },
};

export default function TrialPage() {
  return (
    <main className="route" id="trial" data-screen-label="10 · Trial">
      <section className="hero">
        <div className="w">
          <p className="eyebrow">The first trial</p>
          <h1>
            Your business. Your data. <em>A fortnight.</em>
          </h1>
          <p className="lede">
            A small number of growing businesses go first. Not a sandbox and not a demo
            environment — your real operation, for two weeks. It costs nothing. What we ask
            for in return is your time and your honest read, including what you would change.
          </p>
        </div>
      </section>

      <section className="warm">
        <div className="w">
          <div className="grid three">
            <div className="card">
              <span className="k">Who it is for</span>
              <h4>You run the thing</h4>
              <p>
                A growing business where the reporting still assembles itself from three tabs,
                an export and a spreadsheet nobody opens twice.
              </p>
            </div>
            <div className="card">
              <span className="k">What it costs</span>
              <h4>Nothing, and not later either</h4>
              <p>
                No card, no conversion at the end of the fortnight. If it is not carrying real
                work by day fourteen, it has not earned anything.
              </p>
            </div>
            <div className="card">
              <span className="k">What we ask</span>
              <h4>Advice, not feedback</h4>
              <p>
                The thing that would stop you buying it. That is worth more to us than a
                testimonial and it is the whole reason the trial is small.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-narrow">
          <p className="eyebrow">Ask to join</p>
          <h2>
            Four questions, and none of them are <em>marketing.</em>
          </h2>
          <TrialForm source="case-00" />
        </div>
      </section>
    </main>
  );
}
