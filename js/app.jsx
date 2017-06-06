// ReactDOM.render(React.createElement('h1',null,'Hello'),document.getElementById('root'));


// ReactDOM.render(<h1>Hello World!</h1>,document.getElementById('root'));

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );

var books = [
    {
        img : '../img/book1.png',
        author : 'Marijn Haverbeke',
        name: '',
        description : 'Возможно, временами чтение будет разочаровывать вас. Если вы новичок в программировании, вам нужно будет много чего переварить. Много материала будет скомбинировано таким образом, что вам нужно будет установить новые связи между его частями. Вы сами должны обосновать необходимость этих усилий. Если вам тяжело продираться через книгу, не нужно думать о себе плохо. С вами всё в порядке – вам нужно просто продолжать движение. Сделайте перерыв, вернитесь назад – и всегда удостоверяйтесь, что вы прочли и поняли примеры программ. Обучение – это сложная работа, но раз вы что-то выучили, оно уже принадлежит вам, и облегчает дальнейшие шаги.',
        url : 'https://karmazzin.gitbooks.io/eloquentjavascript_ru/chapters/chapter0.html',
        pages : '38'
    },
    {
        img : '../img/book2.jpg',
        author : 'Кайл Симпсон',
        name : 'ES6 и не только',
        description : 'Даже если у вас уже есть опыт работы с JavaScript, скорее всего, язык вы в полной мере не знаете. Особое внимание в этой книге уделяется новым функциям, появившимся в Ecmascript 6 (ES6) - последней версии стандарта JavaScript. ES6 повествует о тонкостях языка, малознакомых большинству работающих на JavaScript программистов. Вооружившись этими знаниями, вы достигните подлинного мастерства; выучите новый синтаксис; научитесь корректно использовать итераторы, генераторы, модули и классы; сможете более эффективно работы с данными; познакомитесь с новыми API, например, Array, Object, Math, Number и String; расширите функционал программ с помощью мета-программирования.',
        url : 'http://www.ozon.ru/context/detail/id/137473815/',
        pages : '238'
    },
    {
        img : '../img/book3.jpg',
        author : '@HenrikJoreteg',
        name : 'JavaScript с человеческим лицом',
        description : 'Video tutorials are available at: learn.humanjavascript.com. You can read about JavaScript, the language, elsewhere. Its good parts, bad parts, and ugly parts are well documented. This is a book about a specific set of tools, patterns, and approaches that we feel are optimized for people. These approaches enable our team to quickly build and deliver high-quality JavaScript applications for humans.',
        url : 'http://read.humanjavascript.com/',
        pages : '505'
    }
];

var Library = React.createClass({
    render : function() {
        var data = this.props.arrayBooks;
        var libraryTemplates;
        if (data.length >0) {
            libraryTemplates = data.map(function(item, index) {
                return (
                    <div className="infoBook" key={index}>
                        <img src={item.img} alt=""/>
                        <p><span className="subtitle">Автор: </span> {item.name} </p>
                        <p><span className="subtitle">Автор: </span> {item.author} </p>
                        <p><span className="subtitle">Краткое описание: </span>{item.description}</p>
                        <a href={item.url}>Ссылка на книгу</a>
                        <p><span className="subtitle">Кол-во станиц: </span>{item.pages}</p>
                    </div>
                )
            })
        } else {
            libraryTemplates = <p className="subtitle">В библиотеке нет ни одной книги</p>;
        }
        return (
            <div>
                {libraryTemplates}
                <p className={(data.length > 0) ? 'infoBook subtitle':'hide'}>Количество книг в библиотеке: {data.length}</p>
            </div>
        )
    }
});

ReactDOM.render(<Library arrayBooks={books}/>,document.getElementById('libr'));

// var News = React.createClass({
//     render: function () {
//         var data = this.props.data;
//         var newsTemplate;
//         if (data.length > 0) {
//             newsTemplate = data.map(function (item, index) {
//                 return (<div className="class1" key={index}>
//                     <p className="news_author">{item.author}:</p>
//                     <p className="news_text">{item.text}</p>
//                 </div>)
//             })
//         } else {
//             newsTemplate = <p>Новостей нет</p>;
//
//         }
//
//             return (
//                 <div className="news">
//                     {newsTemplate}
//                     <p>Новостей: {data.length}</p>
//                 </div>
//             )
//
//     }
//
// });
// var Comments = React.createClass({
//     render : function () {
//         return (<div>Комментарий</div>);
//     }
// });
// var Apps = React.createClass({
//     render : function () {
//         return (
//             <div>
//                 <News data={info}/>
//                 <Comments/>
//             </div>);
//     }
// });
//
// ReactDOM.render(<Apps/>,document.getElementById('root'));