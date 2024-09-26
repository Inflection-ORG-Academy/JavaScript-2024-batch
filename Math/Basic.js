function generateRanNum() {
  // Taking User Input From Propt
  const yourName = prompt('Enter your Name');
  const frName = prompt('Enter your Friend Name');

  //   Checking Both Fields or filled up
  if (!yourName || !frName) {
    alert('Please Input your name and your friend name');
    return;
  }

  //   Generating Random Number between 0 - 10
  const rnum = Math.random() * 100;
  if (rnum > 50) {
    alert(
      Math.ceil(rnum) +
        '% ' +
        yourName +
        ' and ' +
        frName +
        ' are Best Friend💑♥'
    );
    console.log(
      Math.ceil(rnum) +
        '% ' +
        yourName +
        ' and ' +
        frName +
        ' are Best Friend💑♥'
    );
  } else {
    alert(
      Math.ceil(rnum) +
        '% ' +
        yourName +
        ' and ' +
        frName +
        ' are Only Friend🤦‍♂️😢'
    );

    console.log(
      Math.ceil(rnum) +
        '% ' +
        yourName +
        ' and ' +
        frName +
        ' are Only Friend🤦‍♂️😢'
    );
  }
}
