const path = require('path')
const fs = require('fs')


const cssPaths = ['Shimmer.css', 'SkeletonElement.css']

const destinations = ['esm', 'lib']

for(const filename of cssPaths){
    const filepath = path.join(__dirname, 'src', filename)
    for(const destname of destinations){
        const destination = path.join(__dirname, destname, filename)
        copyTo(filepath,destination )
    }
}

function copyTo(filepath, moveTo){
    fs.copyFile(filepath, moveTo, (err) => {
        if(err){

            console.log(err)
        }
    })
}