import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import MaterialEditorForm from './MaterialEditorForm/MaterialEditorForm';
import * as API from '../services/api.js';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  addMaterial = async (values) => {


    try {
        this.setState ({isLoading: true});
        const material = await API.addMaterial(values);
        this.setState(state => ({ materials: [...state.materials, material] ,
          isLoading: false,
        })); 
    } catch (error) {
      console.log("🚀 ~ App ~ addMaterial= ~ error:", error)      
    }

  }

  render() {
    const {isLoading} = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {isLoading && <div>Loading</div>}
        <MaterialEditorForm 
        onSubmit={this.addMaterial}/>
      </Layout>
    );
  }
}

export default App;
