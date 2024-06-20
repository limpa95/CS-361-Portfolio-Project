import { React } from 'react';

function TopicsPage() {
    return(
        <>
            <h2>Web Development Concepts</h2>
                <nav class="local">
                    <a href="#webServers">Web Servers</a>
                    <a href="#frontendDesign">Frontend Design</a>
                    <a href="#optimizingImages">Optimizing Images</a>
                    <a href="#favicons">Favicons</a>
                    <a href="#cascadingStylesheets">Cascading Stylesheets</a>
                    <a href="#forms">Forms</a>
                    <a href="#express">Express</a>
                    <a href="#javascript">Javascript</a>
                </nav>
            <article class="homepage" id="webServers">
                <h3>Web Servers</h3>
                <p>For most <strong>websites</strong> and <strong>servers</strong>, an <strong>index</strong> 
                    is the default file that is returned when a <strong>request</strong> is made to the website or server. 
                    The <strong>index</strong> file is often called the <strong>homepage</strong> and serves as the default page that appears to the user
                    when no resource or path is specified. While <strong>index.html</strong> is the most common file used,
                    other servers may look for index.js, index.php, or even give the <strong>homepage</strong> a different
                    name such as default.html.
                </p>
                <p>In the browser's <strong>Web Dev/Inspector Network</strong> screen, the <strong>HTTP request</strong> and <strong>response</strong>
                    can be seen. It shows the page <strong>status</strong>, <strong>method</strong>, IP, policy, language, cache instructions,
                    browser version, age, dates etc. When checking the file, the main difference between
                    the <strong>web server</strong> and local computer is information about connecting to the internet/web.
                    The local file does list the <strong>status code</strong>, <strong>request method</strong>, 
                    and content type but lacks <strong>request</strong> and <strong>response</strong> data about networking 
                    because the file is not hosted online. The <strong>URL</strong> lists the file path on 
                    the local computer and not to a <strong>URL</strong> for a <strong>server</strong>. In contrast, the file details that are hosted on the <strong>web server</strong> 
                    has information like the remote address, cache instructions, <strong>server</strong> names and more. The <strong>status code</strong>, 
                    <strong>request method</strong>, and content type are still listed for the <strong>web server</strong> file as well.
                </p>
                <p>The favicon.ico file has a <strong>status code</strong> of 200 because the OSU server provides it 
                    automatically. It refers to the favorites icon for the webpage. Since the file was
                    already provided, the <strong>status code</strong> is 200 for OK and is working. However, the main.css 
                    and main.js were not provided to the <strong>web server</strong>. They returned a 404 <strong>response code</strong> instead, 
                    which means they were not found.
                </p>
                <p>The <strong>URL</strong> for the web file is https://web.engr.oregonstate.edu/~limpa/a1-limpa/. 
                    The <strong>scheme</strong> is <strong>HTTPS</strong>. The <strong>subdomains</strong> are web and engr. 
                    The host <strong>domain</strong> is oregonstate.edu, as indicated by the preceding //. 
                    There is no <strong>port</strong> number, so the <strong>server</strong> likely uses the default <strong>port</strong> number 443. 
                    After the /, the path to the resource/file is ~limpa/a1-limpa/. It is organized in a directory, specifically the a1-limpa folder on the 
                    <strong>web server</strong>. The <strong>index.html</strong> file is not listed in the <strong>URL</strong>, but the <strong>request</strong> 
                    for / is mapped to <strong>index.html</strong> by default in the Apache <strong>web server</strong> that OSU uses. Thus, the contents of the 
                    <strong>index.html</strong> file (<strong>homepage</strong>) is returned to the <strong>web client</strong>. 
                </p>
            </article>
            <article class="homepage" id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>The concept of <strong>frontend design</strong> is about providing a good user experience for a <strong>web app</strong>. 
                    It includes elements such as the visual design, the graphical user-interface (GUI), and interactions on the page. 
                    Frontend developers need to design their pages using visual features that help the user interact and navigate the website.
                    Creating a consistent color scheme, along with easily recognizable fonts, media, and icons, increases the visual appeal 
                    of the website and encourages users to stay on it. Combining this with intuitive and fast navigation systems enable users to engage 
                    with the content without frustration and accomplish their intended goals. Good <strong>frontend design</strong> 
                    should motivate users to continue interacting with the visual elements of the website to ultimately form a pleasant and appropriate experience 
                    during its use. The trends for <strong>frontend design</strong> often change over the years, but the focus is still on <strong>usability</strong>.
                    Ensuring that the user's experience is positive is very important because users may choose alternative products if their needs are not met. 
                </p>
                <p>Creating a usable website is essential for successful <strong>frontend design</strong>. One way to do so is by following the <strong>Five "E"s of usability</strong>.
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Websites should help users meet their goals.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Users should be able to perform tasks in the least amount of steps possible to save time.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Users should understand how to find what they are looking for, especially if they have never used the website before.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Errors can prevent users from reaching their goal; thus, limiting errors helps make websites more accessible.</dd>
                        <dt><strong>Enjoyable/Engaging</strong></dt>
                        <dd>A website that is visually appealing and catered to the special needs of the intended users encourages them to return to the website.</dd>
                    </dl>
                </p>
                <p><strong>Page Layout Tags</strong> are another way that developers help organize their code. <strong>HTML 5</strong> has a number of tags that do this, and it even helps machines
                    like search engine robots understand the components of a page. The &lt;header&gt; tag marks the banner or logo of the application. It helps the user recognize that they are on the same site.
                    The &lt;nav&gt; tag is used to move the user to different pages of the website or even other websites. The &lt;main&gt; tag specifies the primary content of the specified document.
                    The &lt;section&gt; tag groups similar content together. Typically, the &lt;h1&gt; heading tag is used to describe the content of the section. Next, the &lt;article&gt; tag is mostly used inside
                    the &lt;section&gt; tag and specifies a single topic using the &lt;h2&gt; heading tag. An <strong>ID</strong> selector with a hashtag can be used to make each article unique.
                    The &lt;aside&gt; tag is often related to an article. It mostly floats left or right of the article with its own style. The &lt;figure&gt; tag denotes media along with the 
                    &lt;figcaption&gt;. &lt;figure&gt; wraps around the &lt;figcaption&gt; and &lt;img&gt; tags. The &lt;blockquote&gt; tag is used for longer quotations and can include the &lt;q&gt; and
                    &lt;cite&gt; tags for quotes. Finally, the &lt;footer&gt; tag holds contact and legal information. At minimum, it includes the copyright symbol, publication year, and the owner's name. 
                    
                </p>
                <p><strong>Anchors</strong> can be used to create links from one item to another using the <strong>anchor element</strong>, &lt;a&gt;.
                    The description of the link is between the &lt;a&gt; tags, while the href attribute specifies the path or <strong>URL</strong> when the link is clicked.
                    <ol>
                        <li>External content: <strong>Anchors</strong> link to external content by using a <strong>URL</strong> for the value of href. The <strong>URL</strong> links 
                        to content outside the current website.</li>
                        <li>Internal content: Internal <strong>anchors</strong> link to items within the same page by using IDs. <strong>Tags</strong> that use an <strong>ID</strong> attribute
                        can then have an <strong>anchor</strong> link to the <strong>tag</strong> using a hashtag. Users often expect interactive buttons to move through sections of a page, and 
                        internal <strong>anchors</strong> can also be used with <strong>local navigation</strong> tags to link articles within sections.</li>
                        <li>Page-to-page: To move page-to-page, an <strong>anchor</strong> can be used by specifying the value of href to be a path to the other page. There are <strong>absolute paths</strong> 
                            that use a complete <strong>URL</strong>, but these are typically used to link to outside resources. <strong>Relative paths</strong> are more often used for 
                            files located within a website and are commonly used for page-to-page <strong>anchors</strong>. If in the <strong>same directory</strong>, a <strong>relative URL</strong> can be 
                            specified using the name of the file itself, which is the preferred syntax. ./ can also be used, but it is not preferred. To move down a <strong>sub/child directory</strong>, 
                            a / can be added between names of directories and files. To move up <strong>parent directories</strong>, ../ can be used. ../ moves up one directory. Once the correct 
                            <strong>parent directory</strong> has been reached, then we can move down the directory. Similar to internal <strong>anchors</strong>, developers can improve usability of their website 
                            using <strong>anchors</strong> in a <strong>global navigation</strong> block. After the paths are specified in the <strong>anchors</strong>, buttons will be created for user interaction</li>
                    </ol>
                </p>
            </article>
            <article class="homepage" id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p><strong>Optimized images</strong> help reduce the loading time for browsers by displaying pictures in the correct size or format. With <strong>optimized images</strong>, websites can increase their 
                    <strong>usability</strong> for visitors and even save space for <strong>servers</strong>. There are <strong>6 main specifications</strong> for optimizing online images.
                    <dl>
                        <dt><strong>Descriptive file name</strong></dt>
                        <dd>A descriptive name helps <strong>search engine optimization (SEO)</strong> because search engine bots will be able to organize the image for users when they are also looking for 
                            related images. Ideally, the file names should include who, what, when, and where to provide as much concise information as possible.</dd>
                        <dt><strong>Small file size</strong></dt>
                        <dd>Smaller file sizes lead to faster loading times. Compression is often used to make the file sizes smaller. If possible, larger files should only be used for things like high 
                            resolution devices. This can be accomplished using the srcset=&quot;&quot; and sizes=&quot;&quot; attributes.
                        </dd>
                        <dt><strong>Exact dimensions</strong></dt>
                        <dd>File sizes can also be reduced by cropping images to a smaller size so that they fit the space of one's web page. For example, using a file with a width of 10000px for a 500px block
                            can lead to longer loading times because the extra dimensions use more file size and may not be necessary.
                        </dd>
                        <dt><strong>Correct file format</strong></dt>
                        <dd>Choosing the correct file format is important because some formats are more appropriate than others, depending on an image's intended use. For instance, .PNG files provide transparency
                            that is useful for line-art like logos. However, they are also larger than formats like .JPG and can cause slower loading times. For photographs, which do not require transparency,
                            .JPG is more appropriate because it compresses photos and keeps file sizes small.
                        </dd>
                        <dt><strong>Reduced resolution</strong></dt>
                        <dd>By reducing the resolution of an image, the file size can be reduced and decrease loading times. Older monitors use 72 pixels per inch (ppi) by default, but now monitors can render more than 300 
                            ppi. Providing multiple file sizes for different resolutions can help by only serving higher resolution images when necessary.
                        </dd>
                        <dt><strong>Color mode</strong></dt>
                        <dd>The color of a website is important for its presentation and is usually determined by a marketing department or based on the background of the website. 
                            Frontend developers use <strong>color modes</strong> to not only accurately represent their brand but also optimize their website for loading times. Typically, they use Names, hexidecimal/hexa, RGB/RGBa, or HSL/HSLa. 
                            Names has 256 pre-defined <strong>HTML</strong> colors while the others have much more colors and can provide transparency. Indexed color is another mode that can be used to reduce file sizes because 
                            it is limited to 8 bit files with 256 color values. Indexed <strong>color mode</strong> is used for .GIF or occasionally .PNG. RGB is used for .JPG, .WebP, .PNG, and .SVG file formats. For file formats like .PNG 
                            that can use different <strong>color modes</strong>, choosing a more limited <strong>color mode</strong> like indexed color can help optimize the image to save on storage and loading times.
                        </dd>
                    </dl>
                </p>
                <p>For photos, the most appropriate file formats are .JPG and .WebP. This is because photos typically are very detailed and are taken on high resolution cameras. Their file sizes, as a result,
                    are very large and can be too large for websites to load quickly. .JPG and .WebP compress photos into much smaller sizes, and they also keep them rectangular. This keeps the website 
                    optimized and maintains the standard shape of the photo.
                    For line art, .GIF, .PNG, and .SVG are the most common formats. Line art is used for vector graphics like logos or symbols, which typically have less detail than photos. With less detail, file sizes are smaller and 
                    thus have less of an impact on increasing loading times. Using file formats like .GIF, .PNG, and .SVG, which have less compression, are much more feasible and has the benefit of having more clarity. Having a crisp image 
                    is important when you want a recognizable logo, so .GIF, .PNG, .SVG are more appropriate than lossy formats which reduce image quality like .JPG.  
                </p>
            </article>
            <article class="homepage" id="favicons">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong>, otherwise known as favorites icons or touch icons, are logos that help users identify websites. Most people recognize this symbol through a tab on their browser 
                    or as the icon on their bookmark list. This symbol's file size and type should change depending on the device the website is accessed on because picking the correct size and file type 
                    ensures that the <strong>favicon</strong> can be displayed correctly. <strong>Favicons</strong> are saved in .ICO, .GIF, .PNG, and .SVG file formats. For old browsers, .ICO was the format 
                    used and is still used nowadays. Other than .ICO, the most common formats used today are .PNG and .SVG.
                </p>
            </article>
            <article class="homepage" id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>As the name implies, <strong>Cascading Stylesheets</strong> (CSS) change the style of websites and apps by adjusting the organization and content of webpages. Essentially, it allows developers to customize the visual components
                    of their website to improve the <strong>usability</strong> for their target audience. While <strong>HTML</strong> is used to design the functionality of a website, CSS uses its own syntax to adjust the default 
                    <strong>HTML</strong> styles and meet a developer's desired visual design.
                </p>
                <p>There are 5 ways to incorporate styles using CSS.
                    <ol>
                        <li><strong>External rules</strong>: Normally, <strong>HTML</strong> files use styles by using external files with a .css extension. They can either be linked or <strong>imported</strong>
                            using the @import method. This is the most commonly used way of making styles because you can efficiently focus on the visual design of a website in a single file
                            location. As such, making long-term changes with external files is preferred. The other methods listed below are for one-off style changes because they can be difficult to debug and troubleshoot.
                        </li>
                        <li><strong>Embedding with HTML</strong>: A &lt;style&gt; tag can be used by writing the style code within brackets {}.
                        </li>
                        <li><strong>Inline with HTML</strong>: Styles can be written <strong>inline</strong> as well using an attribute and value. For example: &lt;h2 style="color:blue"&gt;.
                        </li>
                        <li><strong>Template literals in Javascript</strong>: <strong>Template literals</strong> are strings that contain expressions, which can be used for adjusting styles. To do this, <strong>Template literals</strong> 
                            are enclosed in <strong>backticks</strong> (`). The value of the variable is checked and converted into a string to splice a response.
                        </li>
                        <li><strong>Document Object Model (DOM) in Javascript</strong>: The DOM API has a style property that can be used to change the style of a node. It is represented by a Javascript object. Property names in CSS correspond with 
                            the names in the DOM, so names of colors can be used similar to CSS. Some property names in CSS have a dash. In these cases, the names are converted to camel case names.
                            For example, document.getElementsByTagName('h2').style.color = 'blue'; would look into an HTML file for a tag called h2 and style it to the color blue. Note the camel case for background color.
                        </li>
                    
                    </ol>
                </p>
            </article>
            <article class="homepage" id="forms">
                <h3>Forms</h3>
                <p><strong>Forms</strong> help websites collection information from users, and it is important that as many users as possible be able to fill them out.
                    To do so, an emphasis should be made for <strong>accessibility</strong>.
                </p>
                <p>There are 6 major goals of accessible <strong>forms</strong>.
                    <ol>
                        <li><strong>Clear Instructions</strong>: Instructions should be above the <strong>form</strong> and in <strong>labels</strong>. This helps those who are visually impaired.
                        </li>
                        <li><strong>Why data is gathered and which fields are required</strong>: Letting users know why data is being collected helps inform them about the purpose of the <strong>form</strong>.
                            By emphasizing which fields are required, it helps users quickly fill out forms without frustration.
                        </li>
                        <li><strong>First field set to autofocus</strong>: For users who have trouble using a mouse, this ensures that users can start typing without issue.
                        </li>
                        <li><strong>Each form can be filled in using keyboard</strong>: Users who cannot use a mouse or trackpad can fill out the <strong>form</strong> by using a keyboard.
                        </li>
                        <li><strong>Tab indexing for complex forms</strong>: Indexing helps users figure out the correct order to fill out the fields,
                        </li>
                        <li><strong>Make validation messages readable</strong>: Built-in <strong>HTML</strong> browser messages are not screen readable, so changing it ensures that more people can fill out the <strong>form</strong> correctly.
                        </li>
                    </ol>
                </p>
                <p>To customize <strong>forms</strong>, there are a number of tags that can be used.
                    <dl>
                        <dt><strong>&lt;form&gt;</strong></dt>
                        <dd>The &lt;form&gt; tag is used to add a form to an HTML document. Content like paragraphs or images are placed inside the tag and users input information based on additional tags within the &lt;form&gt; tag.
                            More specifically, there are also certain attributes that need to be specified in this tag. The <strong>action</strong> attribute specifies where the request form needs to be sent. It 
                            can be a relative path or absolute <strong>URL</strong>. <strong>method</strong> is the second important attribute. It specifies the type of <strong>HTTP</strong> method used in the request such as
                            GET or POST.
                        </dd>
                        <dt><strong>&lt;fieldset&gt;</strong> and <strong>&lt;legend&gt;</strong></dt>
                        <dd>These tags are used for complex forms in order to separate sections of the <strong>form</strong> into groups. This help makes the form organized and more accessible.
                        </dd>
                        <dt><strong>&lt;label&gt;</strong></dt>
                        <dd>&lt;label&gt; is used to help users understand the purpose of each field.
                        </dd>
                        <dt><strong>&lt;input&gt;</strong></dt>
                        <dd>&lt;input&gt; is commonly used for data entry and its visual style can be changed using the <strong>type</strong> attribute. There are a variety of types, but common ones include
                            emails, checkboxes, or radio (multiple choice) types. The <strong>name</strong> attribute is important to use along with <strong>type</strong>. This is used to identify which part of the <strong>form</strong> each data item
                            is associated with. Another important attribute is <strong>required</strong>. This helps prevent bots from overloading the server by submitting <strong>forms</strong> multiple times and 
                            informs users which parts of the <strong>form</strong> to prioritize. 
                        </dd>
                        <dt><strong>&lt;select&gt;</strong> with <strong>&lt;option&gt;</strong>s</dt>
                        <dd>&lt;select&gt; gives users a drop-down menu while &lt;option&gt; defines the choices in the menu. 
                        </dd>
                        <dt><strong>&lt;textarea&gt;</strong></dt>
                        <dd>For longer messages, &lt;textarea&gt; can be used since it enables input with multiple lines of text.
                        </dd>
                        <dt><strong>&lt;button&gt;</strong></dt>
                        <dd>&lt;button&gt; is used to perform the <strong>action</strong> attribute specified on the &lt;form&gt; tag. It requires activation using a keyboard, mouse, voice command or finger touch.
                            An example would be a submit button.
                        </dd>
                    </dl>
                </p>
                <p>
                    To improve usability, there are certain recommendations for <strong>form styles</strong> that should be implemented. fieldset should be changed from the default so that text is easier to read
                    and is not overlapping with borders. Labels should be above rather than inline by using the display property. To help users with larger fingers or arthritis, font-size should be increased and padding used to widen buttons and input fields.
                    <strong>autofocus</strong> should also be used to help users get started with entering data. As stated before, required fields should be labeled with an asterisk to denote which fields are required.
                    For empty fields, placeholder text should have increased contrast to improve readability. For inputs that need to meet certain requirements, border colors changing to either red or green can be good indicators.
                </p>
            </article>
            <article class="homepage" id="express">
                <h3>Express</h3>
                <p>For those looking to develop web applications, there are three technologies that can be helpful to save time or streamline the development process:
                    <dl>
                        <dt><strong>Node</strong></dt>
                        <dd><strong>Node</strong> is an application that one can install locally so that a browser is not required, It is widely used by javascript developers and has a large library of
                            modules that can be used to simplify the development process.
                        </dd>
                        <dt><strong>npm</strong></dt>
                        <dd><strong>npm</strong> stands for Node Package Manager and is used for <strong>Node</strong>. It is an <strong>online repository</strong> for modules that developers can use, and packages can
                            be easily searched. It also is a <strong>command-line utility</strong> that installs those packages and manages them for projects that depend on those packages.
                        </dd>
                        <dt><strong>Express</strong></dt>
                        <dd><strong>Express</strong> is a <strong>Node</strong> framework that provides Application Programming Interfaces (APIs) for many common tasks that web applications need to do. It can get, post, and delete data.
                            It can also define ports and routes for that data. For static files, it can incorporate them into templates that can be used to serve those static files like in a public folder.
                            Finally, middleware can be used to handle requests within data routes. 
                        </dd>
                    </dl>
                </p>
            </article>
            <article class="homepage" id="javascript">
                <h3>Javascript</h3>
                <p>Like other programming languages, <strong>javascript</strong> provides different data types for developers to use. The main types include a number, a boolean value (true/false), 
                    a string, a symbol, special values like undefined and null, and an object. The values besides object type are classified as <strong>primitive types</strong>.
                </p>
                <p>While <strong>javascript</strong> objects are the only non-primitive type of value, they are still extensively used in <strong>javascript</strong> code. A <strong>javascript</strong> object is
                    a set of name-value pairs called properties of the object. They hold information about the object and can be created/updated, read, and deleted. Using the correct syntax, objects can be modified and updated
                    with the . operator or deleted with the delete operator. To get the name of all the properties, the object.keys() method can be used as well.
                </p>
                <p><strong>Arrays</strong> are a specific type of object that stores multiple items under a variable name. They are typically created using brackets []. The property names must be strings, but the values can be any 
                    <strong>javascript</strong> type, including other objects. Accessing the elements of the <strong>array</strong> can be done by using 0-based integer indexing like [1] or using string based property names like ['0']. 
                    <strong>Arrays</strong> have many methods and properties to obtain information about itself. Array.isArray determines if the value of a variable is an <strong>array</strong> or not. The property length returns the number of elements in the 
                    <strong>array</strong>. push() adds elements to the end of an <strong>array</strong> and pop removes and returns the last element. Finally, includes() determines if a value exists in the elements of an <strong>array</strong>.
                </p>
                <p><strong>JSON</strong>, otherwise known as <strong>Javascript Object Notation</strong>, is used to exchange data between applications. <strong>JSON</strong> can map objects to a string in <strong>JSON</strong> format, and it can also 
                    create an object from a string in <strong>JSON</strong> format. Because it is independent of any programming language, <strong>JSON</strong> lets programs exchange data even though they might be written in different programming languages. 
                    In <strong>javascript</strong>, JSON.stringify() is used to create a <strong>JSON</strong> string from a <strong>javascript</strong> object while JSON.parse() does the opposite.
                </p>
                <p>Another useful aspect of <strong>javascript</strong> is the use of conditionals and loops. This is used to create code with branching logic and also allows iteration. Conditional branching can be done by using if and switch statements.
                    There is also a conditional operator called the Ternary operator that can simplify code using the condition ? expression1 : expression2 format. Conditions in <strong>javascript</strong> can have values of any type, but one must be careful of 
                    automatic conversion. Developers should code conditions explicitly to true or false instead of relying on the automatic conversion, since the behavior might not be what is intended. To test for <strong>equality</strong>, strict operators can be used 
                    or loose operators can be used. Since loose equality operators rely on automatic conversion of types, strict equality operators should mostly be used as best practice. &lt;, &le;, &gt;, and &ge; are used for comparison and boolean operators &&, ||, and ! are used to 
                    combine Boolean values. To make loops and repeat operations in code, <strong>javascript</strong> provides looping with <strong>while</strong> and <strong>for</strong> statements in addition to more specific cases of these two. <strong>do while</strong> is similar to while except 
                    the expression is evaluated after the body executes. The <strong>for of</strong> loop is used to iterate over elements of an iterable value like a string or array. The <strong>for in</strong> statement iterates over properties of an object, but don't assume 
                    it iterates in any particular order. One can also break a loop using a break statement or skip an iteration of a loop using a continue statement.
                </p>
                <p>In <strong>Object-oriented programming</strong>, an object has an <strong>identity</strong>, <strong>state</strong>, and <strong>behavior</strong>. In old <strong>javascript</strong>, objects can be created without declaring classes, but modern coding first 
                    declares classes and then creates objects using instances of those classes. <strong>Prototypes</strong> can be used to create objects in <strong>javascript</strong>, but nowadays it supports creating classes using the class keyword. To create objects with classes, 
                    call the constructor with the keyword new and pass arguments to the constructor function. If a value needs to be shared across all instances of a class, static methods and fields can be used. If subclasses are needed, the extend keyword can be used to inherit aspects of 
                    the parent class (superclass) to the subclass.
                </p>
                <p><strong>Functional programming</strong> uses functions in your code to abstract how it is implemented and instead focuses on what you want to do with your code. To achieve this, one would create functions that give the same output each time and 
                    use values/variables that are immutable. Since functions in <strong>javascript</strong> are <strong>first-class values</strong>, they can be assigned to variables, received in other functions as arguments and return other functions. Functions that 
                    receive other functions as arguments are called <strong>higher-order functions</strong>. Many of these types of functions are built-in to <strong>javascript</strong> and are often used in functional programming because they don't change the underlying function 
                    and or data structure like an <strong>array</strong>. <strong>Anonymous functions</strong> and <strong>closures</strong> are another way to simplify and abstract code in <strong>javascript</strong>. <strong>Closures</strong>, in particular, allow inner functions to access 
                    the outer scope of a function, which helps create data privacy that can be useful for keeping code abstracted to not confuse users of <strong>functional programming</strong> code. 
                </p>
            </article>
        </>
    )
}
export default TopicsPage;