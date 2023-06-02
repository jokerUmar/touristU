import { Carousel } from '@mantine/carousel';
import img1 from "../../assets/images/img-1.jpg"
import img2 from "../../assets/images/img-2.jpg"
import img3 from "../../assets/images/img-3.jpg"
import img4 from "../../assets/images/img-4.jpg"
import img5 from "../../assets/images/img-5.jpg"

function ImgCarousel() {
  return (
    <Carousel
    withIndicators
    height={300}
    slideSize="33.333333%"
    slideGap="md"
    loop
    align="start"   
    breakpoints={[
      { maxWidth: 'md', slideSize: '50%' },
      { maxWidth: 'sm', slideSize: '100%'},
    ]}

    >
      <Carousel.Slide> <div> <img src={img1} style={{width:"98%"}} alt="" /> </div> </Carousel.Slide>
      <Carousel.Slide> <div> <img src={img2} style={{width:"98%"}} alt="" /> </div> </Carousel.Slide>
      <Carousel.Slide> <div> <img src={img3} style={{width:"98%"}} alt="" /> </div> </Carousel.Slide>
      <Carousel.Slide> <div> <img src={img4} style={{width:"98%"}} alt="" /> </div> </Carousel.Slide>
      <Carousel.Slide> <div> <img src={img5} style={{width:"98%"}} alt="" /> </div> </Carousel.Slide>
    </Carousel>
  );
}

export default ImgCarousel