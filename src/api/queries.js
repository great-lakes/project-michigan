export const setInquiryStatus =
`
mutation setInquiryStatus($inquiryId: ID!, $status: InquiryStatus!) {
  setInquiryStatus(id: $inquiryId, status: $status) {
    id
    question
    is_resolved
    mentor_notes
    created_at
    student{
      id
    }
    mentor{
      id
    }
  }
}
`

export const assignMentorToInquiry =
`
mutation assignMentorToInquiry($inquiryId: ID!, $mentorId: ID!){
  setInquiryMentor(inquiryId: $inquiryId, mentorId: $mentorId) {
    id
    question
    is_resolved
    created_at
    mentor_notes
    student{
      id
    }
    mentor{
      id
    }
  }
}
`

export const takeAzurecode =
`
mutation takeAzurecode($azurecodeId: ID!){
  issueAzurecodeById(id: $azurecodeId) {
    id
    code
    is_taken
    student {
      id
    }
  }
}
`

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
    azurecodes {
      id
      code
      is_taken
      student {
        id
      }
    }
    inquiries {
      id
      question
      is_resolved
      created_at
      mentor_notes
      student{
        id
        name
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
