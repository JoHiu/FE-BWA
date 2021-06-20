import React from "react";
import Button from "elements/Button";
// import IconBrand from "assets/images/icons/icon-brand.svg"

export default function iconText() {
  return (
    <Button className="brand-text-icon" href="" type="link">
      <img width="55" height="55" src="/images/icon-brand.svg" alt="TravelKu" />
      <span className="text-gray-900"> Travel</span>Ku
    </Button>
  );
}
