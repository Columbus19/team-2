//
//  User.swift
//  INROADS
//
//  Created by Rob McMahon on 10/18/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import Foundation
import Firebase


class User {
    var name: String
    var email: String
    var type: String
    
    
    init(name: String, email: String, type: String) {
        self.name = name
        self.email = email
        self.type = type
    }
} //end class
