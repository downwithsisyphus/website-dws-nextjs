import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - downwithsisyphus.com</title>
      </Head>
      <Container>
        <article className="max-w-3xl mx-auto py-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-8">Terms of Service</h1>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">1. Services</h2>
          <p className="text-neutral-700 mb-4">
            Users must be at least 13 years old to access services. You may use
            and access the Services solely for your own personal, noncommercial
            use. You are responsible for maintaining the accuracy of your account
            information and must report any unauthorized access immediately.
            Services are governed by the accompanying Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">2. Intellectual Property; Restrictions on Use</h2>
          <p className="text-neutral-700 mb-4">
            Down With Sisyphus retains all intellectual property rights. Users
            cannot reverse engineer, modify, or commercially exploit the software
            or services. The company owns all ideas or suggestions for
            improvements to the Services, including enhancements, new
            functionality or concepts. All trademarks belong exclusively to Down
            With Sisyphus.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">3. Fees</h2>
          <p className="text-neutral-700 mb-4">
            Users are responsible for all registration and service fees.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">4. Use of the Services; User Content</h2>
          <p className="text-neutral-700 mb-4">
            Users warrant not to use services for illegal activities, impersonate
            others, interfere with systems, or create excessive bandwidth usage.
            User-generated content responsibility falls on the poster. Down With
            Sisyphus reserves the right to terminate accounts for violations
            without prior notice and without liability to you.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">5. Warranties; Disclaimers; Limitation of Liability</h2>
          <p className="text-neutral-700 mb-4">
            Services are provided &ldquo;as is&rdquo; with no warranties. In no
            event shall Down With Sisyphus be liable for any direct, special,
            consequential, or other loss. Liability is capped at amounts paid in
            the previous six months.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">6. Indemnification</h2>
          <p className="text-neutral-700 mb-4">
            Users must indemnify Down With Sisyphus regarding User Content and
            service use.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">7. Termination</h2>
          <p className="text-neutral-700 mb-4">
            Either party may terminate; certain sections survive termination.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">8. Maintenance</h2>
          <p className="text-neutral-700 mb-4">
            Down With Sisyphus may modify or discontinue services without notice.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">9. Governing Law; Jurisdiction</h2>
          <p className="text-neutral-700 mb-4">
            Florida law governs; disputes belong in Broward County courts.
          </p>

          <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4">10. Modifications</h2>
          <p className="text-neutral-700 mb-4">
            Down With Sisyphus may modify these terms at any time; continued use
            indicates acceptance.
          </p>
        </article>
      </Container>
    </Layout>
  )
}
