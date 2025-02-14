import { useState } from "react";

const carDataCluster = {
  documents: [
    {
      id: "car_info_001",
      type: "CarInfo",
      content: {
        make: "Tesla",
        model: "Model 3",
        year: 2022
      }
    },
    {
      id: "owner_details_001",
      type: "OwnerDetails",
      content: {
        name: "John Doe",
        contact: "johndoe@example.com"
      }
    },
    {
      id: "service_log_001",
      type: "ServiceLog",
      content: {
        last_service: "2024-01-15"
      }
    }
  ]
};

const garageCluster = {
  documents: [
    {
      id: "garage_info_001",
      type: "GarageInfo",
      content: {
        name: "Speedy Repairs",
        location: "Springfield, IL"
      }
    },
    {
      id: "inventory_001",
      type: "Inventory",
      content: {
        tools: ["Wrench", "Lift"]
      }
    },
    {
      id: "repair_history_001",
      type: "RepairHistory",
      content: {
        last_repair: "Brake Replacement"
      }
    }
  ]
};

export default function ComponentCompositionEx() {
  const [carData, setCardata] = useState(carDataCluster);
  const [garage, setGarage] = useState(garageCluster);

  console.log(carData);
  console.log(garage);

  return (
    <>
      <h2>Car Data</h2>
      <MapData listOfItems={carData.documents}>
        {(item) => <CarDataCard item={item} />}
      </MapData>

      <h2>Garage Data</h2>
      <MapData listOfItems={garage.documents}>
        {(item) => <GarageDataCard item={item} />}
      </MapData>
    </>
  );
}

function MapData({ listOfItems, children }) {
  return (
    <>
      {listOfItems.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </>
  );
}

function CarDataCard({ item }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <p>ID: {item.id}</p>
      <p>Type: {item.type}</p>
      <pre>{JSON.stringify(item.content, null, 2)}</pre>
    </div>
  );
}

function GarageDataCard({ item }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "5px" }}>
      <p>ID: {item.id}</p>
      <p>Type: {item.type}</p>
      <pre>{JSON.stringify(item.content, null, 2)}</pre>
    </div>
  );
}
