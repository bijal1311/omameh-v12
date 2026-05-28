import RouteShell from '../_components/RouteShell';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Omameh Partners Pty Ltd · ABN 77 697 372 517 · Version 1.0 effective 1 May 2026. How we collect, use, retain, and disclose personal information under the Australian Privacy Principles.',
};

/**
 * Privacy Policy — V11 legal-locked copy (Version 1.0, effective 1 May
 * 2026, legal-reviewed) ported into the mockup's container layout.
 * Markup carries scoped <style> for the legal typography (TOC, h2/h3,
 * contact card) mapped onto v12 tokens.
 *
 * DO NOT EDIT THIS COPY without legal sign-off. Source of truth:
 * Omameh Legal/Omameh Privacy Policy (Draft).docx.
 */

const __MARKUP = String.raw`
  <style>
    .privacy-hd { padding: clamp(64px, 8vw, 96px) 0 clamp(36px, 4vw, 56px); border-bottom: 1px solid var(--rule); }
    .privacy-hd .meta-row { display: flex; gap: 24px; flex-wrap: wrap; padding-top: 18px; margin-top: 22px; border-top: 1px solid var(--rule); }
    .privacy-hd .meta-row span { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--fg3); }
    .privacy-hd .meta-row strong { color: var(--fg1); font-weight: 700; }

    .privacy-grid { display: grid; grid-template-columns: 240px 1fr; gap: 48px; padding: 48px 0 64px; }
    @media (max-width: 980px) { .privacy-grid { grid-template-columns: 1fr; gap: 32px; } }
    .privacy-toc { position: sticky; top: 96px; align-self: start; }
    @media (max-width: 980px) { .privacy-toc { position: static; } }
    .privacy-toc__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.20em; text-transform: uppercase; color: var(--omameh-gold); font-weight: 700; margin: 0 0 14px; }
    .privacy-toc__list { list-style: none; padding: 0; margin: 0; border-left: 1px solid var(--rule); }
    .privacy-toc__list li { font-family: var(--font-mono); font-size: 11px; }
    .privacy-toc__list a { display: block; padding: 7px 0 7px 14px; color: var(--fg2); text-decoration: none; border-left: 2px solid transparent; margin-left: -1px; transition: color 200ms, border-color 200ms; }
    .privacy-toc__list a:hover { color: var(--fg1); border-left-color: var(--omameh-gold); }

    .legal h2 { font-family: var(--font-serif); font-weight: 600; font-size: 28px; line-height: 1.18; margin: 48px 0 18px; color: var(--fg1); padding-top: 24px; border-top: 1px solid var(--rule); }
    .legal h2:first-child { padding-top: 0; border-top: 0; margin-top: 0; }
    .legal h2 .num { font-family: var(--font-mono); font-size: 11.5px; letter-spacing: 0.18em; color: var(--omameh-gold); font-weight: 700; display: block; margin-bottom: 6px; }
    .legal h3 { font-family: var(--font-serif); font-weight: 600; font-size: 20px; line-height: 1.22; margin: 28px 0 12px; color: var(--fg1); }
    .legal p { font-size: 15.5px; line-height: 1.75; color: var(--fg2); margin: 0 0 16px; }
    .legal p strong { color: var(--fg1); font-weight: 600; }
    .legal p em { font-style: italic; }
    .legal ol, .legal ul { margin: 0 0 18px; padding-left: 24px; }
    .legal li { font-size: 15.5px; line-height: 1.7; color: var(--fg2); margin: 0 0 10px; }
    .legal li strong { color: var(--fg1); }
    .legal a { color: var(--omameh-gold-light); text-decoration: underline; text-underline-offset: 2px; }
    .legal a:hover { color: var(--omameh-gold); }

    .privacy-contact { margin: 32px 0; padding: 24px 28px; border: 1px solid rgba(201,168,76,0.30); background: rgba(201,168,76,0.05); border-radius: 12px; }
    .privacy-contact h4 { font-family: var(--font-serif); font-size: 20px; font-weight: 600; margin: 0 0 16px; color: var(--fg1); }
    .privacy-contact dl { margin: 0; display: grid; grid-template-columns: 120px 1fr; row-gap: 8px; }
    .privacy-contact dt { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--omameh-gold); font-weight: 700; }
    .privacy-contact dd { margin: 0; font-size: 15px; line-height: 1.5; color: var(--fg2); }
    .privacy-contact dd strong { color: var(--fg1); }
    @media (max-width: 540px) { .privacy-contact dl { grid-template-columns: 1fr; row-gap: 4px; } .privacy-contact dd { margin-bottom: 10px; } }
  </style>

  <div class="container">
    <section class="privacy-hd">
      <span class="eyebrow">Legal · Privacy Policy</span>
      <h1>Privacy <em>Policy.</em></h1>
      <p class="strap">How Omameh Partners collects, uses, retains, and discloses personal information — and the rights you hold in relation to it.</p>
      <div class="meta-row">
        <span><strong>Entity ·</strong> Omameh Partners Pty Ltd</span>
        <span><strong>ABN ·</strong> 77 697 372 517</span>
        <span><strong>Version ·</strong> 1.0</span>
        <span><strong>Effective ·</strong> 1 May 2026</span>
      </div>
    </section>

    <div class="privacy-grid">
      <aside class="privacy-toc" aria-label="Table of contents">
        <p class="privacy-toc__label">Sections</p>
        <ul class="privacy-toc__list">
          <li><a href="#s1">01 · Introduction</a></li>
          <li><a href="#s2">02 · Acceptance</a></li>
          <li><a href="#s3">03 · Policy Changes</a></li>
          <li><a href="#s4">04 · Information Collection</a></li>
          <li><a href="#s5">05 · Information Storage</a></li>
          <li><a href="#s6">06 · Information Disclosure</a></li>
          <li><a href="#s7">07 · Direct Marketing</a></li>
          <li><a href="#s8">08 · Website Cookies</a></li>
          <li><a href="#s9">09 · Third Party Links</a></li>
          <li><a href="#s10">10 · Accuracy</a></li>
          <li><a href="#s11">11 · Your Rights</a></li>
        </ul>
      </aside>

      <article class="legal">
        <h2 id="s1"><span class="num">01</span>Introduction</h2>
        <p>Omameh Partners is committed to protecting your privacy. This is Version 1.0 of the Policy, effective 1 May 2026.</p>
        <p>This Privacy Policy (the <strong>Policy</strong>) explains how <strong>Omameh Partners Pty Ltd</strong> ABN 77 697 372 517 (<strong>"Omameh Partners"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) may process, use, retain and disclose any and all personal information we collect from you, and the rights you have in relation to the personal information related to you in our possession.</p>
        <p>We abide by the Australian Privacy Principles under the <em>Privacy Act 1988</em> (Cth) in relation to safeguarding your personal information. This Policy is governed by the laws of New South Wales, Australia, and the parties submit to the non-exclusive jurisdiction of the courts of New South Wales.</p>

        <h2 id="s2"><span class="num">02</span>Acceptance</h2>
        <p>By navigating our website, engaging with us as a client or otherwise supplying us with your personal information, you confirm that you have read and accepted the terms of this Policy, and expressly consent to Omameh Partners's processing, use, retention and disclosure of any and all of your personal information collected in accordance with this Policy.</p>

        <h2 id="s3"><span class="num">03</span>Policy Changes</h2>
        <p>Omameh Partners reserves all rights to make changes to this Policy as we see fit. Where we make material changes to this Policy, we will notify registered users or clients by email at least 14 days prior to the changes taking effect, and will post an updated version on our website. Non-material updates may be made without prior notice.</p>
        <p>We encourage you to review and monitor the Policy regularly. You can ensure you are reading the most recent version of the Policy by accessing the Policy from the Omameh Partners website at <a href="https://omameh.com.au">omameh.com.au</a>.</p>

        <h2 id="s4"><span class="num">04</span>Information Collection</h2>
        <h3>What type of information does Omameh Partners collect?</h3>
        <p>Depending on the type of your engagement with us, Omameh Partners may collect the following types of personal information from you:</p>
        <ol type="a">
          <li>Your contact information, such as your name, provided address, telephone number or email address;</li>
          <li>Your identification information, such as official government-issued documents, likeness or other verification information;</li>
          <li>Your payment information, such as your credit/debit card numbers, bank account details or other related billing information;</li>
          <li>Your demographic information, such as your gender, nationality, ethnicity, age or other related statistical information;</li>
          <li>Your device ID, your device type, website browser and device operating system details, geo-location information (including country and suburb name based on this), computer and connection information, statistics on page views, traffic to and from the sites, ad data, or IP address and standard web log information;</li>
          <li>Any information you provide us by applying for a position at Omameh Partners; such as your education, employment background, references and other related applicant information;</li>
          <li>Any information you provide us by completing the contact form on our website;</li>
          <li>Any preferences you have given in relation to the consulting and advisory services we provide or have provided to you;</li>
          <li>Public information collected from publicly available resources, integrity data bases and credit agencies;</li>
          <li>Any information related to your visit to our office or to our space at events we are exhibiting at; or</li>
          <li>Any other personal information that you provide to us directly or indirectly, either through third parties or other means.</li>
        </ol>
        <p>It may not be reasonable for Omameh Partners to notify you, or to ensure you are made aware where we have received your information from third parties (e.g. our clients). However, Omameh Partners will process, use, retain and disclose your information in a manner that is consistent with our obligations under the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.</p>

        <h3>How does Omameh Partners collect information?</h3>
        <p>Where practicably possible, Omameh Partners aims to collect information directly from you. Circumstances under which your information may be <em>indirectly</em> collected include:</p>
        <ol type="a">
          <li>When the organisation you work for engages in our services;</li>
          <li>When the organisation you work for provides services to us;</li>
          <li>When you, or the organisation you work for is a counterparty to our client;</li>
          <li>When you or the organisation you work for are associated with, have a connection to our client;</li>
          <li>When you or the organisation you work have a connection to or involvement with a project we are working on;</li>
          <li>When you browse or interact with our website, including filling out the contact form on our website;</li>
          <li>When you attend events we are exhibiting at;</li>
          <li>When you engage with Omameh Partners on our social media handles; and</li>
          <li>When you interact with Omameh Partners's online advertising or marketing on other third party websites.</li>
        </ol>
        <p>The above list is not exhaustive, Omameh Partners may collect information through other indirect means. If you would like to check whether we have personal information pertaining to you, please refer to Section 11.</p>

        <h3>Why does Omameh Partners collect information?</h3>
        <p>Omameh Partners collects, holds, uses and discloses personal information for the following purposes:</p>
        <ol type="a">
          <li>To provide business advice and other services to you or our existing clientele;</li>
          <li>To help us enhance and improve our services to existing and future clients;</li>
          <li>To promote and market our services to you;</li>
          <li>To maintain and develop our relationship with you;</li>
          <li>To communicate with you;</li>
          <li>To facilitate your payment for any services we have provided to you;</li>
          <li>To comply with our legal, regulatory or professional obligations;</li>
          <li>To enforce, defend and protect the property and rights of Omameh Partners; or</li>
          <li>To facilitate the sale or potential sale of Omameh Partners.</li>
        </ol>
        <p><strong>Omameh Partners will never rent, sell or make publicly available your personal information without your consent.</strong></p>

        <h3>Does Omameh Partners collect information from children?</h3>
        <p>Omameh Partners understands the importance of protecting children's safety on the internet. We do not knowingly collect personal information from children under the age of 18 without parental notice or consent. If you are under the age of 18, please refrain from engaging or interacting with our website to prevent the collection of your personal information.</p>

        <h2 id="s5"><span class="num">05</span>Information Storage</h2>
        <p>Omameh Partners ensures that any information collected in accordance with this Policy is stored following the firm's strict physical and technological security processes and procedures.</p>
        <p>We will take all reasonable measures to safeguard the information from misuse, interference and loss. Any hard copies of personal information are stored in a secure, locked storage space only authorised personnel would have access credentials for. Similarly, stored electronic data are anonymised where practicably possible, encrypted, and only accessed on an as-needed basis by approved personnel with a legitimate business need. All personnel with access to information collected under this Policy are subject to confidentiality obligations.</p>
        <p>All personal information is retained according to legal, statutory and contractual obligations. Omameh Partners will take reasonable steps to destroy entirely, or permanently de-identify the information where it is no longer required for the purposes set out in Section 4.</p>

        <h2 id="s6"><span class="num">06</span>Information Disclosure</h2>
        <h3>Who does Omameh Partners disclose my personal information to?</h3>
        <p>Omameh Partners only discloses information where practicably necessary, for the purposes outlined in Section 4.</p>
        <p>We may share your information with:</p>
        <ol type="a">
          <li>Our personnel;</li>
          <li>Financial institutions for payment processing;</li>
          <li>Third party service providers such as lawyers, translators, accountants or tax advisers we have engaged to act on our behalf;</li>
          <li>Australian courts, tribunals or other law enforcement agencies or regulatory bodies; and</li>
          <li>Other third parties as practicably required.</li>
        </ol>
        <p>When sharing your personal information with a third party, we will endeavour to ensure that the information is secure and encrypted during transit, and that the recipient is committed to maintaining the confidentiality of the information given to them.</p>

        <h3>Does Omameh Partners disclose my personal information to overseas entities?</h3>
        <p>We may disclose personal information outside of Australia to cloud providers and software providers located outside of Australia, including India, the United Kingdom, Ireland, Singapore, and the United States of America. When you provide your personal information to us, you consent to the disclosure of your information outside of Australia and acknowledge that we are not required to ensure that overseas recipients handle that personal information in compliance with the <em>Privacy Act 1988</em> (Cth). We will, however, take reasonable steps to ensure that any overseas recipient will deal with such personal information in a way that is consistent with the Australian Privacy Principles.</p>

        <h2 id="s7"><span class="num">07</span>Direct Marketing Purposes</h2>
        <p>From time to time, Omameh Partners may promote or market our services by email, post or phone in accordance with the <em>Spam Act 2003</em> (Cth) and the <em>Privacy Act 1988</em> (Cth). If you would like to withdraw your consent to receiving marketing materials, please utilise the opt-out mechanisms provided in each of these communications. Alternatively, you can inform us of your preferences by sending an email to <a href="mailto:privacy@omameh.com.au">privacy@omameh.com.au</a>.</p>

        <h2 id="s8"><span class="num">08</span>Website Cookies</h2>
        <p>Cookies are small files sent from websites you visit to the device you are accessing the websites on. These small files track your browsing activity and store your setting choices and content preferences to facilitate a tailored and seamless web experience as they ensure you are served information that is personalised and relevant to you.</p>
        <p>Omameh Partners may use cookies or similar tracking technologies on our website to improve your browsing experience. Some of these cookies are necessary to ensure the functionality of our website, and some are used to capture your interactions with our website and recall your choices and preferences for your next session.</p>
        <p>You can disable cookies through your internet browser, but our website may not work as intended for you if you do so.</p>
        <p>Omameh Partners may also use cookies to collect data that may include personal information. We will handle any personal information collected by cookies in the same way that we handle all other personal information as described in this Policy.</p>

        <h2 id="s9"><span class="num">09</span>Third Party Links</h2>
        <p>The website may link to third party websites. Please note that any personal information collected, processed, used, retained or disclosed by these linked websites may not be in accordance with our Policy. We do not accept responsibility for the privacy practices of any of the third party websites, and recommend you read and review the respective Policy of these websites during your visit.</p>

        <h2 id="s10"><span class="num">10</span>Accuracy of Personal Information</h2>
        <p>Omameh Partners will take reasonable steps to ensure that the personal information we have is accurate, up to date and complete.</p>
        <p>If there are changes to the information we hold, you can notify us via email at <a href="mailto:privacy@omameh.com.au">privacy@omameh.com.au</a>.</p>
        <p>We are not responsible for any losses or damages that may arise as a result of incorrect, outdated or incomplete information.</p>

        <h2 id="s11"><span class="num">11</span>Your Rights</h2>
        <p>You have the right to:</p>
        <ol>
          <li>request a copy of the personal data we hold about you;</li>
          <li>request a removal of the personal data we hold about you;</li>
          <li>request a correction to any inaccurate personal data corrected; and</li>
          <li>object to or restrict our using your personal data.</li>
        </ol>
        <p>You may also make a complaint if you have a concern about our handling of your personal data or a potential breach of the Privacy Act or the APPs.</p>
        <p>If you wish to do any of the above please contact our Privacy Officer via:</p>

        <div class="privacy-contact">
          <h4>Privacy Officer · Omameh Partners Pty Ltd</h4>
          <dl>
            <dt>Email</dt><dd><a href="mailto:privacy@omameh.com.au"><strong>privacy@omameh.com.au</strong></a></dd>
            <dt>Post</dt><dd><strong>Privacy Officer</strong><br/>Omameh Partners Pty Ltd<br/>1/11 Calidore Street<br/>Bankstown NSW 2200</dd>
          </dl>
        </div>

        <p>We may request that you prove your identity by providing us with a copy of a valid form of identification in order for us to comply with our security obligations and to prevent unauthorised disclosure of data. We may also be unable to provide you with access to all the information we hold of you, and will provide you with a reason where full access may not be possible due to legal, regulatory, professional or other obligations.</p>
        <p>Omameh Partners will consider any requests or complaints we may receive, and endeavour to provide you a timely response — either within the time frame required by law (where applicable) or otherwise within a reasonable period, typically within 30 days.</p>
        <p>If you find our response to be unsatisfactory, we will provide you with information about the further steps you can take.</p>
        <p>Omameh Partners is committed to complying with the Notifiable Data Breaches scheme under Part IIIC of the <em>Privacy Act 1988</em> (Cth). In the event of an eligible data breach that is likely to result in serious harm to affected individuals, Omameh Partners will:</p>
        <ol>
          <li>notify the Office of the Australian Information Commissioner as soon as practicable, and in any event within 30 days of becoming aware of the breach; and</li>
          <li>notify affected individuals of the breach, the nature of the information involved, and the recommended steps they should take to protect themselves.</li>
        </ol>
        <p>We will maintain an internal data breach response plan and review it periodically to ensure it remains effective.</p>
      </article>
    </div>
  </div>
`;

export default function PrivacyPage() {
  return <RouteShell id="privacy" label="10 · Privacy" markup={__MARKUP} />;
}
