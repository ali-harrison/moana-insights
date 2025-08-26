'use client'

import { useEffect, useState } from 'react'

// Map loading skeleton
export function MapLoadingSkeleton() {
  return (
    <div className="w-full h-full bg-slate-100 rounded-lg animate-pulse relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-shimmer"></div>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 md:w-8 h-6 md:h-8 border-3 md:border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-slate-500 text-xs md:text-sm">
            Loading monitoring stations...
          </p>
        </div>
      </div>
    </div>
  )
}

// Chart loading skeleton
export function ChartLoadingSkeleton({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <div className="h-5 md:h-6 w-32 md:w-48 bg-slate-200 rounded animate-pulse"></div>
        <div className="h-3 md:h-4 w-20 md:w-24 bg-slate-100 rounded animate-pulse"></div>
      </div>

      <div className="h-48 md:h-64 bg-slate-50 rounded relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 animate-shimmer"></div>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 md:w-6 h-5 md:h-6 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-slate-400 text-xs">
              Loading {title.toLowerCase()}...
            </p>
          </div>
        </div>
      </div>

      {/* Animated bars at bottom */}
      <div className="mt-3 md:mt-4 flex gap-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 md:h-2 bg-slate-200 rounded flex-1 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

// Widget loading skeleton
export function WidgetLoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className="w-4 md:w-5 h-4 md:h-5 bg-slate-200 rounded animate-pulse"></div>
        <div className="h-4 md:h-5 w-24 md:w-32 bg-slate-200 rounded animate-pulse"></div>
      </div>
      <div className="space-y-2 md:space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="h-3 md:h-4 w-16 md:w-20 bg-slate-100 rounded animate-pulse"></div>
            <div className="h-3 md:h-4 w-8 md:w-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Simulated loading hook for demo purposes
export function useSimulatedLoading(duration: number = 2000) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return loading
}

// Staggered loading animation for dashboard
export function useStaggeredLoading() {
  const [loadingStates, setLoadingStates] = useState({
    map: true,
    widgets: true,
    charts: true,
  })

  useEffect(() => {
    // Map loads first
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, map: false }))
    }, 1500)

    // Widgets load second
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, widgets: false }))
    }, 2200)

    // Charts load last
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, charts: false }))
    }, 3000)
  }, [])

  return loadingStates
}
