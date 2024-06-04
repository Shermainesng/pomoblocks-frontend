import '../../index.css'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }, { slug: ['tabs'] }]
}
 
export default function Page() {
  return <ClientOnly />
}