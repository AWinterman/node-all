module.exports = all

function all(arr) {
  for(var i = 0, len = arr.length; i < len; ++i) {
    if(!arr[i]) {
      return false
    }
  }

  return true
}

