import React from "react";
import OrderDetails from "./OrderDetails";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";

export default function Orders() {
  return (
    <div className="ml-4">
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <div className="space-y-4">
        <OrderDetails
          title={"Raw Black T-Shirt Lineup"}
          date={"27 July 2023"}
          price={"70.00"}
          orderStatus="Processing"
          image={frame1}
        />
        <OrderDetails
          title={"Monochromatic Wardrobe"}
          date={"9 march 2023"}
          price={"27.00"}
          orderStatus="Completed"
          image={frame2}
        />
      </div>
    </div>
  );
}
