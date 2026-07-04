let CalcBMI = document.querySelector(".CalcBMI")

CalcBMI.addEventListener("click" , ()=>{
        let weight = document.querySelector(".inputWeight").value
        let height = document.querySelector(".inputHeight").value
        let BMIOutput = (weight*10000)/(height*height)

        // create a element for print the output of calculated BMI
        let BMI =document.createElement("div")
        BMI.className = "BMISHOW"

        BMI.innerText = "Your BMI is: " + BMIOutput.toFixed(2);
        let oldOutput = document.querySelector(".BMISHOW");
        if (oldOutput) oldOutput.remove();
        document.querySelector(".info").appendChild(BMI);
})

