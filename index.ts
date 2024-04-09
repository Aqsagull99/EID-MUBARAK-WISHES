#! /usr/bin/env node
import chalk from 'chalk';

// Function to clear the console
function clearConsole() {
    process.stdout.write('\x1B[2J\x1B[0f');
}

// Function to display animated "EID MUBARAK" text with rainbow color animation
function displayAnimatedEidMubarak() {
    clearConsole(); // Clear the console

    const text = 'EID MUBARAK';
    const frames = 30; // Number of frames for the animation
    const delay = 100; // Delay between frames (in milliseconds)
    const rainbowColors = [
        chalk.hex('#FF0000'), // Red
        chalk.hex('#FF7F00'), // Orange
        chalk.hex('#FFFF00'), // Yellow
        chalk.hex('#00FF00'), // Green
        chalk.hex('#0000FF'), // Blue
        chalk.hex('#4B0082'), // Indigo
        chalk.hex('#9400D3')  // Violet
    ];

    let currentFrame = 0;

    // Function to display the animated text frame
    function displayFrame() {
        clearConsole(); // Clear the console for smooth animation

        // Calculate color index based on current frame
        const colorIndex = currentFrame % rainbowColors.length;
        const currentColor = rainbowColors[colorIndex];

        // Generate the text with current color
        const animatedText = currentColor(text);

        console.log(animatedText); // Display the animated text

        // Increment frame counter
        currentFrame++;

        // Schedule next frame or stop animation
        if (currentFrame < frames) {
            setTimeout(displayFrame, delay); // Schedule next frame
        } else {
            // Animation complete
            console.log(chalk.bold.green('\nEid Mubarak! 🌙🕌\n')); // Display Eid Mubarak message
        }
    }

    // Start the animation
    displayFrame();
}

// Call function to start animated "EID MUBARAK" text with rainbow color animation
displayAnimatedEidMubarak();


