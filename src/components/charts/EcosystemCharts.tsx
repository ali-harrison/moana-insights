'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

// Mock ecosystem data - in real app this would come from your database
const waterTempData = [
  { month: 'Jan', temp: 18.2, baseline: 17.8 },
  { month: 'Feb', temp: 19.1, baseline: 18.5 },
  { month: 'Mar', temp: 17.8, baseline: 17.2 },
  { month: 'Apr', temp: 16.4, baseline: 15.9 },
  { month: 'May', temp: 14.8, baseline: 14.5 },
  { month: 'Jun', temp: 13.2, baseline: 13.1 },
  { month: 'Jul', temp: 12.9, baseline: 12.8 },
  { month: 'Aug', temp: 13.4, baseline: 13.2 },
  { month: 'Sep', temp: 14.7, baseline: 14.1 },
  { month: 'Oct', temp: 15.8, baseline: 15.2 },
  { month: 'Nov', temp: 17.2, baseline: 16.5 },
  { month: 'Dec', temp: 18.8, baseline: 17.9 },
]

const coralHealthData = [
  { station: 'Poor Knights', coverage: 85, health: 92 },
  { station: 'Mayor Island', coverage: 72, health: 78 },
  { station: 'Bay of Islands', coverage: 45, health: 52 },
  { station: 'Wellington', coverage: 78, health: 84 },
  { station: 'Marlborough', coverage: 68, health: 75 },
]

const speciesData = [
  { name: 'Kelp Forest', value: 35, color: '#10B981' },
  { name: 'Soft Corals', value: 28, color: '#3B82F6' },
  { name: 'Sponges', value: 18, color: '#8B5CF6' },
  { name: 'Bryozoans', value: 12, color: '#F59E0B' },
  { name: 'Other', value: 7, color: '#6B7280' },
]

export function WaterTemperatureTrends() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Water Temperature Trends
        </h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Current Year</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Baseline Average</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={waterTempData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            label={{
              value: 'Temperature (°C)',
              angle: -90,
              position: 'insideLeft',
            }}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <Tooltip
            formatter={(value, name) => [
              `${value}°C`,
              name === 'temp' ? 'Current' : 'Baseline',
            ]}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="baseline"
            stroke="#9CA3AF"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm text-yellow-800">
          <span className="font-medium">Climate Alert:</span> Water temperatures
          are averaging 0.4°C above baseline this year, indicating warming trend
          across monitoring stations.
        </p>
      </div>
    </div>
  )
}

export function CoralHealthMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Coral Coverage & Health by Station
        </h3>
        <div className="text-sm text-gray-500">Updated 2 hours ago</div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={coralHealthData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="station"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            label={{
              value: 'Percentage (%)',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip
            formatter={(value, name) => [
              `${value}%`,
              name === 'coverage' ? 'Coverage' : 'Health Score',
            ]}
          />
          <Bar dataKey="coverage" fill="#10B981" name="coverage" />
          <Bar dataKey="health" fill="#3B82F6" name="health" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          <div className="text-sm text-green-700">
            <span className="font-medium">Best Performing:</span>
            <div>Poor Knights Marine Reserve</div>
            <div className="text-xs">85% coverage, 92% health</div>
          </div>
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded">
          <div className="text-sm text-red-700">
            <span className="font-medium">Needs Attention:</span>
            <div>Bay of Islands</div>
            <div className="text-xs">45% coverage, 52% health</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SpeciesDistribution() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Marine Species Distribution
        </h3>
        <div className="text-sm text-gray-500">
          Across all monitoring stations
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ResponsiveContainer width="60%" height={200}>
          <PieChart>
            <Pie
              data={speciesData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
              labelLine={false}
            >
              {speciesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Coverage']} />
          </PieChart>
        </ResponsiveContainer>

        <div className="w-1/3 space-y-2">
          {speciesData.map((species, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: species.color }}
              ></div>
              <div className="text-sm">
                <div className="font-medium">{species.name}</div>
                <div className="text-gray-500">{species.value}% coverage</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
        <p className="text-sm text-blue-800">
          <span className="font-medium">Ecosystem Insight:</span> Kelp forests
          dominate healthy stations, while degraded areas show reduced species
          diversity.
        </p>
      </div>
    </div>
  )
}
