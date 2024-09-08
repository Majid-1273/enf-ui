import { useEffect, useState } from 'react';
import flag from "../../assets/images/countryFlag.png";

const CompaniesList = () => {
  const initialData = [
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
    { company: 'Xiamen Angels', region: 'China', staff: 15, sellers: 20, powerRange: '175-295', flag: flag },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const storedData = localStorage.getItem('companiesData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-green-900 text-white">
            <th className="py-2 px-4 border-b text-left rounded-tl-xl">Index</th>
            <th className="py-2 px-4 border-b text-left">Company Name</th>
            <th className="py-2 px-4 border-b text-left">Region</th>
            <th className="py-2 px-4 border-b text-left">No. Staff</th>
            <th className="py-2 px-4 border-b text-left">Sellers</th>
            <th className="py-2 px-4 border-b text-left rounded-tr-xl">Power Range(Wp)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{item.company}</td>
              <td className="py-2 px-4 border-b flex items-center">
                <img src={item.flag} alt={`${item.region} flag`} className="w-6 h-4 mr-2" />
                {item.region}
              </td>
              <td className="py-2 px-4 border-b">{item.staff}</td>
              <td className="py-2 px-4 border-b">{item.sellers}</td>
              <td className="py-2 px-4 border-b">{item.powerRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesList;
