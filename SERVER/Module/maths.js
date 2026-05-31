function sum(a,b)
{
    return a+b;
}
function divide(a,b)
{
    return a/b;
}
function iseven(no)
{
    if(no%2===0)
        return true;
    else
        return false;
}

module.exports = {add:sum,p:divide,even:iseven}