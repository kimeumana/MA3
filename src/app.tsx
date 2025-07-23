import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MapView from "./components/MapView"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4">
          <MapView />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App


