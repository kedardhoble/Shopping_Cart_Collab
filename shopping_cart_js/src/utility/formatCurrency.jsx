const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "INR",
    style: "currency"
});

export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}

