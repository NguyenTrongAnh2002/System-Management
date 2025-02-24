
// thiết lập ô check-box all
document.getElementById("checkAll").addEventListener("change", function () {
    let checkboxes = document.querySelectorAll(".checkItem");
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});

// thiết lập background cho trạng thái dowload
document.querySelectorAll(".status-dowload span").forEach(span => {
    if (span.textContent.trim() === "Dowloaded") {
        span.classList.add("bg-color-dowloadStatus");
    }
});

// thiết lập background cho trạng thái tracking
document.querySelectorAll(".status-tracking span").forEach(span => {
    if (span.textContent.trim() === "Has Tracking") {
        span.classList.add("bg-color-trackingStatus");
    }
});

// thiết lập color cho order tracking
document.querySelectorAll("tr").forEach(row => {
    let downloadCell = row.querySelector(".status-dowload span");
    let trackingCell = row.querySelector(".status-tracking span");
    let orderCell = row.querySelector(".status-order span");

    if (downloadCell && trackingCell && orderCell) {
        if (downloadCell.textContent.trim() === "Dowloaded" && trackingCell.textContent.trim() === "Has Tracking") {
            orderCell.classList.add("bg-color-orderStatus");
        }
    }
});

// thiết lập background cho delivery status
document.querySelectorAll(".status-delivey span").forEach(span => {
    if (span.textContent.trim() === "Delivered") {
        span.classList.add("bg-color-deliveryStatus-delivered");
    }
    if (span.textContent.trim() === "Shipped") {
        span.classList.add("bg-color-deliveryStatus-shipped");
    }
    if (span.textContent.trim() === "Processing") {
        span.classList.add("bg-color-deliveryStatus-processing");
    }
});

// thiets lập ô tìm kiếm 
function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // Bỏ qua hàng tiêu đề (th)
        let text = row.textContent.toLowerCase();
        if (text.includes(input)) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
}

