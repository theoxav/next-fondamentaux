// 🐶 Importe le composant `Link` de `Next`

import Link from 'next/dist/client/link'

// 🤖 import Link from 'next/link'
const Page = () => {
  return (
    <div>
      <p>Je suis un développeur FullStack Next</p>
      {/* ⛏️ Supprime la balise `<a>` et remplace la par le composant `<Link>`  */}
      <Link href="/exercise/account">Account</Link>
    </div>
  )
}

export default Page
