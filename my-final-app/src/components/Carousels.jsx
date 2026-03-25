import { Carousel } from "flowbite-react";

export function Component(pics, pics2, pics3) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={pics} alt="..." />
        <img src={pics2} alt="..." />
        <img src={pics3} alt="..." />
      </Carousel>
    </div>
  );
}