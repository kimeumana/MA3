const Header = () => {
  return (
    <header className="bg-[#111] px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wider">🚌 Ma3 Navigator</h1>
      <nav className="space-x-4">
        <button className="hover:text-yellow-400">Routes</button>
        <button className="hover:text-yellow-400">Prices</button>
        <button className="hover:text-yellow-400">Ratings</button>
      </nav>
    </header>
  )
}

export default Header


