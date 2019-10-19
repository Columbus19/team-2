//
//  Button.swift
//  UIReview
//
//  Created by Rob McMahon on 9/10/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import Foundation
import UIKit

@IBDesignable class Button: UIButton {
    
    var buttonText: String?
    
    @objc public required init(buttonText: String) {
        super.init(frame: .zero)
        self.buttonText = buttonText
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
} //end class

extension Button {
    func setup() {
        self.accessibilityTraits.insert(.button)
        self.translatesAutoresizingMaskIntoConstraints = false
        self.titleLabel?.lineBreakMode = .byWordWrapping
    }
    
    override public func didMoveToSuperview() {
        if let superView = superview {
            self.leadingAnchor.constraint(equalTo: superView.safeAreaLayoutGuide.leadingAnchor, constant: 30).isActive = true
            self.trailingAnchor.constraint(equalTo: superView.safeAreaLayoutGuide.trailingAnchor, constant: 30).isActive = true
            self.heightAnchor.constraint(equalToConstant: 40).isActive = true
            self.layer.cornerRadius = 7
            self.titleLabel?.text = buttonText
        }
    }
}
