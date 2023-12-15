 
function maQuote()  {
    var random = Number.parseInt(Math.random()*x.length );
    document.querySelector('#quote').textContent = `${x[random].quote}`;
    document.querySelector('#author').textContent = `${x[random].author}`;
    

    
};
 
var x = [
    {'author': ' ― Oscar Wilde', 
     'quote': ' Two things are infinite: the universe and human stupidity; and Im not sure about the universe.'
    },
    {'author': 'Marilyn Monroe', 
     'quote': 'I selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me'
    },
    {'author': '    ― William W. Purkey', 
     'quote': 'Be who you are and say what you feel, because those who mind dont matter, and those who matter don  mind'
    },
    {'author': 'Wayne Gretzy', 
     'quote': ' In three words I can sum up everything Ive learned about life: it goes on.'
    },
    {'author': '― J.K. Rowling, Harry Potter and the Goblet of Fir'
},
{'author': ' ―  ― Mahatma Gandhi', 
    'author': '― J.K. Rowling, Harry Potter and the Goblet of Fir'
},
{'author': ' ― Ralph Waldo Emerson', 
    'author': 've learned that people will forget what you said people will forget what you didbut people will never forget how you made them feel'
},
];

 


















 