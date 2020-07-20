import React, {Component} from 'react'
import PMXAxios from '../../Axios'
import Table from '../../components/Table/Table'
import Loader from '../../components/UI/Loader/Loader';
import Aux from '../../hoc/Holder'

class CurrencyDisplay extends Component{
    HEADING = [
        {id:1, title:'Master Card', size:8, align:'left',},
        {id:2, title:'Debit Card',size:4,align:'center'}
    ]
    state = {
        data: [],
        udt:'',
        hasLoaded: false,
        error: false
    }
    componentDidMount(){
        PMXAxios.get("/read").then(
            response => {
                if(!this.state.hasLoaded){
                    const tempArr = response.data.data.map(record=>{
                        return [{
                            id: `${record.id}1`,
                            size: 8, 
                            title: `${record.currency_name} (${record.currency_iso3})`,
                            align: 'left'
                        },{
                            id: `${record.id}2`,
                            size: 4, 
                            title: `${record.charge}%`,
                            align: 'center'
                        },
                        ]
                    })
                    this.setState({data: tempArr, hasLoaded:true, udt:response.data.date})
                }
            }
        ).catch(error=>{
            this.setState({error:true})
        })
    }
    render (){
        let pageData = null
        if(!this.state.hasLoaded){
            pageData = <Loader />
        }else{
            pageData = <Table udt={this.state.udt} data={this.state.data} head={this.HEADING}/>
        }
        return(
            <Aux>
                {pageData}
            </Aux>
        );
    }
}

export default CurrencyDisplay