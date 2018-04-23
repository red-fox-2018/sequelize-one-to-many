function checkNull(subjectStudy){
  if(subjectStudy === null){
    return 'unassigned';
  }else{
    return subjectStudy.subject_name;
  }
}









module.exports = checkNull;
