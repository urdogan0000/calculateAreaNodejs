function calculateArea(radius) {
  const pi = 3.14;
  
  const result = radius * radius * pi;
  console.log(result);
  return result;
}

const radius=process.argv.slice(2)[0]
calculateArea(radius);

//sample usage on console

//node odev1 10    
//odev1 is the file which includes codes
//10 is the radius which u wanna calculate