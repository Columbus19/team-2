//
//  ViewController.swift
//  UIReview
//
//  Created by Rob McMahon on 5/3/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func registerButtonTouched(_ sender: UIButton) {
        if let registerVC = storyboard?.instantiateViewController(withIdentifier: "RegisterVC") as? RegisterViewController {
            self.present(registerVC, animated: true, completion: nil)
        }
    }
    
}

