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
        name: 'Выразительный  JavaScript',
        description : 'Возможно, временами чтение будет разочаровывать вас. Если вы новичок в программировании, вам нужно будет много чего переварить. Много материала будет скомбинировано таким образом, что вам нужно будет установить новые связи между его частями. Вы сами должны обосновать необходимость этих усилий. Если вам тяжело продираться через книгу, не нужно думать о себе плохо. С вами всё в порядке – вам нужно просто продолжать движение. Сделайте перерыв, вернитесь назад – и всегда удостоверяйтесь, что вы прочли и поняли примеры программ. Обучение – это сложная работа, но раз вы что-то выучили, оно уже принадлежит вам, и облегчает дальнейшие шаги.',
        url : 'https://karmazzin.gitbooks.io/eloquentjavascript_ru/chapters/chapter0.html',
        pages : 38
    },
    {
        img : '../img/book2.jpg',
        author : 'Кайл Симпсон',
        name : 'ES6 и не только',
        description : 'Даже если у вас уже есть опыт работы с JavaScript, скорее всего, язык вы в полной мере не знаете. Особое внимание в этой книге уделяется новым функциям, появившимся в Ecmascript 6 (ES6) - последней версии стандарта JavaScript. ES6 повествует о тонкостях языка, малознакомых большинству работающих на JavaScript программистов. Вооружившись этими знаниями, вы достигните подлинного мастерства; выучите новый синтаксис; научитесь корректно использовать итераторы, генераторы, модули и классы; сможете более эффективно работы с данными; познакомитесь с новыми API, например, Array, Object, Math, Number и String; расширите функционал программ с помощью мета-программирования.',
        url : 'http://www.ozon.ru/context/detail/id/137473815/',
        pages : 238
    },
    {
        img : '../img/book3.jpg',
        author : '@HenrikJoreteg',
        name : 'JavaScript с человеческим лицом',
        description : 'Video tutorials are available at: learn.humanjavascript.com. You can read about JavaScript, the language, elsewhere. Its good parts, bad parts, and ugly parts are well documented. This is a book about a specific set of tools, patterns, and approaches that we feel are optimized for people. These approaches enable our team to quickly build and deliver high-quality JavaScript applications for humans.',
        url : 'http://read.humanjavascript.com/',
        pages : 505
    }
];
var Element = React.createClass({
    propTypes: {
        dataElement: React.PropTypes.shape({
            img: React.PropTypes.string.isRequired,
            author: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            pages: React.PropTypes.number.isRequired
            })
    },
    getInitialState: function() {
        return {
            visible: false
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    hideClick: function(e) {
        e.preventDefault();
        this.setState({visible: false});
    },
    render: function() {
        var author = this.props.dataElement.author,
            img = this.props.dataElement.img,
            name = this.props.dataElement.name,
            description = this.props.dataElement.description,
            url = this.props.dataElement.url,
            pages = this.props.dataElement.pages,
            visibleM = this.state.visible;
        // console.log(this.setState);
        return (
            <div>
                <img src={img} alt=""/>
                <p><span className="subtitle">Название: </span> {name} </p>
                <p><span className="subtitle">Автор: </span> {author} </p>
                <button
                       onClick={this.readmoreClick}
                       className={'more ' + (visibleM ? 'none': '')}
                    >
                        Посмотреть описание
                    </button>
                <p className={'descr_readmore ' + (visibleM ? '' : 'none')}><span className="subtitle">Описание: </span>{description}</p>
                <button
                    onClick={this.hideClick}
                    className={'more ' + (visibleM ? '' : 'none')}
                >
                    Скрыть описание
                </button>
                <div>
                    <a href={url}>Ссылка на книгу</a>
                </div>
                <p><span className="subtitle">Кол-во станиц: </span>{pages}</p>
            </div>
        )
    }


});

var Library = React.createClass({
    propTypes: {
        arrayBooks: React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counterPages: 0
        };
    },

    counterClick: function(e) {
        e.preventDefault();
        this.setState({counterPages : ++this.state.counterPages});
        console.log(this.state.counterPages);

    },

    render : function() {
        var data = this.props.arrayBooks;
        var libraryTemplates;
        if (data.length >0) {
            libraryTemplates = data.map(function(item, index) {
                return (
                    <div className="infoBook" key={index}>
                        <Element dataElement={item}/>
                    </div>
                )
            })
        } else {
            libraryTemplates = <p className="subtitle">В библиотеке нет ни одной книги</p>
        }
        return (
            <div>
                {libraryTemplates}
                <p
                    onClick={this.counterClick}
                    className={(data.length > 0) ? 'infoBook subtitle':'hide'}
                >
                    Количество книг в библиотеке: {data.length}
                </p>
            </div>
        )
    }
});

ReactDOM.render(
    <Library arrayBooks={books}/>,
    document.getElementById('libr')
);

