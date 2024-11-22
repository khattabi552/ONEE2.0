CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50),
    Password VARCHAR(255)
);

CREATE TABLE Bills (
    BillID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Amount DECIMAL(10, 2),
    DueDate DATE,
    Paid BOOLEAN,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Conservation (
    ConservationID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100),
    Content TEXT
);
