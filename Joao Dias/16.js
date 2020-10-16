/*function getDependencies(tree) {
  let dependencies= [];
  console.log(tree);
  if(tree.dependencies){
    Object.keys(tree.dependencies).forEach((key)=>{
        let dependencystring = `${key}@${tree.dependencies[key].version}`

        dependencies.push(dependencystring)
        console.log(tree.dependencies[key].dependencies == true)
        if(tree.dependencies[key].dependencies){
          getDependencies(tree.dependencies[key]).forEach((keystring)=>{
            if(!dependencies.some(keystring2 => keystring === keystring2)){
                  dependencies.push(keystring)
            }
          })
        }
    })

    console.log(dependencies)

    return dependencies;
  }
}*/


function getDependencies(tree) {
  let dependencies = [];

  if(tree && tree.dependencies){
    Object.keys(dependencies).forEach((dependency, i) => {
      let dependencystring = `${key}@${tree.dependencies[key].version}`
      dependencies.push(dependencystring)
    });

    tree.dependencies.forEach((dependency, i) => {
      getDependencies(dependency).forEach((keystring)=>{
        if(!dependencies.some(keystring2 => keystring === keystring2)){
              dependencies.push(keystring)
        }
      })
    });

    return dependencies;
  }
}

var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }

    getDependencies(loremIpsum)

module.exports = getDependencies
