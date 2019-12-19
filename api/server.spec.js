const request = require('supertest');

const server = require('./server');

describe("server.js",function(){
    describe("environment",function(){
       it("should set environment to testing", function(){
           expect(process.env.DB_ENV).toBe("testing");
       });
    });
});

describe("GET /api/users",function(){
    it("should return a 200 OK", function(){
        return request(server).get("/api/users")
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should return a JSON", function(){
        return request(server).get("/api/users")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return an array", function(){
        return request(server).get("/api/users")
            .then(res=>{
                expect(res.body instanceof Array).toBe(true);
            });
    });
});

