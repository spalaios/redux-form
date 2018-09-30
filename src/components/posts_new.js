import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';
// the reduxForm is similar to connect function in react-redux
//basically reduxForm help us connect the component to communicate with the formReducer
//that we set up in the reducer index.js


/**Field is a component that does all heavy lifting of doing things like dispatching action to reducer
 *and all that.Think of it like a function libray which does all the functional aspect.But it doesn't know
 how to show itself on the screen.For that we have to pass a props called component that takes a function 
 which will return a jsx element this will act as a view for the view field.So the field will do the functional thing
 while the component will do the view part together will be a combo. 
 *
 */



class PostsNew extends Component {

    renderField(field) {
        /**the field argument is basically is an object that contains various event handlers like onChange, onFocus etc
         * it tells the Field component in the render function to keep track of the input element that we are returning from renderTitleField.
         * also if we are passing any custom props in Field componet eg: labelToDisplay we can access that props inside renderField.
         */
        return (
            <div className="form-group">
                <label>{field.labelToDisplay}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }

    onSubmit(values) {
        //the values here we have is coz the handleSubmit passed to its callbak function after successful validation
        console.log(values);
    }

    render() {
        /**
         * Redux-form is only responsible only for form field states and it's validataion
         * so rest of the work like making post request should be done by us manually
         */

         const {handleSubmit} = this.props;

         /**
          * handleSubmit is a function from redux-form this basically is injected in props when initalize reduxForm at the bottom at exports statement
          * basically it runs the redux-form side of state validation and when successfully validated and no error is found
          * it will run the callback and pass the values that we get inside validate function argument
          */

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        labelToDisplay="Post Title" 
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        labelToDisplay="Post category"
                        name="category"
                        component={this.renderField}
                    />
                    <Field
                        labelToDisplay="Post content"
                        name="content"
                        component={this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

//form validation

function validate(values) {
    //here values is the key-value of the forms fields in our case {'title':'some value given by user', 'category':'some value given by user', 'content':'some value given by user'}
    // console.log(values);

    let errors = {};

    //the concept of validation in redux is that if we are returning an empty errros object this tells the redux form that every field is valid or ok and 
    //he can submit the form. if there is any property on errors object it tells redux form there is an issues with the given propery.

    //if we have any issue with the any field in the form its corresponding name should be a property of the errors object
    //eg: let's say we have issue with title field then there should be a property on errors object named {'title': 'error message'}

    if(!values.title) {
        errors.title = 'Enter a title';
    }

    if(!values.category) {
        errors.category = 'Enter a category';
    }

    if(!values.content) {
        errors.content = 'Enter a content';
    }
   return errors;
}



export default reduxForm({
    validate,
    form: 'PostNewForm'  //this is giving a name to a form it should just be unique as we can many forms in our app so it should be unique enough to identify it
})(PostsNew);