// Implement a bill calculator

// Each bill is an object that has prices and taxRate
// { prices: [5, 15, 33], taxRate: 1.13}
// a bill subtotal is (sum of prices) * taxRate

//should have a getSubTotal function

// should have a calcTips function that
// if a bill is less than 30, return 0
// if a bill is greater than or equal to 30 and less than 300,return bill subTotal * 0.1
// if a bill is greater than or equal to 300, return subTotal * 0.25;

// The bill calculator should take an array of bills as input and return the array of total(billSubtotal + tip);
// The bill calculator function should be named as `billCalculator`

// input
const bills = [
    { prices: [5, 15, 33], taxRate: 1.13 },
    { prices: [3], taxRate: 1.15 },
    { prices: [150, 77, 68], taxRate: 1.05 },
  ];
function calcTips(subtotal)
{
    if(subtotal<=30)
    {
        return 0;
    }
    else if (subtotal>30 && subtotal<=300)
    {
        return subtotal*0.1;
    }
    else if(subtotal>300)
    {
        return subtotal*0.25;
    }
}
function getSubTotal(bills)
{
    const total=new Array();
    var totalAndTip;
    for (let i=0; i<bills.length; i++)
    {
        var sum=0;
        for (let j=0; j<bills[i].prices.length; j++)
        {
            sum+=bills[i].prices[j]
        }
        totalAndTip=sum*bills[i].taxRate+calcTips(sum*bills[i].taxRate);
        total.push(Math.round(totalAndTip));
    }
    return total;
}
 console.log(getSubTotal(bills));
