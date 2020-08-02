import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  render() {
    return (
      <div class="">
      
      <ul class="nav nav-pills bg-primary px-2">
        <li class="nav-item">
      <span style={{'display':'block !important','font-size':'30px','cursor':'pointer'}} onClick={this.openNav}>&#9776;</span></li>
      <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      
      
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
    </li>
  </ul>
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br/>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="container tab-pane fade"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
  
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>


</div>
    )
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="lead">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}



ReactDOM.render(
  <Main title="React + Bootstrap" text="It is better to have enough ideas for some of them to be wrong than to always be right by having no ideas at all. -Edward de Bono"></Main>,
  document.getElementById('react-app')
);