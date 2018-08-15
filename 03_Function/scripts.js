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

console.log(min(0, 10));
console.log(min(0, -10));

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));