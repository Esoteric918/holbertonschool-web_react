# 0x01 React Immutable

## 0x01.1 What is React Immutable?
    In React, using an Immutable state enables quick and cheap comparison of the state tree before and after a change. As a result, each component decides whether to re-rendered or not before performing any costly DOM operations

## 0x01.2 Why use React Immutable?
    React Immutable is a library that provides a simple API to work with immutable data structures. It is designed to be used with React and React Native. It is a wrapper around the Immutable.js library.

## 0x01.3 How to use React Immutable?
    To use React Immutable, you need to install it first. You can install it using the following command:

    npm install --save immutable

    After installing the library, you can use it in your React application. The following code snippet shows how to use React Immutable in your React application:

    Example 1: Using React Immutable in React Application

    import React from 'react';
    import { Map } from 'immutable';

    class App extends
    React.Component {
    constructor(props) {
    super(props);
    this.state = {
    map: Map({ a: 1, b: 2, c: 3 })
    };
    }

    render() {
    return (
    <div>
    <h1>React Immutable</h1>
    <p>{this.state.map.get('b')}</p>
    </div>
    );
    }
    }

    export default App;

    In the above code snippet, we have imported the Map class from the immutable library. We have also created a Map object and assigned it to the map property of the state object. We have then used the get method to get the value of the b property of the map object.

## The following task show more example of using Immutable in React
- Task 0: Converting into an Immutable object using fromJS
- Task 1: Converting into an Immutable object using Map
- Task 2: Accessing nested elements
- Task 3: List and push
- Task 4: Chained mutations
- Task 5: Merge and Concat
- Task 6: Nesded Merge
- Task 7: Equality
- Task 8: Lazy Seq
