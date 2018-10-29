const returnLittleObject = () => {
    let obj = {
        name: 'Konrad',
        surname: 'Konradowski'
    };
    console.log(obj.name);
};

returnLittleObject();

const returnDate = () => {
  return console.log(new Date());
};

returnDate();