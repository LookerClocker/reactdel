var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var exampl = ['a','b','c'];

var Comments = React.createClass({
   render: function(){
       var data2 = this.props.data;
       var display = data2.map(function (item, index) {
           return (
               <div className="comment_customer" key={index}>
                   <p className='com_1'>{item}</p>
               </div>
           )
       });
       return(
         <div className="comments">
             {display}
         </div>
       );
   }
});

var News = React.createClass({
   render: function(){
       var data = this.props.data;
       var newsTemplate = data.map(function(item, index){
           return (
               <div key={index}>
                   <p className='news_author'>{item.author}</p>
                   <p className='news_text'>{item.text}</p>
               </div>
           )
       });

       return (
           <div className="news">
               {newsTemplate}
           </div>
       );
   }
});

var App = React.createClass({
   render: function(){
       return (
           <div className="app">
               Component App
               <News data={my_news}/> {/*added data attribute*/}
               <Comments data={exampl}/>
           </div>

       );
   }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);