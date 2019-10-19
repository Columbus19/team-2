//
//  BackgroundGradient.swift
//  UIReview
//
//  Created by Rob McMahon on 5/3/19.
//  Copyright © 2019 Rob McMahon. All rights reserved.
//

import UIKit

@IBDesignable //can see live changes in storyboard
class BackgroundGradient: UIView {

    @IBInspectable var firstColor: UIColor = #colorLiteral(red: 0.4274509804, green: 0.7882352941, blue: 0.6235294118, alpha: 1) {
        didSet {
            
        }
    }
    
    @IBInspectable var secondColor: UIColor = #colorLiteral(red: 0.2705882353, green: 0.8392156863, blue: 0.8196078431, alpha: 1) {
        didSet {
            
        }
    }
    
    @IBInspectable var startPoint: CGPoint = CGPoint(x: 0, y: 0) {
        didSet {
            
        }
    }
    
    @IBInspectable var endPoint : CGPoint = CGPoint(x: 0, y: 0) {
        didSet {
            
        }
    }
    
    @IBInspectable var cornerRadius : CGFloat = 0 {
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
    
    override func prepareForInterfaceBuilder() {
         setupViews()
    }
    
    
    func setupViews() {
        let gradientLayer = CAGradientLayer()
        gradientLayer.colors = [firstColor.cgColor, secondColor.cgColor]
        gradientLayer.startPoint = startPoint
        gradientLayer.endPoint = endPoint
        gradientLayer.frame = self.bounds
        self.layer.addSublayer(gradientLayer)
        self.layer.cornerRadius = cornerRadius
    }
} //end class
