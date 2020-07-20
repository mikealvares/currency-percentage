import React, {Component} from 'react'
import PMXAxios from '../../Axios'
import AdminRow from '../../components/AdminRow/AdminRow'
import Loader from '../../components/UI/Loader/Loader'
import Aux from '../../hoc/Holder'

class CurrencyAdmin extends Component{
    state = {
        data: [],
        hasLoaded: false,
        error: false,
        showMessage: false
    }

    onChangeHandler (id, event){
        event.preventDefault()
        const tempState = this.state.data
        const rowIndex = tempState.findIndex(
            (row) => row.id===id
        )
        tempState[rowIndex].charge = event.target.value
        this.setState({data: tempState})
    }

    postDataHandler = () =>{
        let data = this.state.data
        PMXAxios.post("/charge", data).then(response=>{this.setState({showMessage: true})});
    }

    componentDidMount(){
        PMXAxios.get("/read").then(
            response => {
                if(!this.state.hasLoaded){
                    this.setState({data: response.data.data, hasLoaded:true})
                }
            }
        ).catch(error=>{
            this.setState({error:true})
        })
    }
    
    render(){
        let pageData = null
        let submitBtn = null
        let hasMessage= null
        if(this.state.showMessage){
            hasMessage = <h3>Data Successfully Saved</h3>;
        }
        if(!this.state.hasLoaded){
            pageData = <Loader />
        }else{
            pageData = this.state.data.map(item=>{
                return <AdminRow 
                    key={item.id} 
                    id={item.id} 
                    title={item.currency_name} 
                    currency={item.currency_iso3}
                    pos = {item.pos} 
                    changed = {(event)=>this.onChangeHandler(item.id, event)}
                    value={item.charge}/>
            });
            submitBtn = <div className="ButtonBox"><button className="Button" onClick={this.postDataHandler}>Save</button></div>
        }
        return(
            <Aux>
                {hasMessage}
                {pageData}
                {submitBtn}
            </Aux>
        );
    }
}

export default CurrencyAdmin