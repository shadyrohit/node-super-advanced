const log = {
    info: function(info){
        return 'information : ${info}'
    },
    warning: function(warn){
       return 'warning : ${warn}'
    },
    error: function(error){
        return 'error : ${error}'
    }
}

module.exports = log;