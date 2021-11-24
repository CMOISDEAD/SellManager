const Icons = ({ icon, name }) => {
    return ( 
      <>
      <i aria-hidden className={`${icon}`}>
        <br/>
        <span className="lang-info">{name}</span>
      </i>
      <style jsx>
        {`
          i {
            font-size: 1.8rem;
            margin: 0 1vw 10px 1vw;
          }
          .lang-info {
            transition: all 0.5s ease;
            margin: 0;
            font-size: 1rem;
            font-weight: 300;
          }
          i:hover {
            color: #689d6a;
          }
        `}
      </style>
      </>
    )
  }
  
  export default Icons
  