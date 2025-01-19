
class FS_Proxy{

    constructor(original_fs){
      this.fs = original_fs;
    }
    readFile(path,type,callback){
        if(!path.match(/.md$|.MD$/)){
            return callback(new Error('Filetype can only be markdown'))
        }

        this.fs.readFile(path,type,(error,contents)=>{
          if(error){
            console.log('err',error);
            return callback(error);
          }
          return callback(null,contents);
        })
    }

}

module.exports = FS_Proxy;