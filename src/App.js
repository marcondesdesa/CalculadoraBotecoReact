import React from 'react';
import './App.css';


//Thiago Marcondes de Sá - 3391829168 
export default class App extends React.Component
{
    constructor(){
        super();     
        this.state = {
                      valorconta: 0,
                      qtdepessoas:1,
                      percgorjeta:0,
                      valgorjeta:0,
                      valporpessoa:0,
                      valorpagar:0
                    }   
    } 

    calcular = () =>{

      if ((this.state.valorconta>0) && (this.state.qtdepessoas>0) && (this.state.percgorjeta>0)) {
        const vgorgeta =  ((parseFloat(this.state.valorconta)) * ((parseFloat(this.state.percgorjeta))/100));
        const vpagar =   (parseFloat(this.state.valorconta) + parseFloat(vgorgeta)); 
        const vporpessoa =   (parseFloat(vpagar)/parseFloat(this.state.qtdepessoas));
        this.setState({
                        valgorjeta:vgorgeta,
                        valporpessoa:vporpessoa,
                        valorpagar:vpagar   
                             
                      });
      }
    }

    zerar = () =>{
      this.setState({
                      valorconta: 0,
                      qtdepessoas:1,
                      percgorjeta:0,
                      valgorjeta:0,
                      valporpessoa:0,
                      valorpagar:0            
                    });
    }


    render(){
        let html = 
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Calculadora de Boteco</h1>
          </div>
        
          <div>
            <p>Valor da Conta (R$): 
              <input type="number" value={this.state.valorconta} 
              onChange={(event) => this.setState({valorconta:event.target.value})}/>
            </p>
          </div>

          <div>
            <p>
              Quantidade de Pessoas na Mesa:
              <input type="number" value={this.state.qtdepessoas} 
              onChange={(event) => this.setState({qtdepessoas:event.target.value})}/>
            </p>       
          </div>

          <div>
            <p>
              Percentual de Gorjeta:
              <input type="number" value={this.state.percgorjeta} 
              onChange={(event) => this.setState({percgorjeta:event.target.value})}/>
            </p>
          </div>
          <div>
            <input type="button" value="Calcular" onClick={this.calcular} />
            <input type="button" value="Zerar" onClick={this.zerar} />
          </div>
          <br></br>
          <div>
            <h2>Fechamento da Conta</h2>
          </div>

          <div>
            <p>Gorjeta (R$): {this.state.valgorjeta} </p>
          </div>
          <div>
            <p>Total a Pagar (R$): {this.state.valorpagar}</p>
          </div>
          <div>   
            <p>Total a Pagar por Pessoa (R$): {this.state.valporpessoa}</p>
          </div>
        </form>   
      return (html);        
    }

  }














