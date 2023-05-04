import { Card } from 'flowbite-react';
import React from 'react';
import DownloadPage from '../shared/DownloadPage';

const Blog = () => {
    return (
        <>
            <button className="bg-blue-500 text-white font-bold p-2 rounded-lg my-4 ms-8">
                <DownloadPage rootElementId="pdfDownload" downloadFileName="blog" />
            </button>
            <div className='grid grid-cols-2' id='pdfDownload'>
                <Card className='mb-10 w-11/12 mx-auto'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Q1. Tell us the differences between uncontrolled and controlled components?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Ans: Uncontrolled components are components that are not managed by a framework or a library. They are responsible for their own behavior and lifecycle, and they do not have a predefined way of communicating with other components. Controlled components are components that are managed by a framework or a library. They have a predefined lifecycle and behavior, and they communicate with other components through a well-defined interface. Controlled components is that they provide a standardized way of building and integrating components. They can be easily reused across different projects and are more maintainable since their behavior is well-defined and consistent. Uncontrolled components provide more flexibility and can be easier to implement in certain scenarios. They are not constrained by the conventions of a particular framework or library and can be customized to meet specific requirements.
                    </p>
                </Card>
                <Card className='mb-10 w-11/12 mx-auto'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Q2. How to validate React props using PropTypes?
                    </h5>
                    <p className="font-normal text-gray-800 dark:text-gray-400">
                        Ans: React PropTypes is a way to validate the types of props that are passed to a React component. PropTypes helps ensure that the props passed to a component are of the correct type, preventing errors and making debugging easier. here's a step-by-step guide on how to validate React props using PropTypes without a code example: Import PropTypes:
                        Import the PropTypes package from the 'prop-types' module.

                        Define the propTypes object in your component:
                        Create a propTypes object within your component class that maps each prop to its corresponding type validation.

                        Define the types of props that the component expects:
                        Specify the types of each prop that your component expects using the PropTypes package.

                        Use the props in your component:
                        Use the validated props as usual in your component.

                        Test the component:
                        Make sure to test the component with different sets of props, including incorrect types, to ensure that PropTypes validation is working properly.
                    </p>
                </Card>
                <Card className='my-10 w-11/12 mx-auto'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Q3. Tell us the difference between nodejs and express js?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Ans: Node.js and Express.js are two popular technologies used in server-side web development. While Node.js is a runtime environment for JavaScript, Express.js is a framework built on top of Node.js.Node.js allows developers to run JavaScript code on the server-side. It provides a set of libraries and tools for server-side programming, such as file I/O, networking, and child processes.Express.js provides a layer of abstraction on top of Node.js to simplify server-side web development. It provides a set of features such as routing, middleware, and templating that make it easier to build web applications.Node.js provides a low-level API that gives developers more flexibility and control over the server-side programming. It is not opinionated about how to structure or organize code.Express.js provides a high-level API that abstracts away many of the lower-level details of server-side programming. It also provides opinions about how to structure code and organize routes.Node.js provides a smaller footprint and is more lightweight than Express.js, making it suitable for simpler applications.Express.js provides a set of features such as routing, middleware, and templating that are not available in Node.js by default. This makes it easier to get started with web development.
                    </p>
                </Card>
                <Card className='my-10 w-11/12 mx-auto'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Q4. What is a custom hook, and why will you create a custom hook?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Ans:  custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks are a way to abstract away complex logic and create a separation of concerns between your components.Custom hooks start with the word "use" and follow the same rules as React's built-in hooks. This means that custom hooks can use the useState, useEffect, and other hooks that React provides.Reusability: A custom hook can be reused across multiple components, making it easier to manage and maintain your code.

                        Abstraction: By abstracting away complex logic into a custom hook, you can create a separation of concerns between your components, making your code more modular and easier to reason about.

                        Code organization: Custom hooks can help organize your code by allowing you to group related logic together in one place.

                        Testing: Custom hooks can be tested independently of the components that use them, making it easier to write comprehensive tests for your application.
                    </p>
                </Card>
            </div>
        </>
    );
};

export default Blog;