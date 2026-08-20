"use client";

import React, { useEffect, useState } from "react";
import {
  Gauge,
  Zap,
  Settings,
  Fuel,
  Cog,
  ArrowRight,
  Check,
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

  // Optional 360-style image sequence.
  // Keep `image` as the normal/default image.
  // Add multiple angle images here when available.
  views?: string[];
}

interface VehicleSpec {
  value: string;
  label: string;
  type:
    | "engine"
    | "mileage"
    | "power"
    | "transmission"
    | "fuel";
}

interface Vehicle {
  id: string;
  name: string;
  subtitle: string;
  thumbnail: string;
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
    thumbnail:
      "/book/destini-110/karizma-xmr/grey/front-three-quarter.jpg",
    imageScale: 1.28,
    colors: [
      {
        id: "grey",
        name: "Grey",
        hex: "#7A7A7A",
        image:
          "/book/destini-110/karizma-xmr/grey/front-three-quarter.jpg",
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
    thumbnail:
      "/book/destini-110/deluxe/black/front-three-quarter.jpg",
    imageScale: 1.12,
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image:
          "/book/destini-110/deluxe/black/front-three-quarter.jpg",
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
    thumbnail:
      "/book/destini-110/splendor/black/front-three-quarter.webp",
    imageScale: 1.14,
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image:
          "/book/destini-110/splendor/black/front-three-quarter.webp",
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
    imageScale: 1.10,
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
   - Tries the exact path first.
   - If the extension is different, it automatically tries
     .avif, .webp, .png, .jpg and .jpeg.
   - This avoids blank images when your saved file extension
     is different from the code.
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

  const [candidates, setCandidates] = useState<string[]>(
    getCandidates(src)
  );
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidates(getCandidates(src));
    setCandidateIndex(0);
  }, [src]);

  return (
    <img
      src={candidates[candidateIndex]}
      alt={alt}
      draggable={false}
      className={className}
      style={style}
      onError={() => {
        setCandidateIndex((current) =>
          current < candidates.length - 1
            ? current + 1
            : current
        );
      }}
    />
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function MomentsMotion() {
  const [category, setCategory] =
    useState<Category>("scooter");

  const [selectedVehicle, setSelectedVehicle] =
    useState<Vehicle>(scooters[0]);

  const [selectedColor, setSelectedColor] =
    useState<VehicleColor>(scooters[0].colors[0]);

  const [viewIndex, setViewIndex] = useState(0);
  const [isAutoRotatePaused, setIsAutoRotatePaused] = useState(false);

  const vehicles = vehicleData[category];

  const selectedViews =
    selectedColor.views && selectedColor.views.length > 0
      ? selectedColor.views
      : [selectedColor.image];

  // AUTO ROTATE:
  // changes the main vehicle image automatically to create
  // a 360-style rotating effect from your angle images.
  useEffect(() => {
    if (selectedViews.length <= 1 || isAutoRotatePaused) return;

    const timer = window.setInterval(() => {
      setViewIndex((prev) => (prev + 1) % selectedViews.length);
    }, 1300);

    return () => window.clearInterval(timer);
  }, [selectedVehicle.id, selectedColor.id, selectedViews.length, isAutoRotatePaused]);

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
      className="
        w-full
        overflow-x-hidden
        bg-white
        text-[#111111]
      "
      style={{
        fontFamily:
          '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]

          bg-white

          px-3
          py-3

          sm:px-5
          sm:py-4

          md:px-7

          lg:min-h-[100svh] lg:h-[100svh]
          lg:min-h-[650px]
          lg:max-h-[950px]
          lg:px-10
          lg:py-5

          xl:px-[52px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-7

            lg:h-full
            lg:grid-cols-[535px_minmax(0,1fr)]
            lg:gap-[55px]

            xl:grid-cols-[545px_minmax(0,1fr)]
            xl:gap-[65px]
          "
        >
          {/* LEFT PANEL */}

          <aside
            className="
              flex
              min-h-0
              w-full
              flex-col

              overflow-hidden

              rounded-[10px]

              border
              border-[#E4E4E4]

              bg-white

              shadow-[0_4px_20px_rgba(0,0,0,0.07)]
            "
          >
            <div
              className="
                shrink-0

                px-4
                pt-4

                sm:px-6
                sm:pt-5

                lg:px-7
              "
            >
              <h2
                className="
                  text-[16px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.075em]

                  sm:text-[17px]

                  lg:text-[18px]
                "
              >
                SELECT A VEHICLE
              </h2>

              {/* TABS */}

              <div
                className="
                  mt-4

                  grid
                  grid-cols-3

                  border-b
                  border-[#DDDDDD]
                "
              >
                <CategoryTab
                  title="Motorcycle"
                  active={category === "motorcycle"}
                  disabled={false}
                  onClick={() =>
                    changeCategory("motorcycle")
                  }
                />

                <CategoryTab
                  title="Scooter"
                  active={category === "scooter"}
                  disabled={scooters.length === 0}
                  onClick={() =>
                    changeCategory("scooter")
                  }
                />

                <CategoryTab
                  title="EV"
                  active={category === "ev"}
                  disabled={false}
                  onClick={() =>
                    changeCategory("ev")
                  }
                />
              </div>
            </div>

            {/* VEHICLE CARDS */}

            <div
              className="
                grid
                min-h-0
                flex-1

                content-start

                grid-cols-2
                auto-rows-[205px]

                gap-[14px]

                overflow-y-auto
                overflow-x-hidden

                p-4

                sm:grid-cols-3

                md:grid-cols-4

                lg:grid-cols-2
                lg:auto-rows-[205px]

                xl:auto-rows-[212px]

                [&::-webkit-scrollbar]:w-[4px]

                [&::-webkit-scrollbar-track]:bg-transparent

                [&::-webkit-scrollbar-thumb]:rounded-full

                [&::-webkit-scrollbar-thumb]:bg-[#A4A4A4]
              "
            >
              {vehicles.map((vehicle) => {
                const active =
                  selectedVehicle.id === vehicle.id;

                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() =>
                      changeVehicle(vehicle)
                    }
                    className={`
                      group

                      relative

                      flex
                      h-full
                      w-full
                      flex-col

                      overflow-hidden

                      rounded-[7px]

                      border

                      bg-white

                      text-left

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                              border-[#000000]
                              shadow-[0_3px_13px_rgba(237,28,36,0.10)]
                            `
                          : `
                              border-[#E0E0E0]
                              shadow-[0_2px_9px_rgba(0,0,0,0.07)]
                              hover:border-black
                              hover:shadow-[0_4px_15px_rgba(0,0,0,0.10)]
                            `
                      }
                    `}
                  >
                    {active && (
                      <span
                        className="
                          absolute
                          right-[10px]
                          top-[10px]
                          z-20

                          flex
                          h-[22px]
                          w-[22px]

                          items-center
                          justify-center

                          rounded-full

                          bg-[#000000]

                          text-white
                        "
                      >
                        <Check
                          size={13}
                          strokeWidth={3}
                        />
                      </span>
                    )}

                    {/* IMAGE AREA */}

                    <div
                      className="
                        relative

                        h-[150px]
                        w-full

                        sm:h-[155px]
                        lg:h-[160px]

                        shrink-0

                        overflow-hidden

                        bg-white
                      "
                    >
                      <SmartImage
                        src={vehicle.thumbnail}
                        alt={vehicle.name}
                        style={{
                          transform: `scale(${vehicle.imageScale ?? 1.1})`,
                          transformOrigin: "center",
                        }}
                        className="
                          h-full
                          w-full
                          object-contain
                          object-center
                          p-3

                          transition-transform
                          duration-300
                        "
                      />
                    </div>

                    {/* NAME FOOTER */}

                    <div
                      className="
                        flex
                        min-h-0
                        flex-1

                        items-center
                        justify-center

                        border-t
                        border-[#E7E7E7]

                        bg-[#F1F1F1]

                        px-3

                        text-center
                      "
                    >
                      <span
                        className={`
                          text-[10px]
                          font-semibold
                          uppercase
                          leading-[1.15]
                          tracking-[0.025em]

                          sm:text-[11px]
                          lg:text-[11px]
                          xl:text-[12px]

                          ${
                            active
                              ? "text-[#000000]"
                              : "text-[#101010]"
                          }
                        `}
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

          <main
            className="
              flex
              min-h-0
              min-w-0
              flex-col

              bg-white

              lg:overflow-hidden
            "
          >
            {/* TOP TITLE + COLOURS */}

            <div
              className="
                flex
                shrink-0
                flex-col
                gap-3

                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >
              <div className="min-w-0">
                <h1
                  className="
                    text-[24px]
                    font-bold
                    uppercase
                    leading-[1.05]
                    tracking-[-0.015em]

                    sm:text-[26px]
                    md:text-[27px]
                    lg:text-[28px]
                    xl:text-[29px]
                  "
                >
                  {selectedVehicle.name}
                </h1>

                <p
                  className="
                    mt-[7px]

                    text-[12px]
                    font-normal
                    leading-[1.4]
                    tracking-[-0.01em]

                    text-[#555555]

                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  {selectedVehicle.subtitle}
                </p>
              </div>

              {/* COLOR SELECTOR */}

              <div className="shrink-0 sm:min-w-[180px]">
                <p
                  className="
                    mb-[7px]

                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.13em]

                    text-[#555555]

                    sm:text-right
                  "
                >
                  CHOOSE YOUR COLOUR
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-[9px]

                    sm:justify-end
                  "
                >
                  {selectedVehicle.colors.map((color) => {
                    const active =
                      selectedColor.id === color.id;

                    return (
                      <button
                        key={color.id}
                        type="button"
                        title={color.name}
                        aria-label={`Select ${color.name}`}
                        onClick={() => {
                          setSelectedColor(color);
                          setViewIndex(0);
                        }}
                        className={`
                          relative

                          flex

                          h-[34px]
                          w-[34px]

                          items-center
                          justify-center

                          rounded-full

                          bg-white

                          transition-all
                          duration-200

                          ${
                            active
                              ? `
                                  scale-105
                                  border-2
                                  border-black
                                `
                              : `
                                  border
                                  border-[#CFCFCF]
                                  hover:border-black
                                `
                          }
                        `}
                      >
                        <span
                          className="
                            h-[22px]
                            w-[22px]

                            rounded-full

                            border
                            border-black/10
                          "
                          style={{
                            backgroundColor: color.hex,
                          }}
                        />

                        {active && (
                          <span
                            className="
                              absolute
                              -right-[4px]
                              -top-[4px]

                              flex
                              h-[15px]
                              w-[15px]

                              items-center
                              justify-center

                              rounded-full

                              bg-[#000000]

                              text-white
                            "
                          >
                            <Check
                              size={9}
                              strokeWidth={4}
                            />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <p
                  className="
                    mt-[6px]

                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.06em]

                    text-black

                    sm:text-right
                  "
                >
                  {selectedColor.name}
                </p>
              </div>
            </div>

            {/* LARGE VEHICLE IMAGE */}

            <div
              className="
                relative

                mt-1

                h-[290px]
                w-full

                shrink-0

                overflow-hidden

                bg-white

                sm:h-[330px]
                md:h-[370px]
                lg:h-[clamp(300px,45vh,390px)]
                xl:h-[clamp(330px,48vh,420px)]
                2xl:h-[430px]
              "
            >
              <SmartImage
                key={`${selectedVehicle.id}-${selectedColor.id}-${viewIndex}`}
                src={selectedViews[viewIndex] ?? selectedColor.image}
                alt={`${selectedVehicle.name} ${selectedColor.name} angle ${viewIndex + 1}`}
                style={{
                  transform: `scale(${selectedVehicle.imageScale ?? 1.1})`,
                  transformOrigin: "center",
                }}
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                  p-2
                  sm:p-3
                  lg:p-4
                "
              />

            </div>

            {/* SPECIFICATIONS */}

            <div
              className="
                mt-auto

                grid
                shrink-0

                grid-cols-2

                overflow-hidden

                rounded-[8px]

                border
                border-[#E6E6E6]

                bg-white

                shadow-[0_4px_17px_rgba(0,0,0,0.055)]

                sm:grid-cols-3

                lg:grid-cols-5
              "
            >
              {selectedVehicle.specs.map(
                (spec, index) => (
                  <SpecBox
                    key={`${spec.label}-${index}`}
                    spec={spec}
                    last={
                      index ===
                      selectedVehicle.specs.length - 1
                    }
                  />
                )
              )}
            </div>

            {/* CENTERED BUTTONS */}

            <div
              className="
                mt-[16px]

                flex
                shrink-0

                flex-col

                items-center
                justify-center

                gap-[12px]

                sm:flex-row
              "
            >
              <button
                type="button"
                className="
                  h-[46px]

                  w-full

                  rounded-[4px]

                  border
                  border-[#111111]

                  bg-white

                  px-6

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.015em]

                  text-black

                  transition-all
                  duration-300

                  hover:bg-black
                  hover:text-white

                  sm:w-[190px]
                  lg:w-[200px]
                "
              >
                VIEW DETAILS
              </button>

              <button
                type="button"
                className="
                  group

                  flex

                  h-[46px]

                  w-full

                  items-center
                  justify-center

                  gap-5

                  rounded-[4px]

                  bg-black

                  px-6

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.015em]

                  text-white

                  transition-colors
                  duration-300

                  hover:bg-black

                  sm:w-[235px]
                  lg:w-[245px]
                "
              >
                BOOK A TEST RIDE

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </main>
        </div>
      </div>
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
      className={`
        relative

        flex

        min-h-[42px]

        items-center
        justify-center

        px-2

        text-[9px]

        font-medium

        uppercase

        tracking-[0.015em]

        transition-colors
        duration-300

        disabled:cursor-not-allowed
        disabled:opacity-35

        sm:text-[10px]

        lg:text-[10px]

        ${
          active
            ? "text-[#111111]"
            : "text-[#555555] hover:text-black"
        }
      `}
    >
      {title}

      <span
        className={`
          absolute

          bottom-0
          left-1/2

          h-[3px]

          -translate-x-1/2

          rounded-full

          bg-[#000000]

          transition-all
          duration-300

          ${
            active
              ? "w-full opacity-100"
              : "w-0 opacity-0"
          }
        `}
      />
    </button>
  );
}

/* =========================================================
   SPEC BOX
========================================================= */

function SpecBox({
  spec,
  last,
}: {
  spec: VehicleSpec;
  last: boolean;
}) {
  const getIcon = () => {
    switch (spec.type) {
      case "engine":
        return <Cog size={24} strokeWidth={1.7} />;

      case "mileage":
        return <Gauge size={24} strokeWidth={1.7} />;

      case "power":
        return <Zap size={24} strokeWidth={1.7} />;

      case "transmission":
        return <Settings size={24} strokeWidth={1.7} />;

      case "fuel":
        return <Fuel size={24} strokeWidth={1.7} />;

      default:
        return <Cog size={24} strokeWidth={1.7} />;
    }
  };

  return (
    <div
      className={`
        flex

        min-h-[94px]

        flex-col

        items-center
        justify-center

        px-2
        py-[10px]

        text-center

        ${
          !last
            ? `
                border-b
                border-r
                border-[#ECECEC]

                lg:border-b-0
              `
            : ""
        }
      `}
    >
      <div className="text-[#ED111C]">
        {getIcon()}
      </div>

      <strong
        className="
          mt-[7px]

          text-[10px]

          font-semibold

          leading-none

          tracking-[-0.01em]

          text-[#111111]

          sm:text-[11px]

          lg:text-[12px]
        "
      >
        {spec.value}
      </strong>

      <span
        className="
          mt-[5px]

          text-[7px]

          font-normal

          leading-none

          text-[#555555]

          sm:text-[8px]

          lg:text-[8px]
        "
      >
        {spec.label}
      </span>
    </div>
  );
}