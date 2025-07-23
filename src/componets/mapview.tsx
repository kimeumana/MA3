import { useEffect } from "react"

const MapView = () => {
  useEffect(() => {
    // @ts-ignore
    const loader = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -1.286389, lng: 36.817223 },
      zoom: 12,
    })
  }, [])

  return (
    <div className="w-full h-[500px] rounded-md border border-gray-700" id="map">
      {/* Google Map loads here */}
    </div>
  )
}

export default MapView

