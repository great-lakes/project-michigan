export const initialHackathonData =
`
query initialHackathonData($hackathonId: ID!){
  hackathon(id: $hackathonId) {
    id
    name
    slug
    mentors {
      id
      first_name
      last_name
      email
      bio
      skills {
        id
        name
      }
    }
    students {
      id
      name
      email
      project {
        id
        name
      }
    }
    inquiries {
      id
      question
      is_resolved
      created_at
      student{
        id
        email
        project {
          id
          name
        }
      }
      mentor{
        id
      }
    }
  }
}
`
