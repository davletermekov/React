class Comp1 extends React.Component{
	constructor(props){
		super(props);
		this.state = { studlist: [] }
	}

				componentDidMount(){
					fetch('/getlist')
			       .then(res =>res.json())
			       .then(json => this.setState({studlist: json}));
				}

			render(){
				return(<div className="div1">

 					<h1>Начнем работать с Реактом</h1>
 					{this.state.studlist.map(item => 
 							<div key = {item.id_stud} id = {item.id_stud}>
 								<p>{item.fam} {item.name}</p>
 							</div>
 						)}
 					<p>Первая работа</p>
					</div>)
			}
	}

	    class Comp2 extends React.Component{
	    	render(){
	    		return (<div className="div2">
	    				<h4>Второй компонент страницы</h4>
	    				<p><e>Hello React {59 + 52}</e></p>
	    			</div>)
	    	}
	    }

	    ReactDOM.render(
	    	<div className="maincomp"><Comp1 /> <Comp2 /></div>,
	    	document.getElementById("app")
	    	)