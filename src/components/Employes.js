function Employes() {
  const employes = (
    <section id='o-nas' className='people'>
      <h1 className='about'>Nasi specjaliści</h1>

      <div className='wraper '>
        <div className='worker '>
          <div className='portraits '></div>
          <div className='worker-description'>
            <h2 className='name'>Imię Nazwisko [dzial]</h2>
            <p className='info'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              molestiae doloribus debitis consequatur asperiores earum
              voluptatibus blanditiis voluptates harum illum fuga voluptas
              cupiditate quos, quam sed similique rerum temporibus hic?
            </p>
          </div>
        </div>
      </div>

      <div className='worker '>
        <div className='portraits2'></div>
        <div className='worker-description'>
          <h2 className='name'>Imię Nazwisko [dzial]</h2>

          <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            molestiae doloribus debitis consequatur asperiores earum
            voluptatibus blanditiis voluptates harum illum fuga voluptas
            cupiditate quos, quam sed similique rerum temporibus hic?
          </p>
        </div>
      </div>
    </section>
  );

  return employes;
}

export default Employes;
