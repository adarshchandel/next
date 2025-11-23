import dynamic from "next/dynamic"

const LandingPage = dynamic(() => import('../components/pages/landingPage/landingPage'), { ssr: true })

export default function App() {
  return <LandingPage />
}
