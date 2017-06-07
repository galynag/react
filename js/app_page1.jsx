var btnMass={
    '1':'Home',
    '2':'Books',
    '3':'Contacts'
};
var Btn = React.createClass({
    render : function() {
        var dataM = this.props.dataMass;
        var libraryTemplates;
        if (dataM.length >0) {
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
})

var Container1 = React.createClass({
    render: function() {
        return (
            <div>
                <Btn dataMass={btnMass}/>
                <BtnFooter />
            </div>
        )
    }
})

ReactDOM.render(
    <Container1/>,
    document.getElementById('wrapper')
);
