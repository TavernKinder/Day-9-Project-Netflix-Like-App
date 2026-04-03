Project Title: Movie Explorer App

Description:
This is A Netflix like app that allows you to look up diffrent movies using the search function.

Features:
The Search Function alows you too look up the 10 most popular movies by name
The Status message allows you to see wheather any errors occour
The Movies are Displayed on their own cards that show The name of the movie, the poster for the movie, and the year it was released.

Reflection
Why is data fetching placed inside a custom hook?
For reusability and cleaner code

What does your useEffect depend on?
My use effect depends on The users inputed searchterm and the API it calls from

How did you handle loading and error states?
I handled error states by Calling errors recieved from the APi, with a catch handling if nothings recieved. Then I ran them into my Status message Component, with 2 extra status messages for the edgecases of an empty search term, and a lack of movies.

What part of the app was most difficult?
Probrably the hook and properly using it

What would you improve next?
I would try to make the app more efficient and possibly lighter without sacraficing core features
