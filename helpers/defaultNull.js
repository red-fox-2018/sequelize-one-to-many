function defaultNull(param){
    // console.log('ini param>>>>>>>>>>>',param.SubjectId)
    // console.log('ini param>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',param.Subject.subject_name)
    
    if(param.SubjectId == null){
        return 'unassigned'
    }
    else{
        // console.log('ini ga masuk ya>>>>>>>>>>>>>>>', param)
        return param.Subject.subject_name
    }
}

module.exports = defaultNull