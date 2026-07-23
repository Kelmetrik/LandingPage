import {
  BarChart3,
  Clock,
  Cpu,
  Factory,
  Mail,
  MessageSquare,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import logoImage from "./assets/logo.png";

// Componente de Pareto Chart
const ParetoChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  const defectData = [
    { category: "Misalignment", count: 145, color: "#ef4444" },
    { category: "Surface Defects", count: 98, color: "#f97316" },
    { category: "Dimension Error", count: 76, color: "#f59e0b" },
    { category: "Material Defect", count: 52, color: "#eab308" },
    { category: "Assembly Error", count: 34, color: "#84cc16" },
    { category: "Missing Parts", count: 21, color: "#22c55e" },
    { category: "Other", count: 18, color: "#10b981" },
  ];

  // Calcular totales y porcentajes acumulativos
  const total = defectData.reduce((sum, item) => sum + item.count, 0);
  let cumulative = 0;
  const paretoData = defectData.map((item) => {
    cumulative += item.count;
    return {
      ...item,
      percentage: (item.count / total) * 100,
      cumulativePercentage: (cumulative / total) * 100,
    };
  });

  return (
    <div ref={chartRef} className="capability-container">
      <div className="chart-header-analytics">
        <div className="chart-title-section">
          <BarChart3 className="chart-icon" />
          <h3>Operational Analysis Example</h3>
        </div>
        <div className="pareto-summary">
          <span className="pareto-total">Total Events: {total}</span>
        </div>
      </div>

      <svg viewBox="0 0 800 350" className="analytics-svg">
        <defs>
          <linearGradient
            id="paretoLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="80%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((value, i) => (
          <g key={i}>
            <line
              x1="80"
              y1={280 - value * 2}
              x2="720"
              y2={280 - value * 2}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
            <text
              x="70"
              y={285 - value * 2}
              fontSize="11"
              fill="#64748b"
              textAnchor="end"
            >
              {value}%
            </text>
          </g>
        ))}

        {/* 80% reference line (Pareto principle) */}
        <line
          x1="80"
          y1="120"
          x2="720"
          y2="120"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="8,4"
          opacity="0.3"
        />
        <text x="725" y="125" fontSize="10" fill="#3b82f6" fontWeight="600">
          80%
        </text>

        {/* Barras de frecuencia */}
        {paretoData.map((item, i) => {
          const barWidth = 70;
          const x = 100 + i * 90;
          const barHeight = (item.count / defectData[0].count) * 180;
          const y = 280 - barHeight;

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={isVisible ? barHeight : 0}
                fill={item.color}
                rx="4"
                opacity="0.8"
                style={{
                  transition: `height 1s ease ${i * 0.1}s, y 1s ease ${
                    i * 0.1
                  }s`,
                }}
              />
              {/* Valor de frecuencia */}
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize="12"
                fill="#374151"
                fontWeight="600"
                opacity={isVisible ? 1 : 0}
                style={{ transition: `opacity 0.6s ease ${i * 0.1 + 0.5}s` }}
              >
                {item.count}
              </text>
              {/* Porcentaje individual */}
              <text
                x={x + barWidth / 2}
                y={y - 22}
                textAnchor="middle"
                fontSize="10"
                fill="#64748b"
                opacity={isVisible ? 1 : 0}
                style={{ transition: `opacity 0.6s ease ${i * 0.1 + 0.5}s` }}
              >
                {item.percentage.toFixed(1)}%
              </text>
            </g>
          );
        })}

        {/* Línea acumulativa (curva de Pareto) */}
        <path
          d={paretoData
            .map((item, i) => {
              const x = 135 + i * 90;
              const y = 280 - item.cumulativePercentage * 2;
              return `${i === 0 ? "M" : "L"} ${x} ${y}`;
            })
            .join(" ")}
          fill="none"
          stroke="url(#paretoLineGradient)"
          strokeWidth="3"
          opacity={isVisible ? 1 : 0}
          style={{
            transition: "opacity 1.5s ease 0.8s",
          }}
        />

        {/* Puntos en la línea acumulativa */}
        {paretoData.map((item, i) => {
          const x = 135 + i * 90;
          const y = 280 - item.cumulativePercentage * 2;

          return (
            <g key={`point-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="#3b82f6"
                opacity={isVisible ? 1 : 0}
                style={{ transition: `opacity 0.5s ease ${i * 0.15 + 1}s` }}
              />
              {/* Porcentaje acumulativo */}
              <text
                x={x}
                y={y - 12}
                textAnchor="middle"
                fontSize="10"
                fill="#3b82f6"
                fontWeight="600"
                opacity={isVisible ? 1 : 0}
                style={{ transition: `opacity 0.5s ease ${i * 0.15 + 1}s` }}
              >
                {item.cumulativePercentage.toFixed(0)}%
              </text>
            </g>
          );
        })}

        {/* Etiquetas del eje X */}
        {paretoData.map((item, i) => (
          <text
            key={`label-${i}`}
            x={135 + i * 90}
            y="310"
            textAnchor="middle"
            fontSize="11"
            fill="#374151"
            fontWeight="500"
            transform={`rotate(-15, ${135 + i * 90}, 310)`}
          >
            {item.category}
          </text>
        ))}

        {/* Labels de ejes */}
        <text
          x="400"
          y="345"
          fontSize="13"
          fill="#374151"
          textAnchor="middle"
          fontWeight="600"
        >
          Defect Category
        </text>
        <text
          x="25"
          y="180"
          fontSize="13"
          fill="#374151"
          textAnchor="middle"
          fontWeight="600"
          transform="rotate(-90, 25, 180)"
        >
          Cumulative %
        </text>
      </svg>

      {/* Leyenda */}
      <div className="pareto-legend">
        <div className="legend-item-pareto">
          <div className="legend-indicator bar"></div>
          <span>Frequency</span>
        </div>
        <div className="legend-item-pareto">
          <div className="legend-indicator line"></div>
          <span>Cumulative %</span>
        </div>
        <div className="legend-item-pareto">
          <div className="legend-indicator dash"></div>
          <span>80% Threshold</span>
        </div>
      </div>

      {/* Insight */}
      <div className="pareto-insight">
        <span className="insight-text">
          Top 3 defect types represent{" "}
          <strong>
            {paretoData
              .slice(0, 3)
              .reduce((sum, item) => sum + item.percentage, 0)
              .toFixed(1)}
            %
          </strong>{" "}
          of all defects. Example of how operational data can be analyzed and
          prioritized.
        </span>
      </div>
    </div>
  );
};

// Componente de gráfica animada de fondo mejorada
const AnimatedBackgroundChart = () => {
  const [time, setTime] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Datos para las barras X que se mueven
  const xBarData = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    baseHeight: 40 + Math.sin(i * 0.5) * 20,
    phase: i * 0.3,
    x: 50 + i * 60,
  }));

  // Puntos flotantes de datos
  const floatingPoints = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 100 + ((i * 80) % 800),
    y: 100 + ((i * 60) % 300),
    phase: i * 0.4,
    size: 3 + Math.sin(i) * 2,
  }));

  // Grid lines que pulsan
  const gridLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    y: 50 + i * 40,
    phase: i * 0.2,
  }));

  return (
    <div className="background-chart">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        className="chart-svg-bg"
      >
        {/* Definiciones de gradientes y filtros */}
        <defs>
          <radialGradient id="waveGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
          </radialGradient>

          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>

          <linearGradient
            id="orangeBarGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.8)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0.2)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ondas radiales de fondo */}
        {[...Array(4)].map((_, i) => (
          <circle
            key={`wave-${i}`}
            cx="400"
            cy="200"
            r={50 + Math.sin(time + i * 0.5) * 30 + i * 40}
            fill="none"
            stroke="rgba(59, 130, 246, 0.15)"
            strokeWidth="1"
            opacity={0.4 - i * 0.08}
          />
        ))}

        {/* Grid lines que pulsan */}
        {gridLines.map((line, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={line.y}
            x2="800"
            y2={line.y}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth={1 + Math.sin(time + line.phase) * 0.3}
            opacity={0.2 + Math.sin(time + line.phase) * 0.15}
          />
        ))}

        {/* Grid lines verticales */}
        {Array.from({ length: 10 }, (_, i) => (
          <line
            key={`grid-v-${i}`}
            x1={80 + i * 64}
            y1="50"
            x2={80 + i * 64}
            y2="350"
            stroke="rgba(59, 130, 246, 0.08)"
            strokeWidth="1"
            opacity={0.15 + Math.sin(time + i * 0.3) * 0.1}
          />
        ))}

        {/* Barras X que se mueven constantemente */}
        {xBarData.map((bar, i) => {
          const height = bar.baseHeight + Math.sin(time + bar.phase) * 25;
          const isHighlight = Math.sin(time * 2 + bar.phase) > 0.7;

          return (
            <g key={`bar-${i}`}>
              <rect
                x={bar.x}
                y={350 - height}
                width="20"
                height={height}
                fill={
                  isHighlight ? "url(#orangeBarGradient)" : "url(#barGradient)"
                }
                rx="2"
                filter={isHighlight ? "url(#glow)" : "none"}
                opacity={0.6}
              />
              {/* Valor flotante encima de la barra */}
              <text
                x={bar.x + 10}
                y={350 - height - 10}
                textAnchor="middle"
                fontSize="8"
                fill="rgba(59, 130, 246, 0.5)"
                opacity={isHighlight ? 0.8 : 0.4}
              >
                {Math.round(height)}
              </text>
            </g>
          );
        })}

        {/* Línea de tendencia animada */}
        <path
          d={`M 60 ${300 + Math.sin(time) * 20} Q 200 ${
            250 + Math.sin(time + 1) * 30
          } 400 ${200 + Math.sin(time + 2) * 25} T 740 ${
            180 + Math.sin(time + 3) * 20
          }`}
          fill="none"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="2"
          strokeDasharray="8,4"
          strokeDashoffset={-time * 20}
          opacity="0.6"
          filter="url(#glow)"
        />

        {/* Puntos flotantes de datos */}
        {floatingPoints.map((point, i) => {
          const animatedY = point.y + Math.sin(time + point.phase) * 15;
          const animatedX = point.x + Math.cos(time + point.phase * 0.5) * 10;
          const opacity = 0.2 + Math.sin(time + point.phase) * 0.2;

          return (
            <g key={`point-${i}`}>
              <circle
                cx={animatedX}
                cy={animatedY}
                r={point.size}
                fill="rgba(59, 130, 246, 0.4)"
                opacity={opacity}
              />
              {/* Ripple effect */}
              <circle
                cx={animatedX}
                cy={animatedY}
                r={point.size + Math.sin(time + point.phase) * 5}
                fill="none"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                opacity={opacity * 0.3}
              />
            </g>
          );
        })}

        {/* Partículas en movimiento */}
        {Array.from({ length: 20 }, (_, i) => (
          <circle
            key={`particle-${i}`}
            cx={(50 + i * 40 + time * 30) % 800}
            cy={100 + Math.sin(time + i * 0.5) * 50 + (i % 3) * 80}
            r="1"
            fill="rgba(59, 130, 246, 0.3)"
            opacity={0.15 + Math.sin(time + i) * 0.1}
          />
        ))}

        {/* Indicadores de métricas flotantes */}
        <g
          transform={`translate(${600 + Math.sin(time) * 10}, ${
            80 + Math.cos(time) * 5
          })`}
        >
          <rect
            x="0"
            y="0"
            width="100"
            height="40"
            rx="8"
            fill="rgba(255, 255, 255, 0.95)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            filter="url(#glow)"
          />
          <text
            x="50"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#1e40af"
            fontWeight="bold"
          >
            OEE: {Math.round(85 + Math.sin(time * 2) * 5)}%
          </text>
          <text x="50" y="28" textAnchor="middle" fontSize="6" fill="#6b7280">
            Real-time
          </text>
        </g>

        <g
          transform={`translate(${100 + Math.cos(time * 0.8) * 15}, ${
            280 + Math.sin(time * 0.6) * 8
          })`}
        >
          <rect
            x="0"
            y="0"
            width="90"
            height="35"
            rx="6"
            fill="rgba(255, 255, 255, 0.95)"
            stroke="rgba(249, 115, 22, 0.4)"
            strokeWidth="1"
            filter="url(#glow)"
          />
          <text
            x="45"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#f97316"
            fontWeight="bold"
          >
            Efficiency
          </text>
          <text x="45" y="26" textAnchor="middle" fontSize="6" fill="#6b7280">
            +{Math.round(12 + Math.sin(time * 1.5) * 3)}%
          </text>
        </g>
      </svg>
    </div>
  );
};

const KelmetrikIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0L16 8L8 16L0 8L8 0Z" />
  </svg>
);
const CompanyLogo = ({ className = "" }) => (
  <img
    src={logoImage}
    alt="Kelmetrik Logo"
    className={`logo-image ${className}`}
  />
);
const AnimatedChart = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const chartRef = useRef(null);

  const baseData = [
    { label: "Jan", value: 65, color: "#3b82f6" },
    { label: "Feb", value: 78, color: "#1e40af" },
    { label: "Mar", value: 52, color: "#2563eb" },
    { label: "Apr", value: 85, color: "#1d4ed8" },
    { label: "May", value: 92, color: "#3b82f6" },
    { label: "Jun", value: 88, color: "#1e40af" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => setAnimationPhase(1), 200);
          setTimeout(() => setAnimationPhase(2), 600);
          setTimeout(() => setAnimationPhase(3), 1000);
        }
      },
      { threshold: 0.3 },
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const getBarHeight = (baseValue, index) => {
    const minHeight = baseValue * 0.4;
    const maxHeight = baseValue * (hoveredBar === index ? 1.1 : 1);

    if (!isVisible) return minHeight;

    const scrollProgress = Math.min(scrollY / 500, 1);
    const delay = index * 0.1;
    const adjustedProgress = Math.max(0, scrollProgress - delay);

    return minHeight + (maxHeight - minHeight) * adjustedProgress;
  };

  return (
    <div ref={chartRef} className="animated-chart-container">
      <div className="chart-wrapper">
        <div className="chart-header">
          <h3
            style={{
              opacity: animationPhase >= 1 ? 1 : 0,
              transform: `translateY(${animationPhase >= 1 ? 0 : 20}px)`,
              transition: "all 0.6s ease",
            }}
          >
            Production Analytics
          </h3>
          <div className="chart-metrics">
            <span className="metric">
              <span
                className="metric-value"
                style={{
                  transform: `scale(${1 + scrollY * 0.0005})`,
                  opacity: animationPhase >= 2 ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              >
                {Math.round(85 + scrollY * 0.02)}%
              </span>
              <span
                className="metric-label"
                style={{
                  opacity: animationPhase >= 2 ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              >
                OEE
              </span>
            </span>
          </div>
        </div>

        <div
          className="chart-area"
          style={{
            opacity: animationPhase >= 1 ? 1 : 0,
            transform: `translateY(${animationPhase >= 1 ? 0 : 30}px)`,
            transition: "all 0.8s ease",
          }}
        >
          <svg viewBox="0 0 400 300" className="chart-svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="gradientHover"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line
                key={i}
                x1="50"
                y1={50 + i * 40}
                x2="370"
                y2={50 + i * 40}
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}

            {baseData.map((item, index) => {
              const height = getBarHeight(item.value * 1.5, index);
              const x = 80 + index * 45;
              const y = 250 - height;

              return (
                <g key={item.label}>
                  <rect
                    x={x}
                    y={y}
                    width="35"
                    height={height}
                    fill={
                      hoveredBar === index
                        ? "url(#gradientHover)"
                        : "url(#gradient1)"
                    }
                    rx="3"
                    style={{
                      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: `translateY(${
                        Math.sin(scrollY * 0.01 + index) * 3
                      }px)`,
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  />
                  {hoveredBar === index && (
                    <g>
                      <rect
                        x={x - 15}
                        y={y - 35}
                        width="65"
                        height="25"
                        fill="#1e293b"
                        rx="4"
                        opacity="0.9"
                      />
                      <text
                        x={x + 17.5}
                        y={y - 18}
                        textAnchor="middle"
                        fontSize="12"
                        fill="white"
                        fontWeight="500"
                      >
                        {Math.round(height / 1.5)} units
                      </text>
                    </g>
                  )}
                  <text
                    x={x + 17.5}
                    y="275"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#6b7280"
                    fontWeight="500"
                    style={{
                      opacity: animationPhase >= 2 ? 1 : 0,
                      transition: "opacity 0.6s ease",
                    }}
                  >
                    {item.label}
                  </text>
                  <text
                    x={x + 17.5}
                    y={y - 8}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#374151"
                    fontWeight="bold"
                    style={{
                      opacity:
                        hoveredBar === index ? 0 : animationPhase >= 2 ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {Math.round(height / 1.5)}
                  </text>
                </g>
              );
            })}

            <path
              d={`M 97 ${250 - getBarHeight(65 * 1.5, 0)} Q 200 ${
                250 - getBarHeight(85 * 1.5, 2)
              } 327 ${250 - getBarHeight(88 * 1.5, 5)}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="4"
              strokeDasharray="8,8"
              opacity={animationPhase >= 3 ? "0.8" : "0"}
              style={{
                strokeDashoffset: -scrollY * 0.2,
                transition: "stroke-dashoffset 0.1s ease, opacity 0.6s ease",
              }}
            />
          </svg>
        </div>
      </div>

      <div className="floating-elements">
        <div
          className="floating-card quality-card"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.008) * 10}px)`,
            opacity: animationPhase >= 2 ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <Shield className="card-icon" />
          <div className="card-content">
            <span className="card-value">99.2%</span>
            <span className="card-label">Quality</span>
          </div>
        </div>

        <div
          className="floating-card efficiency-card"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.006 + 1) * 8}px)`,
            opacity: animationPhase >= 2 ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          <TrendingUp className="card-icon" />
          <div className="card-content">
            <span className="card-value">+8%</span>
            <span className="card-label">Efficiency</span>
          </div>
        </div>

        <div
          className="floating-card production-card"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.007 + 2) * 12}px)`,
            opacity: animationPhase >= 2 ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          <Factory className="card-icon" />
          <div className="card-content">
            <span className="card-value">1000</span>
            <span className="card-label">Units/Day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de gráfica industrial animada para Solutions
const IndustrialChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [time, setTime] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimationPhase(1), 300);
          setTimeout(() => setAnimationPhase(2), 800);
          setTimeout(() => setAnimationPhase(3), 1300);
        }
      },
      { threshold: 0.3 },
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 50);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const metrics = [
    { label: "OEE", value: 92, color: "#3b82f6", delay: 0 },
    { label: "Quality", value: 98, color: "#10b981", delay: 200 },
    { label: "Uptime", value: 96, color: "#f59e0b", delay: 400 },
    { label: "Efficiency", value: 88, color: "#ef4444", delay: 600 },
  ];

  // Datos para la gráfica de línea de producción
  const productionData = [
    { month: "Jan", value: 85 },
    { month: "Feb", value: 88 },
    { month: "Mar", value: 82 },
    { month: "Apr", value: 91 },
    { month: "May", value: 89 },
    { month: "Jun", value: 94 },
  ];

  return (
    <div ref={chartRef} className="industrial-chart">
      <div className="chart-container">
        <div
          className="chart-header"
          style={{
            opacity: animationPhase >= 1 ? 1 : 0,
            transform: `translateY(${animationPhase >= 1 ? 0 : 30}px)`,
            transition: "all 0.6s ease",
          }}
        >
          <h3>Real-time Performance</h3>
          <span className="status-indicator">● Live</span>
        </div>

        {/* Cards de Métricas con barras */}
        <div className="metrics-grid">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="metric-card"
              style={{
                opacity: animationPhase >= 2 ? 1 : 0,
                transform: `translateY(${animationPhase >= 2 ? 0 : 20}px)`,
                transition: `all 0.6s ease ${metric.delay}ms`,
              }}
            >
              <div className="metric-header">
                <span className="metric-name">{metric.label}</span>
                <span className="metric-value">
                  {isVisible ? metric.value : 0}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: isVisible ? `${metric.value}%` : "0%",
                    backgroundColor: metric.color,
                    transition: `width 1.5s ease ${metric.delay + 500}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gráfica de tendencia de producción */}
        <div
          className="chart-visualization"
          style={{
            opacity: animationPhase >= 3 ? 1 : 0,
            transform: `translateY(${animationPhase >= 3 ? 0 : 20}px)`,
            transition: "all 0.6s ease",
          }}
        >
          <svg viewBox="0 0 600 200" className="mini-chart">
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="50"
                y1={30 + i * 35}
                x2="550"
                y2={30 + i * 35}
                stroke="#f1f5f9"
                strokeWidth="1"
                opacity="0.6"
              />
            ))}

            {/* Grid vertical */}
            {productionData.map((_, i) => (
              <line
                key={`v-${i}`}
                x1={80 + i * 80}
                y1="30"
                x2={80 + i * 80}
                y2="170"
                stroke="#f1f5f9"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}

            {/* Área bajo la curva */}
            <path
              d={`M 80 170 ${productionData
                .map((d, i) => `L ${80 + i * 80} ${170 - d.value}`)
                .join(" ")} L ${80 + (productionData.length - 1) * 80} 170 Z`}
              fill="url(#chartGradient)"
              opacity={isVisible ? 1 : 0}
              style={{ transition: "opacity 1.5s ease 1s" }}
            />

            {/* Línea de tendencia */}
            <path
              d={`M ${productionData
                .map(
                  (d, i) =>
                    `${i === 0 ? "" : "L "}${80 + i * 80} ${170 - d.value}`,
                )
                .join(" ")}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              filter="url(#glow)"
              strokeDasharray={isVisible ? "0" : "1000"}
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{ transition: "stroke-dashoffset 2s ease 1s" }}
            />

            {/* Puntos de datos con animación */}
            {productionData.map((d, i) => (
              <g key={`point-${i}`}>
                <circle
                  cx={80 + i * 80}
                  cy={170 - d.value}
                  r="6"
                  fill="#3b82f6"
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: `opacity 0.5s ease ${1.2 + i * 0.1}s`,
                    transform: `translateY(${Math.sin(time + i) * 2}px)`,
                  }}
                />
                <circle
                  cx={80 + i * 80}
                  cy={170 - d.value}
                  r="10"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity={0.3 + Math.sin(time + i) * 0.2}
                />
                {/* Valores sobre los puntos */}
                <text
                  x={80 + i * 80}
                  y={165 - d.value - 15}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#1e40af"
                  fontWeight="600"
                  opacity={isVisible ? 1 : 0}
                  style={{ transition: `opacity 0.5s ease ${1.5 + i * 0.1}s` }}
                >
                  {d.value}%
                </text>
              </g>
            ))}

            {/* Etiquetas del eje X */}
            {productionData.map((d, i) => (
              <text
                key={`label-${i}`}
                x={80 + i * 80}
                y="190"
                textAnchor="middle"
                fontSize="11"
                fill="#64748b"
                fontWeight="500"
              >
                {d.month}
              </text>
            ))}

            {/* Etiquetas del eje Y */}
            {[100, 75, 50, 25, 0].map((val, i) => (
              <text
                key={`y-${i}`}
                x="35"
                y={30 + i * 35 + 5}
                fontSize="10"
                fill="#64748b"
                textAnchor="end"
              >
                {val}%
              </text>
            ))}
          </svg>
        </div>

        {/* Indicador de mejora */}
        <div
          className="improvement-indicator"
          style={{
            opacity: animationPhase >= 3 ? 1 : 0,
            transition: "opacity 0.6s ease 1.8s",
          }}
        >
          <TrendingUp className="trend-icon-green" />
          <span className="trend-text">+10.6% improvement over 6 months</span>
        </div>
      </div>
    </div>
  );
};

const AnimatedFeature = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.5 },
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={featureRef}
      className="feature-item animated-feature"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateX(${isVisible ? 0 : -30}px)`,
        transition: `all 0.6s ease`,
      }}
    >
      <div
        className="feature-icon"
        style={{
          transform: `scale(${isVisible ? 1 : 0.8})`,
          transition: `transform 0.6s ease 0.2s`,
        }}
      >
        <feature.icon className="icon" />
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-description">{feature.description}</p>
      </div>
    </div>
  );
};

// Componente de Tendencias Operativas
const ProductionTrendsChart = () => {
  const [time, setTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);

    const interval = setInterval(() => {
      setTime((prev) => prev + 0.006);
    }, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Datos simulados de producción
  const productionData = [
    { month: "Ene", production: 1200, defects: 24 },
    { month: "Feb", production: 1350, defects: 18 },
    { month: "Mar", production: 1180, defects: 22 },
    { month: "Abr", production: 1420, defects: 15 },
    { month: "May", production: 1380, defects: 12 },
    { month: "Jun", production: 1450, defects: 10 },
  ];

  return (
    <div ref={chartRef} className="chart-container-analytics">
      <div className="chart-header-analytics">
        <div className="chart-title-section">
          <TrendingUp className="chart-icon" />
          <h3>Operational Trends</h3>
        </div>
      </div>

      <svg viewBox="0 0 800 300" className="analytics-svg">
        <defs>
          <linearGradient
            id="productionGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
          </linearGradient>
          <linearGradient
            id="defectsGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
          </linearGradient>
        </defs>

        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="80"
            y1={60 + i * 50}
            x2="720"
            y2={60 + i * 50}
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}

        {/* Production Area */}
        <path
          d={`M 120 ${250 - (productionData[0].production - 1000) * 0.15}
             L 220 ${250 - (productionData[1].production - 1000) * 0.15}
             L 320 ${250 - (productionData[2].production - 1000) * 0.15}
             L 420 ${250 - (productionData[3].production - 1000) * 0.15}
             L 520 ${250 - (productionData[4].production - 1000) * 0.15}
             L 620 ${250 - (productionData[5].production - 1000) * 0.15}
             L 620 250 L 120 250 Z`}
          fill="url(#productionGradient)"
          opacity={isVisible ? 1 : 0}
          style={{ transition: "opacity 1.5s ease" }}
        />

        {/* Production Line */}
        <path
          d={`M 120 ${250 - (productionData[0].production - 1000) * 0.15}
             L 220 ${250 - (productionData[1].production - 1000) * 0.15}
             L 320 ${250 - (productionData[2].production - 1000) * 0.15}
             L 420 ${250 - (productionData[3].production - 1000) * 0.15}
             L 520 ${250 - (productionData[4].production - 1000) * 0.15}
             L 620 ${250 - (productionData[5].production - 1000) * 0.15}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeDasharray={isVisible ? "0" : "1000"}
          strokeDashoffset={isVisible ? "0" : "1000"}
          style={{ transition: "stroke-dashoffset 2s ease" }}
        />

        {/* Defects Line */}
        <path
          d={`M 120 ${250 - productionData[0].defects * 3}
             L 220 ${250 - productionData[1].defects * 3}
             L 320 ${250 - productionData[2].defects * 3}
             L 420 ${250 - productionData[3].defects * 3}
             L 520 ${250 - productionData[4].defects * 3}
             L 620 ${250 - productionData[5].defects * 3}`}
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="8,4"
          strokeDashoffset={-time * 20}
        />

        {/* Data Points */}
        {productionData.map((point, i) => (
          <g key={i}>
            <circle
              cx={120 + i * 100}
              cy={250 - (point.production - 1000) * 0.15}
              r="6"
              fill="#3b82f6"
              opacity={isVisible ? 1 : 0}
              style={{ transition: `opacity 0.5s ease ${i * 0.2}s` }}
            />
            <circle
              cx={120 + i * 100}
              cy={250 - point.defects * 3}
              r="4"
              fill="#22c55e"
              opacity={isVisible ? 1 : 0}
              style={{ transition: `opacity 0.5s ease ${i * 0.2}s` }}
            />
          </g>
        ))}

        {/* X-Axis Labels */}
        {productionData.map((point, i) => (
          <text
            key={i}
            x={120 + i * 100}
            y="280"
            textAnchor="middle"
            fontSize="14"
            fill="#64748b"
          >
            {point.month}
          </text>
        ))}

        {/* Y-Axis Labels */}
        <text x="40" y="260" fontSize="12" fill="#64748b">
          0
        </text>
        <text x="40" y="160" fontSize="12" fill="#64748b">
          800
        </text>
        <text x="40" y="70" fontSize="12" fill="#64748b">
          1600
        </text>
      </svg>
    </div>
  );
};

// Componente de Distribución de Procesos
const QualityDistributionChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  const qualityData = [
    { label: "compliance", value: 96.8, color: "#22c55e" },
    { label: "Rework", value: 2.7, color: "#f59e0b" },
    { label: "Defective", value: 0.5, color: "#ef4444" },
  ];

  const total = qualityData.reduce((sum, item) => sum + item.value, 0);
  let cumulativeAngle = 0;

  return (
    <div ref={chartRef} className="chart-container-analytics">
      <div className="chart-header-analytics">
        <h3>Process Distribution</h3>
      </div>

      <div className="quality-chart-content">
        <div className="donut-chart">
          <svg viewBox="0 0 200 200" className="donut-svg">
            {qualityData.map((item, i) => {
              const angle = (item.value / total) * 360;
              const startAngle = cumulativeAngle;
              const endAngle = cumulativeAngle + angle;
              cumulativeAngle += angle;

              const startAngleRad = (startAngle * Math.PI) / 180;
              const endAngleRad = (endAngle * Math.PI) / 180;

              const largeArcFlag = angle > 180 ? 1 : 0;

              const x1 = 100 + 70 * Math.cos(startAngleRad);
              const y1 = 100 + 70 * Math.sin(startAngleRad);
              const x2 = 100 + 70 * Math.cos(endAngleRad);
              const y2 = 100 + 70 * Math.sin(endAngleRad);

              const x3 = 100 + 40 * Math.cos(endAngleRad);
              const y3 = 100 + 40 * Math.sin(endAngleRad);
              const x4 = 100 + 40 * Math.cos(startAngleRad);
              const y4 = 100 + 40 * Math.sin(startAngleRad);

              const pathData = [
                `M ${x1} ${y1}`,
                `A 70 70 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `L ${x3} ${y3}`,
                `A 40 40 0 ${largeArcFlag} 0 ${x4} ${y4}`,
                "Z",
              ].join(" ");

              return (
                <path
                  key={i}
                  d={pathData}
                  fill={item.color}
                  opacity={isVisible ? 1 : 0}
                  style={{
                    transition: `opacity 0.6s ease ${i * 0.2}s`,
                    transformOrigin: "100px 100px",
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div className="quality-legend">
          {qualityData.map((item, i) => (
            <div key={i} className="legend-item">
              <div
                className="legend-color"
                style={{ backgroundColor: item.color }}
              />
              <div className="legend-text">
                <span className="legend-label">{item.label}</span>
                <span className="legend-value">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente de Estado Operativo de Líneas
const ProductionLinesStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  const linesData = [
    { name: "Line A", status: "Operating", efficiency: 94, color: "#22c55e" },
    { name: "Line B", status: "Maintenance", efficiency: 0, color: "#f59e0b" },
    { name: "Line C", status: "Operating", efficiency: 87, color: "#22c55e" },
    { name: "Line D", status: "Operating", efficiency: 91, color: "#22c55e" },
  ];

  return (
    <div ref={chartRef} className="chart-container-analytics">
      <div className="chart-header-analytics">
        <div className="chart-title-section">
          <Factory className="chart-icon" />
          <h3>Operational Status</h3>
        </div>
      </div>

      <div className="production-lines-grid">
        {linesData.map((line, i) => (
          <div
            key={i}
            className="line-status-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}
          >
            <div className="line-header">
              <h4>{line.name}</h4>
              <div className={`status-badge ${line.status.toLowerCase()}`}>
                {line.status === "Operando" ? "✓" : "⚠"} {line.status}
              </div>
            </div>
            <div className="line-metrics">
              <div className="metric-large">
                <span className="metric-value-large">{line.efficiency}%</span>
                <span className="metric-label-small">Efficiency</span>
              </div>
              <div className="efficiency-bar">
                <div
                  className="efficiency-fill"
                  style={{
                    width: isVisible ? `${line.efficiency}%` : "0%",
                    backgroundColor: line.color,
                    transition: `width 1s ease ${i * 0.2 + 0.5}s`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OEEMetricsCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={chartRef} className="oee-metrics-container">
      <div className="oee-main-metric">
        <div className="oee-percentage">
          <span
            className="oee-value"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `scale(${isVisible ? 1 : 0.8})`,
              transition: "all 0.8s ease",
            }}
          >
            92.4%
          </span>
          <span className="oee-label">Performance Overview</span>
        </div>
      </div>

      <div className="oee-breakdown">
        {[
          { label: "Availability", value: 96.2, color: "#3b82f6" },
          { label: "Performance", value: 89.1, color: "#10b981" },
          { label: "Quality", value: 97.8, color: "#f59e0b" },
        ].map((metric, i) => (
          <div key={i} className="oee-metric-item">
            <div className="oee-metric-header">
              <span className="oee-metric-label">{metric.label}</span>
              <span className="oee-metric-value">{metric.value}%</span>
            </div>
            <div className="oee-progress-bar">
              <div
                className="oee-progress-fill"
                style={{
                  width: isVisible ? `${metric.value}%` : "0%",
                  backgroundColor: metric.color,
                  transition: `width 1.2s ease ${i * 0.2 + 0.5}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="oee-trend">
        <div className="trend-indicator positive">
          <TrendingUp className="trend-icon" />
          <div className="trend-text">
            <span className="trend-value">+18%</span>
            <span className="trend-label">Improve this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Gráfico X-Bar (SPC)
const SPCXBarChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(0);
  const [dataVersion, setDataVersion] = useState(0);
  const chartRef = useRef(null);

  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);

    const animationInterval = setInterval(() => {
      setTime((prev) => prev + 0.001);
    }, 300);

    const dataInterval = setInterval(() => {
      setDataVersion((prev) => prev + 1);
    }, 10000);

    return () => {
      observer.disconnect();
      clearInterval(animationInterval);
      clearInterval(dataInterval);
    };
  }, []);

  const xBarData = Array.from({ length: 25 }, (_, i) => {
    const baseSeed = i * 123.456 + dataVersion * 0.1;
    const randomValue = seededRandom(baseSeed);

    let baseValue = 50 + Math.sin(i * 0.3) * 1.5;

    const outOfControlPoints = [7, 15, 22]; // Puntos 8, 16 y 23 (índices 7, 15, 22)

    if (outOfControlPoints.includes(i)) {
      if (i === 7) {
        baseValue = 53.5 + (randomValue - 0.5) * 0.3; // Fuera por arriba
      } else if (i === 15) {
        baseValue = 46.2 + (randomValue - 0.5) * 0.3; // Fuera por abajo
      } else if (i === 22) {
        baseValue = 53.8 + (randomValue - 0.5) * 0.3; // Fuera por arriba
      }
    } else {
      baseValue += (randomValue - 0.5) * 1.2;
    }

    return {
      sample: i + 1,
      value: baseValue,
    };
  });

  const centerLine = 50;
  const ucl = 53; // Upper Control Limit
  const lcl = 47; // Lower Control Limit

  const outOfControlCount = xBarData.filter(
    (point) => point.value > ucl || point.value < lcl,
  ).length;

  return (
    <div ref={chartRef} className="chart-container-analytics">
      <div className="chart-header-analytics">
        <div className="chart-title-section">
          <BarChart3 className="chart-icon" />
          <h3>Statistical Process Monitoring</h3>
        </div>
        <div className="spc-controls">
          <span
            className={`spc-status ${
              outOfControlCount > 0 ? "out-of-control" : "in-control"
            }`}
          >
            ● {outOfControlCount > 0 ? "Out of Control" : "In Control"}
          </span>
        </div>
      </div>

      <svg viewBox="0 0 800 350" className="analytics-svg">
        <defs>
          <linearGradient id="spcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.05)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
        </defs>

        {/* Control Limits Area */}
        <rect
          x="60"
          y="80"
          width="720"
          height={((ucl - lcl) / 6) * 200}
          fill="rgba(34, 197, 94, 0.05)"
        />

        {/* Grid Lines */}
        {[lcl, centerLine, ucl].map((line, i) => (
          <line
            key={i}
            x1="60"
            y1={300 - ((line - 44) / 12) * 200}
            x2="780"
            y2={300 - ((line - 44) / 12) * 200}
            stroke={i === 1 ? "#3b82f6" : "#ef4444"}
            strokeWidth={i === 1 ? "2" : "1"}
            strokeDasharray={i === 1 ? "0" : "8,4"}
          />
        ))}

        {/* Data Points and Line */}
        <path
          d={`M ${xBarData
            .map(
              (d, i) => `${60 + i * 28} ${300 - ((d.value - 44) / 12) * 200}`,
            )
            .join(" L ")}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity={isVisible ? 1 : 0}
          style={{
            transition: "opacity 3s ease, d 2s ease",
          }}
        />

        {xBarData.map((point, i) => {
          const isOutOfControl = point.value > ucl || point.value < lcl;
          return (
            <g key={i}>
              <circle
                cx={60 + i * 28}
                cy={300 - ((point.value - 44) / 12) * 200}
                r="4"
                fill={isOutOfControl ? "#ef4444" : "#3b82f6"}
                opacity={isVisible ? 1 : 0}
                style={{
                  transition: `opacity 1.2s ease ${i * 0.15}s, cy 2s ease`,
                }}
              />
              {isOutOfControl && (
                <>
                  {/* Anillo pulsante para puntos fuera de control */}
                  <circle
                    cx={60 + i * 28}
                    cy={300 - ((point.value - 44) / 12) * 200}
                    r="8"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    opacity={0.7 + Math.sin(time * 0.5) * 0.2}
                  />
                  {/* Etiqueta del valor */}
                  <text
                    x={60 + i * 28}
                    y={300 - ((point.value - 44) / 12) * 200 - 15}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#ef4444"
                    fontWeight="bold"
                  >
                    {point.value.toFixed(1)}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Control Limit Labels */}
        <text
          x="45"
          y={300 - ((ucl - 44) / 12) * 200 + 5}
          fontSize="12"
          fill="#ef4444"
          textAnchor="end"
        >
          UCL
        </text>
        <text
          x="45"
          y={300 - ((centerLine - 44) / 12) * 200 + 5}
          fontSize="12"
          fill="#3b82f6"
          textAnchor="end"
        >
          X̄
        </text>
        <text
          x="45"
          y={300 - ((lcl - 44) / 12) * 200 + 5}
          fontSize="12"
          fill="#ef4444"
          textAnchor="end"
        >
          LCL
        </text>

        {/* X-Axis */}
        <line
          x1="60"
          y1="320"
          x2="780"
          y2="320"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
        {xBarData
          .filter((_, i) => i % 5 === 0)
          .map((_, i) => (
            <text
              key={i}
              x={60 + i * 140}
              y="340"
              fontSize="12"
              fill="#64748b"
              textAnchor="middle"
            >
              {i * 5 + 1}
            </text>
          ))}

        {/* Axis Labels */}
        <text
          x="420"
          y="370"
          fontSize="14"
          fill="#374151"
          textAnchor="middle"
          fontWeight="500"
        >
          Sample Number
        </text>
        <text
          x="25"
          y="200"
          fontSize="14"
          fill="#374151"
          textAnchor="middle"
          fontWeight="500"
          transform="rotate(-90, 25, 200)"
        >
          Average Value
        </text>
      </svg>

      <div className="spc-summary">
        <div className="spc-stats">
          <div className="stat-item">
            <span className="stat-label">Cp</span>
            <span className="stat-value">1.33</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Cpk</span>
            <span className="stat-value">1.28</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Points off</span>
            <span
              className="stat-value"
              style={{
                color: outOfControlCount > 0 ? "#211e1eff" : "#211e1eff",
              }}
            >
              {outOfControlCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Índices de Capacidad (Cp, Cpk, Pp, Ppk)
const CapabilityIndices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  const capabilityData = [
    {
      name: "Cp",
      value: 1.33,
      description: "Process capacity",
      status: "capable",
      color: "#22c55e",
    },
    {
      name: "Cpk",
      value: 1.28,
      description: "Actual process capacity",
      status: "capable",
      color: "#3b82f6",
    },
    {
      name: "Pp",
      value: 1.41,
      description: "Process performance",
      status: "excellent",
      color: "#8b5cf6",
    },
    {
      name: "Ppk",
      value: 1.35,
      description: "Actual process performance",
      status: "capable",
      color: "#f59e0b",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "#22c55e";
      case "capable":
        return "#3b82f6";
      case "marginal":
        return "#f59e0b";
      case "inadequate":
        return "#ef4444";
      default:
        return "#64748b";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "excellent":
        return "Excellent  (>1.33)";
      case "capable":
        return "Capable (>1.0)";
      case "marginal":
        return "Marginal (0.67-1.0)";
      case "inadequate":
        return "Inadequate (<0.67)";
      default:
        return "Unknown";
    }
  };

  return (
    <div ref={chartRef} className="capability-container">
      <div className="chart-header-analytics">
        <div className="chart-title-section">
          <Shield className="chart-icon" />
          <h3>Process Capability Example</h3>
        </div>
      </div>

      <div className="capability-grid">
        {capabilityData.map((item, i) => (
          <div
            key={i}
            className="capability-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}
          >
            <div className="capability-header">
              <div className="capability-name">
                <span className="capability-index">{item.name}</span>
                <span className="capability-desc">{item.description}</span>
              </div>
            </div>

            <div className="capability-value-container">
              <div className="capability-gauge">
                <svg viewBox="0 0 120 60" className="gauge-svg">
                  <defs>
                    <linearGradient
                      id={`gradient-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="33%" stopColor="#f59e0b" />
                      <stop offset="66%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>

                  {/* Background Arc */}
                  <path
                    d="M 20 50 A 40 40 0 0 1 100 50"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />

                  {/* Progress Arc */}
                  <path
                    d="M 20 50 A 40 40 0 0 1 100 50"
                    fill="none"
                    stroke={`url(#gradient-${i})`}
                    strokeWidth="8"
                    strokeDasharray={`${Math.min(
                      (item.value / 2) * 125.66,
                      125.66,
                    )} 125.66`}
                    strokeDashoffset="0"
                    style={{
                      transition: "stroke-dasharray 1.5s ease 0.5s",
                    }}
                  />

                  {/* Needle */}
                  <line
                    x1="60"
                    y1="50"
                    x2={
                      60 -
                      35 *
                        Math.cos(
                          Math.PI - (Math.min(item.value, 2) / 2) * Math.PI,
                        )
                    }
                    y2={
                      50 -
                      35 *
                        Math.sin(
                          Math.PI - (Math.min(item.value, 2) / 2) * Math.PI,
                        )
                    }
                    stroke="#374151"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity={isVisible ? 1 : 0}
                    style={{ transition: "opacity 0.8s ease 1s" }}
                  />

                  {/* Center Dot */}
                  <circle cx="60" cy="50" r="3" fill="#374151" />
                </svg>
              </div>

              <div className="capability-metrics">
                <div className="capability-value-large">{item.value}</div>
                <div
                  className="capability-status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {getStatusText(item.status)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente de Formulario de Contacto
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, succeeded: false, error: false });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkwrdok", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({ submitting: false, succeeded: true, error: false });
        form.reset();
        // Opcional: ocultar el mensaje después de 5 segundos
        setTimeout(() => {
          setFormStatus({ submitting: false, succeeded: false, error: false });
        }, 5000);
      } else {
        setFormStatus({ submitting: false, succeeded: false, error: true });
      }
    } catch (error) {
      setFormStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <div className="contact-form">
      <form className="demo-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              required
              disabled={formStatus.submitting}
            />
          </div>
          <div className="form-group">
            <label>Job Title*</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Your position"
              required
              disabled={formStatus.submitting}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Company Name*</label>
            <input
              type="text"
              name="companyName"
              placeholder="Your company"
              required
              disabled={formStatus.submitting}
            />
          </div>
          <div className="form-group">
            <label>Industry*</label>
            <select name="industry" required disabled={formStatus.submitting}>
              <option value="">Select industry</option>
              <option value="automotive">Automotive</option>
              <option value="electronics">Electronics</option>
              <option value="aerospace">Aerospace</option>
              <option value="pharmaceuticals">Pharmaceuticals</option>
              <option value="food">Food & Beverage</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Business Email*</label>
          <input
            type="email"
            name="email"
            placeholder="your.email@company.com"
            required
            disabled={formStatus.submitting}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            disabled={formStatus.submitting}
          />
        </div>

        <div className="form-group">
          <label>Operational Challenge</label>
          <textarea
            name="challenges"
            placeholder="Tell us about the process, system or operational challenge you want to improve."
            rows="3"
            disabled={formStatus.submitting}
          ></textarea>
        </div>

        {formStatus.succeeded && (
          <div
            style={{
              padding: "12px",
              marginBottom: "16px",
              backgroundColor: "#d1fae5",
              color: "#065f46",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {formStatus.error && (
          <div
            style={{
              padding: "12px",
              marginBottom: "16px",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Oops! There was an error sending your message. Please try again.
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={formStatus.submitting}
        >
          {formStatus.submitting ? "Sending..." : "Send Project Details"}
        </button>
      </form>
    </div>
  );
};

function App({ onLoginClick }) {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <CompanyLogo />
          </a>
          <nav className="nav">
            <a href="#hero" className="nav-link">
              Home
            </a>
            <a href="#solutions" className="nav-link">
              Solutions
            </a>
            <a href="#features" className="nav-link">
              Capabilities
            </a>
            <a href="#analytics" className="nav-link">
              Analytics
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero">
          <AnimatedBackgroundChart />

          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  We start with the operation,
                  <br />
                  <span className="hero-title-highlight">
                    not the software.
                  </span>
                </h1>
                <p className="hero-description">
                  Kelmetrik builds custom software, integrations and automation
                  for industrial operations, connecting people, processes,
                  equipment and existing systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="solutions">
          <div className="container">
            <div className="solutions-grid">
              {/* Columna Izquierda - Contenido de texto */}
              <div className="solutions-content">
                <h2 className="section-title">
                  Technology designed around
                  <br />
                  <span className="section-title-highlight">
                    your operation.
                  </span>
                </h2>
                <div className="features-list">
                  {[
                    {
                      icon: Factory,
                      title: "Custom Industrial Software",
                      description:
                        "Web and mobile applications designed around your workflows, users and operational requirements.",
                    },
                    {
                      icon: Cpu,
                      title: "Systems Integration",
                      description:
                        "Connect ERP, legacy databases, APIs, devices and industrial equipment.",
                    },
                    {
                      icon: BarChart3,
                      title: "Operational Visibility",
                      description:
                        "Dashboards, alerts and traceability that turn operational data into actionable information.",
                    },
                  ].map((feature, i) => (
                    <AnimatedFeature key={i} feature={feature} index={i} />
                  ))}
                </div>
              </div>

              {/* Columna Derecha - TODO en un solo contenedor */}
              <div className="solutions-chart-wrapper">
                {/* Contenedor único con Pareto + Stats */}
                <div className="solutions-chart-single-column">
                  {/* Gráfica de Pareto */}
                  <ParetoChart />

                  {/* Stats Grid DENTRO del mismo contenedor */}
                  <div className="pareto-stats-inline">
                    <div className="stat-card-inline">
                      <div className="stat-icon-wrapper blue">
                        <Shield className="stat-icon" />
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">99.2%</span>
                        <span className="stat-label">Process Visibility</span>
                      </div>
                    </div>

                    <div className="stat-card-inline">
                      <div className="stat-icon-wrapper green">
                        <TrendingUp className="stat-icon" />
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">-35%</span>
                        <span className="stat-label">
                          Improvement Potential
                        </span>
                      </div>
                    </div>

                    <div className="stat-card-inline">
                      <div className="stat-icon-wrapper orange">
                        <Clock className="stat-icon" />
                      </div>
                      <div className="stat-content">
                        <span className="stat-number">2.5hrs</span>
                        <span className="stat-label">Operational Response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="features-header">
              <h2 className="features-title">
                Connect the systems, people and processes
                <br />
                <span className="features-title-highlight">
                  that run your operation.
                </span>
              </h2>
              <p className="features-description">
                Kelmetrik combines industrial experience, software development,
                data integration and automation to build solutions for real
                operating environments.
              </p>
            </div>
            <div className="features-grid">
              {[
                {
                  icon: TrendingUp,
                  title: "Custom Industrial Software",
                  description:
                    "Operational web and mobile applications designed around real workflows.",
                  features: [
                    "Web applications",
                    "Mobile and handheld workflows",
                    "Administrative platforms",
                  ],
                  color: "blue",
                },
                {
                  icon: Shield,
                  title: "Warehouse Solutions",
                  description:
                    "Digital workflows for receiving, inventory, locations, picking and movements.",
                  features: [
                    "Inventory by location",
                    "Barcode validation",
                    "Guided picking",
                  ],
                  color: "green",
                },
                {
                  icon: Clock,
                  title: "Operational Monitoring",
                  description:
                    "Real-time visibility into production, inventory and operational events.",
                  features: [
                    "Live operational data",
                    "Alerts and notifications",
                    "Dashboard views",
                  ],
                  color: "orange",
                },
                {
                  icon: Wrench,
                  title: "Workflow Automation",
                  description:
                    "Replace repetitive manual tasks with guided and traceable digital processes.",
                  features: [
                    "Guided workflows",
                    "Process validation",
                    "Event history",
                  ],
                  color: "purple",
                },
                {
                  icon: Users,
                  title: "ERP & Legacy Integration",
                  description:
                    "Connect modern operational tools with existing systems and databases.",
                  features: [
                    "ERP integration",
                    "Legacy databases",
                    "Controlled synchronization",
                  ],
                  color: "red",
                },
                {
                  icon: Settings,
                  title: "Industrial Connectivity",
                  description:
                    "Connect applications with PLCs, SCADA, devices, scanners and industrial equipment.",
                  features: [
                    "PLC and SCADA",
                    "Barcode devices",
                    "Industrial equipment",
                  ],
                  color: "indigo",
                },
              ].map((feature, i) => (
                <div key={i} className="feature-card-new">
                  <div
                    className={`feature-card-icon-new icon-${feature.color}`}
                  >
                    <feature.icon className="icon-lg" />
                  </div>
                  <h3 className="feature-card-title-new">{feature.title}</h3>
                  <p className="feature-card-description-new">
                    {feature.description}
                  </p>
                  <div className="feature-list">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="feature-list-item">
                        <div className="feature-checkmark-small">✓</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="analytics">
          <div className="container">
            <div className="analytics-header">
              <h2 className="section-title">
                Operational data that{" "}
                <span className="section-title-highlight">
                  supports better decisions
                </span>
              </h2>
              <p className="analytics-description">
                Interactive dashboards, traceability and analytics can transform
                disconnected operational data into useful information.
              </p>
            </div>

            {/* First Row - Production Trends & Quality Distribution */}
            <div className="analytics-row">
              <div className="analytics-card-large">
                <ProductionTrendsChart />
              </div>
              <div className="analytics-card-medium">
                <QualityDistributionChart />
              </div>
            </div>

            {/* Second Row - Production Lines Status & OEE Metrics */}
            <div className="analytics-row">
              <div className="analytics-card-large">
                <ProductionLinesStatus />
              </div>
              <div className="analytics-card-medium">
                <OEEMetricsCard />
              </div>
            </div>

            {/* Third Row - SPC Charts */}
            <div className="analytics-row">
              <div className="analytics-card-large">
                <SPCXBarChart />
              </div>
              <div className="analytics-card-medium">
                <CapabilityIndices />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-content">
                <h2 className="contact-title">
                  Let's discuss your{" "}
                  <span className="contact-title-highlight">operation.</span>
                </h2>

                <div className="contact-benefits">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Users className="icon" />
                    </div>
                    <div className="benefit-text">
                      <h4>Operational Assessment</h4>
                      <p>
                        We begin by understanding the real process, users and
                        constraints.
                      </p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Clock className="icon" />
                    </div>
                    <div className="benefit-text">
                      <h4>Practical Approach</h4>
                      <p>
                        We prioritize the workflows that create the greatest
                        operational impact.
                      </p>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Shield className="icon" />
                    </div>
                    <div className="benefit-text">
                      <h4>Solution-Oriented Conversation</h4>
                      <p>
                        The first discussion focuses on the problem, not on
                        selling a predefined platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-method">
                    <Mail className="contact-icon" />
                    <span>eduardo@kelmetrik.com</span>
                  </div>
                  <div className="contact-method">
                    <MessageSquare className="contact-icon" />
                    <span>+52 663 123 3838</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-container">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="cta" className="cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Build technology around your operation.
                <br />
                Without unnecessary complexity.
              </h2>
              <p className="cta-description">
                Kelmetrik develops custom industrial software, integrations and
                automation solutions designed around real operational needs.
                <br />
                From warehouse and production applications to ERP connectivity,
                traceability and operational dashboards.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <CompanyLogo className="footer-logo" />
                </a>
                <p className="footer-description">
                  Custom industrial software, integration and automation for
                  connected operations.
                </p>
              </div>
              <div className="footer-section">
                <h3 className="footer-title">Capabilities</h3>
                <nav className="footer-nav">
                  <a href="#features" className="footer-link">
                    Custom Software
                  </a>
                  <a href="#solutions" className="footer-link">
                    Warehouse Solutions
                  </a>
                  <a href="#analytics" className="footer-link">
                    Manufacturing Solutions
                  </a>
                  <a href="#features" className="footer-link">
                    Systems Integration
                  </a>
                </nav>
              </div>
              <div className="footer-section">
                <h3 className="footer-title">Industries</h3>
                <nav className="footer-nav">
                  <a href="#solutions" className="footer-link">
                    Manufacturing
                  </a>
                  <a href="#solutions" className="footer-link">
                    Food Distribution
                  </a>
                  <a href="#solutions" className="footer-link">
                    Warehousing
                  </a>
                  <a href="#solutions" className="footer-link">
                    Logistics
                  </a>
                </nav>
              </div>
              <div className="footer-section">
                <h3 className="footer-title">Start a Conversation</h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "16px",
                  }}
                >
                  Tell us about the process or operational challenge you want to
                  improve.
                </p>
                <div className="footer-form">
                  <input
                    type="email"
                    placeholder="Business email"
                    className="footer-input"
                  />
                  <a href="#contact" className="btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              © {new Date().getFullYear()} Kelmetrik. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
