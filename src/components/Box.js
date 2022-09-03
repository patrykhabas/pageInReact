function Box({ name, isNew }) {
  const box = (
    <div className='box'>
      {name}
      {isNew && <p>(nowość)</p>}
      {isNew && <div className='mini-circle'></div>}
    </div>
  );

  return box;
}

export default Box;
