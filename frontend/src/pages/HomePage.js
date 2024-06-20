import { React } from 'react';

function HomePage() {
    return(
        <>
        <h2>Patrick Lim's Web Dev Portfolio</h2>
        <article>
            <p>
                My goal is to obtain an internship or full-time position in software development so that I can contribute to exciting programming projects and learn new skills.
                As a postbacc student working towards a degree in Computer Science, I hope to expand my knowledge about programming and explore the various fields in the software industry.
            </p>
            <p>This website uses the following technologies for its creation:
                <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>Most of the pages on this website are written in HTML, which is the standard markup language for documents used in a web browser.
                        It is used to create the core content of the website such as paragraphs of text, images, and forms.
                    </dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>Cascading Style Sheets (CSS) help reformat the documents written in HTML. It defines the spacing of the text, the borders of different sections of the page, and the colors of everything on display.</dd>
                    <dt><strong>Javascript</strong></dt>
                    <dd>Javascript is used to create interactivity for this webpage and is also used to develop server side and networking applications through Node. It helps dynamically update content using the document object model (DOM) tree. On the backend, 
                        it is used by the REST application programming interface (API) to create, read, update, or delete (CRUD) data. On the frontend, REACT uses javascript to create interactivity for the user with high level code and 
                        connects to the REST API to perform CRUD operations.
                    </dd>
                    <dt><strong>Node</strong></dt>
                    <dd>Node is a runtime environment written in Javascript that helps develop server-side and networking apps. It is used to create local servers and interact with other servers using Express.
                    </dd>
                    <dt><strong>Express</strong></dt>
                    <dd>Express provides an API that allows this website to get, post, delete data and define ports and routes. Specifically, it acts as middleware for HTTP requests.</dd>
                    <dt><strong>MongoDB</strong></dt>
                    <dd>MongoDB is a document-oriented Database management system (DBMS) that stores data as a document in JSON format. This website uses MongoDB to store information about Yu-Gi-Oh! cards and to perform CRUD operations on this data.</dd>
                    <dt><strong>Mongoose</strong></dt>
                    <dd>Mongoose is a javascript library that simplifies how this website interacts with MongoDB. This app uses the Model-View-Controller (MVC) model to develop the GUI on the frontend. Mongoose is specifically used on the model layer to map
                        classes and objects to connect to MongoDB.
                    </dd>
                    <dt><strong>REST</strong></dt>
                    <dd>Representational State Transfer (REST) is a web service that follows REST guidelines. One guideline is that a server manages collections of resources and those are shown to clients with unique URLs. CRUD operations are provided by
                        HTTP methods through POST, GET, PUT, DELETE. Finally, servers should be stateless. Each HTTP request is isolated and does not remember information from previous requests. This website uses the REST API to perform CRUD operation as the backend. 
                    </dd>
                    <dt><strong>React</strong></dt>
                    <dd>React is used for this website's frontend. It is a framework used for frontend applications that updates the DOM and minimizes the rendering for the browser. Pages are thus built with components instead of HTML directly, updates are
                        made through states, and it turns this app into a single page application (SPA).
                    </dd>
                </dl>
            </p>
        </article>
        </>
    )
}
export default HomePage;