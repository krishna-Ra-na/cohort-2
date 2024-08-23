let count = 0;

function Increment() {
  count++;
  console.log(count);
}

// inc the counter every 1 sec
setInterval(Increment, 1000);
