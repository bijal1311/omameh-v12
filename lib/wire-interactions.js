'use client';

/**
 * Omameh · v12 · client-side imperative wiring
 *
 * Two handlers needed for v12:
 *   1. Calendar slot click → pre-filled mailto to Contact@
 *   2. rewriteHrefs → translate mockup #anchor refs to /route paths
 *
 * Everything else the mockup needs (hover effects, transitions, etc.)
 * is handled by CSS or inline JS in the mockup HTML itself.
 */

export function wireInteractions(root) {
  if (!root) return () => {};
  const cleanups = [];

  // ── Calendar slot booking ──────────────────────────────────────
  root.querySelectorAll('.cm-calendar__slot.is-open').forEach((slot) => {
    const onClick = (e) => {
      e.preventDefault();
      const which = slot.getAttribute('data-cm-slot') || 'a 30-minute slot';
      const subj = encodeURIComponent('Discovery · ' + which + ' · 30-min');
      const body = encodeURIComponent(
        'Hi Bijal,\n\nI would like to book the discovery slot at ' + which + ' AEST.\n\n' +
        'My organisation: \nMy role: \nThe situation in one paragraph: \n\nThank you.'
      );
      window.location.href = `mailto:contact@omameh.com.au?subject=${subj}&body=${body}`;
    };
    slot.addEventListener('click', onClick);
    cleanups.push(() => slot.removeEventListener('click', onClick));
  });

  // ── Calendar week navigation (visual feedback only · v11.1 wires state)
  root.querySelectorAll('.cm-calendar__nav-btn').forEach((btn) => {
    const onClick = (e) => {
      e.preventDefault();
      btn.classList.add('is-pressed');
      setTimeout(() => btn.classList.remove('is-pressed'), 220);
    };
    btn.addEventListener('click', onClick);
    cleanups.push(() => btn.removeEventListener('click', onClick));
  });

  // ── Media kit · Copy bio to clipboard ──────────────────────────
  // Each .bio article has a [data-bio-copy] button. On click, copy the
  // .bio__body text content (HTML stripped) to the clipboard and flash
  // "Copied ✓" briefly. Useful for press / panel programmers grabbing
  // the right-length bio without highlighting.
  root.querySelectorAll('[data-bio-copy]').forEach((btn) => {
    const onClick = async () => {
      const bio = btn.closest('.bio');
      if (!bio) return;
      const body = bio.querySelector('.bio__body');
      if (!body) return;
      const text = body.textContent.replace(/\s+/g, ' ').trim();
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = 'Copied ✓';
        btn.classList.add('is-copied');
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove('is-copied');
        }, 1800);
      } catch (e) {
        // Fallback: select the text so the user can Ctrl+C manually
        const range = document.createRange();
        range.selectNodeContents(body);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    };
    btn.addEventListener('click', onClick);
    cleanups.push(() => btn.removeEventListener('click', onClick));
  });

  // ── Atlas subscribe form · mailto fallback ─────────────────────
  // The form's action="mailto:..." attribute handles default submit.
  // This handler shows a brief "thanks" state for the button after
  // the visitor presses Subscribe.
  root.querySelectorAll('form.subscribe').forEach((form) => {
    const onSubmit = (e) => {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Thank you ·';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 2400);
      }
    };
    form.addEventListener('submit', onSubmit);
    cleanups.push(() => form.removeEventListener('submit', onSubmit));
  });

  // ── Contact form · speech-to-text on the situation field ───────
  // Uses the Web Speech API (browser-native, no dependency). Live
  // transcription appends to the textarea as the visitor speaks; they
  // can edit before submitting. mailto: form submission carries the
  // transcribed text in the message body. Firefox doesn't support
  // SpeechRecognition natively, so the button stays hidden for those
  // visitors and the textarea works as today.
  const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
  if (SR) {
    root.querySelectorAll('button[data-speech]').forEach((btn) => {
      btn.hidden = false;
      const field = btn.closest('.contact-form__field');
      const textarea = field && field.querySelector('textarea');
      const textEl = btn.querySelector('.contact-form__speech-text');
      if (!textarea || !textEl) return;
      let recognition = null;
      let baseText = '';

      const stop = () => {
        if (!recognition) return;
        try { recognition.stop(); } catch (e) { /* ignore */ }
        recognition = null;
        btn.classList.remove('is-recording');
        btn.setAttribute('aria-pressed', 'false');
        textEl.textContent = 'Speak';
      };

      const start = () => {
        recognition = new SR();
        recognition.lang = 'en-AU';
        recognition.continuous = true;
        recognition.interimResults = true;
        baseText = textarea.value;
        btn.classList.add('is-recording');
        btn.setAttribute('aria-pressed', 'true');
        textEl.textContent = 'Stop';
        recognition.onresult = (event) => {
          let final = '', interim = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const t = event.results[i][0].transcript;
            if (event.results[i].isFinal) final += t;
            else interim += t;
          }
          textarea.value = (baseText + ' ' + final + interim).replace(/\s+/g, ' ').trim();
        };
        recognition.onerror = () => stop();
        recognition.onend = () => {
          if (recognition) {
            // auto-ended after silence; remember finalized text and restart
            baseText = textarea.value;
            try { recognition.start(); } catch (e) { stop(); }
          }
        };
        try { recognition.start(); } catch (e) { stop(); }
      };

      const onClick = () => (recognition ? stop() : start());
      btn.addEventListener('click', onClick);
      cleanups.push(() => { stop(); btn.removeEventListener('click', onClick); });
    });
  }

  return () => cleanups.forEach((c) => c());
}

export function rewriteHrefs(root) {
  if (!root) return;
  // Mockup uses #home / #about / etc anchors. Translate to /route paths.
  const map = {
    '#home':     '/',
    '#about':    '/about',
    '#practice': '/practice',
    '#atlas':    '/atlas',
    '#doors':    '/doors',
    '#founder':  '/founder',
    '#case-00':  '/case-00',
    '#media':    '/media',
    '#contact':  '/contact',
    '#privacy':  '/privacy',
  };
  root.querySelectorAll('a[href]').forEach((a) => {
    const h = a.getAttribute('href');
    if (map[h]) a.setAttribute('href', map[h]);
  });
}
