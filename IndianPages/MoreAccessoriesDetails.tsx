"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const accessoryParts = [
  {
    name: "Connecting Rods",
    spec: null,

    description: [
      "Connecting rods are essential components in the hand pump assembly, responsible for transmitting mechanical motion from the handle to the pump piston inside the cylinder. U. P. Pumps manufactures connecting rods using high-tensile galvanized iron and stainless steel for maximum durability and corrosion resistance.",
      "Each rod is precision-threaded and coupled with durable fasteners, ensuring a tight seal and minimal wear over time. Our rods are engineered to maintain alignment during pumping, reducing internal friction and improving water delivery efficiency.",
      "Standard lengths are available to match India Mark II and Mark III specifications, while custom sizes can be produced based on project requirements. These rods are rigorously tested for tensile strength and zinc coating consistency to conform to IS:15500 standards.",
    ],
    images: ["/assets/indianPagesImage/accessories/connecting_rods.jpg"],
  },
  {
    name: "Valves",
    spec: null,

    description: [
      "Valves are critical to regulating water flow and maintaining the pressure within hand pumps. We manufacture foot valves and check valves using high-quality stainless steel, bronze, and reinforced rubber to ensure leak-proof operation.",
      "Our valves are designed for low maintenance and easy replacement, compatible with all major hand pump models including India Mark II, III, and Afridev. These components play a key role in sustaining consistent water output even under heavy usage.",
      "Each valve undergoes hydraulic testing for backflow resistance and wear protection, and conforms to the Indian BIS and ISO 15500 certifications.",
    ],
    images: ["/assets/indianPagesImage/accessories/valves.jpg"],
  },
  {
    name: "Riser Pipes",
    spec: null,

    description: [
      "Riser pipes form the vertical water column in hand pumps and play a major role in water delivery efficiency. U. P. Pumps supplies riser pipes fabricated from galvanized iron, stainless steel, and uPVC based on project-specific needs.",
      "Our GI riser pipes are threaded with precision couplers to ensure secure joints that prevent leakage or pipe drop. Stainless steel variants are available for corrosive environments such as coastal and saline areas.",
      "Each riser pipe is tested for pressure endurance and bore alignment, ensuring smooth installation with India Mark II/III or Afridev pumps.",
    ],
    images: ["/assets/indianPagesImage/accessories/riser_pipes.jpg"],
  },
  {
    name: "Cylinders",
    spec: null,
    description: [
      "Pump cylinders house the piston and plunger and are the core of any hand pump. U. P. Pumps offers brass-lined cast iron and stainless steel cylinders for India Mark II, III, and Afridev models.",
      "Our cylinders are engineered for precision sealing, high abrasion resistance, and easy disassembly for repairs. Each unit undergoes pressure testing at 200 PSI and is compliant with BIS and UNICEF procurement standards.",
      "We also provide spare O-rings, piston seals, and cylinder covers as part of our maintenance kits to ensure your system remains operational for decades.",
    ],
    images: ["/assets/indianPagesImage/accessories/cylinders.jpg"],
  },
  {
    name: "Foot Valves",
    spec: null,
    description: [
      "Foot valves prevent water from flowing back into the borewell and ensure the pump remains primed. We manufacture both brass and polymer foot valves equipped with rubber washers for a secure seal.",
      "These valves are designed for deepwell applications and function effectively even with high sediment load. The self-closing mechanism ensures minimal backflow, protecting the riser assembly and enhancing pump performance.",
      "Foot valves from U. P. Pumps are suitable for all ISI-marked hand pumps and are certified under ISO 15500.",
    ],
    images: ["/assets/indianPagesImage/accessories/foot_valves.jpg"],
  },
  {
    name: "Plungers",
    spec: null,
    description: [
      "The plunger is the heart of the pumping mechanism, moving within the cylinder to draw water upward. Our plungers are built with nitrile rubber seals and stainless steel stems to offer long-lasting, smooth operation.",
      "Designed for compatibility with Mark II and Mark III hand pumps, our plungers are made for easy installation and minimal field maintenance. The rubber components are oil-resistant and food-grade, ensuring safe potable water extraction.",
      "Field-tested for over 5 lakh cycles, our plungers provide high efficiency in both shallow and deepwell installations.",
    ],
    images: ["/assets/indianPagesImage/accessories/plungers.jpg"],
  },
  {
    name: "Head Assemblies",
    spec: null,
    description: [
      "Our head assemblies are cast from ductile iron or stainless steel for maximum strength and durability. These components house the handle and pivot point and are powder-coated for weather resistance.",
      "Available in configurations for India Mark II, III, and custom variants, our head assemblies feature replaceable bearings, greased joints, and vibration-dampening hardware.",
      "We also provide optional locking systems to prevent misuse in community installations.",
    ],
    images: ["/assets/indianPagesImage/accessories/head_assembly.jpg"],
  },
  {
    name: "Chain & Handle Sets",
    spec: null,
    description: [
      "Our chain and handle sets are fabricated using forged steel and designed to resist bending under continuous use. These sets are ergonomically shaped for user comfort and are compatible with all U. P. Pumps hand pumps.",
      "The chains are galvanized or stainless steel as per client requirement, and all pivot joints are lubricated and rust-protected. We also supply bushings and spares for long-term usability.",
      "These components are easy to assemble and can be ordered as standalone sets or as part of full hand pump kits.",
    ],
    images: ["/assets/indianPagesImage/accessories/chain_handle.jpg"],
  },
  {
    name: "PVC Water Tanks",
    spec: null,
    description: [
      "As an optional component in integrated water systems, our PVC tanks are made from food-grade virgin polymer with UV stabilization for outdoor durability.",
      "Available in capacities ranging from 200L to 2000L, our tanks are fitted with ISI-marked inlet/outlet valves, air vents, and overflow mechanisms.",
      "These tanks are compatible with rooftop installations and village-level water storage setups for hand pump-supported communities.",
    ],
    images: ["/assets/indianPagesImage/accessories/pvc_water_tank.jpg"],
  },
  {
    name: "Head Assembly",
    spec: "Standard & EDWP",
    images: [
      "/assets/parts/head_assembly_1.jpg",
      "/assets/parts/head_assembly_2.jpg",
    ],
    description: [
      "The Head Assembly is one of the most critical structural components of a hand pump, responsible for housing and aligning all key moving parts such as the handle, axle, and chain drive system.",
      "Manufactured from high-grade cast iron and hot-dip galvanized to withstand extreme environmental conditions, it ensures robust performance in both deepwell and extra deepwell configurations (Standard & EDWP).",
      "Our head assemblies are precision-machined for a smooth handle movement, reducing user fatigue and enabling efficient water extraction with minimal effort.",
      "The inner mechanism features a reinforced bearing system that ensures extended operational life even under heavy community usage.",
      "Its design allows for easy attachment of accessories like T-bar handles, counterweights, or force-lift enhancements without requiring modifications.",
      "Each unit is rigorously tested under dynamic pressure conditions and load-bearing scenarios to meet IS:15500 specifications for government and NGO projects.",
      "The top cap and outlet are ergonomically shaped to minimize water splash and allow safe, hygienic collection.",
      "This part is suitable for retrofit upgrades, available in multiple bore sizes, and compatible with all major India Mark II and III pump types.",
      "Ideal for long-term installations in schools, healthcare centers, and community water schemes where reliability is non-negotiable.",
    ],
  },
  {
    name: "Cylinder Assembly",
    spec: "Standard & EDWP",
    images: ["/assets/parts/cylinder_assembly_1.jpg"],
    description: [
      "The Cylinder Assembly ensures the pressure mechanism and water lifting.",
      "Designed with brass liners for long life and minimum wear and tear.",
      "Compatible with all ISI-marked deepwell pump systems.",
    ],
  },
  {
    name: "Cylinder Assembly",
    spec: "Standard & EDWP",
    images: ["/assets/parts/cylinder_assembly_1.jpg"],
    description: [
      "The Cylinder Assembly is the hydraulic heart of a hand pump, designed to generate suction and pressure that lifts water from deep aquifers to the surface.",
      "Constructed using precision-cast cast iron or mild steel bodies, the interior of the cylinder is lined with high-quality brass to reduce friction and ensure corrosion resistance over prolonged use.",
      "This lining not only enhances the operational life of the pump but also ensures smooth motion of the plunger assembly, minimizing wear on both the plunger and the cylinder.",
      "Our Standard and EDWP variants are compatible with deepwell and extra deepwell installations, capable of functioning at depths up to 50 meters.",
      "The robust sealing between the plunger and cylinder prevents leakage and maximizes pressure build-up, ensuring efficient and continuous water flow with minimal effort.",
      "Tested rigorously under IS:15500 standards, the assembly includes quality-tested gaskets, valve seats, and fasteners to ensure seamless integration with India Mark II, Mark III, and Afridev systems.",
      "Designed with modularity in mind, the cylinder is easy to dismantle and maintain, and compatible with both upward and downward stroke configurations for better customization.",
      "The assembly supports retrofitting for force-lift configurations and is widely preferred in government and NGO water supply projects across rural India.",
      "Its long lifespan, ease of servicing, and durability under harsh groundwater conditions make it a crucial component in sustainable hand pump solutions.",
    ],
  },
  {
    name: "Plunger Valve Assembly",
    spec: "EDWP",
    images: ["/assets/parts/plunger_valve_assembly.jpg"],
    description: [
      "The Plunger Valve Assembly is a vital moving component in hand pump systems, responsible for maintaining upward water pressure during the lifting stroke.",
      "Specially engineered for EDWP (Extra Deepwell Pumps), it can withstand high hydraulic loads at greater depths, ensuring consistent performance under challenging ground water levels.",
      "The plunger body is typically made from durable stainless steel or galvanized steel, combined with rubber seals and a precision-fitted valve that opens and closes with each piston stroke.",
      "Its valve seating mechanism has been refined for optimal sealing and minimal water backflow, enhancing the pump’s overall efficiency and user experience.",
      "Our EDWP-compatible design includes additional reinforcement to handle deep installations where higher resistance is encountered due to longer riser pipes.",
      "Maintenance is simplified through modular construction, allowing for easy valve or seal replacement on-site without the need for complete disassembly.",
      "Compatible with both India Mark II and Mark III pump types, the assembly adheres to IS:15500 and EDWP guidelines, ensuring maximum longevity and minimal service disruption.",
      "The materials used are non-toxic, rust-resistant, and designed for continuous exposure to ground water, making the plunger valve ideal for community and institutional water access systems.",
      "Its rugged yet reliable performance makes it a preferred choice in government-funded installations and NGO-led water supply initiatives in rural and remote areas.",
    ],
  },
  {
    name: "Lower Valve Assembly",
    spec: null,
    images: ["/assets/parts/lower_valve_assembly.jpg"],
    description: [
      "The Lower Valve Assembly is an essential non-return valve located at the base of the pump cylinder, ensuring unidirectional water flow during pumping operations.",
      "Its primary function is to prevent backflow of water into the borehole after each piston cycle, maintaining pressure in the riser pipe and enabling efficient water discharge on the next stroke.",
      "Crafted from high-grade brass and reinforced rubber components, the assembly is built to withstand continuous immersion and exposure to varying water qualities, including hard and saline water.",
      "The rubber sealing surface is precision-molded to achieve tight closure and high durability, reducing leakage and improving pump efficiency over long-term use.",
      "Its simple yet robust design allows for compatibility with multiple hand pump models, including India Mark II, Mark III, and Afridev pumps.",
      "The valve is engineered for tool-free installation and maintenance, minimizing downtime during field repairs and replacements.",
      "Thanks to its compact geometry and corrosion-resistant materials, the lower valve assembly ensures long operational life even in high-usage rural and semi-urban installations.",
      "All components are manufactured to meet ISI and EDWP (Extra Deepwell Pump) standards, supporting deployments in both shallow and deep borewell applications.",
      "Ideal for government tenders, water board projects, and NGO-led water access programs, this assembly plays a critical role in ensuring continuous water availability in remote and resource-constrained environments.",
    ],
  },
  {
    name: "Head Box",
    spec: "Standard & EDWP",
    images: ["/assets/parts/head_box_1.jpg", "/assets/parts/head_box_2.jpg"],
    description: [
      "The Head Box is a critical structural component in hand pumps that connects the handle, axle, and water outlet system into a single functional unit.",
      "Constructed using heavy-duty cast iron or mild steel, the Head Box is designed to endure mechanical stress from thousands of daily pumping cycles.",
      "It houses the bearing and axle assemblies, facilitating smooth and ergonomic motion of the pump handle with minimal wear and tear.",
      "Our Standard and EDWP variants come with enhanced ribbing and thicker flanges to provide extra durability for deepwell applications and high water demand locations.",
      "Precision-machined internal threads and bolt holes ensure easy alignment during installation and maintenance.",
      "The internal cavity of the Head Box channels water to the spout, maintaining a clean and sealed environment that prevents contamination.",
      "All Head Boxes are treated with anti-corrosion coatings and finished with powder-coated or zinc-plated surfaces to withstand harsh weather conditions.",
      "Compliant with IS:15500 standards and available in multiple sizes to suit India Mark II, Mark III, and customized models.",
      "Its robust build and universal fit make it ideal for use in government infrastructure projects, rural community installations, and NGO water programs worldwide.",
    ],
  },
  {
    name: "Handle",
    spec: "Standard (Hot Dip Galvanised), EDWP",
    images: [
      "/assets/parts/handle_standard_1.jpg",
      "/assets/parts/handle_edwp_1.jpg",
    ],
    description: [
      "The Handle is the primary user interface of a handpump, designed to provide ergonomic and efficient water lifting through a reciprocating motion.",
      "Crafted from heavy-duty mild steel, our handles are engineered to endure high mechanical stress and long-term use without deformation.",
      "All standard handles are hot dip galvanised to offer long-lasting protection against rust, abrasion, and environmental degradation, especially in outdoor and humid conditions.",
      "The EDWP (Extra Deepwell Pump) variant of the handle is reinforced with extended leverage for deeper water tables, enabling easier lifting of water from greater depths with reduced effort.",
      "Handles are designed with user comfort in mind, featuring smooth rounded grips and proper weight distribution to minimize fatigue during extended use.",
      "Equipped with a robust axle hole and bearing fitments that ensure precise attachment to the Head Box without excessive play or wobble.",
      "Tested for over 1 million strokes in simulated field conditions, our handles surpass national quality standards for durability and reliability.",
      "Each unit is coated with industrial-grade protective layering, and all edges are deburred to eliminate safety hazards during manual operation.",
      "Available in various lengths and styles depending on the handpump model (India Mark II, Mark III, Afridev, etc.), and easily replaceable in the field.",
      "A vital component in ensuring consistent water delivery and minimal mechanical breakdown, the handle is ideal for high-frequency usage in community and institutional water access systems.",
    ],
  },
  {
    name: "Stand",
    spec: "Telescopic, Normal, EDWP",
    images: [
      "/assets/parts/stand_normal.jpg",
      "/assets/parts/stand_telescopic.jpg",
      "/assets/parts/stand_edwp.jpg",
    ],
    description: [
      "The Stand is the foundational base of the handpump, providing vertical support and structural stability for mounting the Head Assembly and other upper components.",
      "Our handpump stands are available in three major configurations: Normal, Telescopic, and EDWP (Extra Deepwell Pump), each optimized for different depth and terrain conditions.",
      "The Normal Stand is designed for standard installations where moderate well depth is involved. It ensures firm anchoring on concrete or brick platforms and includes precision-bored holes for mounting hardware.",
      "The Telescopic Stand is built for sites requiring adjustable height. Its sliding pipe mechanism allows vertical extension, simplifying alignment with varying platform levels or bore casing heights.",
      "The EDWP Stand is heavy-duty and features a reinforced collar and thick-walled base to accommodate higher operational torque and pressure, especially in deep borewells exceeding 50 meters.",
      "All variants are fabricated using industrial-grade mild steel and are hot dip galvanised for superior corrosion resistance against water, soil, and weather exposure.",
      "Each stand is designed with IS:15500 compliance, with flanged bases that provide secure attachment to well platforms using foundation bolts or anchor plates.",
      "Drain holes and anti-rust coatings further enhance durability, particularly for rural and coastal installations exposed to high humidity or saline conditions.",
      "Stands are engineered for ease of serviceability, with top openings that align seamlessly with riser pipes and plunger rods, ensuring smooth water flow and reduced vibration.",
      "The robust design ensures minimal mechanical shift during heavy use, making our stands ideal for government water supply projects, NGOs, and institutional water systems.",
    ],
  },
  {
    name: "Water Tank",
    spec: "Optional",
    images: [
      "/assets/parts/water_tank_1.jpg",
      "/assets/parts/water_tank_2.jpg",
    ],
    description: [
      "The Water Tank is an optional but highly beneficial addition to handpump systems, designed to collect and temporarily store water immediately after pumping, providing convenient access without repetitive effort.",
      "It is ideal for schools, community centers, and rural households where frequent use or storage of water for cooking, washing, or sanitation is required.",
      "Made from high-density polyethylene (HDPE) or corrosion-resistant galvanized steel, our water tanks are designed for durability and hygienic storage of potable water.",
      "The tank is mounted directly onto or beside the handpump stand using secure brackets and pipe fittings, allowing water to flow into the tank automatically during pumping.",
      "Each tank includes a fitted outlet tap for controlled dispensing and overflow mechanisms to avoid spillage during prolonged use.",
      "Optional designs include lockable lids to prevent contamination and UV-resistant coatings for prolonged outdoor exposure.",
      "Installation is simple and does not interfere with the core operation of the handpump, making it a plug-and-play solution for enhancing water availability at the source.",
      "Custom tank capacities ranging from 20L to 100L are available to suit different user groups, from individual households to community blocks.",
      "Widely adopted in semi-urban and rural health projects, the water tank system promotes water conservation and reduces physical strain, especially for women and elderly users.",
      "Our water tanks are compliant with drinking water safety norms and are designed to integrate seamlessly with ISI-marked India Mark II and III pump systems.",
    ],
  },
  {
    name: "Plunger Rod",
    spec: "Standard & EDWP",
    images: [
      "/assets/parts/plunger_rod_1.jpg",
      "/assets/parts/plunger_rod_2.jpg",
    ],
    description: [
      "The Plunger Rod is a key internal component of the handpump mechanism that connects the handle movement to the plunger inside the cylinder, enabling the actual lifting of water.",
      "Constructed from high-tensile galvanized or stainless steel, our plunger rods are engineered to handle high stress during repetitive pumping, especially in deep and extra-deep well installations.",
      "The rods are precision-threaded at both ends to ensure tight coupling with other components like the plunger valve and upper valve rod, minimizing internal leakage and mechanical play.",
      "Available in both Standard and Extra Deepwell Pump (EDWP) variants, the plunger rods are manufactured according to IS:15500 standards and undergo quality testing for durability and tensile strength.",
      "To ensure corrosion resistance in various water chemistries, we offer hot-dip galvanized as well as powder-coated surface treatments, increasing longevity in adverse environments.",
      "Each rod is straightened using hydraulic fixtures and laser alignment to eliminate bends or curvature that can disrupt pump efficiency.",
      "Lengths and thread pitches can be customized based on client requirements and borewell depths, making it versatile for different installation contexts.",
      "Compatible with India Mark II, Mark III (VLOM), and Afridev pump models, the plunger rods are supplied in kits or as standalone replacements for field maintenance teams.",
      "Field-tested in over 100 rural installations, our plunger rods have shown high endurance with minimal wear and tear even under daily high-frequency usage.",
    ],
  },
  {
    name: "Axle",
    spec: null,
    images: ["/assets/parts/axle_1.jpg", "/assets/parts/axle_2.jpg"],
    description: [
      "The Axle is a crucial mechanical pivot within the handpump's head assembly, facilitating the smooth movement of the handle and transfer of force to the plunger rod.",
      "Manufactured from high-carbon steel or stainless steel, the axle is designed for maximum load-bearing capacity and minimal deflection under repetitive usage.",
      "Precision-machined to tight tolerances, the axle ensures low-friction rotation and helps reduce wear on the connecting bearings and handle assembly.",
      "The axle is heat-treated to increase its hardness and fatigue resistance, particularly useful in community installations where pumps are operated multiple times a day.",
      "Anti-corrosive surface finishes such as zinc coating or hot-dip galvanization enhance its durability in both saline and fresh water conditions.",
      "Each axle is supplied with locking nuts or circlips as needed to secure it within the head assembly and prevent unwanted loosening during long-term operation.",
      "The design is standardized to fit India Mark II, Mark III, and Afridev pump models, making it easy to replace during field maintenance or servicing.",
      "Load simulations and cycle testing are performed on every production batch to ensure compliance with ISI and UNICEF specifications.",
      "Our axles have a proven track record in government-funded installations across rural India, withstanding extreme climate conditions without loss of performance.",
    ],
  },
  {
    name: "Third Plate",
    spec: null,
    images: [
      "/assets/parts/third_plate_1.jpg",
      "/assets/parts/third_plate_2.jpg",
    ],
    description: [
      "The Third Plate is an essential structural support component within the handpump head assembly, providing reinforcement and ensuring alignment of moving parts.",
      "Fabricated from high-grade steel with precise laser-cut dimensions, the Third Plate maintains the parallelism and stability required for long-term pump function.",
      "It acts as an intermediary support between the handle, axle, and connecting rods, minimizing lateral movement and mechanical wear.",
      "To withstand constant stress and vibration, each plate is engineered with ribbed or flanged profiles depending on the handpump variant (Standard or EDWP).",
      "A protective anti-rust coating, such as epoxy paint or hot-dip galvanization, is applied to extend life in both high-moisture and dry climate zones.",
      "Mounting holes and slots are pre-drilled to match standardized headbox templates, allowing for quick replacement and ease of field servicing.",
      "The Third Plate is tested for dimensional accuracy, tensile strength, and flatness to comply with IS:15500 standards for public water infrastructure.",
      "Its robust design contributes to reduced maintenance cycles and enhances the pump's ability to withstand heavy usage in remote and high-demand areas.",
      "Compatible with India Mark II, Mark III, and custom fabricated pump models, the Third Plate ensures structural continuity and optimal performance.",
    ],
  },
  {
    name: "Connecting Rod",
    spec: null,
    images: [
      "/assets/parts/connecting_rod_1.jpg",
      "/assets/parts/connecting_rod_2.jpg",
    ],
    description: [
      "The Connecting Rod serves as the critical linkage between the handpump's handle mechanism and the plunger assembly deep within the cylinder.",
      "It transfers mechanical energy from user input at the handle to the reciprocating motion of the plunger, enabling efficient water lifting with minimal friction loss.",
      "Crafted from high-tensile carbon steel or stainless steel, the rod ensures strength, straightness, and resistance to bending even under continuous use.",
      "Each rod is precision-threaded at both ends to securely attach to couplers and other rod segments, maintaining linear alignment throughout the pump column.",
      "The rods are available in both standard and EDWP configurations, with varying lengths (commonly 3 meters) to accommodate different borewell depths.",
      "To minimize corrosion in aggressive groundwater environments, rods are coated with anti-rust zinc or hot-dip galvanized finishes.",
      "U. P. Pumps offers connecting rods with cold-forged threading and double-tapered ends to enhance grip, reduce wear on couplers, and improve longevity.",
      "Every rod undergoes tensile strength testing and dimensional calibration to meet IS:15500 and World Bank specifications.",
      "Installation and maintenance are simplified through lightweight design and standardized connection profiles, reducing downtime in the field.",
      "Reliable and durable, the connecting rod plays a vital role in achieving high water yield and mechanical efficiency in community and institutional handpump installations.",
    ],
  },
  {
    name: "Socket",
    spec: null,
    images: ["/assets/parts/socket_1.jpg", "/assets/parts/socket_2.jpg"],
    description: [
      "The Socket is a vital coupling component that connects individual segments of connecting rods or riser pipes, ensuring secure and aligned transmission of mechanical force within the handpump system.",
      "Designed with precision threading, the socket allows easy assembly and disassembly during pump installation or maintenance without the risk of thread slippage.",
      "Manufactured using high-grade mild steel or stainless steel, each socket is heat-treated to provide exceptional strength and fatigue resistance under repetitive load cycles.",
      "Its internal threading matches ISI-standard rod ends to form a tight, leak-proof fit while preventing misalignment and vibration during operation.",
      "Sockets are available in various thread pitches and sizes to accommodate multiple pump models including India Mark II, III, and EDWP variants.",
      "Surface protection is achieved through zinc or hot-dip galvanization to enhance corrosion resistance, especially in groundwater environments with high mineral content.",
      "Each socket undergoes torque and dimensional accuracy testing to ensure it meets international and BIS quality benchmarks.",
      "Optimized for durability and reliability, the socket plays a crucial role in the seamless functioning and structural integrity of deepwell handpumps.",
      "U. P. Pumps supplies sockets in bulk quantities with optional labeling for project-specific identification and rapid deployment.",
    ],
  },
  {
    name: "Bearing",
    spec: null,
    images: ["/assets/parts/bearing_1.jpg", "/assets/parts/bearing_2.jpg"],
    description: [
      "The Bearing is a critical rotating element within the handpump's head assembly that facilitates smooth motion of the handle mechanism and minimizes wear caused by continuous operation.",
      "Precision-manufactured to ensure low friction, the bearing supports axial and radial loads while maintaining alignment during each pump stroke.",
      "Constructed from hardened steel or stainless steel with protective seals, our bearings are corrosion-resistant and suitable for harsh field conditions including high humidity and water splash zones.",
      "The inner and outer races are ground to exact tolerances, ensuring a snug fit with the shaft and housing without unnecessary play or slippage.",
      "U. P. Pumps offers both sealed and open variants depending on site conditions, including grease-lubricated models for longer service intervals.",
      "Engineered to comply with IS and ISO standards, every bearing undergoes dynamic load testing, rotational torque assessment, and fatigue analysis for guaranteed reliability.",
      "The bearing contributes significantly to the pump's longevity and ease of operation, reducing fatigue for the user and minimizing mechanical failure.",
      "Easily replaceable during maintenance cycles, bearings are supplied in calibrated batches with full traceability and batch certificates upon request.",
      "Our bearings are widely deployed in India Mark II, III, and Afridev models, making them compatible with most government-approved pump systems.",
    ],
  },
  {
    name: "Coupler",
    spec: null,
    images: ["/assets/parts/coupler_1.jpg", "/assets/parts/coupler_2.jpg"],
    description: [
      "The Coupler is a key connector used to join plunger rods or riser pipes in a handpump assembly, ensuring structural continuity and efficient transmission of force during pumping action.",
      "Fabricated from high-strength mild steel or stainless steel, the coupler is designed to withstand repetitive mechanical stress and axial load without deformation or thread stripping.",
      "Our couplers are machined with precision threading to provide a tight, leak-proof fit that prevents water seepage and mechanical vibration during pump operation.",
      "A typical coupler includes double female threading to facilitate seamless integration with adjoining rod or pipe sections, often incorporating wrench flats for easy tightening and disassembly.",
      "Each unit is treated with anti-rust coatings such as zinc galvanization or hot-dip galvanization, enhancing durability even in corrosive groundwater environments.",
      "Couplers are engineered in multiple lengths and diameters to suit various pump types including India Mark II, III, and Afridev systems, ensuring compatibility across diverse government and NGO-driven water projects.",
      "For EDWP (Extra Deep Well Pump) configurations, heavy-duty couplers with thicker walls and enhanced thread pitch are used to support extended-depth installations.",
      "Every batch is quality-checked for concentricity, threading accuracy, and tensile strength, conforming to BIS and ISO standards for safety and long-term performance.",
      "U. P. Pumps supplies couplers both individually and as part of comprehensive installation kits, and we support bulk orders with documentation and dispatch traceability.",
    ],
  },
  {
    name: "Hex Bolt",
    spec: "M12x40, M12x20",
    images: ["/assets/parts/hex_bolt_1.jpg", "/assets/parts/hex_bolt_2.jpg"],
    description: [
      "The Hex Bolt is an essential fastening component used extensively in the assembly of handpump structures, offering secure joints between critical load-bearing parts such as the head assembly, cylinder, and stand base.",
      "Our Hex Bolts are manufactured using high-tensile grade carbon steel or stainless steel, ensuring durability, anti-rust protection, and resistance to mechanical fatigue.",
      "Available in M12x40 and M12x20 dimensions, these bolts feature standard ISO metric threads for consistent compatibility across handpump models like India Mark II, III, and Afridev.",
      "Each bolt head is forged in a hexagonal shape, allowing for easy installation and removal using standard spanners or power tools, thereby reducing field service time and labor cost.",
      "The surface is treated with zinc plating or hot-dip galvanization to enhance corrosion resistance in challenging groundwater or open-environment applications.",
      "Designed with precision threading and uniform pitch, the bolts ensure optimal tightening torque without the risk of cross-threading or structural loosening under vibration.",
      "The M12x40 bolt is primarily used in deepwell headframe connections where extra thread length is necessary, while M12x20 bolts are suitable for compact applications with thinner material junctions.",
      "U. P. Pumps ensures batch-level testing for thread quality, tensile strength, and galvanization uniformity. All hex bolts are supplied in tamper-proof packaging for secure transport and easy on-site distribution.",
      "These fasteners are available individually or as part of handpump installation kits, and custom bulk configurations can be supplied for turnkey water infrastructure projects.",
    ],
  },
  {
    name: "Hex Nut",
    spec: "M12x1.75",
    images: ["/assets/parts/hex_nut_1.jpg", "/assets/parts/hex_nut_2.jpg"],
    description: [
      "The M12x1.75 Hex Nut is a critical fastener used in conjunction with M12 bolts to securely assemble structural components of handpumps, including head assemblies, stands, and connecting rods.",
      "Manufactured from high-grade carbon steel or stainless steel, these nuts offer excellent durability, corrosion resistance, and compatibility with rural and outdoor environments where pumps are frequently exposed to moisture and dust.",
      "Each hex nut features a 1.75mm thread pitch, compliant with ISO metric standards, ensuring a precise and tight fit with standard M12 threaded bolts. The coarse thread design enhances grip strength and reduces the risk of stripping or thread damage during repetitive installations.",
      "The six-sided (hexagonal) geometry allows for easy tightening and loosening using common tools like open-ended wrenches and socket drivers, even in compact or awkward installation spaces.",
      "Surface finishing options include zinc electroplating and hot-dip galvanization, both of which provide additional protection against rust and chemical wear in harsh borewell conditions.",
      "These nuts are designed to withstand high vibration and dynamic loads, ensuring that the pump remains stable during heavy usage, especially in community or high-throughput applications.",
      "Quality assurance includes dimensional accuracy, hardness testing, and torque-to-failure analysis, ensuring every nut meets ISI guidelines for water infrastructure use.",
      "They are typically supplied as part of complete hardware kits for India Mark II, Mark III, and Afridev handpumps, but can also be ordered in bulk quantities or as spares for maintenance teams.",
      "U. P. Pumps guarantees compatibility and long service life for all fastening hardware used in conjunction with its ISI-certified pump models.",
    ],
  },
  {
    name: "HT Bolt",
    spec: "M10x40",
    images: [
      "/assets/parts/ht_bolt_m10x40_1.jpg",
      "/assets/parts/ht_bolt_m10x40_2.jpg",
    ],
    description: [
      "The HT (High Tensile) Bolt M10x40 is a critical fastener component used in assembling high-load zones of handpump systems, particularly where secure clamping is necessary between structural parts such as the head assembly, flange mounts, and connecting frame.",
      "Measuring 10mm in diameter and 40mm in length, this bolt is engineered with high tensile strength steel (Grade 8.8 or higher), offering enhanced load-bearing capacity, resistance to shearing forces, and long-term mechanical integrity under repetitive stress.",
      "These bolts are commonly zinc-coated or hot-dip galvanized to prevent corrosion in borewell environments, where exposure to water, humidity, and soil can accelerate metal degradation.",
      "Featuring a hexagonal head design, the HT bolt M10x40 is compatible with standard wrench tools, allowing easy installation and torque-tightening during both manufacturing and maintenance processes.",
      "The thread pitch conforms to ISO metric specifications, ensuring compatibility with standard M10 nuts including Nylock variants used for anti-vibration assurance.",
      "Each bolt is rigorously tested for elongation, yield stress, and ultimate tensile strength, ensuring they perform under pressure without fatigue cracking or distortion over time.",
      "Ideal for deepwell handpumps including India Mark II and Mark III models, HT bolts are recommended in areas subject to mechanical shock, frequent use, or challenging terrain installations.",
      "These bolts are supplied as part of U. P. Pumps’ certified hardware kits, ensuring interchangeability, easy maintenance, and compliance with BIS/ISI pump assembly standards.",
      "Their precision-machined threading and tight dimensional tolerances guarantee a secure, vibration-resistant fit, reducing the risk of system loosening over extended use cycles.",
    ],
  },
  {
    name: "Nylock Nut",
    spec: "M10",
    images: [
      "/assets/parts/nylock_nut_m10_1.jpg",
      "/assets/parts/nylock_nut_m10_2.jpg",
    ],
    description: [
      "The M10 Nylock Nut is a self-locking fastening component designed to resist loosening under vibration and torque, making it ideal for secure assemblies in handpump systems subjected to regular mechanical movement.",
      "This nut incorporates a nylon insert collar that deforms elastically over the mating threads. This mechanism ensures a tight and reliable grip, preventing the nut from backing off, even in high-impact or frequently operated pump assemblies.",
      "Crafted from high-strength steel with surface treatments like zinc plating or hot-dip galvanization, the Nylock Nut M10 is corrosion-resistant and durable, ideal for rural outdoor and borewell environments.",
      "These nuts are typically used alongside M10 HT bolts in pump head assemblies, handle mounts, and flange joints to ensure structural stability, especially in EDWP and high-usage pump models.",
      "Compliant with ISO metric threading standards, the M10 Nylock Nut fits universally with standard 10mm threaded bolts, and offers an extended service life compared to traditional nuts in vibration-prone applications.",
      "Installation is easy with common spanners or socket wrenches, and the nylon insert does not damage the threads of the bolt, allowing for safe reusability in many scenarios.",
      "Ideal for maintenance teams and installation contractors, Nylock Nuts from U. P. Pumps are included in complete pump hardware kits or can be purchased separately for site repairs and spare inventories.",
      "All our fastening hardware, including Nylock Nuts, undergoes quality inspections for dimensional accuracy, torque-retention capacity, and thermal stability to meet ISI-approved handpump standards.",
    ],
  },
  {
    name: "Chain with Coupling",
    spec: "Regular & Roller Chain",
    images: [
      "/assets/parts/chain_with_coupling_1.jpg",
      "/assets/parts/chain_with_coupling_2.jpg",
    ],
    description: [
      "The Chain with Coupling is a vital linkage mechanism in handpump systems, connecting the operating handle to the plunger or axle inside the head assembly. It plays a key role in converting manual force into vertical piston motion for water extraction.",
      "We offer both Regular and Roller Chain variants to suit different pump designs and load conditions. The Regular Chain is cost-effective and suitable for standard applications, while the Roller Chain provides smoother operation, longer wear resistance, and greater mechanical efficiency.",
      "Each chain is fabricated using high-tensile steel with anti-rust coatings (zinc or phosphate), ensuring performance longevity even in humid, water-exposed rural installations.",
      "The coupling is precision-welded and dimensionally standardized for easy fitting with India Mark II, Mark III, and Afridev pump models. This modularity simplifies replacements and reduces downtime during field repairs.",
      "Roller chains include bushings and rollers that minimize friction and improve the transmission of motion, making them ideal for high-frequency use cases such as community pumps and school installations.",
      "Chain links are tested for load bearing, elongation resistance, and durability under repetitive stress to ensure uninterrupted daily operation.",
      "All chain assemblies from U. P. Pumps comply with IS:15500 guidelines and come with hardened pins and safety latches where applicable, preventing detachment during use.",
      "These chains are easy to install and maintain, with pre-cut lengths available based on cylinder depth and handle size requirements.",
      "Whether for new installations or replacements, Chain with Coupling parts are available individually or in kit form to suit varied project specifications and budgets.",
    ],
  },
  {
    name: "Washer",
    spec: null,
    images: ["/assets/parts/washer_1.jpg", "/assets/parts/washer_2.jpg"],
    description: [
      "The Washer is a simple yet critical component used in handpump assemblies to evenly distribute load across bolted joints and prevent surface damage due to tightening forces.",
      "Manufactured from high-strength carbon steel or stainless steel, our washers are treated with anti-corrosive coatings such as zinc plating, making them ideal for outdoor installations and humid environments.",
      "Used beneath nuts or bolt heads, washers help reduce wear and tear on pump parts, minimizing the risk of structural failure in the long run, especially in high-usage areas.",
      "They play an essential role in maintaining the tightness of fasteners under dynamic loads, including vibrations and constant manual operation, ensuring uninterrupted water flow from handpumps.",
      "Washers from U. P. Pumps are available in various thicknesses and diameters, conforming to metric standards (M10, M12, etc.) and compatible with standard fasteners used in India Mark II, Mark III, and Afridev pumps.",
      "Flat washers provide a stable bearing surface, while spring washers (available optionally) add a locking feature to prevent loosening in vibrating pump heads and handle joints.",
      "Each washer is precision-machined for uniform thickness and roundness to ensure consistent load transfer, reducing the chance of bolt slippage or thread stripping.",
      "Our washers are tested for compressive strength, corrosion resistance, and long-term mechanical fatigue to meet the demands of community, industrial, and school-based water systems.",
      "Supplied as part of our full handpump hardware kits or separately on request, U. P. Pumps washers support effective assembly, repair, and maintenance for any scale of water distribution infrastructure.",
    ],
  },
  {
    name: "Reducer Cap",
    spec: null,
    images: [
      "/assets/parts/reducer_cap_1.jpg",
      "/assets/parts/reducer_cap_2.jpg",
    ],
    description: [
      "The Reducer Cap is an essential component used to join and transition between pipes or fittings of different diameters in handpump assemblies and water pipelines.",
      "Engineered for a secure fit and leak-proof performance, it ensures the proper alignment and smooth flow of water from the pump to outlet lines, especially in installations where pipe size changes are necessary.",
      "Manufactured from high-grade galvanized iron or PVC, the cap resists corrosion and mechanical wear, making it reliable for long-term use in both above-ground and underground installations.",
      "Reducer Caps are designed with high precision to meet ISI standards and come in various configurations—threaded, plain, or flanged—to accommodate different installation requirements.",
      "Their tapered construction enables them to handle hydraulic pressure variations efficiently, reducing the risk of backpressure or flow restriction in gravity-fed or pressurized systems.",
      "They are commonly used in conjunction with riser pipes, tanks, foot valves, and outlet pipes, ensuring modularity and compatibility across pump models including India Mark II, III, Afridev, and Tara.",
      "Each cap undergoes leak testing and dimensional inspection to guarantee proper sealing, minimizing the need for frequent maintenance or replacements in the field.",
      "Our reducer caps are available in multiple bore sizes (e.g., 32mm to 25mm, 50mm to 32mm) with optional rubber gaskets or PTFE thread sealing tape for enhanced performance.",
      "Whether for pump repair, new installation, or pipeline integration, U. P. Pumps' reducer caps provide a strong and adaptable solution for reliable rural and institutional water distribution systems.",
    ],
  },
  {
    name: "Cylinder Body with Brass Liner",
    spec: "Standard & EDWP",
    images: [
      "/assets/parts/cylinder_brass_liner_1.jpg",
      "/assets/parts/cylinder_brass_liner_2.jpg",
    ],
    description: [
      "The Cylinder Body with Brass Liner is a core component in deepwell and extra deepwell hand pumps, responsible for withstanding the internal hydraulic pressure generated during water extraction.",
      "Fabricated from heavy-duty cast iron or mild steel and fitted with a machined brass liner, this component ensures low-friction plunger movement and consistent water discharge under varying load conditions.",
      "The brass liner acts as a corrosion-resistant surface that reduces wear on rubber seals and plungers, significantly extending the operational life of the pump.",
      "Available in both Standard and EDWP (Extra Deepwell Pump) variants, our cylinders are designed to operate efficiently at depths ranging from 15 meters to over 50 meters.",
      "Each unit undergoes rigorous quality checks, including hydrostatic testing, brass liner concentricity inspection, and chemical coating verification for rust prevention.",
      "U. P. Pumps offers customizable options in inlet/outlet sizes and thread types, ensuring compatibility with India Mark II, III, and Afridev hand pump standards.",
      "The precisely bored brass sleeve lining ensures smooth reciprocation of the plunger assembly, minimizing the risk of leakage, suction loss, or mechanical failure in rural and high-demand installations.",
      "These cylinders are often used in borewell installations that face hard water or high mineral content, where plastic liners are less effective and prone to erosion.",
      "All Cylinder Bodies with Brass Liners are pre-treated with anti-corrosive enamel and zinc coating, making them suitable for long-term deployment in challenging environments such as flood-prone or saline regions.",
      "Supplied with locking rings, seating guides, and optional foot valve attachments, the assembly can be integrated seamlessly during both new installations and replacement procedures.",
    ],
  },
  {
    name: "Brass Liner",
    spec: null,
    images: [
      "/assets/parts/brass_liner_1.jpg",
      "/assets/parts/brass_liner_2.jpg",
    ],
    description: [
      "The Brass Liner is an integral part of the pump cylinder assembly, designed to provide a smooth, corrosion-resistant surface for the plunger to operate against during water extraction cycles.",
      "Manufactured from high-quality, lead-free brass, the liner offers excellent wear resistance, minimizing friction between moving components and significantly extending the life of the pump.",
      "Brass liners are precision-machined to ensure perfect concentricity, reducing chances of misalignment and internal leakage during the pumping action.",
      "Due to their non-reactive and anti-corrosive properties, brass liners are ideal for use in regions with high iron or mineral content in groundwater, where plastic liners or uncoated metals are prone to scaling and degradation.",
      "This component is compatible with ISI-marked cylinders and is widely used in India Mark II, Mark III, and EDWP hand pump models as a standard performance-enhancing upgrade.",
      "U. P. Pumps’ brass liners are quality checked for wall thickness, surface polish, and concentric fit before integration into the pump cylinder body.",
      "The liner reduces wear on rubber seals and plungers, resulting in a more efficient and durable pumping action, which is especially crucial in high-usage areas such as villages, schools, and public utilities.",
      "Available in multiple diameter configurations to match standard bore sizes (e.g., 50 mm, 65 mm), the brass liner is securely pressed and bonded into the steel or cast-iron cylinder.",
      "All our brass liners are made using forging-grade alloys and undergo ultrasonic crack testing to ensure zero defects under continuous stress conditions.",
      "When combined with our ISI-certified plunger and valve systems, the brass liner forms a critical part of the pump’s water chamber that contributes directly to flow rate, longevity, and maintenance reduction.",
    ],
  },
  {
    name: "Plunger Yoke Body",
    spec: null,
    images: [
      "/assets/parts/plunger_yoke_body_1.jpg",
      "/assets/parts/plunger_yoke_body_2.jpg",
    ],
    description: [
      "The Plunger Yoke Body is a mechanical linkage component that connects the plunger rod to the handle mechanism, playing a critical role in the reciprocating action of the handpump.",
      "Manufactured from high-strength ductile cast iron or forged steel, the yoke body ensures consistent and balanced motion transmission even under heavy load conditions in deepwell operations.",
      "It acts as the pivotal point where the vertical movement of the handle is transformed into downward pressure on the plunger rod, making it essential for efficient water extraction.",
      "Precision-bored and fitted with hardened steel bushings, the yoke body reduces friction, wear, and vibration, enhancing the smoothness and reliability of handpump operation over long periods.",
      "Our yoke bodies are coated with rust-resistant epoxy paint and zinc galvanization for longevity in diverse environmental conditions, including high humidity and saline groundwater regions.",
      "The robust structural geometry of the plunger yoke prevents deformation and misalignment, safeguarding the integrity of internal pump components like the cylinder and plunger valve.",
      "Each unit is load-tested for tensile and compressive strength and passes dimensional accuracy checks to ensure a perfect fit with all standard Mark II and Mark III configurations.",
      "Designed to accommodate quick field repairs, our yoke bodies feature accessible mounting points, making it easy to replace worn-out or damaged parts without specialized tools.",
      "U. P. Pumps offers both standard and heavy-duty Plunger Yoke Body variants to support rural community pumps as well as high-demand public water access systems.",
      "Its critical alignment function ensures that each pump stroke is optimally converted into suction and water delivery, minimizing user fatigue and maximizing yield per effort.",
    ],
  },
  {
    name: "Plunger Upper Valve",
    spec: null,
    images: [
      "/assets/parts/plunger_upper_valve_1.jpg",
      "/assets/parts/plunger_upper_valve_2.jpg",
    ],
    description: [
      "The Plunger Upper Valve is a critical internal component situated within the plunger assembly that allows upward water flow while preventing reverse flow during the downstroke.",
      "It plays a pivotal role in creating the suction necessary to lift water from deep underground sources, especially in deepwell and extra-deepwell handpump installations.",
      "Crafted using high-grade brass, bronze, or corrosion-resistant polymer alloys, the upper valve is built for durability under high water pressure and mechanical stress.",
      "Its valve seat is precision-machined to ensure an airtight seal against the valve disk, minimizing leakage and energy loss during pumping.",
      "The rubber sealing surface is made from EPDM or nitrile compounds, offering excellent flexibility, chemical resistance, and long-term performance.",
      "When the handle is lifted, the valve opens effortlessly to let water pass into the plunger chamber; during the downstroke, it closes immediately to prevent backflow.",
      "Field serviceability is a core design feature—its components can be easily removed and replaced without removing the entire pump from the borehole.",
      "The valve’s compact yet sturdy build allows it to function efficiently in both India Mark II and Mark III variants, as well as other ISI-compliant pump systems.",
      "Every valve undergoes stringent quality testing, including flow resistance tests and vacuum sealing verification, ensuring consistent reliability in high-usage environments.",
      "Ideal for remote water supply systems, the Plunger Upper Valve offers high efficiency, minimal maintenance, and superior life expectancy—ensuring continued community water access.",
    ],
  },
  {
    name: "Bucket Spacer",
    spec: null,
    images: [
      "/assets/parts/bucket_spacer_1.jpg",
      "/assets/parts/bucket_spacer_2.jpg",
    ],
    description: [
      "The Bucket Spacer is a precision-engineered component located between the plunger and rubber bucket in a handpump system, designed to ensure proper alignment and pressure distribution during operation.",
      "Its primary function is to maintain the correct distance between the bucket and valve seat, ensuring smooth vertical movement and optimal sealing during the up and down strokes of the handpump.",
      "Made from high-strength materials like stainless steel or reinforced polymers, the spacer resists deformation under continuous water pressure and repetitive mechanical loads.",
      "The spacer acts as a shock absorber, minimizing wear and tear on adjacent components, especially the rubber bucket, extending the lifespan of the entire plunger assembly.",
      "In deepwell and extra-deepwell configurations, where higher pressure is encountered, the spacer plays a vital role in maintaining structural stability and consistent water delivery.",
      "Bucket Spacers are corrosion-resistant, lightweight, and field-replaceable—allowing easy on-site repairs without dismantling the entire riser pipe system.",
      "Each spacer is designed to fit ISI-compliant configurations such as India Mark II, Mark III, and compatible deepwell handpump models used globally.",
      "During manufacturing, spacers are tested for dimensional accuracy, compression resistance, and compatibility with sealing materials to guarantee performance in rural and remote settings.",
      "This small yet essential component ensures that handpumps remain leak-proof, efficient, and reliable, even after thousands of pumping cycles.",
      "Used widely in community water supply schemes, the Bucket Spacer is an economical and essential part of routine handpump maintenance kits.",
    ],
  },
  {
    name: "Lower Spacer",
    spec: "EDWP",
    images: [
      "/assets/parts/lower_spacer_1.jpg",
      "/assets/parts/lower_spacer_2.jpg",
    ],
    description: [
      "The Lower Spacer is a specialized component in EDWP (Extra Deep Well Pump) configurations, strategically positioned at the bottom section of the plunger assembly to ensure accurate alignment and effective pressure regulation.",
      "It serves as a mechanical buffer between the cylinder and valve assemblies, absorbing pressure shocks during aggressive pumping actions and preventing component misalignment under deepwell conditions.",
      "Fabricated using high-strength thermoplastics or treated stainless steel, the Lower Spacer is engineered for enhanced durability in harsh groundwater environments with high mineral content.",
      "Its unique role is to stabilize the plunger motion in long riser pipe assemblies, significantly reducing lateral movement and ensuring consistent axial thrust during vertical strokes.",
      "In EDWP models, where the water table can exceed 50–90 meters, the Lower Spacer acts as a vital reinforcer for the valve-sealing mechanics, helping maintain suction integrity and preventing backflow or leakage.",
      "The component is IS:15500-compliant and precisely machined to fit tightly within the cylinder bore, ensuring zero play and maximum operational efficiency.",
      "Its design also helps reduce wear on the rubber bucket and other adjoining seals by maintaining uniform spacing and limiting friction-based degradation.",
      "Ideal for government and NGO-operated rural water systems, the Lower Spacer is included in every major EDWP repair toolkit and is critical for the long-term maintenance of deep borehole installations.",
      "Its installation is straightforward and requires minimal downtime, making it highly suitable for on-site field service and remote-area maintenance programs.",
      "U. P. Pumps provides Lower Spacers tested for dimensional accuracy, load endurance, and pressure retention to ensure compatibility with India Mark II & III EDWP models.",
    ],
  },
  {
    name: "Follower",
    spec: "Standard & EDWP",
    images: ["/assets/parts/follower_1.jpg", "/assets/parts/follower_2.jpg"],
    description: [
      "The Follower is a critical component in the plunger assembly of hand pumps, designed to ensure precise vertical alignment and uniform pressure transmission during operation. It acts as the connecting interface between the plunger rod and the valve assembly, maintaining consistent axial movement throughout each pumping cycle.",
      "Constructed from high-grade galvanized iron or stainless steel for EDWP applications, the Follower is engineered to withstand repetitive mechanical loads and long-term submersion in water. Its structural integrity directly impacts the longevity of both the plunger and valve components, particularly in deepwell installations where performance is paramount.",
      "For standard hand pumps, the Follower provides smooth tracking for the internal valve system, allowing optimal water flow with minimal internal resistance. In EDWP (Extra Deep Well Pump) systems, the Follower plays a reinforced role by absorbing increased hydraulic pressure and preventing lateral shift of the plunger unit.",
      "Each Follower is IS:15500-compliant and precision-machined to match exact tolerances of the cylinder bore and riser configuration. It ensures zero-gap engagement with the plunger body, reducing mechanical stress and enhancing stroke consistency during prolonged operation.",
      "U. P. Pumps offers both Standard and EDWP variants of Followers with customizable dimensions based on project requirements. These variants are available with anti-corrosive coating and load-tested for vertical stroke endurance up to 1,000,000 cycles in lab conditions.",
      "The Follower also reduces wear and tear on adjoining rubber seals and O-rings by maintaining the structural alignment of the entire valve-plunger column. This reduces downtime and maintenance intervals, especially in high-usage rural installations and government-funded projects.",
      "Our Followers are trusted by leading NGOs, Jal Nigams, and municipal water authorities for use in remote installations where reliability and ease of maintenance are essential. Every unit is batch-inspected for durability, tensile strength, and dimensional precision before dispatch.",
    ],
  },
  {
    name: "Check Valve Guide",
    spec: null,
    images: [
      "/assets/parts/check_valve_guide_1.jpg",
      "/assets/parts/check_valve_guide_2.jpg",
    ],
    description: [
      "The Check Valve Guide is an integral part of the internal hydraulic control system within hand pumps, providing directional alignment and stability for the check valve disc or ball. Its primary function is to guide the valve movement within a defined path, ensuring accurate opening and closing during each pumping stroke.",
      "This component plays a vital role in preventing reverse water flow into the borehole by allowing the valve to seat perfectly after each upward stroke. Misalignment or wear in the guide can result in leakage, pressure loss, and inefficient water delivery—making its precision crucial to the system’s reliability.",
      "Manufactured from corrosion-resistant materials such as bronze, stainless steel, or impact-grade polymer, the Check Valve Guide is designed to perform in varied water quality conditions including those with high mineral content, silt, or iron deposits. EDWP-compatible variants are stress-tested for performance at greater depths and higher pressures.",
      "Each guide is engineered to match the cylinder’s internal geometry, maintaining a frictionless environment for smooth valve actuation. This ensures that minimal effort is required for operation, particularly important in community settings where hand pumps may be used continuously throughout the day.",
      "U. P. Pumps’ Check Valve Guides conform to IS:15500 standards and are available in multiple diameters and lengths to suit India Mark II, III, Afridev, and Force Lift pump configurations. Custom variants can be fabricated for retrofitting non-standard pump assemblies or older models in need of restoration.",
      "By reducing side play and valve wobble, the guide minimizes wear on rubber seals and valve seats—thereby extending the maintenance interval and improving long-term system reliability. It also enhances the consistency of water yield per stroke, a key metric in deepwell performance.",
      "All Check Valve Guides undergo dimensional inspection, pressure validation, and material hardness testing before dispatch. U. P. Pumps supports bulk and project-specific supply for government procurement schemes, NGO initiatives, and international aid agencies involved in water infrastructure development.",
    ],
  },
  {
    name: "Check Valve Seat",
    spec: null,
    images: [
      "/assets/parts/check_valve_seat_1.jpg",
      "/assets/parts/check_valve_seat_2.jpg",
    ],
    description: [
      "The Check Valve Seat forms the sealing base on which the check valve rests, creating a one-way flow mechanism that allows water to move upward while preventing it from flowing back into the borewell. This component is essential for maintaining the hydraulic integrity and consistent pressure required for deepwell pump operation.",
      "Crafted with high-precision molds and machined to exact tolerances, the valve seat is typically made of durable non-corrosive metals such as stainless steel or brass. In some cases, high-strength polymer variants are used to resist aggressive water chemistry and reduce weight without sacrificing strength.",
      "A well-designed Check Valve Seat ensures complete contact with the valve disc or ball, minimizing leakage and energy loss during pumping. It also cushions the impact as the valve returns to its resting position, preventing damage over long-term use in high-frequency operations.",
      "In deepwell and EDWP pump systems, the valve seat must be engineered to resist wear from suspended particles such as sand, iron, or other sediments. U. P. Pumps uses surface-treated materials with anti-scaling and anti-rust coatings for extended durability in harsh field environments.",
      "All Check Valve Seats undergo pressure-testing to validate sealing performance under varying water depths and flow rates. Each unit is also batch-verified for dimensional accuracy, contact surface smoothness, and fit compatibility with our India Mark II, III, and Afridev handpump models.",
      "These valve seats are crucial in delivering consistent stroke efficiency and water discharge per cycle, especially in rural and remote applications where maintenance intervals can be infrequent. A degraded seat can lead to water leakage, decreased yield, and eventual pump failure if not promptly addressed.",
      "Our check valve seats are available in standard sizes and can also be customized for retrofitting legacy or non-standard systems. They are shipped with installation guides and compatibility labels for quick identification in the field.",
    ],
  },
  {
    name: "Rubber Sheet",
    spec: null,
    images: [
      "/assets/parts/rubber_sheet_1.jpg",
      "/assets/parts/rubber_sheet_2.jpg",
    ],
    description: [
      "The Rubber Sheet is a vital sealing component used across various sections of a handpump, including valves and gaskets, to prevent leakage and maintain internal water pressure during operation. Made from industrial-grade rubber, it withstands compression and maintains elasticity even under high mechanical stress.",
      "U. P. Pumps supplies rubber sheets that are precision-cut and formulated to resist water absorption, microbial growth, and mineral degradation. These sheets are compatible with both India Mark II and III models, as well as other community-use pump variants.",
      "Our rubber sheets are engineered to retain flexibility in extreme climatic conditions—from freezing Himalayan winters to the intense heat of Central India—ensuring long-term performance in diverse field environments.",
      "Typically used during maintenance cycles, the rubber sheets are available in multiple thicknesses and diameters, pre-punched for easy valve and flange fitting. Custom cutting services are also available for non-standard applications or repair kits.",
    ],
  },
  {
    name: "Retainer",
    spec: null,
    images: ["/assets/parts/retainer_1.jpg", "/assets/parts/retainer_2.jpg"],
    description: [
      "The Retainer is a small yet essential mechanical part used to hold various internal components such as rubber washers, seals, or springs in place within the pump structure. It ensures consistent alignment, secure seating, and resistance against vibration or displacement caused by repetitive handpump strokes.",
      "Fabricated from corrosion-resistant stainless steel or durable brass, the Retainer is designed to endure years of service without distortion. It plays a critical role in stabilizing the internal valve assemblies and maintaining consistent hydraulic response in deepwell pumps.",
      "Each Retainer is precision-machined for perfect fitment and is tested to withstand repetitive compression and torsional stress. This contributes significantly to the pump’s operational life and minimizes the need for frequent servicing.",
      "U. P. Pumps offers a range of retainers tailored for different pump models, including standard, EDWP, and modified handpump setups. Retainers can be ordered as part of full assembly kits or individually, based on maintenance and repair needs.",
    ],
  },
  {
    name: "Rubber Bucket",
    spec: null,
    images: [
      "/assets/parts/rubber_bucket_1.jpg",
      "/assets/parts/rubber_bucket_2.jpg",
    ],
    description: [
      "The Rubber Bucket is a crucial component mounted inside the plunger of deepwell hand pumps like the India Mark II and Mark III. It acts as a dynamic sealing and suction element, helping draw water upward during the pump stroke by creating a vacuum within the cylinder.",
      "Manufactured using high-tensile natural or synthetic rubber compounds, our Rubber Buckets maintain their elasticity and form even after thousands of pump cycles. Their conical shape allows them to expand and contract with water pressure, delivering optimal suction and flow efficiency.",
      "U. P. Pumps ensures every Rubber Bucket undergoes stress, fatigue, and pressure testing before dispatch. This guarantees long operational life and consistent performance, especially in high-usage community environments.",
      "Available in both standard and EDWP variants, these buckets are compatible with different bore depths and can be customized for special borewell sizes on demand. Easy to replace and service, they are commonly used in field maintenance kits.",
    ],
  },
  {
    name: "Sealing Ring",
    spec: null,
    images: [
      "/assets/parts/sealing_ring_1.jpg",
      "/assets/parts/sealing_ring_2.jpg",
    ],
    description: [
      "The Sealing Ring is an essential gasket-like component used in various pump junctions to prevent water leakage and maintain air-tight pressure throughout the cylinder and riser pipe assembly. Positioned between metallic parts, it ensures a tight seal under hydraulic stress.",
      "Our Sealing Rings are molded from premium-grade rubber compounds with high resistance to abrasion, ozone exposure, and water scaling. They are designed to retain sealing efficiency even in high-load cycles and continuous water flow conditions.",
      "These rings are precision-cut and available in multiple thicknesses and diameters, compatible with different interfaces such as cylinder flanges, valve assemblies, and riser connections.",
      "U. P. Pumps offers a comprehensive range of Sealing Rings for all standard handpump models, including India Mark II, III, and Afridev pumps. Each ring is batch-tested to ensure no dimensional inconsistencies, thus reducing the risk of leaks and frequent repairs in the field.",
    ],
  },
  {
    name: "Rubber Seating Upper Valve",
    spec: null,
    images: [
      "/assets/parts/rubber_seating_upper_valve_1.jpg",
      "/assets/parts/rubber_seating_upper_valve_2.jpg",
    ],
    description: [
      "The Rubber Seating Upper Valve is a precision-molded rubber component placed inside the plunger or head assembly of a handpump. It provides an essential sealing interface that prevents the backflow of water and maintains one-directional flow during pump operation.",
      "This component plays a critical role in maintaining suction and pressure equilibrium within the system. It ensures that water held in the riser pipes doesn't slip back into the borehole after each pump cycle, thus optimizing efficiency and reducing the number of strokes needed to draw water.",
      "U. P. Pumps manufactures these upper valve seatings from specially formulated elastomers, offering high resilience, wear resistance, and temperature tolerance. Their durability is field-tested under varying water conditions including hard water and muddy groundwater.",
      "These valve seatings are compatible with ISI-marked India Mark II, III, and EDWP handpump models. They are available in standard and reinforced options depending on the depth of borewell and operational stress. Proper seating design also reduces pump fatigue and enhances the lifespan of metal parts that interact with the valve.",
    ],
  },
  {
    name: "Rubber Seating Lower Valve",
    spec: null,
    images: [
      "/assets/parts/rubber_seating_lower_valve_1.jpg",
      "/assets/parts/rubber_seating_lower_valve_2.jpg",
    ],
    description: [
      "The Rubber Seating Lower Valve is an integral part of the pump's check valve system, positioned at the base of the cylinder to control water retention after each pumping cycle. It ensures that water drawn into the cylinder does not return to the borehole when the handle resets.",
      "This lower valve works in tandem with the plunger assembly, opening and closing automatically with each stroke to allow upward water flow while preventing downward loss. It's especially vital for installations with deeper static water levels where maintaining water column integrity is crucial.",
      "Crafted from high-grade synthetic rubber compounds, the valve seat is designed for extreme durability and sealing precision. It remains stable under high pressure, fluctuating water temperatures, and prolonged submersion without cracking or deforming.",
      "The Rubber Seating Lower Valve is compatible with standard and EDWP (Extra Deep Well Pumps) configurations and meets the IS:15500 standards. It is resistant to chemical corrosion and sediment abrasion, making it ideal for both soft and hard water environments.",
      "At U. P. Pumps, each batch undergoes quality control for compression set, rebound resilience, and sealing efficiency to ensure long-term reliability in field operations.",
    ],
  },
  {
    name: "T-Bar",
    spec: "EDWP",
    images: ["/assets/parts/tbar_1.jpg", "/assets/parts/tbar_2.jpg"],
    description: [
      "The T-Bar is a crucial mechanical component of the Extra Deep Well Pump (EDWP) assembly, functioning as the connecting link between the pump's handle mechanism and the plunger rod. Its primary purpose is to ensure smooth transmission of force from the user's input to the piston system deep inside the borewell.",
      "Engineered to handle high vertical loads and repetitive stresses, the T-Bar in EDWP configurations is manufactured using hot-dip galvanized or stainless steel to withstand rust, wear, and prolonged exposure to moisture and contaminants.",
      "Its design features balanced arm extension points that reduce handle recoil and promote ergonomic water pumping even under deep suction conditions. The reinforced welds and stress-tested joints allow the T-Bar to maintain stability in pumps with installation depths up to 90 meters.",
      "This component is precision-drilled to align perfectly with riser rods and handle levers, ensuring no play or misalignment during extended operation. As an ISI-compliant component, the EDWP T-Bar meets the IS:15500 standards for structural integrity, fatigue resistance, and water safety.",
      "U. P. Pumps supplies T-Bars in standard sizes as well as customizable lengths and diameters for unique borehole configurations. Every unit is batch-tested for torque resilience and compatibility across all supported deepwell pump models.",
    ],
  },
  {
    name: "Counter Weight",
    spec: "EDWP",
    images: [
      "/assets/parts/counter_weight_1.jpg",
      "/assets/parts/counter_weight_2.jpg",
    ],
    description: [
      "The Counter Weight used in EDWP (Extra Deep Well Pump) systems is a balancing component designed to offset the manual effort required to lift water from deep aquifers. It is strategically mounted on the opposite end of the handle to counterbalance the load from the riser rods and water column.",
      "Crafted from high-density cast iron or steel, the counter weight is calibrated precisely to match the operational torque of the pump. This ensures smooth, fatigue-free operation, especially in community installations where usage frequency is high.",
      "In EDWP applications where water is drawn from depths exceeding 70 meters, the counter weight plays a vital role in minimizing the physical effort of the user while improving pumping efficiency and stroke consistency.",
      "All U. P. Pumps counter weights are anti-corrosion treated through galvanization or powder coating, and are manufactured according to IS:15500 specifications for long-term reliability and safety.",
      "These components undergo rigorous dynamic balance tests before dispatch to ensure vibration-free operation, and they are compatible with standard as well as customized deepwell hand pump handles.",
    ],
  },
  {
    name: "Upper Valve Guide w/ Rubber Seat",
    spec: null,
    images: [
      "/assets/parts/upper_valve_guide_1.jpg",
      "/assets/parts/upper_valve_guide_2.jpg",
    ],
    description: [
      "The Upper Valve Guide with Rubber Seat is a precision-engineered component used to guide and secure the upper valve mechanism within the handpump’s plunger or head assembly. It ensures consistent valve alignment, preventing wobble or misplacement during continuous operation.",
      "This component plays a critical role in controlling water flow during the upward stroke by offering stable seating for the rubber valve. The integrated rubber seat provides a leak-proof seal, ensuring that water remains inside the riser pipes and doesn't backflow between strokes.",
      "At U. P. Pumps, our upper valve guides are manufactured using reinforced engineering plastics or machined brass, coupled with high-grade EPDM/NBR rubber for the seating. This dual-material approach enhances both mechanical rigidity and sealing performance.",
      "The design is compatible with both India Mark II and Mark III models and meets IS:15500 standards. It is tested for endurance under high-pressure cycles, ensuring long operational life even in demanding field conditions.",
      "Ideal for both standard and EDWP configurations, these guides are available in pre-assembled kits or as individual parts, making them suitable for repairs, retrofitting, and OEM installations.",
    ],
  },
  {
    name: "Tool Set",
    spec: "For Installation & Major Repair",
    images: ["/assets/parts/tool_set_1.jpg", "/assets/parts/tool_set_2.jpg"],
    description: [
      "The Tool Set for Installation & Major Repair is a comprehensive kit designed specifically for on-site servicing and assembly of handpumps including India Mark II, Mark III, Afridev, and EDWP variants.",
      "Each tool in the kit is manufactured from high-tensile carbon steel with anti-corrosive coating to withstand harsh environmental conditions and frequent usage in the field.",
      "The set typically includes essential items such as rod spanners, handle pin extractors, valve lifters, pipe threading tools, plunger and cylinder servicing tools, pipe clamps, chain tools, and more—organized in a sturdy carrying case for ease of transport.",
      "This repair kit enables technicians to carry out full-scale installations, preventive maintenance, and emergency troubleshooting without the need for electric tools or workshop support.",
      "Used by government contractors, NGOs, and rural development teams, the tool set ensures uninterrupted access to clean water through prompt maintenance, even in remote or resource-scarce regions.",
      "Customized tool sets are also available based on pump model and usage type, and all tools comply with BIS guidelines for public water supply equipment servicing.",
    ],
  },
];

export default function MoreAccessoriesDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleKnowMore = (part: any) => {
    setSelectedPart(part);
    setShowModal(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", {
      product: selectedPart.name,
      ...formData,
    });
    setShowModal(false);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
        Full Spare Parts & Accessories List
      </h2>
      <p className="text-center text-slate-700 mb-8">
        Full spare parts list available on request. For prices, specifications,
        and availability, please contact us.
      </p>
      <div className="overflow-x-auto bg-white shadow ring-1 ring-slate-200 rounded-xl">
        <table className="min-w-full text-sm text-left text-slate-700">
          <thead className="bg-gradient-to-r from-blue-600 to-sky-500 text-white">
            <tr>
              <th className="px-6 py-3 font-semibold">Sr. No.</th>
              <th className="px-6 py-3 font-semibold">Part Image</th>
              <th className="px-6 py-3 font-semibold">Part Name</th>
              <th className="px-6 py-3 font-semibold">
                Specification (If Applicable)
              </th>
              <th className="px-6 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {accessoryParts.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-200 hover:bg-sky-50 transition"
              >
                {/* Serial Number */}
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {index + 1}
                </td>

                {/* Product Image */}
                <td className="px-4 py-3 whitespace-nowrap">
                  {item.images && item.images.length > 0 && (
                    <div className="w-20 h-20 relative rounded overflow-hidden border border-gray-200">
                      <img
                        src={item.images[0]}
                        alt={`${item.name} image`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </td>

                {/* Product Name */}
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                  {item.name}
                </td>

                {/* Specification */}
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  {item.spec || "—"}
                </td>

                {/* Know More Button */}
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleKnowMore(item)}
                    className="text-blue-700 hover:underline cursor-pointer"
                  >
                    Know More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white max-w-4xl w-full mx-4 my-12 h-[90vh] rounded-xl shadow-lg relative flex flex-col">
              {/* Scrollable Content */}
              <div className="overflow-y-auto p-8 flex-1">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {selectedPart.name} Details
                </h3>

                {/* Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {selectedPart.images?.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="relative w-full h-60 rounded overflow-hidden shadow"
                    >
                      <Image
                        src={img}
                        alt={`${selectedPart.name} image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="text-slate-700 mb-6 space-y-3">
                  {selectedPart.description?.map((desc: string, i: number) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>

                {/* 📝 Clause Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-900 p-4 mb-6 rounded">
                  <p className="font-semibold mb-1">📄 Please Note:</p>
                  <p className="text-sm">
                    This is only a preview of the available spare parts.
                    <br />
                    The **entire catalogue will not be published online**. For
                    prices, specifications, and availability:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-sm">
                    <li>
                      📧 Email: <strong>uppumpsknp1@gmail.com</strong>
                    </li>
                    <li>
                      📞 Phone: <strong>+91 9415127047 / +91 9455598050</strong>
                    </li>
                    <li>🏢 Address: 1-B, Dadanagar, Kanpur, UP, 208022</li>
                  </ul>
                  <p className="text-sm mt-3">
                    The entire catalogue for handpump repair kits and spare
                    parts is available on request. Please reach out for further
                    information.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-2 rounded border border-gray-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-2 rounded border border-gray-300"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile (with country code)"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="px-4 py-2 rounded border border-gray-300 sm:col-span-2"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-2 rounded border border-gray-300 sm:col-span-2"
                  />
                </div>
              </div>

              {/* Fixed Footer */}
              <div className="px-2 py-4 border-t rounded-b-xl bg-white flex justify-between items-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
