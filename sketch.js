let randomNumbers = [];

function setup() {
  createCanvas(600, 400);
  background(120);

  for(let i = 0; i < 10; i++)
  {
    randomNumbers[i] = int(random(0, 100));
  }

  let highestNumber = 0;

  textSize(20);

  for(let i = 0; i < randomNumbers.length; i++)
  {
    if(highestNumber < randomNumbers[i])
    {
      highestNumber = randomNumbers[i];
    }
  }

  for(let i = 0; i < randomNumbers.length; i++)
  {
    if(randomNumbers[i] == highestNumber)
    {
      fill('red');
    }
    else 
    {
      fill('white');
    }

    text(randomNumbers[i], 20 + 40 * i, 40);
  }
}