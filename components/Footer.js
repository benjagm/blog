import IconTwitter from './icons/Twitter'
import IconGithub from './icons/Github'
// import IconYoutube from './icons/YouTube'
// import IconLinkedIn from './icons/LinkedIn'
// import NewsletterSubscribe from './NewsletterSubscribe'
// import Container from './layout/Container'

export default function Footer() {
  return (
    <div className="bg-white mt-12">
      {/* <div className="bg-primary-900 py-12">
        <Container wide>
          <NewsletterSubscribe formName="form 2" dark />
        </Container>
      </div> */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href="https://json-schema.org" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://json-schema.org/specification" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Specification
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://json-schema.org/learn" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Learn
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://json-schema.org/implementations" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Implementations
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://json-schema.org/blog" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="https://json-schema.org/slack" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Join our Slack
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center">
          <a href="https://twitter.com/jsonschema" target="_blank" className="text-gray-400 hover:text-blue-500" rel="noreferrer">
            <span className="sr-only">Twitter</span>
            <IconTwitter className="h-6 w-6" />
          </a>
          <a href="https://github.com/json-schema-org" target="_blank" className="ml-6 text-gray-400 hover:text-gray-500" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <IconGithub className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            Made with <span className="font-mono text-pink-500">:love:</span> by the JSON Schema team.
          </p>
        </div>
      </div>
    </div>
  )
}