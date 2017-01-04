// Design a class
function TestClass(/*arguments*/)
{
    // return object
    var obj = {};

    var privateField;

    function privateFunction() {}

    obj.publicField = "";

    obj.publicFunction = function() {};

    // construction logic here

    return obj;
}

//Inheritance
function TestClassSpecific(/*arguments*/)
    {
        // initial object is instance of our test class
        var obj = TestClass();

        // save reference to parent class function
        var super_publicFunction = obj.publicFunction;

        obj.publicFunction = function()
        {
            // call parent class function
            super_publicFunction();
        };

        // construction logic here

        return obj;
    }

//Protected members
function TestClass(my)
{
    var obj = {};

    my = my || {};

    my.protectedField = "";

    my.protectedFunction = function(){};

    return obj;
}

function TestClassSpecific()
{
    var my = {},
        obj = TestClass(my);

    return obj;
};
