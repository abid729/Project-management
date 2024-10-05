"use client"; // This makes the component a Client Component

import { useSearchParams } from 'next/navigation';

export default function ProductDetail({ params }: { params: { productid: string } }) {
  const searchParams = useSearchParams();
  const isDropOff = searchParams.get('is_drop_off') === '1';
  const isDropOf = searchParams.get('is_drop_of') === '1';
  console.log(isDropOff);
  console.log(isDropOf);
  // debugger
  return (
    <div>
      <h1>ProductDetail page {params.productid}</h1>
    
      {isDropOff ? (
        <div>
          <h2>Drop-off Information</h2>
          <p>This product is available for drop-off.</p>
        </div>
      ) : (
        <div>
          <h2>Other Information</h2>
          <p>This product is not available for drop-off.</p>
        </div>
      )}
    </div>
  );
}
