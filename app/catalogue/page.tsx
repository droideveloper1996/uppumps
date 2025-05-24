"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
interface PartDetail {
  name: string;
  specification?: string | null;
  image: string;
  Productdescription: string[];
}

const partDetails: PartDetail[] = [
  {
    name: "Head Assembly",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/head_assembly.jpg",
    Productdescription: [
      "The Head Assembly is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Head Assembly",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/head_assembly_ewd.jpg",
    Productdescription: [
      "The Head Assembly is a key structural component of the hand pump system, especially in EDWP (Extra Deep Well Pump) models.",
      "Specification: EDWP",
      "Designed for extreme-depth applications where water tables exceed standard depths.",
      "Engineered with reinforced materials to handle higher suction and pressure requirements.",
      "Corrosion-resistant galvanized coating ensures durability in harsh underground environments.",
      "Integrated with precision-machined lever mounting points for stable handle operation.",
      "Supports long-term reliability with minimal wear, even under heavy usage.",
      "Ensures airtight sealing with plunger mechanisms to maintain consistent water flow.",
      "Tested under rigorous mechanical and environmental stress simulations.",
      "Compatible with India Mark II EDWP configurations and other deep well standards.",
      "Ideal for deep rural installations, community water supply schemes, and institutional hand pump setups.",
    ],
  },
  {
    name: "Cylinder Assembly",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/cylinder_assembly_1.jpg",
    Productdescription: [
      "The Cylinder Assembly is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Upper Valve Assembly",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/upper_valve_guide_1.jpg",
    Productdescription: [
      "The Upper Valve Assembly is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Plunger Valve Assembly",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plungers.jpg",
    Productdescription: [
      "The Plunger Valve Assembly is a critical component of a hand pump system.",
      "Specification: EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Lower Valve Assembly",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/lower_valve_assembly.jpg",
    Productdescription: [
      "The Lower Valve Assembly is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Head Box",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/head_box.jpg",
    Productdescription: [
      "The Head Box is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Handle Standard",
    specification: "Hot Dip Galvanised, EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/handle_standard_1.jpg",
    Productdescription: [
      "The Handle Standard is a critical component of a hand pump system.",
      "Specification: Hot Dip Galvanised, EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Stand",
    specification: "Telescopic, Normal, EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/stand_normal.jpeg",
    Productdescription: [
      "The Stand is a critical component of a hand pump system.",
      "Specification: Telescopic, Normal, EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Water Tank",
    specification: "Optional",
    image: "/assets/IndianPagesImage/AccessoryParts/water_tank.jpg",
    Productdescription: [
      "The Water Tank is a critical component of a hand pump system.",
      "Specification: Optional",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Plunger Rod",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plungers.jpg",
    Productdescription: [
      "The Plunger Rod is a critical component of a hand pump system.",
      "Specification: Standard & EDWP",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Axle",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/axle_1.jpg",
    Productdescription: [
      "The Axle is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Third Plate",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/third_plate_1.jpeg",
    Productdescription: [
      "The Third Plate is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Connecting Rod",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/CR1.png",
    Productdescription: [
      "The Connecting Rod is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Socket",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/socket_1.jpg",
    Productdescription: [
      "The Socket is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Bearing",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/bearing_1.jpg",
    Productdescription: [
      "The Bearing is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Coupler",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/coupler_1.jpeg",
    Productdescription: [
      "The Coupler is a critical component of a hand pump system.",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Hex Bolt",
    specification: "M12x40, M12x20",
    image: "/assets/IndianPagesImage/AccessoryParts/hex_bolt_1.jpg",
    Productdescription: [
      "The Hex Bolt is a critical component of a hand pump system.",
      "Specification: M12x40, M12x20",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Hex Nut",
    specification: "M12x1.75",
    image: "/assets/IndianPagesImage/AccessoryParts/hex_nut_1.jpg",
    Productdescription: [
      "The Hex Nut is a critical component of a hand pump system.",
      "Specification: M12x1.75",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "HT Bolt",
    specification: "M10x40",
    image: "/assets/IndianPagesImage/AccessoryParts/ht_bolt_m10x40_1.jpeg",
    Productdescription: [
      "The HT Bolt is a critical component of a hand pump system.",
      "Specification: M10x40",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "Nylock Nut",
    specification: "M10",
    image: "/assets/IndianPagesImage/AccessoryParts/nylock_nut_m10_1.png",
    Productdescription: [
      "The Nylock Nut is a critical component of a hand pump system.",
      "Specification: M10",
      "Designed for long-lasting performance in rural and remote areas.",
      "Constructed using corrosion-resistant materials.",
      "Ensures consistent water flow with minimal effort.",
      "Engineered to withstand variable groundwater pressure.",
      "Simple to install, maintain, and replace in the field.",
      "Tested under harsh environmental conditions.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Precision-manufactured for exact fit and performance.",
      "Ideal for both domestic and industrial-grade applications.",
    ],
  },
  {
    name: "BUCKET SPACER",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/Bucket_Spacer.jpg",
    Productdescription: [
      "The Bucket Spacer is an essential internal component in hand pump mechanisms.",
      "Specification: Standard & EDWP",
      "Designed to maintain accurate spacing between moving parts within the plunger assembly.",
      "Helps ensure consistent alignment and smooth operation during water extraction.",
      "Manufactured using durable, wear-resistant materials to extend service life.",
      "Prevents metal-to-metal contact, reducing internal friction and component fatigue.",
      "Easy to install and replace without requiring specialized tools.",
      "Engineered to function under varying groundwater pressure conditions.",
      "Tested for dimensional precision and mechanical strength.",
      "Compatible with India Mark II/III standard hand pumps.",
      "Crucial for ensuring long-term reliability and efficiency in rural water systems.",
    ],
  },
  {
    name: "Chain with Coupling",
    specification: "Regular & Roller Chain",
    image: "/assets/IndianPagesImage/AccessoryParts/chain_handle.jpg",
    Productdescription: [
      "The Chain with Coupling is an essential linkage component used in hand pump systems.",
      "Specification: Regular & Roller Chain",
      "Connects the handle mechanism to the plunger rod, enabling effective water extraction.",
      "Manufactured using heavy-duty, rust-resistant steel for long-lasting performance.",
      "Available in both regular and roller chain configurations for various pump designs.",
      "Coupling ensures secure attachment and efficient transfer of force during operation.",
      "Tested for high tensile strength and cyclic durability under repeated use.",
      "Precision links reduce operational friction and noise while maintaining mechanical stability.",
      "Designed for easy installation and compatibility with India Mark II/III models.",
      "Ideal for both community and household hand pump setups in diverse environments.",
      "Engineered to endure frequent and rugged use, minimizing wear and maintenance needs.",
    ],
  },
  {
    name: "Washer",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/washer_1.jpg",
    Productdescription: [
      "The Washer is a critical sealing and spacing component in hand pump assemblies.",
      "Designed to distribute load evenly and prevent leakage in pipe joints and bolted connections.",
      "Constructed from corrosion-resistant materials such as galvanized steel or reinforced rubber.",
      "Used in conjunction with bolts, nuts, and other fasteners to maintain tight, secure fittings.",
      "Engineered for durability and consistent performance under variable water pressure conditions.",
      "Helps prevent loosening of connections due to vibration or pressure cycling.",
      "Available in various sizes and thicknesses to suit different hand pump models and configurations.",
      "Simple to install, replace, and inspect during regular maintenance cycles.",
      "Compatible with India Mark II/III hand pump designs and other rural water systems.",
      "Supports the long-term efficiency and leak-free operation of water extraction mechanisms.",
    ],
  },
  {
    name: "Reducer Cap",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/reducer_cap_1.jpg",
    Productdescription: [
      "The Reducer Cap is an essential fitting used in hand pump assemblies to join pipes of different diameters.",
      "Designed to ensure smooth flow transitions between varying pipe sizes while maintaining pressure consistency.",
      "Constructed using high-grade, corrosion-resistant galvanized iron or steel.",
      "Prevents leakage and misalignment in piping systems where size reduction is required.",
      "Provides a secure, threaded connection compatible with standard riser and delivery pipe sizes.",
      "Ideal for installation in both shallow and deep well configurations.",
      "Engineered to withstand continuous exposure to water pressure and environmental factors.",
      "Simplifies pipeline layout in constrained installations by reducing the need for custom fittings.",
      "Tested for strength, longevity, and compatibility with India Mark II/III hand pumps.",
      "Enables versatile water system designs for domestic, rural, and agricultural applications.",
    ],
  },
  {
    name: "Cylinder Body with Brass Liner",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/cylinder_brass_liner_1.jpg",
    Productdescription: [
      "The Cylinder Body with Brass Liner is a high-performance component in hand pump systems designed for efficient water lifting.",
      "Specification: Standard & EDWP",
      "Features a precision-fitted brass liner that enhances durability and reduces friction.",
      "Ideal for deep and shallow well installations requiring extended operational life.",
      "Constructed using high-quality cast iron or steel with corrosion-resistant coating.",
      "The brass lining offers superior wear resistance against continuous plunger movement.",
      "Engineered to handle variable groundwater pressure in demanding field conditions.",
      "Supports smooth, consistent water flow while minimizing maintenance needs.",
      "Manufactured under strict quality controls to ensure perfect fit and sealing.",
      "Compatible with India Mark II/III hand pumps and globally accepted standards.",
      "Widely used in community, agricultural, and emergency water supply installations.",
    ],
  },
  {
    name: "Brass Liner",
    specification: "Precision Machined",
    image: "/assets/IndianPagesImage/AccessoryParts/brass_liner_1.jpg",
    Productdescription: [
      "The Brass Liner is an essential component used inside the cylinder body of hand pumps to ensure smooth plunger operation.",
      "Specification: Precision Machined",
      "Crafted from high-grade brass for exceptional corrosion resistance and durability.",
      "Provides a low-friction surface for the plunger to move efficiently, reducing wear and tear.",
      "Enhances the overall efficiency and lifespan of the hand pump system.",
      "Precisely manufactured to ensure accurate dimensions and a snug fit within the cylinder.",
      "Suitable for both deep and shallow well applications.",
      "Compatible with India Mark II/III and other international standard hand pump models.",
      "Easy to install, replace, and maintain in the field.",
      "Ideal for high-usage environments like rural, agricultural, and community water systems.",
    ],
  },
  {
    name: "Plunger Yoke Body",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plunger_yoke_body_1.jpg",
    Productdescription: [
      "The Plunger Yoke Body is a crucial mechanical component in the hand pump assembly, connecting the plunger to the connecting rod.",
      "Specification: Standard & EDWP",
      "Designed for high strength and durability under repeated mechanical stress.",
      "Manufactured using corrosion-resistant and wear-resistant materials for long-term field performance.",
      "Provides a rigid and stable link between the plunger and the rod system to ensure efficient water lifting.",
      "Engineered to precise tolerances for smooth operation and minimal energy loss.",
      "Tested under real-world conditions to ensure reliability in rural, agricultural, and community setups.",
      "Compatible with India Mark II/III hand pumps and other global standards.",
      "Easy to install and maintain, with field-ready design and robust construction.",
      "Ideal for high-volume, heavy-duty water extraction applications.",
    ],
  },
  {
    name: "Plunger Upper Valve",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/plungers.jpg",
    Productdescription: [
      "The Plunger Upper Valve is an integral component of the hand pump mechanism, enabling efficient water movement during operation.",
      "Specification: Standard & EDWP",
      "Facilitates the one-way flow of water during the upward stroke of the plunger.",
      "Constructed from high-quality, corrosion-resistant materials for extended life in diverse water conditions.",
      "Designed to maintain optimal pressure and prevent leakage during pumping cycles.",
      "Ensures consistent performance under varying groundwater levels and soil types.",
      "Precision-engineered to match India Mark II/III hand pump standards.",
      "Easy to access and replace, supporting quick field maintenance and minimal downtime.",
      "Tested rigorously to handle repeated cycles in both rural and semi-urban environments.",
      "Ideal for use in both community-level and institutional water supply setups.",
    ],
  },
  {
    name: "Lower Spacer",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/lower_spacer.jpg",
    Productdescription: [
      "The Lower Spacer is a critical component used in EDWP hand pump assemblies for maintaining proper alignment and structural spacing.",
      "Specification: EDWP",
      "Manufactured using high-strength, corrosion-resistant materials for longevity.",
      "Provides stable support and spacing between internal pump components.",
      "Designed to minimize friction and ensure smooth vertical motion of the plunger mechanism.",
      "Ensures optimal pump performance under extended usage and groundwater pressure.",
      "Engineered to meet EDWP specifications for enhanced durability in extreme environmental conditions.",
      "Easy to install and replace during pump maintenance procedures.",
      "Ideal for both government and institutional hand pump projects.",
      "Tested under field conditions to verify reliability and dimensional accuracy.",
    ],
  },
  {
    name: "Follower",
    specification: "Standard & EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/follower_1.jpg",
    Productdescription: [
      "The Follower is a key internal component in hand pump mechanisms, responsible for maintaining alignment and controlled movement within the cylinder assembly.",
      "Specification: Standard & EDWP",
      "Precision-engineered to ensure consistent water flow during upstroke and downstroke cycles.",
      "Constructed from high-grade, corrosion-resistant materials to withstand continuous use in diverse environments.",
      "Designed for seamless compatibility with India Mark II and Mark III hand pump models.",
      "Optimizes the plunger assembly's functionality by reducing wear and maintaining vertical stability.",
      "Tested to ensure durability under varying pressure and water table conditions.",
      "Simple to install and replace in field applications with minimal tools required.",
      "Supports reliable operation over long periods with minimal maintenance needs.",
      "Essential for maintaining the hydraulic integrity of the pump system.",
    ],
  },
  {
    name: "Check Valve Guide",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/check_valve_guide_1.jpg",
    Productdescription: [
      "The Check Valve Guide is a precision component that ensures the correct alignment and functioning of the check valve within the hand pump assembly.",
      "Provides a stable path for the valve to move, ensuring effective sealing and preventing water backflow.",
      "Manufactured from robust, corrosion-resistant materials for extended durability and performance.",
      "Essential in maintaining proper water pressure and efficient flow during pump operation.",
      "Compatible with standard India Mark II and Mark III hand pump systems.",
      "Designed for easy integration and replacement within the pump's valve mechanism.",
      "Enhances the lifespan of the valve assembly by reducing friction and mechanical stress.",
      "Field-tested under varied environmental conditions to ensure reliable performance.",
      "Ideal for use in both rural and high-demand water supply systems.",
      "Supports consistent and leak-free operation over time.",
    ],
  },
  {
    name: "Check Valve Seat",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/check_valve_seat_1.jpg",
    Productdescription: [
      "The Check Valve Seat is a core component in the valve mechanism of hand pumps, responsible for sealing and controlling water flow direction.",
      "Provides a durable surface for the check valve to rest and seal, ensuring no backflow of water.",
      "Precision-engineered from high-strength, corrosion-resistant materials to withstand repeated use.",
      "Maintains water pressure efficiency by ensuring a leak-proof seal in the valve system.",
      "Specifically designed to integrate seamlessly with India Mark II and Mark III hand pump models.",
      "Supports smooth valve operation and reduces wear on mating components.",
      "Tested under rigorous operating conditions to ensure longevity and reliability.",
      "Simple to install, service, or replace in both field and workshop settings.",
      "Ideal for use in deepwell and standard hand pump configurations.",
      "Engineered to meet global standards for hand pump performance and durability.",
    ],
  },
  {
    name: "Rubber Sheet Retainer",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/rubber_sheet_1.jpg",
    Productdescription: [
      "The Rubber Sheet Retainer is a vital supporting component used to secure the rubber sealing sheet in hand pump assemblies.",
      "Provides firm positioning and structural support to the rubber sheet to ensure optimal sealing performance.",
      "Constructed from durable, corrosion-resistant materials for extended service life in variable water conditions.",
      "Maintains proper alignment and pressure distribution across the rubber sheet to prevent leakage.",
      "Essential for maintaining a watertight seal in both upper and lower valve assemblies.",
      "Precision-manufactured to fit India Mark II and Mark III hand pump models.",
      "Facilitates smooth pumping action and consistent water flow.",
      "Simple to install and replace during routine hand pump servicing.",
      "Suitable for use in both shallow and deep well hand pumps.",
      "Engineered to ensure long-term reliability and reduce maintenance frequency in remote areas.",
    ],
  },
  {
    name: "Rubber Bucket",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/rubber_bucket.jpg",
    Productdescription: [
      "The Rubber Bucket is a crucial sealing and pumping component used in the plunger assembly of hand pumps.",
      "Designed to create suction and pressure by forming a tight seal against the cylinder walls.",
      "Constructed from high-quality, wear-resistant rubber for flexibility and durability.",
      "Ensures efficient water displacement during each stroke, minimizing energy loss.",
      "Capable of withstanding varying groundwater conditions including sand and silt presence.",
      "Ideal for use in both India Mark II and Mark III hand pump models.",
      "Supports consistent water flow with minimal effort, even under deep-well pressure.",
      "Tested for extended service life under continuous usage.",
      "Easily replaceable in the field, requiring minimal maintenance tools.",
      "Essential for maintaining the overall performance and longevity of the hand pump system.",
    ],
  },
  {
    name: "Sealing Ring",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/sealing_ring_1.jpg",
    Productdescription: [
      "The Sealing Ring is an essential component used to prevent water leakage within the hand pump system.",
      "Crafted from high-grade, flexible rubber or polymer materials to ensure a watertight seal.",
      "Installed between critical interfaces such as cylinder joints, valves, and liners.",
      "Ensures optimal hydraulic performance by maintaining pressure and minimizing loss.",
      "Highly resistant to wear, pressure, and exposure to groundwater contaminants.",
      "Compatible with standard India Mark II and Mark III hand pumps.",
      "Easy to install and replace in field conditions with minimal downtime.",
      "Designed to withstand high cycling operations without deformation or breakdown.",
      "Essential for maintaining pump efficiency and long-term operational reliability.",
      "Tested for durability under diverse climatic and environmental conditions.",
    ],
  },
  {
    name: "Rubber Seating Upper Valve",
    specification: null,
    image:
      "/assets/IndianPagesImage/AccessoryParts/rubber_seating_upper_valve_1.jpg",
    Productdescription: [
      "The Rubber Seating Upper Valve is a vital sealing component in hand pump systems, ensuring unidirectional water flow.",
      "Constructed from durable rubber materials that provide excellent sealing and long service life.",
      "Positioned within the plunger assembly to seal against the valve seat during the upstroke.",
      "Prevents water backflow and improves volumetric efficiency of the hand pump.",
      "Resistant to deformation, abrasion, and wear from repeated pumping cycles.",
      "Compatible with India Mark II, Mark III, and EDWP models.",
      "Easy to replace in field conditions without requiring specialized tools.",
      "Maintains seal integrity even under varying groundwater pressures.",
      "Designed to meet standard performance specifications for rural and urban water systems.",
      "Tested for resilience under high-frequency usage in diverse environmental conditions.",
    ],
  },
  {
    name: "Rubber Seating Lower Valve",
    specification: null,
    image:
      "/assets/IndianPagesImage/AccessoryParts/rubber_seating_lower_valve_1.jpg",
    Productdescription: [
      "The Rubber Seating Lower Valve is an essential sealing component in the lower valve assembly of hand pump systems.",
      "Designed to allow water to enter the cylinder during the upstroke and prevent backflow during the downstroke.",
      "Manufactured from high-grade rubber to ensure excellent elasticity and durability.",
      "Ensures reliable one-way sealing under varying water pressure and flow conditions.",
      "Engineered for long service life and resistance to cracking, tearing, and deformation.",
      "Fits securely within standard India Mark II, Mark III, and EDWP pump designs.",
      "Field-replaceable with minimal tools, enabling quick maintenance and reduced downtime.",
      "Optimized for consistent performance in both rural and semi-urban water pumping applications.",
      "Tested for long-term use in harsh environmental conditions including varying water quality.",
      "A critical part of maintaining pump efficiency and ensuring clean water delivery.",
    ],
  },
  {
    name: "T-Bar",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/tbar_1.jpg",
    Productdescription: [
      "The T-Bar is a vital component in the EDWP (Extra Deep Well Pump) configuration, ensuring smooth vertical actuation.",
      "Specification: EDWP",
      "Acts as a stabilizing and connecting element between the handle and other pump mechanisms.",
      "Constructed from high-strength, corrosion-resistant materials suitable for deep well applications.",
      "Engineered to withstand repeated mechanical stress under rigorous hand-pumping conditions.",
      "Precision-designed to fit securely within standard EDWP hand pump assemblies.",
      "Promotes efficient mechanical force transmission from the handle to the internal pumping system.",
      "Simple to install, replace, and maintain in field operations.",
      "Tested for durability in high-depth groundwater extraction scenarios.",
      "Ideal for rural installations where maximum pump reliability and longevity are critical.",
    ],
  },
  {
    name: "Counter Weight",
    specification: "EDWP",
    image: "/assets/IndianPagesImage/AccessoryParts/counter_weight_1.jpg",
    Productdescription: [
      "The Counter Weight is an essential component in the EDWP (Extra Deep Well Pump) system, designed to balance the handle mechanism.",
      "Specification: EDWP",
      "Reduces manual effort by counterbalancing the upward and downward motion during pumping.",
      "Constructed using durable, corrosion-resistant materials for long-term performance in harsh environments.",
      "Helps maintain operational stability and extends the life of mechanical components.",
      "Precision-engineered to ensure compatibility with standard India Mark II/III EDWP models.",
      "Improves pumping efficiency and user comfort, especially in deep well installations.",
      "Simple to attach and maintain, ideal for remote and rural field deployment.",
      "Field-tested for performance under variable groundwater conditions.",
      "Supports sustainable access to clean water in low-resource settings.",
    ],
  },
  {
    name: "Upper Valve Guide w/ Rubber Seat",
    specification: null,
    image: "/assets/IndianPagesImage/AccessoryParts/upper_valve_guide_1.jpg",
    Productdescription: [
      "The Upper Valve Guide w/ Rubber Seat is a crucial part of the hand pump valve system, ensuring precise valve alignment and sealing.",
      "Combines a durable valve guide structure with a high-quality rubber seat for optimal sealing efficiency.",
      "Ensures proper flow direction and prevents backflow during pump operation.",
      "Constructed using corrosion-resistant and wear-resistant materials for long-term durability.",
      "Compatible with standard India Mark II/III hand pumps.",
      "Ideal for high-frequency usage in rural and remote water supply systems.",
      "Easy to install, inspect, and replace in the field.",
      "Engineered to withstand challenging groundwater and environmental conditions.",
      "Tested under extreme operating scenarios to ensure reliable performance.",
      "Supports long-term pump efficiency by minimizing leakage and pressure loss.",
    ],
  },
  {
    name: "Tool Set",
    specification: "For Installation & Major Repair",
    image: "/assets/IndianPagesImage/AccessoryParts/tool_set_1.jpg",
    Productdescription: [
      "The Tool Set is an essential kit designed for the efficient installation and major repair of hand pump systems.",
      "Specification: For Installation & Major Repair",
      "Includes a comprehensive collection of tools such as pipe wrenches, valve pullers, T-bars, spanners, and lifting devices.",
      "Engineered to support both minor maintenance and heavy-duty field servicing.",
      "Made from high-grade, rust-resistant materials to withstand rough handling and field conditions.",
      "Ideal for government, NGO, and private-sector teams working on rural water supply infrastructure.",
      "Simplifies the repair process and reduces downtime with all essential tools in one portable kit.",
      "Compatible with India Mark II, III, and other standard hand pump models.",
      "Tools are ergonomically designed for safety and ease of use during extended repair sessions.",
      "Trusted by field technicians for over two decades of reliable performance and support in critical conditions.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CataloguePage = () => {
  const [activePart, setActivePart] = useState<PartDetail | null>(null);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = activePart ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePart]);

  return (
    <section className="w-full min-h-screen font-poppins">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-[#2a6e9e] mb-2 text-center font-raleway">
            Product Catalogue – U P Pumps Pvt. Ltd.
          </h2>
          <p className="text-[#49566b] max-w-3xl mx-auto text-center mb-12 text-sm sm:text-base">
            Explore our precision-engineered spare parts designed for durability
            and seamless compatibility with our hand pump models.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partDetails.map((part, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="min-h-[200px] relative rounded-t-2xl overflow-hidden">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  className="object-fill transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <h5 className="text-lg font-semibold text-[#1a2e45] mb-2 font-raleway">
                  {part.name}
                </h5>
                <p className="text-sm text-[#4b5c6b] mb-4">
                  <strong>Specification:</strong>{" "}
                  {part.specification || "Standard compatible component"}
                </p>
                <button
                  onClick={() => setActivePart(part)}
                  className="bg-[#2a6e9e] hover:bg-[#1e5175] text-white text-sm px-4 py-2 rounded-lg mt-auto font-semibold transition"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup Panel */}
        <AnimatePresence>
          {activePart && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/40 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed right-0 top-0 h-full w-full sm:w-[500px] bg-white z-50 p-6 overflow-y-auto rounded-l-2xl border-l border-gray-200"
              >
                <IoIosCloseCircle
                  onClick={() => setActivePart(null)}
                  className="text-gray-800 hover:text-gray-600 mb-4 float-right text-2xl cursor-pointer hover:scale-110 duration-200 hover:rotate-180"
                />
                <h3 className="text-2xl font-bold text-[#2a6e9e] mb-4 font-raleway">
                  {activePart.name}
                </h3>
                <div className="relative w-full h-60 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={activePart.image}
                    alt={activePart.name}
                    fill
                    className="object-fill"
                  />
                </div>
                <p className="text-sm text-[#4b5c6b] mb-4">
                  <strong>Specification:</strong>{" "}
                  {activePart.specification || "Standard compatible component"}
                </p>
                <ul className="list-disc ml-5 text-sm text-[#3b4757] space-y-2 mb-6">
                  {activePart.Productdescription.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                {/* Chat With Us Button */}
                <button
                  onClick={() => {
                    setActivePart(null);
                    router.push("/contact");
                  }}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-3 rounded-lg font-semibold transition"
                >
                  💬 Chat With Us
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CataloguePage;
