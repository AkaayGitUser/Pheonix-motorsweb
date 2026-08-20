"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    id: "splendor-plus",
    name: "Splendor Plus",
    subtitle: "Reliable. Efficient. Everyday.",
    thumbnail: "/book/splendor-plus.png",
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#111111",
        image: "/book/splendor-plus.png",
      },
    ],
    specs: [
      { value: "97.2 cc", label: "Engine", type: "engine" },
      { value: "70 kmpl", label: "Mileage (ARAI)", type: "mileage" },
      { value: "8.02 PS", label: "Power", type: "power" },
      { value: "4 Speed", label: "Transmission", type: "transmission" },
      { value: "9.8 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "splendor-plus-xtec",
    name: "Splendor Plus XTEC",
    subtitle: "Smart. Stylish. Connected.",
    thumbnail: "/book/splendor-plus-xtec.png",
    colors: [
      {
        id: "black-red",
        name: "Black Red",
        hex: "#151515",
        image: "/book/splendor-plus-xtec.png",
      },
    ],
    specs: [
      { value: "97.2 cc", label: "Engine", type: "engine" },
      { value: "68 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.02 PS", label: "Power", type: "power" },
      { value: "4 Speed", label: "Transmission", type: "transmission" },
      { value: "9.8 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "splendor",
    name: "Splendor",
    subtitle: "Built for everyday journeys.",
    thumbnail: "/book/img2.png",
    colors: [
      {
        id: "brown",
        name: "Brown",
        hex: "#765A45",
        image: "/book/img2.png",
      },
    ],
    specs: [
      { value: "97.2 cc", label: "Engine", type: "engine" },
      { value: "65 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.02 PS", label: "Power", type: "power" },
      { value: "4 Speed", label: "Transmission", type: "transmission" },
      { value: "9.8 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "super-splendor",
    name: "Super Splendor",
    subtitle: "Performance meets everyday comfort.",
    thumbnail: "/book/super-splendor.png",
    colors: [
      {
        id: "red-black",
        name: "Red Black",
        hex: "#DA111A",
        image: "/book/super-splendor.png",
      },
    ],
    specs: [
      { value: "125 cc", label: "Engine", type: "engine" },
      { value: "60 kmpl", label: "Mileage", type: "mileage" },
      { value: "10.8 PS", label: "Power", type: "power" },
      { value: "5 Speed", label: "Transmission", type: "transmission" },
      { value: "12 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xpulse-200",
    name: "Xpulse 200",
    subtitle: "Adventure begins where the road ends.",
    thumbnail: "/book/img3.png",
    colors: [
      {
        id: "grey",
        name: "Grey",
        hex: "#575B5E",
        image: "/book/img3.png",
      },
    ],
    specs: [
      { value: "199.6 cc", label: "Engine", type: "engine" },
      { value: "40 kmpl", label: "Mileage", type: "mileage" },
      { value: "19.1 PS", label: "Power", type: "power" },
      { value: "5 Speed", label: "Transmission", type: "transmission" },
      { value: "13 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xpulse-200-4v",
    name: "Xpulse 200 4V",
    subtitle: "Explore beyond boundaries.",
    thumbnail: "/book/img4.png",
    colors: [
      {
        id: "white",
        name: "White",
        hex: "#EEEEEE",
        image: "/book/img4.png",
      },
    ],
    specs: [
      { value: "199.6 cc", label: "Engine", type: "engine" },
      { value: "40 kmpl", label: "Mileage", type: "mileage" },
      { value: "19.1 PS", label: "Power", type: "power" },
      { value: "5 Speed", label: "Transmission", type: "transmission" },
      { value: "13 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xtreme-250r",
    name: "Xtreme 250R",
    subtitle: "Power designed to thrill.",
    thumbnail: "/book/xtreme250r-red.png",
    colors: [
      {
        id: "red",
        name: "Red",
        hex: "#E10600",
        image: "/book/xtreme250r-red.png",
      },
      {
        id: "white",
        name: "White",
        hex: "#EEEEEE",
        image: "/book/xtreme-white.png",
      },
    ],
    specs: [
      { value: "249 cc", label: "Engine", type: "engine" },
      { value: "36 kmpl", label: "Mileage", type: "mileage" },
      { value: "30 PS", label: "Power", type: "power" },
      { value: "6 Speed", label: "Transmission", type: "transmission" },
      { value: "11.5 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xtreme-160r",
    name: "Xtreme 160R",
    subtitle: "Street performance redefined.",
    thumbnail: "/book/xtreme160r-grey.png",
    colors: [
      {
        id: "grey",
        name: "Grey",
        hex: "#9EA5A9",
        image: "/book/xtreme160r-grey.png",
      },
    ],
    specs: [
      { value: "163.2 cc", label: "Engine", type: "engine" },
      { value: "49 kmpl", label: "Mileage", type: "mileage" },
      { value: "15 PS", label: "Power", type: "power" },
      { value: "5 Speed", label: "Transmission", type: "transmission" },
      { value: "12 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xtreme-125r",
    name: "Xtreme 125R",
    subtitle: "Sporty. Sharp. Everyday.",
    thumbnail: "/book/xtreme-125r.png",
    colors: [
      {
        id: "red-black",
        name: "Red Black",
        hex: "#D71920",
        image: "/book/xtreme-125r.png",
      },
    ],
    specs: [
      { value: "124.7 cc", label: "Engine", type: "engine" },
      { value: "66 kmpl", label: "Mileage", type: "mileage" },
      { value: "11.5 PS", label: "Power", type: "power" },
      { value: "5 Speed", label: "Transmission", type: "transmission" },
      { value: "10 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "hf-deluxe",
    name: "HF Deluxe",
    subtitle: "Dependability for every journey.",
    thumbnail: "/book/img8.png",
    colors: [
      {
        id: "blue",
        name: "Blue",
        hex: "#14789C",
        image: "/book/img8.png",
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
];

/* =========================================================
   SCOOTERS
========================================================= */

const scooters: Vehicle[] = [
  {
    id: "destini-125",
    name: "Destini 125",
    subtitle: "Comfort with premium style.",
    thumbnail: "/book/sco1.png",
    colors: [
      {
        id: "green",
        name: "Green",
        hex: "#75816F",
        image: "/book/sco1.png",
      },
      {
        id: "yellow",
        name: "Yellow",
        hex: "#F2C100",
        image: "/book/xoom-yellow.png",
      },
    ],
    specs: [
      { value: "124.6 cc", label: "Engine", type: "engine" },
      { value: "50 kmpl", label: "Mileage", type: "mileage" },
      { value: "9 PS", label: "Power", type: "power" },
      { value: "Automatic", label: "Transmission", type: "transmission" },
      { value: "5 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "pleasure",
    name: "Pleasure",
    subtitle: "Easy. Stylish. Effortless.",
    thumbnail: "/book/Pleasure.png",
    colors: [
      {
        id: "silver",
        name: "Silver Brown",
        hex: "#C7C7C0",
        image: "/book/Pleasure.png",
      },
      {
        id: "red",
        name: "Red",
        hex: "#D71920",
        image: "/book/pleasure-red.jpg",
      },
      {
        id: "blue",
        name: "Blue",
        hex: "#6BB8C6",
        image: "/book/pleasure-blue.jpg",
      },
    ],
    specs: [
      { value: "110.9 cc", label: "Engine", type: "engine" },
      { value: "50 kmpl", label: "Mileage", type: "mileage" },
      { value: "8 PS", label: "Power", type: "power" },
      { value: "Automatic", label: "Transmission", type: "transmission" },
      { value: "4.8 L", label: "Fuel Tank", type: "fuel" },
    ],
  },

  {
    id: "xoom",
    name: "Xoom",
    subtitle: "Sporty design for city rides.",
    thumbnail: "/book/xoom-grey.png",
    colors: [
      {
        id: "grey",
        name: "Grey",
        hex: "#6C6E73",
        image: "/book/xoom-grey.png",
      },
    ],
    specs: [
      { value: "110.9 cc", label: "Engine", type: "engine" },
      { value: "53 kmpl", label: "Mileage", type: "mileage" },
      { value: "8.15 PS", label: "Power", type: "power" },
      { value: "Automatic", label: "Transmission", type: "transmission" },
      { value: "5.2 L", label: "Fuel Tank", type: "fuel" },
    ],
  },
];

/* =========================================================
   EV
========================================================= */

const evVehicles: Vehicle[] = [
  {
    id: "vida-vx2",
    name: "VIDA VX2",
    subtitle: "Electric mobility for everyday life.",
    thumbnail: "/book/vida-vx2-black.jpg",
    colors: [
      {
        id: "black",
        name: "Black",
        hex: "#151515",
        image: "/book/vida-vx2-black.jpg",
      },
      {
        id: "grey",
        name: "Grey",
        hex: "#928D89",
        image: "/book/vida-vx2-grey.jpg",
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

  {
    id: "vida-vx2-plus",
    name: "VIDA VX2 Plus",
    subtitle: "Smart electric performance.",
    thumbnail: "/book/vida-vx2-plus-blue.png",
    colors: [
      {
        id: "blue",
        name: "Blue",
        hex: "#0758A8",
        image: "/book/vida-vx2-plus-blue.png",
      },
      {
        id: "grey",
        name: "Grey",
        hex: "#777271",
        image: "/book/vida-vx2-plus-grey.jpg",
      },
    ],
    specs: [
      { value: "Electric", label: "Motor", type: "engine" },
      { value: "140 km", label: "Range", type: "mileage" },
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
   MAIN COMPONENT
========================================================= */

export default function MomentsMotion() {
  const [category, setCategory] =
    useState<Category>("motorcycle");

  const [selectedVehicle, setSelectedVehicle] =
    useState<Vehicle>(motorcycles[0]);

  const [selectedColor, setSelectedColor] =
    useState<VehicleColor>(motorcycles[0].colors[0]);

  const vehicles = vehicleData[category];

  const changeCategory = (newCategory: Category) => {
    setCategory(newCategory);

    const first = vehicleData[newCategory][0];

    if (!first) return;

    setSelectedVehicle(first);
    setSelectedColor(first.colors[0]);
  };

  const changeVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedColor(vehicle.colors[0]);
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

          lg:h-screen
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
                  onClick={() =>
                    changeCategory("motorcycle")
                  }
                />

                <CategoryTab
                  title="Scooter"
                  active={category === "scooter"}
                  onClick={() =>
                    changeCategory("scooter")
                  }
                />

                <CategoryTab
                  title="EV"
                  active={category === "ev"}
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

                        h-[153px]
                        w-full

                        shrink-0

                        overflow-hidden

                        bg-white
                      "
                    >
                      <Image
                        src={vehicle.thumbnail}
                        alt={vehicle.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                        className="
                          object-contain
                          p-3

                          transition-transform
                          duration-300

                          group-hover:scale-[1.025]
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
                        onClick={() =>
                          setSelectedColor(color)
                        }
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

                h-[265px]
                w-full

                shrink-0

                overflow-hidden

                bg-white

                sm:h-[335px]
                md:h-[385px]

                lg:h-[340px]

                xl:h-[385px]

                2xl:h-[410px]
              "
            >
              <Image
                key={`${selectedVehicle.id}-${selectedColor.id}`}
                src={selectedColor.image}
                alt={`${selectedVehicle.name} ${selectedColor.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 62vw"
                className="
                  object-contain
                  object-center
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
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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