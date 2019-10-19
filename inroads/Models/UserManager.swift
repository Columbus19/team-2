//
//  UserManager.swift
//  INROADS
//
//  Created by Rob McMahon on 10/18/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import Foundation
import Firebase

class UserManager {
    
    //singleton UserManager
    static let instance = UserManager()
    init(){}
    
    var users = [User]()
    
    //creates user in database, appends user to array of users
    func createUser(name: String, email: String, type: String) {
        let newUser = User(name: name, email: email, type: type)
        //UserNetworkAdaptor.instance.createFirebaseUser(user: newUser)
        users.append(newUser)
    }
    
} //end class
