'use client'

import { MapPin, BarChart3, Users, AlertTriangle } from 'lucide-react'
import MapboxMap from '@/components/maps/MapboxMap'
import {
  WaterTemperatureTrends,
  CoralHealthMetrics,
  SpeciesDistribution,
} from '@/components/charts/EcosystemCharts'
import {
  MapLoadingSkeleton,
  ChartLoadingSkeleton,
  WidgetLoadingSkeleton,
  useStaggeredLoading,
} from '@/components/ui/LoadingStates'

export default function Dashboard() {
  const loadingStates = useStaggeredLoading()
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            Moana Insights: Coral Health Digital Twin
          </h1>
          <p className="text-blue-200 mt-2">
            Real-time Ecosystem Monitoring & Predictive Analytics
          </p>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section - Large */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 animate-fadeInUp">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-blue-600" />
              <h2 className="text-xl font-semibold">
                Interactive Monitoring Stations
              </h2>
              {!loadingStates.map && (
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-gentle"></div>
                  <span className="text-sm text-green-600 font-medium">
                    Live Data
                  </span>
                </div>
              )}
            </div>
            {loadingStates.map ? (
              <MapLoadingSkeleton />
            ) : (
              <div className="animate-fadeInUp delay-300">
                <MapboxMap className="h-96" />
              </div>
            )}
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-6">
            {/* Live Ecosystem Data Widget */}
            {loadingStates.widgets ? (
              <WidgetLoadingSkeleton />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 animate-slideInRight delay-100">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="text-green-600" />
                  <h3 className="text-lg font-semibold">Live Ecosystem Data</h3>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse-gentle"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      Avg Water Temp
                    </span>
                    <span className="font-medium">15.8°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      Coral Coverage
                    </span>
                    <span className="font-medium">71.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">pH Level</span>
                    <span className="font-medium">7.96</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      Active Stations
                    </span>
                    <span className="font-medium">5/5</span>
                  </div>
                </div>
              </div>
            )}

            {/* Research Updates */}
            {loadingStates.widgets ? (
              <WidgetLoadingSkeleton />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 animate-slideInRight delay-200">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-purple-600" />
                  <h3 className="text-lg font-semibold">Research Updates</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">Latest Field Reports</p>
                    <p className="text-slate-600">
                      Poor Knights - Kelp recovery noted
                    </p>
                    <p className="text-slate-600">
                      Mayor Island - New species sighting
                    </p>
                    <p className="text-slate-600">
                      Wellington - pH levels stabilizing
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Environmental Alerts */}
            {loadingStates.widgets ? (
              <WidgetLoadingSkeleton />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 animate-slideInRight delay-300">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-red-600" />
                  <h3 className="text-lg font-semibold">
                    Environmental Alerts
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                    <p className="text-sm text-yellow-800">
                      Water temp +0.4°C above baseline
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-2">
                    <p className="text-sm text-red-800">
                      Bay of Islands coral degradation
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-2">
                    <p className="text-sm text-blue-800">
                      Poor Knights kelp recovery noted
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ecosystem Analysis Charts */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loadingStates.charts ? (
            <>
              <ChartLoadingSkeleton title="Water Temperature Trends" />
              <ChartLoadingSkeleton title="Coral Health Metrics" />
            </>
          ) : (
            <>
              <div className="animate-fadeInUp delay-100">
                <WaterTemperatureTrends />
              </div>
              <div className="animate-fadeInUp delay-200">
                <CoralHealthMetrics />
              </div>
            </>
          )}
        </div>

        {/* Species Distribution */}
        <div className="mt-6">
          {loadingStates.charts ? (
            <ChartLoadingSkeleton title="Marine Species Distribution" />
          ) : (
            <div className="animate-fadeInUp delay-300">
              <SpeciesDistribution />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
