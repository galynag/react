
var Btn = React.createClass({
    render : function() {
         return (
                    <div>
                        <div className="waves-effect waves-light btn">Home</div>
                        <div className="waves-effect waves-light btn">Books</div>
                        <div className="waves-effect waves-light btn">Contacts</div>
                        <input type="search" placeholder="Search" />
                        <a id="menu" className="waves-effect waves-light btn btn-floating" onclick="$('.tap-target').tapTarget('open')"><i className="material-icons">menu</i></a>
                        <div className="tap-target" data-activates="menu">
                            <div className="tap-target-content">
                                <h5>Title</h5>
                                <p>A bunch of text</p>
                            </div>
                        </div>
                    </div>
         )

    }
})

var Container1 = React.createClass({
    render: function() {
        return (
            <div>
                <Btn />

            </div>
        )
    }
})

ReactDOM.render(
    <Container1/>,
    document.getElementById('wrapper')
);
