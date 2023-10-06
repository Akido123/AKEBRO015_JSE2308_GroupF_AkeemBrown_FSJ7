import Image from 'next/image';

import classes from './hero.module.css';

function Hero(){
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src='/images/site/picofme.jpg'
          alt='An image that shows me' 
          width={300} 
          height={300}/>
      </div>
      <h1>Hey there, my name is Akeem.</h1>
      <p>I am an aspiring Junior Software Developer ready for the industry.</p>
    </section>
  )
}

export default Hero;