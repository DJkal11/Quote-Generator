
import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      quote:'',
      author:''
     
    };
   
  }

  

  setBackgroundColour = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }



  componentDidMount() {
this.getQuote()
  }

  getQuote(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
console.log(url);
    axios.get(url).then(res =>{
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteNum];

      this.setState({
        quote: randomQuote['quote'],
        author: randomQuote['author']
      });
  })
}

  getNewQuote = () =>{
    this.getQuote();
    this.setBackgroundColour();
  }
   
  render(){

    const quote = this.state.quote;
    const author = this.state.author;
  return (
    <div id= "quote-box" className="App">
     
   <div id="text"><h3><b>"</b> {quote} <b>"</b></h3></div>
   <div id="author"><h3>{author}</h3></div>
               

   <button id="new-quote" type="button" onClick={this.getNewQuote}><span>Next Quote</span></button>

    </div>
  );
  }
}

export default App;
