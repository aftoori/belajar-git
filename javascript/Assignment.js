Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Shift Assignment Operators
Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
Bitwise Assignment Operators
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
Logical Assignment Operators
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)
Note
The Logical assignment operators are ES2020.

The = Operator
The Simple Assignment Operator assigns a value to a variable.

Simple Assignment Examples
let x = 10;
let x = 10 + y;
The += Operator
The Addition Assignment Operator adds a value to a variable.

Addition Assignment Examples
let x = 10;
x += 5;
let text = "Hello"; text += " World";
The -= Operator
The Subtraction Assignment Operator subtracts a value from a variable.

Subtraction Assignment Example
let x = 10;
x -= 5;
The *= Operator
The Multiplication Assignment Operator multiplies a variable.

Multiplication Assignment Example
let x = 10;
x *= 5;
The **= Operator
The Exponentiation Assignment Operator raises a variable to the power of the operand.

Exponentiation Assignment Example
let x = 10;
x **= 5;
The /= Operator
The Division Assignment Operator divides a variable.

Division Assignment Example
let x = 10;
x /= 5;
The %= Operator
The Remainder Assignment Operator assigns a remainder to a variable.

Remainder Assignment Example
let x = 10;
x %= 5;
ADVERTISEMENT

The <<= Operator
The Left Shift Assignment Operator left shifts a variable.

Left Shift Assignment Example
let x = -100;
x <<= 5;
The >>= Operator
The Right Shift Assignment Operator right shifts a variable (signed).

Right Shift Assignment Example
let x = -100;
x >>= 5;
The >>>= Operator
The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).

Unsigned Right Shift Assignment Example
let x = -100;
x >>>= 5;
The &= Operator
The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.

Bitwise AND Assignment Example
let x = 10;
x &= 5;
The |= Operator
The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.

Bitwise OR Assignment Example
let x = 10;
x |= 5;
The ^= Operator
The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

Bitwise XOR Assignment Example
let x = 10;
x ^= 5;
The &&= Operator
The Logical AND assignment operator is used between two values.

If the first value is true, the second value is assigned.

Logical AND Assignment Example
let x = 10;
x &&= 5;
The &&= operator is an ES2020 feature.

The ||= Operator
The Logical OR assignment operator is used between two values.

If the first value is false, the second value is assigned.

Logical OR Assignment Example
let x = 10;
x ||= 5;
The ||= operator is an ES2020 feature.

The ??= Operator
The Nullish coalescing assignment operator is used between two values.

If the first value is undefined or null, the second value is assigned.

Nullish Coalescing Assignment Example
let x;
x ??= 5;
The ??= operator is an ES2020 feature.

Exercise
?
Consider the following code:
let x = 5;
x += 10;
What will be the result of x?


5
1