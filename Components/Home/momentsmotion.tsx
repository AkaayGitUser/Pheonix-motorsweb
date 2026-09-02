"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Gauge,
  Zap,
  Settings,
  Fuel,
  Cog,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Category = "motorcycle" | "scooter" | "ev";

interface VehicleColor {
  id: string;
  name: string;
  hex: string;
  image: string;
  views?: string[];
}

interface VehicleSpec {
  value: string;
  label: string;
  type: "engine" | "mileage" | "power" | "transmission" | "fuel";
}

interface Vehicle {
  id: string;
  name: string;
  subtitle: string;
  thumbnail: string;
  imageScale?: number;
  colors: VehicleColor[];
  specs: VehicleSpec[];
}

/* =========================================================
   MOTORCYCLES
========================================================= */

const motorcycles: Vehicle[] = [
  {
    id: "karizma-xmr",
    name: "KARIZMA XMR",
    subtitle: "Born to perform. Built to thrill.",
    thumbnail: "/book/destini-110/karizma-xmr/grey/front-three-quarter.jpg",
    imageScale: 1.28,
    colors: [
      {
        id: "grey",
        name: "Grey",
        hex: "#7A7A7A",
        image: "/book/destini-110/karizma-xmr/grey/front-three-quarter.jpg",
        views: [
          "/book/destini-110/karizma-xmr/grey/front.jpg",
          "/book/destini-110/karizma-xmr/grey/front-three-quarter.jpg",
          "/book/destini-110/karizma-xmr/grey/side.jpg",
          "/book/destini-110/karizma-xmr/grey/rear-three-quarter.jpg",
        ],
      },
    ],
    specs: [
      { value: "210 cc", label: "Engine", type: "engine" },
      { value: "25.5 PS", label: "Power", type: "power" },
      { value: "6 Speed", label: "Transmission", type: "transmission" },
      { value: "Petrol", label: "Fuel", type: "fuel" },
      { value: "11 L", label: "Fuel Tank", type: "fuel" },
    ],
  },
  {
    id: "hf-deluxe",
    name: "HF DELUXE",
    subtitle: "Reliable performance for every journey.",
    thumbnail: "/book/destini-110/deluxe/black/front-three-quarter.jpg",
    imageScale: 1.12,
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image: "/book/destini-110/deluxe/black/front-three-quarter.jpg",
        views: [
          "/book/destini-110/deluxe/black/front.jpg",
          "/book/destini-110/deluxe/black/front-three-quarter.jpg",
          "/book/destini-110/deluxe/black/side.jpg",
          "/book/destini-110/deluxe/black/rear-three-quarter.jpg",
        ],
      },
    ],
    specs: [
      { value: "97.2 cc", label: "Engine", type: "engine" },
      { value: "70 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.02 PS", label: "Power", type: "power" },
      { value: "4 Speed", label: "Transmission", type: "transmission" },
      { value: "9.6 L", label: "Fuel Tank", type: "fuel" },
    ],
  },
  {
    id: "splendor",
    name: "SPLENDOR",
    subtitle: "Reliable. Efficient. Everyday.",
    thumbnail: "/book/destini-110/splendor/black/front-three-quarter.webp",
    imageScale: 1.14,
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image: "/book/destini-110/splendor/black/front-three-quarter.webp",
        views: [
          "/book/destini-110/splendor/black/front-three-quarter.webp",
          "/book/destini-110/splendor/black/side.webp",
          "/book/destini-110/splendor/black/rear-three-quarter.webp",
          "/book/destini-110/splendor/black/other-side.webp",
        ],
      },
    ],
    specs: [
      { value: "97.2 cc", label: "Engine", type: "engine" },
      { value: "70 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.02 PS", label: "Power", type: "power" },
      { value: "4 Speed", label: "Transmission", type: "transmission" },
      { value: "9.8 L", label: "Fuel Tank", type: "fuel" },
    ],
  },
];

/* =========================================================
   SCOOTERS
========================================================= */

const scooters: Vehicle[] = [
  {
    id: "destini-110",
    name: "Destini 110",
    subtitle: "Comfort. Style. Everyday convenience.",
    thumbnail: "/book/destini-110/blue/front-three-quarter.jpg",
    imageScale: 1.1,
    colors: [
      {
        id: "blue",
        name: "Blue",
        hex: "#0E5D8E",
        image: "/book/destini-110/blue/front-three-quarter.jpg",
        views: [
          "/book/destini-110/blue/front.jpg",
          "/book/destini-110/blue/front-three-quarter.jpg",
          "/book/destini-110/blue/side.jpg",
          "/book/destini-110/blue/rear-three-quarter.jpg",
        ],
      },
      {
        id: "red",
        name: "Red",
        hex: "#E21A24",
        image: "/book/destini-110/red/front-three-quarter.jpg",
        views: [
          "/book/destini-110/red/front.jpg",
          "/book/destini-110/red/front-three-quarter.jpg",
          "/book/destini-110/red/side.jpg",
          "/book/destini-110/red/rear-three-quarter.jpg",
        ],
      },
      {
        id: "silver",
        name: "Silver",
        hex: "#C8D2D4",
        image: "/book/destini-110/silver/front-three-quarter.jpg",
        views: [
          "/book/destini-110/silver/front.jpg",
          "/book/destini-110/silver/front-three-quarter.jpg",
          "/book/destini-110/silver/side.jpg",
        ],
      },
    ],
    specs: [
      { value: "110.9 cc", label: "Engine", type: "engine" },
      { value: "50 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.15 PS", label: "Power", type: "power" },
      { value: "Automatic", label: "Transmission", type: "transmission" },
      { value: "5 L", label: "Fuel Tank", type: "fuel" },
    ],
  },
];

/* =========================================================
   EV
========================================================= */

const evVehicles: Vehicle[] = [
  {
    id: "vida-vx2-plus",
    name: "VIDA VX2 PLUS",
    subtitle: "Electric mobility for everyday life.",
    thumbnail: "/book/destini-110/vida-vx2/black/front-three-quarter-1.jpg",
    imageScale: 1.08,
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image: "/book/destini-110/vida-vx2/black/front-three-quarter-1.jpg",
        views: [
          "/book/destini-110/vida-vx2/black/front.jpg",
          "/book/destini-110/vida-vx2/black/front-three-quarter-1.jpg",
          "/book/destini-110/vida-vx2/black/left-side.jpg",
          "/book/destini-110/vida-vx2/black/right-side.jpg",
          "/book/destini-110/vida-vx2/black/front-three-quarter-2.jpg",
        ],
      },
      {
        id: "grey",
        name: "Grey",
        hex: "#8A8582",
        image: "/book/destini-110/vida-vx2/grey/front-three-quarter-1.webp",
        views: [
          "/book/destini-110/vida-vx2/grey/front.webp",
          "/book/destini-110/vida-vx2/grey/front-three-quarter-1.webp",
          "/book/destini-110/vida-vx2/grey/left-side.webp",
          "/book/destini-110/vida-vx2/grey/right-side.webp",
          "/book/destini-110/vida-vx2/grey/front-three-quarter-2.webp",
        ],
      },
    ],
    specs: [
      { value: "Electric", label: "Motor", type: "engine" },
      { value: "100 km", label: "Range", type: "mileage" },
      { value: "Electric", label: "Power", type: "power" },
      { value: "Automatic", label: "Drive", type: "transmission" },
      { value: "Battery", label: "Energy", type: "fuel" },
    ],
  },
];

/* =========================================================
   CATEGORY MAP
========================================================= */

const vehicleData: Record<Category, Vehicle[]> = {
  motorcycle: motorcycles,
  scooter: scooters,
  ev: evVehicles,
};

/* =========================================================
   SMART IMAGE
========================================================= */

function SmartImage({
  src,
  alt,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const getCandidates = (value: string) => {
    const base = value.replace(/\.(avif|webp|png|jpe?g)$/i, "");

    return Array.from(
      new Set([
        value,
        `${base}.avif`,
        `${base}.webp`,
        `${base}.png`,
        `${base}.jpg`,
        `${base}.jpeg`,
      ])
    );
  };

  const candidates = getCandidates(src);
  const [candidateIndex, setCandidateIndex] = useState(0);

  const activeCandidateIndex = Math.min(candidateIndex, candidates.length - 1);

  return (
    <Image
      src={candidates[activeCandidateIndex]}
      alt={alt}
      width={1000}
      height={1000}
      unoptimized
      draggable={false}
      className={className}
      style={style}
      onError={() => {
        setCandidateIndex((current) =>
          current < candidates.length - 1 ? current + 1 : current
        );
      }}
    />
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function MomentsMotion() {
  const [category, setCategory] = useState<Category>("scooter");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(scooters[0]);
  const [selectedColor, setSelectedColor] = useState<VehicleColor>(
    scooters[0].colors[0]
  );
  const [viewIndex, setViewIndex] = useState(0);
  const [showTestRide, setShowTestRide] = useState(false);

  const vehicles = vehicleData[category];

  const selectedViews =
    selectedColor.views && selectedColor.views.length > 0
      ? selectedColor.views
      : [selectedColor.image];

  useEffect(() => {
    if (!showTestRide) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowTestRide(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showTestRide]);

  useEffect(() => {
    if (selectedViews.length <= 1) return;

    const timer = window.setInterval(() => {
      setViewIndex((prev) => (prev + 1) % selectedViews.length);
    }, 1300);

    return () => window.clearInterval(timer);
  }, [selectedVehicle.id, selectedColor.id, selectedViews.length]);

  const changeCategory = (newCategory: Category) => {
    setCategory(newCategory);
    const first = vehicleData[newCategory][0];
    if (!first) return;
    setSelectedVehicle(first);
    setSelectedColor(first.colors[0]);
    setViewIndex(0);
  };

  const changeVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedColor(vehicle.colors[0]);
    setViewIndex(0);
  };

  return (
    <section
      className="w-full overflow-x-hidden bg-[#F5F6F6] text-[#111111]"
      style={{
        fontFamily: '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] bg-[#F5F6F6] px-3 py-3 sm:px-5 sm:py-4 md:px-7 lg:h-[100svh] lg:min-h-0 lg:max-h-none lg:px-10 lg:py-3 xl:px-[52px] xl:py-4">
        <div className="grid grid-cols-1 gap-7 lg:h-full lg:min-h-0 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-[42px] xl:grid-cols-[520px_minmax(0,1fr)] xl:gap-[52px]">
          {/* LEFT PANEL */}
          <aside className="flex min-h-0 w-full flex-col overflow-hidden rounded-[10px] border border-[#E4E4E4] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <div className="shrink-0 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-7">
              <h2 className="text-[17px] font-bold uppercase leading-[1.05] tracking-[0.015em] sm:text-[18px] lg:text-[19px]">
                SELECT A VEHICLE
              </h2>

              <div className="mt-4 grid grid-cols-3 border-b border-[#DDDDDD]">
                <CategoryTab
                  title="Motorcycle"
                  active={category === "motorcycle"}
                  disabled={false}
                  onClick={() => changeCategory("motorcycle")}
                />
                <CategoryTab
                  title="Scooter"
                  active={category === "scooter"}
                  disabled={scooters.length === 0}
                  onClick={() => changeCategory("scooter")}
                />
                <CategoryTab
                  title="EV"
                  active={category === "ev"}
                  disabled={false}
                  onClick={() => changeCategory("ev")}
                />
              </div>
            </div>

            <div className="grid min-h-0 flex-1 content-start grid-cols-2 auto-rows-[205px] gap-[14px] overflow-y-auto overflow-x-hidden p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 lg:auto-rows-[175px] xl:auto-rows-[182px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A4A4A4] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[4px]">
              {vehicles.map((vehicle) => {
                const active = selectedVehicle.id === vehicle.id;

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => changeVehicle(vehicle)}
                    className={`group relative flex h-full w-full flex-col overflow-hidden rounded-[7px] border bg-white text-left transition-all duration-300 ${
                      active
                        ? "border-[#000000] shadow-[0_3px_13px_rgba(237,28,36,0.10)]"
                        : "border-[#E0E0E0] shadow-[0_2px_9px_rgba(0,0,0,0.07)] hover:border-black hover:shadow-[0_4px_15px_rgba(0,0,0,0.10)]"
                    }`}
                  >
                    {active && (
                      <span className="absolute right-[10px] top-[10px] z-20 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#000000] text-white">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    )}

                    <div className="relative h-[132px] w-full shrink-0 overflow-hidden bg-white sm:h-[138px] lg:h-[136px] xl:h-[142px]">
                      <SmartImage
                        src={vehicle.thumbnail}
                        alt={vehicle.name}
                        style={{
                          transform: `scale(${vehicle.imageScale ?? 1.1})`,
                          transformOrigin: "center",
                        }}
                        className="h-full w-full object-contain object-center p-3 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex min-h-0 flex-1 items-center justify-center border-t border-[#E7E7E7] bg-[#F1F1F1] px-3 text-center">
                      <span
                        className={`text-[10px] font-semibold uppercase leading-[1.15] tracking-[0.025em] sm:text-[11px] lg:text-[11px] xl:text-[12px] ${
                          active ? "text-[#000000]" : "text-[#101010]"
                        }`}
                      >
                        {vehicle.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <main className="flex min-h-0 min-w-0 flex-col bg-[#F5F6F6] lg:overflow-hidden">
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h1 className="text-[26px] font-bold uppercase leading-[1.05] tracking-[0.015em] sm:text-[28px] md:text-[29px] lg:text-[30px] xl:text-[30px]">
                  {selectedVehicle.name}
                </h1>
                <p className="mt-[7px] text-[12px] font-normal leading-[1.4] tracking-[-0.01em] text-[#555555] sm:text-[13px] lg:text-[14px]">
                  {selectedVehicle.subtitle}
                </p>
              </div>

              <div className="shrink-0 pr-[8px] sm:min-w-[190px] sm:pr-[10px]">
                <p className="mb-[7px] text-[8px] font-medium uppercase tracking-[0.13em] text-[#555555] sm:text-right">
                  CHOOSE YOUR COLOUR
                </p>

                <div className="flex flex-wrap items-start gap-[9px] sm:justify-end">
                  {selectedVehicle.colors.map((color) => {
                    const active = selectedColor.id === color.id;

                    return (
                      <div
                        key={color.id}
                        className="flex min-w-[38px] flex-col items-center"
                      >
                        <button
                          type="button"
                          title={color.name}
                          aria-label={`Select ${color.name}`}
                          onClick={() => {
                            setSelectedColor(color);
                            setViewIndex(0);
                          }}
                          className={`relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white transition-all duration-200 ${
                            active
                              ? "border-2 border-black"
                              : "border border-[#CFCFCF] hover:border-black"
                          }`}
                        >
                          <span
                            className="h-[22px] w-[22px] rounded-full border border-black/10"
                            style={{ backgroundColor: color.hex }}
                          />

                          {active && (
                            <span className="absolute right-[-2px] top-[-3px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#000000] text-white">
                              <Check size={9} strokeWidth={4} />
                            </span>
                          )}
                        </button>

                        <span
                          className={`mt-[5px] min-h-[10px] text-center text-[8px] font-medium uppercase leading-none tracking-[0.05em] text-black ${
                            active ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {color.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* UNIFIED CONTAINER FOR IMAGE AND SPECS */}
            <div className="relative mt-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[10px] border border-[#E6E6E6] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.05)]">
              {/* IMAGE DISPLAY */}
              <div className="relative h-[250px] w-full flex-1 overflow-hidden sm:h-[280px] md:h-[300px] lg:h-auto">
                <SmartImage
                  key={`${selectedVehicle.id}-${selectedColor.id}-${viewIndex}`}
                  src={selectedViews[viewIndex] ?? selectedColor.image}
                  alt={`${selectedVehicle.name} ${selectedColor.name} angle ${viewIndex + 1}`}
                  style={{
                    transform: `scale(${selectedVehicle.imageScale ?? 1.1})`,
                    transformOrigin: "center",
                  }}
                  className="h-full w-full object-contain object-center p-2 sm:p-3 lg:p-4"
                />
              </div>

              {/* INTEGRATED SPECS BAR INSIDE THE SAME DIV */}
              <div className="grid shrink-0 grid-cols-2 border-t border-[#ECECEC] bg-white sm:grid-cols-3 lg:grid-cols-5">
                {selectedVehicle.specs.map((spec, index) => (
                  <SpecBox
                    key={`${spec.label}-${index}`}
                    spec={spec}
                    last={index === selectedVehicle.specs.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-[12px] flex shrink-0 flex-col items-center justify-center gap-[10px] sm:flex-row">
              <button
                type="button"
                className="flex h-[40px] w-[150px] items-center justify-center border border-[#07131D] bg-transparent px-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#07131D] transition-colors duration-300 ease-out hover:bg-[#07131D] hover:text-white sm:w-[165px] lg:w-[170px]"
              >
                <span className="whitespace-nowrap">VIEW DETAILS</span>
              </button>

              <div className="relative h-[40px] w-[150px] shrink-0 overflow-visible sm:w-[165px] lg:w-[170px]">
                <button
                  type="button"
                  onClick={() => setShowTestRide(true)}
                  className="group absolute left-0 top-0 flex h-[40px] w-[150px] items-center justify-between overflow-hidden border border-black bg-black px-5 text-[9px] font-semibold uppercase tracking-[0.10em] text-white transition-[width,background-color] duration-300 ease-out hover:w-[205px] hover:bg-[#1a1a1a] sm:w-[165px] sm:hover:w-[210px] lg:w-[170px] lg:hover:w-[205px]"
                >
                  <span className="whitespace-nowrap">BOOK A TEST RIDE</span>
                  <ArrowRight
                    size={17}
                    strokeWidth={1.6}
                    className="ml-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* TEST RIDE POPUP */}
      {showTestRide && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-2 sm:p-4"
          onMouseDown={() => setShowTestRide(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Book a test ride"
        >
          <div
            className="relative max-h-[94vh] w-full max-w-[980px] overflow-hidden rounded-[16px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.30)] sm:rounded-[20px]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <TestRidePopupContent onClose={() => setShowTestRide(false)} />
          </div>
        </div>
      )}
    </section>
  );
}

/* =========================================================
   CATEGORY TAB
========================================================= */

function CategoryTab({
  title,
  active,
  onClick,
  disabled = false,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative flex min-h-[50px] items-center justify-center px-2 text-[9px] font-medium uppercase tracking-[0.015em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35 sm:text-[10px] lg:text-[10px] ${
        active ? "text-[#111111]" : "text-[#555555] hover:text-black"
      }`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#000000] transition-all duration-300 ${
          active ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />
    </button>
  );
}

/* =========================================================
   SPEC BOX
========================================================= */

function SpecBox({ spec, last }: { spec: VehicleSpec; last: boolean }) {
  const getIcon = () => {
    switch (spec.type) {
      case "engine":
        return <Cog size={17} strokeWidth={1.7} />;
      case "mileage":
        return <Gauge size={17} strokeWidth={1.7} />;
      case "power":
        return <Zap size={17} strokeWidth={1.7} />;
      case "transmission":
        return <Settings size={17} strokeWidth={1.7} />;
      case "fuel":
        return <Fuel size={17} strokeWidth={1.7} />;
      default:
        return <Cog size={17} strokeWidth={1.7} />;
    }
  };

  return (
    <div
      className={`flex min-h-[64px] flex-col items-center justify-center px-1.5 py-[5px] text-center ${
        !last ? "border-r border-[#ECECEC]" : ""
      }`}
    >
      <div className="text-[#ED111C]">{getIcon()}</div>
      <strong className="mt-[4px] text-[8px] font-semibold leading-none tracking-[-0.01em] text-[#111111] sm:text-[9px] lg:text-[9px]">
        {spec.value}
      </strong>
      <span className="mt-[2px] text-[6px] font-normal leading-none text-[#555555] sm:text-[6.5px] lg:text-[7px]">
        {spec.label}
      </span>
    </div>
  );
}

/* =========================================================
   COMPACT DROPDOWN COMPONENT
========================================================= */

function CompactDropdown({
  label,
  placeholder,
  options,
  direction = "down",
}: {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  direction?: "up" | "down";
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectedLabel =
    options.find((option) => option.value === selected)?.label ?? "";

  return (
    <div className="relative">
      <label className="mb-0.5 block text-[10px] font-medium text-gray-800 sm:text-[11px]">
        {label} <span className="text-red-500">*</span>
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-7 w-full items-center justify-between rounded-[5px] border border-[#D7DCE2] bg-[#F6F7F8] px-2.5 text-left text-[10px] font-medium text-gray-800 outline-none transition hover:border-[#B9C1CC] focus:border-[#0052A5] focus:bg-white sm:h-8 sm:text-[11px]"
      >
        <span className={selectedLabel ? "text-gray-800" : "text-[#7C8798]"}>
          {selectedLabel || placeholder}
        </span>

        <ChevronDown
          size={14}
          className={`shrink-0 text-[#6B7280] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className={`absolute left-0 right-0 z-[250] overflow-hidden rounded-[6px] border border-[#D7DCE2] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] ${
            direction === "up"
              ? "bottom-[calc(100%+4px)]"
              : "top-[calc(100%+4px)]"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSelected(option.value);
                setOpen(false);
              }}
              className="block w-full border-b border-[#EEF1F4] px-2.5 py-1.5 text-left text-[10px] font-medium text-gray-800 transition last:border-b-0 hover:bg-[#F5F7FA] sm:text-[11px]"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   TEST RIDE POPUP CONTENT
========================================================= */

function TestRidePopupContent({ onClose }: { onClose?: () => void }) {
  const vehicleOptions = [
    { value: "splendor-plus", label: "Splendor Plus" },
    { value: "xtreme-160r", label: "Xtreme 160R" },
    { value: "karizma-xmr", label: "Karizma XMR" },
    { value: "destini-110", label: "Destini 110" },
  ];

  const showroomOptions = [
    { value: "madhapur", label: "Phoenix Motors - Madhapur" },
    { value: "kukatpally", label: "Phoenix Motors - Kukatpally" },
    { value: "gachibowli", label: "Phoenix Motors - Gachibowli" },
    { value: "banjara-hills", label: "Phoenix Motors - Banjara Hills" },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111] text-black"
      style={{
        fontFamily: '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <SmartImage
          src="/images/momentsinmotion/test.png"
          alt="Book a test ride"
          className="h-full w-full object-cover object-[40%_center] sm:object-[42%_center] md:object-[45%_center] lg:object-[47%_center]"
        />

        <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-r md:from-black/35 md:via-black/10 md:to-black/5" />
      </div>

      {/* PHOENIX LOGO */}
      <div className="absolute left-4 top-4 z-30 sm:left-6 sm:top-5 md:left-8 md:top-7 lg:left-10 lg:top-8">
        <Image
          src="/images/momentsinmotion/logo.png"
          alt="Phoenix Motors"
          width={100}
          height={40}
          unoptimized
          className="h-auto w-[72px] object-contain sm:w-[82px] md:w-[92px] lg:w-[100px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex max-h-[90vh] w-full flex-col overflow-y-auto md:max-h-[94vh] md:flex-row md:items-stretch md:justify-between md:overflow-visible">
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-end p-5 pt-12 text-white sm:p-7 sm:pt-16 md:w-[45%] md:p-8 md:pt-20 lg:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/85 sm:text-xs">
            Phoenix Motors
          </p>

          <h4 className="mt-1.5 max-w-[300px] text-lg font-medium leading-tight sm:mt-2 sm:text-2xl md:text-3xl">
            Find Your Perfect Ride
          </h4>

          <p className="mt-1.5 max-w-[340px] text-xs font-normal leading-relaxed text-white/90 sm:mt-2 sm:text-sm">
            Book your test ride and experience your preferred motorcycle before you
            decide.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex w-full items-center justify-center p-3 sm:p-4 md:w-[55%] md:justify-end md:p-6 lg:p-8">
          <div className="relative mx-auto w-full max-w-[420px] rounded-xl bg-white p-4 shadow-[0_14px_45px_rgba(0,0,0,0.22)] sm:rounded-2xl sm:p-5 md:mx-0">
            {/* FORM MAIN HEADING WITH LEFT BACK ARROW */}
            <div className="mb-3 flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                aria-label="Go back"
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
              >
                <ArrowLeft size={18} strokeWidth={2} />
              </button>

              <h2 className="text-base font-bold leading-tight text-gray-900 sm:text-lg md:text-xl">
                Start Your Journey
              </h2>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full space-y-2"
            >
              {/* NAME */}
              <div>
                <label className="mb-0.5 block text-[10px] font-medium text-gray-800 sm:text-[11px]">
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-7 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-2.5 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-8"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-0.5 block text-[10px] font-medium text-gray-800 sm:text-[11px]">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Enter your number"
                  className="h-7 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-2.5 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-8"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-0.5 block text-[10px] font-medium text-gray-800 sm:text-[11px]">
                  Email ID <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-7 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-2.5 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-8"
                />
              </div>

              {/* VEHICLE */}
              <CompactDropdown
                label="Vehicle Model"
                placeholder="Select vehicle model"
                options={vehicleOptions}
                direction="down"
              />

              {/* SHOWROOM */}
              <CompactDropdown
                label="Showroom"
                placeholder="Select showroom"
                options={showroomOptions}
                direction="up"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-2 h-8 w-full rounded-md bg-[#0052A5] text-xs font-semibold text-white transition-all duration-300 hover:bg-[#003D7C] hover:shadow-[0_5px_16px_rgba(0,82,165,0.25)] sm:h-9"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}