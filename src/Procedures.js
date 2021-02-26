import {Link} from 'react-router-dom'

const Procedures = () =>{
    const procedures = [
        "Deep Cleaning",
        "Filling",
        "Crown",
        "Root Canal",
        "Oral Surgery"
      ]
      // map function to get an array of li items
      // with each precedure

      const procedureList = procedures.map((procedure, index)=>{
            return <li key={index}><Link to={`/procedures/${procedure}`}>{procedure}</Link></li>
      })

    return(
        <div>
            <p>Procedures</p>
            <ul>
                {procedureList}
            </ul>
        </div>
    )

}
export default Procedures;