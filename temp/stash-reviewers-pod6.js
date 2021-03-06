javascript: (function(e, a, g, h, f, c, b, d) {
    if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c)
    }
})(window, document, "1.3.2", function($, L) {
    var reviewerData = [{
        "id": "x14387",
        "text": "Hernan Seghetti",
        "item": {
            "name": "x14387",
            "emailAddress": "Hernan.Seghetti@wnco.com",
            "id": 21870,
            "displayName": "Hernan Seghetti",
            "active": true,
            "slug": "x14387",
            "type": "NORMAL",
            "link": {
                "url": "/users/x14387",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x14387"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/159422b25dda3dabefcc86a0af6d0b42.jpg?s=32&d=mm"
        }
    }, {
        "id": "x7942",
        "text": "Martin Rodriguez",
        "item": {
            "name": "x7942",
            "emailAddress": "Martin.Rodriguez@wnco.com",
            "id": 21,
            "displayName": "Martin Rodriguez",
            "active": true,
            "slug": "x7942",
            "type": "NORMAL",
            "link": {
                "url": "/users/x7942",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x7942"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/518901216275148aab4bd3836d6d3669.jpg?s=32&d=mm"
        }
    }, {
        "id": "x17094",
        "text": "Julio Danni",
        "item": {
            "name": "x17094",
            "emailAddress": "Julio.Danni@wnco.com",
            "id": 54074,
            "displayName": "Julio Danni",
            "active": true,
            "slug": "x17094",
            "type": "NORMAL",
            "link": {
                "url": "/users/x17094",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x17094"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/745c4e2c0157b5000a394a9e0465d9ec.jpg?s=32&d=mm"
        }
    }, {
        "id": "x16233",
        "text": "Nicolas Siandro",
        "item": {
            "name": "x16233",
            "emailAddress": "Nicolas.Siandro@wnco.com",
            "id": 64457,
            "displayName": "Nicolas Siandro",
            "active": true,
            "slug": "x16233",
            "type": "NORMAL",
            "link": {
                "url": "/users/x16233",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x16233"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/9277a06452b22e148747e86becfa60bd.jpg?s=32&d=mm"
        }
    }, {
        "id": "x20109",
        "text": "Mariano Remedi",
        "item": {
            "name": "x20109",
            "emailAddress": "Mariano.Remedi@wnco.com",
            "id": 80982,
            "displayName": "Mariano Remedi",
            "active": true,
            "slug": "x20109",
            "type": "NORMAL",
            "link": {
                "url": "/users/x20109",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x20109"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/16f0062932c5665fc8091e16bc22666d.jpg?s=32&d=mm"
        }
    }, {
        "id": "x20028",
        "text": "Ale Arce",
        "item": {
            "name": "x20028",
            "emailAddress": "Ale.Arce@wnco.com",
            "id": 80531,
            "displayName": "Ale Arce",
            "active": true,
            "slug": "x20028",
            "type": "NORMAL",
            "link": {
                "url": "/users/x20028",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x20028"
                }]
            },
            "avatarUrl": "http://www.gravatar.com/avatar/2076fba12339ef271fd9215a75a67537.jpg?s=32&d=mm"
        }
    }, {
        "id": "x210478",
        "text": "Kevin Prox",
        "item": {
            "name": "x210478",
            "emailAddress": "Kevin.Prox@wnco.com",
            "id": 90140,
            "displayName": "Kevin Prox",
            "active": true,
            "slug": "x210478",
            "type": "NORMAL",
            "link": {
                "url": "/users/x210478",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x210478"
                }]
            },
            "avatarUrl": "/users/x210478/avatar.png?s=32"
        }
    }, {
        "id": "x210579",
        "text": "Emiliano SAnti",
        "item": {
            "name": "x210579",
            "emailAddress": "Emiliano.SAnti@wnco.com",
            "id": 90695,
            "displayName": "Emiliano SAnti",
            "active": true,
            "slug": "x210579",
            "type": "NORMAL",
            "link": {
                "url": "/users/x210579",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x210579"
                }]
            },
            "avatarUrl": "/users/x210579/avatar.png?s=32"
        }
    }, {
        "id": "x212975",
        "text": "Maria Rosano",
        "item": {
            "name": "x212975",
            "emailAddress": "Maria.Rosano@wnco.com",
            "id": 96999,
            "displayName": "Maria Rosano",
            "active": true,
            "slug": "x212975",
            "type": "NORMAL",
            "link": {
                "url": "/users/x212975",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x212975"
                }]
            },
            "avatarUrl": "/users/x212975/avatar.png?s=32"
        }
    }, {
        "id": "x212491",
        "text": "Flavia Gramajo",
        "item": {
            "name": "x212491",
            "emailAddress": "Flavia.Gramajo@wnco.com",
            "id": 95478,
            "displayName": "Flavia Gramajo",
            "active": true,
            "slug": "x212491",
            "type": "NORMAL",
            "link": {
                "url": "/users/x212491",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x212491"
                }]
            },
            "avatarUrl": "/users/x212491/avatar.png?s=32"
        }
    }, {
        "id": "x212044",
        "text": "Dan Borgogno",
        "item": {
            "name": "x212044",
            "emailAddress": "Dan.Borgogno@wnco.com",
            "id": 93989,
            "displayName": "Dan Borgogno",
            "active": true,
            "slug": "x212044",
            "type": "NORMAL",
            "link": {
                "url": "/users/x212044",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x212044"
                }]
            },
            "avatarUrl": "/users/x212044/avatar.png?s=32"
        }
    }, {
        "id": "x214143",
        "text": "Pedro Russo",
        "item": {
            "name": "x214143",
            "emailAddress": "Pedro.Russo@wnco.com",
            "id": 100082,
            "displayName": "Pedro Russo",
            "active": true,
            "slug": "x214143",
            "type": "NORMAL",
            "link": {
                "url": "/users/x214143",
                "rel": "self"
            },
            "links": {
                "self": [{
                    "href": "https://stash.swacorp.com/users/x214143"
                }]
            },
            "avatarUrl": "/users/x214143/avatar.png?s=32"
        }
    }];
    var currentUserId = jQuery("#current-user").attr("data-username");
    reviewerData = $.grep(reviewerData, function(n) {
        return n.id != currentUserId;
    });
    jQuery("#s2id_reviewers").select2("data", reviewerData);
});



//[{"id": "x7942", "name": "Martin Rodriguez", "email": "Martin.Rodriguez@wnco.com"}]
