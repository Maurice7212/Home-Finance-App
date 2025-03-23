from utils.tax_slabs import get_tax_slab


def calculate_tax(income, province):
    slab = get_tax_slab(province)
    tax = 0
    for limit, rate in slab:
        if income > limit:
            tax += (income - limit) * rate
            income = limit
    return round(tax, 2)

def format_currency(amount):
    return f"PKR {amount:,.2f}"
