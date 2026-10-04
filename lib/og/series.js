/**
 * The four series of The Unlearning.
 *
 * Values are taken from the THEMES object in the brand kit's
 * Unlearning Card.dc.html so the generated cards and the designer's
 * source cannot drift. Anything not used by the card — the sample
 * headlines and deks in the kit — is deliberately left out: the headline
 * comes from the piece.
 *
 * `n` is the issue number across the whole publication, not within the
 * series. The kit numbers Carrying enough 01 and the blank month 02, which
 * is why The Standing Item is 07 in the kit's own sample.
 *
 * `motif` names the device. All four are drawn as open arcs or rails in
 * card.jsx — the kit draws the first two as closed rings, which is the one
 * thing in it that breaks the Open Circle Law.
 */

export const SERIES = {
  standing: {
    key: 'standing',
    name: 'THE STANDING ITEM',
    cadence: 'MONDAY',
    bg: '#F4F0E6',
    ink: '#1A1A18',
    sub: 'rgba(26,26,24,.68)',
    acc: '#8A6D22',
    accSoft: 'rgba(201,168,76,.42)',
    accFaint: 'rgba(201,168,76,.25)',
    emph: '#2D5A3D',
    faint: 'rgba(26,26,24,.14)',
    fade: '244,240,230',
    motif: 'arc',
  },
  aob: {
    key: 'aob',
    name: 'ANY OTHER BUSINESS',
    cadence: 'MONTHLY',
    bg: '#081335',
    ink: '#FFFFFF',
    sub: 'rgba(255,255,255,.74)',
    acc: '#C9A84C',
    accSoft: 'rgba(201,168,76,.5)',
    accFaint: 'rgba(201,168,76,.22)',
    emph: '#E0C67A',
    faint: 'rgba(255,255,255,.16)',
    fade: '8,19,53',
    motif: 'orbit',
  },
  mec: {
    key: 'mec',
    name: 'MONTH END CLOSE',
    cadence: 'MONTH END',
    bg: '#2D5A3D',
    ink: '#F4F0E6',
    sub: 'rgba(244,240,230,.8)',
    acc: '#E0C67A',
    accSoft: 'rgba(224,198,122,.35)',
    accFaint: 'rgba(224,198,122,.2)',
    emph: '#E0C67A',
    faint: 'rgba(244,240,230,.2)',
    fade: '45,90,61',
    motif: 'months',
  },
  board: {
    key: 'board',
    name: 'THE BOARD PACK',
    cadence: 'QUARTERLY',
    bg: '#0D1F4E',
    ink: '#FFFFFF',
    sub: 'rgba(255,255,255,.74)',
    acc: '#00D4CB',
    accSoft: 'rgba(0,181,173,.4)',
    accFaint: 'rgba(0,181,173,.2)',
    emph: '#00D4CB',
    faint: 'rgba(255,255,255,.16)',
    fade: '13,31,78',
    motif: 'quarters',
  },
};

/** The rail colours the site uses for each series on a cream ground. */
export const SERIES_RAIL = {
  standing: '#C9A84C',
  aob: '#081335',
  mec: '#2D5A3D',
  board: '#00B5AD',
};
