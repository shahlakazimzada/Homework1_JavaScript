function anagrams(stringA, stringB)
{
    const newString = (str)=>
    {
        return str
        .replace(/[^\w]/g, '') 
        .toLowerCase()         
        .split('')            
        .sort()               
        .join('');             
    };

    return newString(stringA) === newString(stringB);

}
module.exports=anagrams;
