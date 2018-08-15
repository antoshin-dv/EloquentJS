// Найти минимальное из двух чисел
function min(x, y)
{
	return x < y ? x : y;
}

// Проверка числа на чётность
function isEven(x)
{
	if (x < 0)
		x = -x;
	
	if (!x)
		return true;
	if (x == 1)
		return false;
	
	return isEven(x - 2);
}

// Считает количество символов ch в строке
function countChar(string, ch)
{
	var result = 0;
	for (var i = 0; i < string.length; i++)
	{
		if (string[i] == ch)
			result++;
	}
	return result;
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log(countChar('BBC', 'B'));
console.log(countChar('kakkerlak', 'k'));