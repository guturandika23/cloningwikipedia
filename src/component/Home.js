import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import { NavigateBeforeSharp } from '@material-ui/icons';


class Home extends Component{
    render(){
        return(
            <div>
                       <Mui.Container fixed style={{ fontFamily:'Times-new-roman'}}>
                       
                       <Mui.Grid container spacing={1}>
                               <Mui.Grid item xs={10} sm={2}>
                               <Mui.Paper><br/>
                        <img src="/wiki.jpg" width="160"/>
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
         <p><b>Bassic Usage</b><a href="/">[edit]</a></p><hr></hr>
         <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>


         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                         1. &lt;div id="myReactApp"&gt;&lt;/div&gt;
                         <br></br>
                         2. 
                         <br></br>
                         3. &lt;script type="text/babel"&gt;&lt;/script&gt;
                         <br/>
                         4.&lt;function Greeter(props)&gt;
                         <br/>
                         5. &lt;return&gt;&lt;h1&gt;&#123;props.greeting&#125;&lt;/h1&gt;
                         <br/>
                         6.
                         <br/>
                         7.var App =&lt;Greeter greeting="Hello World!"/&gt;;
                         <br/>
                         8. ReactDOM.render(App, document.getElementById('myReactApp'));
                         <br/>
                         9.&lt;/script&gt;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
</Mui.Card> 
         <hr/>
         <p>The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.</p>
         <p>When displayed in a web browser the result will be </p><br/>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>


         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                         &lt;div id="myReactApp"&gt;
                         <br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&lt;Hello World!&gt;&lt;/h1&gt;
                         <br/>
                         &lt;/div&gt;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card> 
         <br/>
         <p><b>Notable features</b>&nbsp;<a href="/">[edit]</a></p><hr/>
         <p><b>Components</b>&nbsp;<a href="/">[edit]</a></p>
         <p>React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props"<sup><a href="/">[11]</a></sup>: </p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>


         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt;, document.getElementById('myReactApp'));
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card> 
         <br/>
         <p>The two primary ways of declaring components in React is via functional components and class-based components.</p>
         <br/>
         <p><b>Functional components</b>&nbsp;<a href="/">[edit]</a></p>
         <p>Functional components are declared with a function that then returns some JSX.</p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>
         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             const Greeting = (props) =&gt; &lt;div&gt;Hello, &#123;props.name&#125;!&lt;/div&gt;;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card> 
         <br/>
         <p><b>Class-based components</b>&nbsp;<a href="/">[edit]</a></p>
         <p>Class-based components are declared using <a href="/">ES6</a> classes.</p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>


         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             class ParentComponent extends React.Component &#123;<br/>
                              state = &#123; color: 'green' &#125;;<br/>
                                render() &#123;<br/>
                                return (<br/>&lt;ChildComponent color=&#123;this.state.color&#125; /&gt;<br/>
                                &nbsp;&nbsp;&nbsp;);<br/>
                            &nbsp;&nbsp;&#125;<br/>  
                        &nbsp;&#125;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
                </Mui.CardActions>
                <p><b>Virtual DOM</b>&nbsp;<a href="/">[edit]</a></p>
                <p>Another notable feature is the use of a virtual <a href="/">Document Object Model</a>, or virtual DOM. React creates an <a href="/">in-memory</a> data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.<sup><a href="/">[12]</a></sup>. This process is called reconciliation. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page. </p>
                <p><b>Lifecycle methods</b>&nbsp;<a href="/">[edit]</a></p>
                <p>Lifecycle methods use a form of hooking that allows the execution of code at set points during a component's lifetime.</p>
                <ul>
                    <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                    <li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.</li>
                    <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)</li>
                    <li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                </ul><br/>
                <p><b>JSX</b>&nbsp;<a href="/">[edit]</a></p>
                <p>JSX, or JavaScript <a href="/">XML</a>, is an extension to the JavaScript language syntax.<sup><a href="/">[13]</a></sup> Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for <a href="/">PHP</a>called <a href="/">XHP</a>.</p>
                An example of JSX code:
                <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>
         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             1.class App extends React.Component &#123;<br/>
                             2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br/>
                             3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    return (<br/>
                             4. &nbsp;     &lt;div&gt;<br/>
                             5. &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     &lt;p&gt;Header&lt;/p&gt;<br/>
                             6.  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &lt;p&gt;Content&lt;/p&gt;<br/>
                             7.    &nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;    &lt;p&gt;Footer&lt;/p&gt;<br/>
                             8.     &nbsp;     &lt;/div&gt;<br/>
                             9.        &nbsp; );<br/>
                             10.    &nbsp;  &#125;<br/>
                             11. &nbsp;  &#125;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card>
         <p><b>Nested elements&nbsp;<a href="/"></a></b></p>
         <p>Multiple elements on the same level need to be wrapped in a single React element such as the &lt;div&gt; element shown above, a fragment delineated by &lt;Fragment&gt; or in its shorthand form &lt;&gt;, or returned as an array.<sup><a href="/">[14][15]</a></sup></p><br/>
         <p><b>Attributes</b></p> 
         <p>JSX provides a range of element attributes designed to mirror those provided by HTML. Custom attributes can also be passed to the component.<sup><a href="/">[16]</a></sup> All attributes will be received by the component as props. </p>
         <p><b>JavaScript expressions</b></p>
         <p>JavaScript <a href="/">expressions</a> (but not <a href="/">statements</a>) can be used inside JSX with curly brackets &#123;&#125;: </p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>
         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             &lt;h&gt;&#123;110+1&#125;&lt;/h1&gt;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card> 
         <p>The example above will render </p>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>
         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             &lt;h&gt;11&lt;/h1&gt;
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card> 
         <p><b>Conditional statements</b></p>
         <p><a href="/">If–else statements</a> cannot be used inside JSX but conditional expressions can be used instead. The example below will render &#123; i === 1 ? 'true' : 'false' &#125; as the string 'true' because i is equal to 1. </p><br/>
         <Mui.Card variant="outlined"  style={{width:1020}}>
         <Mui.Typography  gutterBottom style={{fontWeight:"500"}}>
         </Mui.Typography>
                         <Mui.CardContent>
                         <Mui.Typography variant="p" component="p">
                             <p>
                             1.class App extends React.Component &#123;<br/>
                             2.&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br/>
                             3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const i = 1;<br/>
                             4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
                             5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&nbsp;&nbsp;div&gt;<br/>
                             6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123; i === 1 ? 'true' : 'false' &#125;&lt;/h1&gt;<br/>
                             7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                             8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                             9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                             10.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                            </p>
                          </Mui.Typography>
                        </Mui.CardContent>
                    <Mui.CardActions>
                <Mui.Button size="small"></Mui.Button>
             </Mui.CardActions>
         </Mui.Card>
         <p>the above will render:</p>        
         
<Mui.Card variant="outlined"  style={{width:400}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>&lt;h1&gt;11&lt;/h1&gt;</p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        <h4>Conditional statements</h4>
                            <p><a href="/">If–else statements</a> cannot be used inside JSX but conditional expressions can be used instead. The example below will render &#123; i === 1 ? 'true' : 'false' &#125; as the string 'true' because i is equal to 1. </p>
                        <Mui.Card variant="outlined"  style={{width:400}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>1&nbsp;&nbsp;class App extends React.Component &#123;<br/>
                                        2&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br/>
                                            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const i = 1;<br/>
                                                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
                                                    5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
                                                        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123; i === 1 ? 'true' : 'false' &#125;&lt;/h1&gt;<br/>
                                                    7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                                            9&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        10&nbsp;&nbsp;&#125;<br/>
                                    </p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                            <p>The above will render:</p>
                        <Mui.Card variant="outlined"  style={{width:400}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                &lt;div&gt;
                                    &lt;h1&gt;true&lt;/h1&gt;
                                &lt;/div&gt;
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        <p>Functions and JSX can be used in conditionals: </p>
                        <Mui.Card variant="outlined"  style={{width:600}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                    <p>1&nbsp;&nbsp;class App extends React.Component &#123;<br/>
                                        2&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br/>
                                            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const sections = [1, 2, 3];<br/>
                                                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
                                                    5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
                                                        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;sections.length &gt; 0 &#38;&#38; sections.map(n =&gt; (<br/>7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* 'key' is used by react to keep track of list items and their changes */<br/>
                                                            8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/* Each 'key' must be unique */<br/>
                                                        9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div key=&#123;"section-" + n&#125;&gt;Section &#123;n&#125;&lt;/div&gt;<br/>
                                                    10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br/>
                                                11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                            12&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                                        13&nbsp;&nbsp;&#125;<br/>
                                    </p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        <p>The above will render: </p>
                        <Mui.Card variant="outlined"  style={{width:400}}>
                            <Mui.CardContent>
                                <Mui.Typography  gutterBottom>
                                <p>
                                    &lt;div&gt;
                                        &lt;div&gt;Section 1&lt;/div&gt;
                                            &lt;div&gt;Section 2&lt;/div&gt;
                                        &lt;div&gt;Section 3&lt;/div&gt;
                                    &lt;/div&gt;
                                </p>
                                </Mui.Typography>
                            </Mui.CardContent>
                        </Mui.Card>
                        <p>Code written in JSX requires conversion with a tool such as <a href="/">Babel</a> before it can be understood by web browsers.<sup>[17]</sup> This processing is generally performed during a <a href="/">software build</a> process before the application is <a href="/">deployed</a>. </p>
                            <p><b>Architecture beyond HTML</b> [ <a href="/">edit</a> ]</p>
                            <p>The basic architecture of React applies beyond rendering HTML in the browser. For example, Facebook has dynamic charts that render to &lt;canvas&gt; tags,<sup><a href="/">[18]</a></sup> and Netflix and <a href="/">PayPal</a> use universal loading to render identical HTML on both the server and client.<sup><a href="/">[19][20]</a></sup></p>
                                <p><b>React hooks</b> [ <a href="/">edit</a> ]</p>
                                    <p>ooks are functions that let developers "hook into" React state and lifecycle features from function components.<sup><a href="/">[21]</a></sup> They make code readable and easily understandable. Hooks don’t work inside classes — they let you use React without classes.<sup><a href="/">[22]</a></sup></p>
                                    <p>React provides a few built-in Hooks like useState,[23] useContext, useReducer and useEffect<sup><a href="/">[24]</a></sup> to name a few. They are all stated in the Hooks API Reference.<sup><a href="/">[25]</a></sup> useState and useEffect, which are the most used, are for controlling states and side effects respectively in React Components.</p>
                                        <h4>Rules of hooks [ <a href="/">edit</a> ]</h4>
                                            <p>There are also rules of hooks<a href="/"><sup>[26]</sup></a> which must be followed before they can be used. </p>
                                                <ol>
                                                    <li>Hooks should only be called at the top level (not inside loops or if statements).</li>
                                                    <li>Hooks should only be called from React function components, not normal functions or class components</li></ol> 
                                            <h4>Custom hooks [ <a href="/">edit</a> ]</h4>
                                                <p>Building your own hooks<a href="/"><sup>[27]</sup></a> which are called custom hooks lets you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. The rules of hooks also apply to them i.e, custom hooks should be written in compliance with the rules enforced by React or else there will be high chance of breaking the code's integrity. Check the following link to learn the <a href="/">rules for creating the custom hooks</a>. </p>
                                            <h3>Common idioms [ <a href="/">edit</a> ]<hr/></h3>
                                                <p>React does not attempt to provide a complete "application library". It is designed specifically for building user interfaces<a href="/"><sup>[3]</sup></a> and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures.</p>
                                                <p><b>Use of the Flux architecture</b>[ <a href="/">edit</a> ]</p>
                                                <p>To support React's concept of unidirectional data flow (which might be contrasted with <a href="/">AngularJS</a>'s bidirectional flow), the Flux architecture represents an alternative to the popular <a href="/"></a>model-view-controller architecture. Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view.<a herf="/"><sup>[28]</sup></a> When used with React, this propagation is accomplished through component properties.Flux can be considered a variant of the <a herf="/">observer pattern.<sup>[29]</sup></a></p>
                                                <p>A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object whose responsibility is to describe what has taken place: for example, an action describing one user "following" another might contain a user id, a target user id, and the type <b>USER_FOLLOWED_ANOTHER_USER</b>.<a href="/"><sup>[30]</sup></a> The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher. </p>
                                                <p>This pattern is sometimes expressed as "properties flow down, actions flow up". Many implementations of Flux have been created since its inception, perhaps the most well-known being <a href="/">Redux</a>, which features a single store, often called a <a href="/">single source of truth.<sup>[31]</sup></a></p>
                                                    <font size="3">
                                                        <p>Future development [ <a href="/">edit</a> ] <hr/></p>
                                                    </font>
                                                    <p>Project status can be tracked via the core team discussion forum.<a href="/"><sup>[32]</sup></a> However, major changes to React go through the Future of React repository issues and <a href="/">pull requests</a>.<a href="/"><sup>[33][34]</sup></a> This enables the React community to provide feedback on new potential features, experimental APIs and JavaScript syntax improvements. </p>                  
                     </Mui.Card>
                     </Mui.Grid>
                   </Mui.Grid>
                   </Mui.Container>
                </div>
        )
    }
}

export default Home;