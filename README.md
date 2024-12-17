# API

![sketches](/docs/javascript-api.png)

## Concepts

- **Application Programming Interface (API)**:

    The set of functions/methods and variables a module exposes, along with how they work. Ie how can you call the function, what arguments it accepts, what is the shape (type) of the return value, along with how it might fail.

- **"Remote" API**:

    An API which is callable over a network/the internet. Uses a networking protocol like Hyper Text Transfer Protocol (HTTP). Recommended to use HTTP Secure (HTTPS), for message integrity, partner verification and encryption.

- **Browser/Web APIs**:

    The set of APIs supported by browsers. Defined by the World Wide Web Consortium (W3C), and implemented by the various browser vendors (Chrome, Edge, Firefox, Opera, etc). It's a competive market and some companies tries to push for new functionality, leading to variation in support across browser. Most of these are marked as experimental (ie, likely to change).

- **JavaScript (ECMAScript) Module**:

    A JavaScript file (possibly a set of files) containing functions and variables that can be used by other parts of your program.

- **Modular Programming**:

    The practice of splitting up your program in multiple parts. Done for a set of reasons.
    
      - (Main motivation) To be able to swap out various parts of a system with new versions.
      - To allow you to focus on one aspect of your program at a time.
      - To ease collaboration on a project when using Version Control Systems like Git.
      - To allow multiple companies to collaborate without strict coordination.

- **Package Manger**:

    A tool for administrating (installing, removing, updating, ++) modules for a project/system.

## Links

- [MDN Web (Browser) APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node (JavaScript) Package Manger](https://www.npmjs.com/)
- [Node](https://nodejs.org/en)
