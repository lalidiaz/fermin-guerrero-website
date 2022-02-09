/* eslint-disable @next/next/no-img-element */
export default function Media({ image }) {
  console.log('image', image);
  return (
    <div className='container-media'>
      {image && <img src={image} alt='article-image' className='media-img' />}
    </div>
  );
}