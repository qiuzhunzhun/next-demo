import { useState } from "react";
import dynamic from "next/dynamic"
const BarcodeScanner = dynamic(
  () => import("react-qr-barcode-scanner"),
  { ssr: false }
)

export default function Home() {
  const [data, setData] = useState("Not Found");

  return (
    <div className="container">
      <div className="text-center mt-6 mb-2 text-[18px]">Convertible Items</div>
      <div>
        <BarcodeScanner
          width={500}
          height={500}
          onUpdate={(err, result) => {
            console.log(result)
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
        <p className="h-[40px] leading-[40px] text-[16px]">{data}</p>
      </div>
      <ul>
        <li className="flex items-center mt-1">
          <div className="w-[60px] h-[60px] leading-[60px] text-center">img</div>
          <div className="grow">
            <div className="text-[12px]">smart pods</div>
            <div  className="text-[12px]">Inventory:100</div>
          </div>
          <button className="w-[70px] h-[28px] leading-[28px] text-[12px] text-[#fff] bg-[#333] rounded-[14px]">Redeem</button>
        </li>
        <li className="flex items-center">
          <div className="w-[60px] h-[60px] leading-[60px] text-center">img</div>
          <div className="grow">
            <div className="text-[12px]">smart pods</div>
            <div  className="text-[12px]">Inventory:100</div>
          </div>
          <button className="w-[70px] h-[28px] leading-[28px] text-[12px] text-[#fff] bg-[#333] rounded-[14px]">Redeem</button>
        </li>
      </ul>
    </div>
  );
}
