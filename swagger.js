const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOption={
    definition:
    {
        openapi: "3.0.0",
        info:{
            title:"student Management API",
            version:"1.0.0",
            description:"API testing "
        },
        servers:[
            {
                url:"http://localhost:8000"
            }
        ],

    },
    apis:["./routes/student.js"]

};

const swaggerSpec=swaggerJSDoc(swaggerOption);
module.exports={swaggerUi,swaggerSpec};