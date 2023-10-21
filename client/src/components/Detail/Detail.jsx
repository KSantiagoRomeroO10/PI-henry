import './Detail.css'

const Detail = ({driver}) =>{
  //{ id, nameF, nameS, imageUrl, dob, nationality, teams, description }
  return(
    <>
      <div>
        <img src={driver?.image} alt='Error no hay imagen.'/>
      </div>
      <div>
        <p>Id: </p>
        <p>Forename: </p>
        <p>Surname: </p>
        <p>Nationality: </p>
        <p>Birth Date: </p>
        <p>Description: </p>
        <p>Teams: </p>
      </div>
    </>
  )
}

export default Detail