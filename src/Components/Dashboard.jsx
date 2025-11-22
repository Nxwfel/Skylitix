import { FaSun, FaTemperatureHigh, FaTint, FaWind, FaMicroscope, FaExclamationTriangle, FaLeaf } from 'react-icons/fa';
import { WiStrongWind, WiHumidity, WiBarometer, WiDaySunny, WiUmbrella } from 'react-icons/wi';
import { GiDew, GiThermometer, GiFertilizerBag } from 'react-icons/gi';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedField, setSelectedField] = useState('Field A');

  // Mock data — replace with real API later
  const currentWeather = {
    temp: 24,
    humidity: 68,
    wind: 12,
    uv: 8.2,
    soilTemp: 19,
    soilMoisture: 32,
    pressure: 1012,
    dewPoint: 15,
    et0: 4.8,
    rainToday: 0,
    gdd: 120
  };

  const forecast = [
    { hour: '6 AM', temp: 18, precip: 0, uv: 1, soilMoisture: 35 },
    { hour: '9 AM', temp: 21, precip: 0, uv: 4, soilMoisture: 34 },
    { hour: '12 PM', temp: 26, precip: 0, uv: 9, soilMoisture: 32 },
    { hour: '3 PM', temp: 28, precip: 5, uv: 7, soilMoisture: 30 },
    { hour: '6 PM', temp: 24, precip: 15, uv: 2, soilMoisture: 28 },
  ];

  const alerts = [
    { type: 'warning', message: 'High UV Index (8.2) at noon — wear protective clothing.' },
    { type: 'info', message: 'Favorable spray window: 6–9 AM (low wind, no rain).' },
    { type: 'risk', message: 'Fungal risk elevated after 4 PM (high humidity + dew).' },
  ];

  const fields = ['Field A', 'Field B', 'Orchard North', 'Greenhouse 1'];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">🌾 Farmer's Weather Dashboard</h1>
        <p className="text-gray-600">Real-time insights for smart field decisions</p>
      </header>

      {/* Field Selector */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <label className="font-medium text-gray-700">📍 Select Field:</label>
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          {fields.map(field => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="🌡️ Air Temp"
          value={`${currentWeather.temp}°C`}
          subtext="Feels like 26°C"
          color="bg-blue-500"
        />
        <SummaryCard
          title="💧 Soil Moisture"
          value={`${currentWeather.soilMoisture}%`}
          subtext="0–20 cm depth"
          color="bg-green-500"
        />
        <SummaryCard
          title="☀️ UV Index"
          value={currentWeather.uv}
          subtext={getUVRisk(currentWeather.uv)}
          color={getUVColor(currentWeather.uv)}
        />
        <SummaryCard
          title="🌧️ Rain Today"
          value={`${currentWeather.rainToday} mm`}
          subtext="Next 24h: 5 mm"
          color="bg-cyan-500"
        />
      </div>

      {/* Alerts Banner */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <FaExclamationTriangle className="mr-2 text-yellow-500" />
          Today's Field Alerts
        </h2>
        <div className="space-y-2">
          {alerts.map((alert, i) => (
            <AlertBanner key={i} {...alert} />
          ))}
        </div>
      </div>

      {/* Charts Section (Placeholders — ready for Chart.js/d3) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hourly Forecast */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center">
            <WiDaySunny className="mr-2 text-orange-500" />
            Hourly Forecast (Next 12h)
          </h3>
          <div className="space-y-4">
            {forecast.map((hour, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-medium w-16">{hour.hour}</span>
                <div className="flex items-center gap-3 flex-1">
                  <span className="w-12 text-center font-mono">{hour.temp}°C</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>🌧️ {hour.precip}%</span>
                      <span>☀️ UV{hour.uv}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${Math.min(100, hour.soilMoisture)}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">Soil: {hour.soilMoisture}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agri-Metrics */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center">
            <FaLeaf className="mr-2 text-green-600" />
            Agricultural Metrics
          </h3>
          <div className="space-y-4">
            <MetricRow
              icon={<GiThermometer className="text-red-500" />}
              label="Soil Temp (0–10 cm)"
              value={`${currentWeather.soilTemp}°C`}
              status="optimal"
            />
            <MetricRow
              icon={<GiDew className="text-blue-500" />}
              label="Dew Point"
              value={`${currentWeather.dewPoint}°C`}
              status={currentWeather.dewPoint > 14 ? 'high' : 'low'}
            />
            <MetricRow
              icon={<GiFertilizerBag className="text-green-600" />}
              label="Growing Degree Days (GDD)"
              value={currentWeather.gdd}
              unit="°C"
              subtext="Base 10°C — Cumulative"
            />
            <MetricRow
              icon={<FaTint className="text-cyan-500" />}
              label="Evapotranspiration (ET₀)"
              value={`${currentWeather.et0} mm/day`}
              subtext="FAO Penman-Monteith"
            />
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mt-8">
        Data updated every 15 min • Forecast powered by Open-Meteo • For field-level accuracy, integrate soil sensors.
      </div>
    </div>
  );
}

// ✨ Helper Components

function SummaryCard({ title, value, subtext, color }) {
  return (
    <div className={`${color} text-white rounded-xl shadow-lg p-5`}>
      <h3 className="text-sm opacity-90 font-medium">{title}</h3>
      <p className="text-2xl md:text-3xl font-bold mt-1">{value}</p>
      <p className="text-xs opacity-90 mt-1">{subtext}</p>
    </div>
  );
}

function AlertBanner({ type, message }) {
  const styles = {
    warning: 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800',
    risk: 'bg-red-100 border-l-4 border-red-500 text-red-800',
    info: 'bg-blue-100 border-l-4 border-blue-500 text-blue-800'
  };

  return (
    <div className={`p-3 rounded-r-lg rounded-b-lg ${styles[type]}`}>
      <div className="flex">
        <span className="font-medium capitalize mr-2">{type}:</span>
        <span>{message}</span>
      </div>
    </div>
  );
}

function MetricRow({ icon, label, value, unit = '', subtext, status }) {
  let statusColor = 'text-gray-600';
  if (status === 'optimal') statusColor = 'text-green-600 font-medium';
  if (status === 'high') statusColor = 'text-orange-600 font-medium';
  if (status === 'low') statusColor = 'text-blue-600';

  return (
    <div className="flex items-start">
      <div className="mt-1 mr-3 text-xl">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <span className="text-gray-700">{label}</span>
          <span className={`font-mono ${statusColor}`}>
            {value}
            {unit && <span className="text-gray-500 ml-1">{unit}</span>}
          </span>
        </div>
        {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
      </div>
    </div>
  );
}

// Helpers
function getUVRisk(uv) {
  if (uv < 3) return 'Low risk';
  if (uv < 6) return 'Moderate';
  if (uv < 8) return 'High — protection needed';
  if (uv < 11) return 'Very High — avoid midday sun';
  return 'Extreme — stay indoors';
}

function getUVColor(uv) {
  if (uv < 3) return 'bg-green-500';
  if (uv < 6) return 'bg-yellow-500';
  if (uv < 8) return 'bg-orange-500';
  if (uv < 11) return 'bg-red-500';
  return 'bg-purple-700';
}