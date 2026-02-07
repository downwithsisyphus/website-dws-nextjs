import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - downwithsisyphus.com</title>
      </Head>
      <Container>
        <article className="max-w-3xl mx-auto py-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
          <p className="text-lg text-neutral-600 mb-10">
            Down With Sisyphus (&ldquo;downwithsisyphus.com&rdquo;) respects
            your privacy regarding information collected through our website and
            services.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Information Collection</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">Direct Collection</h3>
          <p className="text-neutral-700 mb-4">
            We may gather name, gender, email, physical address, and birth date
            when you access certain services. Credit card and billing information
            may be required for purchases.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Social Network Integration</h3>
          <p className="text-neutral-700 mb-4">
            Users logging in via social networks grant permission to access basic
            information (your name, profile picture, user ID, list of friends)
            and email address. We store this data alongside other collected
            information.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Automatic Collection</h3>
          <p className="text-neutral-700 mb-4">
            Our service collects domain names, browser types, IP addresses,
            device IDs, operating system details, and usage duration through
            cookies and tracking technologies.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Contests and Surveys</h3>
          <p className="text-neutral-700 mb-4">
            Personal information may be gathered through promotional activities
            and online surveys.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Data Usage</h2>
          <p className="text-neutral-700 mb-2">Information serves these purposes:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-4 space-y-1">
            <li>Service delivery and experience enhancement</li>
            <li>Content personalization and location customization</li>
            <li>Marketing communications and promotional notifications</li>
            <li>Application improvement and analytics</li>
          </ul>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Information Sharing</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">Third Parties</h3>
          <p className="text-neutral-700 mb-4">
            We may disclose data to service providers, business partners, and
            analytics platforms for usage evaluation.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Business Circumstances</h3>
          <p className="text-neutral-700 mb-4">
            Information may transfer during acquisitions, mergers, or bankruptcy
            proceedings.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Legal Obligations</h3>
          <p className="text-neutral-700 mb-4">
            Data disclosure occurs when required to do so by law, including in
            response to a court order, subpoena, search warrant, or other legal
            process.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Advertising</h3>
          <p className="text-neutral-700 mb-4">
            Third-party advertisers may receive aggregate, non-personally
            identifiable information.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">User Controls</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">Marketing Opt-Out</h3>
          <p className="text-neutral-700 mb-4">
            You can decline marketing communications, though service-related
            emails will continue. Processing takes up to 10 business days.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Children&apos;s Privacy</h3>
          <p className="text-neutral-700 mb-4">
            Our services are not targeted to children. We do not knowingly permit
            children who are under the age of 13 to sign up for accounts.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">User-Generated Content</h3>
          <p className="text-neutral-700 mb-4">
            Posted comments may become publicly visible across the platform.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Data Protection &amp; International Use</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">Security Measures</h3>
          <p className="text-neutral-700 mb-4">
            We implement reasonable security measures but cannot guarantee
            absolute protection.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">International Transfer</h3>
          <p className="text-neutral-700 mb-4">
            Personal information will be transferred to and processed in the
            United States, a jurisdiction whose data protection laws may not
            provide equivalent legal protections to those in your home country.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Data Rights</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3">Access and Deletion</h3>
          <p className="text-neutral-700 mb-4">
            Users requesting data access or deletion should contact{' '}
            <a href="mailto:support@downwithsisyphus.com" className="underline hover:text-blue-600">
              support@downwithsisyphus.com
            </a>
            .
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Policy Updates</h2>
          <p className="text-neutral-700 mb-4">
            Changes will be announced and continued use indicates acceptance.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">Contact</h2>
          <p className="text-neutral-700 mb-4">
            For inquiries, deletions, or deactivation requests, contact{' '}
            <a href="mailto:support@downwithsisyphus.com" className="underline hover:text-blue-600">
              support@downwithsisyphus.com
            </a>
            .
          </p>
        </article>
      </Container>
    </Layout>
  )
}
