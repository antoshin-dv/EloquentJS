// Функция выводит треугольник из символов character высотой height
function Rectangle(character = '#', height = 7)
{
	var result = '';
	for (var i = 0; i < height; i++)
	{
		var str = '';
		for (var j = 0; j <= i; j++)
			str += character;
		
		result += str;
		result += '\n';
	}		
	
	return result;
}

function FizzBuzz(count = 100)
{
	var result = '';
	for (var i = 1; i <= count; i++)
	{
		var fizzOrBuzz = false;
		
		if (i % 3 == 0)
		{
			result += 'Fizz';
			fizzOrBuzz = true;
		}
		if (i % 5 == 0)
		{
			result += 'Buzz';
			fizzOrBuzz = true;
		}
		
		if (!fizzOrBuzz)
			result += i;
		result += ' ';
	}
	return result;
}

console.log(Rectangle());
console.log(FizzBuzz());