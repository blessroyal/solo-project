document.getElementById('customization-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Customization settings saved.');
});

document.getElementById('account-management-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account settings updated.');
});

document.getElementById('security-settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Security settings updated.');
});

document.getElementById('integration-preferences-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Integration preferences updated.');
});



function linkAccount() {
    const accountType = document.getElementById("account-type").value;
    const accountName = document.getElementById("account-name").value;
    const accountNumber = document.getElementById("account-number").value;

    // Display the linked account
    const accountList = document.getElementById("accounts");
    const accountItem = document.createElement("div");
    accountItem.className = "account-item";
    accountItem.innerHTML = `
        <div>
            <strong>${accountName}</strong> (${accountType})<br>
            Account Number: ${accountNumber}
        </div>
        <button class="btn btn-danger btn-sm" onclick="removeAccount(this)">Remove</button>
    `;
    accountList.appendChild(accountItem);

    // Clear the form fields
    document.getElementById("account-name").value = "";
    document.getElementById("account-number").value = "";
}

function removeAccount(button) {
    // Remove the account item
    const accountItem = button.parentElement;
    accountItem.remove();
}

function importTransactions() {
    const accountType = document.getElementById("linked-account").value;

    // Simulate fetching transactions from the selected account
    const transactions = [
        { date: '2023-06-01', description: 'Groceries', amount: 50.25 },
        { date: '2023-06-02', description: 'Gas', amount: 30.00 },
        { date: '2023-06-03', description: 'Electricity Bill', amount: 75.50 }
    ];

    // Display the imported transactions
    const transactionList = document.getElementById("transactions");
    transactionList.innerHTML = ''; // Clear previous transactions
    transactions.forEach(transaction => {
        const transactionItem = document.createElement("div");
        transactionItem.className = "transaction-item";
        transactionItem.innerHTML = `
            <div>
                <strong>${transaction.description}</strong><br>
                Date: ${transaction.date} | Amount: $${transaction.amount.toFixed(2)}
            </div>
        `;
        transactionList.appendChild(transactionItem);
    });

    // Simulate storing transactions in the database (here just log to console)
    console.log("Imported transactions from", accountType, ":", transactions);
}