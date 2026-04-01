
function Pictures({ pics }) {
  return (
    <div className="w-full mx-auto my-5 px-6 rounded-lg hover:scale-120 transition-transform duration-300 overflow-hidden" style={{ maxWidth: '300px', height: '250px' }}>
        <img src={pics} alt="..." />
    </div>
  );
}
export default Pictures;



// import { Carousel } from "flowbite-react";

// export default function Carousels({ pics, pics2, pics3 }) {
//   return (
//     <div className="w-full mx-auto my-10 px-12" style={{ maxWidth: '500px', height: '300px' }}>
//       <Carousel>
//         <img src={pics} alt="..." />
//         <img src={pics2} alt="..." />
//         <img src={pics3} alt="..." />
//       </Carousel>
//     </div>
//   );
// }