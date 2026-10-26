// =========================================
// GET HTML ELEMENTS
// =========================================

var whiteColor = document.getElementById("whiteColor");
var blueColor = document.getElementById("blueColor");
var redColor = document.getElementById("redColor");
var greenColor = document.getElementById("greenColor");

var variant = document.getElementById("variant");

var userName = document.getElementById("name");

var shirt = document.getElementById("shirt");
var shirtShape = document.getElementById("shirtShape");
var shirtName = document.getElementById("shirtName");

var count = document.getElementById("count");
var message = document.getElementById("message");

var form = document.getElementById("myForm");
var description = document.getElementById("description");

var cartBox = document.getElementById("cartBox");
var cartMessage = document.getElementById("cartMessage");

var selectedColor = document.getElementById("selectedColor");
var selectedVariant = document.getElementById("selectedVariant");
var selectedName = document.getElementById("selectedName");

var livePreviewName = document.getElementById("livePreviewName");


// =========================================
// PREMIUM ELEMENTS
// =========================================

var premium = false;

var premiumStatus =
    document.getElementById("premiumStatus");

var premiumMessage =
    document.getElementById("premiumMessage");

var upgradeButton =
    document.getElementById("upgradeButton");

var goldButton =
    document.getElementById("goldButton");

var stitchButton =
    document.getElementById("stitchButton");

var glowButton =
    document.getElementById("glowButton");

var stitchingDetail =
    document.getElementById("stitchingDetail");


// =========================================
// PAYMENT ELEMENTS
// =========================================

var paymentOverlay =
    document.getElementById("paymentOverlay");

var closePayment =
    document.getElementById("closePayment");

var paymentForm =
    document.getElementById("paymentForm");

var paymentMessage =
    document.getElementById("paymentMessage");


// =========================================
// LOTTIE ANIMATIONS
// =========================================

var premiumLottie1 =
    document.getElementById("premiumLottie1");

var premiumLottie2 =
    document.getElementById("premiumLottie2");

var premiumLottie3 =
    document.getElementById("premiumLottie3");


// =========================================
// LOTTIE ARRAY
// =========================================

var lottieAnimations = [
    premiumLottie1,
    premiumLottie2,
    premiumLottie3
];


// =========================================
// CLEAR PREMIUM EFFECTS
// =========================================

function clearPremiumEffects() {

    shirtShape.classList.remove("glow");

    if (stitchingDetail) {
        stitchingDetail.classList.remove("active");
    }

    document.body.classList.remove("gold-theme");

    if (goldButton) {
        goldButton.textContent = "Apply";
    }

    if (stitchButton) {
        stitchButton.textContent = "Apply";
    }

    if (glowButton) {
        glowButton.textContent = "Apply";
    }

}


// =========================================
// SHOW LOTTIE ANIMATIONS
// =========================================

function showPremiumAnimations() {

    lottieAnimations.forEach(function(animation) {

        if (animation) {

            animation.style.display = "block";

            try {

                animation.play();

            }

            catch (error) {

                console.log(
                    "Lottie animation is not ready."
                );

            }

        }

    });

}


// =========================================
// HIDE LOTTIE ANIMATIONS
// =========================================

function hidePremiumAnimations() {

    lottieAnimations.forEach(function(animation) {

        if (animation) {

            animation.style.display = "none";

        }

    });

}


// =========================================
// INITIAL LOTTIE STATE
// =========================================

hidePremiumAnimations();


// =========================================
// COLOR BUTTON FUNCTION
// =========================================

function changeShirtColor(
    colorValue,
    colorName,
    activeButton
) {

    // Apply color to entire shirt.
    shirtShape.setAttribute(
        "fill",
        colorValue
    );

    shirtShape.style.fill =
        colorValue;

    // Remove premium effects.
    clearPremiumEffects();

    // Remove active color buttons.
    whiteColor.classList.remove("active");
    blueColor.classList.remove("active");
    redColor.classList.remove("active");
    greenColor.classList.remove("active");

    // Activate selected color.
    activeButton.classList.add("active");

    // Update selected color.
    selectedColor.textContent =
        colorName;

    message.textContent =
        "The entire shirt color has been changed.";

}


// =========================================
// WHITE COLOR
// =========================================

whiteColor.addEventListener(
    "click",
    function() {

        changeShirtColor(
            "#ffffff",
            "White",
            whiteColor
        );

    }
);


// =========================================
// BLUE COLOR
// =========================================

blueColor.addEventListener(
    "click",
    function() {

        changeShirtColor(
            "#2196f3",
            "Blue",
            blueColor
        );

    }
);


// =========================================
// RED COLOR
// =========================================

redColor.addEventListener(
    "click",
    function() {

        changeShirtColor(
            "#e53935",
            "Red",
            redColor
        );

    }
);


// =========================================
// GREEN COLOR
// =========================================

greenColor.addEventListener(
    "click",
    function() {

        changeShirtColor(
            "#43a047",
            "Green",
            greenColor
        );

    }
);


// =========================================
// FIT NAME INSIDE SHIRT
// =========================================

function fitNameInsideShirt() {

    var text =
        userName.value.trim();

    if (text == "") {

        shirtName.textContent =
            "Your Name";

        shirtName.setAttribute(
            "font-size",
            "20"
        );

        return;

    }


    shirtName.textContent =
        text;

    shirtName.setAttribute(
        "text-anchor",
        "middle"
    );

    shirtName.setAttribute(
        "x",
        "150"
    );


    // Start with normal size.
    var fontSize = 20;

    shirtName.setAttribute(
        "font-size",
        fontSize
    );


    // Automatically reduce the size
    // if the text becomes too wide.
    try {

        while (
            shirtName.getComputedTextLength() > 100 &&
            fontSize > 9
        ) {

            fontSize--;

            shirtName.setAttribute(
                "font-size",
                fontSize
            );

        }

    }

    catch (error) {

        if (text.length > 13) {

            fontSize = 13;

        }

        else if (text.length > 10) {

            fontSize = 15;

        }

        shirtName.setAttribute(
            "font-size",
            fontSize
        );

    }

}


// =========================================
// NAME INPUT
// =========================================

userName.addEventListener(
    "input",
    function() {

        if (userName.value.trim() == "") {

            shirtName.textContent =
                "Your Name";

            selectedName.textContent =
                "Your Name";

            livePreviewName.textContent =
                "Your Name";

        }

        else {

            shirtName.textContent =
                userName.value;

            selectedName.textContent =
                userName.value;

            livePreviewName.textContent =
                userName.value;

        }


        count.textContent =
            userName.value.length;


        // Keep the name inside the shirt.
        fitNameInsideShirt();

    }
);


// =========================================
// NAME FOCUS
// =========================================

userName.addEventListener(
    "focus",
    function() {

        message.textContent =
            "Enter your name for the shirt.";

    }
);


// =========================================
// NAME BLUR
// =========================================

userName.addEventListener(
    "blur",
    function() {

        if (userName.value.trim() == "") {

            message.textContent =
                "You can enter a custom name.";

        }

        else {

            message.textContent =
                "Name customization completed.";

        }

    }
);


// =========================================
// SHIRT POINTER ENTER
// =========================================

shirt.addEventListener(
    "mouseenter",
    function() {

        message.textContent =
            "Move your pointer around the shirt.";

    }
);


// =========================================
// SHIRT POINTER MOVE
// =========================================

shirt.addEventListener(
    "mousemove",
    function(event) {

        var rect =
            shirt.getBoundingClientRect();

        var x =
            event.clientX - rect.left;

        var y =
            event.clientY - rect.top;

        var centerX =
            rect.width / 2;

        var centerY =
            rect.height / 2;

        var rotateX =
            (y - centerY) / 18;

        var rotateY =
            (centerX - x) / 18;

        shirt.style.transform =
            "perspective(700px) " +
            "rotateX(" + rotateX + "deg) " +
            "rotateY(" + rotateY + "deg) " +
            "scale(1.03)";

        message.textContent =
            "Interactive preview: move your pointer around.";

    }
);


// =========================================
// SHIRT POINTER LEAVE
// =========================================

shirt.addEventListener(
    "mouseleave",
    function() {

        shirt.style.transform =
            "perspective(700px) " +
            "rotateX(0deg) " +
            "rotateY(0deg) " +
            "scale(1)";

        message.textContent =
            "Move your mouse over the shirt.";

    }
);


// =========================================
// VARIANT
// =========================================

variant.addEventListener(
    "change",
    function() {

        selectedVariant.textContent =
            variant.value;


        if (variant.value == "Classic") {

            shirt.style.width =
                "300px";

            shirt.style.height =
                "300px";

            message.textContent =
                "Classic T-shirt selected.";

        }


        else if (variant.value == "Oversized") {

            shirt.style.width =
                "340px";

            shirt.style.height =
                "320px";

            message.textContent =
                "Oversized T-shirt selected.";

        }


        else if (variant.value == "Sport") {

            shirt.style.width =
                "280px";

            shirt.style.height =
                "280px";

            message.textContent =
                "Sport T-shirt selected.";

        }


        // Recheck text size after variant changes.
        fitNameInsideShirt();

    }
);


// =========================================
// COPY PROTECTION
// =========================================

description.addEventListener(
    "copy",
    function(event) {

        event.preventDefault();

        alert(
            "Copying the product description is not allowed."
        );

    }
);


// =========================================
// CUT PROTECTION
// =========================================

description.addEventListener(
    "cut",
    function(event) {

        event.preventDefault();

        alert(
            "Cutting the product description is not allowed."
        );

    }
);


// =========================================
// DRAG START
// =========================================

shirt.addEventListener(
    "dragstart",
    function() {

        message.textContent =
            "Drag the shirt to the shopping cart.";

    }
);


// =========================================
// DRAG END
// =========================================

shirt.addEventListener(
    "dragend",
    function() {

        message.textContent =
            "Shirt dragging completed.";

    }
);


// =========================================
// CART DRAG OVER
// =========================================

cartBox.addEventListener(
    "dragover",
    function(event) {

        event.preventDefault();

        cartBox.style.backgroundColor =
            "#e3f2fd";

        cartBox.style.borderColor =
            "#2196f3";

        cartBox.innerHTML =
            "<div class='cartIcon'>🛒</div>" +
            "<p>Release the shirt here</p>";

    }
);


// =========================================
// CART DRAG LEAVE
// =========================================

cartBox.addEventListener(
    "dragleave",
    function() {

        cartBox.style.backgroundColor =
            "#f5fbff";

        cartBox.style.borderColor =
            "#90caf9";

    }
);


// =========================================
// CART DROP
// =========================================

cartBox.addEventListener(
    "drop",
    function(event) {

        event.preventDefault();

        cartBox.style.backgroundColor =
            "#e8f5e9";

        cartBox.style.borderColor =
            "#43a047";

        cartBox.innerHTML =
            "<div class='cartIcon'>✓</div>" +
            "<p>Shirt Added to Cart!</p>";

        cartMessage.textContent =
            "Your customized shirt has been added to the cart.";

    }
);


// =========================================
// FORM SUBMIT
// =========================================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        if (userName.value.trim() == "") {

            alert(
                "Please enter your name before submitting."
            );

            userName.focus();

            return;

        }

        alert(
            "Your shirt configuration has been submitted!"
        );

        cartMessage.textContent =
            "Configuration submitted successfully.";

    }
);


// =========================================
// RESET
// =========================================

form.addEventListener(
    "reset",
    function() {

        setTimeout(
            function() {

                // ---------------------------------
                // SHIRT COLOR
                // ---------------------------------

                shirtShape.setAttribute(
                    "fill",
                    "white"
                );

                shirtShape.style.fill =
                    "white";

                clearPremiumEffects();


                // ---------------------------------
                // COLOR BUTTONS
                // ---------------------------------

                whiteColor.classList.add("active");

                blueColor.classList.remove("active");

                redColor.classList.remove("active");

                greenColor.classList.remove("active");


                // ---------------------------------
                // PREVIEW INFORMATION
                // ---------------------------------

                selectedColor.textContent =
                    "White";

                selectedVariant.textContent =
                    "Classic";

                selectedName.textContent =
                    "Your Name";


                // ---------------------------------
                // SHIRT SIZE
                // ---------------------------------

                shirt.style.width =
                    "300px";

                shirt.style.height =
                    "300px";

                shirt.style.transform =
                    "perspective(700px) " +
                    "rotateX(0deg) " +
                    "rotateY(0deg) " +
                    "scale(1)";


                // ---------------------------------
                // NAME
                // ---------------------------------

                shirtName.textContent =
                    "Your Name";

                shirtName.setAttribute(
                    "font-size",
                    "20"
                );

                livePreviewName.textContent =
                    "Your Name";

                count.textContent =
                    "0";


                // ---------------------------------
                // MESSAGE
                // ---------------------------------

                message.textContent =
                    "The configurator has been reset.";


                // ---------------------------------
                // CART
                // ---------------------------------

                cartBox.style.backgroundColor =
                    "#f5fbff";

                cartBox.style.borderColor =
                    "#90caf9";

                cartBox.innerHTML =
                    "<div class='cartIcon'>🛒</div>" +
                    "<strong>Drop Your Shirt Here</strong>" +
                    "<p>Drag the shirt from the preview</p>";

                cartMessage.textContent =
                    "";


                // ---------------------------------
                // PREMIUM
                // ---------------------------------

                premium = false;

                premiumStatus.innerHTML =
                    "<span>Account Status</span>" +
                    "<strong>Free User</strong>";

                premiumStatus.classList.remove(
                    "premiumActive"
                );

                premiumMessage.textContent =
                    "Premium features are locked.";

                goldButton.textContent =
                    "🔒 Unlock";

                stitchButton.textContent =
                    "🔒 Unlock";

                glowButton.textContent =
                    "🔒 Unlock";


                // ---------------------------------
                // LOTTIE
                // ---------------------------------

                hidePremiumAnimations();

            },
            10
        );

    }
);


// =========================================
// PREMIUM CHECK
// =========================================

function checkPremium() {

    if (premium == false) {

        premiumMessage.textContent =
            "This feature is locked. Upgrade to Premium to use it.";

        paymentOverlay.style.display =
            "flex";

        return false;

    }

    return true;

}


// =========================================
// GOLD WEBSITE THEME
// =========================================

goldButton.addEventListener(
    "click",
    function() {

        if (checkPremium() == false) {
            return;
        }


        document.body.classList.toggle(
            "gold-theme"
        );


        if (
            document.body.classList.contains(
                "gold-theme"
            )
        ) {

            premiumMessage.textContent =
                "✨ Gold Theme applied to the website.";

            goldButton.textContent =
                "✓ Active";

        }

        else {

            premiumMessage.textContent =
                "Gold Theme removed.";

            goldButton.textContent =
                "Apply";

        }

    }
);


// =========================================
// STITCHING DETAIL
// =========================================

stitchButton.addEventListener(
    "click",
    function() {

        if (checkPremium() == false) {
            return;
        }


        if (!stitchingDetail) {
            return;
        }


        stitchingDetail.classList.toggle(
            "active"
        );


        if (
            stitchingDetail.classList.contains(
                "active"
            )
        ) {

            premiumMessage.textContent =
                "🧵 Realistic Stitching Detail applied to your shirt.";

            stitchButton.textContent =
                "✓ Active";

        }

        else {

            premiumMessage.textContent =
                "Stitching Detail removed.";

            stitchButton.textContent =
                "Apply";

        }

    }
);


// =========================================
// GLOW EFFECT
// =========================================

glowButton.addEventListener(
    "click",
    function() {

        if (checkPremium() == false) {
            return;
        }


        // Remove stitching when Glow is selected.
        // This keeps the premium effects clean.
        if (stitchingDetail) {

            stitchingDetail.classList.remove(
                "active"
            );

            stitchButton.textContent =
                "Apply";

        }


        shirtShape.classList.toggle(
            "glow"
        );


        if (
            shirtShape.classList.contains(
                "glow"
            )
        ) {

            premiumMessage.textContent =
                "✨ Soft Premium Glow applied to your shirt.";

            glowButton.textContent =
                "✓ Active";

        }

        else {

            premiumMessage.textContent =
                "Glow Effect removed.";

            glowButton.textContent =
                "Apply";

        }

    }
);


// =========================================
// UPGRADE BUTTON
// =========================================

upgradeButton.addEventListener(
    "click",
    function() {

        paymentOverlay.style.display =
            "flex";

        paymentMessage.textContent =
            "";

    }
);


// =========================================
// CLOSE PAYMENT
// =========================================

closePayment.addEventListener(
    "click",
    function() {

        paymentOverlay.style.display =
            "none";

    }
);


// =========================================
// CLOSE PAYMENT OUTSIDE
// =========================================

paymentOverlay.addEventListener(
    "click",
    function(event) {

        if (event.target === paymentOverlay) {

            paymentOverlay.style.display =
                "none";

        }

    }
);


// =========================================
// PAYMENT FORM
// =========================================

paymentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        var cardName =
            document.getElementById("cardName")
                .value
                .trim();


        var cardNumber =
            document.getElementById("cardNumber")
                .value
                .replace(/\s/g, "");


        if (
            cardName == "" ||
            cardNumber == ""
        ) {

            paymentMessage.textContent =
                "Please fill all payment fields.";

            return;

        }


        if (!/^[0-9]{16}$/.test(cardNumber)) {

            paymentMessage.textContent =
                "Card number must contain exactly 16 digits.";

            return;

        }


        paymentMessage.textContent =
            "Processing payment...";


        setTimeout(
            function() {

                premium = true;


                // ---------------------------------
                // PREMIUM STATUS
                // ---------------------------------

                premiumStatus.innerHTML =
                    "<span>Account Status</span>" +
                    "<strong>Premium User ✨</strong>";

                premiumStatus.classList.add(
                    "premiumActive"
                );


                // ---------------------------------
                // PREMIUM MESSAGE
                // ---------------------------------

                premiumMessage.textContent =
                    "Premium Studio unlocked successfully!";


                // ---------------------------------
                // BUTTONS
                // ---------------------------------

                goldButton.textContent =
                    "Apply";

                stitchButton.textContent =
                    "Apply";

                glowButton.textContent =
                    "Apply";


                // ---------------------------------
                // PAYMENT MESSAGE
                // ---------------------------------

                paymentMessage.textContent =
                    "Payment successful! Premium activated.";


                // ---------------------------------
                // LOTTIE ANIMATIONS
                // ---------------------------------

                showPremiumAnimations();


                // ---------------------------------
                // CLEAR PAYMENT FORM
                // ---------------------------------

                paymentForm.reset();


                // ---------------------------------
                // CLOSE PAYMENT
                // ---------------------------------

                setTimeout(
                    function() {

                        paymentOverlay.style.display =
                            "none";

                    },
                    1500
                );

            },
            2000
        );

    }
);