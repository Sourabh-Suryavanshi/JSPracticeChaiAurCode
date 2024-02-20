const form = document.querySelector('form');


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let bmi;
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector("#results")

  if(height === ''||height < 0 ||isNaN(height)){
    results.innerHTML(`Please enter valid height ${height}`)
  }
  else if(weight === ''||weight < 0 ||isNaN(weight)){
    results.innerHTML(`Please enter valid weight ${weight}`)
  }
  else{
    bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
  const conclusion = document.querySelector('#conclusion');

  switch (true) {
    case (bmi < 18.6):
        conclusion.innerHTML = "Result : You are Under Weight"
        break;
    case (bmi >= 18.6 && bmi <= 24.9):
        conclusion.innerHTML = "Result : You are Fit"
        break;
    default:
        conclusion.innerHTML = "Result : You are Over Weight"
        break;
  }
})