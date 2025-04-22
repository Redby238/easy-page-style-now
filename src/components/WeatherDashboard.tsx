
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const tempData = [
  { time: "11 am", temp: 18 },
  { time: "12 pm", temp: 19 },
  { time: "1 pm", temp: 20 },
  { time: "2 pm", temp: 21 },
  { time: "3 pm", temp: 21 },
];

const cityComparisons = [
  { city: "Washington D.C", temp: 20 },
  { city: "Oklahoma City", temp: 17 },
  { city: "Philadelphia", temp: 14 },
  { city: "San Francisco", temp: 12 },
  { city: "New York City", temp: 10 },
  { city: "South Dakota", temp: -8 },
  { city: "North Dakota", temp: -9 },
];

export const WeatherDashboard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-light">Weather Dashboard</h1>
          <span className="text-xl">2023</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Weather Card */}
          <Card className="bg-white/10 backdrop-blur-lg border-none text-white p-6">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌡️</span>
                <div>
                  <p className="text-sm opacity-80">Oklahoma City, USA</p>
                  <p className="text-xs opacity-60">Wind: WSW 6mph</p>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                🔍
              </button>
            </div>

            <div className="mb-8">
              <div className="text-6xl font-light mb-4">20°</div>
              <div className="text-4xl opacity-80">9.8%</div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-full rounded ${
                      i < 3 ? "bg-red-500" : i < 4 ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-2">
                  <span>Safe</span>
                  <span>Dangerous</span>
                </div>
                <div className="flex justify-between text-xs opacity-60">
                  <div>• 0.00% - 0.9%</div>
                  <div>• 35% - 90%</div>
                </div>
              </div>
            </div>

            <div className="mt-8 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tempData}>
                  <XAxis
                    dataKey="time"
                    stroke="#ffffff40"
                    fontSize={12}
                  />
                  <YAxis stroke="#ffffff40" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#ffffff"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Weather Forecast Card */}
          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-lg border-none text-white p-6">
            <div className="mb-8">
              <h2 className="text-sm opacity-60 mb-2">Weather Forecast</h2>
              <div className="space-y-2">
                <h3 className="text-4xl font-light">Storm</h3>
                <h4 className="text-3xl font-light opacity-80">with Heavy Rain</h4>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span>🌤️</span>
                <span className="text-sm opacity-80">USA, Friday, jan 3, 2023, 8:45AM</span>
              </div>
              <p className="text-sm opacity-60">
                Variable clouds with snow showers. High 11F. Winds E at 10 to 20 mph. 
                Chance of snow 50%. Snow accumulations less than one inch.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {cityComparisons.slice(0, 4).map((city) => (
                <div key={city.city} className="text-center">
                  <div className="text-2xl font-light mb-2">{city.temp}°</div>
                  <div className="text-sm opacity-60">{city.city}</div>
                </div>
              ))}
            </div>

            <Progress value={progress} className="h-1 bg-white/20" />
          </Card>
        </div>
      </div>
    </div>
  );
};
