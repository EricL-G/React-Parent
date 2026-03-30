
function Carousels({ pics }) {
  return (
    <div className="w-full mx-auto my-5 px-6 rounded-lg" style={{ maxWidth: '300px', height: '200px' }}>
        <img src={pics} alt="..." />
    </div>
  );
}
export default Carousels;



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