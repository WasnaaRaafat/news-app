const Artical = (props) => {
  const data = props.location.state.data;
  console.log(data);
  return (
    <div className='artical'>
      {data && (
        <div className='artical-container '>
          <img src={data.urlToImage} alt={data.title} />
          <div className='container'>
            <h3 className='artical-title'>"{data.title}"</h3>
            <p>
              {data.content} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptate amet natus similique. Quam, laudantium
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
