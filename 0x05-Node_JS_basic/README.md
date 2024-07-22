<article style="text-align: start;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 14px;">
    <div>
        <div>
            <div>
                <div>
                    <h1 style="color: inherit;font-size: 36px;">0x05. NodeJS Basics</h1>
                    <div>
                        <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">Back-end</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">JavaScript</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ES6</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">NodeJS</span></strong><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(219, 62, 62);font-size: 14px;">ExpressJS</span></strong></div>
                    </div>
                    <div>
                        <ul style="font-size: 11px;">
                            <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">Weight: 1</li>
                            <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">Project will start <span title=""><span style="border-bottom: 0.5px dashed currentcolor;">Jul 22, 2024 6:00 AM</span></span>, must end by <span title=""><span style="border-bottom: 0.5px dashed currentcolor;">Jul 24, 2024 6:00 AM</span></span></li>
                            <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">Checker will be released at <span title=""><span style="border-bottom: 0.5px dashed currentcolor;">Jul 22, 2024 6:00 PM</span></span></li>
                            <li style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">An auto review will be launched at the deadline</li>
                        </ul>
                    </div>
                    <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                        <div>
                            <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240722%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240722T063110Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b0bb44f12346272e59f90408a11924d8801f8fd98192995d9185a2bb4719c6c8" alt="" style="border: 0px;"></p>
                            <h2 style="color: inherit;font-size: 30px;">Resources</h2>
                            <p><strong><strong>Read or watch</strong></strong>:</p>
                            <ul>
                                <li><a href="https://intranet.alxswe.com/rltoken/hROgW3QO9jqFnFP-Nzwh8A" title="Node JS getting started" target="_blank" style="color: transparent;">Node JS getting started</a></li>
                                <li><a href="https://intranet.alxswe.com/rltoken/Wt69QV2xygB4GEqob26AjQ" title="Process API doc" target="_blank" style="color: transparent;">Process API doc</a></li>
                                <li><a href="https://intranet.alxswe.com/rltoken/IS4y9rRCblX71W_oeXpymw" title="Child process" target="_blank" style="color: transparent;">Child process</a></li>
                                <li><a href="https://intranet.alxswe.com/rltoken/XsfrhG9NRLuuaTpVZlZv_g" title="Express getting started" target="_blank" style="color: transparent;">Express getting started</a></li>
                                <li><a href="https://intranet.alxswe.com/rltoken/EBGDj1FwLrK_y4kgxp8hfg" title="Mocha documentation" target="_blank" style="color: transparent;">Mocha documentation</a></li>
                                <li><a href="https://intranet.alxswe.com/rltoken/vnDSbLsicMDdxcf5YUSXIg" title="Nodemon documentation" target="_blank" style="color: transparent;">Nodemon documentation</a></li>
                            </ul>
                            <h2 style="color: inherit;font-size: 30px;">Learning Objectives</h2>
                            <p>At the end of this project, you are expected to be able to <a href="https://intranet.alxswe.com/rltoken/vXmxtc5JH_CeIWReMTNhDA" title="explain to anyone" target="_blank" style="color: transparent;">explain to anyone</a>, <strong><strong>without the help of Google</strong></strong>:</p>
                            <ul>
                                <li>run javascript using NodeJS</li>
                                <li>use NodeJS modules</li>
                                <li>use specific Node JS module to read files</li>
                                <li>use <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">process</code> to access command line arguments and the environment</li>
                                <li>create a small HTTP server using Node JS</li>
                                <li>create a small HTTP server using Express JS</li>
                                <li>create advanced routes with Express JS</li>
                                <li>use ES6 with Node JS with Babel-node</li>
                                <li>use Nodemon to develop faster</li>
                            </ul>
                            <h2 style="color: inherit;font-size: 30px;">Requirements</h2>
                            <ul>
                                <li>Allowed editors: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vi</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">vim</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">emacs</code>, <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Visual Studio Code</code></li>
                                <li>All your files will be interpreted/compiled on Ubuntu 18.04 LTS using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">node</code> (version 12.x.x)</li>
                                <li>All your files should end with a new line</li>
                                <li>A <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">README.md</code> file, at the root of the folder of the project, is mandatory</li>
                                <li>Your code should use the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">js</code> extension</li>
                                <li>Your code will be tested using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Jest</code> and the command <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm run test</code></li>
                                <li>Your code will be verified against lint using ESLint</li>
                                <li>Your code needs to pass all the tests and lint. You can verify the entire project running <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">npm run full-test</code></li>
                                <li>All of your functions/classes must be exported by using this format: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">module.exports = myFunction;</code></li>
                            </ul>
                            <h2 style="color: inherit;font-size: 30px;">Provided files</h2>
                            <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">database.csv</code></h3>
                            <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
</code></pre>
                            <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">package.json</code></h3>
                            <details>
                                <summary>Click to show/hide file contents</summary>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);">
</pre>
                            </details>
                            <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">babel.config.js</code></h3>
                            <details>
                                <summary>Click to show/hide file contents</summary>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);">
</pre>
                            </details>
                            <h3 style="color: inherit;font-size: 24px;"><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 21.6px;">.eslintrc.js</code></h3>
                            <details>
                                <summary>Click to show/hide file contents</summary>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);">
</pre>
                            </details>
                            <h3 style="color: inherit;font-size: 24px;">and&hellip;</h3>
                            <p>Don&rsquo;t forget to run <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">$ npm install</code> when you have the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">package.json</code></p>
                        </div>
                    </div>
                    <h2 style="color: inherit;font-size: 30px;">Tasks</h2>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">0. Executing basic javascript with Node JS</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>In the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-console.js</code>, create a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">displayMessage</code> that prints in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">STDOUT</code> the string argument.</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 0-main.js
const displayMessage = require(&apos;./0-console&apos;);

displayMessage(&quot;Hello NodeJS!&quot;);

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0-console.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">1. Using Process stdin</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>Create a program named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-stdin.js</code> that will be executed through command line:</p>
                                <ul>
                                    <li>It should display the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Welcome to Holberton School, what is your name?</code> (followed by a new line)</li>
                                    <li>The user should be able to input their name on a new line</li>
                                    <li>The program should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Your name is: INPUT</code></li>
                                    <li>When the user ends the program, it should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">This important software is now closing</code> (followed by a new line)</li>
                                </ul>
                                <p><strong><strong>Requirements:</strong></strong></p>
                                <ul>
                                    <li>Your code will be tested through a child process, make sure you have everything you need for that</li>
                                </ul>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo &quot;John&quot; | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1-stdin.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">2. Reading a file synchronously with Node JS</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>Using the database <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">database.csv</code> (provided in project description), create a function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">countStudents</code> in the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-read_file.js</code></p>
                                <ul>
                                    <li>Create a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">countStudents</code>. It should accept a path in argument</li>
                                    <li>The script should attempt to read the database file synchronously</li>
                                    <li>If the database is not available, it should throw an error with the text <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Cannot load the database</code></li>
                                    <li>If the database is available, it should log the following message to the console <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number of students: NUMBER_OF_STUDENTS</code></li>
                                    <li>It should log the number of students in each field, and the list with the following format: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
                                    <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
                                </ul>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 2-main_0.js
const countStudents = require(&apos;./2-read_file&apos;);

countStudents(&quot;nope.csv&quot;);

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error(&apos;Cannot load the database&apos;);
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require(&apos;./2-read_file&apos;);

countStudents(&quot;database.csv&quot;);

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-read_file.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">3. Reading a file asynchronously with Node JS</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>Using the database <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">database.csv</code> (provided in project description), create a function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">countStudents</code> in the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-read_file_async.js</code></p>
                                <ul>
                                    <li>Create a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">countStudents</code>. It should accept a path in argument (same as in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">2-read_file.js</code>)</li>
                                    <li>The script should attempt to read the database file asynchronously</li>
                                    <li>The function should return a Promise</li>
                                    <li>If the database is not available, it should throw an error with the text <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Cannot load the database</code></li>
                                    <li>If the database is available, it should log the following message to the console <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number of students: NUMBER_OF_STUDENTS</code></li>
                                    <li>It should log the number of students in each field, and the list with the following format: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
                                    <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
                                </ul>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ cat 3-main_0.js
const countStudents = require(&apos;./3-read_file_async&apos;);

countStudents(&quot;nope.csv&quot;)
    .then(() =&gt; {
        console.log(&quot;Done!&quot;);
    })
        .catch((error) =&gt; {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require(&apos;./3-read_file_async&apos;);

countStudents(&quot;database.csv&quot;)
    .then(() =&gt; {
        console.log(&quot;Done!&quot;);
    })
        .catch((error) =&gt; {
        console.log(error);
    });
console.log(&quot;After!&quot;);

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
</code></pre>
                                <p><strong><strong>Tips:</strong></strong></p>
                                <ul>
                                    <li>Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads</li>
                                </ul>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-read_file_async.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">4. Create a small HTTP server using Node&apos;s HTTP module</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>In a file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-http.js</code>, create a small HTTP server using the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">http</code> module:</p>
                                <ul>
                                    <li>It should be assigned to the variable <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">app</code> and this one must be exported</li>
                                    <li>HTTP server should listen on port 1245</li>
                                    <li>Displays <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Hello Holberton School!</code> in the page body for any endpoint as plain text</li>
                                </ul>
                                <p>In terminal 1:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node 4-http.js
...
</code></pre>
                                <p>In terminal 2:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">4-http.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">5. Create a more complex HTTP server using Node&apos;s HTTP module</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>In a file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-http.js</code>, create a small HTTP server using the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">http</code> module:</p>
                                <ul>
                                    <li>It should be assigned to the variable app and this one must be exported</li>
                                    <li>HTTP server should listen on port 1245</li>
                                    <li>It should return plain text</li>
                                    <li>When the URL path is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/</code>, it should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Hello Holberton School!</code> in the page body</li>
                                    <li>When the URL path is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/students</code>, it should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">This is the list of our students</code> followed by the same content as the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
                                    <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
                                </ul>
                                <p>Terminal 1:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node 5-http.js database.csv
...
</code></pre>
                                <p>In terminal 2:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">5-http.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">6. Create a small HTTP server using Express</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>Install Express and in a file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-http_express.js</code>, create a small HTTP server using Express module:</p>
                                <ul>
                                    <li>It should be assigned to the variable <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">app</code> and this one must be exported</li>
                                    <li>HTTP server should listen on port 1245</li>
                                    <li>Displays <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Hello Holberton School!</code> in the page body for the endpoint <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/</code></li>
                                </ul>
                                <p>In terminal 1:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node 6-http_express.js
...
</code></pre>
                                <p>In terminal 2:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo &quot;&quot;
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /lskdlskd&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt; 
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">6-http_express.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">7. Create a more complex HTTP server using Express</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>In a file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-http_express.js</code>, recreate the small HTTP server using <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Express</code>:</p>
                                <ul>
                                    <li>It should be assigned to the variable app and this one must be exported</li>
                                    <li>HTTP server should listen on port 1245</li>
                                    <li>It should return plain text</li>
                                    <li>When the URL path is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/</code>, it should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Hello Holberton School!</code> in the page body</li>
                                    <li>When the URL path is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/students</code>, it should display <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">This is the list of our students</code> followed by the same content as the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as argument of the file</li>
                                    <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
                                </ul>
                                <p>Terminal 1:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ node 7-http_express.js database.csv
...
</code></pre>
                                <p>In terminal 2:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
</code></pre>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">7-http_express.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);">
                            <div style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);">
                                <h3 style="color: rgb(51, 51, 51);font-size: 16px;">8. Organize a complex HTTP server using Express</h3>
                                <div><strong><span style="text-align: center;color: rgb(255, 255, 255);background-color: rgb(152, 163, 174);font-size: 10.5px;">mandatory</span></strong></div>
                            </div>
                            <div>
                                <p>Obviously writing every part of a server within a single file is not sustainable. Let&rsquo;s create a full server in a directory named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server</code>.</p>
                                <p>Since you have used ES6 and Babel in the past projects, let&rsquo;s use <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">babel-node</code> to allow to use ES6 functions like <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">import</code> or <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">export</code>.</p>
                                <h4 style="color: inherit;font-size: 18px;">8.1 Organize the structure of the server</h4>
                                <ul>
                                    <li>Create 2 directories within:<ul>
                                            <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">controllers</code></li>
                                            <li><code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">routes</code></li>
                                        </ul>
                                    </li>
                                    <li>Create a file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/utils.js</code>, in the file create a function named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">readDatabase</code>that accepts a file path as argument:<ul>
                                            <li>It should read the database asynchronously</li>
                                            <li>It should return a promise</li>
                                            <li>When the file is not accessible, it should reject the promise with the error</li>
                                            <li>When the file can be read, it should return an object of arrays of the firstname of students per fields</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h4 style="color: inherit;font-size: 18px;">8.2 Write the App controller</h4>
                                <p>Inside the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/controllers/AppController.js</code>:</p>
                                <ul>
                                    <li>Create a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">AppController</code>. Add a static method named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getHomepage</code></li>
                                    <li>The method accepts <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">request</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">response</code> as argument. It returns a 200 status and the message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Hello Holberton School!</code></li>
                                </ul>
                                <h4 style="color: inherit;font-size: 18px;">8.3 Write the Students controller</h4>
                                <p>Inside the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/controllers/StudentsController.js</code>, create a class named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">StudentsController</code>. Add two static methods:</p>
                                <p>The first one is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getAllStudents</code>:</p>
                                <ul>
                                    <li>The method accepts <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">request</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">response</code> as argument</li>
                                    <li>It should return a status 200</li>
                                    <li>It calls the function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">readDatabase</code> from the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils</code>file, and display in the page:<ul>
                                            <li>First line: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">This is the list of our students</code></li>
                                            <li>And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</code></li>
                                        </ul>
                                    </li>
                                    <li>If the database is not available, it should return a status 500 and the error message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Cannot load the database</code></li>
                                </ul>
                                <p>The second one is <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getAllStudentsByMajor</code>:</p>
                                <ul>
                                    <li>The method accepts <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">request</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">response</code> as argument</li>
                                    <li>It should return a status 200</li>
                                    <li>It uses a parameter that the user can pass to the browser <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">major</code>. The <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">major</code> can only be <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">CS</code> or <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">SWE</code>. If the user is passing another parameter, the server should return a 500 and the error <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Major parameter must be CS or SWE</code></li>
                                    <li>It calls the function <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">readDatabase</code> from the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">utils</code> file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">List: LIST_OF_FIRSTNAMES_IN_THE_FIELD</code></li>
                                    <li>If the database is not available, it should return a status 500 and the error message <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">Cannot load the database</code></li>
                                </ul>
                                <h4 style="color: inherit;font-size: 18px;">8.4 Write the routes</h4>
                                <p>Inside the file <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/routes/index.js</code>:</p>
                                <ul>
                                    <li>Link the route <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/</code> to the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">AppController</code></li>
                                    <li>Link the route <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/students</code> and <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">/students/:major</code>to the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">StudentsController</code></li>
                                </ul>
                                <h4 style="color: inherit;font-size: 18px;">8.5 Write the server reusing everything you created</h4>
                                <p>Inside the file named <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/server.js</code>, create a small Express server:</p>
                                <ul>
                                    <li>It should use the routes defined in <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/routes/index.js</code></li>
                                    <li>It should use the port <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">1245</code></li>
                                </ul>
                                <h4 style="color: inherit;font-size: 18px;">8.6 Update <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 16.2px;">package.json</code> (if you are running it from outside the folder <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 16.2px;">full_server</code>)</h4>
                                <p>If you are starting node from outside of the folder <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server</code>, you will have to update the command <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">dev</code> by: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv</code></p>
                                <p><strong><strong>Warning:</strong></strong></p>
                                <ul>
                                    <li>Don&rsquo;t forget to export your express app at the end of <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">server.js</code> (<code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">export default app;</code>)</li>
                                    <li>The database filename is passed as argument of the <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">server.js</code> BUT, for testing purpose, you should retrieve this filename at the execution (when <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getAllStudents</code> or <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">getAllStudentsByMajor</code> are called for example)</li>
                                </ul>
                                <p>In terminal 1:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ npm run dev
...
</code></pre>
                                <p>In terminal 2:</p>
                                <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);"><code style="color: inherit;font-size: inherit;">bob@dylan:~$ curl localhost:1245 &amp;&amp; echo &quot;&quot;
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo &quot;&quot;
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE &amp;&amp; echo &quot;&quot;
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv &amp;&amp; echo &quot;&quot;
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
&gt; GET /students/SWES HTTP/1.1
&gt; Host: localhost:1245
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 500 Internal Server Error
&lt; X-Powered-By: Express
&lt; Date: Mon, 06 Jul 2020 03:29:00 GMT
&lt; Connection: keep-alive
&lt; Content-Length: 33
&lt;
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
</code></pre>
                                <p>If you want to add test to validate your integration, you will need to add this file: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">.babelrc</code></p>
                                <details>
                                    <summary>Click to show/hide file contents</summary>
                                    <pre style="color: rgb(51, 51, 51);background-color: rgb(245, 245, 245);font-size: 13px;border: 1px solid rgb(204, 204, 204);">
</pre>
                                </details>
                                <p><br></p>
                            </div>
                            <div>
                                <div style="color: rgb(255, 255, 255);background-color: rgb(255, 255, 255);">
                                    <p><strong><strong>Repo:</strong></strong></p>
                                    <ul>
                                        <li>GitHub repository: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">alx-backend-javascript</code></li>
                                        <li>Directory: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">0x05-Node_JS_basic</code></li>
                                        <li>File: <code style="color: rgb(199, 37, 78);background-color: rgb(249, 242, 244);font-size: 12.6px;">full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js</code></li>
                                    </ul>
                                </div>
                            </div>
                            <div style="color: rgb(245, 245, 245);background-color: rgb(245, 245, 245);border-top: 0px solid rgb(221, 221, 221);">
                                <div>
                                    <div><button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">&nbsp;Done?</button> <button style="text-align: center;color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);font-size: 12px;border: 1px solid rgb(204, 204, 204);">Get a sandbox</button></div>
                                    <div style="font-size: 1.5rem !important;"><br></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>