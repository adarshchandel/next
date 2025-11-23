import React from 'react'
import Image from 'next/image';


export const ButtonLoader = () => {
  return (
    <div >
        <Image src={"/loading.gif"} width={25} height={25}  alt='"Loading...'/>
    </div>
  )
}
