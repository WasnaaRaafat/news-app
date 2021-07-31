const Artical = (props) => {
  const data = props.location.state.data;
  console.log(data);
  return (
    <div className='Artical'>
      {data && (
        <div className='Artical-container '>
          <img src={data.urlToImage} alt='new-img' title={data.title} />
          <div className='container'>
            <h2>
              <b>"{data.title}"</b>
            </h2>
            <p>
              {data.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate amet natus similique. Quam, laudantium
              consequuntur blanditiis impedit temporibus amet libero neque,
              voluptatem, aliquam modi laboriosam quo corrupti eius pariatur
              nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate amet natus similique. Quam, laudantium consequuntur
              blanditiis impedit temporibus amet libero neque, voluptatem,
              aliquam modi laboriosam quo corrupti eius pariatur nobis? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              amet natus similique. Quam, laudantium consequuntur blanditiis
              impedit temporibus amet libero neque, voluptatem, aliquam modi
              laboriosam quo corrupti eius pariatur nobis? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. <br /> Voluptate amet natus
              similique. Quam, laudantium consequuntur blanditiis impedit
              temporibus amet libero neque, voluptatem, aliquam modi laboriosam
              quo corrupti eius pariatur nobis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <br />
              Voluptate amet natus similique. Quam, laudantium consequuntur
              blanditiis impedit temporibus amet libero neque, voluptatem,
              aliquam modi laboriosam quo corrupti eius pariatur nobis?Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet
              natus similique. Quam, laudantium consequuntur blanditiis impedit
              temporibus amet libero neque, voluptatem, aliquam modi laboriosam
              quo corrupti eius pariatur nobis?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptate amet natus similique.
              Quam, laudantium consequuntur blanditiis impedit temporibus amet
              libero neque, voluptatem, aliquam modi laboriosam quo corrupti
              eius pariatur nobis?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate amet natus similique. Quam, laudantium
              consequuntur blanditiis impedit temporibus amet libero neque,
              voluptatem, aliquam modi laboriosam quo corrupti eius pariatur
              nobis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate amet natus similique. Quam, laudantium consequuntur
              blanditiis impedit temporibus amet libero neque, voluptatem,
              aliquam modi laboriosam quo corrupti eius pariatur nobis?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artical;
