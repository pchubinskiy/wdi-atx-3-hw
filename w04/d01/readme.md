## Name Input

Collect a list of student names… the only catch is, we don't know how many we'll have! Create a file called `name_input.rb` and do the following:

* Write a program that prompts:
	* **"#{n} so far. Enter a student name, or type 'done'"**, where `n` is the number of names entered so far, beginning with 0.
* Allow the user to type in a name. After they've typed the name in, save it and present the prompt again.
* When *"done"* is typed, break the loop and print:
	* **"You collected {n} student names."**
	* **"The names are: #{list_of_names}"**
	
## Bonus
* Make sure all names get shown with capital letters at the beginning, regardless of whether the user entered them that way.
* When presenting the list of names at the end, present them in alphabetical order.
* Allow the user to change the name stored at a certain index somehow.
