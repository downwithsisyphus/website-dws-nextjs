import Container from './container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col items-center">
          <div className="flex gap-6 mb-4">
            <Link href="/terms-of-service" className="hover:underline text-sm">
              Terms Of Service
            </Link>
            <Link href="/privacy-policy" className="hover:underline text-sm">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} downwithsisyphus.com. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
