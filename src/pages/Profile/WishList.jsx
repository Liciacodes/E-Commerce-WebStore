import React from "react";
import WishListItem from "./WishListItem";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";

export default function WishList() {
  return (
    <div className="ml-4">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
      <div className="space-y-4">
        <WishListItem
          title={"Raw Black T-Shirt Lineup"}
          image={frame4}
          price={"75.00"}
          date={"27 July 2023"}
        />
        <WishListItem
          title={"Monochromatic Wardrobe"}
          image={frame3}
          price={"22.00"}
          date={"27 July 2023"}
        />
      </div>
    </div>
  );
}
