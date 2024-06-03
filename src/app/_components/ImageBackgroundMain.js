import React from 'react'
import Image from 'next/image'

const ImageBackgroundMain = () => {
  return (
    <div>
      <Image src={"/assets/working.jpg"} alt='' layout="fill" objectFit='cover'></Image>
    </div>
  )
}

export default ImageBackgroundMain
