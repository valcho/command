import React from "react";
import "./App.css";
import CommandPalette from "react-command-palette";
// then import the CSS
import "../node_modules/react-command-palette/themes/chrome.css";
function sampleChromeCommand(suggestion) {
  const { name, highlight, category, shortcut } = suggestion;
  return (
    <div className="chrome-suggestion">
      <span className={`chrome-category ${category}`}>{category}</span>
      {highlight ? (
        <span dangerouslySetInnerHTML={{ __html: highlight }} />
      ) : (
        <span>{name}</span>
      )}
      <kbd className="chrome-shortcut">{shortcut}</kbd>
    </div>
  );
}

const orderCommands = [
  {
    command: () => {},
    category: "Оrder actions",
    id: 0,
    name: "Generate wayToPay.me link..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 1,
    name: "Add Order to Group..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 2,
    name: "Add to Credit Memo"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 3,
    name: "Allow shipping even not paid"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 4,
    name: "Create Related Order..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 5,
    name: "Create Replacement Order..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 6,
    name: "Disable Inventory Count"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 7,
    name: "Do not allow shipping until paid"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 8,
    name: "Dropship - Pending"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 9,
    name: "Dropship - Requested"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 10,
    name: "Email Customer"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 11,
    name: "Export Order..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 12,
    name: "Get Tax From TaxJar"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 13,
    name: "Link Item(s) to PO"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 14,
    name: "Manage Documents"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 15,
    name: "Manage Paypal Invoices"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 16,
    name: "Manage Serial Numbers"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 17,
    name: "Mark QB Exported"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 18,
    name: "Merge Same OrderItems"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 19,
    name: "Move Order to Group..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 20,
    name: "Not OK To Process"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 21,
    name: "Ok To Process"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 22,
    name: "OK To Ship"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 23,
    name: "Paypal Confirmed (Address)"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 24,
    name: "Post to TaxJar"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 25,
    name: "Print Invoice to PDF"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 26,
    name: "Print Invoice to PDF (Internal)"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 27,
    name: "Print Invoice to PDF (Order Form)"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 28,
    name: "Print Invoice to PDF (WholeSale))"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 29,
    name: "Print Product Labels"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 30,
    name: "Query/Refresh Status from D&H"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 31,
    name: "Re-Calculate Inventory"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 32,
    name: "ReCalculate Order Cost"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 33,
    name: "Receive Payment"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 34,
    name: "Re-Connect Shipping Confirmation to Order Source"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 35,
    name: "Refresh status from FBA"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 36,
    name: "Remove Order from Groups"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 37,
    name: "Sales Representative"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 38,
    name: "Save Wholesale Prices"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 39,
    name: "Set As Problem"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 40,
    name: "Set as Quote Order"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 41,
    name: "Set Cancelled Internally"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 42,
    name: "Set Completed"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 43,
    name: "Set Confirmed"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 44,
    name: "Set Delivered"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 45,
    name: "Set Final Sale"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 46,
    name: "Set Invoice Printed"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 47,
    name: "Set On Hold"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 48,
    name: "Set Payment Pending"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 49,
    name: "Set Pre-ship Confirm"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 50,
    name: "Set Rush Order"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 51,
    name: "Ship via D&H"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 52,
    name: "Ship via DropShipper"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 53,
    name: "Ship via FBA"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 54,
    name: "Ship via Ingram Micro"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 55,
    name: "Ship via Innotrac"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 56,
    name: "Ship via Partner"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 57,
    name: "Ship via TechData"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 58,
    name: "Shipping Packages"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 59,
    name: "Split Order"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 60,
    name: "Update Customer Service Status..."
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 61,
    name: "Update Shipped Verified Status"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 62,
    name: "Verify Shipping Address"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 63,
    name: "View Action Documents"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 64,
    name: "View Order Transactions"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 65,
    name: "View Products in Manage Inventory"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 66,
    name: "Waiting To Process"
  },
  {
    command: () => {},
    category: "Оrder actions",
    id: 67,
    name: "Waiting To Ship",
    shortcut: "ctrl + k"
  }
];

const mainMenuCommands = [
  {
    command: () => {},
    category: "Catalog",
    id: 0,
    name: "Manage Catalog"
  },
  {
    command: () => {},
    category: "Catalog",
    id: 1,
    name: "Add New Product"
  },
  {
    command: () => {},
    category: "Catalog",
    id: 2,
    name: "Product Types"
  },
  {
    command: () => {},
    category: "Catalog",
    id: 3,
    name: "Channel Restricted Products"
  },
  {
    command: () => {},
    category: "Catalog",
    id: 4,
    name: "Proudct Groups"
  },
  {
    command: () => {},
    category: "Catalog > Tools",
    id: 5,
    name: "Import Product Info"
  },
  {
    command: () => {},
    category: "Catalog > Tools",
    id: 6,
    name: "Disconnected Inventory"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 7,
    name: "Manage Inventory"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 8,
    name: "FBA InbountShipments"
  },
  {
    command: () => {},
    category: "Inventory > FBA",
    id: 9,
    name: "Manage FBA Shipments"
  },
  {
    command: () => {},
    category: "Inventory > FBA",
    id: 10,
    name: "Create New FBA Inbount Shipments"
  },
  {
    command: () => {},
    category: "Inventory > FBA",
    id: 11,
    name: "Import FBA Inbound Shipment"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 13,
    name: "Manage Picklists"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 12,
    name: "Product Groups"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 14,
    name: "Warehouses"
  },
  {
    command: () => {},
    category: "Inventory",
    id: 15,
    name: "Inventory Arrivals"
  },
  {
    command: () => {},
    category: "Inventory > Tools",
    id: 16,
    name: "Import Inventory Info"
  },
  {
    command: () => {},
    category: "Inventory > Tools",
    id: 17,
    name: "Warehouse Inventory Transfer"
  },
  {
    command: () => {},
    category: "Orders",
    id: 18,
    name: "Manage Orders"
  },
  {
    command: () => {},
    category: "Orders",
    id: 19,
    name: "Create New Order"
  },
  {
    command: () => {},
    category: "Orders",
    id: 20,
    name: "Order Groups"
  },
  {
    command: () => {},
    category: "Orders",
    id: 21,
    name: "Manage RMA"
  },
  {
    command: () => {},
    category: "Orders",
    id: 22,
    name: "Manage Picklists"
  },
  {
    command: () => {},
    category: "Orders > Tools",
    id: 23,
    name: "Import Order Info"
  },
  {
    command: () => {},
    category: "Purchasing",
    id: 24,
    name: "Manage POs"
  },
  {
    command: () => {},
    category: "Purchasing",
    id: 25,
    name: "Create New Purchase Order"
  },
  {
    command: () => {},
    category: "Purchasing",
    id: 26,
    name: "Predictive Purchasing"
  },
  {
    command: () => {},
    category: "Purchasing",
    id: 27,
    name: "Predictive FBA Restocking"
  },
  {
    command: () => {},
    category: "Purchasing > Vendors",
    id: 28,
    name: "Manage Vendors"
  },
  {
    command: () => {},
    category: "Purchasing > Vendors",
    id: 29,
    name: "Create New Vendor"
  },
  {
    command: () => {},
    category: "Purchasing > Vendors",
    id: 30,
    name: "Vendor Defaults"
  },
  {
    command: () => {},
    category: "Purchasing > Tools",
    id: 31,
    name: "Import Purchase Info"
  },
  {
    command: () => {},
    category: "Customers",
    id: 32,
    name: "Manage Customers"
  },
  {
    command: () => {},
    category: "Customers",
    id: 33,
    name: "Customers Groups"
  },
  {
    command: () => {},
    category: "Customers > Tools",
    id: 34,
    name: "Import Customers"
  },
  {
    command: () => {},
    category: "Queued Jobs",
    id: 35,
    name: "Queued Jobs"
  },
  {
    command: () => {},
    category: "Reports",
    id: 36,
    name: "Reports"
  },
  {
    command: () => {},
    category: "Settings",
    id: 37,
    name: "Settings"
  },
  {
    command: () => {},
    category: "Support",
    id: 38,
    name: "Support"
  },
  {
    command: () => {},
    category: "Support",
    id: 39,
    name: "Help"
  }
];

function App() {
  return (
    <div className="App">
      <CommandPalette
        alwaysRenderCommands
        closeOnSelect={false}
        commands={[...orderCommands, ...mainMenuCommands]}
        defaultInputValue=""
        display="modal"
        header={
          <div
            style={{
              color: "#555",
              display: "inline-block",
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "6px",
              padding: "10px 5px 10px"
            }}
          >
            <span style={{ paddingRight: "32px", fontWeight: "bold" }}>
              Search for a command
            </span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(210, 213, 213)",
                  borderRadius: "4px",
                  color: "#595959",
                  fontSize: "12px",
                  padding: "2px 4px"
                }}
              >
                ↑↓
              </kbd>{" "}
              to navigate
            </span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(210, 213, 213)",
                  borderRadius: "4px",
                  color: "#595959",
                  fontSize: "12px",
                  padding: "2px 4px"
                }}
              >
                enter
              </kbd>{" "}
              to select
            </span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(210, 213, 213)",
                  borderRadius: "4px",
                  color: "#595959",
                  fontSize: "12px",
                  padding: "2px 4px"
                }}
              >
                esc
              </kbd>{" "}
              to dismiss
            </span>
          </div>
        }
        highlightFirstSuggestion
        hotKeys="shift+/"
        maxDisplayed={10}
        onAfterOpen={function noRefCheck() {}}
        onChange={function noRefCheck() {}}
        onHighlight={function noRefCheck() {}}
        onRequestClose={function noRefCheck() {}}
        onSelect={item => alert(`You've selected: ${item.name}`)}
        options={{
          allowTypo: true,
          keys: ["name"],
          limit: 10,
          scoreFn: null,
          threshold: -Infinity
        }}
        placeholder="Type a command"
        reactModalParentSelector="body"
        resetInputOnClose={false}
        renderCommand={sampleChromeCommand}
        theme={{
          modal: "chrome-modal sellercloud-command-palette",
          overlay: "chrome-overlay",
          header: "chrome-header",
          container: "chrome-container",
          content: "chrome-content",
          containerOpen: "chrome-containerOpen",
          input: "chrome-input",
          inputOpen: "chrome-inputOpen",
          inputFocused: "chrome-inputFocused",
          spinner: "chrome-spinner",
          suggestionsContainer: "chrome-suggestionsContainer",
          suggestionsContainerOpen: "chrome-suggestionsContainerOpen",
          suggestionsList: "chrome-suggestionsList",
          suggestion: "chrome-suggestion",
          suggestionFirst: "chrome-suggestionFirst",
          suggestionHighlighted: "chrome-suggestionHighlighted",
          trigger: "chrome-trigger"
        }}
        trigger={false}
      />
    </div>
  );
}

export default App;
