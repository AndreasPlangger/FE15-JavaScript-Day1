/*Ch. 1 | Multidimensional array
Create a multidimensional array that will output the values "Vienna is a nice city". The values should be outputted from the array diagonally (order: top-left -> bottom-right).

Vienna

               is

                     a

                          nice

                                   city
*/

myArray = [["Vienna", " ", " ", " ", " "],
[" ", "is", "", " ", ""],
[" ", " ", "a", " ", ""],
[" ", " ", "", "nice", ""],
[" ", " ", "", " ", "city"]];

document.write((myArray[0][0] + "<br><br/>" + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + myArray[1][1] + "<br><br/>" + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + myArray[2][2] + '&#8195;' + "<br><br/>" + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + myArray[3][3] + '&#8195;' + "<br><br/>" + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + '&#8195;' + myArray[4][4]));



/*Ch. 2 | String Manipulation

Structure the following sentence:
"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up".

The result should be:

"Properties, a set of immutable values, are passed to a component's renderer as properties in its  HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as properties flow down; actions flow up"
(Commas are also accepted as a division between the words.)*/

var sentence = "\"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up\"";

var newSentence = sentence.split("$").join(" ");

document.write("<br></br>");
document.write(newSentence);

