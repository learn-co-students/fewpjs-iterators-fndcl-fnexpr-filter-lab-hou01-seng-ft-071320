function findMatching(arr,str){
  let newarr=arr.filter(dri=>{
   return dri.toLowerCase()===str.toLowerCase()
  })
  return newarr
}
function fuzzyMatch(arr,str){
  let newarr=arr.filter(dri=>{
   return dri.startsWith(str)
  })
  return newarr
}

function matchName(arr,str){
  let newarr=arr.filter(dri=>{
   return dri.name===str
  })
  return newarr
}