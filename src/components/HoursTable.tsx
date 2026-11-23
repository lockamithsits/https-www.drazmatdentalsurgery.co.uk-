import { HOURS } from "@/lib/site";

export default function HoursTable() {
  return (
    <table className="w-full max-w-md border-collapse text-left text-sm sm:text-base">
      <caption className="sr-only">Opening hours for Dr Azmat Dental Surgery</caption>
      <tbody>
        {HOURS.map((h) => (
          <tr key={h.day} className="border-b border-slate-200 last:border-0">
            <th scope="row" className="py-2 pr-4 font-medium text-slate-700">
              {h.label}
            </th>
            <td className="py-2 text-slate-900">
              {h.open ? `${h.open} – ${h.close}` : "Closed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
