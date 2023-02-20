import http from 'k6/http';
import {check, group, sleep} from 'k6';

export let options = {
    vus: 5,
    duration: '5s',
    noConnectionReuse: true,

}

export default function () {

    group("Welcome Homepage", function(){
        
        let res = http.get('https://www.extremenetworks.com')
            
            check(res, {
                "Homepage status code should be 200": res => res.status === 200,
            });
            check(res, {
                "welcome banner is present": (r) => r.body.indexOf("Another Banner Year for Extreme") !== -1,
            });
        sleep(5)

    });
   
    group("Products", function(){
        let res = http.get('https://www.extremenetworks.com/products/extremeapplications/')
            
            check(res, {
                "Products status code should be 200": res => res.status === 200,
            });
            check(res, {
                "Advance your business is present": (r) => r.body.indexOf("Advance your business and IT goals with ExtremeApplications") !== -1,
            });
        sleep(5)

    });

    group("Customers", function(){
        let res = http.get('https://www.extremenetworks.com/customers/')
            
            check(res, {
                "Customers status code should be 200": res => res.status === 200,
            });
            check(res, {
                "New Ways. Better Outcomes is present": (r) => r.body.indexOf("New Ways. Better Outcomes.") !== -1,
            });
        sleep(5)

    });

    group("Support Policies and Warranties", function(){
        let res = http.get('https://www.extremenetworks.com/support/policies')
            
            check(res, {
                "Support Policies and Warranties status code should be 200": res => res.status === 200,
            });
            check(res, {
                "Policies and Warranties is present": (r) => r.body.indexOf("Policies and Warranties") !== -1,
            });
        sleep(5)

    });

    group("Partners Find a Reseller", function(){
        let res = http.get('https://www.extremenetworks.com/partners/partner-locator')
            
            check(res, {
                "Partners Find a Reseller status code should be 200": res => res.status === 200,
            });
            check(res, {
                "Use our Locator and Get in Touch with an Extreme Networks Partner is present": (r) => r.body.indexOf("Use our Locator and Get in Touch with an Extreme Networks Partner") !== -1,
            });
        sleep(5)

        });    
    
    group("Contact Sales", function(){
        let res = http.get('https://www.extremenetworks.com/contact-sales')
            
            check(res, {
                "Contact Sales status code should be 200": res => res.status === 200,
            });
            check(res, {
                "Speak to us about creating Effortless Networking experiences is present": (r) => r.body.indexOf("Speak to us about creating Effortless Networking experiences") !== -1,
            });
        sleep(5)

    })

}  