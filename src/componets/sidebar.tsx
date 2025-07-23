const Sidebar = () => {
  return (
    <aside className="w-60 bg-[#1e1e1e] p-4 border-r border-gray-800 space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>
      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded">CBD</button>
      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded">Westlands</button>
      <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded">Karen</button>
    </aside>
  )
}

export default Sidebar

