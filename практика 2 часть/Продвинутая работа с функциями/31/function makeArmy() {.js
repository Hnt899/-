function makeArmy() {
  let shooters = [];
  
  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      alert(i);
    };
    shooters.push(shooter);
  }
  
  return shooters;
}

let army = makeArmy();
army[0](); // 0
army[1](); // 1