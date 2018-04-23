function check_subject(data) {

  if (data.SubjectId == null) {
    return 'unassigned'
  } else {
    return data.Subject.subject_name
  }

}

module.exports = check_subject;
