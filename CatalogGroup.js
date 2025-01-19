class CatalogGroup{
   constructor(name,composites=[]){
     this.name = name;
     this.composites = composites;
   }

     get total() {
        return this.composites.reduce((sum,ele)=>sum+ele.total ,0)
    }

    print() {
        console.log(`<==${this.name.toUpperCase()}==>`);
        this.composites.forEach((ele)=>ele.print())
        
    }
}

module.exports = CatalogGroup;