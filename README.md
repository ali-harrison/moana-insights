# 🌊 Moana Insights: Coral Health Digital Twin

A real-time marine ecosystem monitoring dashboard that provides interactive visualization and predictive analytics for coral reef health across New Zealand's coastal waters.

## 📋 Overview

Moana Insights is a comprehensive environmental monitoring platform designed to track and analyze coral reef ecosystems. The application provides researchers, marine biologists, and conservationists with real-time data visualization, health metrics, and environmental alerts to support data-driven conservation efforts.

## ✨ Key Features

### 🗺️ Interactive Monitoring Dashboard
- **Live Mapbox Integration**: Satellite view with 5 active monitoring stations across New Zealand
- **Real-time Data Points**: Track coral coverage, water temperature, pH levels, and bleaching risk
- **Interactive Markers**: Color-coded health indicators (healthy, moderate, degraded) with detailed popup information
- **Station Details**: View dominant species, last update times, and comprehensive ecosystem metrics

### 📊 Data Visualization & Analytics
- **Water Temperature Trends**: Line chart comparing current year vs. baseline averages
- **Coral Health Metrics**: Bar charts showing coverage and health scores across all stations
- **Species Distribution**: Interactive pie chart displaying marine biodiversity
- **Environmental Alerts**: Real-time notifications for temperature anomalies and ecosystem changes

### 🎨 User Experience
- **Staggered Loading States**: Smooth skeleton loaders for progressive content rendering
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Live Data Indicators**: Pulsing animations showing active monitoring status
- **Professional UI**: Clean, modern interface with intuitive information hierarchy

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.0** - React framework with Turbopack for faster builds
- **React 19** - Latest version with improved performance
- **TypeScript** - Type-safe development

### Data Visualization
- **Mapbox GL** - Interactive satellite mapping
- **Recharts** - Responsive chart library for ecosystem data
- **Deck.gl** - WebGL-powered data visualization
- **D3.js** - Advanced data manipulation and visualization

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Custom Animations** - Fade-in, slide-in, and pulse effects

### Backend & Data
- **Prisma** - Next-generation ORM for database management
- **Supabase** - Backend-as-a-Service for data storage
- **TanStack Query (React Query)** - Powerful data fetching and caching

## 📸 Screenshots

> Screenshots will be added here

### Dashboard Overview
*Main dashboard showing interactive map and live ecosystem data*

### Monitoring Station Details
*Detailed popup view of a coral reef monitoring station*

### Analytics Charts
*Water temperature trends and coral health metrics visualization*

### Species Distribution
*Marine biodiversity breakdown across monitoring stations*

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Mapbox account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moana-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
   ```

   Get your free Mapbox token at: https://account.mapbox.com/access-tokens/

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
moana-insights/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main dashboard page
│   ├── components/
│   │   ├── maps/
│   │   │   └── MapboxMap.tsx   # Interactive map component
│   │   ├── charts/
│   │   │   └── EcosystemCharts.tsx  # Data visualization components
│   │   └── ui/
│   │       └── LoadingStates.tsx    # Skeleton loaders
│   └── ...
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🌟 Key Components

### MapboxMap
Renders an interactive satellite map with custom markers for each monitoring station. Features:
- Custom color-coded markers based on ecosystem health
- Detailed popups with real-time metrics
- Responsive design with zoom controls
- Pulsing animations for active stations

### EcosystemCharts
Three main visualization components:
- **WaterTemperatureTrends**: Tracks temperature changes over time
- **CoralHealthMetrics**: Compares coral coverage and health across stations
- **SpeciesDistribution**: Shows biodiversity breakdown

### LoadingStates
Provides smooth UX with staggered skeleton loaders that progressively reveal content.

## 📊 Data Model

The platform tracks the following metrics for each monitoring station:
- Coral coverage percentage
- Water temperature (°C)
- pH levels
- Bleaching risk assessment (Low/Moderate/High)
- Dominant species
- Last update timestamp
- Geographic coordinates

## 🎯 Use Cases

- **Marine Research**: Track long-term ecosystem changes and trends
- **Conservation Planning**: Identify areas requiring intervention
- **Educational Tool**: Visualize marine ecosystem health for students
- **Climate Monitoring**: Observe impacts of ocean warming on coral reefs
- **Data-Driven Policy**: Support environmental protection initiatives

## 🔮 Future Enhancements

- [ ] Historical data comparison and trend analysis
- [ ] Predictive modeling for bleaching events
- [ ] User authentication and personalized dashboards
- [ ] Export functionality for reports and datasets
- [ ] Integration with live sensor data via IoT devices
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced filtering and search capabilities

## 📝 License

This project is available for portfolio and educational purposes.

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Inspired by the need for accessible marine conservation tools
- Data visualization techniques informed by environmental science research

---

**Developed by** [Your Name]
**Portfolio**: [Your Portfolio URL]
**LinkedIn**: [Your LinkedIn]
**GitHub**: [Your GitHub]
