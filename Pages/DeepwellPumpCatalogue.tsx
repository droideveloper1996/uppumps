import { motion } from "framer-motion";

const pumpSchedules = [
  {
    schedule: "Schedule 1",
    type: "Normal Stand",
    rodMaterial: "Bright Bar (BBCR)",
    casing: "100/125mm",
    stand: "Normal",
    spec: "IS:15500 (Part 2)/2004",
  },
  {
    schedule: "Schedule 2",
    type: "Telescopic Stand",
    rodMaterial: "Bright Bar (BBCR)",
    casing: "150mm",
    stand: "Telescopic",
    spec: "IS:15500 (Part 2)/2004",
  },
  {
    schedule: "Schedule 3",
    type: "Normal Stand",
    rodMaterial: "Stainless Steel (SSCR)",
    casing: "100/125mm",
    stand: "Normal",
    spec: "IS:15500 (Part 2)/2004",
  },
  {
    schedule: "Schedule 4",
    type: "Telescopic Stand",
    rodMaterial: "Stainless Steel (SSCR)",
    casing: "100/125mm",
    stand: "Telescopic",
    spec: "IS:15500 (Part 2)/2004",
  },
  {
    schedule: "Schedule 5",
    type: "Normal Stand",
    rodMaterial: "Bright Bar (BBCR)",
    rodQuantity: "20 rods",
    stand: "Normal",
    spec: "IS:15500 (Part 2)/2004",
  },
  {
    schedule: "Schedule 6",
    type: "Telescopic Stand",
    rodMaterial: "Bright Bar (BBCR)",
    rodQuantity: "20 rods",
    stand: "Telescopic",
    spec: "IS:15500 (Part 2)/2004",
  },
];

export default function DeepwellPumpCatalogue() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800"
      >
        Deepwell Hand Pumps Catalogue
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-600 text-center max-w-3xl mx-auto mb-10"
      >
        We manufacture a wide range of ISI-marked deep well Hand Pumps designed
        for field performance. These are tested for long-term durability and are
        ideal for rural and remote conditions.
      </motion.p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border text-left">
          <thead className="bg-blue-100 text-slate-700">
            <tr>
              <th className="p-3 border">Schedule</th>
              <th className="p-3 border">Assembly Type</th>
              <th className="p-3 border">Rod Material</th>
              <th className="p-3 border">Casing / Rod Qty</th>
              <th className="p-3 border">Stand Type</th>
              <th className="p-3 border">ISI Specification</th>
            </tr>
          </thead>
          <tbody>
            {pumpSchedules.map((pump, i) => (
              <tr key={i} className="border-b">
                <td className="p-3 border font-semibold">{pump.schedule}</td>
                <td className="p-3 border">{pump.type}</td>
                <td className="p-3 border">{pump.rodMaterial}</td>
                <td className="p-3 border">
                  {pump.casing || pump.rodQuantity || "-"}
                </td>
                <td className="p-3 border">{pump.stand}</td>
                <td className="p-3 border">{pump.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
