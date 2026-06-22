/**
 * MaaFoundationWordmark — माँ Foundation bilingual lockup
 * Omameh practice register · the giving arm
 *
 * Renders the Devanagari focal mark माँ ("mā" — mother) locked to
 * the Latin "Foundation" label. Styling lives in maa-foundation.css
 * (import it once at the app root, or fold the classes into your
 * design-system stylesheet). Requires the Tiro Devanagari Hindi
 * webfont and the Omameh design tokens.
 *
 * Usage:
 *   import './maa-foundation.css';
 *   import { MaaFoundationWordmark } from './MaaFoundationWordmark';
 *
 *   <MaaFoundationWordmark variant="horizontal" />
 *   <MaaFoundationWordmark variant="stacked" pron={false} />
 *   <MaaFoundationWordmark variant="gloss" />
 *   <MaaFoundationWordmark variant="favicon" size={48} />
 *   <MaaFoundationWordmark variant="horizontal" onLight />   // on cream
 *
 * Props:
 *   variant  'horizontal' | 'stacked' | 'gloss' | 'favicon'   (default 'horizontal')
 *   pron     boolean — show the "mā · mother" cue on horizontal/stacked (default true)
 *   onLight  boolean — reversal for cream / light grounds (default false)
 *   size     number  — px square, favicon variant only (default 48)
 *   label    string  — accessible name (default "माँ Foundation")
 *   className, ...rest — passed to the root element
 */

const MAA = 'माँ';

function Pron({ light }) {
  return (
    <span className="maa-pron">
      <span className="maa-pron__key">mā</span>
      <span className="maa-pron__dot" aria-hidden="true" />
      <span className="maa-pron__mean">mother</span>
    </span>
  );
}

export function MaaFoundationWordmark({
  variant = 'horizontal',
  pron = true,
  onLight = false,
  size = 48,
  label = 'माँ Foundation',
  className = '',
  ...rest
}) {
  const root = [onLight ? 'maa-on-light' : '', className].filter(Boolean).join(' ');

  if (variant === 'favicon') {
    return (
      <span
        className={`maa-favicon ${root}`}
        role="img"
        aria-label={label}
        style={{ width: size, height: size }}
        {...rest}
      >
        <span className="maa-mark" style={{ fontSize: Math.round(size * 0.62) }} aria-hidden="true">
          {MAA}
        </span>
      </span>
    );
  }

  if (variant === 'gloss') {
    return (
      <span className={`maa-gloss ${root}`} role="img" aria-label="माँ — mā, mother" {...rest}>
        <span className="maa-mark" aria-hidden="true">{MAA}</span>
        <span className="maa-gloss__dash" aria-hidden="true" />
        <span className="maa-gloss__read">
          <span className="maa-gloss__key">mā</span>
          <span className="maa-gloss__mean">mother</span>
        </span>
      </span>
    );
  }

  if (variant === 'stacked') {
    return (
      <span className={`maa-lockup-v ${root}`} role="img" aria-label={label} {...rest}>
        <span className="maa-mark" aria-hidden="true">{MAA}</span>
        <span className="maa-lockup-v__row">
          <span className="maa-lockup-v__tick" aria-hidden="true" />
          <span className="maa-fdn">Foundation</span>
          <span className="maa-lockup-v__tick" aria-hidden="true" />
        </span>
        {pron && <Pron light={onLight} />}
      </span>
    );
  }

  // horizontal (default)
  return (
    <span className={`maa-lockup-h ${root}`} role="img" aria-label={label} {...rest}>
      <span className="maa-lockup-h__row">
        <span className="maa-mark" aria-hidden="true">{MAA}</span>
        <span className="maa-lockup-h__rule" aria-hidden="true" />
        <span className="maa-fdn">Foundation</span>
      </span>
      {pron && <Pron light={onLight} />}
    </span>
  );
}

export default MaaFoundationWordmark;
