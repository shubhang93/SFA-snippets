ass MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this._nodes = new Map();
    }
    componentDidMount() {
        this.checkNodes();
    }
    componentDidUpdate() {
        this.checkNodes();
    }
    checkNodes() {
        Array.from(this._nodes.values())
            .filter(node => node != null)
            .forEach(node => {
                // do something with node
            });
    }
    render() {
        const { values } = this.props;
        return (
             <div>
                 {values.map((value, i) => (
                     <div key={i} ref={c => this._nodes.set(i, c)}>{value}</div>
                 ))}
             </div>
        )
    }
}
