const chai= require('chai');
const chaiHttp = require('chai-http')
const app  = require('../app')

// assertion style

chai.should();
var expect = chai.expect;
chai.use(chaiHttp)

describe('' , ()=>{
    describe("GET /api/articals" , ()=>{
        it('it should get all the articals' , (done) =>{
            chai.request(app)
            .get("/api/articals")
            .end((err , response)=>{
                console.log(response.body);
                expect(response).to.have.status(200);
                done();
            })
        })
    })

    describe("GET /api/artical" , ()=>{
        it('it should get all the articals' , (done) =>{
            chai.request(app)
            .get("/api/artical")
            .end((err , response)=>{
             expect(response).to.have.status(404);
             done();
            })
        })
    })
})