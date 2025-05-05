"use client";
import { useState } from "react";

export default function MomoForm() {
  const [formData, setFormData] = useState({
    amount: "500",
    currency: "EUR",
    externalId: "00004335",
    payer: {
      partyIdType: "MSISDN",
      partyId: "",
    },
    payerMessage: "Payment to Geekhill Orient",
    payeeNote: "Transactional Payment",
  });

  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/request", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponse(data);

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <input
        type="text"
        placeholder="MSISDN"
        value={formData.payer.partyId}
        onChange={(e) =>
          setFormData({
            ...formData,
            payer: { ...formData.payer, partyId: e.target.value },
          })
        }
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Pay with MoMo
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </form>
  );
}
