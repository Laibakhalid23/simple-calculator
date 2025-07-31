function calculate(operator)
{
    // Get input values
    let n1=document.getElementById('num1').value;
    let n2=document.getElementById('num2').value;
    // Convert to numbers
    let num1=parseFloat(n1);
    let num2=parseFloat(n2);

    let result;

    if(!isNaN(num1) && !isNaN(num2))
    {
        if(operator==='+')
        {
            result=num1+num2;
        }
        else if(operator==='-')
        {
            result=num1-num2;
        }
        else if(operator==='*')
        {
            result=num1*num2;
        }
        else if(operator==='/')
        {
            if(num2 !== 0)
            {
                result=num1/num2;
            }
            else
            {
                result = 'Error: Cannot divide by 0';
            }
        }
    }
    else
    {
        result = 'Please enter both numbers!';
    }

    document.getElementById('result').innerText=`Result: ${result}`;

}