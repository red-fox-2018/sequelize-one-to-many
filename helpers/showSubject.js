function checkSubject(data) {
  if (data == null) {
    return 'unnasigned'
  } else {
    return data.subject_name
  }
}

module.exports = checkSubject
