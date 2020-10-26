


function getDependencies(tree, result) {
  let dependencies = result || [];


  if(tree && tree.dependencies){

    //Go trough every dependency on the tree
    Object.keys(tree.dependencies).forEach((key, i) => {

      let dependencystring = `${key}@${tree.dependencies[key].version}`

      //if it doesnt exist add it dependencies
      if(dependencies.indexOf(dependencystring) === -1)
        dependencies.push(dependencystring)


      if(tree.dependencies[key].dependencies){
          //Get the dependencies of every dependency
          getDependencies(tree.dependencies[key], dependencies);
      }

    });
  }

  return dependencies.sort();
}



module.exports = getDependencies
