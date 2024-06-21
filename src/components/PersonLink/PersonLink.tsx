import { Link, useParams } from "react-router-dom";
import { Person } from "../../types"

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { slug } = useParams();

  return (
    <tr data-cy="person"
      className={slug === person.slug  ? "has-background-warning" : ''}>
      <td className={person.sex === 'f' ? "has-text-danger" : ''}>
        <Link to={`/people/${person.slug}`} className={person.sex === 'f' ? "has-text-danger" : ''}>{person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {person.mother ?
          (
            <Link to={`/people/${person.mother?.slug}`} className="has-text-danger"> {person.mother.name} </Link>
          ) : (
            person.motherName || '-'
          )
        }
      </td>


      <td>{person.father ?
          (
            <Link to={`/people/${person.father?.slug}`}> {person.father.name} </Link>
          ) : (
            person.fatherName || '-'
          )
        }</td>
    </tr>
  )
}
