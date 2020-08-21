import React from 'react';
import './App.css';
import Header from "./components/header";
import Banner from "./components/banner";
import Arrivals from "./components/arrivals";
import Brands from "./components/brands";
import Showcase from "./components/showcase";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";


class App extends React.Component {

    state = {
        category: "",
    }

    changeCategory = (e) => {
       let cat = e.currentTarget.id
        this.setState({
            category: cat
        },() => {console.log(this.state)})
    }

    render() {
        return (
            <div className="main">
                <Header/>
                <Banner/>
                <Arrivals/>
                <Brands/>
                <Showcase changeCategory={this.changeCategory}
                          category={this.state.category}/>
                <Newsletter/>
                <Footer/>
                <div className="copyright">
                    © Copyright 2017. Big Shop by Victor Themes
                </div>
            </div>
        );
    }
}

export default App;
