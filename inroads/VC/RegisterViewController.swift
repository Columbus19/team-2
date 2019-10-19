//
//  RegisterViewController.swift
//  UIReview
//
//  Created by Rob McMahon on 5/3/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import UIKit

class RegisterViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        setupConstraints()
    }
    
    
    lazy var nameField: CustomTextField = {
        let text2 = CustomTextField(frame: CGRect(x: 0, y: 0, width: 0, height: 0))
        return text2
    }()
    
    lazy var emailField: CustomTextField = {
        let text = CustomTextField(frame: CGRect(x: 0, y: 0, width: 0, height: 0))
        return text
    }()
    
    lazy var passwordField: CustomTextField = {
        let text = CustomTextField(frame: CGRect(x: 0, y: 0, width: 0, height: 0))
        return text
    }()
    
    
    func setupConstraints() {
        self.view.addSubview(nameField)
        self.view.addSubview(emailField)
        self.view.addSubview(passwordField)
        
        self.nameField.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor, constant: 30).isActive = true
        self.nameField.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor, constant: 30).isActive = true
        self.nameField.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor, constant: 100).isActive = true
        self.nameField.heightAnchor.constraint(equalToConstant: 40).isActive = true
        
        self.emailField.leadingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.leadingAnchor, constant: 30).isActive = true
        self.emailField.trailingAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.trailingAnchor, constant: 30).isActive = true
        self.emailField.topAnchor.constraint(equalTo: self.nameField.bottomAnchor, constant: 30).isActive = true
    }

} //end class
