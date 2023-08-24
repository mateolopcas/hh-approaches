/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
  if (n <= 0) return
  let stairs = ' '.repeat(n)
  for (let i = 1; i <= n; i++) {
    stairs += '*'
    stairs = stairs.slice(1)
    console.log(stairs)
  }
};

drawStairs(10)



/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {
  if (n % 2 !== 1) return undefined
  let starRow
  const middleRow = n / 2 + 0.5
  for (let i = 0; i < n; i++) {
    if (i === middleRow - 1) {
      starRow = Array(n).fill('-')
      starRow[n / 2 - 0.5] = '+'
      console.log(starRow.join(''))
    } else {
      starRow = Array(n).fill(' ')
      starRow[i] = `\\`
      starRow[n - i - 1] = `/`
      starRow[middleRow - 1] = '|'
      console.log(starRow.join(''))
    }
  }
};