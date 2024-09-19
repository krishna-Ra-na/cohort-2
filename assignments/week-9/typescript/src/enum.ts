enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function doSomething(keyPressed: Direction) {
  // do something.
}

doSomething(Direction.Up);

// *********************************************************************
enum Direction2 {
  Up = 1,
  Down, // becomes 2 by default
  Left, // becomes 3
  Right, // becomes 4
}

function doSomething2(keyPressed: Direction2) {
  // do something.
}

doSomething2(Direction2.Down);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
enum Direction3 {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function doSomething3(keyPressed: Direction3) {
  // do something.
}

doSomething3(Direction3.Down);
