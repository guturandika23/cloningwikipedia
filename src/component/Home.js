
import React, { Component } from 'react';
import * as Mui from '@material-ui/core';


class Home extends Component{
    render(){
        return(
            <div>
                       <Mui.Container fixed style={{ fontFamily:'Times-new-roman'}}>
                       
                       <Mui.Grid container spacing={1}>
                               <Mui.Grid item xs={10} sm={2}>
                               <Mui.Paper><br/>
                        <img src="/wiki.jpg" width="170"/>
                        <p>
                         <a href="/">main page</a><br/>
                         <a href="/">Contents</a><br/>
                         <a href="/">Current events</a><br/>
                         <a href="/">Random article</a><br/>
                          <a href="/">About Wikipedia</a><br/>
                          <a href="/">Contact us</a><br/> 
                          <a href="/">Donate</a><br/>
                          <br/>
                          Contribute<hr/> 
                          <a href="/"> Help</a><br/>
                          <a href="/">Learn to edit</a><br/>
                          <a href="/">Community portal</a><br/> 
                          <a href="/">Recent changes</a><br/> 
                          <a href="/">Upload file</a><br/>
                          <br/>
                          Tools<hr/> 
                          <a href="/">What links here</a><br/>
                          <a href="/">Related changes</a><br/>
                          <a href="/">Special pages</a><br/>
                          <a href="/">Permanent link</a><br/>
                          <a href="/">Page information</a><br/>
                          <a href="/">Cite this page</a><br/>
                          <a href="/">Wikidata item</a><br/>
                          <br/>
                          Print/Export <hr/>
                          <a href="/">Download as PDF</a><br/>
                          <a href="/">Printable version</a><br/>    
                          <br/>
                          Languages <hr/> 
                          <a href="/">العربية</a><br/>                                                                                                                                                                                        
                          <a href="/">Deutsch</a><br/>
                          <a href="/">Español</a><br/>
                          <a href="/">Français</a><br/>
                          <a href="/">हिन्दी</a><br/>
                          <a href="/">日本語</a><br/>
                          <a href="/">Português</a><br/> 
                          <a href="/">Русский</a><br/>
                          <a href="/">中文</a><br/>
                        </p>
                        </Mui.Paper> 
                       </Mui.Grid>
                       <Mui.Grid item xs={12} sm={10}>
                       <p style={{textAlign:'right'}}><a>Not logged in</a>&nbsp;&nbsp;&nbsp;<a href="/">Talk</a>&nbsp;&nbsp;&nbsp;<a href="/">Contributions</a>&nbsp;&nbsp;&nbsp;<a href="/">Create account</a>&nbsp;&nbsp;&nbsp;<a href="/">Log In</a>&nbsp;</p>

                       <h1>React (web framework)</h1>
                       <hr/>
                       <p align="justify">From Wikipedia, the free encyclopedia</p>

                       
                       <br/>
                       <p>React (also known as React.js or ReactJS) is an <a href="/">open-source, front end, JavaScript library[3]</a> for building <a href="/">user interfaces</a> or UI components. It is maintained by <a href="/">Facebook</a> and a community of individual developers and companies.<a href="/">[4][5][6]</a> React can be used as a base in the development of <a href="/">single-page</a> or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for <a href="/">state management</a> and routing.<a href="/">[7][8] Redux[9]</a> and React Router<a href="/">[10]</a> are respective examples of such libraries. </p>
                       <Mui.Card variant="outlined"  style={{width:275}}>
      <Mui.CardContent>
        <Mui.Typography  gutterBottom style={{fontWeight:"700"}}>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a align="center">contents <a href="/">[hide]</a></a>
        </Mui.Typography>
        <Mui.Typography variant="p" component="p">
          1.<a href="/"> Basic Usage</a>
          <br/>
          2.<a href="/"> Notable features</a>
          <br/>
          &nbsp;&nbsp;&nbsp;2.1 <a href="/">Components</a>
            <br/>
            &nbsp;&nbsp;&nbsp;2.2 <a href="/">Functional components</a>
            <br/>
            &nbsp;&nbsp;&nbsp;2.3 <a href="/">Class-based components</a><br/>
            &nbsp;&nbsp;&nbsp;2.4 <a href="/">Virtual DOM</a><br/>
            &nbsp;&nbsp;&nbsp;2.5 <a href="/">Lifecycle methods</a><br/>
            &nbsp;&nbsp;&nbsp;2.6 <a href="/">JSX</a><br/>
            &nbsp;&nbsp;&nbsp;2.7 <a href="/">Architecture beyond HTML</a><br/>
            &nbsp;&nbsp;&nbsp;2.8 <a href="/">React hooks</a><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="/">Rules of hooks</a><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="/">Custom hooks</a><br/>
            3. <a href="/">Common idioms</a><br/>
            &nbsp;&nbsp;  &nbsp;3.1 <a href="/">Use of the Flux architecture</a><br/>
            4. <a href="/">Future development</a><br/>
            5. <a href="/">History</a><br/>
            6. <a href="/">Licensing</a><br/>
            7. <a href="/">See also</a><br/>
            8. <a href="/">References</a><br/>
            9. <a href="/">External links</a><br/> 
          </Mui.Typography>
         
    
      </Mui.CardContent>
      <Mui.CardActions>
        <Mui.Button size="small"></Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
    <br/><h4>Basic Usage&nbsp;<a href="/">[ edit ]</a></h4><hr/>
                                <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                            <Mui.Card variant="outlined"  style={{width:600}}>
                                <Mui.CardContent>
                                    <Mui.Typography  gutterBottom>
                                    <p>
                                        1.&lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                                        2.<br/>
                                        3.&lt;script type="text/babel"&gt;<br/>
                                        4.&nbsp;&nbsp;function Greeter(props) &#123;<br/>
                                        5.&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123;props.greeting&#125;&lt;/h1&gt;<br/>
                                        6.&nbsp;&#125;<br/>
                                        7.&nbsp; var App = &lt;Greeter greeting="Hello World!" /&gt;;<br/>
                                        8.&nbsp;ReactDOM.render(App, document.getElementById('myReactApp'));<br/>
                                        9.&lt;/script&gt;
                                    </p>
                                    
                                    </Mui.Typography>
                                </Mui.CardContent>
                            </Mui.Card>
                            <p>The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp. </p>
                            <p>When displayed in a web browser the result will be </p><br/>
                        <Mui.Card variant="outlined"  style={{width:600}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>&lt;div id="myReactApp"&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br/>&lt;/div&gt;</p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                           </Mui.Grid>
                       </Mui.Grid>
                    </Mui.Container>
                </div>
        )
    }
}

export default Home;