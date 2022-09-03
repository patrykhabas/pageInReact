import Box from './Box';

const services = [
  { name: 'Usługa 1', isNew: true },
  { name: 'Usługa 2', isNew: false },
  { name: 'Usługa 3', isNew: false },
  { name: 'Usługa 4', isNew: false },
  { name: 'Usługa 5', isNew: false },
  { name: 'Usługa 6', isNew: false },
];

function Boxes() {
  const boxes = (
    <section id='oferta' className='content'>
      <h1 className='content-heading'>Czym zajmuje się nasza firma?</h1>

      <div className='box-style'>
        {services.map((service, index) => {
          return <Box key={index} name={service.name} isNew={service.isNew} />;
        })}
      </div>
    </section>
  );
  return boxes;
}

export default Boxes;
