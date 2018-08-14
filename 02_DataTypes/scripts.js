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

console.log(Rectangle());