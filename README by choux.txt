Tested, It works as I intended.
Changes I made:


#about.html
github-corner had a dead link. mailto:rightvaluestest@gmail.com needed a quotation mark. added the Russian translator to the "contributor". I have not added myself. added <br>after Wikicommons to make the format consistent.

#i18n.js
"result-a-label" has "Reactionary" for both 0% and 100%. I changed the most progressive to "Revolutionary"

#index.html
Made a better language picker. In Cultural axis, changed LQBT to LGBTQ (typo?). The description for the Economic axis was incomplete. Corrected the numOfQuestions script. Now it shows how many questions there are.

#quizideologies.js
SUGGESTION(not implemented): "Centre-Right Politics" should maybe use the American spelling?)

#quizquestions.js
Are you sure that the Affirmative action question is correct? I think you mean "Affirmative action is reverse racism" or something of a similar kind, at least from the values, but I may be biased.

#quizresults.html
Using <h3> for "ideodesc-label" is not ideal. I have replaced it with <p class="ideodesc">.See css.
SUGGESTION (not implemented):
I think adding the names of each axies to both the results and the result image like LeftValues and 8values would be better. May be it's better if you copy the description of each axies [e.g. "This is Liberal vs Conservative in other words.~"]

#style.css
Added ideodesc (see quizresults.js)


#rus/about.html
github-corner had a dead link. mailto:rightvaluestest@gmail.com needed a quotation mark. I think the Russian translator has already added themself. I have not added myself. added <br>after Wikicommons to make the format consistent.
(mostly same changes as "about.html")

#rus/#i18n.js
SUGGESTION: "quiz-question-of" has not been translated.


#rus/index.html
implemented the language picker. The link to the English page did not work, so I fixed that.
Corrected the numOfQuestions script; I don't think the Russian translator implemented this though.

#rus/quizresults.html
replaced <h3> with <p class="ideodesc">

#rus/style.css
p.ideodesc{}

#ja/
I've put all my translations in here. I thought I should follow the three letter rule like "rus", but I didn't think "jap" would be appropriate.
I've also notices that Japanese characters are not be displayed cleanly, so I have replaced Roboto and Montserrat with another font called "MORI PLUS 1p". I have also changed the CSS to utilise the font, and added some spaces between elements because the default styling does not work well with Japanese; it tends to make things look more stuffy. If this is a problem, however, I am happy to change it back.

I have also added meta description to the index page, since I guessed that most Japanese who would land on this page would come through Google search.

#[no JA translation]rightvaluestest.github.io
I have deleted all reference to the Japanese translation, in case you decide not to implement it. 