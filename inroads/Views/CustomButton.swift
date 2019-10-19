//
//  CustomButton.swift
//  UIReview
//
//  Created by Rob McMahon on 5/3/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import UIKit

@IBDesignable
class CustomButton: UIButton {

    @IBInspectable var cornerRadius: CGFloat = 0 {
        didSet {
            
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        setupViews()
        
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        setupViews()
    }
    
    override func prepareForInterfaceBuilder() {
        setupViews()
    }
    
    
    func setupViews() {
        self.layer.cornerRadius = cornerRadius
    }
    
} //end class
