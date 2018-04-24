function assignedValue(teacherData){
  if(teacherData !== null){
    return teacherData.SubjectName
  }else{
    return "Unassigned"
  }
}

module.exports = assignedValue
