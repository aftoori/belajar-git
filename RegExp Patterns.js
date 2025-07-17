Flag	Description
/d	Performs substring matches (new 2022)
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
/m	Performs multiline matching
/s	Allows . (dot) to match line terminator characters (new 2018)
/u	Enables Unicode support (new 2015)
/v	An upgrade to the /u flag for better Unicode support (new 2025)
/y	Performs a "sticky" search (new 2015)
RexExp Brackets
[]	Description
[a]	Find the character between the brackets
[^a]	Find any character different from the one between the brackets
[abc]	Find any of the characters between the brackets
[^abc]	Find any character NOT between the brackets
[A-Z]	Find any character in the range from A to Z (any letter)
[^A-Z]	Find any character NOT in the range from A to Z
[0-9]	Find any character in the range from 0 to 9 (any digit)
[^0-9]	Find any character NOT in the range from 0 to 9
(x|y)	Find any of the alternatives specified
RexExp Metacharacters
Char	Description
^	Matches from beginning of a string, or the beginning of a line if the m (multiline) flag is set
$	Matches from the end of a string, or the end of a line if the m (multiline) flag is set
.	Matches any single character, except line terminators like \n and \r
\w	Matches any word character (alphanumeric and underscore _)
\W	Matches any non-word character
\d	Matches any digit (0-9)
\D	Matches any non-digit character
\s	Matches any whitespace character like space, tab \t, and newline \n
\S	Matches any non-whitespace character
\b	Matches any match at the beginning or end of a word
\B	Matches any match, but not at the beginning or end of a word
\0	Matches any NULL character
\n	Matches any new line character
\f	Matches any form feed character
\r	Matches any carriage return character
\t	Matches any tab character
\v	Matches any vertical tab character
\xxx	Matches the character specified by an octal number xxx
\xdd	Matches the character specified by a hexadecimal number dd
\udddd	Matches the Unicode character specified by a hexadecimal number dddd
RexExp Quantifiers
Quant	Description
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n
