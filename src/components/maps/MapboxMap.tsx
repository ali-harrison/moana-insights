'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Set your mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

interface MapboxMapProps {
  className?: string
}

export default function MapboxMap({ className }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    if (!mapContainer.current) return

    // Initialize the map centered on New Zealand
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Satellite view for coral monitoring
      center: [174.7633, -41.2865], // Wellington, NZ coordinates
      zoom: 5.5,
      minZoom: 4,
      maxZoom: 16,
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // Add coral reef monitoring stations when map loads
    map.current.on('load', () => {
      if (!map.current) return

      // Coral reef monitoring stations with ecosystem health data
      const monitoringStations = [
        {
          coordinates: [175.9057, -37.5339],
          name: 'Poor Knights Marine Reserve',
          status: 'healthy',
          coralCoverage: '85%',
          waterTemp: '16.2°C',
          bleachingRisk: 'Low',
          lastUpdate: '2 hours ago',
          species: 'Bryozoans, Sponges',
          ph: '8.1',
        },
        {
          coordinates: [176.2144, -37.787],
          name: 'Mayor Island (Tuhua)',
          status: 'moderate',
          coralCoverage: '72%',
          waterTemp: '18.1°C',
          bleachingRisk: 'Moderate',
          lastUpdate: '4 hours ago',
          species: 'Kelp Forest, Soft Corals',
          ph: '7.9',
        },
        {
          coordinates: [174.0299, -35.2269],
          name: 'Bay of Islands',
          status: 'degraded',
          coralCoverage: '45%',
          waterTemp: '19.3°C',
          bleachingRisk: 'High',
          lastUpdate: '1 hour ago',
          species: 'Reduced Diversity',
          ph: '7.8',
        },
        {
          coordinates: [174.7633, -41.2865],
          name: 'Wellington South Coast',
          status: 'healthy',
          coralCoverage: '78%',
          waterTemp: '14.8°C',
          bleachingRisk: 'Low',
          lastUpdate: '30 minutes ago',
          species: 'Bull Kelp, Caulerpa',
          ph: '8.0',
        },
        {
          coordinates: [173.2792, -41.737],
          name: 'Marlborough Sounds',
          status: 'moderate',
          coralCoverage: '68%',
          waterTemp: '15.5°C',
          bleachingRisk: 'Low',
          lastUpdate: '3 hours ago',
          species: 'Green Mussels, Kelp',
          ph: '7.95',
        },
      ]

      // Add markers for each monitoring station
      monitoringStations.forEach((station) => {
        // Create custom marker element based on ecosystem health
        const markerElement = document.createElement('div')
        markerElement.className = 'monitoring-station-marker'
        markerElement.style.width = '24px'
        markerElement.style.height = '24px'
        markerElement.style.borderRadius = '50%'
        markerElement.style.border = '3px solid white'
        markerElement.style.cursor = 'pointer'
        markerElement.style.boxShadow = '0 3px 6px rgba(0,0,0,0.4)'

        // Color-code by ecosystem health status
        const statusColors = {
          healthy: '#10B981', // Green
          moderate: '#F59E0B', // Yellow/Orange
          degraded: '#EF4444', // Red
        }
        markerElement.style.backgroundColor =
          statusColors[station.status as keyof typeof statusColors]

        // Add pulsing animation for active monitoring
        markerElement.style.animation = 'pulse 2s infinite'

        // Add pulse animation CSS
        const style = document.createElement('style')
        style.textContent = `
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `
        document.head.appendChild(style)

        // Create detailed ecosystem popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false,
        }).setHTML(`
          <div class="p-4 min-w-[280px]">
            <div class="border-b pb-2 mb-3">
              <h3 class="font-bold text-blue-900 text-lg">${station.name}</h3>
              <div class="flex items-center gap-2 mt-1">
                <div class="w-3 h-3 rounded-full" style="background-color: ${
                  statusColors[station.status as keyof typeof statusColors]
                }"></div>
                <span class="text-sm font-medium capitalize">${
                  station.status
                } Ecosystem</span>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div>
                <span class="text-gray-600">Coral Coverage:</span>
                <div class="font-semibold text-blue-800">${
                  station.coralCoverage
                }</div>
              </div>
              <div>
                <span class="text-gray-600">Water Temp:</span>
                <div class="font-semibold">${station.waterTemp}</div>
              </div>
              <div>
                <span class="text-gray-600">Bleaching Risk:</span>
                <div class="font-semibold ${
                  station.bleachingRisk === 'High'
                    ? 'text-red-600'
                    : station.bleachingRisk === 'Moderate'
                    ? 'text-yellow-600'
                    : 'text-green-600'
                }">${station.bleachingRisk}</div>
              </div>
              <div>
                <span class="text-gray-600">pH Level:</span>
                <div class="font-semibold">${station.ph}</div>
              </div>
            </div>
            
            <div class="mt-3 pt-2 border-t">
              <div class="text-sm">
                <span class="text-gray-600">Dominant Species:</span>
                <div class="font-medium text-green-700">${station.species}</div>
              </div>
              <div class="text-xs text-gray-500 mt-2">
                Last updated: ${station.lastUpdate}
              </div>
            </div>
            
            <div class="mt-3 pt-2 border-t">
              <button class="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                View Detailed Trends →
              </button>
            </div>
          </div>
        `)

        // Add marker to map
        new mapboxgl.Marker(markerElement)
          .setLngLat(station.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!)
      })
    })

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  )
}
