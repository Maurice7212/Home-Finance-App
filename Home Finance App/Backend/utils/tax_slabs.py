# Provincial Tax Slabs for Pakistan
TAX_SLABS = {
    "Punjab": [(600000, 0.05), (1200000, 0.1), (1800000, 0.15)],
    "Sindh": [(600000, 0.06), (1200000, 0.12), (1800000, 0.18)],
    "KPK": [(600000, 0.04), (1200000, 0.09), (1800000, 0.14)],
    "Balochistan": [(600000, 0.03), (1200000, 0.08), (1800000, 0.13)]
}

def get_tax_slab(province):
    return TAX_SLABS.get(province, TAX_SLABS["Punjab"])
