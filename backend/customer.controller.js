const path=require("path")
const db = require(path.join(__dirname+'/db.config'))
const Customer = db.customers

function createCustomer(req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Bad Data"
        });
    }

    const customerObject = {
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password,
    };

    // Check if a customer with the same email already exists
    Customer.findOne({
        where: { Email: req.body.email }
    }).then(existingCustomer => {
        if (existingCustomer) {
            return res.status(409).send({
                message: "Customer already exists"
            });
        }

        // If no customer with the same email exists, create a new customer
        Customer.create(customerObject)
            .then(data => {
                res.redirect("/");
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })
    .catch(error => {
        res.status(500).send(error);
    });
}

function findAllCustomer(req, res) {
    Customer.findAll().then((data) => {
        res.status(200).send(data)
    })
}
function findCustomer(req, res) {
         let v1=req.params.id
         let v2=req.body.password

         Customer.findOne({
            where: { Email: v1 }
        }).then(existingCustomer => {
            if (existingCustomer) {
                // Customer with the provided email found
                if (existingCustomer.Password === v2) {
                    return res.status(200).send({
                        message: "Login successful"
                    });
                } else {
                    return res.status(401).send({
                        message: "Password does not match"
                    });
                }
            } else {
                return res.status(404).send({
                    message: "Customer not found"
                });
            }
        });
        
}
function updateCustomer(req, res) {

}
function deleteCustomer(req, res) {
    Customer.destroy({ where: { ProductName: req.params.id } }).then(() => {
        res.send("updated data");
    }).catch(error => {
        res.status(500).send(error);
    })
}

module.exports = { createCustomer, findAllCustomer, findCustomer, updateCustomer, deleteCustomer }