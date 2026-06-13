import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

const singletonTypes = new Set([
  "pageHomepageHero",
  "pageHomepageTheProblem",
  "pageHomepageWhatNellaDoes",
  "pageHomepageTheIntelligenceMoment",
  "pageHomepageHowItWorks",
  "pageHomepageGlowScoreTeaser",
  "pageHomepageSocialProof",
  "pageHomepagePricingSnapshot",
  "pageHomepageFAQTeaser",
  "pageHomepageFinalCTA",
  "pageWhyNellaOpeningClaim",
  "pageWhyNellaTheProblem",
  "pageWhyNellaTheVision",
  "pageWhyNellaWhatThisMeansInPractice",
  "pageWhyNellaWhoItIsFor",
  "pageWhyNellaFinalCTA",
  "pageWhatItDoesHero",
  "pageWhatItDoesTheFourstepFlow",
  "pageWhatItDoesThisIsNella",
  "pageMadeForHerHero",
  "pageMadeForHerWhichOneOfTheseIsYou",
  "pageMadeForHerNellaAdaptsToYou",
  "pageTheIntelligenceHero",
  "pageTheIntelligenceThreeThingsNellaKnows",
  "pageTheIntelligenceWhatNellaIsNot",
  "pagePricingHero",
  "pagePricingWhatIsInEach",
  "pagePricingWhatYouGetFor",
  "pagePricingFAQs",
  "pageAboutNellaHero",
  "pageAboutNellaThreeCardsLayout",
  "pageAboutNellaFinalCTA",
  "pageStoriesBlogHero",
  "pageStoriesBlogByCategory",
  "pageStoriesBlogTheLatest",
  "pageForSalonsHero",
  "pageForSalonsHowThePartnershipWorks",
  "pageSupportHero",
  "pageWaitlistHero",
  "pageDownloadHero",
  "pageThanksHero",
  "pagePrivacyPolicyInformationWeCollect",
  "pagePrivacyPolicyHowWeUseYourInformation",
  "pagePrivacyPolicyPlainEnglishCommitments",
  "pagePrivacyPolicyYourRightsGDPR",
  "pagePrivacyPolicyContactUs",
  "pageTermsOfServiceAcceptanceOfTerms",
  "pageTermsOfServiceSubscriptionsAndPayments",
  "pageTermsOfServiceDisclaimer",
  "pageTermsOfServiceTermination",
  "pageTermsOfServiceGoverningLaw",
  "pageCookiesPolicyWhatAreCookies",
  "pageCookiesPolicyCookiesWeUse",
  "pageCookiesPolicyYourChoices",
  "siteSettingsNavBar",
  "siteSettingsFooter",
  "siteSettings"
]);


// Helper function
const section = (S: any, title: string, schemaType: string, documentId: string) =>
  S.listItem()
    .title(title)
    .id(documentId)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(documentId)
        .title(title)
    );


export default defineConfig({
  name: 'default',
  title: 'nella marketing studio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ── Pages ────────────────────────────────────────────────────────
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    // ── Homepage ─────────────────────────────────────────────
                    S.listItem()
                      .title("Homepage")
                      .child(
                        S.list()
                          .title("Homepage")
                          .items([
                            section(S, "Hero", "pageHomepageHero", "page-homepage-hero"),
                            section(S, "The Problem", "pageHomepageTheProblem", "page-homepage-the-problem"),
                            section(S, "What Nella Does", "pageHomepageWhatNellaDoes", "page-homepage-what-nella-does"),
                            section(S, "The Intelligence Moment", "pageHomepageTheIntelligenceMoment", "page-homepage-the-intelligence-moment"),
                            section(S, "How it Works", "pageHomepageHowItWorks", "page-homepage-how-it-works"),
                            section(S, "Glow Score Teaser", "pageHomepageGlowScoreTeaser", "page-homepage-glow-score-teaser"),
                            section(S, "Social Proof", "pageHomepageSocialProof", "page-homepage-social-proof"),
                            section(S, "Pricing Snapshot", "pageHomepagePricingSnapshot", "page-homepage-pricing-snapshot"),
                            section(S, "FAQ Teaser", "pageHomepageFAQTeaser", "page-homepage-faq-teaser"),
                            section(S, "Final CTA", "pageHomepageFinalCTA", "page-homepage-final-cta")
                          ])
                      ),

                    // ── Why Nella ─────────────────────────────────────────────
                    S.listItem()
                      .title("Why Nella")
                      .child(
                        S.list()
                          .title("Why Nella")
                          .items([
                            section(S, "Opening Claim", "pageWhyNellaOpeningClaim", "page-why-nella-opening-claim"),
                            section(S, "The Problem", "pageWhyNellaTheProblem", "page-why-nella-the-problem"),
                            section(S, "The Vision", "pageWhyNellaTheVision", "page-why-nella-the-vision"),
                            section(S, "What this means in practice", "pageWhyNellaWhatThisMeansInPractice", "page-why-nella-what-this-means-in-practice"),
                            section(S, "Who it is for", "pageWhyNellaWhoItIsFor", "page-why-nella-who-it-is-for"),
                            section(S, "Final CTA", "pageWhyNellaFinalCTA", "page-why-nella-final-cta")
                          ])
                      ),

                    // ── What It Does ─────────────────────────────────────────────
                    S.listItem()
                      .title("What It Does")
                      .child(
                        S.list()
                          .title("What It Does")
                          .items([
                            section(S, "Hero", "pageWhatItDoesHero", "page-what-it-does-hero"),
                            section(S, "The four-step flow", "pageWhatItDoesTheFourstepFlow", "page-what-it-does-the-fourstep-flow"),
                            section(S, "this is nella", "pageWhatItDoesThisIsNella", "page-what-it-does-this-is-nella")
                          ])
                      ),

                    // ── Made For Her ─────────────────────────────────────────────
                    S.listItem()
                      .title("Made For Her")
                      .child(
                        S.list()
                          .title("Made For Her")
                          .items([
                            section(S, "Hero", "pageMadeForHerHero", "page-made-for-her-hero"),
                            section(S, "which one of these is you?", "pageMadeForHerWhichOneOfTheseIsYou", "page-made-for-her-which-one-of-these-is-you"),
                            section(S, "nella adapts to you.", "pageMadeForHerNellaAdaptsToYou", "page-made-for-her-nella-adapts-to-you")
                          ])
                      ),

                    // ── The Intelligence ─────────────────────────────────────────────
                    S.listItem()
                      .title("The Intelligence")
                      .child(
                        S.list()
                          .title("The Intelligence")
                          .items([
                            section(S, "Hero", "pageTheIntelligenceHero", "page-the-intelligence-hero"),
                            section(S, "three things nella knows.", "pageTheIntelligenceThreeThingsNellaKnows", "page-the-intelligence-three-things-nella-knows"),
                            section(S, "what nella is not.", "pageTheIntelligenceWhatNellaIsNot", "page-the-intelligence-what-nella-is-not")
                          ])
                      ),

                    // ── Pricing ─────────────────────────────────────────────
                    S.listItem()
                      .title("Pricing")
                      .child(
                        S.list()
                          .title("Pricing")
                          .items([
                            section(S, "Hero", "pagePricingHero", "page-pricing-hero"),
                            section(S, "what is in each.", "pagePricingWhatIsInEach", "page-pricing-what-is-in-each"),
                            section(S, "what you get for £4.99.", "pagePricingWhatYouGetFor", "page-pricing-what-you-get-for"),
                            section(S, "FAQs", "pagePricingFAQs", "page-pricing-faqs")
                          ])
                      ),

                    // ── About Nella ─────────────────────────────────────────────
                    S.listItem()
                      .title("About Nella")
                      .child(
                        S.list()
                          .title("About Nella")
                          .items([
                            section(S, "Hero", "pageAboutNellaHero", "page-about-nella-hero"),
                            section(S, "Three cards layout", "pageAboutNellaThreeCardsLayout", "page-about-nella-three-cards-layout"),
                            section(S, "Final CTA", "pageAboutNellaFinalCTA", "page-about-nella-final-cta")
                          ])
                      ),

                    // ── Stories / Blog ─────────────────────────────────────────────
                    S.listItem()
                      .title("Stories / Blog")
                      .child(
                        S.list()
                          .title("Stories / Blog")
                          .items([
                            section(S, "Hero", "pageStoriesBlogHero", "page-stories-blog-hero"),
                            section(S, "by category.", "pageStoriesBlogByCategory", "page-stories-blog-by-category"),
                            section(S, "the latest.", "pageStoriesBlogTheLatest", "page-stories-blog-the-latest")
                          ])
                      ),

                    // ── For Salons ─────────────────────────────────────────────
                    S.listItem()
                      .title("For Salons")
                      .child(
                        S.list()
                          .title("For Salons")
                          .items([
                            section(S, "Hero", "pageForSalonsHero", "page-for-salons-hero"),
                            section(S, "how the partnership works.", "pageForSalonsHowThePartnershipWorks", "page-for-salons-how-the-partnership-works")
                          ])
                      ),

                    // ── Support ─────────────────────────────────────────────
                    S.listItem()
                      .title("Support")
                      .child(
                        S.list()
                          .title("Support")
                          .items([
                            section(S, "Hero", "pageSupportHero", "page-support-hero")
                          ])
                      ),

                    // ── Waitlist ─────────────────────────────────────────────
                    S.listItem()
                      .title("Waitlist")
                      .child(
                        S.list()
                          .title("Waitlist")
                          .items([
                            section(S, "Hero", "pageWaitlistHero", "page-waitlist-hero")
                          ])
                      ),

                    // ── Download ─────────────────────────────────────────────
                    S.listItem()
                      .title("Download")
                      .child(
                        S.list()
                          .title("Download")
                          .items([
                            section(S, "Hero", "pageDownloadHero", "page-download-hero")
                          ])
                      ),

                    // ── Thanks ─────────────────────────────────────────────
                    S.listItem()
                      .title("Thanks")
                      .child(
                        S.list()
                          .title("Thanks")
                          .items([
                            section(S, "Hero", "pageThanksHero", "page-thanks-hero")
                          ])
                      ),

                    // ── Privacy Policy ─────────────────────────────────────────────
                    S.listItem()
                      .title("Privacy Policy")
                      .child(
                        S.list()
                          .title("Privacy Policy")
                          .items([
                            section(S, "1. Information We Collect", "pagePrivacyPolicyInformationWeCollect", "page-privacy-policy-information-we-collect"),
                            section(S, "2. How We Use Your Information", "pagePrivacyPolicyHowWeUseYourInformation", "page-privacy-policy-how-we-use-your-information"),
                            section(S, "3. Plain-English Commitments", "pagePrivacyPolicyPlainEnglishCommitments", "page-privacy-policy-plainenglish-commitments"),
                            section(S, "4. Your Rights (GDPR)", "pagePrivacyPolicyYourRightsGDPR", "page-privacy-policy-your-rights-gdpr"),
                            section(S, "5. Contact Us", "pagePrivacyPolicyContactUs", "page-privacy-policy-contact-us")
                          ])
                      ),

                    // ── Terms of Service ─────────────────────────────────────────────
                    S.listItem()
                      .title("Terms of Service")
                      .child(
                        S.list()
                          .title("Terms of Service")
                          .items([
                            section(S, "1. Acceptance of Terms", "pageTermsOfServiceAcceptanceOfTerms", "page-terms-of-service-acceptance-of-terms"),
                            section(S, "2. Subscriptions and Payments", "pageTermsOfServiceSubscriptionsAndPayments", "page-terms-of-service-subscriptions-and-payments"),
                            section(S, "3. Disclaimer", "pageTermsOfServiceDisclaimer", "page-terms-of-service-disclaimer"),
                            section(S, "4. Termination", "pageTermsOfServiceTermination", "page-terms-of-service-termination"),
                            section(S, "5. Governing Law", "pageTermsOfServiceGoverningLaw", "page-terms-of-service-governing-law")
                          ])
                      ),

                    // ── Cookies Policy ─────────────────────────────────────────────
                    S.listItem()
                      .title("Cookies Policy")
                      .child(
                        S.list()
                          .title("Cookies Policy")
                          .items([
                            section(S, "1. What Are Cookies?", "pageCookiesPolicyWhatAreCookies", "page-cookies-policy-what-are-cookies"),
                            section(S, "2. Cookies We Use", "pageCookiesPolicyCookiesWeUse", "page-cookies-policy-cookies-we-use"),
                            section(S, "3. Your Choices", "pageCookiesPolicyYourChoices", "page-cookies-policy-your-choices")
                          ])
                      )
                  ])
              ),
            S.divider(),
            // ── Content Models ───────────────────────────────────────────────
            S.listItem()
              .title('Content Models')
              .child(
                S.list()
                  .title('Content Models')
                  .items([
                    S.documentTypeListItem('audience').title('Audiences'),
                    S.documentTypeListItem('benefit').title('Benefits'),
                    S.documentTypeListItem('intelligence').title('Intelligence'),
                    S.documentTypeListItem('faqCategory').title('FAQ Categories'),
                    S.documentTypeListItem('faqItem').title('FAQ Items'),
                    S.documentTypeListItem('testimonial').title('Testimonials'),
                    S.documentTypeListItem('waitlistSignup').title('Waitlist Signups'),
                    S.documentTypeListItem('salonEnquiry').title('Salon Enquiries'),
                    S.documentTypeListItem('salonPartner').title('Salon Partners'),
                  ])
              ),
            S.divider(),
            // ── Blog ─────────────────────────────────────────────────────────
            S.listItem()
              .title('Blog')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.documentTypeListItem('post').title('Posts'),
                    S.documentTypeListItem('article').title('Articles'),
                    S.documentTypeListItem('author').title('Authors'),
                    S.documentTypeListItem('category').title('Categories'),
                    S.documentTypeListItem('pressItem').title('Press Items'),
                  ])
              ),
            S.divider(),
            // ── Site Settings ────────────────────────────────────────────────
            S.listItem()
              .title('Site Settings')
              .child(
                S.list()
                  .title('Site Settings')
                  .items([
                    section(S, "Nav Bar", "siteSettingsNavBar", "site-settings-nav-bar"),
                    section(S, "Footer", "siteSettingsFooter", "site-settings-footer"),
                    section(S, "General", "siteSettings", "siteSettings")
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
})
